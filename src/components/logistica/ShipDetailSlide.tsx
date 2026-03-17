import React from "react";
import { Barco } from "../../data/mockLogistica";

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
        <div>
          <h2 style={{ margin: 0, fontSize: '20px', color: '#f8fafc' }}>{ship.nombre}</h2>
          <span style={{ fontSize: '13px', color: '#94a3b8' }}>BL: {ship.bl_code} | ETA: {ship.eta}</span>
        </div>
        <button className="close-btn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="detail-scroll">
        <h3 style={{ fontSize: '14px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
          Inventario y Asignaciones
        </h3>
        
        <div className="equipment-list">
          {equiposKeys.map(key => {
            const asig = ship.asignaciones[key];
            return (
              <div key={key} className="equipment-item">
                <div className="equipment-item-header">
                  <span className="equipment-type">{key}</span>
                  {asig ? (
                    <span className="equipment-status assigned">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Asignado
                    </span>
                  ) : (
                    <span className="equipment-status unassigned">Pendiente</span>
                  )}
                </div>

                {asig ? (
                  <div className="assignment-card">
                    <div className="assignment-info">
                      <span className="assignment-mgs">Destino: {asig.nombreMgs}</span>
                      <span className="assignment-eq">ID Eq: {asig.idEquipo}</span>
                    </div>
                    <button className="swap-btn" onClick={() => onOpenSwap(key)}>
                      Reubicar
                    </button>
                  </div>
                ) : (
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                    No hay carga de este tipo o no ha sido asignada aún.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
