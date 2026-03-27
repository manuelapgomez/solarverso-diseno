import { Users } from 'lucide-react';

interface GenderQuotaIndicatorProps {
  percentage: number;
  target?: number;
  total?: number;
  women?: number;
}

export default function GenderQuotaIndicator({ 
  percentage, 
  target = 30,
  total,
  women
}: GenderQuotaIndicatorProps) {
  const meetsTarget = percentage >= target;

  return (
    <div 
      className="p-4 rounded-lg"
      style={{ 
        backgroundColor: meetsTarget 
          ? 'rgba(0, 200, 83, 0.1)' 
          : 'rgba(255, 152, 0, 0.1)',
        border: meetsTarget
          ? '1px solid rgba(0, 200, 83, 0.3)'
          : '1px solid rgba(255, 152, 0, 0.3)'
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Users size={16} style={{ 
          color: meetsTarget ? 'var(--compliance-green)' : '#FF9800' 
        }} />
        <span style={{ 
          color: 'var(--text-on-dark)', 
          fontSize: '11px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Equidad de Género
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-2">
          <span style={{ 
            color: 'var(--text-inactive)', 
            fontSize: '10px'
          }}>
            Mujeres en Cuadrilla
          </span>
          <span style={{ 
            color: meetsTarget ? 'var(--compliance-green)' : '#FF9800', 
            fontSize: '18px',
            fontWeight: 700,
            fontFamily: 'var(--tech-mono)'
          }}>
            {percentage}%
          </span>
        </div>
        
        <div 
          style={{
            height: '8px',
            backgroundColor: '#121212',
            borderRadius: '4px',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {/* Target Marker */}
          <div 
            style={{
              position: 'absolute',
              left: `${target}%`,
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'var(--text-on-dark)',
              zIndex: 2
            }}
          />
          
          {/* Progress Fill */}
          <div 
            style={{
              width: `${Math.min(percentage, 100)}%`,
              height: '100%',
              backgroundColor: meetsTarget ? 'var(--compliance-green)' : '#FF9800',
              transition: 'width 0.3s ease',
              borderRadius: '4px'
            }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between">
        <div>
          {total !== undefined && women !== undefined && (
            <div style={{ 
              color: 'var(--text-inactive)', 
              fontSize: '10px',
              fontFamily: 'var(--tech-mono)'
            }}>
              {women} de {total} empleados
            </div>
          )}
        </div>
        <div>
          <div 
            className="px-2 py-1 rounded"
            style={{
              backgroundColor: meetsTarget 
                ? 'rgba(0, 200, 83, 0.2)' 
                : 'rgba(255, 152, 0, 0.2)',
              color: meetsTarget ? 'var(--compliance-green)' : '#FF9800',
              fontSize: '9px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.3px'
            }}
          >
            {meetsTarget ? '✓ Cumple' : `Meta: ${target}%`}
          </div>
        </div>
      </div>
    </div>
  );
}