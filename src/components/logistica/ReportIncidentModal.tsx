import React, { useState } from "react";
import { type Barco, type Incident } from "../../data/mockLogistica";

interface ReportIncidentModalProps {
  isOpen: boolean;
  onClose: () => void;
  ship: Barco;
  onConfirm: (shipId: string, incident: Omit<Incident, 'id' | 'date' | 'isResolved'>) => void;
}

const CATEGORIES = [
  "Condiciones Climáticas",
  "Huelga / Paro Portuario",
  "Falla Técnica / Mecánica",
  "Cambio de Puerto / Terminal",
  "Repriorización de Carga",
  "Problemas de Aduana",
  "Otro"
];

export const ReportIncidentModal: React.FC<ReportIncidentModalProps> = ({
  isOpen, onClose, ship, onConfirm
}) => {
  const [impactType, setImpactType] = useState<'Detention' | 'Route'>('Route');
  const [category, setCategory] = useState(CATEGORIES[1]); // Default to Strike
  const [reason, setReason] = useState('');
  const [etaImpact, setEtaImpact] = useState<number>(0);

  if (!isOpen) return null;

  const handleSubmit = () => {
    onConfirm(ship.id, {
      category,
      type: impactType,
      reason,
      etaImpact: impactType === 'Route' ? etaImpact : undefined
    });
    // Reset state
    setReason('');
    setImpactType('Route');
    setEtaImpact(0);
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="modal-content" style={{ maxWidth: '560px' }}>
        <div className="modal-header" style={{ borderBottom: '1px solid #f1f5f9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h2 style={{ fontSize: '18px', color: '#0f172a' }}>Bitácora Logística — {ship.nombre}</h2>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body" style={{ padding: '24px' }}>
          
          {/* SECCIÓN 1: HISTORIAL (Fixed squashed visualization) */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
             <label className="section-label">HISTORIAL DE EVENTOS</label>
             <span style={{ fontSize: '11px', color: '#94a3b8', background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                {(ship.incidents || []).length} REGISTROS
             </span>
          </div>
          
          <div className="incident-timeline">
            {ship.incidents && ship.incidents.length > 0 ? (
              ship.incidents.slice().reverse().map((inc) => (
                <div key={inc.id} className="timeline-item">
                  <div className={`timeline-dot ${inc.type === 'Detention' ? 'dot-detention' : 'dot-route'}`} />
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                         <span className="timeline-type" style={{ color: '#0f172a', fontSize: '11px', marginBottom: '2px' }}>{inc.category || 'Incidente General'}</span>
                         <span className="timeline-date">{inc.date}</span>
                      </div>
                      <span className={`timeline-type ${inc.type === 'Detention' ? 'type-detention' : 'type-route'}`} style={{ opacity: 0.8 }}>
                        {inc.type === 'Detention' ? 'Detención Total' : 'Navegación Ajustada'}
                      </span>
                    </div>
                    <p className="timeline-reason">{inc.reason}</p>
                    {inc.etaImpact !== undefined && inc.etaImpact !== 0 && (
                      <span className="timeline-eta">Impacto ETA: {inc.etaImpact > 0 ? `+${inc.etaImpact}` : inc.etaImpact} días</span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '12px', padding: '20px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                <p style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 500 }}>No hay bitácora registrada aún.</p>
              </div>
            )}
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '24px 0' }} />

          {/* SECCIÓN 2: NUEVO REPORTE */}
          <div style={{ marginBottom: '20px' }}>
            <label className="section-label" style={{ marginBottom: '8px', display: 'block' }}>CATEGORÍA DEL EVENTO (LA CAUSA)</label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="premium-select"
              style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '14px', background: '#f8fafc', color: '#0f172a', fontWeight: 600, cursor: 'pointer' }}
            >
              {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          
          <label className="section-label" style={{ marginBottom: '16px', display: 'block' }}>IMPACTO OPERATIVO (LA CONSECUENCIA)</label>
          <div className="incident-type-selector" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {/* OPCIÓN COMÚN: AJUSTE */}
            <div 
              className={`type-option ${impactType === 'Route' ? 'selected route' : ''}`}
              onClick={() => setImpactType('Route')}
              style={{ flex: 1 }}
            >
              <div className="option-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
              </div>
              <div>
                <div className="option-title">Ajuste Logístico</div>
                <div className="option-desc">El buque continúa, pero con desviaciones o retrasos.</div>
              </div>
            </div>

            {/* OPCIÓN EXTREMA: SUSPENSIÓN */}
            <div 
              className={`type-option ${impactType === 'Detention' ? 'selected detention' : ''}`}
              onClick={() => setImpactType('Detention')}
              style={{ flex: 1 }}
            >
              <div className="option-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
              </div>
              <div>
                <div className="option-title">Suspensión Total</div>
                <div className="option-desc">Detención inmediata de toda la operación física.</div>
              </div>
            </div>
          </div>

          {impactType === 'Route' && (
            <div style={{ marginBottom: '20px', padding: '16px', background: '#eff6ff', borderRadius: '12px', border: '1px solid #dbeafe' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#1e40af', textTransform: 'uppercase', marginBottom: '8px' }}>
                AJUSTE DE DÍAS (EXPECTATIVA ETA)
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <input 
                  type="range" 
                  min="-5" max="20" 
                  value={etaImpact} 
                  onChange={(e) => setEtaImpact(parseInt(e.target.value))}
                  style={{ flex: 1, accentColor: '#3b82f6' }}
                />
                <span style={{ fontSize: '16px', fontWeight: 900, color: '#1e40af', minWidth: '40px' }}>
                  {etaImpact > 0 ? `+${etaImpact}` : etaImpact} d
                </span>
              </div>
            </div>
          )}

          <div>
            <label className="section-label" style={{ marginBottom: '8px', display: 'block' }}>DETALLE DE LA BITÁCORA</label>
            <textarea 
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Describa el motivo específico y cualquier nota relevante..."
              style={{ minHeight: '80px', borderRadius: '10px', border: '1px solid #e2e8f0', padding: '12px' }}
            />
          </div>
        </div>

        <div className="modal-footer" style={{ borderTop: '1px solid #f1f5f9', padding: '16px' }}>
          <button className="btn-secondary" onClick={onClose} style={{ flex: 1 }}>Cerrar</button>
          <button 
            className="btn-primary" 
            onClick={handleSubmit}
            disabled={!reason.trim()}
            style={{ 
              flex: 2, 
              background: impactType === 'Detention' ? '#ef4444' : '#0f172a', 
              borderColor: impactType === 'Detention' ? '#ef4444' : '#0f172a' 
            }}
          >
            {impactType === 'Detention' ? 'Registrar Suspensión Crítica' : 'Guardar Ajuste Logístico'}
          </button>
        </div>
      </div>
    </div>
  );
};
