import { Shield, CheckCircle2 } from 'lucide-react';

interface SSTScoreCardProps {
  score: number;
  minThreshold?: number;
}

export default function SSTScoreCard({ score, minThreshold = 86 }: SSTScoreCardProps) {
  const isCompliant = score >= minThreshold;
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div 
      className="flex flex-col items-center justify-center"
      style={{
        width: '88px',
        height: '88px',
        position: 'relative'
      }}
    >
      {/* Circular Progress Ring */}
      <svg 
        width="88" 
        height="88" 
        style={{ 
          transform: 'rotate(-90deg)',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      >
        {/* Background Circle */}
        <circle
          cx="44"
          cy="44"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="6"
        />
        {/* Progress Circle */}
        <circle
          cx="44"
          cy="44"
          r={radius}
          fill="none"
          stroke={isCompliant ? '#00C853' : '#FF5252'}
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.5s ease'
          }}
        />
      </svg>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center" style={{ zIndex: 1 }}>
        <div className="flex items-end gap-0.5">
          <span style={{ 
            fontSize: '20px',
            fontWeight: 700,
            color: isCompliant ? '#00C853' : '#FF5252',
            fontFamily: 'JetBrains Mono, monospace',
            lineHeight: '1'
          }}>
            {score}
          </span>
          <span style={{ 
            fontSize: '11px',
            fontWeight: 600,
            color: isCompliant ? '#00C853' : '#FF5252',
            marginBottom: '2px'
          }}>
            %
          </span>
        </div>
        <span style={{ 
          color: '#9E9E9E',
          fontSize: '8px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          marginTop: '2px'
        }}>
          SST Score
        </span>
      </div>

      {/* Compliance Badge */}
      {isCompliant && (
        <div 
          style={{
            position: 'absolute',
            top: '-3px',
            right: '-3px',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            backgroundColor: '#00C853',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'none'
          }}
        >
          <CheckCircle2 size={11} style={{ color: '#FFFFFF' }} />
        </div>
      )}
    </div>
  );
}
