import React, { useState } from "react";
import { type Barco } from "../../data/mockLogistica";

interface DeclareArrivalModalProps {
  isOpen: boolean;
  onClose: () => void;
  ship: Barco;
  onConfirm: (shipId: string, terminal: 'Cartagena' | 'Buenaventura') => void;
}

export const DeclareArrivalModal: React.FC<DeclareArrivalModalProps> = ({
  isOpen, onClose, ship, onConfirm
}) => {
  const [selectedTerminal, setSelectedTerminal] = useState<'Cartagena' | 'Buenaventura'>('Cartagena');

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="modal-content arrival-confirm-modal" style={{ maxWidth: '400px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.5"><path d="M22 17H2l2-2h16l2 2z"></path><path d="M20 15V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7"></path></svg>
            </div>
            <h2 style={{ fontSize: '18px' }}>Confirmar Arribo</h2>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body" style={{ padding: '24px' }}>
          <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.5', marginBottom: '20px' }}>
            ¿Estás seguro de que el buque <strong>{ship.nombre}</strong> ({ship.bl_code}) ha llegado a puerto? 
            Esta acción transferirá toda su carga a la vista de terminal.
          </p>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px' }}>
              TERMINAL DE DESTINO
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                className={`terminal-select-btn ${selectedTerminal === 'Cartagena' ? 'active' : ''}`}
                onClick={() => setSelectedTerminal('Cartagena')}
                style={{
                  flex: 1, padding: '12px', borderRadius: '10px', fontSize: '13px', fontWeight: 600,
                  border: selectedTerminal === 'Cartagena' ? '2px solid var(--brand-primary)' : '1px solid #e2e8f0',
                  background: selectedTerminal === 'Cartagena' ? '#f0f9ff' : 'white',
                  color: selectedTerminal === 'Cartagena' ? 'var(--brand-primary)' : '#64748b',
                  transition: 'all 0.2s'
                }}
              >
                Cartagena (Caribe)
              </button>
              <button 
                className={`terminal-select-btn ${selectedTerminal === 'Buenaventura' ? 'active' : ''}`}
                onClick={() => setSelectedTerminal('Buenaventura')}
                style={{
                  flex: 1, padding: '12px', borderRadius: '10px', fontSize: '13px', fontWeight: 600,
                  border: selectedTerminal === 'Buenaventura' ? '2px solid var(--brand-primary)' : '1px solid #e2e8f0',
                  background: selectedTerminal === 'Buenaventura' ? '#f0f9ff' : 'white',
                  color: selectedTerminal === 'Buenaventura' ? 'var(--brand-primary)' : '#64748b',
                  transition: 'all 0.2s'
                }}
              >
                Buenaventura (Pacífico)
              </button>
            </div>
          </div>

          <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
              <span style={{ color: '#64748b' }}>Carga a descargar:</span>
              <span style={{ color: '#0f172a', fontWeight: 700 }}>{ship.slots.filter(s => s.mgsAsignada).length * 10} Unidades</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
              <span style={{ color: '#64748b' }}>Contenedores:</span>
              <span style={{ color: '#0f172a', fontWeight: 700 }}>{ship.slots.filter(s => s.mgsAsignada).length} B/L Units</span>
            </div>
          </div>
        </div>

        <div className="modal-footer" style={{ borderTop: '1px solid #f1f5f9', padding: '16px' }}>
          <button className="btn-secondary" onClick={onClose} style={{ flex: 1 }}>Cancelar</button>
          <button 
            className="btn-primary" 
            onClick={() => onConfirm(ship.id, selectedTerminal)}
            style={{ flex: 1.5 }}
          >
            Confirmar Arribo
          </button>
        </div>
      </div>
    </div>
  );
};
