import { useState } from 'react';
import { useNavigate } from 'react-router';
import { LogOut, Shield, Award, X } from 'lucide-react';

interface UserProfileLogoutProps {
  role: 'admin' | 'partner';
}

export default function UserProfileLogout({ role }: UserProfileLogoutProps) {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Get user data from localStorage
  const getUserData = () => {
    const userData = localStorage.getItem('solarverso_user');
    if (userData) {
      return JSON.parse(userData);
    }
    return null;
  };

  const user = getUserData();

  const handleLogout = () => {
    localStorage.removeItem('solarverso_user');
    navigate('/login');
  };

  if (!user) return null;

  return (
    <>
      {/* User Profile Card */}
      <div
        className="px-5 py-5"
        style={{
          borderTop: '1px solid #333333',
        }}
      >
        <div
          className="rounded p-3"
          style={{
            backgroundColor: '#0A0A0A',
            border: '1px solid #333333',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            {/* Avatar */}
            <div
              className="flex items-center justify-center rounded flex-shrink-0"
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: role === 'admin' ? '#1D99CC' : '#2E7D32',
                color: '#FFFFFF',
                fontSize: role === 'admin' ? '14px' : '12px',
                fontWeight: '700',
              }}
            >
              {role === 'admin' ? user.name?.charAt(0) || 'A' : user.name?.substring(0, 2) || 'CS'}
            </div>

            {/* User Info */}
            <div className="flex-1 min-w-0">
              <div
                style={{
                  color: '#D0D0D0',
                  fontSize: '12px',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {role === 'admin' ? user.name : user.name}
              </div>
              <div
                style={{
                  color: '#606060',
                  fontSize: '9px',
                }}
              >
                {role === 'admin' ? user.title : user.nit || 'Partner'}
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={() => setShowConfirmation(true)}
              className="p-1.5 rounded transition-all flex-shrink-0"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #333333',
                color: '#606060',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1A1A1A';
                e.currentTarget.style.borderColor = '#FF5252';
                e.currentTarget.style.color = '#FF5252';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = '#333333';
                e.currentTarget.style.color = '#606060';
              }}
            >
              <LogOut style={{ width: '14px', height: '14px' }} />
            </button>
          </div>

          {/* Badge */}
          <div
            className="flex items-center justify-between"
            style={{
              paddingTop: '8px',
              borderTop: '1px solid #1A1A1A',
            }}
          >
            {role === 'admin' ? (
              <>
                <span
                  style={{
                    color: '#606060',
                    fontSize: '9px',
                    textTransform: 'uppercase',
                  }}
                >
                  Admin Access
                </span>
                <div className="flex items-center gap-1.5">
                  <Shield style={{ width: '11px', height: '11px', color: '#1D99CC' }} />
                  <span
                    style={{
                      color: '#1D99CC',
                      fontSize: '9px',
                      fontWeight: '600',
                    }}
                  >
                    Full Access
                  </span>
                </div>
              </>
            ) : (
              <>
                <span
                  style={{
                    color: '#606060',
                    fontSize: '9px',
                    textTransform: 'uppercase',
                  }}
                >
                  SST Score
                </span>
                <div className="flex items-center gap-1.5">
                  <Award style={{ width: '11px', height: '11px', color: '#00C853' }} />
                  <span
                    style={{
                      color: '#00C853',
                      fontSize: '12px',
                      fontWeight: '700',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {user.score || 86}%
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showConfirmation && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(4px)',
              zIndex: 300,
            }}
            onClick={() => setShowConfirmation(false)}
          />

          {/* Confirmation Dialog */}
          <div
            className="fixed inset-0 flex items-center justify-center"
            style={{
              zIndex: 301,
              pointerEvents: 'none',
            }}
          >
            <div
              className="rounded-lg p-8"
              style={{
                width: '420px',
                backgroundColor: '#121212',
                border: '1px solid #333333',
                boxShadow: '0 24px 48px rgba(0, 0, 0, 0.9)',
                pointerEvents: 'auto',
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className="rounded-full flex items-center justify-center"
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: 'rgba(255, 82, 82, 0.1)',
                    border: '2px solid #FF5252',
                  }}
                >
                  <LogOut style={{ width: '28px', height: '28px', color: '#FF5252' }} />
                </div>
              </div>

              {/* Title */}
              <h2
                className="text-center mb-3"
                style={{
                  color: '#E0E0E0',
                  fontSize: '18px',
                  fontWeight: '700',
                }}
              >
                ¿Cerrar sesión en el Solarverso?
              </h2>

              {/* Message */}
              <p
                className="text-center mb-8"
                style={{
                  color: '#808080',
                  fontSize: '13px',
                  lineHeight: '1.6',
                }}
              >
                Saldrás del sistema y deberás ingresar nuevamente con tus credenciales corporativas.
              </p>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 px-5 py-3 rounded transition-all"
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid #333333',
                    color: '#B0B0B0',
                    fontSize: '13px',
                    fontWeight: '600',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1A1A1A';
                    e.currentTarget.style.borderColor = '#1D99CC';
                    e.currentTarget.style.color = '#1D99CC';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = '#333333';
                    e.currentTarget.style.color = '#B0B0B0';
                  }}
                >
                  Cancelar
                </button>

                <button
                  onClick={handleLogout}
                  className="flex-1 px-5 py-3 rounded transition-all"
                  style={{
                    backgroundColor: '#FF5252',
                    border: 'none',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '700',
                    boxShadow: '0 0 20px rgba(255, 82, 82, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF6B6B';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF5252';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
