import { LayoutDashboard, FileText, Users, Plus, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

export function AdminSidebar() {
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
            color: colors.accent,
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
            backgroundColor: colors.theme === 'dark' ? 'rgba(29, 153, 204, 0.15)' : 'rgba(29, 153, 204, 0.15)',
            color: colors.accent,
            fontSize: '9px',
            fontWeight: '700',
            letterSpacing: '0.5px',
          }}
        >
          ADMIN
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-auto">
        {/* GESTIÓN Section */}
        <div className="mb-6">
          <div
            style={{
              color: colors.textTertiary,
              fontSize: '10px',
              fontWeight: '700',
              letterSpacing: '1px',
              marginBottom: '12px',
              paddingLeft: '12px',
            }}
          >
            GESTIÓN
          </div>
          
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 px-3 py-2.5 mb-1 rounded transition-all"
            style={{
              backgroundColor: isActive('/admin/dashboard') ? colors.infoBg : 'transparent',
              border: isActive('/admin/dashboard') ? `1px solid ${colors.accent}` : '1px solid transparent',
              color: isActive('/admin/dashboard') ? colors.accent : colors.textTertiary,
              fontSize: '12px',
              fontWeight: '500',
              textDecoration: 'none',
            }}
          >
            <LayoutDashboard style={{ width: '16px', height: '16px' }} />
            Dashboard
          </Link>

          <Link
            to="/admin/crear-pliegos"
            className="flex items-center gap-3 px-3 py-2.5 mb-1 rounded transition-all"
            style={{
              backgroundColor: isActive('/admin/crear-pliegos') ? colors.infoBg : 'transparent',
              border: isActive('/admin/crear-pliegos') ? `1px solid ${colors.accent}` : '1px solid transparent',
              color: isActive('/admin/crear-pliegos') ? colors.accent : colors.textTertiary,
              fontSize: '12px',
              fontWeight: '500',
              textDecoration: 'none',
            }}
          >
            <Plus style={{ width: '16px', height: '16px' }} />
            Crear Pliego
          </Link>

          <Link
            to="/admin/partners"
            className="flex items-center gap-3 px-3 py-2.5 mb-1 rounded transition-all"
            style={{
              backgroundColor: isActive('/admin/partners') ? colors.infoBg : 'transparent',
              border: isActive('/admin/partners') ? `1px solid ${colors.accent}` : '1px solid transparent',
              color: isActive('/admin/partners') ? colors.accent : colors.textTertiary,
              fontSize: '12px',
              fontWeight: '500',
              textDecoration: 'none',
            }}
          >
            <Users style={{ width: '16px', height: '16px' }} />
            Partners
          </Link>
        </div>
      </nav>

      {/* Profile & Theme Toggle */}
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
              Admin SST
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
              Rol
            </span>
            <span
              style={{
                color: colors.accent,
                fontSize: '11px',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: '700',
              }}
            >
              SST
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
