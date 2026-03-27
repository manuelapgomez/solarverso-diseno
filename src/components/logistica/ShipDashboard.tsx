import React, { useState, useMemo } from "react";
import "./logistica.css";
import { ShipCard } from "./ShipCard";
import { ShipDetailSlide } from "./ShipDetailSlide";
import { SwapModal } from "./SwapModal";
import { OrphanedPanel } from "./OrphanedPanel";
import { PortfoliosPanel } from "./PortfoliosPanel";
import { inicialBarcosData, inicialMgsHuerfanasData, mockPortfolios, type SlotCarga } from "../../data/mockLogistica";
import { SupplyFiltersBar, type FiltersState } from "./SupplyFiltersBar";

export const ShipDashboard: React.FC = () => {
  const [barcos, setBarcos] = useState(inicialBarcosData);
  const [mgsHuerfanas, setMgsHuerfanas] = useState(inicialMgsHuerfanasData);

  // Filters State
  const [filters, setFilters] = useState<FiltersState>({
    search: "",
    portfolio: "All",
    period: "All",
    assigned: "All",
    investor: "All",
    status: "All"
  });

  const [selectedShipId, setSelectedShipId] = useState<string | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false);
  const [swapData, setSwapData] = useState<{ slot: SlotCarga; slotIndex: number; shipId: string } | null>(null);

  // Deep Filtering Logic
  const filteredBarcos = useMemo(() => {
    return barcos.filter(ship => {
      // Search Box (Deep Filtering)
      const searchMatch = filters.search === "" || 
        ship.nombre.toLowerCase().includes(filters.search.toLowerCase()) ||
        ship.bl_code.toLowerCase().includes(filters.search.toLowerCase()) ||
        ship.slots.some(slot => slot.nombreMgs?.toLowerCase().includes(filters.search.toLowerCase()));

      // Portfolio Filter
      const portfolioMatch = filters.portfolio === "All" || ship.portfolio === filters.portfolio;

      // Status Filter
      const statusMatch = filters.status === "All" || ship.estado === filters.status;

      return searchMatch && portfolioMatch && statusMatch;
    });
  }, [barcos, filters]);

  const handleOpenShipDetail = (id: string) => {
    setSelectedShipId(id);
    setIsDetailOpen(true);
  };

  const handleOpenSwap = (slot: SlotCarga, slotIndex: number, shipId: string) => {
    setSwapData({ slot, slotIndex, shipId });
    setIsSwapModalOpen(true);
  };

  const handlePerformSwap = (slotIndex: number, targetMgsId: string, targetMgsNombre: string, equipoRequerido: string) => {
    if (!swapData) return;

    const { shipId } = swapData;

    // Update ships
    const newBarcos = barcos.map(ship => {
      if (ship.id === shipId) {
        const newSlots = [...ship.slots];
        
        // If there was something already there, it goes back to orphans
        const oldMgsId = newSlots[slotIndex].mgsAsignada;
        const oldMgsNombre = newSlots[slotIndex].nombreMgs;
        const oldTipo = newSlots[slotIndex].tipoEquipo || equipoRequerido;

        newSlots[slotIndex] = {
          ...newSlots[slotIndex],
          tipoEquipo: equipoRequerido,
          mgsAsignada: targetMgsId,
          nombreMgs: targetMgsNombre
        };
        
        return { ...ship, slots: newSlots };
      }
      return ship;
    });

    // Remove the new MGS from orphans
    const newOrphans = mgsHuerfanas.filter(m => m.id !== targetMgsId);
    
    // Add the old one back if it existed (Logic can be refined, but for now just replacing)

    setBarcos(newBarcos);
    setMgsHuerfanas(newOrphans);
    setIsSwapModalOpen(false);
    setSwapData(null);
  };

  const selectedShip = barcos.find(s => s.id === selectedShipId);

  return (
    <div className="logistica-container">
      <div className="dashboard-main">
        {/* Header con Títulos y Portfolios */}
        <header className="dashboard-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div className="title-wrapper">
               <svg className="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
               <h1>Suministro: Asignación en Tránsito</h1>
               <div className="title-divider"></div>
               <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>Dashboard de Logística Integral</span>
            </div>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="btn-icon-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </button>
              <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Nuevo Buque
              </button>
            </div>
          </div>

          <PortfoliosPanel portfolios={mockPortfolios} />
        </header>

        {/* Content Area */}
        <div 
          style={{ padding: '0 24px 24px 24px', display: 'flex', gap: '24px', flex: 1, overflow: 'hidden', flexDirection: 'column' }}
          onClick={() => setSelectedShipId(null)}
        >
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', overflowY: 'auto', paddingBottom: '100px' }}>
            <OrphanedPanel orphans={mgsHuerfanas} />

            <SupplyFiltersBar filters={filters} setFilters={setFilters} />

            <div className="ships-grid-container">
              {filteredBarcos.map(ship => (
                <ShipCard
                  key={ship.id}
                  ship={ship}
                  isActive={ship.id === selectedShipId}
                  onClick={() => handleOpenShipDetail(ship.id)}
                  onOpenSwap={(slot, index) => handleOpenSwap(slot, index, ship.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Lateral de Detalles */}
      <div 
        className={`detail-slide ${isDetailOpen ? 'open' : ''}`}
        onClick={() => setIsDetailOpen(false)}
      >
        <div 
          className="detail-slide-content"
          onClick={(e) => e.stopPropagation()}
        >
          {selectedShip && (
            <ShipDetailSlide 
              ship={selectedShip} 
              onClose={() => setIsDetailOpen(false)} 
              onOpenSwap={(slot, index) => handleOpenSwap(slot, index, selectedShipId!)}
              isOpen={isDetailOpen}
            />
          )}
        </div>
      </div>

      {/* Modal de Reasignación */}
      <SwapModal 
        isOpen={isSwapModalOpen}
        onClose={() => setIsSwapModalOpen(false)}
        ship={selectedShip!}
        slot={swapData?.slot || null}
        slotIndex={swapData?.slotIndex ?? null}
        orphans={mgsHuerfanas}
        onSwap={handlePerformSwap}
      />
    </div>
  );
};
