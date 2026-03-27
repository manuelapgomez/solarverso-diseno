import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface ToolbarIconProps {
  icon: LucideIcon;
  active?: boolean;
  onClick?: () => void;
  tooltip?: string;
}

export function ToolbarIcon({ icon: Icon, active = false, onClick, tooltip }: ToolbarIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-6 h-6 flex items-center justify-center transition-colors rounded"
      style={{
        color: active || isHovered ? 'var(--accent-color)' : 'var(--text-inactive)',
      }}
      title={tooltip}
    >
      <Icon size={24} strokeWidth={1.5} />
    </button>
  );
}
