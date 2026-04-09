import React, { useState } from 'react';

interface TransportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { medio: string; ocCode: string; fechaSalida: string; fechaLlegada: string; puertoSalida: string; puertoLlegada: string }) => void;
}

export const TransportModal: React.FC<TransportModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [medio, setMedio] = useState<string>('barco');
  const [ocCode, setOcCode] = useState<string>('');
  const [fechaSalida, setFechaSalida] = useState<string>('');
  const [fechaLlegada, setFechaLlegada] = useState<string>('');
  const [puertoSalida, setPuertoSalida] = useState<string>('');
  const [puertoLlegada, setPuertoLlegada] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit({ medio, ocCode, fechaSalida, fechaLlegada, puertoSalida, puertoLlegada });
    // Reset and close
    setMedio('barco');
    setOcCode('');
    setFechaSalida('');
    setFechaLlegada('');
    setPuertoSalida('');
    setPuertoLlegada('');
    onClose();
  };

  return (
    <div className="modal-overlay open" style={{ zIndex: 10000 }}>
      <div className="modal-content" style={{ maxWidth: '500px' }}>
        <div className="modal-header">
          <h2>Nuevo Transporte</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
          
          {/* Medio de transporte */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, color: '#334155' }}>
              Seleccione el medio de transporte
            </label>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div 
                onClick={() => setMedio('barco')}
                style={{ 
                  flex: 1, 
                  padding: '20px 16px', 
                  border: medio === 'barco' ? '2px solid var(--brand-primary)' : '1px solid #e5e7eb', 
                  borderRadius: '12px', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '8px', 
                  background: medio === 'barco' ? '#eff6ff' : 'white',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ fontSize: '32px' }}>🛳️</div>
                <span style={{ fontWeight: medio === 'barco' ? 700 : 500, color: medio === 'barco' ? '#1e3a8a' : '#64748b' }}>Barco</span>
              </div>
              
              <div 
                onClick={() => setMedio('avion')}
                style={{ 
                  flex: 1, 
                  padding: '20px 16px', 
                  border: medio === 'avion' ? '2px solid var(--brand-primary)' : '1px solid #e5e7eb', 
                  borderRadius: '12px', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '8px', 
                  background: medio === 'avion' ? '#eff6ff' : 'white',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ fontSize: '32px' }}>✈️</div>
                <span style={{ fontWeight: medio === 'avion' ? 700 : 500, color: medio === 'avion' ? '#1e3a8a' : '#64748b' }}>Avión</span>
              </div>
            </div>
          </div>

          {/* Código de la OC */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, color: '#334155' }}>
              Linkear el código de la OC relacionada
            </label>
            <div style={{ position: 'relative' }}>
              <svg 
                style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} 
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <input 
                type="text" 
                value={ocCode}
                onChange={e => setOcCode(e.target.value)}
                placeholder="Ej: OC-102938"
                style={{ 
                  width: '100%', 
                  padding: '14px 16px 14px 44px', 
                  border: '1px solid #cbd5e1', 
                  borderRadius: '10px', 
                  fontSize: '15px', 
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                  color: '#1e293b',
                  backgroundColor: '#ffffff'
                }}
                onFocus={e => e.target.style.borderColor = 'var(--brand-primary)'}
                onBlur={e => e.target.style.borderColor = '#cbd5e1'}
              />
            </div>
          </div>

          {/* Detalles de Ruta y Fechas */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {/* Puerto de salida */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>Puerto de salida</label>
              <input 
                type="text" 
                value={puertoSalida}
                onChange={e => setPuertoSalida(e.target.value)}
                placeholder="Ej: Shanghai"
                style={{ width: '100%', padding: '14px 16px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '15px', outline: 'none', backgroundColor: '#ffffff', color: '#1e293b', boxSizing: 'border-box' }}
              />
            </div>
            
            {/* Fecha de salida */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>Fecha de salida</label>
              <input 
                type="date" 
                value={fechaSalida}
                onChange={e => setFechaSalida(e.target.value)}
                style={{ width: '100%', padding: '14px 16px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '15px', outline: 'none', backgroundColor: '#ffffff', color: '#1e293b', boxSizing: 'border-box' }}
              />
            </div>

            {/* Puerto de llegada */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>Puerto de llegada</label>
              <input 
                type="text" 
                value={puertoLlegada}
                onChange={e => setPuertoLlegada(e.target.value)}
                placeholder="Ej: Buenaventura"
                style={{ width: '100%', padding: '14px 16px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '15px', outline: 'none', backgroundColor: '#ffffff', color: '#1e293b', boxSizing: 'border-box' }}
              />
            </div>

            {/* Fecha aprox de llegada */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>Llegada aproximada</label>
              <input 
                type="date" 
                value={fechaLlegada}
                onChange={e => setFechaLlegada(e.target.value)}
                style={{ width: '100%', padding: '14px 16px', border: '1px solid #cbd5e1', borderRadius: '10px', fontSize: '15px', outline: 'none', backgroundColor: '#ffffff', color: '#1e293b', boxSizing: 'border-box' }}
              />
            </div>
          </div>

        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cancelar</button>
          <button 
            className="btn-primary" 
            disabled={!ocCode.trim()}
            onClick={handleSubmit}
          >
            CREAR TRANSPORTE
          </button>
        </div>
      </div>
    </div>
  );
};
