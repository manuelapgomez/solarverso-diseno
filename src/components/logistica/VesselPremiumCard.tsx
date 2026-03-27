import React from "react";
import { type Barco, type SlotCarga } from "../../data/mockLogistica";

interface VesselPremiumCardProps {
  ship: Barco;
  isActive: boolean;
  onClick: () => void;
  onOpenSwap: (slot: SlotCarga, slotIndex: number) => void;
  onDeclareArrival?: (shipId: string) => void;
}

export const VesselPremiumCard: React.FC<VesselPremiumCardProps> = ({ 
  ship, isActive, onClick, onOpenSwap, onDeclareArrival 
}) => {
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
      if ((e.target as HTMLElement).closest('.cargo-slot') || (e.target as HTMLElement).closest('.mini-slot') || (e.target as HTMLElement).closest('.arrival-declare-btn')) return;
      onClick();
    }}>
      
      {/* BOTÓN DE LLEGADA (TOP LEFT) */}
      {ship.estado === 'On Route' && onDeclareArrival && (
        <button 
          className="arrival-declare-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDeclareArrival(ship.id);
          }}
          title="Anunciar Llegada a Puerto"
        >
          <div className="btn-pulse-ring"></div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17H2l2-2h16l2 2z"></path><path d="M20 15V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7"></path></svg>
          <span className="btn-text">ANUNCIAR LLEGADA</span>
        </button>
      )}
      
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
            letterSpacing: '0.15em', /* Ampliado para micro-datos */
            color: '#94a3b8', 
            fontWeight: 600, /* Reducido para que no grite */
            marginBottom: '2px',
            display: 'block'
          }}>SHIP</span>
          <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: '0 0 2px 0' }}>{ship.nombre}</h3>
          <div className="ship-bl-sm" style={{ color: '#64748b', fontSize: '10px', fontFamily: 'var(--font-family-monospace)', fontWeight: 500, letterSpacing: '0.05em' }}>
            BL/ID: <span style={{ color: '#0f172a', fontWeight: 'bold' }}>{ship.bl_code.toUpperCase()}</span> <span style={{color: 'var(--brand-primary)', fontWeight: '600', marginLeft: '6px', cursor: 'help', letterSpacing: '0'}}>+1 MORE</span>
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

        {/* 4. TRANSIT COMPARISON - NEW PREMIUM VISUALIZATION */}
        <div className="transit-comparison-container" style={{ marginTop: '16px', padding: '12px', background: 'rgba(248, 250, 252, 0.8)', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div className="transit-node">
              <span style={{ fontSize: '9px', fontWeight: 800, color: '#94a3b8', display: 'block', marginBottom: '2px' }}>DEPARTURE (ETD)</span>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#334155' }}>{ship.etd}</span>
              <span style={{ fontSize: '10px', color: '#64748b', display: 'block' }}>Shanghai, CN</span>
            </div>
            
            <div className="transit-connector" style={{ flex: 1, margin: '0 12px', position: 'relative', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <div style={{ width: '100%', height: '2px', background: 'linear-gradient(90deg, #e2e8f0 0%, var(--brand-primary) 50%, #e2e8f0 100%)', borderRadius: '2px' }}></div>
               <div style={{ 
                 position: 'absolute', 
                 background: 'white', 
                 width: '24px', 
                 height: '24px', 
                 borderRadius: '50%', 
                 border: '1px solid #e2e8f0', 
                 boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 zIndex: 2
               }}>
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2.5"><path d="M22 17H2l2-2h16l2 2z"></path><path d="M20 15V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7"></path><path d="M12 6V2"></path></svg>
               </div>
            </div>

            <div className="transit-node" style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '9px', fontWeight: 800, color: 'var(--brand-primary)', display: 'block', marginBottom: '2px' }}>ARRIVAL (ETA)</span>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>{ship.eta}</span>
              <span style={{ fontSize: '10px', color: '#64748b', display: 'block' }}>Barranquilla, CO</span>
            </div>
          </div>
        </div>

        {/* 5. METADATA GRID - High hierarchy for Total Units */}
        <div className="ship-meta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginTop: '12px' }}>
          <div className="meta-item" style={{ background: 'rgba(248, 250, 252, 0.6)', padding: '10px 12px', borderRadius: '8px', backdropFilter: 'blur(4px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
               Cargo Load Summary
            </div>
            <span style={{color: '#0f172a', fontWeight: 800, fontSize: '18px', letterSpacing: '-0.01em'}}>{equipmentCount} <span style={{fontSize: '11px', color: '#94a3b8', fontWeight: 600}}>EQUIPMENT UNITS</span></span>
          </div>
        </div>

        {/* 5. LOCATIONS & CAPACITY - Secondary disclosure */}
        <div className="capacity-section" style={{ borderTop: '1px solid rgba(226, 232, 240, 0.5)', paddingTop: '16px', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div className="meta-locations" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#64748b', fontWeight: 500 }}>
              <span style={{ opacity: 0.6, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', width: '30px' }}>ORG</span>
              <span style={{ color: '#334155', fontWeight: 600 }}>Shanghai, CN</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#64748b', fontWeight: 500 }}>
              <span style={{ opacity: 0.6, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', width: '30px' }}>DST</span>
              <span style={{ color: 'var(--brand-primary)', fontWeight: 700 }}>Barranquilla, CO</span>
            </div>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px'}}>
             <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 600 }}>{minigranjasCount} MULTI-DROP</span>
             <span className="status-pill status-ready">
               {availableSlots} FREE SLOTS
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};
