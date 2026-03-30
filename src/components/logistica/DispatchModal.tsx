import React, { useState, useMemo } from 'react';
import { type SlotCarga, type Minigranja } from '../../data/mockLogistica';

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
    selection.map(sel => ({
      slotId: sel.slot.idSlot,
      tipo: sel.slot.tipoEquipo || 'Equipo',
      cantidadMax: sel.slot.cantidadDisponible || 0,
      cantidadCargar: 0,
      idMgs: sel.slot.mgsAsignada || '',
      nombreMgs: sel.slot.nombreMgs || '',
      fecha: new Date().toISOString().split('T')[0],
      shipId: sel.shipId
    }))
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
                  <th>Destino</th>
                  <th>Destino</th>
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
                      <div className="dest-stack">
                        <strong className="dest-name">{item.nombreMgs}</strong>
                        <span className="dest-code">{minigranjas.find(m => m.id === item.idMgs)?.codigo || 'COLATLT14P2_LURUACO_SUR'}</span>
                        <div className="dest-loc">
                           <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                           <span>{minigranjas.find(m => m.id === item.idMgs)?.ubicacion || 'Uruaco - Luruaco, Atlántico'}</span>
                        </div>
                      </div>
                    </td>
                    <td className="col-date">
                      <div className="date-display-premium">
                        {new Date(item.fecha).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }).replace(' de ', '.').replace(' ', '/')}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Truck Visualization Area */}
          <div className="truck-preview-scene-clean">
             <div className="truck-illustration-wrapper">
               <img src="https://cdni.iconscout.com/illustration/premium/thumb/delivery-truck-8406793-6677943.png" alt="Truck" className="base-truck-img" />
               
               <div className="truck-load-deck">
                 {loadItems.filter(i => i.cantidadCargar > 0).map((item) => (
                   <div 
                      key={item.slotId} 
                      className={`load-card-premium-mini type-${item.tipo.toLowerCase()}`}
                    >
                     <span className="card-lbl">{item.tipo.substring(0, 3).toUpperCase()}</span>
                     <span className="card-qty">{item.cantidadCargar} unidades</span>
                   </div>
                 ))}
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
