import { useNavigate, useLocation } from 'react-router';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Settings,
  Sun
} from 'lucide-react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
  isActive: (pathname: string) => boolean;
}

export default function GlobalSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    {
      icon: <LayoutDashboard size={18} />,
      label: 'Command Center',
      path: '/',
      isActive: (pathname) => pathname === '/'
    },
    {
      icon: <Users size={18} />,
      label: 'Partners',
      path: '/partners/explorer',
      isActive: (pathname) => pathname.includes('/partners/') || pathname.includes('/contractor360')
    },
    {
      icon: <Briefcase size={18} />,
      label: 'Pliegos/Tenders',
      path: '/tenders',
      isActive: (pathname) => pathname.includes('/tenders')
    }
  ];

  return (
    <div 
      className="flex flex-col h-full"
      style={{ 
        width: '52px',
        backgroundColor: '#151515',
        borderRight: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      {/* Logo */}
      <div 
        className="flex items-center justify-center"
        style={{ 
          height: '52px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <Sun size={20} style={{ color: '#1D99CC' }} />
      </div>

      {/* Spacer */}
      <div style={{ height: '16px' }} />

      {/* Nav Icons */}
      <div className="flex-1 flex flex-col gap-1">
        {navItems.map((item, index) => {
          const isActive = item.isActive(location.pathname);
          
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="relative flex items-center justify-center transition-colors group"
              style={{
                height: '44px',
                color: isActive ? '#FFFFFF' : '#808080',
                backgroundColor: isActive ? 'rgba(29, 153, 204, 0.1)' : 'transparent'
              }}
              title={item.label}
            >
              {/* Active indicator strip */}
              {isActive && (
                <div 
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '3px',
                    backgroundColor: '#1D99CC'
                  }}
                />
              )}
              
              {/* Icon */}
              <div 
                className="transition-colors"
                style={{
                  color: isActive ? '#FFFFFF' : undefined
                }}
              >
                {item.icon}
              </div>

              {/* Tooltip */}
              <div
                className="absolute left-full ml-2 px-3 py-2 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50"
                style={{
                  backgroundColor: '#2B2B2B',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 600,
                  boxShadow: 'none'
                }}
              >
                {item.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div 
        className="flex flex-col"
        style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}
      >
        {/* Settings */}
        <button
          className="flex items-center justify-center transition-colors group relative"
          style={{
            height: '56px',
            color: '#808080'
          }}
          title="Settings"
        >
          <Settings size={24} />
          
          {/* Tooltip */}
          <div
            className="absolute left-full ml-2 px-3 py-2 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50"
            style={{
              backgroundColor: '#2B2B2B',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#FFFFFF',
              fontSize: '11px',
              fontWeight: 600,
              boxShadow: 'none'
            }}
          >
            Settings
          </div>
        </button>

        {/* User Avatar */}
        <button
          className="flex items-center justify-center group relative"
          style={{
            height: '56px'
          }}
          title="User Profile"
        >
          <div 
            className="rounded-full flex items-center justify-center"
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#1D99CC',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: 700,
              fontFamily: 'var(--font-ui)'
            }}
          >
            SS
          </div>

          {/* Tooltip */}
          <div
            className="absolute left-full ml-2 px-3 py-2 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50"
            style={{
              backgroundColor: '#2B2B2B',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#FFFFFF',
              fontSize: '11px',
              fontWeight: 600,
              boxShadow: 'none'
            }}
          >
            User Profile
          </div>
        </button>
      </div>
    </div>
  );
}