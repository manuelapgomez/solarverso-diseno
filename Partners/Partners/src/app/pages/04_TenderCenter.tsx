import { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  Search,
  MapPin,
  Calendar,
  Clock,
  FileText,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  X,
  Filter
} from 'lucide-react';
import GlobalSidebar from '../components/GlobalSidebar';

interface Tender {
  id: string;
  title: string;
  location: string;
  closeDate: string;
  tags: string[];
  progress: number;
  status: 'open' | 'closing-soon' | 'closed';
  deadline: string;
}

const mockTenders: Tender[] = [
  {
    id: 'SOL-2026-001',
    title: 'Prestación de Servicios Maquinaria Amarilla',
    location: 'Medellín, Antioquia',
    closeDate: '2026-02-20',
    tags: ['Maquinaria', 'Obra Civil', 'Antioquia'],
    progress: 65,
    status: 'open',
    deadline: '60 días'
  },
  {
    id: 'SOL-2026-002',
    title: 'Transporte de Material Pétreo',
    location: 'Bogotá, Cundinamarca',
    closeDate: '2026-02-25',
    tags: ['Transporte', 'Logística', 'Cundinamarca'],
    progress: 0,
    status: 'open',
    deadline: '45 días'
  },
  {
    id: 'SOL-2026-003',
    title: 'Excavación y Relleno Terreno Industrial',
    location: 'Cali, Valle del Cauca',
    closeDate: '2026-02-12',
    tags: ['Excavación', 'Industrial', 'Valle'],
    progress: 100,
    status: 'closing-soon',
    deadline: '90 días'
  },
  {
    id: 'SOL-2026-004',
    title: 'Compactación Vías Rurales',
    location: 'Cartagena, Bolívar',
    closeDate: '2026-03-05',
    tags: ['Compactación', 'Vial', 'Rural'],
    progress: 30,
    status: 'open',
    deadline: '30 días'
  },
  {
    id: 'SOL-2026-005',
    title: 'Nivelación y Conformación Terreno',
    location: 'Medellín, Antioquia',
    closeDate: '2026-02-28',
    tags: ['Nivelación', 'Solar', 'Antioquia'],
    progress: 0,
    status: 'open',
    deadline: '120 días'
  },
  {
    id: 'SOL-2026-006',
    title: 'Movilización de Equipos Pesados',
    location: 'Barranquilla, Atlántico',
    closeDate: '2026-02-18',
    tags: ['Transporte', 'Equipos', 'Atlántico'],
    progress: 45,
    status: 'open',
    deadline: '20 días'
  }
];

