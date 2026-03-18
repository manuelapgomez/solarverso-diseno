import React, { useState, useEffect } from "react";
import { type Barco, type MgsHuerfana, type SlotCarga } from "../../data/mockLogistica";

interface SwapModalProps {
  isOpen: boolean;
  onClose: () => void;
  ship: Barco;
  slot: SlotCarga | null;
  slotIndex: number | null;
  orphans: MgsHuerfana[];
  onSwap: (slotIndex: number, nuevaMgsId: string, nuevaMgsNombre: string, equipoRequerido: string) => void;
}

export const SwapModal: React.FC<SwapModalProps> = ({
  isOpen, onClose, ship, slot, slotIndex, orphans, onSwap
}) => {
  const [selectedMgsId, setSelectedMgsId] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [selectedEquipoVacios, setSelectedEquipoVacios] = useState<string>("Tracker");

  useEffect(() => {
    setSelectedMgsId("");
    setIsDropdownOpen(false);
  }, [isOpen, slot]);

  if (!isOpen || !slot || slotIndex === null) return null;

  const isFilled = slot.mgsAsignada !== null;
  const equipoAFiltrar = isFilled ? slot.tipoEquipo : selectedEquipoVacios;
  
  const validOrphans = orphans.filter(o => o.equipoFaltante === equipoAFiltrar);

  const handleAction = () => {
    if (!selectedMgsId || !equipoAFiltrar) return;
    const selectedOrphan = validOrphans.find(o => o.id === selectedMgsId);
    if (selectedOrphan) {
      onSwap(slotIndex, selectedOrphan.id, selectedOrphan.nombre, equipoAFiltrar);
    }
  };

  const selectedOrphanName = validOrphans.find(o => o.id === selectedMgsId)?.nombre || "Seleccionar ▼";

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{isFilled ? `Reubicar: ${slot.tipoEquipo}` : "Llenar Slot Vacío"}</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <p style={{ color: '#4b5563', fontSize: '14px', margin: 0 }}>
             Estás {isFilled ? "reasignando código" : "cargando"} a bordo del <strong>{ship.nombre}</strong>.
          </p>

          {!isFilled && (
             <div style={{ marginTop: '16px', marginBottom: '8px', position: 'relative' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#6b7280', marginBottom: '6px' }}>Tipo de Equipo a Cargar:</label>
                
                {/* Custom Type Select */}
                <div 
                  className="custom-select-trigger" 
                   style={{ 
                    width: '100%', 
                    boxSizing: 'border-box', 
                    padding: '10px 14px', 
                    borderRadius: '8px', 
                    border: '1px solid #d1d5db', 
                    backgroundColor: '#ffffff',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '13px',
                    color: 'var(--color-text-dark)',
                    fontFamily: 'var(--font-family-primary)'
                  }}
                  onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
                >
                  <span>{selectedEquipoVacios}</span>
                  <span style={{ fontSize: '10px', color: '#6b7280' }}>▼</span>
                </div>

                {isTypeDropdownOpen && (
                  <div style={{ 
                    position: 'absolute', 
                    top: 'calc(100% + 4px)', 
                    left: '0', 
                    width: '100%', 
                    background: '#ffffff', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
                    border: '1px solid #e5e7eb', 
                    zIndex: 101, 
                    overflow: 'hidden' 
                  }}>
                    {["Tracker", "Shelter", "Inversor", "Paneles", "Reconectadores"].map(tipo => (
                      <div 
                        key={tipo}
                        style={{ 
                          padding: '8px 12px', 
                          fontSize: '13px', 
                          cursor: 'pointer', 
                          backgroundColor: selectedEquipoVacios === tipo ? 'rgba(29, 153, 204, 0.1)' : 'white',
                          color: selectedEquipoVacios === tipo ? 'var(--brand-primary)' : 'var(--color-text-light)',
                          fontWeight: selectedEquipoVacios === tipo ? 'var(--font-weight-medium)' : 'var(--font-weight-regular)',
                          fontFamily: 'var(--font-family-primary)',
                          transition: 'background-color 0.2s'
                        }}
                        onClick={() => { 
                          setSelectedEquipoVacios(tipo); 
                          setSelectedMgsId(""); 
                          setIsTypeDropdownOpen(false); 
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = selectedEquipoVacios === tipo ? '#eff6ff' : 'white'}
                      >
                        {tipo}
                      </div>
                    ))}
                  </div>
                )}
             </div>
          )}

          <div className="swap-direction" style={{ overflow: 'visible', marginTop: '16px' }}>
            <div className="swap-box">
              <span className="swap-box-label" style={{ fontWeight: '500', color: '#6b7280' }}>{isFilled ? "Destino Actual" : "Estado del Slot"}</span>
              <span className="swap-box-value">
                {isFilled ? slot.nombreMgs : "Vacío (Disponible)"}
              </span>
              {isFilled && (
                <span style={{display: 'block', fontSize: '11px', color: '#9ca3af', marginTop: '4px'}}>
                  (Pasará a Huérfanas)
                </span>
              )}
            </div>
            
            <div className="swap-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>

            <div className="swap-box" style={{ position: 'relative' }}>
              <span className="swap-box-label" style={{ fontWeight: '500', color: '#6b7280' }}>Nuevo Destino</span>
              
              <div 
                className="swap-box-value custom-select-trigger" 
                style={{ color: 'var(--brand-primary)', cursor: 'pointer', padding: '8px', borderRadius: '6px', background: isDropdownOpen ? 'rgba(29, 153, 204, 0.1)' : 'transparent', display: 'inline-flex', alignItems: 'center', gap: '4px', border: isDropdownOpen ? '1px solid var(--color-secondary-blue-4)' : '1px solid transparent', userSelect: 'none', fontFamily: 'var(--font-family-primary)' }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedOrphanName}
              </div>

              {isDropdownOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: '50%', transform: 'translateX(-50%)', width: '320px', background: '#ffffff', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', border: '1px solid #e5e7eb', zIndex: 100, textAlign: 'left', overflow: 'hidden' }}>
                    
                    <div style={{ padding: '8px 12px', background: '#f9fafb', borderBottom: '1px solid #e5e7eb', fontSize: '11px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                      HUÉRFANAS ESPERANDO {equipoAFiltrar}
                    </div>

                    <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                      {validOrphans.length === 0 ? (
                        <div style={{ padding: '12px', fontSize: '13px', color: '#9ca3af', textAlign: 'center' }}>No hay MGS disponibles.</div>
                      ) : (
                        validOrphans.map(o => (
                          <div 
                            key={o.id}
                            style={{ 
                              padding: '12px 14px', 
                              cursor: 'pointer', 
                              borderBottom: '1px solid #f3f4f6', 
                              backgroundColor: selectedMgsId === o.id ? 'rgba(29, 153, 204, 0.1)' : 'white', 
                              display: 'flex', 
                              alignItems: 'flex-start',
                              gap: '12px',
                              transition: 'background-color 0.2s'
                            }}
                            onClick={() => { setSelectedMgsId(o.id); setIsDropdownOpen(false); }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = selectedMgsId === o.id ? '#eff6ff' : 'white'}
                          >
                            {/* Estrella de Prioridad */}
                            <div style={{ marginTop: '2px', flexShrink: 0 }}>
                              {(o.prioridadUnergy === 'Crítica' || o.prioridadUnergy === 'Alta') ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#eab308" stroke="#ca8a04" strokeWidth="1" strokeLinejoin="round">
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                              ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5">
                                  <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                              )}
                            </div>

                            {/* Info Principal */}
                            <div style={{ flex: 1, minWidth: 0, paddingRight: '12px' }}>
                               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2px' }}>
                                 <span style={{ color: '#111827', fontWeight: '600', fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                   {o.nombre}
                                 </span>
                                 {selectedMgsId === o.id && (
                                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                     <polyline points="20 6 9 17 4 12"></polyline>
                                   </svg>
                                 )}
                               </div>
                               <div style={{ color: '#6b7280', fontSize: '11px', fontFamily: 'monospace', marginBottom: '4px', letterSpacing: '-0.2px' }}>
                                 {o.codigo || "CÓDIGO PENDIENTE"}
                               </div>
                               <div style={{ color: '#9ca3af', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                   <circle cx="12" cy="10" r="3"></circle>
                                 </svg>
                                 {o.ubicacion || "Ubicación Regional"}
                               </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                </div>
              )}

            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cancelar</button>
          <button 
            className="btn-primary" 
            onClick={handleAction}
            disabled={!selectedMgsId}
          >
            {isFilled ? "Confirmar Reubicación" : "Asignar Carga"}
          </button>
        </div>
      </div>
    </div>
  );
};
