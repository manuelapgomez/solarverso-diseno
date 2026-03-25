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
      
      {/* 1. SECCIÓN DE SLOTS (TOP PRIORITY) - Premium Industrial Visualization */}
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
        {/* 2. IDENTIDAD DEL BUQUE - Scanning optimized */}
        <div className="ship-identity" style={{ background: 'transparent', border: 'none', padding: '0' }}>
          <span className="identity-label" style={{ 
            fontSize: '10px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            color: '#94a3b8', 
            fontWeight: 700,
            marginBottom: '4px',
            display: 'block'
          }}>Ship Identity</span>
          <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em', margin: '0 0 4px 0' }}>{ship.nombre}</h3>
          <div className="ship-bl-sm" style={{ color: '#94a3b8', fontSize: '11px', fontFamily: 'var(--font-family-monospace)', fontWeight: 500 }}>
            BL: <span style={{ color: '#64748b' }}>{ship.bl_code.toUpperCase()}</span> <span style={{color: 'var(--brand-primary)', fontWeight: '700', marginLeft: '6px', cursor: 'help'}}>+1 more</span>
          </div>
        </div>
        
        {/* 3. PROGRESO DE CARGA Y ASIGNACIÓN - Signals vs Noise */}
        <div className="progress-container" style={{ gap: '12px' }}>
          <div>
            <div className="progress-header" style={{ marginBottom: '6px' }}>
              <span style={{color: '#94a3b8', fontSize: '10px', fontWeight: 700}}>PHYSICAL CAPACITY</span>
              <span style={{color: '#10b981', fontSize: '11px', fontWeight: 800}}>100% READY</span>
            </div>
            <div className="progress-bar-bg" style={{ height: '4px', background: '#f1f5f9' }}>
              <div className="progress-bar-fill" style={{ width: '100%', background: 'linear-gradient(90deg, #10b981, #34d399)' }}></div>
            </div>
          </div>
          
          <div>
            <div className="progress-header" style={{ marginBottom: '6px' }}>
              <span style={{color: '#94a3b8', fontSize: '10px', fontWeight: 700}}>DESTINATION ASSIGNMENT</span>
              <span style={{color: 'var(--brand-primary)', fontSize: '11px', fontWeight: 800}}>{capacityPercent}%</span>
            </div>
            <div className="progress-bar-bg" style={{ height: '4px', background: '#f1f5f9' }}>
              <div className="progress-bar-fill" style={{ 
                width: `${capacityPercent}%`, 
                background: 'linear-gradient(90deg, #1d99cc, #60a5fa)',
                boxShadow: isActive ? '0 0 12px rgba(29, 153, 204, 0.4)' : 'none'
              }}></div>
            </div>
          </div>
        </div>

        {/* 4. METADATA GRID - High hierarchy for ETA */}
        <div className="ship-meta-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', marginTop: '8px' }}>
          <div className="meta-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              ETA Arrival
            </div>
            <span style={{color: '#1e293b', fontWeight: 800, fontSize: '15px'}}>{ship.eta}</span>
          </div>
          <div className="meta-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
               Units
            </div>
            <span style={{color: '#1e293b', fontWeight: 800, fontSize: '15px'}}>{equipmentCount}</span>
          </div>
        </div>

        {/* 5. LOCATIONS & CAPACITY - Secondary disclosure */}
        <div className="capacity-section" style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', marginTop: 'auto' }}>
          <div className="meta-locations" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#64748b', fontWeight: 500 }}>
              <span style={{ opacity: 0.5 }}>Origin</span>
              <span style={{ color: '#1e293b', fontWeight: 600 }}>Shanghai, CN</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#64748b', fontWeight: 500 }}>
              <span style={{ opacity: 0.5 }}>Dest</span>
              <span style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>Barranquilla, CO</span>
            </div>
          </div>
          
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
             <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>{minigranjasCount} minigranjas asignadas</span>
             <span style={{ 
               fontSize: '10px', 
               color: availableSlots > 0 ? 'var(--brand-primary)' : '#94a3b8', 
               fontWeight: 800,
               background: availableSlots > 0 ? '#eff6ff' : '#f1f5f9',
               padding: '2px 8px',
               borderRadius: '4px'
             }}>
               {availableSlots} FREE SLOTS
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};
