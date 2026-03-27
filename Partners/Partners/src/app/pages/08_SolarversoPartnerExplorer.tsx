import { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  Search,
  Filter,
  MapPin,
  Wrench,
  Users,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Building2,
  X
} from 'lucide-react';
import GlobalSidebar from '../components/GlobalSidebar';

interface Partner {
  id: string;
  name: string;
  yearsActive: number;
  location: string;
  services: string[];
  sstScore: number;
  alerts: Alert[];
  availableEquipment: EquipmentAvailability[];
  localCompany: boolean;
  habilitado: boolean;
}

interface Alert {
  type: 'critical' | 'warning' | 'info';
  message: string;
}

interface EquipmentAvailability {
  name: string;
  quantity: number;
}

const mockPartners: Partner[] = [
  {
    id: 'SST-001',
    name: 'Soluciones Civiles SAS',
    yearsActive: 8,
    location: 'Antioquia',
    services: ['Maquinaria Amarilla', 'Obra Civil', 'Personal Local'],
    sstScore: 92,
    alerts: [],
    availableEquipment: [
      { name: 'Retroexcavadora (Pajarita)', quantity: 1 },
      { name: 'Bulldozer D3', quantity: 1 },
      { name: 'Volqueta', quantity: 2 }
    ],
    localCompany: true,
    habilitado: true
  },
  {
    id: 'SST-002',
    name: 'Construcciones Andinas SAS',
    yearsActive: 12,
    location: 'Cundinamarca',
    services: ['Maquinaria Amarilla', 'Transporte'],
    sstScore: 88,
    alerts: [
      { type: 'warning', message: 'SOAT Vence en 5 días' }
    ],
    availableEquipment: [
      { name: 'Excavadora', quantity: 2 },
      { name: 'Compactadora', quantity: 1 }
    ],
    localCompany: false,
    habilitado: true
  },
  {
    id: 'SST-003',
    name: 'Maquinaria del Valle LTDA',
    yearsActive: 6,
    location: 'Valle del Cauca',
    services: ['Maquinaria Amarilla', 'Montacargas'],
    sstScore: 85,
    alerts: [
      { type: 'critical', message: 'SST Score Pendiente' }
    ],
    availableEquipment: [
      { name: 'Retroexcavadora', quantity: 1 },
      { name: 'Montacargas 3 ton', quantity: 1 }
    ],
    localCompany: false,
    habilitado: false
  },
  {
    id: 'SST-004',
    name: 'Transportes Bogotá Express',
    yearsActive: 15,
    location: 'Cundinamarca',
    services: ['Transporte', 'Logística'],
    sstScore: 94,
    alerts: [],
    availableEquipment: [
      { name: 'Volqueta', quantity: 5 },
      { name: 'Camión Grúa', quantity: 2 }
    ],
    localCompany: false,
    habilitado: true
  },
  {
    id: 'SST-005',
    name: 'Excavaciones del Norte',
    yearsActive: 10,
    location: 'Antioquia',
    services: ['Maquinaria Amarilla', 'Obra Civil', 'Personal Local'],
    sstScore: 90,
    alerts: [],
    availableEquipment: [
      { name: 'Retroexcavadora (Pajarita)', quantity: 2 },
      { name: 'Bulldozer', quantity: 1 },
      { name: 'Compactadora', quantity: 2 }
    ],
    localCompany: true,
    habilitado: true
  },
  {
    id: 'SST-006',
    name: 'Compactadora Central SA',
    yearsActive: 4,
    location: 'Antioquia',
    services: ['Maquinaria Amarilla', 'Personal Local'],
    sstScore: 78,
    alerts: [
      { type: 'warning', message: 'Póliza RCE próxima a vencer' }
    ],
    availableEquipment: [
      { name: 'Vibrocompactador', quantity: 3 },
      { name: 'Compactadora Manual', quantity: 2 }
    ],
    localCompany: true,
    habilitado: false
  }
];

