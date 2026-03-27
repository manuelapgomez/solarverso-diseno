interface ScoreDonutProps {
  score: number;
  size?: number;
  thickness?: number;
  label?: string;
  minThreshold?: number;
}

export default function ScoreDonut({ 
  score, 
  size = 120, 
  thickness = 12,
  label = 'SST Score',
  minThreshold = 86
}: ScoreDonutProps) {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const meetsThreshold = score >= minThreshold;

  return (
    <div className="flex flex-col items-center">
      <div 
        className="relative flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {/* Background Circle */}
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#121212"
            strokeWidth={thickness}
          />
          {/* Progress Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={meetsThreshold ? 'var(--compliance-green)' : 'var(--risk-red)'}
            strokeWidth={thickness}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
        </svg>
        
        {/* Center Text */}
        <div 
          className="absolute flex flex-col items-center justify-center"
        >
          <div 
            style={{
              color: meetsThreshold ? 'var(--compliance-green)' : 'var(--risk-red)',
              fontSize: `${size / 3.5}px`,
              fontWeight: 700,
              fontFamily: 'var(--tech-mono)',
              lineHeight: '1'
            }}
          >
            {score}%
          </div>
          {minThreshold && (
            <div 
              style={{
                color: 'var(--text-inactive)',
                fontSize: `${size / 15}px`,
                marginTop: '4px',
                fontFamily: 'var(--font-ui)'
              }}
            >
              Min {minThreshold}%
            </div>
          )}
        </div>
      </div>
      
      {/* Label */}
      <div 
        style={{
          color: 'var(--text-on-dark)',
          fontSize: '12px',
          fontWeight: 600,
          marginTop: '8px',
          textAlign: 'center'
        }}
      >
        {label}
      </div>
    </div>
  );
}