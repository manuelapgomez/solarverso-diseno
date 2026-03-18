import React from "react";
import { type Barco, type SlotCarga } from "../../data/mockLogistica";

interface ShipCardProps {
  ship: Barco;
  isActive: boolean;
  onClick: () => void;
  onOpenSwap: (slot: SlotCarga, slotIndex: number) => void;
}

export const ShipCard: React.FC<ShipCardProps> = ({ ship, isActive, onClick, onOpenSwap }) => {
  // Calculamos slots llenos
  const filledSlotsCount = ship.slots.filter(s => s.mgsAsignada !== null).length;
  const totalSlots = ship.slots.length;
  const capacityPercent = totalSlots > 0 ? Math.round((filledSlotsCount / totalSlots) * 100) : 0;
  
  const equipmentCount = filledSlotsCount * 10;
  
  // Agrupamiento de minigranjas únicas para mostrar capacidad ocupada
  const uniqueMgs = new Set(ship.slots.filter(s => s.mgsAsignada).map(s => s.mgsAsignada));
  const minigranjasCount = uniqueMgs.size;
  const availableSlots = totalSlots - filledSlotsCount;

  return (
    <div className={`ship-card ${isActive ? 'active' : ''}`} onClick={(e) => {
      e.stopPropagation();
      // Prevents trigging swap modal opening when just selecting ship
      if ((e.target as HTMLElement).closest('.cargo-slot') || (e.target as HTMLElement).closest('.mini-slot')) return;
      onClick();
    }}>
      
      {/* Título Grande Superior */}
      <div className="ship-card-main-title">
        BL: {ship.bl_code}
      </div>

      {/* Gráfico del Buque Escalado */}
      <div className="shipcard-hull-wrapper">
        <div className="ship-hull-graphic mini">
          <div className="cargo-grid mini">
            {ship.slots.map((slot, index) => {
              const isFilled = slot.mgsAsignada !== null;
              return (
                <div 
                  key={slot.idSlot} 
                  className={`cargo-slot mini-slot ${isFilled ? 'filled' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenSwap(slot, index);
                  }}
                  title={isFilled ? `Reubicar contenedor de ${slot.tipoEquipo}` : `Asignar Minigranja a Slot Vacío`}
                >
                  <span className="cargo-type-label">{slot.tipoEquipo || 'SLOT'}</span>
                  {isFilled ? (
                    <span className="cargo-mgs-name" title={slot.nombreMgs!}>{slot.nombreMgs}</span>
                  ) : (
                    <svg className="slot-add-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="ship-identity">
        <span style={{ fontSize: '10px', color: 'var(--color-text-medium)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          IDENTIDAD DEL BUQUE
        </span>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>{ship.nombre}</h3>
        </div>
        <span className="ship-bl-sm">BL: {ship.bl_code.split('-')[1]} <span style={{color: 'var(--brand-primary)'}}>+1 más</span></span>
      </div>
      
      <div className="progress-container">
        <div className="progress-header">
          <span>Progreso de Carga</span>
          <span style={{color: 'var(--brand-primary)'}}>{capacityPercent}%</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${capacityPercent}%` }}></div>
        </div>
      </div>

      <div className="ship-meta-grid">
        <div className="meta-item">
          <strong>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Llegada Est.
          </strong>
          <span style={{color: 'var(--color-text-dark)', fontWeight: '600'}}>{ship.eta}</span>
        </div>
        <div className="meta-item">
          <strong>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            Equipos
          </strong>
          <span style={{color: 'var(--color-text-dark)', fontWeight: '600'}}>{equipmentCount}</span>
        </div>
      </div>

      {/* Capacidad Ocupada Section */}
      <div className="capacity-section">
        <div className="meta-item">
          <strong>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            Capacidad ocupada
          </strong>
          <div style={{display: 'flex', gap: '12px', marginTop: '4px'}}>
             <span style={{color: 'var(--color-text-dark)', fontWeight: '700'}}>{minigranjasCount} minigranjas</span>
             <span style={{color: 'var(--color-text-dark)', fontWeight: '700'}}>{availableSlots} slots disponibles</span>
          </div>
        </div>
      </div>

      <div className="meta-locations">
        <div>📍 Shanghai, China</div>
        <div style={{color: 'var(--brand-secondary)'}}>~ Barranquilla, Colombia</div>
      </div>
      
      <div style={{ fontSize: '11px', color: 'var(--color-text-disabled)', marginTop: 'auto', borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
        2 Bill(s) of Lading
      </div>
    </div>
  );
};
