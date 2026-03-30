import React, { useState } from "react";
import { type Barco } from "../../data/mockLogistica";

interface ReportIncidentModalProps {
  isOpen: boolean;
  onClose: () => void;
  ship: Barco;
  onConfirm: (shipId: string, reason: string) => void;
}

export const ReportIncidentModal: React.FC<ReportIncidentModalProps> = ({
  isOpen, onClose, ship, onConfirm
}) => {
  const [reason, setReason] = useState('');

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="modal-content" style={{ maxWidth: '420px', border: '1px solid #fecaca' }}>
        <div className="modal-header" style={{ background: '#fef2f2', borderBottom: '1px solid #fee2e2' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>
            <h2 style={{ fontSize: '18px', color: '#991b1b' }}>Reportar Incidente</h2>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body" style={{ padding: '24px' }}>
          <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.5', marginBottom: '20px' }}>
            Estás a punto de reportar un incidente crítico para el buque <strong>{ship.nombre}</strong>.
            Esta acción suspenderá su actividad operativa temporalmente. En su estado de alerta, no podrás realizar reasignaciones ni procesos de llegada.
          </p>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px' }}>
              MOTIVO DEL INCIDENTE
            </label>
            <textarea 
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Ej. Condiciones climáticas adversas, huelga en puerto..."
              style={{ minHeight: '80px' }}
            />
          </div>
        </div>

        <div className="modal-footer" style={{ borderTop: '1px solid #f1f5f9', padding: '16px' }}>
          <button className="btn-secondary" onClick={onClose} style={{ flex: 1 }}>Cancelar</button>
          <button 
            className="btn-primary" 
            onClick={() => onConfirm(ship.id, reason)}
            disabled={!reason.trim()}
            style={{ flex: 1.5, background: '#ef4444', borderColor: '#ef4444' }}
          >
            Suspender Buque
          </button>
        </div>
      </div>
    </div>
  );
};
