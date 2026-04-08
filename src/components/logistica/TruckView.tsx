import React from 'react';
import { type Camion } from '../../data/mockLogistica';
import './logistica.css';
import truckImg from '../../assets/logistica/truck_flatbed.png';

interface TruckViewProps {
  camionesProceso?: Camion[];
}

export const TruckView: React.FC<TruckViewProps> = ({ camionesProceso = [] }) => {
  return (
    <div className="supply-view-viewport">
        <div className="ships-grid-container">
          {camionesProceso.map(camion => (
            <div key={camion.id} className="truck-card-v2">
              <div className="vessel-main-visual">
                <div 
                  className="truck-trailer-graphic" 
                  style={{ backgroundImage: `url(${truckImg})` }}
                >
                  <div className="truck-cargo-container">
                    {camion.items.map((item, idx) => {
                      const typeClass = item.tipo.toLowerCase().replace(/[^a-z0-9]/g, '-');
                      return (
                        <div 
                          key={idx} 
                          className={`cargo-small-box cargo-color-${typeClass}`}
                        >
                          <div className="container-ribs"></div>
                          <span className="block-label" style={{ zIndex: 5, fontSize: '12px', fontWeight: 900, textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}>
                            {item.tipo.substring(0, 3).toUpperCase()}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="vessel-identity-row">
                <h3 className="vessel-id-title">{camion.placa}</h3>
                <button className="report-incident-btn-v2">
                   Bitácora Logística
                </button>
              </div>

              <div className="vessel-transit-footer">
                <div className="transit-node-v2">
                  <span className="node-label">ORIGEN</span>
                  <span className="node-date">CEDI B/quilla</span>
                </div>

                <div className="transit-progress-v2">
                  <div className="progress-line"></div>
                  <div className="progress-icon-circle">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2.5">
                      <path d="M10 17h4V5H2v12h3m10 0h2v-3.34a4 4 0 0 1 2-3.42V5H10v12h3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
                    </svg>
                  </div>
                </div>

                <div className="transit-node-v2 align-right">
                  <span className="node-label highlight">PROYECTO</span>
                  <span className="node-date">{camion.items[0]?.nombreMgsDestino || '---'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};
