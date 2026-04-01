import React, { useState } from "react";
import { type MgsHuerfana } from "../../data/mockLogistica";
import { mockMaterialTrackingData, type MaterialStatus } from "../../data/mockMaterials";

interface OrphanedPanelProps {
  orphans: MgsHuerfana[];
}

export const OrphanedPanel: React.FC<OrphanedPanelProps> = ({ orphans }) => {
  const [selectedOrphan, setSelectedOrphan] = useState<MgsHuerfana | null>(null);

  if (orphans.length === 0) return null;

  const getOrphanMaterialData = (orphanName: string) => {
    for (const group of mockMaterialTrackingData) {
      for (const port of group.portfolios) {
        const found = port.projects.find(p => p.name === orphanName);
        if (found) return found;
      }
    }
    return null;
  };

  const renderMaterialCell = (data: MaterialStatus | undefined, equipmentType: string) => {
    if (!data) return null;
    const isFaltante = data.status === 'Faltante';
    const isAssigned = data.shipId && data.slotIndex !== undefined;
    
    return (
      <div className={`material-cell-premium ${isFaltante ? 'status-faltante' : ''} status-${data.status.replace(/\s+/g, '-').toLowerCase()}`}>
        <div className="status-info">
          <span className="status-label">{data.status}</span>
          {data.date && <span className="status-date">{data.date}</span>}
          {isAssigned && (
             <button className="hv-mini-btn" style={{marginTop: '12px'}} onClick={(e) => e.stopPropagation()}>
               HV: {equipmentType}
             </button>
          )}
        </div>
      </div>
    );
  };

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
        <div className="icon-wrapper glass">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
        <span>MGS Huérfanas</span>
        <span className="orphaned-count">{orphans.length}</span>
      </div>
      
      <div className="orphaned-list">
        {orphans.map(orphan => (
          <div 
            key={orphan.id} 
            className="orphaned-badge" 
            data-priority={orphan.prioridadUnergy || 'Baja'} 
            title={`Esperando: ${orphan.equipoFaltante} - Clic para ver seguimiento`}
            onClick={() => setSelectedOrphan(orphan)}
            style={{ cursor: 'pointer' }}
          >
            <strong>{orphan.nombre}</strong>
            <span className={`badge-detail ${getPriorityColor(orphan.prioridadUnergy || 'Baja')}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              Falta {orphan.equipoFaltante}
              <span className="priority-tag">{orphan.prioridadUnergy || 'Baja'}</span>
            </span>
          </div>
        ))}
      </div>

      {selectedOrphan && (() => {
        const projectData = getOrphanMaterialData(selectedOrphan.nombre);
        return (
          <div className="orphan-modal-overlay">
            <div className="orphan-modal-content" onClick={(e) => e.stopPropagation()}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px' }}>
                <h3 style={{ margin: 0, fontSize: '20px', color: '#1e293b' }}>
                  Seguimiento de Equipos: <span style={{color: 'var(--brand-primary)'}}>{selectedOrphan.nombre}</span>
                </h3>
                <button 
                   className="btn-primary" 
                   style={{ padding: '6px 16px', borderRadius: '8px', background: '#ef4444', border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
                   onClick={() => setSelectedOrphan(null)}
                >
                  Cerrar
                </button>
              </div>
              
              <div className="orphan-modal-body">
                {projectData ? (
                  <div className="project-status-cells" style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px' }}>
                    <div style={{flex: '1'}}>
                       <div style={{fontSize: '11px', fontWeight: 'bold', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase'}}>Paneles</div>
                       {renderMaterialCell(projectData.materials.panels, 'PANELES')}
                    </div>
                    <div style={{flex: '1'}}>
                       <div style={{fontSize: '11px', fontWeight: 'bold', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase'}}>Inversor</div>
                       {renderMaterialCell(projectData.materials.inverters, 'INVERSOR')}
                    </div>
                    <div style={{flex: '1'}}>
                       <div style={{fontSize: '11px', fontWeight: 'bold', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase'}}>Reconectador</div>
                       {renderMaterialCell(projectData.materials.reconectador, 'RECONECTADOR')}
                    </div>
                    <div style={{flex: '1'}}>
                       <div style={{fontSize: '11px', fontWeight: 'bold', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase'}}>Tracker</div>
                       {renderMaterialCell(projectData.materials.tracker, 'TRACKER')}
                    </div>
                    <div style={{flex: '1'}}>
                       <div style={{fontSize: '11px', fontWeight: 'bold', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase'}}>Shelter</div>
                       {renderMaterialCell(projectData.materials.shelter, 'SHELTER')}
                    </div>
                  </div>
                ) : (
                  <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>
                    <p>No se encontraron datos de seguimiento para esta MGS en el pipeline actual.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
