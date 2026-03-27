import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <div
      className="flex items-center gap-1 rounded-full p-1 transition-all"
      style={{
        backgroundColor: theme === 'dark' ? '#1A1A1A' : '#F1F5F9',
        border: `1px solid ${colors.border}`,
      }}
    >
      {/* Sun (Light Mode) */}
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center rounded-full transition-all"
        style={{
          width: '28px',
          height: '28px',
          backgroundColor: theme === 'light' ? colors.accent : 'transparent',
          color: theme === 'light' ? '#FFFFFF' : colors.textTertiary,
          cursor: 'pointer',
          border: 'none',
        }}
        title="Light Mode"
      >
        <Sun style={{ width: '14px', height: '14px' }} />
      </button>

      {/* Moon (Dark Mode) */}
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center rounded-full transition-all"
        style={{
          width: '28px',
          height: '28px',
          backgroundColor: theme === 'dark' ? colors.accent : 'transparent',
          color: theme === 'dark' ? '#FFFFFF' : colors.textTertiary,
          cursor: 'pointer',
          border: 'none',
        }}
        title="Dark Mode"
      >
        <Moon style={{ width: '14px', height: '14px' }} />
      </button>
    </div>
  );
}
