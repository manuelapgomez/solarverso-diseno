import { useLocation, Link } from 'react-router';
import { Briefcase, FolderKanban, Shield, Search } from 'lucide-react';

export function PartnerSidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className="fixed left-0 top-0 h-screen flex flex-col"
      style={{
        width: '220px',
        backgroundColor: '#121212',
        borderRight: '0.5px solid rgba(255, 255, 255, 0.05)',
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <div
        className="px-5 flex items-center"
        style={{
          height: '64px',
          borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div
          style={{
            color: '#1D99CC',
            fontSize: '16px',
            fontWeight: '700',
            letterSpacing: '0.5px',
          }}
        >
          SOLENIUM
        </div>
        <div
          className="ml-2 px-2 py-0.5 rounded"
          style={{
            backgroundColor: 'rgba(29, 153, 204, 0.15)',
            color: '#1D99CC',
            fontSize: '9px',
            fontWeight: '700',
            letterSpacing: '0.3px',
          }}
        >
          PARTNER
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5">
        <Link
          to="/partner/explorador"
          className="flex items-center gap-3 px-3 py-2.5 mb-1 rounded transition-colors"
          style={{
            backgroundColor: isActive('/partner/explorador') ? 'rgba(46, 125, 50, 0.12)' : 'transparent',
            color: isActive('/partner/explorador') ? '#2E7D32' : '#808080',
            fontSize: '12px',
            fontWeight: '500',
            textDecoration: 'none',
          }}
        >
          <Search style={{ width: '16px', height: '16px' }} />
          Explorador de Pliegos
        </Link>

        <Link
          to="/partner/proyectos"
          className="flex items-center gap-3 px-3 py-2.5 mb-1 rounded transition-colors"
          style={{
            backgroundColor: isActive('/partner/proyectos') ? 'rgba(29, 153, 204, 0.12)' : 'transparent',
            color: isActive('/partner/proyectos') ? '#1D99CC' : '#808080',
            fontSize: '12px',
            fontWeight: '500',
            textDecoration: 'none',
          }}
        >
          <FolderKanban style={{ width: '16px', height: '16px' }} />
          Mis Proyectos
        </Link>

        <Link
          to="/partner/perfil"
          className="flex items-center gap-3 px-3 py-2.5 mb-1 rounded transition-colors"
          style={{
            backgroundColor: isActive('/partner/perfil') ? 'rgba(29, 153, 204, 0.12)' : 'transparent',
            color: isActive('/partner/perfil') ? '#1D99CC' : '#808080',
            fontSize: '12px',
            fontWeight: '500',
            textDecoration: 'none',
          }}
        >
          <Shield style={{ width: '16px', height: '16px' }} />
          Perfil & Bóveda 360
        </Link>
      </nav>

      {/* User Badge */}
      <div
        className="px-4 py-4"
        style={{
          borderTop: '0.5px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div
          className="px-3 py-3 rounded"
          style={{
            backgroundColor: '#0A0A0A',
            border: '0.5px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div
            className="mb-2"
            style={{
              color: '#B0B0B0',
              fontSize: '11px',
              fontWeight: '600',
            }}
          >
            Construcciones SAS
          </div>
          <div className="flex items-center justify-between">
            <span
              style={{
                color: '#606060',
                fontSize: '9px',
                textTransform: 'uppercase',
              }}
            >
              SST Score
            </span>
            <span
              style={{
                color: '#00C853',
                fontSize: '12px',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: '700',
              }}
            >
              86%
            </span>
          </div>
          <div
            className="mt-2 rounded-full overflow-hidden"
            style={{
              height: '4px',
              backgroundColor: '#1A1A1A',
            }}
          >
            <div
              style={{
                width: '86%',
                height: '100%',
                backgroundColor: '#00C853',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}