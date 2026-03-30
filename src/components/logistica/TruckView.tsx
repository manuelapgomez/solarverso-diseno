import React from 'react';
import { type Barco, type SlotCarga, type Camion } from '../../data/mockLogistica';
import './logistica.css';
import truckImg from '../../assets/logistica/truck_flatbed.png';

interface TruckViewProps {
  barcos: Barco[];
  onOpenSwap: (slot: SlotCarga, slotIndex: number, shipId: string) => void;
  camionesProceso?: Camion[];
}

export const TruckView: React.FC<TruckViewProps> = ({ barcos, onOpenSwap, camionesProceso = [] }) => {
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
          {camionesProceso.map(camion => (
            <div key={camion.id} className={`truck-card-premium ${camion.estado === 'Loading' ? 'loading' : ''}`}>
              <div className="truck-illustration-wrapper">
                <div 
                  className="truck-trailer-graphic" 
                  style={{ backgroundImage: `url(${truckImg})` }}
                >
                  <div className="truck-cargo-container">
                    {camion.items.map((item, idx) => {
                      const typeClass = item.tipo.toLowerCase().replace(/[^a-z0-9]/g, '-');
                      return (
                        <div 
                          key={idx} 
                          className={`cargo-small-box cargo-color-${typeClass}`}
                        >
                          <div className="container-ribs"></div>
                          <span className="block-label" style={{ zIndex: 5, fontSize: '14px', fontWeight: 900, textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}>
                            {item.tipo.substring(0, 3).toUpperCase()}
                          </span>
                          <div style={{ position: 'absolute', bottom: '4px', right: '4px', zIndex: 5, background: 'rgba(255,255,255,0.9)', padding: '1px 4px', borderRadius: '4px', fontSize: '10px', fontWeight: 900, color: '#0f172a', boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }}>
                            {item.cantidad} U
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="truck-info-footer" style={{ padding: '24px', background: 'rgba(248, 250, 252, 0.6)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(226, 232, 240, 0.5)' }}>
                {camion.estado === 'Loading' && (
                  <div className="loading-status-area" style={{ marginBottom: '16px' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em' }}>PROCESO DE CARGA</span>
                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a' }}>{camion.capacidadActual} / {camion.capacidadMax} UNIDADES</span>
                     </div>
                     <div className="loading-progress-container" style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                        <div 
                          className="loading-progress-fill" 
                          style={{ 
                            width: `${Math.min(100, (camion.capacidadActual / camion.capacidadMax) * 100)}%`,
                            height: '100%',
                            background: 'var(--brand-primary)',
                            transition: 'width 0.5s ease'
                          }}
                        ></div>
                     </div>
                  </div>
                )}
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div>
                    <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '4px' }}>
                      PLACA: <strong style={{color: '#64748b'}}>{camion.placa}</strong>
                    </span>
                    <h3 style={{ margin: '0 0 6px 0', fontSize: '20px', color: '#0f172a', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                      {Array.from(new Set(camion.items.map(i => i.nombreMgsDestino))).join(', ') || 'Sin Destino'}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '11px', fontWeight: 500 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span>{camion.estado === 'Loading' ? 'En Terminal de Carga' : 'En Tránsito a Proyectos'}</span>
                    </div>
                  </div>
                  <span className={`status-pill ${camion.estado === 'Loading' ? 'status-ready' : 'status-success'}`} style={{ letterSpacing: '0.1em' }}>
                    {camion.estado === 'Loading' ? 'LOADING' : 'ON ROUTE'}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '24px', padding: '16px', background: 'rgba(255,255,255,0.7)', borderRadius: '12px', border: '1px solid rgba(226,232,240,0.5)' }}>
                  <div>
                    <span style={{ fontSize: '9px', color: '#94a3b8', display: 'block', letterSpacing: '0.15em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>CARGA TOTAL</span>
                    <p style={{ margin: 0, fontWeight: 800, fontSize: '15px', color: '#334155' }}>{camion.items.length} Tipos</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '9px', color: '#94a3b8', display: 'block', letterSpacing: '0.15em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>EST. ARRIVAL</span>
                    <p style={{ margin: 0, fontWeight: 800, fontSize: '15px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="3"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      {camion.items[0]?.fechaEntrega || '---'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
