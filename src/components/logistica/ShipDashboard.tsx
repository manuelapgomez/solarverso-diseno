import React, { useState } from "react";
import "./logistica.css";
import { Barco, inicialBarcosData, inicialMgsHuerfanasData, MgsHuerfana } from "../../data/mockLogistica";
import { ShipCard } from "./ShipCard";
import { ShipDetailSlide } from "./ShipDetailSlide";
import { OrphanedPanel } from "./OrphanedPanel";
import { SwapModal } from "./SwapModal";

export const ShipDashboard: React.FC = () => {
  // Estado Global falso
  const [barcos, setBarcos] = useState<Barco[]>(inicialBarcosData);
  const [huérfanas, setHuérfanas] = useState<MgsHuerfana[]>(inicialMgsHuerfanasData);
  
  // Estado de Interfaz
  const [selectedShipId, setSelectedShipId] = useState<string | null>(null);
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  
  // Estado Modal Swap
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [swapTarget, setSwapTarget] = useState<{
    shipId: string;
    equipoKey: keyof Barco["asignaciones"];
  } | null>(null);

  const selectedShip = barcos.find(b => b.id === selectedShipId) || null;

  // Manejadores
  const handleSelectShip = (id: string) => {
    setSelectedShipId(id);
    setIsSlideOpen(true);
  };

  const closeSlide = () => {
    setIsSlideOpen(false);
    setSelectedShipId(null);
  };

  const openSwapModal = (equipoKey: keyof Barco["asignaciones"]) => {
    if (!selectedShipId) return;
    setSwapTarget({ shipId: selectedShipId, equipoKey });
    setIsModalOpen(true);
  };

  const closeSwapModal = () => {
    setIsModalOpen(false);
    setSwapTarget(null);
  };

  // Lógica principal de Intercambio
  const handleSwapConfirm = (nuevaMgsId: string, nuevaMgsNombre: string) => {
    if (!swapTarget) return;

    setBarcos(prevBarcos => {
      const newBarcos = [...prevBarcos];
      const shipIndex = newBarcos.findIndex(b => b.id === swapTarget.shipId);
      
      if (shipIndex === -1) return prevBarcos;
      
      const targetShip = { ...newBarcos[shipIndex] };
      const asignaciones = { ...targetShip.asignaciones };
      const asignacionActual = asignaciones[swapTarget.equipoKey];

      // 1. Si la asignación existía, la antigua MGS pasa a ser Huérfana
      if (asignacionActual) {
        setHuérfanas(prev => [
          ...prev, 
          {
            id: asignacionActual.mgsAsignada,
            nombre: asignacionActual.nombreMgs,
            prioridadUnergy: "Media", // Por defecto cuando queda huérfana de este equipo
            equipoFaltante: swapTarget.equipoKey
          }
        ]);
      }

      // 2. Modificamos la asignación actual en el barco
      // (Asumiendo que mantenemos el mismo id de equipo físico)
      const idEquipo = asignacionActual 
        ? asignacionActual.idEquipo 
        : `EQ-${swapTarget.equipoKey.substring(0,3).toUpperCase()}-NEW`;

      asignaciones[swapTarget.equipoKey] = {
        idEquipo,
        mgsAsignada: nuevaMgsId,
        nombreMgs: nuevaMgsNombre
      };
      
      targetShip.asignaciones = asignaciones;
      newBarcos[shipIndex] = targetShip;

      return newBarcos;
    });

    // 3. Removemos la MGS destino del pool de Huérfanas de ese equipo
    setHuérfanas(prev => prev.filter(h => h.id !== nuevaMgsId));

    closeSwapModal();
  };

  return (
    <div className="logistica-container">
      <header className="logistica-header">
        <h1>Suministro: Asignación en Tránsito (Cero Backend)</h1>
      </header>
      
      <OrphanedPanel orphans={huérfanas} />

      <div className="logistica-content">
        <main className="ships-grid-container">
          {barcos.map(ship => (
            <ShipCard 
              key={ship.id} 
              ship={ship} 
              isActive={selectedShipId === ship.id}
              onClick={() => handleSelectShip(ship.id)}
            />
          ))}
        </main>

        <ShipDetailSlide 
          ship={selectedShip}
          isOpen={isSlideOpen}
          onClose={closeSlide}
          onOpenSwap={openSwapModal}
        />
      </div>

      {swapTarget && selectedShip && (
        <SwapModal 
          isOpen={isModalOpen}
          onClose={closeSwapModal}
          ship={selectedShip}
          equipoKey={swapTarget.equipoKey}
          currentAssignment={selectedShip.asignaciones[swapTarget.equipoKey]}
          orphans={huérfanas}
          onSwap={handleSwapConfirm}
        />
      )}
    </div>
  );
};
