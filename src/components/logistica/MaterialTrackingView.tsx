import React, { useState } from 'react';
import { mockMaterialTrackingData, type InvestorGroup, type Portfolio, type MaterialProject, type MaterialStatus } from '../../data/mockMaterials';
import './logistica.css';

interface MaterialTrackingViewProps {
  onSwitchToVessels: () => void;
}

export const MaterialTrackingView: React.FC<MaterialTrackingViewProps> = ({ onSwitchToVessels }) => {
  // State to track selected portfolio ID for each investor
  const [selectedPortfolios, setSelectedPortfolios] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    mockMaterialTrackingData.forEach(investor => {
      if (investor.portfolios.length > 0) {
        initial[investor.investor] = investor.portfolios[0].id;
      }
    });
    return initial;
  });

  const handleSelectPortfolio = (investorName: string, portfolioId: string) => {
    setSelectedPortfolios(prev => ({
      ...prev,
      [investorName]: portfolioId
    }));
  };

  const renderMaterialCell = (data: MaterialStatus) => {
    const isFaltante = data.status === 'Faltante';
    
    // Status-specific icons based on label
    const getStatusIcon = (status: string) => {
      switch (status) {
        case 'Zarpe': 
          return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 21h20M7 21v-8l5-5 5 5v8M12 8V3M10 5h4" /></svg>; // Ship/Maritime
        case 'Ingreso a Zona Franca':
          return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>; // Map
        case 'Licencia de importación':
          return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>; // Document
        case 'Nacionalización':
          return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>; // Shield
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
      >
        <div className="status-icon-wrapper">
          {getStatusIcon(data.status)}
        </div>
        <div className="status-info">
          <span className="status-label">{data.status}</span>
          {data.date && <span className="status-date">{data.date}</span>}
        </div>
      </div>
    );
  };

  return (
    <div className="material-tracking-container">
      {mockMaterialTrackingData.map((group: InvestorGroup) => {
        const selectedId = selectedPortfolios[group.investor];
        const activePortfolio = group.portfolios.find(p => p.id === selectedId) || group.portfolios[0];

        return (
          <div key={group.investor} className="investor-section">
            <h2 className="investor-title-premium">{group.investor} <span className="title-tag">inversionista</span></h2>
            
            <div className="portfolio-tabs-premium">
              {group.portfolios.map((portfolio: Portfolio) => {
                const isActive = portfolio.id === selectedId;
                return (
                  <div 
                    key={portfolio.id} 
                    className={`portfolio-taskello-card ${portfolio.isPriority ? 'priority' : ''} ${isActive ? 'active' : ''}`}
                    onClick={() => handleSelectPortfolio(group.investor, portfolio.id)}
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

            {activePortfolio.projects.length > 0 ? (
              <div className="material-projects-grid">
                <div className="grid-header-row">
                  <div className="header-cell">Proyecto</div>
                  <div className="header-cell">Paneles</div>
                  <div className="header-cell">Inversores</div>
                  <div className="header-cell">Reconectador</div>
                  <div className="header-cell">Tracker</div>
                  <div className="header-cell">Shelter</div>
                </div>

                {activePortfolio.projects.map((project: MaterialProject) => (
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
                      <div className="status-grid-item">{renderMaterialCell(project.materials.panels)}</div>
                      <div className="status-grid-item">{renderMaterialCell(project.materials.inverters)}</div>
                      <div className="status-grid-item">{renderMaterialCell(project.materials.reconectador)}</div>
                      <div className="status-grid-item">{renderMaterialCell(project.materials.tracker)}</div>
                      <div className="status-grid-item">{renderMaterialCell(project.materials.shelter)}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-portfolio-message-premium">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="1.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                <p>No hay proyectos registrados para este portafolio.</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
