import React, { useState } from 'react';
import { type Barco, type SlotCarga } from '../../data/mockLogistica';
import './logistica.css';

interface PortViewProps {
  barcos: Barco[];
  onOpenDispatch: (selection: { slot: SlotCarga; slotIndex: number; shipId: string }[]) => void;
}

export const PortView: React.FC<PortViewProps> = ({ barcos, onOpenDispatch }) => {
  const [selectedSlots, setSelectedSlots] = useState<{ shipId: string, idx: number }[]>([]);

  const toggleSelect = (shipId: string, idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const isSelected = selectedSlots.some(s => s.shipId === shipId && s.idx === idx);
    if (isSelected) {
      setSelectedSlots(selectedSlots.filter(s => !(s.shipId === shipId && s.idx === idx)));
    } else {
      setSelectedSlots([...selectedSlots, { shipId, idx }]);
    }
  };

  const handlePrepareDispatch = () => {
    const selection = selectedSlots.map(sel => {
      const ship = barcos.find(b => b.id === sel.shipId);
      return {
        slot: ship!.slots[sel.idx],
        slotIndex: sel.idx,
        shipId: sel.shipId
      };
    });
    onOpenDispatch(selection);
  };

  const renderTerminal = (terminalName: string) => {
    const filteredBarcos = barcos.filter(ship => ship.estado === 'Arrived' && ship.terminalArribo === terminalName);
    
    if (filteredBarcos.length === 0) return null;

    return (
      <div className="port-section-wrapper" style={{ marginTop: terminalName === 'Buenaventura' ? '48px' : '0' }}>
        <h2 className="port-section-title">Terminal {terminalName === 'Cartagena' ? 'Caribe (Cartagena)' : 'Pacífico (Buenaventura)'}</h2>
        <div className="port-terminal-area">
          {filteredBarcos.map(ship => (
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
                {ship.slots.map((slot, idx) => {
                  const equipo = slot.tipoEquipo || 'generico';
                  const tipoClass = equipo.toLowerCase().replace(/[^a-z0-9]/g, '-');
                  const isSelected = selectedSlots.some(s => s.shipId === ship.id && s.idx === idx);
                  const isAvailable = (slot.cantidadDisponible || 0) > 0;

                  return (
                    <div 
                      key={`${ship.id}-slot-${idx}`} 
                      className={`port-container-unit literal-container type-${tipoClass} ${!slot.mgsAsignada ? 'unassigned' : ''} ${isSelected ? 'selected' : ''} ${!isAvailable ? 'empty' : ''}`}
                      onClick={(e) => isAvailable && toggleSelect(ship.id, idx, e)}
                      title={isAvailable ? `Equipo: ${slot.nombreMgs} - Disponible: ${slot.cantidadDisponible}` : 'Contenedor Vacío'}
                    >
                      {isAvailable && (
                        <div className="container-checkbox-wrapper">
                          <div className={`custom-checkbox ${isSelected ? 'checked' : ''}`}>
                            {isSelected && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>}
                          </div>
                        </div>
                      )}
                      
                      <div className="container-ribs"></div>
                      <div className="literal-container-content">
                        <span className="container-logo">{equipo.substring(0, 3).toUpperCase()}</span>
                        <span className="container-full-type">{equipo.toUpperCase()}</span>
                        {slot.cantidadDisponible !== undefined && (
                          <div className="container-qty-badge">
                            {slot.cantidadDisponible} unidades
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

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
          {renderTerminal('Cartagena')}
          {renderTerminal('Buenaventura')}
        </div>

        {selectedSlots.length > 0 && (
          <div className="floating-dispatch-bar animate-in-up">
            <div className="bar-info">
              <span className="selection-count">{selectedSlots.length}</span>
              <div className="bar-text">
                <strong>Equipos seleccionados</strong>
                <span>Carga lista para asignar a vehículo</span>
              </div>
            </div>
            <div className="bar-actions">
              <button className="btn-cancel-selection" onClick={() => setSelectedSlots([])}>Cancelar</button>
              <button className="btn-prepare-dispatch" onClick={handlePrepareDispatch}>
                <span>Preparar Despacho</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
