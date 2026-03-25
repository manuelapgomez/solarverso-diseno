import React from 'react';
import { type Barco, type SlotCarga } from '../../data/mockLogistica';
import './logistica.css';
import truckImg from '../../assets/logistica/truck_realistic.png';

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
                             style={{ flex: qty }} // Size proportional to qty
                             onClick={firstSlotOfType ? () => onOpenSwap(firstSlotOfType, 0, ship.id) : undefined}
                           >
                             <span className="block-label">{type}</span>
                             <span className="block-qty">{qty} UND</span>
                           </div>
                         );
                       })}
                     </div>
                   </div>
                 </div>

                 <div className="truck-info-footer">
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                     <div>
                       <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase' }}>
                         MiniGranja {ship.id.substring(0, 4).toUpperCase()}
                       </span>
                       <h3 style={{ margin: '4px 0', fontSize: '20px', color: '#1e293b' }}>
                         {assignedSlots[0]?.nombreMgs || 'Minigranja Destino'}
                       </h3>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#64748b', fontSize: '12px' }}>
                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                         <span>Uruaco - Luruaco, Atlántico</span>
                       </div>
                     </div>
                     <span className="status-pill" style={{ background: 'rgba(29, 153, 204, 0.1)', color: 'var(--brand-primary)', fontWeight: 'bold' }}>ON ROUTE</span>
                   </div>

                   <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '20px' }}>
                     <div>
                       <span style={{ fontSize: '10px', color: '#94a3b8' }}>SALIDA</span>
                       <p style={{ margin: 0, fontWeight: 'bold', fontSize: '14px' }}>Mar 22</p>
                     </div>
                     <div style={{ textAlign: 'right' }}>
                       <span style={{ fontSize: '10px', color: '#94a3b8' }}>EST. ARRIVAL</span>
                       <p style={{ margin: 0, fontWeight: 'bold', fontSize: '14px', color: 'var(--brand-primary)' }}>Mar 25</p>
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
