import React from "react";
import { type Barco, type SlotCarga } from "../../data/mockLogistica";

interface VesselPremiumCardProps {
  ship: Barco;
  isActive: boolean;
  onClick: () => void;
  onOpenSwap: (slot: SlotCarga, slotIndex: number) => void;
}

export const VesselPremiumCard: React.FC<VesselPremiumCardProps> = ({ ship, isActive, onClick, onOpenSwap }) => {
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
    <div className={`vessel-card-premium-v2 ${isActive ? 'active' : ''}`} onClick={(e) => {
      e.stopPropagation();
      if ((e.target as HTMLElement).closest('.cargo-slot') || (e.target as HTMLElement).closest('.mini-slot')) return;
      onClick();
    }}>
      
      {/* 1. SECCIÓN DE SLOTS (TOP PRIORITY) - Overlapping with Hull Background */}
      <div className="shipcard-hull-wrapper" style={{ order: -2 }}>
        <div className="ship-hull-graphic mini">
          <div className="cargo-grid mini">
            {ship.slots.map((slot, index) => {
              const isFilled = slot.mgsAsignada !== null;
              return (
                <div 
                  key={slot.idSlot} 
                  className={`cargo-slot mini-slot ${isFilled ? 'filled' : 'unassigned'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenSwap(slot, index);
                  }}
                  title={isFilled ? `Reasignar: ${slot.tipoEquipo}` : `Asignar destino para: ${slot.tipoEquipo}`}
                >
                  <span className="cargo-type-label">{slot.tipoEquipo}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* INFO WRAPPER FOR MORE LATERAL BREATHING ROOM */}
      <div className="vessel-details-content">
        {/* 2. IDENTIDAD DEL BUQUE (SHIP IDENTITY BOX) */}
        <div className="ship-identity">
          <span className="identity-label">Ship Identity</span>
          <h3>{ship.nombre}</h3>
          <div className="ship-bl-sm" style={{ color: '#64748b', fontSize: '12px', fontFamily: 'var(--font-family-monospace)' }}>
            BL: {ship.bl_code.toLowerCase()} <span style={{color: 'var(--brand-primary)', fontWeight: '600', marginLeft: '4px'}}>+1 more</span>
          </div>
        </div>
        
        {/* 3. PROGRESO DE CARGA (DARK SLEEK BAR) */}
        <div className="progress-container">
          <div className="progress-header" style={{ marginBottom: '8px', fontSize: '13px', fontFamily: 'var(--font-family-inter)' }}>
            <span style={{color: '#64748b', fontWeight: 600}}>Loading Progress</span>
            <span style={{color: '#1e293b', fontWeight: 700}}>{capacityPercent}%</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${capacityPercent}%` }}></div>
          </div>
        </div>

        {/* 4. METADATA GRID (ETA, EQUIPMENT) */}
        <div className="ship-meta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="meta-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6a7282', fontSize: '12px', marginBottom: '4px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              ETA
            </div>
            <span style={{color: '#1e293b', fontWeight: 600, fontSize: '14px'}}>{ship.eta}</span>
          </div>
          <div className="meta-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6a7282', fontSize: '12px', marginBottom: '4px' }}>
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
               Equipment
            </div>
            <span style={{color: '#1e293b', fontWeight: 600, fontSize: '14px'}}>{equipmentCount}</span>
          </div>
        </div>

        {/* 5. CAPACIDAD Y RUTAS */}
        <div className="capacity-section" style={{ borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6a7282', fontSize: '12px', marginBottom: '8px' }}>
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
             Capacidad ocupada
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', color: '#1e293b', fontSize: '14px', fontWeight: 600}}>
             <span>{minigranjasCount} minigranjas</span>
             <span>{availableSlots} slots disponibles</span>
          </div>
        </div>

        <div className="meta-locations" style={{ borderTop: '1px solid #f3f4f6', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{fontSize: '12px', color: '#4a5565'}}>📍 Shanghai, China</div>
          <div style={{fontSize: '12px', color: '#4a5565'}}>⤴️ Barranquilla, Colombia</div>
        </div>
        
        <div style={{ fontSize: '12px', color: '#6a7282', marginTop: 'auto', borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
          2 Bill(s) of Lading
        </div>
      </div>
    </div>
  );
};
