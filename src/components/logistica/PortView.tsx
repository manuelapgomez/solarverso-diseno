import React from 'react';
import { type Barco, type SlotCarga } from '../../data/mockLogistica';

interface PortViewProps {
  barcos: Barco[];
  onOpenSwap: (slot: SlotCarga, slotIndex: number, shipId: string) => void;
}

export const PortView: React.FC<PortViewProps> = ({ barcos, onOpenSwap }) => {
  // Group slots by Barco (BL)
  const groupedByBL = barcos.map(ship => {
    const approvedSlots = ship.slots
      .map((slot, idx) => ({ ...slot, shipId: ship.id, shipName: ship.nombre, bl: ship.bl_code, originalIndex: idx }))
      .filter(s => s.BT_status === 'approved');
    
    return {
      shipId: ship.id,
      shipName: ship.nombre,
      bl: ship.bl_code,
      slots: approvedSlots
    };
  }).filter(group => group.slots.length > 0);

  return (
    <div className="port-view-container">
      {groupedByBL.length > 0 ? (
        groupedByBL.map((group) => (
          <div key={group.shipId} className="port-bl-group">
            <div className="bl-group-header">
                <div className="bl-info">
                  <span className="bl-label">BILL OF LADING</span>
                  <span className="bl-value">{group.bl}</span>
                </div>
                <div className="vessel-info">
                  <span className="vessel-label">BUQUE:</span>
                  <span className="vessel-value">{group.shipName}</span>
                </div>
                <div className="slot-count-tag">{group.slots.length} Containers</div>
            </div>
            
            <div className="port-grid">
              {group.slots.map((container) => (
                <div key={`${container.shipId}-${container.idSlot}`} className="container-card">
                  <div className="container-header">
                    <span className="container-id">CONT-{container.idSlot.split('-').pop()}</span>
                    <div className="badge-bt">BT APROBADO</div>
                  </div>
                  <div className="container-body">
                    <div className="slot-mini-info">
                      <span className="type-label">{container.tipoEquipo}</span>
                      <span className="mgs-label">{container.nombreMgs || 'No asignada'}</span>
                    </div>
                    <button 
                      className="reassign-btn"
                      onClick={() => onOpenSwap(container as SlotCarga, container.originalIndex, container.shipId)}
                    >
                      Reasignar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="empty-state">No hay contenedores aprobados para liberar del puerto.</div>
      )}
    </div>
  );
};
