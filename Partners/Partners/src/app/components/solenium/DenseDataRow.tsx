interface DenseDataRowProps {
  children: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
}

export function DenseDataRow({ children, onClick, selected = false }: DenseDataRowProps) {
  return (
    <div
      onClick={onClick}
      className="h-10 flex items-center px-3 cursor-pointer transition-colors"
      style={{
        borderBottom: '1px solid var(--stroke-color)',
        backgroundColor: selected ? 'rgba(29, 153, 204, 0.15)' : 'transparent',
        fontFamily: 'var(--font-ui)',
      }}
    >
      {children}
    </div>
  );
}
