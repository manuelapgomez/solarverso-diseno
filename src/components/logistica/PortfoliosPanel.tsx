import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./logistica.css";
import "./portfolios-panel.css";
import { type Portfolio, type SpecEquipo, type EquipmentRequirement } from "../../data/mockLogistica";
import { HVRequerimientosModal } from "./HVRequerimientosModal";

interface PortfoliosPanelProps {
  portfolios: Portfolio[];
  onFilterTrigger?: (specs: SpecEquipo, equipmentType: string) => void;
}

const getStatusIcon = (status: string) => {
  const s = status.toLowerCase();
  
  if (s.includes('faltante')) return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2.5">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  );
  
  if (s.includes('no pedido') || s.includes('en espera')) return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );

  if (s.includes('pedido') || s.includes('diseño')) return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  );

  if (s.includes('inspección') || s.includes('fabricación')) return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7-4-7 4v12z"></path>
      <path d="M9 12l2 2 4-4"></path>
    </svg>
  );

  if (s.includes('zarpe') || s.includes('booking') || s.includes('barco')) return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5">
      <path d="M2 21h20"></path><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4a11.6 11.6 0 0 0 1.62 6"></path>
      <path d="M12 10V2"></path><path d="M12 2l5 4-5 4"></path>
    </svg>
  );

  if (s.includes('transporte') || s.includes('camión')) return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5">
      <rect x="1" y="3" width="15" height="13"></rect>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  );

  if (s.includes('nacionalización') || s.includes('zona franca')) return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  );

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
};

const TinyHVIcon = ({ onClick }: { onClick?: () => void }) => (
  <svg 
    width="14" 
    height="14" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#cbd5e1" 
    strokeWidth="2" 
    style={{marginLeft: '4px', cursor: 'pointer'}}
    onClick={onClick}
    className="hv-icon-link"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line>
  </svg>
);

