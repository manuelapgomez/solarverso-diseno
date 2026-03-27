import { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router';
import { UnifiedPartnerSidebar } from '../components/UnifiedPartnerSidebar';
import { Search, MapPin, Calendar, ArrowRight, Clock, AlertCircle, CheckCircle2, FileText, TrendingUp, Layers } from 'lucide-react';
import Masonry from 'react-responsive-masonry';
import { useTheme } from '../contexts/ThemeContext';

// ===== TYPES =====
interface Tender {
  id: string;
  mgsId: string;
  title: string;
  category: string;
  location: string;
  closingDate: string;
  matchScore: number;
  description: string;
}

type PipelineStage = 'postulado' | 'revision_documental' | 'evaluacion_tecnica' | 'fallo_final';

interface Application {
  id: string;
  tenderId: string;
  mgsId: string;
  title: string;
  category: string;
  status: 'under_review' | 'action_required' | 'approved' | 'rejected';
  matchScore: number;
  appliedDate: string;
  dueDate?: string;
  actionItems?: string[];
  location: string;
  // Pipeline journey fields
  currentStage: PipelineStage;
  score?: number;
  lastComment?: string;
  blockedStage?: PipelineStage;
  blockedReason?: string;
}

// ===== MOCK DATA =====
const MOCK_TENDERS: Tender[] = [
  {
    id: 'TND-001',
    mgsId: 'MGS-BOY-04',
    title: 'Obra Civil MGS Boyacá IV',
    category: 'Civiles',
    location: 'Paipa, Boyacá',
    closingDate: '15 Dic 2026',
    matchScore: 94,
    description: 'Construcción de cimentaciones, estructuras y vías de acceso para mini granja solar.',
  },
  {
    id: 'TND-002',
    mgsId: 'MGS-MET-03',
    title: 'Montaje Eléctrico Meta III',
    category: 'Eléctricos',
    location: 'Puerto López, Meta',
    closingDate: '20 Dic 2026',
    matchScore: 88,
    description: 'Instalación de sistema eléctrico completo, inversor y conexión a red.',
  },
  {
    id: 'TND-003',
    mgsId: 'MGS-HUI-02',
    title: 'Obra Civil y Estructuras Huila II',
    category: 'Civiles',
    location: 'Neiva, Huila',
    closingDate: '18 Dic 2026',
    matchScore: 91,
    description: 'Construcción integral de infraestructura civil y montaje de estructuras metálicas.',
  },
  {
    id: 'TND-004',
    mgsId: 'MGS-CAS-04',
    title: 'Suministro Maquinaria Casanare IV',
    category: 'Maquinaria',
    location: 'Yopal, Casanare',
    closingDate: '22 Dic 2026',
    matchScore: 76,
    description: 'Suministro e instalación de maquinaria y equipos especializados.',
  },
  {
    id: 'TND-005',
    mgsId: 'MGS-CAL-01',
    title: 'Instalación Paneles Caldas I',
    category: 'Eléctricos',
    location: 'Manizales, Caldas',
    closingDate: '25 Dic 2026',
    matchScore: 82,
    description: 'Montaje de módulos fotovoltaicos y sistema de cableado DC.',
  },
  {
    id: 'TND-006',
    mgsId: 'MGS-CUN-03',
    title: 'Sistema Estructural Cundinamarca III',
    category: 'Civiles',
    location: 'Facatativá, Cundinamarca',
    closingDate: '28 Dic 2026',
    matchScore: 89,
    description: 'Construcción de estructuras metálicas y sistemas de soporte.',
  },
];

const MOCK_APPLICATIONS: Application[] = [
  {
    id: 'APP-001',
    tenderId: 'TND-001',
    mgsId: 'MGS-BOY-04',
    title: 'Obra Civil MGS Boyacá IV',
    category: 'Civiles',
    status: 'under_review',
    matchScore: 94,
    appliedDate: '10 Dic 2026',
    location: 'Paipa, Boyacá',
    currentStage: 'postulado',
    score: 94,
    lastComment: 'Propuesta recibida. Pendiente revisión inicial.',
  },
  {
    id: 'APP-002',
    tenderId: 'TND-003',
    mgsId: 'MGS-HUI-02',
    title: 'Obra Civil y Estructuras Huila II',
    category: 'Civiles',
    status: 'action_required',
    matchScore: 91,
    appliedDate: '08 Dic 2026',
    dueDate: '16 Dic 2026',
    actionItems: [
      'Certificado de experiencia pendiente',
      'Actualizar póliza RCE',
    ],
    location: 'Neiva, Huila',
    currentStage: 'revision_documental',
    score: 85,
    lastComment: 'Falta certificado de experiencia.',
    blockedStage: 'revision_documental',
    blockedReason: 'Certificado de experiencia rechazado. Debe subir versión actualizada.',
  },
  {
    id: 'APP-003',
    tenderId: 'TND-005',
    mgsId: 'MGS-CAL-01',
    title: 'Instalación Paneles Caldas I',
    category: 'Eléctricos',
    status: 'approved',
    matchScore: 82,
    appliedDate: '05 Dic 2026',
    location: 'Manizales, Caldas',
    currentStage: 'fallo_final',
    score: 90,
    lastComment: 'Aprobado.',
  },
  {
    id: 'APP-004',
    tenderId: 'TND-002',
    mgsId: 'MGS-MET-03',
    title: 'Montaje Eléctrico Meta III',
    category: 'Eléctricos',
    status: 'under_review',
    matchScore: 88,
    appliedDate: '12 Dic 2026',
    location: 'Puerto López, Meta',
    currentStage: 'postulado',
  },
  {
    id: 'APP-005',
    tenderId: 'TND-006',
    mgsId: 'MGS-CUN-03',
    title: 'Sistema Estructural Cundinamarca III',
    category: 'Civiles',
    status: 'rejected',
    matchScore: 89,
    appliedDate: '01 Dic 2026',
    location: 'Facatativá, Cundinamarca',
    currentStage: 'fallo_final',
    score: 75,
    lastComment: 'Rechazado.',
  },
];

const CATEGORIES = ['Todos', 'Civiles', 'Eléctricos', 'Maquinaria', 'Estructuras'];

type ViewMode = 'opportunities' | 'activity';

export default function UnifiedPartnerWorkspace() {
  const location = useLocation();
  
  // Determine initial view based on route
  const getInitialView = (): ViewMode => {
    if (location.pathname.includes('actividad')) {
      return 'activity';
    }
    return 'opportunities'; // Default to opportunities
  };
  
  const [viewMode, setViewMode] = useState<ViewMode>(getInitialView());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Opportunities filtering
  const filteredTenders = MOCK_TENDERS.filter((tender) => {
    const matchesSearch =
      tender.mgsId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tender.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tender.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'Todos' || tender.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Activity filtering
  const filteredApplications = MOCK_APPLICATIONS.filter((app) => {
    if (selectedFilter === 'all') return true;
    return app.status === selectedFilter;
  });

  const stats = {
    total: MOCK_APPLICATIONS.length,
    underReview: MOCK_APPLICATIONS.filter((a) => a.status === 'under_review').length,
    actionRequired: MOCK_APPLICATIONS.filter((a) => a.status === 'action_required').length,
    approved: MOCK_APPLICATIONS.filter((a) => a.status === 'approved').length,
  };

  const { theme, colors } = useTheme();

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: colors.canvasBackground,
      }}
    >
      <UnifiedPartnerSidebar />

      <div
        className="flex-1 flex flex-col"
        style={{
          marginLeft: '240px',
        }}
      >
        {/* UNIFIED HEADER WITH TAB SWITCHER */}
        <div
          style={{
            borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Top Bar */}
          <div className="px-8 py-6 flex items-center justify-between">
            <div className="flex items-center gap-6">
              {/* Tab Switcher */}
              <div
                className="flex items-center rounded overflow-hidden"
                style={{
                  backgroundColor: colors.panelBackground,
                  border: `0.5px solid ${colors.border}`,
                }}
              >
                <button
                  onClick={() => setViewMode('opportunities')}
                  className="flex items-center gap-2 px-5 py-3 transition-all"
                  style={{
                    backgroundColor: viewMode === 'opportunities' ? '#1D99CC' : 'transparent',
                    color: viewMode === 'opportunities' ? '#FFFFFF' : '#808080',
                    fontSize: '12px',
                    fontWeight: '600',
                    borderRight: `0.5px solid ${colors.border}`,
                  }}
                >
                  <Layers style={{ width: '14px', height: '14px' }} />
                  Oportunidades
                  {viewMode === 'opportunities' && (
                    <div
                      className="px-1.5 rounded"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        fontSize: '10px',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontWeight: '700',
                      }}
                    >
                      {filteredTenders.length}
                    </div>
                  )}
                </button>
                <button
                  onClick={() => setViewMode('activity')}
                  className="flex items-center gap-2 px-5 py-3 transition-all"
                  style={{
                    backgroundColor: viewMode === 'activity' ? '#1D99CC' : 'transparent',
                    color: viewMode === 'activity' ? '#FFFFFF' : '#808080',
                    fontSize: '12px',
                    fontWeight: '600',
                  }}
                >
                  <TrendingUp style={{ width: '14px', height: '14px' }} />
                  Mi Actividad
                  {viewMode === 'activity' && stats.actionRequired > 0 && (
                    <div
                      className="px-1.5 rounded"
                      style={{
                        backgroundColor: '#FF9800',
                        fontSize: '10px',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontWeight: '700',
                      }}
                    >
                      {stats.actionRequired}
                    </div>
                  )}
                </button>
              </div>

              {/* View Title & Subtitle */}
              <div>
                <h1
                  style={{
                    color: '#FFFFFF',
                    fontSize: '20px',
                    fontWeight: '700',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '2px',
                  }}
                >
                  {viewMode === 'opportunities' ? 'Marketplace de Pliegos' : 'Estado de Postulaciones'}
                </h1>
                <div
                  style={{
                    color: '#606060',
                    fontSize: '11px',
                  }}
                >
                  {viewMode === 'opportunities'
                    ? `${filteredTenders.length} oportunidades disponibles`
                    : 'Acciones pendientes y estado de aplicaciones'}
                </div>
              </div>
            </div>

            {/* Search (Only for Opportunities) */}
            {viewMode === 'opportunities' && (
              <div
                className="flex items-center gap-3 px-4 py-2.5 rounded"
                style={{
                  backgroundColor: colors.inputBackground,
                  border: `0.5px solid ${colors.border}`,
                  width: '360px',
                }}
              >
                <Search style={{ width: '16px', height: '16px', color: '#606060' }} />
                <input
                  type="text"
                  placeholder="Buscar por MGS, ubicación o tipo..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: colors.text,
                    fontSize: '12px',
                  }}
                />
              </div>
            )}
          </div>

          {/* Filter Pills / Stats Bar */}
          {viewMode === 'opportunities' ? (
            <div className="px-8 pb-4 flex items-center gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="px-4 py-2 rounded transition-all"
                  style={{
                    backgroundColor: selectedCategory === category ? 'rgba(29, 153, 204, 0.12)' : colors.cardBackground,
                    border: selectedCategory === category ? '0.5px solid #1D99CC' : `0.5px solid ${colors.border}`,
                    color: selectedCategory === category ? '#1D99CC' : colors.textSecondary,
                    fontSize: '11px',
                    fontWeight: '600',
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          ) : (
            <div className="px-8 pb-4 flex items-center gap-4">
              <StatCard
                label="Total Aplicaciones"
                value={stats.total}
                icon={<FileText style={{ width: '14px', height: '14px' }} />}
                color="#808080"
                isActive={selectedFilter === 'all'}
                onClick={() => setSelectedFilter('all')}
              />
              <StatCard
                label="En Revisión"
                value={stats.underReview}
                icon={<Clock style={{ width: '14px', height: '14px' }} />}
                color="#1D99CC"
                isActive={selectedFilter === 'under_review'}
                onClick={() => setSelectedFilter('under_review')}
              />
              <StatCard
                label="Acción Requerida"
                value={stats.actionRequired}
                icon={<AlertCircle style={{ width: '14px', height: '14px' }} />}
                color="#FF9800"
                isActive={selectedFilter === 'action_required'}
                onClick={() => setSelectedFilter('action_required')}
              />
              <StatCard
                label="Aprobadas"
                value={stats.approved}
                icon={<CheckCircle2 style={{ width: '14px', height: '14px' }} />}
                color="#00C853"
                isActive={selectedFilter === 'approved'}
                onClick={() => setSelectedFilter('approved')}
              />
            </div>
          )}
        </div>

        {/* MAIN CONTENT AREA - Context Switching */}
        <div className="flex-1 overflow-auto px-8 py-6">
          {viewMode === 'opportunities' ? (
            <Masonry columnsCount={3} gutter="16px">
              {filteredTenders.map((tender) => (
                <TenderCard key={tender.id} tender={tender} />
              ))}
            </Masonry>
          ) : (
            /* PIPELINE DE POSTULACIONES - FULL WIDTH VIEW */
            <div className="max-w-7xl mx-auto">
              {/* Pipeline Header with Funnel Stats */}
              <div className="mb-8">
                <h2
                  style={{
                    color: '#FFFFFF',
                    fontSize: '22px',
                    fontWeight: '700',
                    fontFamily: 'JetBrains Mono, monospace',
                    marginBottom: '12px',
                  }}
                >
                  Pipeline de Postulaciones
                </h2>

                {/* Funnel Stats Bar */}
                <div className="flex items-center gap-3">
                  <FunnelStat label="Enviadas" value={5} color="#808080" />
                  <div
                    style={{
                      color: '#404040',
                      fontSize: '18px',
                      fontWeight: '700',
                    }}
                  >
                    →
                  </div>
                  <FunnelStat label="En Revisión Técnica" value={2} color="#1D99CC" />
                  <div
                    style={{
                      color: '#404040',
                      fontSize: '18px',
                      fontWeight: '700',
                    }}
                  >
                    →
                  </div>
                  <FunnelStat label="En Selección Final" value={1} color="#00C853" />
                </div>
              </div>

              {/* Journey Cards Stack */}
              <div className="space-y-4">
                {filteredApplications.map((application) => (
                  <JourneyCard key={application.id} application={application} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ===== STAT CARD (Activity Stats) =====
interface StatCardProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  isActive: boolean;
  onClick: () => void;
}

function StatCard({ label, value, icon, color, isActive, onClick }: StatCardProps) {
  const { colors } = useTheme();
  
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3 rounded transition-all cursor-pointer"
      style={{
        backgroundColor: isActive ? colors.cardBackground : colors.panelBackground,
        border: isActive ? `0.5px solid ${color}` : `0.5px solid ${colors.border}`,
        boxShadow: isActive ? `0 0 16px ${color}33` : 'none',
        flex: 1,
      }}
    >
      <div style={{ color }}>{icon}</div>
      <div className="flex flex-col items-start">
        <div
          style={{
            color: colors.textTertiary,
            fontSize: '9px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '2px',
          }}
        >
          {label}
        </div>
        <div
          style={{
            color: colors.text,
            fontSize: '18px',
            fontWeight: '700',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          {value}
        </div>
      </div>
    </button>
  );
}

// ===== TENDER CARD (Opportunities View) =====
interface TenderCardProps {
  tender: Tender;
}

function TenderCard({ tender }: TenderCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded overflow-hidden transition-all cursor-pointer"
      style={{
        backgroundColor: '#121212',
        border: isHovered ? '0.5px solid #1D99CC' : '0.5px solid rgba(255, 255, 255, 0.08)',
        boxShadow: isHovered ? '0 0 24px rgba(29, 153, 204, 0.15)' : 'none',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div
        className="px-5 py-4"
        style={{
          borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <div
            style={{
              color: isHovered ? '#1D99CC' : '#B0B0B0',
              fontSize: '10px',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: '700',
              letterSpacing: '0.5px',
            }}
          >
            {tender.mgsId}
          </div>
          <div
            className="px-2 py-1 rounded"
            style={{
              backgroundColor: 'rgba(29, 153, 204, 0.12)',
              color: '#1D99CC',
              fontSize: '10px',
              fontWeight: '700',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {tender.matchScore}% MATCH
          </div>
        </div>

        <h3
          style={{
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: '700',
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.4',
            marginBottom: '8px',
          }}
        >
          {tender.title}
        </h3>

        <div
          className="inline-block px-2 py-1 rounded"
          style={{
            backgroundColor: '#0A0A0A',
            color: '#808080',
            fontSize: '9px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {tender.category}
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-4">
        <p
          style={{
            color: '#808080',
            fontSize: '11px',
            lineHeight: '1.6',
            marginBottom: '16px',
          }}
        >
          {tender.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <MapPin style={{ width: '12px', height: '12px', color: '#606060' }} />
            <span
              style={{
                color: '#B0B0B0',
                fontSize: '11px',
              }}
            >
              {tender.location}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar style={{ width: '12px', height: '12px', color: '#606060' }} />
            <span
              style={{
                color: '#B0B0B0',
                fontSize: '11px',
              }}
            >
              Cierre: {tender.closingDate}
            </span>
          </div>
        </div>

        <Link
          to={`/partner/tender/${tender.mgsId}`}
          className="flex items-center gap-2 px-3 py-2 rounded transition-all"
          style={{
            backgroundColor: isHovered ? '#1D99CC' : 'transparent',
            border: '0.5px solid #1D99CC',
            color: isHovered ? '#FFFFFF' : '#1D99CC',
            fontSize: '11px',
            fontWeight: '600',
            textDecoration: 'none',
          }}
        >
          Ver Pliego
          <ArrowRight style={{ width: '12px', height: '12px' }} />
        </Link>
      </div>
    </div>
  );
}

// ===== APPLICATION CARD (Activity View) =====
interface ApplicationCardProps {
  application: Application;
}

function ApplicationCard({ application }: ApplicationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusConfig = (status: Application['status']) => {
    switch (status) {
      case 'under_review':
        return {
          label: 'En Revisión',
          color: '#1D99CC',
          bg: 'rgba(29, 153, 204, 0.12)',
          icon: <Clock style={{ width: '14px', height: '14px' }} />,
        };
      case 'action_required':
        return {
          label: 'Acción Requerida',
          color: '#FF9800',
          bg: 'rgba(255, 152, 0, 0.12)',
          icon: <AlertCircle style={{ width: '14px', height: '14px' }} />,
        };
      case 'approved':
        return {
          label: 'Aprobada',
          color: '#00C853',
          bg: 'rgba(0, 200, 83, 0.12)',
          icon: <CheckCircle2 style={{ width: '14px', height: '14px' }} />,
        };
      case 'rejected':
        return {
          label: 'Rechazada',
          color: '#FF5252',
          bg: 'rgba(255, 82, 82, 0.12)',
          icon: <AlertCircle style={{ width: '14px', height: '14px' }} />,
        };
    }
  };

  const statusConfig = getStatusConfig(application.status);

  return (
    <div
      className="rounded overflow-hidden transition-all cursor-pointer"
      style={{
        backgroundColor: '#121212',
        border: isHovered ? '0.5px solid #1D99CC' : '0.5px solid rgba(255, 255, 255, 0.08)',
        boxShadow: isHovered ? '0 0 24px rgba(29, 153, 204, 0.15)' : 'none',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Status Banner */}
      <div
        className="px-5 py-3 flex items-center gap-3"
        style={{
          backgroundColor: statusConfig.bg,
          borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div style={{ color: statusConfig.color }}>{statusConfig.icon}</div>
        <div
          style={{
            color: statusConfig.color,
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '0.5px',
          }}
        >
          {statusConfig.label}
        </div>
      </div>

      {/* Header */}
      <div
        className="px-5 py-4"
        style={{
          borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <div
            style={{
              color: isHovered ? '#1D99CC' : '#B0B0B0',
              fontSize: '10px',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: '700',
              letterSpacing: '0.5px',
            }}
          >
            {application.mgsId}
          </div>
          <div
            className="flex items-center gap-1 px-2 py-1 rounded"
            style={{
              backgroundColor: 'rgba(29, 153, 204, 0.12)',
              color: '#1D99CC',
            }}
          >
            <TrendingUp style={{ width: '10px', height: '10px' }} />
            <span
              style={{
                fontSize: '10px',
                fontWeight: '700',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {application.matchScore}%
            </span>
          </div>
        </div>

        <h3
          style={{
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: '700',
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.4',
            marginBottom: '8px',
          }}
        >
          {application.title}
        </h3>

        <div
          className="inline-block px-2 py-1 rounded"
          style={{
            backgroundColor: '#0A0A0A',
            color: '#808080',
            fontSize: '9px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {application.category}
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-4">
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <span style={{ color: '#606060', fontSize: '10px' }}>Aplicado:</span>
            <span
              style={{
                color: '#B0B0B0',
                fontSize: '10px',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {application.appliedDate}
            </span>
          </div>
          {application.dueDate && (
            <div className="flex items-center justify-between">
              <span style={{ color: '#606060', fontSize: '10px' }}>Vencimiento:</span>
              <span
                style={{
                  color: '#FF9800',
                  fontSize: '10px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '600',
                }}
              >
                {application.dueDate}
              </span>
            </div>
          )}
        </div>

        {/* Action Items */}
        {application.actionItems && application.actionItems.length > 0 && (
          <div
            className="rounded p-3 mb-4"
            style={{
              backgroundColor: 'rgba(255, 152, 0, 0.08)',
              border: '0.5px solid rgba(255, 152, 0, 0.2)',
            }}
          >
            <div
              style={{
                color: '#FF9800',
                fontSize: '9px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                marginBottom: '6px',
              }}
            >
              PENDIENTES:
            </div>
            <ul className="space-y-1">
              {application.actionItems.map((item, index) => (
                <li
                  key={index}
                  style={{
                    color: '#D0D0D0',
                    fontSize: '10px',
                    lineHeight: '1.4',
                    paddingLeft: '12px',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: '0',
                      color: '#FF9800',
                    }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          className="w-full px-4 py-2.5 rounded transition-all"
          style={{
            backgroundColor: isHovered ? '#1D99CC' : 'transparent',
            border: '0.5px solid #1D99CC',
            color: isHovered ? '#FFFFFF' : '#1D99CC',
            fontSize: '11px',
            fontWeight: '600',
          }}
        >
          {application.status === 'action_required' ? 'Completar Documentos' : 'Ver Detalles'}
        </button>
      </div>
    </div>
  );
}

// ===== PIPELINE APPLICATIONS =====
const PIPELINE_APPLICATIONS: Application[] = [
  {
    id: 'APP-001',
    tenderId: 'TND-001',
    mgsId: 'MGS-BOY-04',
    title: 'Obra Civil MGS Boyacá IV',
    category: 'Civiles',
    status: 'under_review',
    matchScore: 94,
    appliedDate: '10 Dic 2026',
    location: 'Paipa, Boyacá',
    currentStage: 'postulado',
  },
  {
    id: 'APP-002',
    tenderId: 'TND-003',
    mgsId: 'MGS-HUI-02',
    title: 'Obra Civil y Estructuras Huila II',
    category: 'Civiles',
    status: 'action_required',
    matchScore: 91,
    appliedDate: '08 Dic 2026',
    dueDate: '16 Dic 2026',
    actionItems: [
      'Certificado de experiencia pendiente',
      'Actualizar póliza RCE',
    ],
    location: 'Neiva, Huila',
    currentStage: 'revision_documental',
    score: 85,
    lastComment: 'Falta certificado de experiencia.',
    blockedStage: 'revision_documental',
    blockedReason: 'Certificado de experiencia pendiente.',
  },
  {
    id: 'APP-003',
    tenderId: 'TND-005',
    mgsId: 'MGS-CAL-01',
    title: 'Instalación Paneles Caldas I',
    category: 'Eléctricos',
    status: 'approved',
    matchScore: 82,
    appliedDate: '05 Dic 2026',
    location: 'Manizales, Caldas',
    currentStage: 'fallo_final',
    score: 90,
    lastComment: 'Aprobado.',
  },
  {
    id: 'APP-004',
    tenderId: 'TND-002',
    mgsId: 'MGS-MET-03',
    title: 'Montaje Eléctrico Meta III',
    category: 'Eléctricos',
    status: 'under_review',
    matchScore: 88,
    appliedDate: '12 Dic 2026',
    location: 'Puerto López, Meta',
    currentStage: 'postulado',
  },
  {
    id: 'APP-005',
    tenderId: 'TND-006',
    mgsId: 'MGS-CUN-03',
    title: 'Sistema Estructural Cundinamarca III',
    category: 'Civiles',
    status: 'rejected',
    matchScore: 89,
    appliedDate: '01 Dic 2026',
    location: 'Facatativá, Cundinamarca',
    currentStage: 'fallo_final',
    score: 75,
    lastComment: 'Rechazado.',
  },
];

// ===== PIPELINE CARD =====
interface PipelineCardProps {
  application: Application;
  isEven: boolean;
}

function PipelineCard({ application, isEven }: PipelineCardProps) {
  const getStatusConfig = (status: Application['status']) => {
    switch (status) {
      case 'under_review':
        return {
          label: 'En Revisión',
          color: '#1D99CC',
          bg: 'rgba(29, 153, 204, 0.12)',
          icon: <Clock style={{ width: '14px', height: '14px' }} />,
        };
      case 'action_required':
        return {
          label: 'Acción Requerida',
          color: '#FF9800',
          bg: 'rgba(255, 152, 0, 0.12)',
          icon: <AlertCircle style={{ width: '14px', height: '14px' }} />,
        };
      case 'approved':
        return {
          label: 'Aprobada',
          color: '#00C853',
          bg: 'rgba(0, 200, 83, 0.12)',
          icon: <CheckCircle2 style={{ width: '14px', height: '14px' }} />,
        };
      case 'rejected':
        return {
          label: 'Rechazada',
          color: '#FF5252',
          bg: 'rgba(255, 82, 82, 0.12)',
          icon: <AlertCircle style={{ width: '14px', height: '14px' }} />,
        };
    }
  };

  const statusConfig = getStatusConfig(application.status);

  return (
    <div
      className="rounded overflow-hidden transition-all cursor-pointer"
      style={{
        backgroundColor: '#121212',
        border: '0.5px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 0 24px rgba(29, 153, 204, 0.15)',
        transform: 'translateY(-2px)',
        padding: '16px',
        marginBottom: '16px',
        ...(isEven ? { backgroundColor: '#1A1A1A' } : {}),
      }}
    >
      {/* Status Banner */}
      <div
        className="px-5 py-3 flex items-center gap-3"
        style={{
          backgroundColor: statusConfig.bg,
          borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div style={{ color: statusConfig.color }}>{statusConfig.icon}</div>
        <div
          style={{
            color: statusConfig.color,
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '0.5px',
          }}
        >
          {statusConfig.label}
        </div>
      </div>

      {/* Header */}
      <div
        className="px-5 py-4"
        style={{
          borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <div
            style={{
              color: '#1D99CC',
              fontSize: '10px',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: '700',
              letterSpacing: '0.5px',
            }}
          >
            {application.mgsId}
          </div>
          <div
            className="flex items-center gap-1 px-2 py-1 rounded"
            style={{
              backgroundColor: 'rgba(29, 153, 204, 0.12)',
              color: '#1D99CC',
            }}
          >
            <TrendingUp style={{ width: '10px', height: '10px' }} />
            <span
              style={{
                fontSize: '10px',
                fontWeight: '700',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {application.matchScore}%
            </span>
          </div>
        </div>

        <h3
          style={{
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: '700',
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.4',
            marginBottom: '8px',
          }}
        >
          {application.title}
        </h3>

        <div
          className="inline-block px-2 py-1 rounded"
          style={{
            backgroundColor: '#0A0A0A',
            color: '#808080',
            fontSize: '9px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {application.category}
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-4">
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <span style={{ color: '#606060', fontSize: '10px' }}>Aplicado:</span>
            <span
              style={{
                color: '#B0B0B0',
                fontSize: '10px',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {application.appliedDate}
            </span>
          </div>
          {application.dueDate && (
            <div className="flex items-center justify-between">
              <span style={{ color: '#606060', fontSize: '10px' }}>Vencimiento:</span>
              <span
                style={{
                  color: '#FF9800',
                  fontSize: '10px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '600',
                }}
              >
                {application.dueDate}
              </span>
            </div>
          )}
        </div>

        {/* Action Items */}
        {application.actionItems && application.actionItems.length > 0 && (
          <div
            className="rounded p-3 mb-4"
            style={{
              backgroundColor: 'rgba(255, 152, 0, 0.08)',
              border: '0.5px solid rgba(255, 152, 0, 0.2)',
            }}
          >
            <div
              style={{
                color: '#FF9800',
                fontSize: '9px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                marginBottom: '6px',
              }}
            >
              PENDIENTES:
            </div>
            <ul className="space-y-1">
              {application.actionItems.map((item, index) => (
                <li
                  key={index}
                  style={{
                    color: '#D0D0D0',
                    fontSize: '10px',
                    lineHeight: '1.4',
                    paddingLeft: '12px',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: '0',
                      color: '#FF9800',
                    }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          className="w-full px-4 py-2.5 rounded transition-all"
          style={{
            backgroundColor: '#1D99CC',
            border: '0.5px solid #1D99CC',
            color: '#FFFFFF',
            fontSize: '11px',
            fontWeight: '600',
          }}
        >
          {application.status === 'action_required' ? 'Completar Documentos' : 'Ver Detalles'}
        </button>
      </div>
    </div>
  );
}

// ===== FUNNEL STAT =====
interface FunnelStatProps {
  label: string;
  value: number;
  color: string;
}

function FunnelStat({ label, value, color }: FunnelStatProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-3 h-3 rounded-full"
        style={{
          backgroundColor: color,
        }}
      />
      <div
        style={{
          color: '#FFFFFF',
          fontSize: '14px',
          fontWeight: '700',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {value}
      </div>
      <div
        style={{
          color: '#606060',
          fontSize: '10px',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        {label}
      </div>
    </div>
  );
}

// ===== JOURNEY CARD =====
interface JourneyCardProps {
  application: Application;
}

function JourneyCard({ application }: JourneyCardProps) {
  const navigate = useNavigate();
  const { colors } = useTheme();
  
  const stages: { key: PipelineStage; label: string }[] = [
    { key: 'postulado', label: 'Postulado' },
    { key: 'revision_documental', label: 'Revisión Documental' },
    { key: 'evaluacion_tecnica', label: 'Evaluación Técnica' },
    { key: 'fallo_final', label: 'Fallo Final' },
  ];

  const getStageIndex = (stage: PipelineStage) => {
    return stages.findIndex((s) => s.key === stage);
  };

  const currentStageIndex = getStageIndex(application.currentStage);

  return (
    <div
      className="flex items-stretch gap-6 px-6 py-5 rounded transition-all"
      style={{
        backgroundColor: colors.cardBackground,
        border: `1px solid ${colors.border}`,
        boxShadow: colors.shadowSm,
      }}
    >
      {/* LEFT SECTION - Identity */}
      <div
        style={{
          width: '220px',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            color: colors.accent,
            fontSize: '12px',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: '700',
            letterSpacing: '0.5px',
            marginBottom: '8px',
          }}
        >
          {application.mgsId}
        </div>
        <h3
          style={{
            color: colors.textPrimary,
            fontSize: '15px',
            fontWeight: '600',
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.3',
          }}
        >
          {application.title}
        </h3>
      </div>

      {/* CENTER SECTION - Linear Stepper */}
      <div className="flex-1">
        <div className="flex items-center justify-center gap-10">
          {/* Stage Nodes */}
          {stages.map((stage, index) => {
            const isCompleted = index < currentStageIndex;
            const isCurrent = index === currentStageIndex;
            const isBlocked =
              application.blockedStage === stage.key && application.status === 'rejected';

            let iconColor = colors.textDisabled; // Pending (disabled)
            let labelColor = colors.textTertiary; // Pending label
            let iconSize = '14px';

            if (isBlocked) {
              iconColor = colors.error; // Error/Rejected
              labelColor = colors.error;
            } else if (isCurrent || isCompleted) {
              iconColor = colors.accent; // Active/Approved (Solenium Cyan)
              labelColor = colors.textPrimary; // Primary text
            }

            return (
              <div
                key={stage.key}
                className="flex flex-col items-center gap-2 relative"
              >
                {/* Status Icon (Above Label) */}
                <div
                  className="flex items-center justify-center transition-all"
                  style={{
                    width: iconSize,
                    height: iconSize,
                  }}
                >
                  {isCompleted ? (
                    <CheckCircle2
                      style={{
                        width: iconSize,
                        height: iconSize,
                        color: iconColor,
                      }}
                    />
                  ) : isBlocked ? (
                    <AlertCircle
                      style={{
                        width: iconSize,
                        height: iconSize,
                        color: iconColor,
                      }}
                    />
                  ) : isCurrent ? (
                    <Clock
                      style={{
                        width: iconSize,
                        height: iconSize,
                        color: iconColor,
                      }}
                    />
                  ) : (
                    <div
                      className="rounded-full"
                      style={{
                        width: iconSize,
                        height: iconSize,
                        border: `2px solid ${iconColor}`,
                      }}
                    />
                  )}
                </div>

                {/* Stage Label (Below Icon) */}
                <div
                  style={{
                    color: labelColor,
                    fontSize: '10px',
                    fontWeight: '700',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {stage.label}
                </div>

                {/* Blocked Alert */}
                {isBlocked && application.blockedReason && (
                  <div
                    className="absolute top-full mt-4 px-3 py-2 rounded"
                    style={{
                      backgroundColor: colors.errorBg,
                      border: `1px solid ${colors.error}`,
                      maxWidth: '180px',
                    }}
                  >
                    <div
                      style={{
                        color: colors.error,
                        fontSize: '9px',
                        fontWeight: '600',
                        marginBottom: '4px',
                      }}
                    >
                      BLOQUEADO
                    </div>
                    <div
                      style={{
                        color: colors.textSecondary,
                        fontSize: '9px',
                        lineHeight: '1.4',
                      }}
                    >
                      {application.blockedReason}
                    </div>
                    <button
                      className="mt-2 px-2 py-1 rounded transition-all"
                      style={{
                        backgroundColor: colors.error,
                        color: '#FFFFFF',
                        fontSize: '8px',
                        fontWeight: '700',
                        width: '100%',
                      }}
                    >
                      SUBIR DE NUEVO
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT SECTION - Status Details */}
      <div
        style={{
          width: '280px',
          flexShrink: 0,
        }}
      >
        {/* Score */}
        {application.score && (
          <div className="mb-3">
            <div
              style={{
                color: colors.textTertiary,
                fontSize: '9px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '4px',
              }}
            >
              Tu Score
            </div>
            <div
              style={{
                color: colors.accent,
                fontSize: '20px',
                fontWeight: '700',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {application.score}/100
            </div>
          </div>
        )}

        {/* Last Comment */}
        {application.lastComment && (
          <div className="mb-4">
            <div
              style={{
                color: colors.textTertiary,
                fontSize: '9px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '4px',
              }}
            >
              Último Comentario
            </div>
            <div
              style={{
                color: colors.textSecondary,
                fontSize: '11px',
                lineHeight: '1.4',
              }}
            >
              {application.lastComment}
            </div>
          </div>
        )}

        {/* Action Button */}
        <button
          className="px-4 py-2 rounded transition-all"
          style={{
            backgroundColor: 'transparent',
            border: `1px solid ${colors.border}`,
            color: colors.textTertiary,
            fontSize: '10px',
            fontWeight: '600',
            letterSpacing: '0.3px',
            textTransform: 'uppercase',
          }}
          onClick={() => navigate(`/partner/proposal-workstation/${application.id}`)}
        >
          Ver Detalles de Mi Propuesta
        </button>
      </div>
    </div>
  );
}