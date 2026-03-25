import React from 'react';
import { type Barco, type SlotCarga } from '../../data/mockLogistica';
import './logistica.css';

interface PortViewProps {
  barcos: Barco[];
  onOpenSwap: (slot: SlotCarga, slotIndex: number, shipId: string) => void;
}

export const PortView: React.FC<PortViewProps> = ({ barcos, onOpenSwap }) => {
  return (
    <div className="logistica-container">
      <div className="dashboard-main">
        <header className="dashboard-header">
          <div className="title-wrapper">
             <svg className="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
               <path d="M6 18H18V6H6V18Z"/><path d="M12 2V6"/><path d="M12 18V22"/><path d="M2 12H6"/><path d="M18 12H22"/>
             </svg>
             <h1>Suministro: Terminal de Contenedores</h1>
             <div className="title-divider"></div>
             <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>Equipos en Proceso Aduanero</span>
          </div>
        </header>

        <div className="port-stack-container" style={{ padding: '0 24px 60px 24px' }}>
          <div className="port-terminal-area">
            {barcos.map(ship => {
              const approvedSlots = ship.slots.filter(s => s.mgsAsignada);
              if (approvedSlots.length === 0) return null;

              return (
                <div key={ship.id} className="bl-group" style={{ background: 'white', padding: '24px', borderRadius: '20px', border: '1px solid rgba(226, 232, 240, 0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                  <div style={{ marginBottom: '24px', borderBottom: '1px solid rgba(226, 232, 240, 0.5)', paddingBottom: '16px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '4px' }}>BILL OF LADING</span>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '24px', color: '#0f172a', fontWeight: 800, letterSpacing: '-0.02em' }}>{ship.bl_code}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="status-pill status-success" style={{ letterSpacing: '0.1em' }}>IN PORT</span>
                      <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 500 }}>Vessel: <strong>{ship.nombre}</strong></span>
                    </div>
                  </div>

                  <div className="container-stack">
                    {approvedSlots.map((slot, idx) => (
                      <div 
                        key={`${ship.id}-slot-${idx}`} 
                        className="port-container-unit approved"
                        onClick={() => onOpenSwap(slot, idx, ship.id)}
                        title={`Equipo: ${slot.nombreMgs} - ID: ${slot.mgsAsignada}`}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2.5">
                            <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="2" y1="7" x2="22" y2="7"/><line x1="2" y1="13" x2="22" y2="13"/>
                          </svg>
                          <span style={{ fontSize: '12px', fontWeight: 700, color: '#334155', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', letterSpacing: '0.05em' }}>
                            {slot.tipoEquipo}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
