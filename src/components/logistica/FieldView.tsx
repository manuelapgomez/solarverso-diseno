import React from 'react';
import { type Minigranja, type Camion } from '../../data/mockLogistica';

interface FieldViewProps {
  minigranjas: Minigranja[];
  camiones: Camion[];
  onConfirmReceipt: (truckId: string) => void;
}

export const FieldView: React.FC<FieldViewProps> = ({ minigranjas, camiones, onConfirmReceipt }) => {
  const incomingTrucks = camiones.filter(c => c.estado === 'On Route');
  const arrivedTrucks = camiones.filter(c => c.estado === 'Arrived');

  return (
    <div className="logistica-container">
      <div className="dashboard-main">
        <header className="dashboard-header">
          <div className="title-wrapper">
             <svg className="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
               <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
             </svg>
             <h1>Suministro: Equipo en Campo</h1>
             <div className="title-divider"></div>
             <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>Recepción y Control en Sitio</span>
          </div>
        </header>

        <div className="field-dashboard">
          
          <h2 className="field-section-title">Proyectos en Ejecución</h2>
          <div className="field-projects-grid">
            {minigranjas.map(mgs => {
              // Calculate summary of equipment received for this project
              const receivedForThisMgs = arrivedTrucks.filter(t => t.destino === mgs.nombre);
              const itemsCount = receivedForThisMgs.reduce((acc, t) => {
                t.items.forEach(item => {
                  acc[item.tipo] = (acc[item.tipo] || 0) + item.cantidad;
                });
                return acc;
              }, {} as Record<string, number>);

              return (
                <div key={mgs.id} className="project-card-field">
                  {receivedForThisMgs.length > 0 && <div className="arrived-truck-indicator" title="Nuevo equipo recibido"></div>}
                  <div className="project-card-header">
                    <div>
                      <span className="project-id-mini">{mgs.codigo}</span>
                      <h3 className="project-name-main">{mgs.nombre}</h3>
                    </div>
                    <span className="status-pill status-ready" style={{ fontSize: '9px' }}>{mgs.estado.toUpperCase()}</span>
                  </div>

                  <div className="project-supply-status">
                    <div className="progress-circle-wrapper">
                      <svg viewBox="0 0 36 36" style={{ transform: 'rotate(-90deg)' }}>
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f1f5f9" strokeWidth="3" />
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--brand-primary)" strokeDasharray={`${mgs.progreso}, 100`} strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="project-progress-label">
                      <span className="progress-pct">{mgs.progreso}%</span>
                      <span className="progress-desc">Equipos en Sitio</span>
                    </div>
                  </div>

                  <div className="site-inventory-summary">
                    {Object.entries(itemsCount).map(([tipo, qty]) => (
                      <span key={tipo} className="inventory-pill-mini">
                        {qty} {tipo.substring(0,3).toUpperCase()}
                      </span>
                    ))}
                    {Object.keys(itemsCount).length === 0 && (
                      <span className="inventory-pill-mini" style={{ fontStyle: 'italic', opacity: 0.6 }}>Esperando suministros...</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <h2 className="field-section-title">Cola de Recepción (Camiones en Ruta)</h2>
          <div className="reception-queue-container" style={{ minHeight: '120px' }}>
            {incomingTrucks.length > 0 ? (
              incomingTrucks.map(truck => (
                <div key={truck.id} className="truck-reception-item">
                  <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '8px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2"><path d="M10 17h4V5H2v12h3m10 0h2v-3.34a4 4 0 0 1 2-3.42V5H10v12h3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
                  </div>
                  <div className="truck-reception-info">
                    <div>
                      <span className="truck-placa-badge">{truck.placa}</span>
                      <span className="truck-dest-mini">Destino: <strong>{truck.destino}</strong></span>
                    </div>
                    <div style={{ marginTop: '4px', fontSize: '12px', color: '#64748b' }}>
                      Cargamento: {truck.items.map(i => `${i.cantidad} ${i.tipo}`).join(', ')}
                    </div>
                  </div>
                  <button className="btn-receive-field" onClick={() => onConfirmReceipt(truck.id)}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Confirmar Llegada
                  </button>
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
                <p style={{ fontSize: '14px', fontWeight: 600 }}>No hay camiones en tránsito hacia el proyecto.</p>
                <p style={{ fontSize: '12px' }}>Despacha equipos desde la fase de Puerto.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
