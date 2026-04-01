import React, { useState } from 'react';
import './logistica.css';
import { type SpecEquipo, type DocChecklist, type ChatMessage } from '../../data/mockLogistica';

interface HVRequerimientosModalProps {
  isOpen: boolean;
  onClose: () => void;
  equipmentType: string;
  projectName: string;
  specs?: SpecEquipo;
  onFilterTrigger: (specs: SpecEquipo, equipmentType: string) => void;
}

export const HVRequerimientosModal: React.FC<HVRequerimientosModalProps> = ({
  isOpen,
  onClose,
  equipmentType,
  projectName,
  specs,
  onFilterTrigger,
}) => {
  const [chatDoc, setChatDoc] = useState<DocChecklist | null>(null);

  if (!isOpen) return null;

  // Fallbacks para los mock data visuales (igual que el SwapModal)
  const defaultTimeline = [
    { status: 'pending', label: 'Pedido', fechaObjetivo: 'Por definir', fechaReal: null },
    { status: 'pending', label: 'En Diseño', fechaObjetivo: 'Por definir', fechaReal: null },
    { status: 'pending', label: 'Fabricación', fechaObjetivo: 'Por definir', fechaReal: null },
    { status: 'pending', label: 'Booking', fechaObjetivo: 'Por definir', fechaReal: null },
    { status: 'pending', label: 'Zarpe', fechaObjetivo: 'Por definir', fechaReal: null },
    { status: 'pending', label: 'Licencia de Importación', fechaObjetivo: 'Por definir', fechaReal: null },
    { status: 'pending', label: 'Nacionalización', fechaObjetivo: 'Por definir', fechaReal: null },
    { status: 'pending', label: 'Ingreso a Zona Franca', fechaObjetivo: 'Por definir', fechaReal: null },
    { status: 'pending', label: 'Inspección', fechaObjetivo: 'Por definir', fechaReal: null },
    { status: 'pending', label: 'Transporte al Proyecto', fechaObjetivo: 'Por definir', fechaReal: null },
    { status: 'pending', label: 'En Inventario', fechaObjetivo: 'Por definir', fechaReal: null }
  ];

  const defaultDocumentos: DocChecklist[] = [];

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Hoja de Vida de Producto / Nacionales</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          {/* Glassmorphism Header */}
          <div className="notion-modal-header">
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' }}>
              <span>PROYECTO</span> / <span>PRIORIZACIÓN</span> / <span style={{ fontWeight: '700', color: 'var(--brand-primary)' }}>{projectName}</span>
              <span className="badge-tag">REVISIÓN HV</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h1 className="notion-equipment-title" style={{ fontSize: '32px', marginBottom: '0', letterSpacing: '-0.02em' }}>{equipmentType}</h1>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4b5563', fontSize: '13px', background: '#f1f5f9', padding: '6px 12px', borderRadius: '8px', fontWeight: '500' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Ubicación: Regional
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', fontSize: '13px', background: '#fef2f2', padding: '6px 12px', borderRadius: '8px', fontWeight: '600' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  Estado: Faltante
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}></div>

          {/* Properties Grid */}
          <div className="notion-property-grid" style={{ marginBottom: '32px' }}>
            <div className="notion-prop-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Pedido Creado
            </div>
            <div className="notion-prop-value" style={{ color: '#9ca3af', fontStyle: 'italic' }}>Sin asignar</div>

            <div className="notion-prop-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
              Proveedor
            </div>
            <div className="notion-prop-value" style={{ color: '#9ca3af', fontStyle: 'italic' }}>Por definir</div>

            <div className="notion-prop-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
              Producto
            </div>
            <div className="notion-prop-value" style={{ color: '#9ca3af', fontStyle: 'italic' }}>Por definir</div>

            <div className="notion-prop-label">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
               OC Compras
            </div>
            <div className="notion-prop-value" style={{ color: '#9ca3af', fontStyle: 'italic' }}>Pendiente</div>

            <div className="notion-prop-label">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
               OC Zentrak
            </div>
            <div className="notion-prop-value" style={{ color: '#9ca3af', fontStyle: 'italic' }}>Pendiente</div>

            <div className="notion-prop-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              Estado de BT
            </div>
            <div className="notion-prop-value">
              <span className="status-badge pending">Pendiente</span>
            </div>

            <div className="notion-prop-label">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
               Estado actual
            </div>
            <div className="notion-prop-value">
              <span className="status-badge pending" style={{ background: '#f3f4f6', color: '#6b7280' }}>Esperando Embarque</span>
            </div>

            <div className="notion-prop-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Fecha tentativa
            </div>
            <div className="notion-prop-value" style={{ color: '#9ca3af', fontStyle: 'italic' }}>Por definir</div>

            <div className="notion-prop-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              Cantidad sin stock
            </div>
            <div className="notion-prop-value" style={{ color: '#9ca3af', fontStyle: 'italic' }}>Pendiente</div>

            <div className="notion-prop-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              BL
            </div>
            <div className="notion-prop-value" style={{ color: '#9ca3af', fontStyle: 'italic' }}>
               Sin BL asignado
            </div>
          </div>

          {/* Especificaciones */}
          <div className="notion-section-title">ESPECIFICACIONES DEL REQUERIMIENTO</div>
          <div className="spec-section" style={{ marginBottom: '40px' }}>
            <div className="spec-info-grid">
              {specs && Object.keys(specs).length > 0 ? (
                Object.entries(specs).map(([key, value]) => {
                  if (typeof value === 'object') return null;
                  
                  // Asignar icono dinámico según nombre de propiedad
                  let Icon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;
                  
                  if (key.toLowerCase().includes('hilera')) {
                    Icon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5"><path d="M2 12h20M2 6h20M2 18h20"></path></svg>;
                  } else if (key.toLowerCase().includes('atmosferica')) {
                    Icon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>;
                  } else if (key.toLowerCase().includes('suelo')) {
                    Icon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>;
                  } else if (key.toLowerCase().includes('viento')) {
                    Icon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
                  }

                  return (
                    <div className="spec-item" key={key}>
                      {Icon}
                      <span className="spec-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="spec-value">{value}</span>
                    </div>
                  );
                })
              ) : (
                <div style={{ color: '#94a3b8', fontSize: '14px', fontStyle: 'italic', padding: '20px' }}>
                  Sin especificaciones detalladas.
                </div>
              )}
            </div>
            
            {specs?.tamanoEquipo && (
               <div className="size-distribution">
                 <div className="size-header">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                   <span>Tamaño del equipo</span>
                 </div>
                 <div className="size-list">
                   {specs.tamanoEquipo.map((s, i) => (
                     <div key={i} className="size-row">
                       <span className="size-code">{s.code}</span>
                       <span className="size-qty">{s.quantity}</span>
                     </div>
                   ))}
                 </div>
               </div>
            )}
          </div>

          {/* Logistical Timeline */}
          <div className="notion-section-title">TRAZABILIDAD LOGÍSTICA</div>
          <div className="timeline-horizontal-scroll">
            <div className="timeline-tracker-expanded">
              {defaultTimeline.map((step, idx) => {
                let Icon = <div className="step-dot-inner"></div>;
                const iconProps = { width: 22, height: 22, stroke: "currentColor", strokeWidth: 2, fill: "none", viewBox: "0 0 24 24", preserveAspectRatio: "xMidYMid meet" };
                
                if (step.label === "No Pedido") Icon = <svg {...iconProps}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
                else if (step.label === "Pedido") Icon = <svg {...iconProps}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>;
                else if (step.label === "En Diseño") Icon = <svg {...iconProps}><path d="M12 2l3.5 6h-7L12 2z"/><path d="M12 22l-3.5-6h7L12 22z"/><path d="M22 12l-6 3.5v-7l6 3.5z"/><path d="M2 12l6-3.5v7l-6 3.5z"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>;
                else if (step.label === "Fabricación") Icon = <svg {...iconProps}><path d="M3 21h18"/><path d="M3 7v14"/><path d="M21 7v14"/><path d="M3 7l9-4 9 4"/><path d="M9 21v-4a3 3 0 0 1 6 0v4"/></svg>;
                else if (step.label === "Booking") Icon = <svg {...iconProps}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><circle cx="15" cy="16" r="3"/><line x1="18.5" y1="19.5" x2="17.5" y2="18.5"/></svg>;
                else if (step.label === "Zarpe") Icon = <svg {...iconProps}><path d="M2 21h20"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4a11.6 11.6 0 0 0 1.62 6"/><path d="M12 10V2"/><path d="M12 2l5 4-5 4"/></svg>;
                else if (step.label === "Licencia de Importación") Icon = <svg {...iconProps}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><circle cx="12" cy="13" r="3"/><path d="M12 16a6 6 0 0 1 5-3v0a6 6 0 0 1-5 3z"/></svg>;
                else if (step.label === "Nacionalización") Icon = <svg {...iconProps}><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="12" x2="12" y2="12.01"/></svg>;
                else if (step.label === "Ingreso a Zona Franca") Icon = <svg {...iconProps}><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6a3 3 0 0 1 6 0v6"/><path d="M19 12l2 2-2 2"/></svg>;
                else if (step.label === "Inspección") Icon = <svg {...iconProps}><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7-4-7 4v12z"/><path d="M9 12l2 2 4-4"/></svg>;
                else if (step.label === "Transporte al Proyecto") Icon = <svg {...iconProps}><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>;
                else if (step.label === "En Inventario") Icon = <svg {...iconProps}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/></svg>;

                return (
                  <div key={idx} className={`timeline-expanded-step ${step.status}`}>
                    <div className="step-connector"></div>
                    <div className="step-icon">
                      <div className="step-dot-outer">
                        {Icon}
                      </div>
                    </div>
                    <div className="step-content">
                      <div className="step-label">{step.label}</div>
                      {step.label === "En Inventario" ? (
                        <div className="step-date-pills">
                          <div className="date-pill ideal">
                            {step.fechaObjetivo} <span className="date-pill-label">ideal</span>
                          </div>
                          <div className="date-pill real">
                            {step.fechaReal || step.fechaObjetivo} <span className="date-pill-label">real</span>
                          </div>
                        </div>
                      ) : (
                        <div className="step-date">{step.fechaReal || step.fechaObjetivo}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Documentación */}
          <div className="notion-section-title" style={{ marginTop: '40px' }}>DOCUMENTACIÓN DEL PRODUCTO</div>
          <div className="documentation-section">
            <table className="docs-table">
              <thead>
                <tr>
                  <th><input type="checkbox" readOnly disabled /> Documento</th>
                  <th>Fecha</th>
                  <th>Comentarios</th>
                  <th style={{ textAlign: 'right' }}>Valoración</th>
                </tr>
              </thead>
              <tbody>
                {defaultDocumentos.length > 0 ? defaultDocumentos.map((doc, i) => (
                  <tr key={i}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input type="checkbox" checked={doc.valoracion === 'Cumple'} readOnly />
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                        {doc.nombre}
                      </div>
                    </td>
                    <td style={{ color: '#64748b', fontSize: '12px' }}>{doc.fecha}</td>
                    <td>
                      <div 
                        className="comment-trigger" 
                        onClick={() => setChatDoc(doc)}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        {doc.comentarios}
                      </div>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <span className={`valuation-badge ${doc.valoracion.toLowerCase().replace(' ', '-')}`}>
                        {doc.valoracion === 'Cumple' && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                        {doc.valoracion === 'No cumple' && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>}
                        {doc.valoracion}
                      </span>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={4} style={{ textAlign: 'center', padding: '24px', color: '#9ca3af', fontStyle: 'italic' }}>
                      Aún no hay documentos vinculados a este requerimiento. Se anexarán automáticamente al emparejar con un embarque.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Assignment History */}
          <div className="notion-section-title">HISTORIAL DE ASIGNACIÓN</div>
          <div className="history-list" style={{ marginBottom: '24px' }}>
            <div className="history-item">
              <div className="history-icon" style={{ background: 'rgba(179,179,179,0.2)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </div>
              <div className="history-content">
                <div className="history-title">MiniGranja 0001 — Uruaco</div>
                <div style={{ color: '#64748b', fontSize: '13px', marginBottom: '2px', fontFamily: 'monospace' }}>COLATLT14P2_LURUACO_SUR</div>
                <div className="history-meta" style={{ display: 'flex', gap: '12px' }}>
                  <span>2026 - 12 - 03</span> 
                  <span>•</span> 
                  <span>Cambio de priorización del portafolio</span>
                </div>
              </div>
            </div>
            
            <div className="history-item">
              <div className="history-icon" style={{ background: 'rgba(179,179,179,0.2)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </div>
              <div className="history-content">
                <div className="history-title">MiniGranja 0002 — Uruaco</div>
                <div style={{ color: '#64748b', fontSize: '13px', marginBottom: '2px', fontFamily: 'monospace' }}>COLATLT14P2_LURUACO_SUR</div>
                <div className="history-meta" style={{ display: 'flex', gap: '12px' }}>
                  <span>2026 - 12 - 03</span> 
                  <span>•</span> 
                  <span>Cambio de priorización del portafolio</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--brand-primary-light-1)', border: '1px solid rgba(29, 153, 204, 0.2)', padding: '20px', borderRadius: '16px', margin: '12px 0 32px 0' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ color: 'var(--brand-primary)', background: 'white', padding: '12px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', color: '#0f172a', fontWeight: 800 }}>Búsqueda de Disponibilidad</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#475569', lineHeight: 1.5 }}>
                  Al activar el filtro, el dashboard de logística descartará temporalmente los embarques que no transporten <strong>{equipmentType}</strong> con estas especificaciones exactas.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              onFilterTrigger(specs || {}, equipmentType);
              onClose();
            }}
            style={{ 
              width: '100%', 
              background: 'linear-gradient(90deg, var(--brand-primary), #3b82f6)', 
              color: 'white', 
              border: 'none', 
              padding: '16px', 
              borderRadius: '12px', 
              fontSize: '15px', 
              fontWeight: 800, 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(29, 153, 204, 0.3)',
              marginBottom: '16px'
            }}
          >
            Filtrar Dashboard por Compatibilidad
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
          </button>

        </div>

        {/* Chat Modal Overlay */}
        {chatDoc && (
          <div className="chat-overlay" onClick={() => setChatDoc(null)}>
            <div className="chat-container" onClick={(e) => e.stopPropagation()}>
              <div className="chat-header">
                <div className="chat-header-info">
                  <h3>Comentarios del Formulario</h3>
                  <p>{chatDoc.nombre} - Año 2025</p>
                </div>
                <button className="chat-close" onClick={() => setChatDoc(null)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="chat-body">
                {(chatDoc.chat || []).map((msg: ChatMessage) => (
                  <div key={msg.id} className={`message-group ${msg.side}`}>
                    <div className="message-meta">
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      </div>
                      <span className="message-author">{msg.author} ({msg.role})</span>
                      <span>{msg.timestamp}</span>
                    </div>

                    <div className="message-bubble">
                      {msg.attachment && (
                        <div className="attachment-pill">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                          {msg.attachment}
                        </div>
                      )}
                      <div>{msg.content}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="chat-footer">
                <div className="chat-input-wrapper">
                  <textarea placeholder="Escribe un comentario..."></textarea>
                  <div className="chat-actions">
                    <button className="send-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
