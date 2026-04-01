import React, { useState } from 'react';
import { VesselAssignmentView } from './VesselAssignmentView';
import { MaterialTrackingView } from './MaterialTrackingView';
import { SwapModal } from './SwapModal';
import { 
  type SlotCarga, 
  type Barco, 
  type Camion, 
  type Minigranja,
  type MgsHuerfana,
  inicialBarcosData, 
  inicialMgsHuerfanasData, 
  inicialCamionesData,
  mockPortfolios
} from '../../data/mockLogistica';
import { type FiltersState } from './SupplyFiltersBar';
import { PostPortStepper } from './PostPortStepper';
import { PortView } from './PortView';
import { TruckView } from './TruckView';
import { FieldView } from './FieldView';
import { DeclareArrivalModal } from './DeclareArrivalModal';
import { ReportIncidentModal } from './ReportIncidentModal';
import { ResumeCourseModal } from './ResumeCourseModal';
import { DispatchModal } from './DispatchModal';
import './logistica.css';

export const SupplyLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vessels' | 'materials'>('materials');
  const [activePhase, setActivePhase] = useState<'barco' | 'puerto' | 'camion' | 'campo'>('barco');
  
  // Arrival Modal State
  const [isArrivalModalOpen, setIsArrivalModalOpen] = useState(false);
  const [shipToArrive, setShipToArrive] = useState<Barco | null>(null);

  // Incident Modal State
  const [isIncidentModalOpen, setIsIncidentModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [shipForIncident, setShipForIncident] = useState<Barco | null>(null);

  // Dispatch Modal State
  const [isDispatchModalOpen, setIsDispatchModalOpen] = useState(false);
  const [dispatchSelection, setDispatchSelection] = useState<{ slot: SlotCarga; slotIndex: number; shipId: string }[]>([]);
  
  // Lifted Filter State
  const [filters, setFilters] = useState<FiltersState>({
    search: '',
    portfolio: [],
    investor: [],
    status: [],
    period: 'All',
    assigned: 'All'
  });

  // Lifted State
  const [barcos, setBarcos] = useState<Barco[]>(inicialBarcosData);
  const [mgsHuerfanas, setMgsHuerfanas] = useState<MgsHuerfana[]>(inicialMgsHuerfanasData);
  const [camiones, setCamiones] = useState<Camion[]>(inicialCamionesData);
  const [minigranjas, setMinigranjas] = useState<Minigranja[]>(mockPortfolios.flatMap(p => p.minigranjas));
  
  // Shared Modal State
  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false);
  const [swapData, setSwapData] = useState<{ slot: SlotCarga; slotIndex: number; shipId: string } | null>(null);

  const handleOpenSwap = (slot: SlotCarga, slotIndex: number, shipId: string) => {
    setSwapData({ slot, slotIndex, shipId });
    setIsSwapModalOpen(true);
  };

  const handleConfirmSwap = (slotIndex: number, nuevaMgsId: string, nuevaMgsNombre: string) => {
    if (!swapData) return;
    const { shipId } = swapData;

    setBarcos(barcos.map((ship: Barco) => {
      if (ship.id === shipId) {
        const newSlots = [...ship.slots];
        newSlots[slotIndex] = { ...newSlots[slotIndex], mgsAsignada: nuevaMgsId, nombreMgs: nuevaMgsNombre };
        return { ...ship, slots: newSlots };
      }
      return ship;
    }));

    setMgsHuerfanas(mgsHuerfanas.filter(m => m.id !== nuevaMgsId));
    setIsSwapModalOpen(false);
    setSwapData(null);
  };

  const handleOpenArrival = (ship: Barco) => {
    setShipToArrive(ship);
    setIsArrivalModalOpen(true);
  };

  const handleConfirmArrival = (shipId: string, terminal: string) => {
    setBarcos(barcos.map((ship: Barco) => 
      ship.id === shipId ? { ...ship, estado: 'Arrived', terminalArribo: terminal as any } : ship
    ));
    setIsArrivalModalOpen(false);
    setShipToArrive(null);
  };

  const handleOpenIncident = (ship: Barco) => {
    setShipForIncident(ship);
    setIsIncidentModalOpen(true);
  };

  const handleConfirmIncident = (shipId: string, newIncident: any) => {
    setBarcos(barcos.map((ship: Barco) => {
      if (ship.id === shipId) {
        const incident = {
          ...newIncident,
          id: `INC-${Date.now()}`,
          date: new Date().toISOString().split('T')[0],
          isResolved: false
        };
        const updatedIncidents = [...(ship.incidents || []), incident];
        
        // Estado Alert si hay detención activa o > 7 incidentes
        const hasDetention = updatedIncidents.some(i => i.type === 'Detention' && !i.isResolved);
        const hasTooMany = updatedIncidents.length > 7;
        const nuevoEstado = (hasDetention || hasTooMany) ? 'Alert' : 'On Route';

        return { 
          ...ship, 
          estado: nuevoEstado,
          incidents: updatedIncidents 
        };
      }
      return ship;
    }));
    setIsIncidentModalOpen(false);
    setShipForIncident(null);
  };

  const handleOpenResume = (ship: Barco) => {
    setShipForIncident(ship);
    setIsResumeModalOpen(true);
  };

  const handleConfirmResume = (shipId: string) => {
    setBarcos(barcos.map((ship: Barco) => {
      if (ship.id === shipId) {
        const resolvedIncidents = ship.incidents.map(i => 
          i.type === 'Detention' ? { ...i, isResolved: true } : i
        );
        
        // Solo quitamos el estado Alert si NO tiene más de 7 incidentes
        const hasTooMany = resolvedIncidents.length > 7;
        const nuevoEstado = hasTooMany ? 'Alert' : 'On Route';

        return { 
          ...ship, 
          estado: nuevoEstado, 
          incidents: resolvedIncidents 
        };
      }
      return ship;
    }));
    setIsResumeModalOpen(false);
    setShipForIncident(null);
  };

  const handleOpenDispatch = (selection: { slot: SlotCarga; slotIndex: number; shipId: string }[]) => {
    setDispatchSelection(selection);
    setIsDispatchModalOpen(true);
  };

  const handleConfirmDispatch = (data: {
    placa: string;
    capacidadMax: number;
    items: {
      tipo: string;
      cantidad: number;
      shipId: string;
      slotId: string;
      idMgsDestino: string;
      nombreMgsDestino: string;
      fechaEntrega: string;
    }[];
  }) => {
    // 1. Descontar de cada contenedor
    let newBarcos = [...barcos];
    data.items.forEach(item => {
      newBarcos = newBarcos.map((s: Barco) => {
        if (s.id === item.shipId) {
          const newSlots = [...s.slots];
          const slotIdx = newSlots.findIndex(sl => sl.idSlot === item.slotId);
          if (slotIdx !== -1) {
            newSlots[slotIdx] = { 
              ...newSlots[slotIdx], 
              cantidadDisponible: (newSlots[slotIdx].cantidadDisponible || 0) - item.cantidad 
            };
          }
          return { ...s, slots: newSlots };
        }
        return s;
      });
    });

    // 2. Crear el camión
    const totalCargado = data.items.reduce((acc, curr) => acc + curr.cantidad, 0);
    const newTrk: Camion = {
      id: `TRK-${String(camiones.length + 1).padStart(3, '0')}`,
      placa: data.placa,
      capacidadMax: data.capacidadMax,
      capacidadActual: totalCargado,
      estado: totalCargado >= data.capacidadMax ? 'On Route' : 'Loading',
      items: data.items
    };

    setBarcos(newBarcos);
    setCamiones([...camiones, newTrk]);
    setIsDispatchModalOpen(false);
    setDispatchSelection([]);
  };

  const handleConfirmReceipt = (truckId: string) => {
    const truck = camiones.find(c => c.id === truckId);
    if (!truck) return;

    // 1. Update truck status
    const updatedCamiones = camiones.map(c => 
      c.id === truckId ? { ...c, estado: 'Arrived' as const, fechaRecepcion: new Date().toISOString().split('T')[0] } : c
    );
    setCamiones(updatedCamiones);

    // 2. Update project progress for all destinations in the truck
    const destinationNames = new Set(truck.items.map(item => item.nombreMgsDestino));
    const updatedMgs = minigranjas.map(m => {
      if (destinationNames.has(m.nombre)) {
        // Simple mock logic: increase progress based on equipment received
        return { ...m, progreso: Math.min(100, m.progreso + 15) };
      }
      return m;
    });
    setMinigranjas(updatedMgs);
  };

  const selectedShip = swapData ? barcos.find((s: Barco) => s.id === swapData.shipId) : null;

  const renderActiveVesselContent = () => {
    switch (activePhase) {
      case 'barco':
        return (
          <VesselAssignmentView 
            barcos={barcos} 
            mgsHuerfanas={mgsHuerfanas}
            onOpenSwap={handleOpenSwap} 
            filters={filters}
            setFilters={setFilters}
            onDeclareArrival={(id) => handleOpenArrival(barcos.find(b => b.id === id)!)}
            onReportIncident={(id) => handleOpenIncident(barcos.find(b => b.id === id)!)}
            onResumeCourse={(id) => handleOpenResume(barcos.find(b => b.id === id)!)}
          />
        );
      case 'puerto':
        return <PortView barcos={barcos} onOpenDispatch={handleOpenDispatch} />;
      case 'camion':
        return <TruckView camionesProceso={camiones} />;
      case 'campo':
        return <FieldView minigranjas={minigranjas} camiones={camiones} onConfirmReceipt={handleConfirmReceipt} />;
      default:
        return null;
    }
  };

  return (
    <div className="supply-layout-container">
      <div className="logistica-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ 
            background: 'var(--brand-primary)', 
            color: 'white', 
            width: '32px', 
            height: '32px', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '18px',
            boxShadow: '0 4px 10px rgba(29, 153, 204, 0.2)'
          }}>S</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 600, color: 'var(--brand-primary)', letterSpacing: '-0.5px', lineHeight: 1.1 }}>SOLARVERSO</h1>
            <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>SUPPLY CHAIN MANAGEMENT</span>
          </div>
        </div>
      </div>

      <div className="supply-tab-switcher">
        <button 
          className={`tab-btn ${activeTab === 'materials' ? 'active' : ''}`}
          onClick={() => setActiveTab('materials')}
        >
          Suministro de Equipos
        </button>
        <button 
          className={`tab-btn ${activeTab === 'vessels' ? 'active' : ''}`}
          onClick={() => setActiveTab('vessels')}
        >
          Gestión de Embarques
        </button>
      </div>

      <div className="supply-main-content">
        {activeTab === 'materials' ? (
          <>
            <PostPortStepper activePhase={activePhase} onPhaseChange={setActivePhase} />
            {renderActiveVesselContent()}
          </>
        ) : (
          <MaterialTrackingView 
            barcos={barcos} 
            onSwitchToVessels={() => setActiveTab('materials')}
            onOpenSwap={handleOpenSwap}
            filters={filters}
            setFilters={setFilters}
          />
        )}
      </div>

      {isSwapModalOpen && swapData && (
        <SwapModal 
          isOpen={isSwapModalOpen}
          onClose={() => setIsSwapModalOpen(false)}
          slot={swapData.slot}
          slotIndex={swapData.slotIndex}
          ship={selectedShip || barcos[0]}
          orphans={mgsHuerfanas}
          onSwap={handleConfirmSwap}
        />
      )}

      {isArrivalModalOpen && shipToArrive && (
        <DeclareArrivalModal
           isOpen={isArrivalModalOpen}
           onClose={() => {
             setIsArrivalModalOpen(false);
             setShipToArrive(null);
           }}
           ship={shipToArrive}
           onConfirm={handleConfirmArrival}
        />
      )}

      {isIncidentModalOpen && shipForIncident && (
        <ReportIncidentModal
           isOpen={isIncidentModalOpen}
           onClose={() => {
             setIsIncidentModalOpen(false);
             setShipForIncident(null);
           }}
           ship={shipForIncident}
           onConfirm={handleConfirmIncident}
        />
      )}

      {isResumeModalOpen && shipForIncident && (
        <ResumeCourseModal
           isOpen={isResumeModalOpen}
           onClose={() => {
             setIsResumeModalOpen(false);
             setShipForIncident(null);
           }}
           ship={shipForIncident}
           onConfirm={handleConfirmResume}
        />
      )}

      {isDispatchModalOpen && dispatchSelection.length > 0 && (
        <DispatchModal
           isOpen={isDispatchModalOpen}
           onClose={() => {
             setIsDispatchModalOpen(false);
             setDispatchSelection([]);
           }}
           selection={dispatchSelection}
           minigranjas={minigranjas}
           onConfirm={handleConfirmDispatch}
        />
      )}
    </div>
  );
};
