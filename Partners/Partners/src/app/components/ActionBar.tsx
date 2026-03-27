import { CheckCircle, XCircle, Save } from 'lucide-react';

interface ActionBarProps {
  onApprove?: () => void;
  onReject?: () => void;
  onSubmit?: () => void;
  onSaveDraft?: () => void;
  role: 'admin' | 'partner';
  disabled?: boolean;
}

export default function ActionBar({ 
  onApprove, 
  onReject, 
  onSubmit, 
  onSaveDraft,
  role,
  disabled = false
}: ActionBarProps) {
  const isAdmin = role === 'admin';
  
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 px-6 py-4 flex items-center justify-between"
      style={{
        backgroundColor: 'var(--panel-bg-color)',
        borderTop: '1px solid var(--stroke-color)',
        zIndex: 1000,
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Left Side - Secondary Actions */}
      <div className="flex items-center gap-3">
        {isAdmin && onReject && (
          <button
            onClick={onReject}
            disabled={disabled}
            className="h-11 px-6 rounded flex items-center gap-2 transition-all"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(244, 67, 54, 0.5)',
              color: '#F44336',
              fontSize: '13px',
              fontWeight: 600,
              opacity: disabled ? 0.5 : 1,
              cursor: disabled ? 'not-allowed' : 'pointer'
            }}
          >
            <XCircle size={16} />
            Rechazar
          </button>
        )}
        
        {!isAdmin && onSaveDraft && (
          <button
            onClick={onSaveDraft}
            disabled={disabled}
            className="h-11 px-6 rounded flex items-center gap-2 transition-all"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid var(--stroke-color)',
              color: 'var(--text-on-dark)',
              fontSize: '13px',
              fontWeight: 600,
              opacity: disabled ? 0.5 : 1,
              cursor: disabled ? 'not-allowed' : 'pointer'
            }}
          >
            <Save size={16} />
            Guardar Borrador
          </button>
        )}
      </div>

      {/* Right Side - Primary Action */}
      <div className="flex items-center gap-3">
        {isAdmin && onApprove && (
          <button
            onClick={onApprove}
            disabled={disabled}
            className="h-11 px-8 rounded flex items-center gap-2 transition-all hover:opacity-90"
            style={{
              backgroundColor: '#1D99CC',
              color: '#FFFFFF',
              fontSize: '13px',
              fontWeight: 600,
              opacity: disabled ? 0.5 : 1,
              cursor: disabled ? 'not-allowed' : 'pointer'
            }}
          >
            <CheckCircle size={16} />
            Aprobar Solicitud
          </button>
        )}
        
        {!isAdmin && onSubmit && (
          <button
            onClick={onSubmit}
            disabled={disabled}
            className="h-11 px-8 rounded flex items-center gap-2 transition-all hover:opacity-90"
            style={{
              backgroundColor: '#2E7D32',
              color: '#FFFFFF',
              fontSize: '13px',
              fontWeight: 600,
              opacity: disabled ? 0.5 : 1,
              cursor: disabled ? 'not-allowed' : 'pointer'
            }}
          >
            <CheckCircle size={16} />
            Enviar Postulación
          </button>
        )}
      </div>
    </div>
  );
}
