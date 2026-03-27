import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// ===== TYPES =====
export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: ThemeColors;
}

interface ThemeColors {
  // Backgrounds
  canvasBackground: string;
  panelBackground: string;
  sidebarBackground: string;
  cardBackground: string;
  hoverBackground: string;
  
  // Borders
  border: string;
  borderHover: string;
  
  // Text
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textDisabled: string;
  
  // Accent (Brand - always same)
  accent: string;
  accentHover: string;
  
  // Status
  success: string;
  successBg: string;
  error: string;
  errorBg: string;
  warning: string;
  warningBg: string;
  info: string;
  infoBg: string;
  
  // Partner-specific
  partnerAccent: string;
  partnerBorder: string;
  
  // Shadows
  shadowSm: string;
  shadowMd: string;
  shadowLg: string;
  
  // Theme reference
  theme: Theme;
}

// ===== DARK MODE COLORS =====
const DARK_COLORS: ThemeColors = {
  // Backgrounds
  canvasBackground: '#050505',
  panelBackground: '#0A0A0A',
  sidebarBackground: '#0A0A0A',
  cardBackground: '#121212',
  hoverBackground: '#1A1A1A',
  
  // Borders
  border: 'rgba(255, 255, 255, 0.05)',
  borderHover: 'rgba(255, 255, 255, 0.12)',
  
  // Text
  textPrimary: '#FFFFFF',
  textSecondary: '#B0B0B0',
  textTertiary: '#808080',
  textDisabled: '#404040',
  
  // Accent
  accent: '#1D99CC',
  accentHover: '#26A8DC',
  
  // Status
  success: '#00C853',
  successBg: 'rgba(0, 200, 83, 0.12)',
  error: '#FF5252',
  errorBg: 'rgba(255, 82, 82, 0.12)',
  warning: '#FF9800',
  warningBg: 'rgba(255, 152, 0, 0.12)',
  info: '#1D99CC',
  infoBg: 'rgba(29, 153, 204, 0.12)',
  
  // Partner-specific
  partnerAccent: '#2E7D32',
  partnerBorder: '#2E7D32',
  
  // Shadows
  shadowSm: '0 0 12px rgba(29, 153, 204, 0.15)',
  shadowMd: '0 0 20px rgba(29, 153, 204, 0.2)',
  shadowLg: '0 0 32px rgba(29, 153, 204, 0.25)',
  
  // Theme reference
  theme: 'dark',
};

// ===== LIGHT MODE COLORS =====
const LIGHT_COLORS: ThemeColors = {
  // Backgrounds
  canvasBackground: '#F5F7F8',
  panelBackground: '#FFFFFF',
  sidebarBackground: '#FFFFFF',
  cardBackground: '#FFFFFF',
  hoverBackground: '#F8F9FA',
  
  // Borders
  border: '#E0E4E6',
  borderHover: '#CBD5E0',
  
  // Text
  textPrimary: '#1A1C1E',
  textSecondary: '#64748B',
  textTertiary: '#94A3B8',
  textDisabled: '#CBD5E0',
  
  // Accent (same for brand consistency)
  accent: '#1D99CC',
  accentHover: '#1787B5',
  
  // Status
  success: '#10B981',
  successBg: '#D1FAE5',
  error: '#EF4444',
  errorBg: '#FEE2E2',
  warning: '#F59E0B',
  warningBg: '#FEF3C7',
  info: '#1D99CC',
  infoBg: '#DBEAFE',
  
  // Partner-specific
  partnerAccent: '#059669',
  partnerBorder: '#059669',
  
  // Shadows
  shadowSm: '0px 2px 10px rgba(0, 0, 0, 0.05)',
  shadowMd: '0px 4px 20px rgba(0, 0, 0, 0.05)',
  shadowLg: '0px 8px 32px rgba(0, 0, 0, 0.08)',
  
  // Theme reference
  theme: 'light',
};

// ===== CONTEXT =====
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ===== PROVIDER =====
interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage for saved theme preference (with error handling)
    try {
      const savedTheme = localStorage.getItem('solarverso-theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
    } catch (error) {
      console.warn('Error reading theme from localStorage:', error);
    }
    return 'dark';
  });

  const colors = theme === 'dark' ? DARK_COLORS : LIGHT_COLORS;

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('solarverso-theme', newTheme);
      } catch (error) {
        console.warn('Error saving theme to localStorage:', error);
      }
      return newTheme;
    });
  };

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ===== HOOK =====
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}