import React from 'react';
import { mockMaterialTrackingData, type InvestorGroup, type Portfolio, type MaterialProject, type MaterialStatus } from '../../data/mockMaterials';
import { type Barco, type SlotCarga } from '../../data/mockLogistica';
import { SupplyFiltersBar, type FiltersState } from './SupplyFiltersBar';
import './logistica.css';

interface MaterialTrackingViewProps {
  onSwitchToVessels: () => void;
  onOpenSwap: (slot: SlotCarga, slotIndex: number, shipId: string) => void;
  barcos: Barco[];
  filters: FiltersState;
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
}

export const MaterialTrackingView: React.FC<MaterialTrackingViewProps> = ({ 
  onSwitchToVessels, 
  onOpenSwap,
  barcos,
  filters,
  setFilters
}) => {
  
  const handleSelectPortfolio = (portfolioId: string) => {
    setFilters(prev => {
      const isSelected = prev.portfolio.includes(portfolioId);
      return {
        ...prev,
        portfolio: isSelected 
          ? prev.portfolio.filter(id => id !== portfolioId)
          : [...prev.portfolio, portfolioId]
      };
    });
  };

  const handleHVClick = (e: React.MouseEvent, data: MaterialStatus) => {
    e.stopPropagation();
    if (!data.shipId || data.slotIndex === undefined) return;

    const ship = barcos.find(s => s.id === data.shipId);
    if (ship && ship.slots[data.slotIndex]) {
      onOpenSwap(ship.slots[data.slotIndex], data.slotIndex, ship.id);
    }
  };

  const renderMaterialCell = (data: MaterialStatus, equipmentType: string) => {
    const isFaltante = data.status === 'Faltante';
    const isAssigned = data.shipId && data.slotIndex !== undefined;
    
    const getStatusIcon = (status: string) => {
      switch (status) {
        case 'Zarpe': 
          return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 21h20M7 21v-8l5-5 5 5v8M12 8V3M10 5h4" /></svg>;
        case 'Ingreso a Zona Franca':
          return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
        case 'Licencia de importación':
          return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
        case 'Nacionalización':
          return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
        case 'Faltante':
          return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>;
        default:
          return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" /></svg>;
      }
    };

    return (
      <div 
        className={`material-cell-premium ${isFaltante ? 'status-faltante' : ''} status-${data.status.replace(/\s+/g, '-').toLowerCase()}`}
        onClick={isFaltante ? onSwitchToVessels : undefined}
        style={{ cursor: isFaltante || isAssigned ? 'pointer' : 'default' }}
      >
        <div className="status-icon-wrapper">
          {getStatusIcon(data.status)}
        </div>
        <div className="status-info">
          <span className="status-label">{data.status}</span>
          {data.date && <span className="status-date">{data.date}</span>}
          
          {isAssigned && (
            <button 
              className="hv-mini-btn" 
              onClick={(e) => handleHVClick(e, data)}
            >
              HV: {equipmentType}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="material-tracking-container">
      <div style={{ marginBottom: '24px' }}>
        <SupplyFiltersBar filters={filters} setFilters={setFilters} />
      </div>

      {mockMaterialTrackingData
        .filter(group => filters.investor.length === 0 || filters.investor.includes(group.investor))
        .map((group: InvestorGroup) => {
          const groupPortfolios = group.portfolios.filter(p => 
            filters.portfolio.length === 0 || filters.portfolio.includes(p.id)
          );

          if (groupPortfolios.length === 0 && filters.portfolio.length > 0) return null;

          return (
            <div key={group.investor} className="investor-section">
              <h2 className="investor-title-premium">{group.investor} <span className="title-tag">inversionista</span></h2>
              
              <div className="portfolio-tabs-premium">
                {group.portfolios.map((portfolio: Portfolio) => {
                  const isActive = filters.portfolio.includes(portfolio.id);
                  return (
                    <div 
                      key={portfolio.id} 
                      className={`portfolio-taskello-card ${portfolio.isPriority ? 'priority' : ''} ${isActive ? 'active' : ''}`}
                      onClick={() => handleSelectPortfolio(portfolio.id)}
                    >
                      <div className="card-tab-area">
                        <div className="tab-gradient-bg"></div>
                        {portfolio.isPriority && (
                          <div className="priority-star-glow">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                          </div>
                        )}
                      </div>
                      <div className="card-main-body">
                        <div className="card-text-header">
                          <span className="card-title-main">{portfolio.name}</span>
                          <span className="card-subtitle-sub">{portfolio.isPriority ? 'Prioridad Alta' : 'Seguimiento'}</span>
                        </div>
                        <div className="card-stats-footer">
                          <div className="left-stat">
                            <span className="count-big">{portfolio.mgsCount}</span>
                            <span className="unit-small">MGS</span>
                          </div>
                          <div className="right-stat">
                            {isActive ? 'ACTIVO' : 'VER'}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {(filters.portfolio.length === 0 ? group.portfolios : 
                 group.portfolios.filter(p => filters.portfolio.includes(p.id)))
                .map(port => (
                  <div key={port.id} className="portfolio-projects-box">
                    {port.projects.length > 0 ? (
                      <>
                        <h4 className="portfolio-divider-title">{port.name} — Proyectos</h4>
                        <div className="material-projects-grid">
                          <div className="grid-header-row">
                            <div className="header-cell">Proyecto</div>
                            <div className="header-cell">Paneles</div>
                            <div className="header-cell">Inversores</div>
                            <div className="header-cell">Reconectador</div>
                            <div className="header-cell">Tracker</div>
                            <div className="header-cell">Shelter</div>
                          </div>

                          {port.projects.map((project: MaterialProject) => (
                            <div key={project.id} className="project-row-premium">
                              <div className="project-info-main">
                                <div className="name-box">
                                  <h3 className="project-name-text">{project.name}</h3>
                                </div>
                                <div className="location-box">
                                  <span className="location-code">{project.location}</span>
                                  <div className="geo-wrapper">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    <span>Uruaco - Luruaco, Atlántico</span>
                                  </div>
                                </div>
                              </div>
                              <div className="project-status-cells">
                                <div className="status-grid-item">{renderMaterialCell(project.materials.panels, 'Panel')}</div>
                                <div className="status-grid-item">{renderMaterialCell(project.materials.inverters, 'Inversor')}</div>
                                <div className="status-grid-item">{renderMaterialCell(project.materials.reconectador, 'Reconectador')}</div>
                                <div className="status-grid-item">{renderMaterialCell(project.materials.tracker, 'Tracker')}</div>
                                <div className="status-grid-item">{renderMaterialCell(project.materials.shelter, 'Shelter')}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : null}
                  </div>
                ))}
              
              {groupPortfolios.length > 0 && groupPortfolios.every(p => p.projects.length === 0) && (
                <div className="empty-portfolio-message-premium">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="1.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                  <p>No hay proyectos registrados para los criterios seleccionados.</p>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};
