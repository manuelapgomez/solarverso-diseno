import React from "react";
import { type Barco, type SlotCarga } from "../../data/mockLogistica";

interface ShipDetailSlideProps {
  ship: Barco | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenSwap: (slot: SlotCarga, slotIndex: number) => void;
}

export const ShipDetailSlide: React.FC<ShipDetailSlideProps> = ({ ship, onClose, onOpenSwap }) => {
  const [lastShip, setLastShip] = React.useState<Barco | null>(null);

  React.useEffect(() => {
    if (ship) {
      setLastShip(ship);
    }
  }, [ship]);

  const displayShip = ship || lastShip;

  if (!displayShip) return null;

  // Calculate filled slots based on the array

  return (
    <>
      <div className="detail-header">
        <div className="detail-title">
          <h2>{displayShip.bl_code}</h2>
          <span className="status-badge">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--brand-secondary)', display: 'inline-block' }}></span>
            On Route
          </span>
        </div>
        <button className="close-btn" onClick={onClose}>
           Close Details
        </button>
      </div>

      <div style={{ padding: '0 24px', display: 'flex', gap: '24px', borderBottom: '1px solid #e5e7eb', background: '#fff' }}>
        <div style={{ padding: '16px 0', borderBottom: '2px solid var(--brand-primary)', color: 'var(--color-text-dark)', fontWeight: '600', fontSize: '14px' }}>
          Shipping Info
        </div>
        <div style={{ padding: '16px 0', color: 'var(--color-text-medium)', fontSize: '14px' }}>Vehicle Info</div>
        <div style={{ padding: '16px 0', color: 'var(--color-text-medium)', fontSize: '14px' }}>Documents</div>
      </div>

      <div className="detail-body-scroll">
      <div className="diagram-container-large">
        <div className="vessel-capacity-header">
           <div className="vessel-title-group">
              <h3 className="vessel-subtitle">Direct Vessel Cargo</h3>
              <p className="vessel-description">Visual representation of loaded equipment and destinations.</p>
           </div>
           <div className="vessel-stat-pill">
              <span className="stat-label">Physical Load</span>
              <span className="stat-value">100% Full</span>
           </div>
        </div>

        <div className="ship-hull-graphic-expert">
          <div className="vessel-slots-deck">
            <div className="cargo-grid-large">
              {displayShip.slots.map((slot, index) => {
                const isFilled = slot.mgsAsignada !== null;

                return (
                  <div 
                    key={slot.idSlot} 
                    className={`cargo-slot-large ${isFilled ? 'filled' : 'unassigned'}`}
                    onClick={() => onOpenSwap(slot, index)}
                    title={isFilled ? `Reasignar: ${slot.tipoEquipo}` : `Asignar destino para: ${slot.tipoEquipo}`}
                  >
                    <div className="slot-top-info">
                      <span className="cargo-type-label-large">{slot.tipoEquipo}</span>
                    </div>
                    
                    {isFilled && (
                      <div className="mgs-assignment-box">
                         <span className="mgs-mini-name">{slot.nombreMgs}</span>
                      </div>
                    )}

                    {!isFilled && (
                      <div className="slot-action-indicator">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        <span>Assign</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Transit Schedule Section - NEW */}
      <div className="transit-schedule-section" style={{ padding: '24px', background: '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          Transit Schedule & Route
        </h3>
        
        <div className="transit-comparison-expert">
          <div className="transit-stop departure">
            <div className="stop-info">
              <span className="stop-label">PORT OF ORIGIN</span>
              <span className="stop-name">Shanghai, China (CNSHA)</span>
            </div>
            <div className="stop-date-pill">
              <span className="pill-type">ETD</span>
              <span className="pill-value">{displayShip.etd}</span>
            </div>
          </div>

          <div className="transit-visual-path">
            <div className="path-line-dash"></div>
            <div className="ship-indicator">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M22 17H2l2-2h16l2 2z"></path><path d="M20 15V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7"></path><path d="M12 6V2"></path></svg>
            </div>
            <span className="transit-label">~38 Days Transit</span>
          </div>

          <div className="transit-stop arrival">
            <div className="stop-info" style={{ textAlign: 'right' }}>
              <span className="stop-label">PORT OF DESTINATION</span>
              <span className="stop-name">Barranquilla, Colombia (COBAQ)</span>
            </div>
            <div className="stop-date-pill arrival">
              <span className="pill-type">ETA</span>
              <span className="pill-value">{displayShip.eta}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="detail-metrics-row">
         <div className="metric-item">
           <span className="m-label">Loading Status</span>
           <span className="m-value">100% PHYSICAL</span>
         </div>
         <div className="metric-item">
           <span className="m-label">Departure Port</span>
           <span className="m-value">Shanghai, CN</span>
         </div>
         <div className="metric-item">
           <span className="m-label">Arrival Port</span>
           <span className="m-value">Barranquilla, CO</span>
         </div>
      </div>

      {/* Product Breakdown Section - NEW EXPERT VERSION */}
      <div className="expert-breakdown-section">
        <div className="section-header-premium">
           <h3>Equipos Asignados (Packing List)</h3>
           <p>Gestión de destinos y estados de Minigranjas asociadas.</p>
        </div>
        
        <div className="grouped-equipment-container">
          {["Tracker", "Shelter", "Inversor", "Paneles", "Reconectadores"].map(categoria => {
            const slotsOfThisType = displayShip.slots.filter(s => s.tipoEquipo === categoria);
            if (slotsOfThisType.length === 0) return null;
            
            return (
              <div key={categoria} className="equipment-type-group">
                <div className="group-category-header">
                  <h4>{categoria}</h4>
                  <span className="group-count">{slotsOfThisType.length} Items</span>
                </div>
                
                <div className="mgs-detail-grid">
                  {slotsOfThisType.map((slot) => {
                    const originalIndex = displayShip.slots.indexOf(slot);
                    
                    if (slot.mgsAsignada) {
                      return (
                        <div key={slot.idSlot} className="mgs-detail-card-premium">
                          <button className="edit-btn-mini" onClick={() => onOpenSwap(slot, originalIndex)} title="Reasignar">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                          </button>
                          
                          <div className="mgs-card-main">
                             <div className="mgs-full-id">Minigranja {slot.mgsAsignada.split('-')[1]} — {slot.nombreMgs}</div>
                             <div className="mgs-location-sub">Colombia — Atlántico, Barranquilla</div>
                          </div>

                          <div className="bt-status-badge">
                             <div className="dot-green"></div>
                             <span>BT: Listo</span>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={slot.idSlot} className="mgs-disponible-card" onClick={() => onOpenSwap(slot, originalIndex)}>
                           <div className="disponible-icon">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                           </div>
                           <span className="disponible-text">Disponible</span>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
};
