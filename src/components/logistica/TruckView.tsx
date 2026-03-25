import React from 'react';
import { type Barco, type SlotCarga } from '../../data/mockLogistica';
import './logistica.css';
import truckImg from '../../assets/logistica/truck_flatbed.png';

interface TruckViewProps {
  barcos: Barco[];
  onOpenSwap: (slot: SlotCarga, slotIndex: number, shipId: string) => void;
}

export const TruckView: React.FC<TruckViewProps> = ({ barcos, onOpenSwap }) => {
  return (
    <div className="logistica-container">
      <div className="dashboard-main">
        <header className="dashboard-header">
          <div className="title-wrapper">
             <svg className="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
               <path d="M10 17h4V5H2v12h3m10 0h2v-3.34a4 4 0 0 1 2-3.42V5H10v12h3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
             </svg>
             <h1>Suministro: Despacho Terrestre</h1>
             <div className="title-divider"></div>
             <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>Camiones en Ruta a Proyecto</span>
          </div>
        </header>

        <div className="ships-grid-container" style={{ padding: '0 24px 60px 24px' }}>
          {barcos.map(ship => {
             const assignedSlots = ship.slots.filter(s => s.mgsAsignada);
             if (assignedSlots.length === 0) return null;

             // Group by type to create literal "blocks" as requested
             const groups = assignedSlots.reduce((acc, slot) => {
               const type = slot.tipoEquipo || 'Otros';
               if (!acc[type]) acc[type] = 0;
               acc[type]++;
               return acc;
             }, {} as Record<string, number>);

             const groupEntries = Object.entries(groups);

             return (
               <div key={ship.id} className="truck-card-premium">
                 <div className="truck-illustration-wrapper">
                   <div 
                     className="truck-trailer-graphic" 
                     style={{ backgroundImage: `url(${truckImg})` }}
                   >
                     <div className="truck-cargo-container">
                       {groupEntries.map(([type, qty], idx) => {
                         const firstSlotOfType = assignedSlots.find(s => s.tipoEquipo === type);
                         return (
                           <div 
                             key={idx} 
                             className={`cargo-block ${type.toLowerCase()}`}
                             style={{ flex: qty }}
                             onClick={firstSlotOfType ? () => onOpenSwap(firstSlotOfType, 0, ship.id) : undefined}
                           >
                             <span className="block-label" style={{ fontSize: '9px' }}>{type}</span>
                             <span className="block-qty" style={{ fontSize: '8px' }}>{qty} U</span>
                           </div>
                         );
                       })}
                     </div>
                   </div>
                 </div>

                 <div className="truck-info-footer" style={{ padding: '24px', background: 'rgba(248, 250, 252, 0.6)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(226, 232, 240, 0.5)' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                     <div>
                       <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '4px' }}>
                         DEST. ID: <strong style={{color: '#64748b'}}>{ship.id.substring(0, 4).toUpperCase()}</strong>
                       </span>
                       <h3 style={{ margin: '0 0 6px 0', fontSize: '22px', color: '#0f172a', fontWeight: 800, letterSpacing: '-0.02em' }}>
                         {assignedSlots[0]?.nombreMgs || 'Minigranja Destino'}
                       </h3>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '11px', fontWeight: 500 }}>
                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                         <span>Uruaco - Luruaco, Atlántico</span>
                       </div>
                     </div>
                     <span className="status-pill status-ready" style={{ letterSpacing: '0.1em' }}>ON ROUTE</span>
                   </div>

                   <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '24px', padding: '16px', background: 'rgba(255,255,255,0.7)', borderRadius: '12px' }}>
                     <div>
                       <span style={{ fontSize: '9px', color: '#94a3b8', display: 'block', letterSpacing: '0.15em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>SALIDA</span>
                       <p style={{ margin: 0, fontWeight: 800, fontSize: '15px', color: '#334155' }}>Mar 22</p>
                     </div>
                     <div style={{ textAlign: 'right' }}>
                       <span style={{ fontSize: '9px', color: '#94a3b8', display: 'block', letterSpacing: '0.15em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>EST. ARRIVAL</span>
                       <p style={{ margin: 0, fontWeight: 800, fontSize: '15px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end' }}>
                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="3"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                         Mar 25
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
             );
          })}
        </div>
      </div>
    </div>
  );
};
