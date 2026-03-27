interface PanelHeaderProps {
  title: string;
  actions?: React.ReactNode;
}

export function PanelHeader({ title, actions }: PanelHeaderProps) {
  return (
    <div 
      className="h-8 flex items-center justify-between px-3"
      style={{ 
        backgroundColor: '#121212',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <h3 
        className="uppercase tracking-wider"
        style={{ 
          color: 'var(--text-on-dark)',
          fontSize: '11px',
          fontFamily: 'var(--font-ui)',
          fontWeight: 600,
          letterSpacing: '0.5px'
        }}
      >
        {title}
      </h3>
      {actions && <div className="flex items-center gap-1">{actions}</div>}
    </div>
  );
}