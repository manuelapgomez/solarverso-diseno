import React from "react";
import { type Barco, type SlotCarga } from "../../data/mockLogistica";

interface ShipDetailSlideProps {
  ship: Barco | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenSwap: (slot: SlotCarga, slotIndex: number) => void;
}

export const ShipDetailSlide: React.FC<ShipDetailSlideProps> = ({ ship, isOpen, onClose, onOpenSwap }) => {
  const [lastShip, setLastShip] = React.useState<Barco | null>(null);

  React.useEffect(() => {
    if (ship) {
      setLastShip(ship);
    }
  }, [ship]);

  const displayShip = ship || lastShip;

  if (!displayShip) return null;

  // Calculate filled slots based on the array
  const filledSlotsCount = displayShip.slots.filter(s => s.mgsAsignada !== null).length;
  const totalSlots = displayShip.slots.length;
  const capacityPercent = totalSlots > 0 ? Math.round((filledSlotsCount / totalSlots) * 100) : 0;

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
      <div className="diagram-container">
        
        <div style={{ width: '100%', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
             <h3 style={{ margin: 0, fontSize: '16px', color: 'var(--color-text-dark)' }}>Current Vessel Capacity</h3>
             <span style={{ fontSize: '32px', fontWeight: '700', color: 'var(--brand-primary)', lineHeight: '1' }}>{capacityPercent}%</span>
        </div>

        <div className="ship-hull-graphic">
          <div className="cargo-grid">
            {displayShip.slots.map((slot, index) => {
              const isFilled = slot.mgsAsignada !== null;

              return (
                <div 
                  key={slot.idSlot} 
                  className={`cargo-slot ${isFilled ? 'filled' : ''}`}
                  onClick={() => onOpenSwap(slot, index)}
                  title={isFilled ? `Reubicar contenedor de ${slot.tipoEquipo}` : `Asignar Minigranja a Slot Vacío`}
                >
                  <span className="cargo-type-label">{slot.tipoEquipo || 'SLOT'}</span>
                  
                  {isFilled ? (
                    <span className="cargo-mgs-name" title={slot.nombreMgs!}>{slot.nombreMgs}</span>
                  ) : (
                    <svg className="slot-add-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  )}

                  {/* Overlay Action on Hover */}
                  <div className="cargo-edit-overlay">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    <span style={{fontSize: '9px'}}>{isFilled ? "Reubicar" : "Llenar"}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Route & Metricas Inferiores */}
      <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb' }}>
          <span style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-text-dark)' }}>Route</span>
          <div style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
              <span style={{ color: 'var(--color-text-dark)', fontWeight: '600' }}>01:38:47</span>
              <span style={{ color: 'var(--color-text-disabled)' }}>{displayShip.eta} left</span>
          </div>
          <button style={{ border: '1px solid #ef4444', color: '#ef4444', background: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '500' }}>
            Change Route
          </button>
      </div>

      <div className="detail-metrics">
         <div className="metric-card">
           <div className="metric-value">{displayShip.loading_progress}%</div>
           <div className="metric-label">Loading</div>
         </div>
         <div className="metric-card">
           <div className="metric-value">{filledSlotsCount}/{totalSlots}</div>
           <div className="metric-label">Slots Used</div>
         </div>
         <div className="metric-card">
           <div className="metric-value">45K</div>
           <div className="metric-label">Tons Weight</div>
         </div>
         <div className="metric-card">
           <div className="metric-value">Pending</div>
           <div className="metric-label">Customs</div>
         </div>
      </div>

      {/* Product Breakdown Section */}
      <div className="product-breakdown-section">
        <h3 className="section-title">Equipos Asignados (Packing List)</h3>
        
        <div className="grouped-list-container">
          {["Tracker", "Shelter", "Inversor", "Paneles Solares", "Reconectadores"].map(categoria => {
            const items = displayShip.slots.filter(s => s.mgsAsignada && s.tipoEquipo === categoria);
            
            return (
              <div key={categoria} className="product-category-group">
                <h4 className="category-subtitle">
                  {categoria} 
                  <span className="category-count">({items.length})</span>
                </h4>
                
                {items.length > 0 ? (
                  <div className="badge-grid">
                    {items.map(item => (
                      <div key={item.idSlot} className="mgs-badge">
                        <span className="mgs-badge-dot"></span>
                        {item.nombreMgs}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="empty-category-msg">No hay equipos asignados</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
};