export default function TenderCenter() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterLocation, setFilterLocation] = useState<string>('all');

  const filteredTenders = mockTenders.filter(t => {
    const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         t.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || t.status === filterStatus;
    const matchesLocation = filterLocation === 'all' || t.location.includes(filterLocation);
    return matchesSearch && matchesStatus && matchesLocation;
  });

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'open':
        return {
          label: 'Abierto',
          color: '#00C853',
          bg: 'rgba(0, 200, 83, 0.15)',
          icon: <CheckCircle2 size={14} />
        };
      case 'closing-soon':
        return {
          label: 'Cierra Pronto',
          color: '#FF9800',
          bg: 'rgba(255, 152, 0, 0.15)',
          icon: <Clock size={14} />
        };
      case 'closed':
        return {
          label: 'Cerrado',
          color: '#9E9E9E',
          bg: 'rgba(158, 158, 158, 0.15)',
          icon: <AlertCircle size={14} />
        };
      default:
        return {
          label: 'Desconocido',
          color: '#9E9E9E',
          bg: 'rgba(158, 158, 158, 0.15)',
          icon: <AlertCircle size={14} />
        };
    }
  };

  const getDaysUntilClose = (closeDate: string): number => {
    const today = new Date('2026-02-10'); // Mock current date
    const close = new Date(closeDate);
    const diff = close.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

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
            Encuentra pliegos activos
          </p>
        </div>

        {/* Filters */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {/* Status Filter */}
          <div className="mb-5">
            <label style={{
              display: 'block',
              color: '#FFFFFF',
              fontSize: '11px',
              fontWeight: 600,
              marginBottom: '8px'
            }}>
              Estado
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
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
              <option value="all">Todos los estados</option>
              <option value="open">Abiertos</option>
              <option value="closing-soon">Cierra Pronto</option>
              <option value="closed">Cerrados</option>
            </select>
          </div>

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
              <option value="all">Todas las ciudades</option>
              <option value="Antioquia">Antioquia</option>
              <option value="Cundinamarca">Cundinamarca</option>
              <option value="Valle del Cauca">Valle del Cauca</option>
              <option value="Bolívar">Bolívar</option>
              <option value="Atlántico">Atlántico</option>
            </select>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => {
              setFilterStatus('all');
              setFilterLocation('all');
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
          <div style={{ color: '#B0B0B0', fontSize: '10px', marginBottom: '4px' }}>
            Pliegos Abiertos
          </div>
          <div style={{ 
            color: '#00C853', 
            fontSize: '28px',
            fontWeight: 700,
            fontFamily: 'JetBrains Mono, monospace'
          }}>
            {mockTenders.filter(t => t.status === 'open').length}
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
                fontSize: '20px',
                fontWeight: 700,
                marginBottom: '4px'
              }}>
                Centro de Pliegos
              </h1>
              <p style={{ 
                color: '#B0B0B0', 
                fontSize: '12px'
              }}>
                {filteredTenders.length} Oportunidades Disponibles
              </p>
            </div>

            <button
              onClick={() => navigate('/tenders/submit')}
              className="h-10 px-6 rounded flex items-center gap-2 transition-colors"
              style={{
                backgroundColor: '#1D99CC',
                color: '#FFFFFF',
                fontSize: '13px',
                fontWeight: 600
              }}
            >
              <FileText size={16} />
              Nueva Postulación
            </button>
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
              placeholder="Buscar por título o ID..."
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
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))'
            }}
          >
            {filteredTenders.map((tender) => {
              const statusConfig = getStatusConfig(tender.status);
              const daysLeft = getDaysUntilClose(tender.closeDate);

              return (
                <div
                  key={tender.id}
                  onClick={() => navigate(`/tenders/${tender.id}/submit`)}
                  className="cursor-pointer transition-all group"
                  style={{
                    backgroundColor: '#1E1E1E',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    padding: '24px'
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
                  {/* Header with Status */}
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
                      <FileText size={24} />
                    </div>

                    <span
                      className="px-2 py-1 rounded flex items-center gap-1"
                      style={{
                        backgroundColor: statusConfig.bg,
                        color: statusConfig.color,
                        fontSize: '10px',
                        fontWeight: 700,
                        textTransform: 'uppercase'
                      }}
                    >
                      {statusConfig.icon}
                      {statusConfig.label}
                    </span>
                  </div>

                  {/* Tender Info */}
                  <div className="mb-3">
                    <h3 style={{ 
                      color: '#FFFFFF',
                      fontSize: '16px',
                      fontWeight: 700,
                      marginBottom: '6px',
                      lineHeight: '1.3'
                    }}>
                      {tender.title}
                    </h3>
                    <p style={{ 
                      color: '#1D99CC',
                      fontSize: '11px',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontWeight: 600
                    }}>
                      {tender.id}
                    </p>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={14} style={{ color: '#B0B0B0' }} />
                    <span style={{ color: '#B0B0B0', fontSize: '12px' }}>
                      {tender.location}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tender.tags.map((tag, idx) => (
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
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div 
                    className="mb-4"
                    style={{ 
                      height: '1px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    }}
                  />

                  {/* Bottom Info Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div style={{ 
                        color: '#B0B0B0', 
                        fontSize: '10px',
                        marginBottom: '4px'
                      }}>
                        Plazo
                      </div>
                      <div style={{ 
                        color: '#FFFFFF',
                        fontSize: '14px',
                        fontWeight: 700,
                        fontFamily: 'JetBrains Mono, monospace'
                      }}>
                        {tender.deadline}
                      </div>
                    </div>

                    <div>
                      <div style={{ 
                        color: '#B0B0B0', 
                        fontSize: '10px',
                        marginBottom: '4px'
                      }}>
                        Cierre
                      </div>
                      <div style={{ 
                        color: daysLeft <= 3 ? '#FF9800' : '#FFFFFF',
                        fontSize: '14px',
                        fontWeight: 700,
                        fontFamily: 'JetBrains Mono, monospace'
                      }}>
                        {daysLeft}d
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {tender.progress > 0 && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span style={{ 
                          color: '#B0B0B0', 
                          fontSize: '10px'
                        }}>
                          Tu Progreso
                        </span>
                        <span style={{ 
                          color: '#1D99CC',
                          fontSize: '11px',
                          fontWeight: 700,
                          fontFamily: 'JetBrains Mono, monospace'
                        }}>
                          {tender.progress}%
                        </span>
                      </div>
                      <div 
                        style={{
                          height: '6px',
                          backgroundColor: 'rgba(29, 153, 204, 0.1)',
                          borderRadius: '3px',
                          overflow: 'hidden'
                        }}
                      >
                        <div 
                          style={{
                            width: `${tender.progress}%`,
                            height: '100%',
                            backgroundColor: '#1D99CC',
                            transition: 'width 0.3s ease'
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}