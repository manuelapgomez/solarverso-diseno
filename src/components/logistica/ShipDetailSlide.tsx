import React from "react";
import { type Barco } from "../../data/mockLogistica";

interface ShipDetailSlideProps {
  ship: Barco | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenSwap: (equipoKey: keyof Barco["asignaciones"]) => void;
}

export const ShipDetailSlide: React.FC<ShipDetailSlideProps> = ({ ship, isOpen, onClose, onOpenSwap }) => {
  if (!ship) return null;

  const equiposKeys = Object.keys(ship.asignaciones) as Array<keyof typeof ship.asignaciones>;

  return (
    <div className={`detail-slide ${isOpen ? 'open' : ''}`}>
      <div className="detail-header">
        <button className="close-btn" onClick={onClose}>
          ✕ Cerrar
        </button>
      </div>

      <div className="cargo-graphic-wrapper">
        <div style={{ position: 'absolute', top: '24px', left: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 13V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4"></path>
            <path d="M2 13l4 3 4-3 4 3 4-3 4 3"></path>
          </svg>
          <span style={{ fontSize: '12px', color: '#4b5563', fontFamily: 'monospace' }}>
            BL: {ship.bl_code}
          </span>
        </div>
        
        {/* Gráfico representativo del barco a la derecha */}
        <div style={{ width: '240px', height: '120px', backgroundColor: '#f3f4f6', borderRadius: '12px', borderBottom: '8px solid #ef4444', display: 'flex', alignItems: 'flex-end', padding: '12px', gap: '4px', marginLeft: 'auto' }}>
           {/* Mockup de contenedores */}
           <div style={{ width: '40px', height: '40px', border: '1px solid #d1d5db', background: '#fef3c7', borderRadius: '4px' }}></div>
           <div style={{ width: '60px', height: '40px', border: '1px solid #d1d5db', background: '#fee2e2', borderRadius: '4px' }}></div>
           <div style={{ width: '40px', height: '40px', border: '1px solid #d1d5db', background: '#e0e7ff', borderRadius: '4px' }}></div>
        </div>
      </div>

      <div className="detail-scroll">
        {equiposKeys.map(key => {
          const asig = ship.asignaciones[key];
          return (
            <div key={key} className="equipment-category">
              <h3 className="equipment-category-title">{key}</h3>
              
              <div className="pills-grid">
                {asig ? (
                  // Pill asignado
                  <div className="mgs-pill" onClick={() => onOpenSwap(key)} title="Reubicar Minigranja">
                    <span>{asig.nombreMgs}</span>
                    <svg className="edit-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </div>
                ) : (
                  // Pill vacío (simular slots)
                  <div className="mgs-pill unassigned">
                    Slot Vacío
                  </div>
                )}
                
                {/* Mocking extra pills for visual density as requested by Figma composition */}
                {key !== 'Reconectadores' && (
                   <div className="mgs-pill unassigned">Slot Vacío</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
