import React from "react";
import { Barco } from "../../data/mockLogistica";

interface ShipCardProps {
  ship: Barco;
  isActive: boolean;
  onClick: () => void;
}

export const ShipCard: React.FC<ShipCardProps> = ({ ship, isActive, onClick }) => {
  
  const equiposKeys = Object.keys(ship.asignaciones) as Array<keyof typeof ship.asignaciones>;
  
  return (
    <div className={`ship-card ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="ship-header">
        <div className="ship-info">
          <h3>{ship.nombre}</h3>
          <span className="ship-eta">ETA: {ship.eta} | BL: {ship.bl_code}</span>
        </div>
        <div className="ship-icon-wrapper">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 13V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4"></path>
            <path d="M2 13l4 3 4-3 4 3 4-3 4 3"></path>
            <path d="M4 7v2"></path>
            <path d="M8 5v4"></path>
            <path d="M12 3v6"></path>
            <path d="M16 5v4"></path>
            <path d="M20 7v2"></path>
          </svg>
        </div>
      </div>
      
      <div className="progress-container">
        <div className="progress-header">
          <span>Progreso de Carga</span>
          <span>{ship.loading_progress}%</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${ship.loading_progress}%` }}></div>
        </div>
      </div>

      <div className="ship-teams">
        {equiposKeys.map(key => {
          const isAssigned = ship.asignaciones[key] !== null;
          return (
            <span key={key} className={`team-badge ${isAssigned ? 'assigned' : ''}`}>
              {key}
            </span>
          );
        })}
      </div>
    </div>
  );
};
