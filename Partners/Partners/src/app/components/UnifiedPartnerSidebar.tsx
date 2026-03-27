import { Globe, Hammer, Shield, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

export function UnifiedPartnerSidebar() {
  const location = useLocation();
  const { colors } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className="fixed left-0 top-0 h-screen flex flex-col"
      style={{
        width: '240px',
        backgroundColor: colors.sidebarBackground,
        borderRight: `1px solid ${colors.border}`,
        zIndex: 100,
      }}
    >
      {/* Brand */}
      <div
        className="px-6 flex items-center justify-center"
        style={{
          height: '72px',
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div
          style={{
            color: colors.partnerAccent,
            fontSize: '18px',
            fontWeight: '700',
            letterSpacing: '1px',
          }}
        >
          SOLENIUM
        </div>
        <div
          className="ml-2 px-2 py-1 rounded"
          style={{
            backgroundColor: colors.theme === 'dark' ? 'rgba(46, 125, 50, 0.15)' : 'rgba(5, 150, 105, 0.15)',
            color: colors.partnerAccent,
            fontSize: '9px',
            fontWeight: '700',
            letterSpacing: '0.5px',
          }}
        >
          PARTNER
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-auto">
        {/* EXPLORADOR Section */}
        <div className="mb-6">
          <div
            style={{
              color: '#606060',
              fontSize: '10px',
              fontWeight: '700',
              letterSpacing: '1px',
              marginBottom: '12px',
              paddingLeft: '12px',
            }}
          >
            EXPLORADOR
          </div>
          
          <Link
            to="/partner/oportunidades"
            className="flex items-center gap-3 px-3 py-2.5 mb-1 rounded transition-all"
            style={{
              backgroundColor: isActive('/partner/oportunidades') ? 'rgba(29, 153, 204, 0.08)' : 'transparent',
              border: isActive('/partner/oportunidades') ? '0.5px solid #1D99CC' : '0.5px solid transparent',
              color: isActive('/partner/oportunidades') ? '#1D99CC' : '#808080',
              fontSize: '12px',
              fontWeight: '500',
              textDecoration: 'none',
            }}
          >
            <Globe style={{ width: '16px', height: '16px' }} />
            Oportunidades
          </Link>
        </div>

        {/* EJECUCIÓN Section */}
        <div className="mb-6">
          <div
            style={{
              color: '#606060',
              fontSize: '10px',
              fontWeight: '700',
              letterSpacing: '1px',
              marginBottom: '12px',
              paddingLeft: '12px',
            }}
          >
            EJECUCIÓN
          </div>
          
          <Link
            to="/partner/proyectos"
            className="flex items-center gap-3 px-3 py-2.5 mb-1 rounded transition-all"
            style={{
              backgroundColor: isActive('/partner/proyectos') ? 'rgba(29, 153, 204, 0.08)' : 'transparent',
              border: isActive('/partner/proyectos') ? '0.5px solid #1D99CC' : '0.5px solid transparent',
              color: isActive('/partner/proyectos') ? '#1D99CC' : '#808080',
              fontSize: '12px',
              fontWeight: '500',
              textDecoration: 'none',
            }}
          >
            <Hammer style={{ width: '16px', height: '16px' }} />
            Proyectos Asignados
          </Link>
        </div>

        {/* CUENTA Section */}
        <div>
          <div
            style={{
              color: '#606060',
              fontSize: '10px',
              fontWeight: '700',
              letterSpacing: '1px',
              marginBottom: '12px',
              paddingLeft: '12px',
            }}
          >
            CUENTA
          </div>
          
          <Link
            to="/partner/perfil"
            className="flex items-center gap-3 px-3 py-2.5 mb-1 rounded transition-all"
            style={{
              backgroundColor: isActive('/partner/perfil') ? 'rgba(29, 153, 204, 0.08)' : 'transparent',
              border: isActive('/partner/perfil') ? '0.5px solid #1D99CC' : '0.5px solid transparent',
              color: isActive('/partner/perfil') ? '#1D99CC' : '#808080',
              fontSize: '12px',
              fontWeight: '500',
              textDecoration: 'none',
            }}
          >
            <Shield style={{ width: '16px', height: '16px' }} />
            Mi Perfil 360
          </Link>
        </div>
      </nav>

      {/* Profile Switcher & Bottom */}
      <div
        className="px-4 py-4"
        style={{
          borderTop: `1px solid ${colors.border}`,
        }}
      >
        {/* Theme Toggle */}
        <div className="mb-3 flex justify-center">
          <ThemeToggle />
        </div>

        <div
          className="px-4 py-3 rounded cursor-pointer transition-all"
          style={{
            backgroundColor: colors.cardBackground,
            border: `1px solid ${colors.border}`,
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <div
              style={{
                color: colors.textPrimary,
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              Construcciones SAS
            </div>
            <ChevronDown style={{ width: '14px', height: '14px', color: colors.textTertiary }} />
          </div>
          <div className="flex items-center justify-between">
            <span
              style={{
                color: colors.textTertiary,
                fontSize: '9px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              SST Score
            </span>
            <span
              style={{
                color: colors.partnerAccent,
                fontSize: '11px',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: '700',
              }}
            >
              86%
            </span>
          </div>
        </div>

        <Link
          to="/login"
          className="block text-center mt-3 px-4 py-2 rounded transition-all"
          style={{
            backgroundColor: 'transparent',
            border: `1px solid ${colors.border}`,
            color: colors.textTertiary,
            fontSize: '11px',
            fontWeight: '500',
            textDecoration: 'none',
          }}
        >
          Cerrar Sesión
        </Link>
      </div>
    </div>
  );
}