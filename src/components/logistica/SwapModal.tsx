import React, { useState } from "react";
import { Barco, EquipoAsignacion, MgsHuerfana } from "../../data/mockLogistica";

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

  if (!isOpen) return null;

  // Filtrar huérfanas que necesiten este equipo
  const validOrphans = orphans.filter(o => o.equipoFaltante === equipoKey);

  const handleSwap = () => {
    if (!selectedMgsId) return;
    const selectedOrphan = validOrphans.find(o => o.id === selectedMgsId);
    if (selectedOrphan) {
      onSwap(selectedOrphan.id, selectedOrphan.nombre);
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Reubicar {equipoKey}</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <p style={{ color: '#cbd5e1', fontSize: '14px', margin: 0 }}>
            Estás reasignando el <strong>{equipoKey}</strong> que viaja en el barco <strong>{ship.nombre}</strong>.
          </p>

          <div className="swap-direction">
            <div className="swap-box">
              <span className="swap-box-label">Destino Actual</span>
              <span className="swap-box-value">
                {currentAssignment ? currentAssignment.nombreMgs : "Sin asignar"}
              </span>
              {currentAssignment && (
                <span style={{display: 'block', fontSize: '11px', color: '#64748b', marginTop: '4px'}}>
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

            <div className="swap-box">
              <span className="swap-box-label">Nuevo Destino</span>
              <span className="swap-box-value" style={{ color: '#3b82f6' }}>
                Seleccionar ▼
              </span>
            </div>
          </div>

          <div>
            <label className="swap-box-label" style={{ marginBottom: '8px', textAlign: 'left' }}>
              MGS Huérfanas disponibles para {equipoKey}
            </label>
            <select 
              className="mgs-select"
              value={selectedMgsId}
              onChange={(e) => setSelectedMgsId(e.target.value)}
            >
              <option value="">-- Seleccionar MGS Prioritaria --</option>
              {validOrphans.map(o => (
                <option key={o.id} value={o.id}>
                  {o.nombre} - Prioridad: {o.prioridadUnergy}
                </option>
              ))}
            </select>
            {validOrphans.length === 0 && (
              <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '8px' }}>
                No hay minigranjas huérfanas esperando este tipo de equipo.
              </p>
            )}
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
