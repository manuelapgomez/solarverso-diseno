import React, { useState } from "react";
import { type Barco, type EquipoAsignacion, type MgsHuerfana } from "../../data/mockLogistica";

interface SwapModalProps {
  isOpen: boolean;
  onClose: () => void;
  ship: Barco;
  equipoKey: keyof Barco["asignaciones"];
  currentAssignment: EquipoAsignacion | null;
  orphans: MgsHuerfana[];
  onSwap: (nuevaMgsId: string, nuevaMgsNombre: string) => void;
}

export const SwapModal: React.FC<SwapModalProps> = ({
  isOpen, onClose, ship, equipoKey, currentAssignment, orphans, onSwap
}) => {
  const [selectedMgsId, setSelectedMgsId] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!isOpen) return null;

  const validOrphans = orphans.filter(o => o.equipoFaltante === equipoKey);

  const handleSwap = () => {
    if (!selectedMgsId) return;
    const selectedOrphan = validOrphans.find(o => o.id === selectedMgsId);
    if (selectedOrphan) {
      onSwap(selectedOrphan.id, selectedOrphan.nombre);
    }
  };

  const selectedOrphanName = validOrphans.find(o => o.id === selectedMgsId)?.nombre || "Seleccionar ▼";

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Reubicar Equipo: {equipoKey}</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <p style={{ color: '#4b5563', fontSize: '14px', margin: 0 }}>
            Estás reasignando inventario a bordo del <strong>{ship.nombre}</strong>.
          </p>

          <div className="swap-direction" style={{ overflow: 'visible' }}>
            <div className="swap-box">
              <span className="swap-box-label">Destino Actual</span>
              <span className="swap-box-value">
                {currentAssignment ? currentAssignment.nombreMgs : "Sin asignar"}
              </span>
              {currentAssignment && (
                <span style={{display: 'block', fontSize: '11px', color: '#9ca3af', marginTop: '4px'}}>
                  (Pasará a Huérfanas)
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
              <span className="swap-box-label">Nuevo Destino</span>
              
              <div 
                className="swap-box-value custom-select-trigger" 
                style={{ color: '#2563eb', cursor: 'pointer', padding: '8px', borderRadius: '6px', background: isDropdownOpen ? '#eff6ff' : 'transparent', display: 'inline-flex', alignItems: 'center', gap: '4px', border: isDropdownOpen ? '1px solid #bfdbfe' : '1px solid transparent', userSelect: 'none' }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedOrphanName}
              </div>

              {isDropdownOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: '50%', transform: 'translateX(-50%)', width: '250px', background: '#ffffff', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', border: '1px solid #e5e7eb', zIndex: 100, textAlign: 'left', overflow: 'hidden' }}>
                    
                    <div style={{ padding: '8px 12px', background: '#f9fafb', borderBottom: '1px solid #e5e7eb', fontSize: '11px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                      HUÉRFANAS ESPERANDO {equipoKey}
                    </div>

                    <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                      {validOrphans.length === 0 ? (
                        <div style={{ padding: '12px', fontSize: '13px', color: '#9ca3af', textAlign: 'center' }}>No hay MGS disponibles.</div>
                      ) : (
                        validOrphans.map(o => (
                          <div 
                            key={o.id}
                            style={{ padding: '10px 12px', fontSize: '13px', cursor: 'pointer', borderBottom: '1px solid #f3f4f6', backgroundColor: selectedMgsId === o.id ? '#eff6ff' : 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                            onClick={() => { setSelectedMgsId(o.id); setIsDropdownOpen(false); }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = selectedMgsId === o.id ? '#eff6ff' : 'white'}
                          >
                            <span style={{ color: '#374151', fontWeight: selectedMgsId === o.id ? '500' : 'normal' }}>{o.nombre}</span>
                            {o.prioridadUnergy === 'Crítica' && <span style={{ fontSize: '10px', background: '#fee2e2', color: '#dc2626', padding: '2px 6px', borderRadius: '4px' }}>Crítica</span>}
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
            onClick={handleSwap}
            disabled={!selectedMgsId}
          >
            Confirmar Reubicación
          </button>
        </div>
      </div>
    </div>
  );
};
