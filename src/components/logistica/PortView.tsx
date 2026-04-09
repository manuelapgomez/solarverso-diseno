import React, { useState } from 'react';
import { type Barco, type SlotCarga } from '../../data/mockLogistica';
import './logistica.css';

interface PortViewProps {
  barcos: Barco[];
  onOpenDispatch: (selection: { slot: SlotCarga; slotIndex: number; shipId: string }[]) => void;
  onOpenSwap: (slot: SlotCarga, slotIndex: number, shipId: string) => void;
}

export const PortView: React.FC<PortViewProps> = ({ barcos, onOpenDispatch, onOpenSwap }) => {
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
            <div key={ship.id} className="bl-group terminal-column-base ship-card">
              <div className="terminal-column-header">
                <span className="node-label">BILL OF LADING</span>
                <h3 className="vessel-id-title">{ship.bl_code}</h3>
                <div className="bl-vessel-info">
                  <span className="vessel-name-sub">Vessel: <strong>{ship.nombre}</strong></span>
                </div>
              </div>

              <div className="container-stack literal-stack">
                {ship.slots.map((slot, idx) => {
                  const equipo = slot.tipoEquipo || 'generico';
                  const tipoClass = equipo.toLowerCase().replace(/[^a-z0-9]/g, '-');
                  const isSelected = selectedSlots.some(s => s.shipId === ship.id && s.idx === idx);
                  const displayUnits = slot.cantidadTotal ?? slot.cantidadDisponible ?? 30;

                  return (
                    <div 
                      key={`${ship.id}-slot-${idx}`} 
                      className={`port-container-unit literal-container type-${tipoClass} ${!slot.mgsAsignada ? 'unassigned' : ''} ${isSelected ? 'selected' : ''}`}
                      onClick={(e) => toggleSelect(ship.id, idx, e)}
                      title={`Equipo: ${slot.nombreMgs || 'Sin Asignar'} - Unidades: ${displayUnits}`}
                    >
                      <div className="container-checkbox-wrapper">
                        <div className={`custom-checkbox ${isSelected ? 'checked' : ''}`}>
                          {isSelected && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>}
                        </div>
                      </div>
                      
                      <div className="container-ribs"></div>
                      <div className="literal-container-content">
                        <div 
                           style={{ display: 'flex', gap: '8px', cursor: 'pointer', transition: 'color 0.2s', alignItems: 'center' }} 
                           onClick={(e) => { e.stopPropagation(); onOpenSwap(slot, idx, ship.id); }}
                           className="clickable-container-name"
                           title="Ver hoja de vida del producto"
                        >
                          <span className="container-logo">{equipo.substring(0, 3).toUpperCase()}</span>
                          <span className="container-full-type hover:underline">{equipo.toUpperCase()}</span>
                        </div>
                        
                        <div className="container-qty-badge">
                          {displayUnits} unidades
                        </div>
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
    <div className="supply-view-viewport">
        <div className="port-stack-container">
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
  );
};
