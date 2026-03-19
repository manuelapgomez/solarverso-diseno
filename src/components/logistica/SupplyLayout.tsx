import React, { useState } from 'react';
import { VesselAssignmentView } from './VesselAssignmentView';
import { MaterialTrackingView } from './MaterialTrackingView';
import { SwapModal } from './SwapModal';
import { inicialBarcosData, inicialMgsHuerfanasData, type SlotCarga } from '../../data/mockLogistica';
import './logistica.css';

export const SupplyLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vessels' | 'materials'>('materials');
  
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

    const newBarcos = barcos.map(ship => {
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

  const selectedShip = swapData ? barcos.find(s => s.id === swapData.shipId) : null;

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
          <VesselAssignmentView 
            barcos={barcos}
            mgsHuerfanas={mgsHuerfanas}
            onOpenSwap={handleOpenSwap}
          />
        ) : (
          <MaterialTrackingView 
            onSwitchToVessels={() => setActiveTab('vessels')} 
            onOpenSwap={handleOpenSwap}
            barcos={barcos}
          />
        )}
      </div>

      {/* Shared SwapModal */}
      {selectedShip && (
        <SwapModal 
          isOpen={isSwapModalOpen}
          onClose={() => {
            setIsSwapModalOpen(false);
            setSwapData(null);
          }}
          ship={selectedShip}
          slot={swapData?.slot || null}
          slotIndex={swapData?.slotIndex ?? null}
          orphans={mgsHuerfanas}
          onSwap={handlePerformSwap}
        />
      )}
    </div>
  );
};
