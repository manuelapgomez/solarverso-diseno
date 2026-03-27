import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronRight, Lock, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeToggle } from '../components/ThemeToggle';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { colors } = useTheme();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication delay
    setTimeout(() => {
      // Detect role based on email
      if (email.includes('admin@solenium.com')) {
        // Admin route
        localStorage.setItem(
          'solarverso_user',
          JSON.stringify({
            role: 'admin',
            name: 'Gisela Martínez',
            email: email,
            title: 'Líder SST',
          })
        );
        navigate('/admin/dashboard');
      } else if (email.includes('partner@construcciones.com') || email.includes('partner')) {
        // Partner route
        localStorage.setItem(
          'solarverso_user',
          JSON.stringify({
            role: 'partner',
            name: 'Carlos Mendoza',
            email: email,
            company: 'Construcciones del Norte SAS',
          })
        );
        navigate('/partner/oportunidades'); // Updated to new unified route
      } else {
        // Default to partner for any other email
        localStorage.setItem(
          'solarverso_user',
          JSON.stringify({
            role: 'partner',
            name: 'Partner Demo',
            email: email,
          })
        );
        navigate('/partner/oportunidades'); // Updated to new unified route
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: '#050505',
      }}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
        }}
      />

      {/* Black Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(4px)',
        }}
      />

      {/* Login Card */}
      <div
        className="relative z-10 rounded-lg p-10"
        style={{
          width: '460px',
          backgroundColor: '#121212',
          border: '1px solid #333333',
          boxShadow: '0 32px 64px rgba(0, 0, 0, 0.9)',
        }}
      >
        {/* Logo */}
        <div className="text-center mb-10">
          <div
            style={{
              color: '#1D99CC',
              fontSize: '36px',
              fontWeight: '700',
              letterSpacing: '1px',
              marginBottom: '8px',
            }}
          >
            SOLENIUM
          </div>
          <div
            style={{
              color: '#606060',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            Solarverso
          </div>
          <div
            className="mx-auto mt-4"
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: '#1D99CC',
              opacity: 0.5,
            }}
          />
        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>
          <div className="space-y-5 mb-6">
            {/* Email Field */}
            <div>
              <label
                style={{
                  display: 'block',
                  color: '#B0B0B0',
                  fontSize: '12px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Correo Electrónico Corporativo
              </label>
              <div className="relative">
                <div
                  className="absolute left-4 top-1/2"
                  style={{
                    transform: 'translateY(-50%)',
                    color: '#606060',
                  }}
                >
                  <Mail style={{ width: '16px', height: '16px' }} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="usuario@empresa.com"
                  required
                  className="w-full py-3.5 rounded transition-all"
                  style={{
                    paddingLeft: '48px',
                    paddingRight: '16px',
                    backgroundColor: '#0A0A0A',
                    border: '1px solid #333333',
                    color: '#E0E0E0',
                    fontSize: '13px',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#1D99CC';
                    e.target.style.backgroundColor = '#121212';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#333333';
                    e.target.style.backgroundColor = '#0A0A0A';
                  }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                style={{
                  display: 'block',
                  color: '#B0B0B0',
                  fontSize: '12px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Contraseña
              </label>
              <div className="relative">
                <div
                  className="absolute left-4 top-1/2"
                  style={{
                    transform: 'translateY(-50%)',
                    color: '#606060',
                  }}
                >
                  <Lock style={{ width: '16px', height: '16px' }} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full py-3.5 rounded transition-all"
                  style={{
                    paddingLeft: '48px',
                    paddingRight: '16px',
                    backgroundColor: '#0A0A0A',
                    border: '1px solid #333333',
                    color: '#E0E0E0',
                    fontSize: '13px',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#1D99CC';
                    e.target.style.backgroundColor = '#121212';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#333333';
                    e.target.style.backgroundColor = '#0A0A0A';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Primary Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded transition-all mb-5"
            style={{
              backgroundColor: isLoading ? '#1A1A1A' : '#1D99CC',
              border: 'none',
              color: isLoading ? '#606060' : '#FFFFFF',
              fontSize: '14px',
              fontWeight: '700',
              boxShadow: isLoading ? 'none' : '0 0 32px rgba(29, 153, 204, 0.5)',
              cursor: isLoading ? 'not-allowed' : 'pointer',
            }}
          >
            {isLoading ? 'Autenticando...' : 'Ingresar al Solarverso'}
            {!isLoading && <ChevronRight style={{ width: '20px', height: '20px' }} />}
          </button>

          {/* Smart Routing Visual Cue */}
          <div
            className="text-center py-4 rounded"
            style={{
              backgroundColor: '#0A0A0A',
              border: '1px solid #1A1A1A',
            }}
          >
            <div
              style={{
                color: '#606060',
                fontSize: '10px',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Redirección automática según perfil
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div
                  className="rounded-full"
                  style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#1D99CC',
                  }}
                />
                <span
                  style={{
                    color: '#1D99CC',
                    fontSize: '10px',
                    fontWeight: '600',
                  }}
                >
                  Admin
                </span>
              </div>
              <div style={{ color: '#333333' }}>|</div>
              <div className="flex items-center gap-2">
                <div
                  className="rounded-full"
                  style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#2E7D32',
                  }}
                />
                <span
                  style={{
                    color: '#2E7D32',
                    fontSize: '10px',
                    fontWeight: '600',
                  }}
                >
                  Partner
                </span>
              </div>
            </div>
          </div>
        </form>

        {/* Auxiliary Links */}
        <div
          className="flex items-center justify-between mt-6 pt-6"
          style={{
            borderTop: '1px solid #1A1A1A',
          }}
        >
          <button
            className="transition-colors"
            style={{
              background: 'none',
              border: 'none',
              color: '#606060',
              fontSize: '11px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#1D99CC')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#606060')}
          >
            ¿Olvidaste tu contraseña?
          </button>
          <button
            className="transition-colors"
            style={{
              background: 'none',
              border: 'none',
              color: '#606060',
              fontSize: '11px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#1D99CC')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#606060')}
          >
            Registrar nueva empresa
          </button>
        </div>

        {/* Demo Credentials Helper */}
        <div
          className="mt-6 rounded p-3"
          style={{
            backgroundColor: 'rgba(29, 153, 204, 0.05)',
            border: '1px solid rgba(29, 153, 204, 0.15)',
          }}
        >
          <div
            style={{
              color: '#1D99CC',
              fontSize: '10px',
              fontWeight: '700',
              marginBottom: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Credenciales Demo
          </div>
          <div
            style={{
              color: '#808080',
              fontSize: '10px',
              lineHeight: '1.6',
            }}
          >
            <div>• Admin: admin@solenium.com</div>
            <div>• Partner: partner@construcciones.com</div>
            <div className="mt-1" style={{ color: '#606060' }}>
              (Cualquier contraseña funciona en demo)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}