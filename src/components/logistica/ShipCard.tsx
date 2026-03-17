import React from "react";
import { type Barco } from "../../data/mockLogistica";

interface ShipCardProps {
  ship: Barco;
  isActive: boolean;
  onClick: () => void;
}

export const ShipCard: React.FC<ShipCardProps> = ({ ship, isActive, onClick }) => {
  // Calculamos cantidad de "Equipments" sumando cuántos no son null (en este mock simulemos un núm aleatorio base para la card)
  const equiposAsignados = Object.values(ship.asignaciones).filter(v => v !== null).length;
  // Solo visual para emular el mockup "Equipment: 450"
  const equipmentCount = 450 + equiposAsignados * 10; 

  return (
    <div className={`ship-card ${isActive ? 'active' : ''}`} onClick={onClick}>
      
      {/* Icono Paper Boat gigante centrado arriba */}
      <div className="ship-icon-wrapper">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 13V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4"></path>
          <path d="M2 13l4 3 4-3 4 3 4-3 4 3"></path>
          <path d="M4 7v2"></path>
          <path d="M8 5v4"></path>
          <path d="M12 3v6"></path>
          <path d="M16 5v4"></path>
          <path d="M20 7v2"></path>
        </svg>
      </div>

      <div style={{ textAlign: 'center', fontSize: '11px', color: '#6b7280', marginTop: '-12px' }}>
        BL: {ship.bl_code}
      </div>

      <div className="ship-identity">
        <span style={{ fontSize: '10px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Ship Identity
        </span>
        <h3>{ship.nombre}</h3>
        <span className="ship-bl-sm">BL: {ship.bl_code.split('-')[1]} <span style={{color: '#3b82f6'}}>+1 more</span></span>
      </div>
      
      <div className="progress-container">
        <div className="progress-header">
          <span>Loading Progress</span>
          <span>{ship.loading_progress}%</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${ship.loading_progress}%` }}></div>
        </div>
      </div>

      <div className="ship-meta-grid">
        <div className="meta-item">
          <strong>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            ETA
          </strong>
          <span style={{color: '#111827', fontWeight: '600'}}>{ship.eta}</span>
        </div>
        <div className="meta-item">
          <strong>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            Equipment
          </strong>
          <span style={{color: '#111827', fontWeight: '600'}}>{equipmentCount}</span>
        </div>
      </div>

      <div className="meta-locations">
        <div>📍 Shanghai, China</div>
        <div style={{color: '#059669'}}>~ Barranquilla, Colombia</div>
      </div>
      
      <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: 'auto', borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
        2 Bill(s) of Lading
      </div>
    </div>
  );
};
