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
          
          <div className="port-section-wrapper">
            <h2 className="port-section-title">Terminal Caribe (Cartagena)</h2>
            <div className="port-terminal-area">
              {barcos.filter(ship => ship.estado === 'Arrived' && ship.terminalArribo === 'Cartagena').map(ship => {
                const allSlots = ship.slots;
                if (allSlots.length === 0) return null;

                return (
                  <div key={ship.id} className="bl-group terminal-column-base">
                    <div className="terminal-column-header">
                      <span className="bl-label-mini">BILL OF LADING</span>
                      <h3 className="bl-code-main">{ship.bl_code}</h3>
                      <div className="bl-vessel-info">
                        <span className="status-pill status-success" style={{ letterSpacing: '0.1em' }}>IN PORT</span>
                        <span className="vessel-name-sub">Vessel: <strong>{ship.nombre}</strong></span>
                      </div>
                    </div>

                    <div className="container-stack literal-stack">
                      {allSlots.map((slot, idx) => {
                        const equipo = slot.tipoEquipo || 'generico';
                        const tipoClass = equipo.toLowerCase().replace(/[^a-z0-9]/g, '-');
                        return (
                          <div 
                            key={`${ship.id}-slot-${idx}`} 
                            className={`port-container-unit literal-container type-${tipoClass} ${!slot.mgsAsignada ? 'unassigned' : ''}`}
                            onClick={() => {
                               // Optional: interaction if unassigned vs assigned
                               onOpenSwap(slot, idx, ship.id);
                            }}
                            title={`Equipo: ${slot.nombreMgs} - ID: ${slot.mgsAsignada || 'Sin Asignar'}`}
                          >
                            <div className="literal-container-content">
                              <span className="container-logo">{equipo.substring(0, 3).toUpperCase()}</span>
                              <span className="container-full-type">{equipo.toUpperCase()}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="port-section-wrapper" style={{ marginTop: '48px' }}>
            <h2 className="port-section-title">Terminal Pacífico (Buenaventura)</h2>
            <div className="port-terminal-area">
              {barcos.filter(ship => ship.estado === 'Arrived' && ship.terminalArribo === 'Buenaventura').map(ship => {
                const allSlots = ship.slots;
                if (allSlots.length === 0) return null;

                return (
                  <div key={ship.id} className="bl-group terminal-column-base">
                    <div className="terminal-column-header">
                      <span className="bl-label-mini">BILL OF LADING</span>
                      <h3 className="bl-code-main">{ship.bl_code}</h3>
                      <div className="bl-vessel-info">
                        <span className="status-pill status-success" style={{ letterSpacing: '0.1em' }}>IN PORT</span>
                        <span className="vessel-name-sub">Vessel: <strong>{ship.nombre}</strong></span>
                      </div>
                    </div>

                    <div className="container-stack literal-stack">
                      {allSlots.map((slot, idx) => {
                        const equipo = slot.tipoEquipo || 'generico';
                        const tipoClass = equipo.toLowerCase().replace(/[^a-z0-9]/g, '-');
                        return (
                          <div 
                            key={`${ship.id}-slot-${idx}`} 
                            className={`port-container-unit literal-container type-${tipoClass} ${!slot.mgsAsignada ? 'unassigned' : ''}`}
                            onClick={() => {
                               onOpenSwap(slot, idx, ship.id);
                            }}
                            title={`Equipo: ${slot.nombreMgs} - ID: ${slot.mgsAsignada || 'Sin Asignar'}`}
                          >
                            <div className="literal-container-content">
                              <span className="container-logo">{equipo.substring(0, 3).toUpperCase()}</span>
                              <span className="container-full-type">{equipo.toUpperCase()}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
