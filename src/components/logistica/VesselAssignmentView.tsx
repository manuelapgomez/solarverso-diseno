import React, { useState, useMemo } from "react";
import "./logistica.css";
import { VesselPremiumCard } from "./VesselPremiumCard";
import { ShipDetailSlide } from "./ShipDetailSlide";
import { OrphanedPanel } from "./OrphanedPanel";
import { PortfoliosPanel } from "./PortfoliosPanel";
import { mockPortfolios, type SlotCarga, type Barco, type MgsHuerfana } from "../../data/mockLogistica";
import { SupplyFiltersBar, type FiltersState } from "./SupplyFiltersBar";

interface VesselAssignmentViewProps {
  barcos: Barco[];
  mgsHuerfanas: MgsHuerfana[];
  onOpenSwap: (slot: SlotCarga, slotIndex: number, shipId: string) => void;
  filters: FiltersState;
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
}

export const VesselAssignmentView: React.FC<VesselAssignmentViewProps> = ({ 
  barcos, 
  mgsHuerfanas, 
  onOpenSwap,
  filters,
  setFilters
}) => {
  const [selectedShipId, setSelectedShipId] = useState<string | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Deep Filtering Logic
  const filteredBarcos = useMemo(() => {
    return barcos.filter(ship => {
      // Search Box (Deep Filtering)
      const searchStr = (filters.search || "").toLowerCase();
      const searchMatch = searchStr === "" || 
        String(ship.nombre || "").toLowerCase().includes(searchStr) ||
        String(ship.bl_code || "").toLowerCase().includes(searchStr) ||
        ship.slots.some(slot => String(slot.nombreMgs || "").toLowerCase().includes(searchStr));

      // Portfolio Filter (Multi-select)
      const portfolioMatch = filters.portfolio.length === 0 || filters.portfolio.includes(ship.portfolio as any);

      // Status Filter (Multi-select)
      const statusMatch = filters.status.length === 0 || filters.status.includes(ship.estado as any);

      return searchMatch && portfolioMatch && statusMatch;
    });
  }, [barcos, filters]);

  const handleOpenShipDetail = (id: string) => {
    setSelectedShipId(id);
    setIsDetailOpen(true);
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
          className="assignment-content-scrollable"
          style={{ padding: '0 12px 24px 12px', display: 'flex', gap: '24px', flex: 1, flexDirection: 'column' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '100px' }}>
            <OrphanedPanel orphans={mgsHuerfanas} />

            <SupplyFiltersBar filters={filters} setFilters={setFilters} />

            <div className="ships-grid-container" onClick={() => setSelectedShipId(null)}>
              {filteredBarcos.map(ship => (
                <VesselPremiumCard
                   key={ship.id}
                   ship={ship}
                   isActive={ship.id === selectedShipId}
                   onClick={() => handleOpenShipDetail(ship.id)}
                   onOpenSwap={(slot, index) => onOpenSwap(slot, index, ship.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Lateral de Detalles con Backdrop */}
      {isDetailOpen && (
        <div className="detail-backdrop" onClick={() => setIsDetailOpen(false)}></div>
      )}
      <div 
        className={`detail-slide ${isDetailOpen ? 'open' : ''}`}
      >
        <div 
          className="detail-slide-content"
          onClick={(e) => e.stopPropagation()}
        >
          {selectedShip && (
            <ShipDetailSlide 
              ship={selectedShip} 
              onClose={() => setIsDetailOpen(false)} 
              onOpenSwap={(slot, index) => onOpenSwap(slot, index, selectedShipId!)}
              isOpen={isDetailOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
};
