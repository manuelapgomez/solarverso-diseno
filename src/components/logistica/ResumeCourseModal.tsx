import React from "react";
import { type Barco } from "../../data/mockLogistica";

interface ResumeCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  ship: Barco;
  onConfirm: (shipId: string) => void;
}

export const ResumeCourseModal: React.FC<ResumeCourseModalProps> = ({
  isOpen, onClose, ship, onConfirm
}) => {
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="modal-content" style={{ maxWidth: '400px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
            <h2 style={{ fontSize: '18px', color: '#16a34a' }}>Reanudar Rumbo</h2>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body" style={{ padding: '24px' }}>
          <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.5', marginBottom: '16px' }}>
            ¿Estás seguro que el incidente registrado en el <strong>{ship.nombre}</strong> ha sido resuelto?
          </p>
          
          {ship.incidente && (
            <div style={{ background: '#fef2f2', padding: '12px', borderRadius: '8px', border: '1px solid #fee2e2', marginBottom: '16px' }}>
              <span style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', marginBottom: '4px' }}>Incidente Actual</span>
              <p style={{ margin: 0, fontSize: '13px', color: '#991b1b' }}>{ship.incidente}</p>
            </div>
          )}

          <p style={{ color: '#4b5563', fontSize: '13px', lineHeight: '1.5' }}>
            El buque volverá a estar "On Route" y se desbloquearán las funciones de llegada y reasignación de carga.
          </p>
        </div>

        <div className="modal-footer" style={{ borderTop: '1px solid #f1f5f9', padding: '16px' }}>
          <button className="btn-secondary" onClick={onClose} style={{ flex: 1 }}>Mantener Suspendido</button>
          <button 
            className="btn-primary" 
            onClick={() => onConfirm(ship.id)}
            style={{ flex: 1.5, background: '#16a34a', borderColor: '#16a34a' }}
          >
            Confirmar Reanudación
          </button>
        </div>
      </div>
    </div>
  );
};