export const PortfoliosPanel: React.FC<PortfoliosPanelProps> = ({ portfolios, onFilterTrigger }) => {
  const [panelState, setPanelState] = useState<'collapsed' | 'peeking' | 'expanded'>('collapsed');
  const [selectedPortfolioId, setSelectedPortfolioId] = useState<string | null>(null);
  const [modalState, setModalState] = useState<{ isOpen: boolean; req?: EquipmentRequirement; mgsName?: string }>({ isOpen: false });
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const EQUIPOS_ORDEN = [
    { key: "Paneles", label: "Paneles" },
    { key: "Shelter", label: "Shelter" },
    { key: "Inversor", label: "Inversores" },
    { key: "Reconectadores", label: "Reconectadores" },
    { key: "Tracker", label: "Trackers" }
  ];

  const togglePanelState = () => {
    if (panelState === 'collapsed') {
      setPanelState('peeking');
    } else if (panelState === 'peeking') {
      setPanelState('collapsed');
      setSelectedPortfolioId(null);
    } else {
      setPanelState('peeking');
      setSelectedPortfolioId(null);
    }
  };

  const handleSelectPortfolio = (id: string) => {
    if (selectedPortfolioId === id) {
      setSelectedPortfolioId(null);
      setPanelState('peeking');
    } else {
      setSelectedPortfolioId(id);
      setPanelState('expanded');
    }
  };

  const selectedPort = portfolios.find(p => p.id === selectedPortfolioId);

  const content = (
    <>
      <div 
        className={`portfolios-overlay ${panelState === 'expanded' ? 'active' : ''}`} 
        onClick={() => {
          if (panelState === 'expanded') {
            setPanelState('peeking');
            setSelectedPortfolioId(null);
          } else if (panelState === 'peeking') {
            setPanelState('collapsed');
          }
        }}
      />

      <div className={`portfolios-panel ${panelState}`} data-diag="antigravity-v1">
        {/* Drag handle / Píldora Drawer */}
        <div className="panel-handle-pill" onClick={togglePanelState}>
          <div className="handle-bar"></div>
          {panelState !== 'expanded' && (
            <div className="handle-title-row">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Portafolios Priorizados</span>
            </div>
          )}
        </div>

        {/* Contenido */}
        {panelState !== 'collapsed' && (
          <div className="panel-content">
            {panelState === 'expanded' && (
              <div className="expanded-header-row">
                <div className="expanded-title-container">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Portafolios Priorizados</span>
                </div>
              </div>
            )}

            {/* Carrusel Horizontal de Portafolios (Step 2) */}
            {panelState === 'peeking' && (
              <div className="portfolios-carousel">
                {portfolios.map((port) => {
                  return (
                    <div 
                      key={port.id} 
                      className={`portfolio-card-premium ${selectedPortfolioId === port.id ? 'active' : ''}`}
                      onClick={() => handleSelectPortfolio(port.id)}
                    >
                      <div className="port-card-top-badge">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                      </div>
                      <div className="port-card-coop">
                        <span>C O O P</span> +3
                      </div>
                      <h4 className="port-card-name">{port.nombre}</h4>
                      <div className="port-card-fire">
                        🔥 {port.cantidadMgs}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Grilla de Minigranjas (Step 3) */}
            {panelState === 'expanded' && selectedPort && (
              <div className="mgs-grid-container">
                <div className="mgs-grid-table">
                  {/* Headers */}
                  <div className="mgs-grid-header-row">
                    <div className="mgs-grid-header-cell align-left">Proyecto</div>
                    {EQUIPOS_ORDEN.map(eq => (
                      <div key={eq.key} className="mgs-grid-header-cell">{eq.label}</div>
                    ))}
                  </div>

                  {/* Rows */}
                  {selectedPort.minigranjas.map((mgs) => (
                    <div key={mgs.id} className="mgs-grid-row">
                      {/* Celda Proyecto */}
                      <div className="mgs-grid-cell align-left project-cell-col">
                        <div className="mgs-cell-title">{mgs.nombre}</div>
                        <div className="mgs-cell-code">{mgs.codigo}</div>
                        <div className="mgs-cell-location">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                          {mgs.ubicacion}
                        </div>
                      </div>

                      {/* Celdas Equipamiento */}
                      {EQUIPOS_ORDEN.map(eq => {
                        const req = mgs.requerimientos?.find(r => r.tipo === eq.key);
                        
                        if (!req) return (
                          <div key={eq.key} className="mgs-grid-cell">
                             <div className="eq-grid-status-icon"><span style={{color: '#94a3b8'}}>N/A</span></div>
                          </div>
                        );

                        const isFaltante = req.estado.toLowerCase().includes('faltante');
                        const isNoPedido = req.estado.toLowerCase().includes('no pedido');

 return (
                          <div key={eq.key} className="mgs-grid-cell">
                            {/* Fila Superior: Icono + Estado + HV */}
                            <div className={`eq-grid-top-row ${isFaltante ? 'warning' : ''}`}>
                              {getStatusIcon(req.estado)}
                              <span className="status-label">{req.estado}</span>
                              <TinyHVIcon onClick={() => setModalState({ isOpen: true, req, mgsName: mgs.nombre })} />
                            </div>
                            
                            {/* Fila Inferior: Fecha + Badge (excepto Faltante/No Pedido) */}
                            {!isFaltante && !isNoPedido && (
                              <div className="eq-grid-bottom-row">
                                <span className="eq-grid-date">{req.fecha || 'FEB.26/25'}</span>
                                <button 
                                  className="eq-grid-badge"
                                  onClick={() => setModalState({ isOpen: true, req, mgsName: mgs.nombre })}
                                >
                                  {req.oc || 'OC #123205'}
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <HVRequerimientosModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false })}
        equipmentType={modalState.req?.tipo || ''}
        projectName={modalState.mgsName || ''}
        oc={modalState.req?.oc}
        specs={modalState.req?.specs}
        onFilterTrigger={(specs, tipo) => {
          if (onFilterTrigger) {
             onFilterTrigger(specs, tipo);
          }
          setModalState({ isOpen: false });
        }}
      />
    </>
  );

  if (!mounted) return null;

  return createPortal(content, document.body);
};
