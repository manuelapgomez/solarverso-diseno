import React, { useState } from "react";
import "./logistica.css";
import { type Portfolio } from "../../data/mockLogistica";

interface PortfoliosPanelProps {
  portfolios: Portfolio[];
}

export const PortfoliosPanel: React.FC<PortfoliosPanelProps> = ({ portfolios }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedPortfolioId, setSelectedPortfolioId] = useState<string | null>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setSelectedPortfolioId(null);
    }
  };

  return (
    <div className={`portfolios-panel ${isExpanded ? "expanded" : ""}`}>
      {/* Drag handle / Header */}
      <div className="panel-handle" onClick={toggleExpand}>
        <div className="drag-indicator"></div>
        <div className="panel-title-row">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-primary)' }}>
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <span style={{ fontWeight: 600, color: 'var(--color-text-dark)', fontFamily: 'var(--font-family-primary)' }}>Portafolios Priorizados</span>
          <span className="badge-count">{portfolios.length}</span>
        </div>
      </div>

      {/* Contenido expandido */}
      {isExpanded && (
        <div className="panel-content">
          {/* Carrusel Horizontal de Portafolios */}
          <div className="portfolios-carousel">
            {portfolios.map((port) => (
              <div 
                key={port.id} 
                className={`portfolio-card ${selectedPortfolioId === port.id ? 'active' : ''}`}
                onClick={() => setSelectedPortfolioId(selectedPortfolioId === port.id ? null : port.id)}
              >
                <div className="portfolio-card-header">
                  <div className="folder-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="mgs-count-badge">
                    {port.cantidadMgs} MGS
                  </div>
                </div>
                <div className="portfolio-info">
                  <h4 style={{ margin: '8px 0 4px 0', fontSize: '14px', color: 'var(--color-text-dark)', fontFamily: 'var(--font-family-primary)' }}>{port.nombre}</h4>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-medium)', fontFamily: 'var(--font-family-primary)' }}>{port.inversionista}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desplegable de Minigranjas del Portafolio Seleccionado */}
          {selectedPortfolioId && (
            <div className="minigranjas-dropdown">
              {portfolios
                .find((p) => p.id === selectedPortfolioId)
                ?.minigranjas.map((mgs) => (
                  <div key={mgs.id} className="minigranja-list-item">
                    <div className="mgs-item-left">
                       <span className={`status-dot ${mgs.estado.replace(" ", "-").toLowerCase()}`}></span>
                       <div>
                         <div style={{ fontWeight: 600, color: 'var(--color-text-dark)', fontSize: '14px', fontFamily: 'var(--font-family-primary)' }}>{mgs.nombre}</div>
                         <div style={{ fontSize: '11px', color: 'var(--color-text-medium)', fontFamily: 'var(--font-family-primary)' }}>{mgs.ubicacion} • {mgs.codigo}</div>
                       </div>
                    </div>
                    <div className="mgs-item-right">
                       <span className="mgs-progress">{mgs.progreso}%</span>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
