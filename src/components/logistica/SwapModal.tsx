import React, { useState, useEffect } from "react";
import { type Barco, type MgsHuerfana, type SlotCarga, type DocChecklist, type ChatMessage } from "../../data/mockLogistica";

interface SwapModalProps {
  isOpen: boolean;
  onClose: () => void;
  ship: Barco;
  slot: SlotCarga | null;
  slotIndex: number | null;
  orphans: MgsHuerfana[];
  onSwap: (slotIndex: number, nuevaMgsId: string, nuevaMgsNombre: string, equipoRequerido: string) => void;
}

export const SwapModal: React.FC<SwapModalProps> = ({
  isOpen, onClose, ship, slot, slotIndex, orphans, onSwap
}) => {
  const [selectedMgsId, setSelectedMgsId] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [chatDoc, setChatDoc] = useState<DocChecklist | null>(null);

  useEffect(() => {
    setSelectedMgsId("");
    setIsDropdownOpen(false);
  }, [isOpen, slot]);

  if (!isOpen || !slot || slotIndex === null) return null;

  const isFilled = slot.mgsAsignada !== null;
  const equipoAFiltrar = slot.tipoEquipo;
  
  const validOrphans = orphans.filter(o => o.equipoFaltante === equipoAFiltrar);

  const handleAction = () => {
    if (!selectedMgsId || !equipoAFiltrar) return;
    const selectedOrphan = validOrphans.find(o => o.id === selectedMgsId);
    if (selectedOrphan) {
      onSwap(slotIndex, selectedOrphan.id, selectedOrphan.nombre, equipoAFiltrar);
    }
  };

  const selectedOrphanName = validOrphans.find(o => o.id === selectedMgsId)?.nombre || "Seleccionar ▼";

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{isFilled ? "Reasignar Destino" : "Asignar Destino"}</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          {/* Glassmorphism Header */}
          <div className="notion-modal-header">
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' }}>
              <span>PROYECTO</span> / <span>LOGÍSTICA</span> / <span style={{ fontWeight: '700', color: 'var(--brand-primary)' }}>{slot.idSlot}</span>
              <span className="badge-tag">REVISIÓN HV</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h1 className="notion-equipment-title" style={{ fontSize: '32px', marginBottom: '0', letterSpacing: '-0.02em' }}>{slot.tipoEquipo}</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4b5563', fontSize: '13px', background: '#f1f5f9', padding: '6px 12px', borderRadius: '8px', fontWeight: '500' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Puerto de Arribo: {ship.terminalArribo || 'Pendiente'}
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="notion-property-grid" style={{ marginBottom: '32px' }}>
            <div className="notion-prop-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Pedido Creado
            </div>
            <div className="notion-prop-value">{slot.pedidoCreado || "4 de diciembre de 2025 11:01 a.m."}</div>

            <div className="notion-prop-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
              Proveedor
            </div>
            <div className="notion-prop-value" style={{ fontWeight: '600' }}>{slot.proveedor || "Zentrack"}</div>

            <div className="notion-prop-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
              Producto
            </div>
            <div className="notion-prop-value" style={{ fontFamily: 'monospace' }}>{slot.productoId || "P012012"}</div>

            <div className="notion-prop-label">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
               OC Compras
            </div>
            <div className="notion-prop-value">
              <span className="badge-link">{slot.oc || "OC #123205"} <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></span>
            </div>

            <div className="notion-prop-label">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
               OC Zentrak
            </div>
            <div className="notion-prop-value">
              <span className="badge-link zentrak">{slot.ocZentrak || "OC #123205"} <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></span>
            </div>

            <div className="notion-prop-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              Estado de BT
            </div>
            <div className="notion-prop-value">
              <span className={`status-badge ${slot.BT_status === 'approved' ? 'approved' : 'pending'}`}>
                {slot.BT_status === 'approved' ? 'Aprobado' : 'Pendiente'}
              </span>
            </div>

            <div className="notion-prop-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              Categoría
            </div>
            <div className="notion-prop-value">
              <span className="badge-tag" style={{ marginLeft: 0 }}>1P</span>
              <span className="badge-tag">2P</span>
            </div>

            <div className="notion-prop-label">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
               Estado actual
            </div>
            <div className="notion-prop-value">
              <span className={`status-badge ${slot.timeline?.find(s => s.status === 'alert') ? 'alert' : 'current'}`}>
                {slot.timeline?.find(s => s.status === 'current' || s.status === 'alert')?.label || slot.estadoActual || 'Fabricación'}
              </span>
            </div>

            <div className="notion-prop-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Fecha tentativa
            </div>
            <div className="notion-prop-value" style={{ fontWeight: '600' }}>{slot.fechaTentativa || "15/01/2026"}</div>

            <div className="notion-prop-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              Cantidad sin stock
            </div>
            <div className="notion-prop-value">{slot.cantidadSinStock || "2016"}</div>

            <div className="notion-prop-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              BL
            </div>
            <div className="notion-prop-value">
               {slot.bls?.map((bl, i) => (
                 <span key={i} style={{ color: '#1e293b', marginRight: '8px' }}>{bl}</span>
               )) || <span># 101010101010101</span>}
            </div>
          </div>

          {/* Especificaciones */}
          <div className="notion-section-title">ESPECIFICACIONES DEL EQUIPO</div>
          <div className="spec-section">
            <div className="spec-info-grid">
               <div className="spec-item">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5"><path d="M2 12h20M2 6h20M2 18h20"></path></svg>
                 <span className="spec-label">Hileras</span>
                 <span className="spec-value">{slot.especificaciones?.hileras || "24 Mesas"}</span>
               </div>
               <div className="spec-item">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
                 <span className="spec-label">Corrosión atmosférica</span>
                 <span className="spec-value">{slot.especificaciones?.corrosionAtmosferica || "C2"}</span>
               </div>
               <div className="spec-item">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                 <span className="spec-label">Corrosión del suelo</span>
                 <span className="spec-value-badge alert">{slot.especificaciones?.corrosionSuelo || "Agresivo"}</span>
               </div>
               <div className="spec-item">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                 <span className="spec-label">zona de vientos</span>
                 <span className="spec-value">{slot.especificaciones?.zonaVientos || "5"}</span>
               </div>
            </div>

            <div className="size-distribution">
               <div className="size-header">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                 <span>Tamaño del equipo</span>
               </div>
               <div className="size-list">
                 {(slot.especificaciones?.tamanoEquipo || [
                   { code: "1P56", quantity: 17 },
                   { code: "1P28", quantity: 20 },
                   { code: "1P84", quantity: 5 }
                 ]).map((s, i) => (
                   <div key={i} className="size-row">
                     <span className="size-code">{s.code}</span>
                     <span className="size-qty">{s.quantity}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Logistical Timeline */}
          <div className="notion-section-title">TRAZABILIDAD LOGÍSTICA</div>
          <div className="timeline-horizontal-scroll">
            <div className="timeline-tracker-expanded">
              {(slot.timeline || []).map((step, idx) => {
                // Map icons based on label
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
                        <div className="step-date">{step.fechaReal || step.fechaObjetivo || "FEB.26/25"}</div>
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
                  <th><input type="checkbox" readOnly /> Documento</th>
                  <th>Fecha</th>
                  <th>Comentarios</th>
                  <th style={{ textAlign: 'right' }}>Valoración</th>
                </tr>
              </thead>
              <tbody>
                {(slot.documentos || [
                  { nombre: "Memorias de Cálculo", fecha: "2024-01-15", comentarios: "2.5 MB", valoracion: "Cumple" },
                  { nombre: "Manual de operación", fecha: "2024-01-14", comentarios: "3.2 MB", valoracion: "No cumple" },
                  { nombre: "Estudio de suelos", fecha: "2024-01-15", comentarios: "5.1 MB", valoracion: "No aplica" }
                ]).map((doc, i) => (
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
                ))}
              </tbody>
            </table>
          </div>

          {/* Assignment History */}
          <div className="notion-section-title">HISTORIAL DE ASIGNACIÓN (BT)</div>
          <div className="history-list" style={{ marginBottom: '24px' }}>
            {slot.historial && slot.historial.length > 0 ? (
              slot.historial.map((entry, idx) => (
                <div key={idx} className="history-item">
                  <div className="history-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                  </div>
                  <div className="history-content">
                    <div className="history-title">{entry.mgsNombre}</div>
                    <div className="history-meta">{entry.fecha} • {entry.motivo}</div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ fontSize: '13px', color: '#9ca3af', fontStyle: 'italic', padding: '8px 0' }}>
                Sin reasignaciones previas. El equipo mantiene su destino original.
              </div>
            )}
          </div>

          <div className="notion-section-title">GESTIÓN DE DESTINO</div>
          
          <p style={{ color: '#4b5563', fontSize: '13px', margin: '8px 0 16px' }}>
             Estás {isFilled ? "reasignando código" : "asociando un destino"} para este equipo a bordo del <strong>{ship.bl_code}</strong>.
          </p>

          <div className="swap-direction" style={{ overflow: 'visible', marginTop: '16px' }}>
            <div className="swap-box">
              <span className="swap-box-label" style={{ fontWeight: '500', color: '#6b7280' }}>{isFilled ? "Destino Actual" : "Estado del Slot"}</span>
              <span className="swap-box-value">
                {isFilled ? slot.nombreMgs : "Disponible"}
              </span>
              {isFilled && (
                <span style={{display: 'block', fontSize: '11px', color: '#ef4444', marginTop: '4px', fontWeight: '500'}}>
                  (Pasará a Inventario)
                </span>
              )}
            </div>
            
            <div className="swap-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>

            <div className="swap-box" style={{ position: 'relative' }}>
              <span className="swap-box-label" style={{ fontWeight: '500', color: '#6b7280' }}>Nuevo Destino</span>
              
              <div 
                className="swap-box-value custom-select-trigger" 
                style={{ color: 'var(--brand-primary)', cursor: 'pointer', padding: '8px', borderRadius: '6px', background: isDropdownOpen ? 'rgba(29, 153, 204, 0.1)' : 'transparent', display: 'inline-flex', alignItems: 'center', gap: '4px', border: isDropdownOpen ? '1px solid var(--color-secondary-blue-4)' : '1px solid transparent', userSelect: 'none', fontFamily: 'var(--font-family-primary)' }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedOrphanName}
              </div>

              {isDropdownOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: '50%', transform: 'translateX(-50%)', width: '320px', background: '#ffffff', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', border: '1px solid #e5e7eb', zIndex: 100, textAlign: 'left', overflow: 'hidden' }}>
                    
                    <div style={{ padding: '8px 12px', background: '#f9fafb', borderBottom: '1px solid #e5e7eb', fontSize: '11px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                      HUÉRFANAS ESPERANDO {equipoAFiltrar}
                    </div>

                    <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                      {validOrphans.length === 0 ? (
                        <div style={{ padding: '12px', fontSize: '13px', color: '#9ca3af', textAlign: 'center' }}>No hay MGS disponibles.</div>
                      ) : (
                        validOrphans.map(o => (
                          <div 
                            key={o.id}
                            style={{ 
                              padding: '12px 14px', 
                              cursor: 'pointer', 
                              borderBottom: '1px solid #f3f4f6', 
                              backgroundColor: selectedMgsId === o.id ? 'rgba(29, 153, 204, 0.1)' : 'white', 
                              display: 'flex', 
                              alignItems: 'flex-start',
                              gap: '12px',
                              transition: 'background-color 0.2s'
                            }}
                            onClick={() => { setSelectedMgsId(o.id); setIsDropdownOpen(false); }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = selectedMgsId === o.id ? '#eff6ff' : 'white'}
                          >
                            {/* Estrella de Prioridad */}
                            <div style={{ marginTop: '2px', flexShrink: 0 }}>
                              {(o.prioridadUnergy === 'Crítica' || o.prioridadUnergy === 'Alta') ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#eab308" stroke="#ca8a04" strokeWidth="1" strokeLinejoin="round">
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                               ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5">
                                  <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                              )}
                            </div>

                            {/* Info Principal */}
                            <div style={{ flex: 1, minWidth: 0, paddingRight: '12px' }}>
                               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2px' }}>
                                 <span style={{ color: '#111827', fontWeight: '600', fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                   {o.nombre}
                                 </span>
                                 {selectedMgsId === o.id && (
                                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                     <polyline points="20 6 9 17 4 12"></polyline>
                                   </svg>
                                 )}
                               </div>
                               <div style={{ color: '#6b7280', fontSize: '11px', fontFamily: 'monospace', marginBottom: '4px', letterSpacing: '-0.2px' }}>
                                 {o.codigo || "CÓDIGO PENDIENTE"}
                               </div>
                               <div style={{ color: '#9ca3af', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                   <circle cx="12" cy="10" r="3"></circle>
                                 </svg>
                                 {o.ubicacion || "Ubicación Regional"}
                               </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                </div>
              )}

            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cancelar</button>
          <button 
            className="btn-primary" 
            onClick={handleAction}
            disabled={!selectedMgsId}
          >
            {isFilled ? "Confirmar Reasignación" : "Confirmar Asignación"}
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
                {(chatDoc.chat || []).map((msg) => (
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
