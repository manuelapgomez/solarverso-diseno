import React from 'react';
import { type Barco, type SlotCarga } from '../../data/mockLogistica';

interface TruckViewProps {
  barcos: Barco[];
  onOpenSwap: (slot: SlotCarga, slotIndex: number, shipId: string) => void;
}

export const TruckView: React.FC<TruckViewProps> = ({ barcos, onOpenSwap }) => {
  // Logic: Group approved and assigned slots into "trucks"
  // For demo: group items by the destination MGS (simulating one truck per destination or similar)
  const approvedSlots = barcos.flatMap(ship => 
    ship.slots
      .map((slot, idx) => ({ ...slot, shipId: ship.id, shipName: ship.nombre, originalIndex: idx }))
      .filter(s => s.BT_status === 'approved' && s.mgsAsignada)
  );

  // Grouping by mgsAsignada to simulate trucks
  const trucksMap: Record<string, typeof approvedSlots> = {};
  approvedSlots.forEach(slot => {
    const key = slot.mgsAsignada || 'unassigned';
    if (!trucksMap[key]) trucksMap[key] = [];
    trucksMap[key].push(slot);
  });

  return (
    <div className="truck-view-container">
      <div className="truck-grid">
        {Object.keys(trucksMap).length > 0 ? (
          Object.entries(trucksMap).map(([mgsId, items], idx) => (
            <div key={mgsId} className="truck-card-premium">
              <div className="truck-visual-header">
                <div className="truck-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 17h4V5H2v12h3m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0m14 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 17h-1m1-7V5h4.14a1 1 0 0 1 .86.5l2 3.5.5V17h-3"></path></svg>
                </div>
                <div className="truck-main-info">
                  <div className="truck-id">DESPACHO-00{idx + 1}</div>
                  <div className="truck-dest">Destino: {items[0].nombreMgs}</div>
                </div>
                <div className="truck-status-tag">EN RUTA</div>
              </div>
              
              <div className="truck-cargo-list">
                {items.map((item) => (
                  <div key={item.idSlot} className="cargo-item-mini">
                    <div className="cargo-type-tag">{item.tipoEquipo}</div>
                    <div className="cargo-id-tag">{item.idSlot}</div>
                    <button 
                      className="edit-btn-circle"
                      onClick={() => onOpenSwap(item as SlotCarga, item.originalIndex, item.shipId)}
                    >
                      ✎
                    </button>
                  </div>
                ))}
              </div>

              <div className="truck-timeline-mini">
                <div className="t-step completed">
                  <span className="t-label">Salida</span>
                  <span className="t-date">Mar 22</span>
                </div>
                <div className="t-step current">
                  <span className="t-label">ETA</span>
                  <span className="t-date">Mar 25</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">No hay camiones en ruta actualmente.</div>
        )}
      </div>
    </div>
  );
};