export default function SolarversoPartnerExplorer() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState<string>('all');
  const [filterService, setFilterService] = useState<string>('all');
  const [filterMinSST, setFilterMinSST] = useState<boolean>(false);

  const filteredPartners = mockPartners.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = filterLocation === 'all' || p.location === filterLocation;
    const matchesService = filterService === 'all' || p.services.includes(filterService);
    const matchesSST = !filterMinSST || p.sstScore >= 86;
    return matchesSearch && matchesLocation && matchesService && matchesSST;
  });

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

      {/* Left Filter Sidebar */}
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
            Filtros
          </h2>
          <p style={{ 
            color: '#B0B0B0', 
            fontSize: '11px'
          }}>
            Refina tu búsqueda
          </p>
        </div>

        {/* Filters */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {/* Location Filter */}
          <div className="mb-5">
            <label style={{
              display: 'block',
              color: '#FFFFFF',
              fontSize: '11px',
              fontWeight: 600,
              marginBottom: '8px'
            }}>
              Ubicación
            </label>
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              style={{
                width: '100%',
                height: '36px',
                padding: '0 12px',
                backgroundColor: '#121212',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                color: '#FFFFFF',
                fontSize: '12px'
              }}
            >
              <option value="all">Todas las regiones</option>
              <option value="Antioquia">Antioquia</option>
              <option value="Cundinamarca">Cundinamarca</option>
              <option value="Valle del Cauca">Valle del Cauca</option>
            </select>
          </div>

          {/* Service Filter */}
          <div className="mb-5">
            <label style={{
              display: 'block',
              color: '#FFFFFF',
              fontSize: '11px',
              fontWeight: 600,
              marginBottom: '8px'
            }}>
              Servicio
            </label>
            <select
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
              style={{
                width: '100%',
                height: '36px',
                padding: '0 12px',
                backgroundColor: '#121212',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                color: '#FFFFFF',
                fontSize: '12px'
              }}
            >
              <option value="all">Todos los servicios</option>
              <option value="Maquinaria Amarilla">Maquinaria Amarilla</option>
              <option value="Transporte">Transporte</option>
              <option value="Obra Civil">Obra Civil</option>
            </select>
          </div>

          {/* SST Score Filter */}
          <div className="mb-5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filterMinSST}
                onChange={(e) => setFilterMinSST(e.target.checked)}
                style={{
                  width: '16px',
                  height: '16px',
                  accentColor: '#1D99CC'
                }}
              />
              <span style={{ color: '#FFFFFF', fontSize: '12px' }}>
                Solo SST ≥ 86%
              </span>
            </label>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => {
              setFilterLocation('all');
              setFilterService('all');
              setFilterMinSST(false);
              setSearchTerm('');
            }}
            className="w-full h-9 rounded flex items-center justify-center gap-2 transition-colors"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#B0B0B0',
              fontSize: '12px',
              fontWeight: 600
            }}
          >
            <X size={14} />
            Limpiar Filtros
          </button>
        </div>

        {/* Stats */}
        <div 
          className="px-4 py-4"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}
        >
          <div style={{ color: '#B0B0B0', fontSize: '9px', marginBottom: '4px' }}> {/* Reduced from 10px */}
            Partners Activos
          </div>
          <div style={{ 
            color: '#1D99CC', 
            fontSize: '20px',
            fontWeight: 700,
            fontFamily: 'JetBrains Mono, monospace'
          }}>
            {filteredPartners.filter(p => p.habilitado).length}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div 
          className="px-6 py-4"
          style={{ 
            backgroundColor: '#1E1E1E',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 style={{ 
                color: '#FFFFFF', 
                fontSize: '16px',
                fontWeight: 700,
                marginBottom: '4px'
              }}>
                Partner Explorer
              </h1>
              <p style={{ 
                color: '#B0B0B0', 
                fontSize: '12px'
              }}>
                {filteredPartners.length} Partners Encontrados
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
            className="grid gap-3"
            style={{ 
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
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
                  opacity: partner.habilitado ? 1 : 0.6
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
                    top: '12px',
                    right: '12px',
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: partner.sstScore >= 86 
                      ? 'rgba(0, 200, 83, 0.1)' 
                      : 'rgba(255, 152, 0, 0.1)',
                    border: `2px solid ${partner.sstScore >= 86 ? '#00C853' : '#FF9800'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    boxShadow: partner.sstScore >= 86 
                      ? '0 0 20px rgba(0, 200, 83, 0.2)' 
                      : '0 0 20px rgba(255, 152, 0, 0.2)'
                  }}
                >
                  <div style={{ 
                    color: partner.sstScore >= 86 ? '#00C853' : '#FF9800', 
                    fontSize: '16px',
                    fontWeight: 700,
                    fontFamily: 'JetBrains Mono, monospace',
                    lineHeight: '1'
                  }}>
                    {partner.sstScore}
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

                {/* Icon + Status Badge */}
                <div className="flex items-start justify-between mb-3">
                  <div 
                    className="rounded flex items-center justify-center"
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'rgba(29, 153, 204, 0.1)',
                      color: '#1D99CC'
                    }}
                  >
                    <Building2 size={24} />
                  </div>

                  {!partner.habilitado && (
                    <span
                      className="px-2 py-1 rounded"
                      style={{
                        backgroundColor: 'rgba(255, 82, 82, 0.15)',
                        color: '#FF5252',
                        fontSize: '9px',
                        fontWeight: 700,
                        textTransform: 'uppercase'
                      }}
                    >
                      Inhabilitado
                    </span>
                  )}
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
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={12} style={{ color: '#B0B0B0' }} />
                    <p style={{ 
                      color: '#B0B0B0',
                      fontSize: '12px'
                    }}>
                      {partner.location}
                    </p>
                  </div>
                  <p style={{ 
                    color: '#1D99CC',
                    fontSize: '11px',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: 600
                  }}>
                    {partner.id}
                  </p>
                </div>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {partner.services.slice(0, 2).map((service, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded"
                      style={{
                        backgroundColor: 'rgba(29, 153, 204, 0.1)',
                        color: '#1D99CC',
                        fontSize: '10px',
                        fontWeight: 600
                      }}
                    >
                      {service}
                    </span>
                  ))}
                  {partner.services.length > 2 && (
                    <span style={{ color: '#B0B0B0', fontSize: '10px' }}>
                      +{partner.services.length - 2}
                    </span>
                  )}
                </div>

                {/* Equipment Preview */}
                <div 
                  className="pt-3"
                  style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
                >
                  <div style={{ color: '#B0B0B0', fontSize: '10px', marginBottom: '6px' }}>
                    Equipos Disponibles
                  </div>
                  <div className="space-y-1">
                    {partner.availableEquipment.slice(0, 2).map((eq, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-between"
                      >
                        <span style={{ 
                          color: '#FFFFFF', 
                          fontSize: '11px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          flex: 1
                        }}>
                          {eq.name}
                        </span>
                        <span style={{ 
                          color: '#1D99CC',
                          fontSize: '12px',
                          fontWeight: 700,
                          fontFamily: 'JetBrains Mono, monospace',
                          marginLeft: '8px'
                        }}>
                          ×{eq.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alerts */}
                {partner.alerts.length > 0 && (
                  <div 
                    className="mt-3 p-2 rounded flex items-center gap-2"
                    style={{
                      backgroundColor: partner.alerts[0].type === 'critical' 
                        ? 'rgba(255, 82, 82, 0.1)' 
                        : 'rgba(255, 152, 0, 0.1)',
                      border: `1px solid ${partner.alerts[0].type === 'critical' ? '#FF5252' : '#FF9800'}`
                    }}
                  >
                    <AlertTriangle 
                      size={14} 
                      style={{ 
                        color: partner.alerts[0].type === 'critical' ? '#FF5252' : '#FF9800' 
                      }} 
                    />
                    <span style={{ 
                      color: partner.alerts[0].type === 'critical' ? '#FF5252' : '#FF9800',
                      fontSize: '10px',
                      fontWeight: 600
                    }}>
                      {partner.alerts[0].message}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}