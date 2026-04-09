import React, { useState, useMemo } from 'react';
import { type SlotCarga, type Minigranja } from '../../data/mockLogistica';
import truckImg from '../../assets/logistica/truck_flatbed.png';

interface SelectionItem {
  slot: SlotCarga;
  slotIndex: number;
  shipId: string;
}

interface DispatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  selection: SelectionItem[];
  minigranjas: Minigranja[];
  onConfirm: (data: {
    placa: string;
    capacidadMax: number;
    items: {
      tipo: string;
      cantidad: number;
      shipId: string;
      slotId: string;
      idMgsDestino: string;
      nombreMgsDestino: string;
      fechaEntrega: string;
    }[];
  }) => void;
}

interface LoadItem {
  slotId: string;
  tipo: string;
  cantidadMax: number;
  cantidadCargar: number;
  idMgs: string;
  nombreMgs: string;
  fecha: string;
  fechaIdeal: string;
  shipId: string;
}

export const DispatchModal: React.FC<DispatchModalProps> = ({ 
  isOpen, 
  onClose, 
  selection, 
  minigranjas, 
  onConfirm 
}) => {
  const [loadItems, setLoadItems] = useState<LoadItem[]>(() => 
    selection.map(sel => {
      // Intentar encontrar la fecha ideal de llegada al destino (Transporte al Proyecto)
      const transporteStep = sel.slot.timeline?.find(s => s.label === "Transporte al Proyecto");
      const fechaIdeal = transporteStep?.fechaObjetivo || new Date().toISOString().split('T')[0];
      
      return {
        slotId: sel.slot.idSlot,
        tipo: sel.slot.tipoEquipo || 'Equipo',
        cantidadMax: sel.slot.cantidadDisponible || 0,
        cantidadCargar: 0,
        idMgs: sel.slot.mgsAsignada || '',
        nombreMgs: sel.slot.nombreMgs || '',
        fecha: fechaIdeal, // Por defecto usamos la ideal
        fechaIdeal: fechaIdeal,
        shipId: sel.shipId
      };
    })
  );

  const handleUpdateItem = (slotId: string, field: keyof LoadItem, value: any) => {
    setLoadItems(prev => prev.map(item => {
      if (item.slotId === slotId) {
        if (field === 'idMgs') {
          const mg = minigranjas.find(m => m.id === value);
          return { ...item, idMgs: value, nombreMgs: mg ? mg.nombre : '' };
        }
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  const totalLoaded = useMemo(() => loadItems.reduce((sum, item) => sum + item.cantidadCargar, 0), [loadItems]);

  const handleConfirm = () => {
    onConfirm({
      placa: 'TBD-000',
      capacidadMax: 100,
      items: loadItems.filter(item => item.cantidadCargar > 0).map(item => ({
        tipo: item.tipo,
        cantidad: item.cantidadCargar,
        shipId: item.shipId,
        slotId: item.slotId,
        idMgsDestino: item.idMgs,
        nombreMgsDestino: item.nombreMgs,
        fechaEntrega: item.fecha
      }))
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay open" style={{ zIndex: 10000 }}>
      <div className="modal-content dispatch-refactor-modal">
        <div className="modal-header">
          <h2>Cantidades de producto</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {/* Table Area */}
          <div className="dispatch-table-container">
            <table className="dispatch-refactor-table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th style={{ textAlign: 'center' }}>Cantidad</th>
                  <th style={{ textAlign: 'center' }}>Salida</th>
                  <th style={{ textAlign: 'left' }}>Destino</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {loadItems.map(item => (
                  <tr key={item.slotId}>
                    <td className="col-product">
                      <div className="prod-name-main">{item.tipo}</div>
                    </td>
                    <td className="col-bl" style={{ textAlign: 'center', fontSize: '20px', fontWeight: 500 }}>{item.cantidadMax}</td>
                    <td className="col-input">
                      <div className="qty-refactor-spinner">
                        <span className="qty-val">{item.cantidadCargar}</span>
                        <div className="qty-spinner-controls">
                          <button onClick={() => handleUpdateItem(item.slotId, 'cantidadCargar', Math.min(item.cantidadMax, item.cantidadCargar + 1))}>▴</button>
                          <button onClick={() => handleUpdateItem(item.slotId, 'cantidadCargar', Math.max(0, item.cantidadCargar - 1))}>▾</button>
                        </div>
                      </div>
                    </td>
                    <td className="col-destination">
                      <div className="dest-stack" style={{ position: 'relative' }}>
                        <select 
                          className="dest-select-inline hover:bg-slate-50 transition-colors" 
                          value={item.idMgs || ''} 
                          onChange={(e) => handleUpdateItem(item.slotId, 'idMgs', e.target.value)}
                          style={{
                            width: '100%',
                            border: '1px solid transparent',
                            borderBottom: '1px solid #e2e8f0',
                            padding: '4px 0',
                            fontWeight: 600,
                            color: '#0f172a',
                            marginBottom: '6px',
                            fontSize: '14px',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            outline: 'none',
                            appearance: 'none', // Remove native arrow to style neatly
                          }}
                        >
                          <option value="" disabled>Seleccione un proyecto destino...</option>
                          {minigranjas.map(mg => (
                            <option key={mg.id} value={mg.id}>{mg.nombre}</option>
                          ))}
                        </select>
                        <div style={{ position: 'absolute', right: '4px', top: '8px', pointerEvents: 'none', color: '#94a3b8' }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                        </div>
                        <span className="dest-code">{minigranjas.find(m => m.id === item.idMgs)?.codigo || 'CO_CODIGO_PENDIENTE'}</span>
                        <div className="dest-loc">
                           <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                           <span>{minigranjas.find(m => m.id === item.idMgs)?.ubicacion || 'Ubicación pendiente...'}</span>
                        </div>
                      </div>
                    </td>
                    <td className="col-date">
                      <div className="date-input-wrapper-premium">
                        <input 
                          type="date" 
                          className={`date-input-premium ${item.fecha <= item.fechaIdeal ? 'on-time' : 'delayed'}`}
                          value={item.fecha}
                          onChange={(e) => handleUpdateItem(item.slotId, 'fecha', e.target.value)}
                          onClick={(e) => e.stopPropagation()} // Prevent double trigger
                        />
                        <div className="date-display-premium-overlay" style={{ color: item.fecha <= item.fechaIdeal ? '#3b82f6' : '#ef4444', pointerEvents: 'none' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ opacity: 0.7 }}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                          {(() => {
                            try {
                              const d = new Date(item.fecha + 'T00:00:00');
                              if (isNaN(d.getTime())) return item.fecha; // fallback
                              return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/ de /g, '.').replace(/ /g, '/');
                            } catch (e) {
                              return item.fecha;
                            }
                          })()}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Integrated Truck Viz - Improved Proportions */}
          <div className="truck-preview-scene-clean">
             <div className="truck-illustration-wrapper" style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
                <div 
                  className="truck-trailer-graphic" 
                  style={{ 
                    backgroundImage: `url(${truckImg})`,
                    backgroundSize: '170%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center 48%',
                    height: '450px',
                    width: '100%',
                    position: 'relative'
                  }}
                >
                  <div className="truck-cargo-container" style={{ 
                    position: 'absolute',
                    top: '41%', 
                    left: '26%', 
                    width: '64%', 
                    height: '28%', 
                    display: 'flex', 
                    gap: '12px', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10
                  }}>
                    {loadItems.filter(i => i.cantidadCargar > 0).map((item) => (
                      <div key={item.slotId} className="load-card-premium-mini">
                        <span className="card-lbl">
                          {item.tipo.substring(0, 3).toUpperCase()}
                        </span>
                        <span className="card-qty-pill">
                          {item.cantidadCargar} unidades
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
             </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cancelar</button>
          <button 
            className="btn-primary" 
            disabled={totalLoaded === 0}
            onClick={handleConfirm}
          >
            CONFIRMAR
          </button>
        </div>
      </div>
    </div>
  );
};
