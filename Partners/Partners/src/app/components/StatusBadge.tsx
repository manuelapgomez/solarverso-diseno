import { CheckCircle2, AlertCircle, Clock, XCircle } from 'lucide-react';

interface StatusBadgeProps {
  status: 'approved' | 'review' | 'pending' | 'rejected';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

export default function StatusBadge({ status, size = 'md', showIcon = true }: StatusBadgeProps) {
  const getStatusConfig = () => {
    switch (status) {
      case 'approved':
        return {
          icon: <CheckCircle2 size={size === 'sm' ? 10 : size === 'md' ? 12 : 14} />,
          bg: 'rgba(0, 200, 83, 0.1)',
          color: 'var(--compliance-green)',
          label: 'Aprobado'
        };
      case 'review':
        return {
          icon: <Clock size={size === 'sm' ? 10 : size === 'md' ? 12 : 14} />,
          bg: 'rgba(255, 152, 0, 0.1)',
          color: 'var(--warning-orange)',
          label: 'En Revisión'
        };
      case 'pending':
        return {
          icon: <AlertCircle size={size === 'sm' ? 10 : size === 'md' ? 12 : 14} />,
          bg: 'rgba(158, 158, 158, 0.1)',
          color: 'var(--pending-gray)',
          label: 'Pendiente'
        };
      case 'rejected':
        return {
          icon: <XCircle size={size === 'sm' ? 10 : size === 'md' ? 12 : 14} />,
          bg: 'rgba(255, 82, 82, 0.1)',
          color: 'var(--risk-red)',
          label: 'Subsanar'
        };
    }
  };

  const config = getStatusConfig();

  const sizeStyles = {
    sm: {
      fontSize: '9px',
      padding: '2px 6px',
      gap: '3px'
    },
    md: {
      fontSize: '10px',
      padding: '4px 8px',
      gap: '4px'
    },
    lg: {
      fontSize: '11px',
      padding: '6px 10px',
      gap: '5px'
    }
  };

  const currentSize = sizeStyles[size];

  return (
    <div 
      className="inline-flex items-center rounded"
      style={{
        backgroundColor: config.bg,
        color: config.color,
        fontSize: currentSize.fontSize,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.3px',
        padding: currentSize.padding,
        gap: currentSize.gap
      }}
    >
      {showIcon && config.icon}
      <span>{config.label}</span>
    </div>
  );
}
