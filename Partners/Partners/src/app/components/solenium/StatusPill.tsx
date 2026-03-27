interface StatusPillProps {
  label: string;
  variant?: 'active' | 'warning' | 'inactive' | 'success';
}

export function StatusPill({ label, variant = 'inactive' }: StatusPillProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'active':
        return {
          backgroundColor: 'rgba(29, 153, 204, 0.2)',
          color: '#1D99CC',
          border: '1px solid rgba(29, 153, 204, 0.4)',
        };
      case 'success':
        return {
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
          color: '#4CAF50',
          border: '1px solid rgba(76, 175, 80, 0.4)',
        };
      case 'warning':
        return {
          backgroundColor: 'rgba(255, 152, 0, 0.2)',
          color: '#FF9800',
          border: '1px solid rgba(255, 152, 0, 0.4)',
        };
      case 'inactive':
      default:
        return {
          backgroundColor: 'rgba(176, 176, 176, 0.15)',
          color: '#B0B0B0',
          border: '1px solid rgba(176, 176, 176, 0.3)',
        };
    }
  };

  return (
    <span
      className="inline-flex items-center justify-center h-5 px-2 rounded"
      style={{
        ...getVariantStyles(),
        fontSize: '10px',
        fontFamily: 'var(--font-data)',
        fontWeight: 500,
        letterSpacing: '0.3px',
      }}
    >
      {label}
    </span>
  );
}
