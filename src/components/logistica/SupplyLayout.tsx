import React, { useState } from 'react';
import { VesselAssignmentView } from './VesselAssignmentView';
import { MaterialTrackingView } from './MaterialTrackingView';
import { SwapModal } from './SwapModal';
import { inicialBarcosData, inicialMgsHuerfanasData, type SlotCarga, type Barco } from '../../data/mockLogistica';
import { type FiltersState } from './SupplyFiltersBar';
import { PostPortStepper } from './PostPortStepper';
import { PortView } from './PortView';
import { TruckView } from './TruckView';
import { DeclareArrivalModal } from './DeclareArrivalModal';
import { ReportIncidentModal } from './ReportIncidentModal';
import { ResumeCourseModal } from './ResumeCourseModal';
import './logistica.css';

export const SupplyLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vessels' | 'materials'>('materials');
  const [activePhase, setActivePhase] = useState<'barco' | 'puerto' | 'camion' | 'campo'>('barco');
  
  // Arrival Modal State
  const [isArrivalModalOpen, setIsArrivalModalOpen] = useState(false);
  const [shipToDeclare, setShipToDeclare] = useState<Barco | null>(null);
  
  // Incident Modal States
  const [isIncidentModalOpen, setIsIncidentModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [shipForIncident, setShipForIncident] = useState<Barco | null>(null);
  
  // Lifted Filter State
  const [filters, setFilters] = useState<FiltersState>({
    search: "",
    investor: [],
    portfolio: [],
    status: [],
    period: "All",
    assigned: "All"
  });
  
  // Lifted State
  const [barcos, setBarcos] = useState(inicialBarcosData);
  const [mgsHuerfanas, setMgsHuerfanas] = useState(inicialMgsHuerfanasData);
  
  // Shared Modal State
  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false);
  const [swapData, setSwapData] = useState<{ slot: SlotCarga; slotIndex: number; shipId: string } | null>(null);

  const handleOpenSwap = (slot: SlotCarga, slotIndex: number, shipId: string) => {
    setSwapData({ slot, slotIndex, shipId });
    setIsSwapModalOpen(true);
  };

  const handlePerformSwap = (slotIndex: number, targetMgsId: string, targetMgsNombre: string, equipoRequerido: string) => {
    if (!swapData) return;
    const { shipId } = swapData;

    const newBarcos = barcos.map((ship: Barco) => {
      if (ship.id === shipId) {
        const newSlots = [...ship.slots];
        const oldSlot = newSlots[slotIndex];
        const oldMgsNombre = oldSlot.nombreMgs;
        const oldHistorial = oldSlot.historial || [];

        let updatedHistorial = [...oldHistorial];
        if (oldMgsNombre) {
          updatedHistorial.push({
            mgsNombre: oldMgsNombre,
            fecha: new Date().toLocaleDateString('es-CO'),
            motivo: "Reubicación de Equipo"
          });
        }

        // Logic check: If moving to Puerto for the first time, inyect BL code
        if (activePhase === 'puerto' && (!oldSlot.historial?.some(h => h.motivo.includes('Llegada a Puerto')))) {
           updatedHistorial.push({
             mgsNombre: "Puerto (Control Aduanero)",
             fecha: new Date().toLocaleDateString('es-CO'),
             motivo: `Llegada a Puerto - BL: ${ship.bl_code}`
           });
        }

        newSlots[slotIndex] = {
          ...oldSlot,
          mgsAsignada: targetMgsId,
          nombreMgs: targetMgsNombre,
          tipoEquipo: equipoRequerido,
          historial: updatedHistorial
        };
        return { ...ship, slots: newSlots };
      }
      return ship;
    });

    const newOrphans = mgsHuerfanas.filter(m => m.id !== targetMgsId);
    setBarcos(newBarcos);
    setMgsHuerfanas(newOrphans);
    setIsSwapModalOpen(false);
    setSwapData(null);
  };

  const handleDeclareArrival = (shipId: string) => {
    const ship = barcos.find(s => s.id === shipId);
    if (ship) {
      setShipToDeclare(ship);
      setIsArrivalModalOpen(true);
    }
  };

  const handleConfirmArrival = (shipId: string, terminal: 'Cartagena' | 'Buenaventura') => {
    const newBarcos = barcos.map((ship: Barco) => {
      if (ship.id === shipId) {
        const newSlots = ship.slots.map(slot => ({
          ...slot,
          historial: [
            ...(slot.historial || []),
            {
              mgsNombre: `${terminal} Terminal`,
              fecha: new Date().toLocaleDateString('es-CO'),
              motivo: `Llegada a Puerto - BL: ${ship.bl_code}`
            }
          ]
        }));
        return { 
          ...ship, 
          estado: 'Arrived', 
          terminalArribo: terminal,
          slots: newSlots 
        };
      }
      return ship;
    });
    setBarcos(newBarcos);
    setIsArrivalModalOpen(false);
    setShipToDeclare(null);
    setActivePhase('puerto');
  };

  const handleOpenIncident = (shipId: string) => {
    const ship = barcos.find(s => s.id === shipId);
    if (ship) {
      setShipForIncident(ship);
      setIsIncidentModalOpen(true);
    }
  };

  const handleOpenResume = (shipId: string) => {
    const ship = barcos.find(s => s.id === shipId);
    if (ship) {
      setShipForIncident(ship);
      setIsResumeModalOpen(true);
    }
  };

  const handleConfirmIncident = (shipId: string, reason: string) => {
    setBarcos(barcos.map((ship: Barco) => 
      ship.id === shipId ? { ...ship, estado: 'Alert', incidente: reason } : ship
    ));
    setIsIncidentModalOpen(false);
    setShipForIncident(null);
  };

  const handleConfirmResume = (shipId: string) => {
    setBarcos(barcos.map((ship: Barco) => 
      ship.id === shipId ? { ...ship, estado: 'On Route', incidente: undefined } : ship
    ));
    setIsResumeModalOpen(false);
    setShipForIncident(null);
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
            onDeclareArrival={handleDeclareArrival}
            onReportIncident={handleOpenIncident}
            onResumeCourse={handleOpenResume}
          />
        );
      case 'puerto':
        return <PortView barcos={barcos} onOpenSwap={handleOpenSwap} />;
      case 'camion':
        return <TruckView barcos={barcos} onOpenSwap={handleOpenSwap} />;
      case 'campo':
        return <div className="empty-state">Fase de Campo próximamente...</div>;
      default:
        return null;
    }
  };

  return (
    <div className="supply-layout-container">
      <div className="supply-tab-switcher">
        <button 
          className={`tab-btn ${activeTab === 'vessels' ? 'active' : ''}`}
          onClick={() => setActiveTab('vessels')}
        >
          Asignación en Tránsito
        </button>
        <button 
          className={`tab-btn ${activeTab === 'materials' ? 'active' : ''}`}
          onClick={() => setActiveTab('materials')}
        >
          Seguimiento de Materiales
        </button>
      </div>

      <div className="supply-view-content">
        {activeTab === 'vessels' ? (
          <div className="vessels-pipeline">
            <PostPortStepper activePhase={activePhase} onPhaseChange={setActivePhase} />
            <div className="pipeline-content-area">
              {renderActiveVesselContent()}
            </div>
          </div>
        ) : (
          <MaterialTrackingView 
            onSwitchToVessels={() => setActiveTab('vessels')} 
            onOpenSwap={handleOpenSwap}
            barcos={barcos}
            filters={filters}
            setFilters={setFilters}
          />
        )}
      </div>

      {isSwapModalOpen && swapData && selectedShip && (
        <SwapModal 
          isOpen={isSwapModalOpen}
          onClose={() => {
            setIsSwapModalOpen(false);
            setSwapData(null);
          }}
          ship={selectedShip}
          slot={swapData.slot}
          slotIndex={swapData.slotIndex}
          orphans={mgsHuerfanas}
          onSwap={handlePerformSwap}
        />
      )}

      {isArrivalModalOpen && shipToDeclare && (
        <DeclareArrivalModal 
          isOpen={isArrivalModalOpen}
          onClose={() => {
            setIsArrivalModalOpen(false);
            setShipToDeclare(null);
          }}
          ship={shipToDeclare}
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
    </div>
  );
};
