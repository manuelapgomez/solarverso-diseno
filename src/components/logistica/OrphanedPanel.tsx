import React from "react";
import { MgsHuerfana } from "../../data/mockLogistica";

interface OrphanedPanelProps {
  orphans: MgsHuerfana[];
}

export const OrphanedPanel: React.FC<OrphanedPanelProps> = ({ orphans }) => {
  if (orphans.length === 0) return null;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Crítica": return "text-critical";
      case "Alta": return "text-high";
      case "Media": return "text-medium";
      default: return "text-low";
    }
  };

  return (
    <div className="orphaned-panel">
      <div className="orphaned-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
        MGS Huérfanas ({orphans.length})
      </div>
      
      {orphans.map(orphan => (
        <div key={orphan.id} className="orphaned-badge" title={`Esperando: ${orphan.equipoFaltante}`}>
          <strong>{orphan.nombre}</strong>
          <span className={getPriorityColor(orphan.prioridadUnergy)}>
            Falta {orphan.equipoFaltante} ({orphan.prioridadUnergy})
          </span>
        </div>
      ))}
    </div>
  );
};
