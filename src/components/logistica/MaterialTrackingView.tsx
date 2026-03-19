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
    
    return (
      <div 
        className={`material-cell ${isFaltante ? 'status-faltante' : ''}`}
        onClick={isFaltante ? onSwitchToVessels : undefined}
        style={{ cursor: isFaltante ? 'pointer' : 'default' }}
      >
        <div className="material-status-icon">
          {isFaltante ? (
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          ) : (
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><path d="M8 12l3 3 5-5"></path></svg>
          )}
        </div>
        <div className="material-status-text">
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
            <h2 className="investor-title">{group.investor} — inversionista</h2>
            
            <div className="portfolio-tabs">
              {group.portfolios.map((portfolio: Portfolio) => {
                const isActive = portfolio.id === selectedId;
                return (
                  <div 
                    key={portfolio.id} 
                    className={`portfolio-tab-card ${portfolio.isPriority ? 'priority' : ''} ${isActive ? 'active' : ''}`}
                    onClick={() => handleSelectPortfolio(group.investor, portfolio.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="portfolio-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                      {portfolio.isPriority && (
                        <div className="priority-star">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                        </div>
                      )}
                    </div>
                    <div className="portfolio-info">
                      <span className="portfolio-name">{portfolio.name}</span>
                      <span className="portfolio-mgs-count">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
                        {portfolio.mgsCount} MGS
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {activePortfolio.projects.length > 0 ? (
              <table className="material-table">
                <thead>
                  <tr>
                    <th>Proyecto</th>
                    <th>Paneles</th>
                    <th>Reconectador</th>
                    <th>Tracker</th>
                    <th>Shelter</th>
                  </tr>
                </thead>
                <tbody>
                  {activePortfolio.projects.map((project: MaterialProject) => (
                    <tr key={project.id}>
                      <td className="project-cell">
                        <div className="project-name">{project.name}</div>
                        <div className="project-location">{project.location}</div>
                        <div className="project-geo">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                          Uruaco - Luruaco, Atlántico
                        </div>
                      </td>
                      <td>{renderMaterialCell(project.materials.panels)}</td>
                      <td>{renderMaterialCell(project.materials.reconectador)}</td>
                      <td>{renderMaterialCell(project.materials.tracker)}</td>
                      <td>{renderMaterialCell(project.materials.shelter)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="empty-portfolio-message">
                 No hay proyectos registrados para este portafolio.
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
