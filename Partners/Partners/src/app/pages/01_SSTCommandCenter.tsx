import { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  LayoutDashboard,
  Briefcase,
  Users,
  Shield,
  Search,
  Building2,
  TrendingUp,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import GlobalSidebar from '../components/GlobalSidebar';

interface Partner {
  id: string;
  name: string;
  pliego: string;
  score: number;
  status: 'approved' | 'pending' | 'warning';
  statusText: string;
  zone: string;
  type: string;
  machinery: number;
  staff: number;
  polizaRCE: string;
  documentCompleteness: number;
}

const mockPartners: Partner[] = [
  {
    id: 'SST-001',
    name: 'Soluciones Civiles SAS',
    pliego: 'Movimiento de Tierras',
    score: 86,
    status: 'approved',
    statusText: 'Aprobado',
    zone: 'Antioquia',
    type: 'Maquinaria Amarilla',
    machinery: 3,
    staff: 12,
    polizaRCE: 'Vigente - $500M',
    documentCompleteness: 85
  },
  {
    id: 'SST-002',
    name: 'Construcciones Andinas SAS',
    pliego: 'Adecuación de Terreno',
    score: 92,
    status: 'approved',
    statusText: 'Aprobado',
    zone: 'Antioquia',
    type: 'Maquinaria Amarilla',
    machinery: 12,
    staff: 24,
    polizaRCE: 'Vigente - $500M',
    documentCompleteness: 100
  },
  {
    id: 'SST-003',
    name: 'Maquinaria del Valle LTDA',
    pliego: 'Movimiento de Tierras',
    score: 78,
    status: 'pending',
    statusText: 'En Revisión',
    zone: 'Valle del Cauca',
    type: 'Maquinaria Amarilla',
    machinery: 8,
    staff: 16,
    polizaRCE: 'En revisión',
    documentCompleteness: 65
  },
  {
    id: 'SST-004',
    name: 'Transportes Bogotá Express',
    pliego: 'Logística y Transporte',
    score: 88,
    status: 'approved',
    statusText: 'Aprobado',
    zone: 'Cundinamarca',
    type: 'Transporte',
    machinery: 18,
    staff: 35,
    polizaRCE: 'Vigente - $800M',
    documentCompleteness: 95
  },
  {
    id: 'SST-005',
    name: 'Excavaciones del Norte',
    pliego: 'Movimiento de Tierras',
    score: 94,
    status: 'approved',
    statusText: 'Aprobado',
    zone: 'Atlántico',
    type: 'Maquinaria Amarilla',
    machinery: 15,
    staff: 28,
    polizaRCE: 'Vigente - $600M',
    documentCompleteness: 100
  },
  {
    id: 'SST-006',
    name: 'Compactadora Central SA',
    pliego: 'Adecuación de Terreno',
    score: 72,
    status: 'warning',
    statusText: 'Doc. Incompletos',
    zone: 'Santander',
    type: 'Maquinaria Amarilla',
    machinery: 6,
    staff: 12,
    polizaRCE: 'Pendiente',
    documentCompleteness: 60
  }
];

export default function SSTCommandCenter() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPartners = mockPartners.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div 
      className="h-screen w-screen flex overflow-hidden"
      style={{ 
        fontFamily: 'var(--font-ui)',
        backgroundColor: '#121212'
      }}
    >
      {/* Global Sidebar */}
      <GlobalSidebar />

      {/* Left Navigation Sidebar */}
      <div 
        className="flex flex-col"
        style={{ 
          width: '240px',
          backgroundColor: '#151515',
          borderRight: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        {/* Header */}
        <div 
          className="px-6 py-4"
          style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}
        >
          <h2 style={{ 
            color: '#FFFFFF', 
            fontSize: '14px',
            fontWeight: 700,
            marginBottom: '4px'
          }}>
            Admin Dashboard
          </h2>
          <p style={{ 
            color: '#B0B0B0', 
            fontSize: '11px'
          }}>
            Centro de Operaciones SST
          </p>
        </div>

        {/* Navigation */}
        <div className="px-3 py-4">
          <button
            className="w-full h-10 rounded flex items-center gap-3 px-3 transition-colors relative"
            style={{
              backgroundColor: 'rgba(29, 153, 204, 0.1)',
              color: '#1D99CC',
              fontSize: '12px',
              fontWeight: 600
            }}
          >
            {/* Active indicator - 2px neon bar */}
            <div 
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '2px',
                backgroundColor: '#1D99CC'
              }}
            />
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </button>

          <button
            className="w-full h-10 rounded flex items-center gap-3 px-3 transition-colors mt-1"
            style={{
              backgroundColor: 'transparent',
              color: '#B0B0B0',
              fontSize: '12px',
              fontWeight: 600
            }}
            onClick={() => navigate('/tenders')}
          >
            <Briefcase size={18} />
            <span>Pliegos</span>
          </button>

          <button
            className="w-full h-10 rounded flex items-center gap-3 px-3 transition-colors mt-1"
            style={{
              backgroundColor: 'transparent',
              color: '#B0B0B0',
              fontSize: '12px',
              fontWeight: 600
            }}
            onClick={() => navigate('/partners/explorer')}
          >
            <Users size={18} />
            <span>Partners</span>
          </button>

          <button
            className="w-full h-10 rounded flex items-center gap-3 px-3 transition-colors mt-1"
            style={{
              backgroundColor: 'transparent',
              color: '#B0B0B0',
              fontSize: '12px',
              fontWeight: 600
            }}
            onClick={() => navigate('/admin/evaluation')}
          >
            <Shield size={18} />
            <span>Auditoría</span>
          </button>
        </div>

        {/* Stats Summary */}
        <div className="px-3 py-3 mt-auto" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}> {/* Reduced py-4 to py-3 */}
          <div className="mb-2"> {/* Reduced mb-3 to mb-2 */}
            <div style={{ color: '#B0B0B0', fontSize: '9px', marginBottom: '3px' }}>Total Partners</div> {/* Reduced from 10px to 9px */}
            <div style={{ color: '#1D99CC', fontSize: '18px', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}> {/* Reduced from 24px to 18px */}
              {mockPartners.length}
            </div>
          </div>
          <div>
            <div style={{ color: '#B0B0B0', fontSize: '9px', marginBottom: '3px' }}>Aprobados</div>
            <div style={{ color: '#00C853', fontSize: '16px', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}> {/* Reduced from 20px to 16px */}
              {mockPartners.filter(p => p.status === 'approved').length}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div 
          className="px-4 py-3"
          style={{ 
            backgroundColor: '#1E1E1E',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <div className="flex items-center justify-between mb-3"> {/* Reduced mb-4 to mb-3 */}
            <div>
              <h1 style={{ 
                color: '#FFFFFF', 
                fontSize: '16px',
                fontWeight: 700,
                marginBottom: '3px'
              }}>
                Solicitudes Entrantes
              </h1>
              <p style={{ 
                color: '#B0B0B0', 
                fontSize: '12px'
              }}>
                {filteredPartners.length} Partners Activos
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search 
              size={16} 
              style={{ 
                position: 'absolute', 
                left: '12px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#B0B0B0'
              }} 
            />
            <input
              type="text"
              placeholder="Buscar por nombre o ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                height: '40px',
                paddingLeft: '44px',
                paddingRight: '12px',
                backgroundColor: '#121212',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                color: '#FFFFFF',
                fontSize: '13px'
              }}
            />
          </div>
        </div>

        {/* Gallery Grid - Notion Style */}
        <div 
          className="flex-1 overflow-y-auto px-6 py-6"
          style={{ backgroundColor: '#121212' }}
        >
          <div 
            className="grid gap-4"
            style={{ 
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))'
            }}
          >
            {filteredPartners.map((partner) => (
              <div
                key={partner.id}
                onClick={() => navigate(`/contractor360/profile/${partner.id}`)}
                className="cursor-pointer transition-all group relative"
                style={{
                  backgroundColor: '#1E1E1E',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  padding: '20px',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#252525';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1E1E1E';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                {/* Floating SST Score Badge */}
                <div
                  className="absolute"
                  style={{
                    top: '16px',
                    right: '16px',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(29, 153, 204, 0.1)',
                    border: '2px solid rgba(29, 153, 204, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    boxShadow: '0 0 20px rgba(29, 153, 204, 0.2)'
                  }}
                >
                  <div style={{ 
                    color: partner.score >= 86 ? '#00C853' : '#FF9800', 
                    fontSize: '16px',
                    fontWeight: 700,
                    fontFamily: 'JetBrains Mono, monospace',
                    lineHeight: '1'
                  }}>
                    {partner.score}
                  </div>
                  <div style={{ 
                    color: '#B0B0B0', 
                    fontSize: '8px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    marginTop: '2px'
                  }}>
                    SST
                  </div>
                </div>

                {/* Icon */}
                <div 
                  className="rounded flex items-center justify-center mb-3"
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'rgba(29, 153, 204, 0.1)',
                    color: '#1D99CC'
                  }}
                >
                  <Building2 size={24} />
                </div>

                {/* Partner Info */}
                <div className="mb-3" style={{ paddingRight: '70px' }}>
                  <h3 style={{ 
                    color: '#FFFFFF',
                    fontSize: '15px',
                    fontWeight: 700,
                    marginBottom: '4px',
                    lineHeight: '1.3'
                  }}>
                    {partner.name}
                  </h3>
                  <p style={{ 
                    color: '#B0B0B0',
                    fontSize: '12px',
                    marginBottom: '2px'
                  }}>
                    {partner.pliego}
                  </p>
                  <p style={{ 
                    color: '#1D99CC',
                    fontSize: '11px',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: 600
                  }}>
                    {partner.id}
                  </p>
                </div>

                {/* Stats Row */}
                <div 
                  className="flex items-center gap-4 mb-3 pb-3"
                  style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
                >
                  <div>
                    <div style={{ color: '#B0B0B0', fontSize: '10px', marginBottom: '2px' }}>Personal</div>
                    <div style={{ 
                      color: '#FFFFFF', 
                      fontSize: '16px',
                      fontWeight: 700,
                      fontFamily: 'JetBrains Mono, monospace'
                    }}>
                      {partner.staff}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#B0B0B0', fontSize: '10px', marginBottom: '2px' }}>Maquinaria</div>
                    <div style={{ 
                      color: '#FFFFFF', 
                      fontSize: '16px',
                      fontWeight: 700,
                      fontFamily: 'JetBrains Mono, monospace'
                    }}>
                      {partner.machinery}
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex items-center gap-1 px-2 py-1 rounded"
                    style={{
                      backgroundColor: partner.status === 'approved' 
                        ? 'rgba(0, 200, 83, 0.15)' 
                        : partner.status === 'pending'
                        ? 'rgba(255, 152, 0, 0.15)'
                        : 'rgba(255, 82, 82, 0.15)',
                      color: partner.status === 'approved' 
                        ? '#00C853' 
                        : partner.status === 'pending'
                        ? '#FF9800'
                        : '#FF5252',
                      fontSize: '10px',
                      fontWeight: 700,
                      textTransform: 'uppercase'
                    }}
                  >
                    {partner.status === 'approved' && <CheckCircle2 size={12} />}
                    {partner.status === 'warning' && <AlertTriangle size={12} />}
                    {partner.statusText}
                  </span>

                  <span style={{ color: '#B0B0B0', fontSize: '11px' }}>
                    {partner.zone}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}