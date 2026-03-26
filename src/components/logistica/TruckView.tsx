import React from 'react';
import { type Barco, type SlotCarga } from '../../data/mockLogistica';
import './logistica.css';
import truckImg from '../../assets/logistica/truck_flatbed.png';

interface TruckViewProps {
  barcos: Barco[];
  onOpenSwap: (slot: SlotCarga, slotIndex: number, shipId: string) => void;
}

export const TruckView: React.FC<TruckViewProps> = ({ barcos, onOpenSwap }) => {
  return (
    <div className="logistica-container">
      <div className="dashboard-main">
        <header className="dashboard-header">
          <div className="title-wrapper">
             <svg className="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
               <path d="M10 17h4V5H2v12h3m10 0h2v-3.34a4 4 0 0 1 2-3.42V5H10v12h3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
             </svg>
             <h1>Suministro: Despacho Terrestre</h1>
             <div className="title-divider"></div>
             <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>Camiones en Ruta a Proyecto</span>
          </div>
        </header>

        <div className="ships-grid-container" style={{ padding: '0 24px 60px 24px' }}>
          {(() => {
            type Camion = {
              id: string;
              shipId: string;
              origen: string;
              destino: string;
              nombreMgs: string;
              items: { type: string; qty: number; slotRef: SlotCarga }[];
              isFullContainer: boolean;
            };

            const camiones: Camion[] = [];
            let trkCount = 1;

            barcos.forEach(ship => {
              const assigned = ship.slots.filter(s => s.mgsAsignada);
              if (assigned.length === 0) return;

              const byDest = assigned.reduce((acc, slot) => {
                const dest = slot.mgsAsignada!;
                if (!acc[dest]) acc[dest] = [];
                acc[dest].push(slot);
                return acc;
              }, {} as Record<string, SlotCarga[]>);

              Object.entries(byDest).forEach(([destId, slots]) => {
                const boxes: SlotCarga[] = [];
                slots.forEach(slot => {
                  const type = slot.tipoEquipo || 'Otros';
                  if (type.toLowerCase() === 'shelter' || type.toLowerCase() === 'paneles') {
                    camiones.push({
                      id: `TRK-${String(trkCount++).padStart(3, '0')}`,
                      shipId: ship.id,
                      origen: ship.nombre,
                      destino: destId,
                      nombreMgs: slot.nombreMgs || 'Minigranja Destino',
                      items: [{ type, qty: 1, slotRef: slot }],
                      isFullContainer: true
                    });
                  } else {
                    boxes.push(slot);
                  }
                });

                if (boxes.length > 0) {
                  const grouped = boxes.reduce((acc, box) => {
                    const type = box.tipoEquipo || 'Otros';
                    if (!acc[type]) acc[type] = { type, qty: 0, slotRef: box };
                    acc[type].qty++;
                    return acc;
                  }, {} as Record<string, { type: string; qty: number; slotRef: SlotCarga }>);

                  camiones.push({
                    id: `TRK-${String(trkCount++).padStart(3, '0')}`,
                    shipId: ship.id,
                    origen: ship.nombre,
                    destino: destId,
                    nombreMgs: boxes[0].nombreMgs || 'Minigranja Destino',
                    items: Object.values(grouped),
                    isFullContainer: false
                  });
                }
              });
            });

            return camiones.map(camion => (
              <div key={camion.id} className="truck-card-premium">
                <div className="truck-illustration-wrapper">
                  <div 
                    className="truck-trailer-graphic" 
                    style={{ backgroundImage: `url(${truckImg})` }}
                  >
                    <div className="truck-cargo-container">
                      {camion.items.map((item, idx) => {
                        const typeClass = item.type.toLowerCase().replace(/[^a-z0-9]/g, '-');
                        return (
                          <div 
                            key={idx} 
                            className={`${camion.isFullContainer ? 'cargo-full-container' : 'cargo-small-box'} cargo-color-${typeClass}`}
                            onClick={() => onOpenSwap(item.slotRef, 0, camion.shipId)}
                          >
                            <div className="container-ribs"></div>
                            {camion.isFullContainer ? (
                              <span className="block-label" style={{ zIndex: 5 }}>
                                {item.type.toUpperCase()}
                              </span>
                            ) : (
                              <>
                                <span className="block-label" style={{ zIndex: 5, fontSize: '14px', fontWeight: 900, textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}>
                                  {item.type.substring(0, 3).toUpperCase()}
                                </span>
                                <div style={{ position: 'absolute', bottom: '4px', right: '4px', zIndex: 5, background: 'rgba(255,255,255,0.9)', padding: '1px 4px', borderRadius: '4px', fontSize: '8px', fontWeight: 900, color: '#0f172a', boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }}>
                                  {item.qty} U
                                </div>
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="truck-info-footer" style={{ padding: '24px', background: 'rgba(248, 250, 252, 0.6)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(226, 232, 240, 0.5)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div>
                      <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '4px' }}>
                        TRUCK ID: <strong style={{color: '#64748b'}}>{camion.id}</strong>
                      </span>
                      <h3 style={{ margin: '0 0 6px 0', fontSize: '22px', color: '#0f172a', fontWeight: 800, letterSpacing: '-0.02em' }}>
                        {camion.nombreMgs}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '11px', fontWeight: 500 }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span>Origen: {camion.origen}</span>
                      </div>
                    </div>
                    <span className="status-pill status-ready" style={{ letterSpacing: '0.1em' }}>ON ROUTE</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '24px', padding: '16px', background: 'rgba(255,255,255,0.7)', borderRadius: '12px' }}>
                    <div>
                      <span style={{ fontSize: '9px', color: '#94a3b8', display: 'block', letterSpacing: '0.15em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>SALIDA</span>
                      <p style={{ margin: 0, fontWeight: 800, fontSize: '15px', color: '#334155' }}>Mar 22</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '9px', color: '#94a3b8', display: 'block', letterSpacing: '0.15em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>EST. ARRIVAL</span>
                      <p style={{ margin: 0, fontWeight: 800, fontSize: '15px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="3"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        Mar 25
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ));
          })()}
        </div>
      </div>
    </div>
  );
};
