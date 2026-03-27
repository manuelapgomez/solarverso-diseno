import { useState } from 'react';
import { Users, Calendar, Eye, Zap, Hammer, Settings } from 'lucide-react';
import { AdminSidebar } from '../components/AdminSidebar';
import { useNavigate } from 'react-router';
import { useTheme } from '../contexts/ThemeContext';

// ===== TYPES =====
interface Tender {
  id: string;
  code: string;
  title: string;
  description: string;
  category: 'electrico' | 'civil' | 'mecanico' | 'logistica';
  applicantCount: number;
  status: 'abierto' | 'cerrado' | 'en_pausa' | 'borrador';
  closingDate: string;
  daysRemaining: number;
}

// ===== MOCK DATA =====
const MOCK_ACTIVE_TENDERS: Tender[] = [
  {
    id: 'TND-001',
    code: 'SOL-2026-001',
    title: 'Servicio Maquinaria Amarilla - Adecuación de terreno',
    description: 'Servicio de maquinaria pesada para adecuación de terreno, obra civil y logística en proyecto solar de 50 hectáreas.',
    category: 'civil',
    applicantCount: 12,
    status: 'abierto',
    closingDate: '12 Feb 2026',
    daysRemaining: 2,
  },
  {
    id: 'TND-002',
    code: 'SOL-2026-002',
    title: 'Instalación Sistema de Montaje Solar - Valle del Cauca',
    description: 'Instalación completa de sistema de montaje y anclaje para paneles solares, incluye estructuras metálicas.',
    category: 'electrico',
    applicantCount: 8,
    status: 'abierto',
    closingDate: '15 Feb 2026',
    daysRemaining: 5,
  },
  {
    id: 'TND-003',
    code: 'SOL-2026-003',
    title: 'Suministro Equipos de Protección Personal Multi-proyecto',
    description: 'Suministro de equipos de protección personal certificados para obra civil y eléctrica en proyectos solares.',
    category: 'logistica',
    applicantCount: 15,
    status: 'abierto',
    closingDate: '18 Feb 2026',
    daysRemaining: 8,
  },
  {
    id: 'TND-004',
    code: 'SOL-2026-004',
    title: 'Obra Civil - Preparación Terreno Solar 50 Ha',
    description: 'Preparación integral de terreno incluyendo excavación, nivelación con GPS y compactación para mini granja solar.',
    category: 'civil',
    applicantCount: 6,
    status: 'abierto',
    closingDate: '20 Feb 2026',
    daysRemaining: 10,
  },
  {
    id: 'TND-005',
    code: 'SOL-2026-005',
    title: 'Mantenimiento Preventivo Sistema Mecánico - Planta Solar',
    description: 'Servicio de mantenimiento preventivo y correctivo para sistemas mecánicos de seguimiento solar y ventilación.',
    category: 'mecanico',
    applicantCount: 4,
    status: 'abierto',
    closingDate: '25 Feb 2026',
    daysRemaining: 15,
  },
];

const MOCK_HISTORICAL_TENDERS: Tender[] = [
  {
    id: 'TND-H001',
    code: 'SOL-2025-089',
    title: 'Instalación Eléctrica Proyecto Boyacá',
    description: 'Instalación eléctrica completa para proyecto solar en Boyacá incluyendo transformadores y cableado.',
    category: 'electrico',
    applicantCount: 18,
    status: 'cerrado',
    closingDate: '30 Dic 2025',
    daysRemaining: 0,
  },
  {
    id: 'TND-H002',
    code: 'SOL-2025-087',
    title: 'Transporte Logística Equipos Solares',
    description: 'Servicio de transporte especializado para equipos solares desde puerto hasta sitio de instalación.',
    category: 'logistica',
    applicantCount: 12,
    status: 'cerrado',
    closingDate: '28 Dic 2025',
    daysRemaining: 0,
  },
  {
    id: 'TND-H003',
    code: 'SOL-2026-DRAFT-01',
    title: 'Montaje Estructuras Metálicas - En Revisión',
    description: 'Borrador de pliego para montaje de estructuras metálicas pendiente de aprobación técnica.',
    category: 'civil',
    applicantCount: 0,
    status: 'borrador',
    closingDate: 'TBD',
    daysRemaining: 0,
  },
  {
    id: 'TND-H004',
    code: 'SOL-2025-092',
    title: 'Suministro Inversores Solares - Pausa Presupuestal',
    description: 'Proceso en pausa debido a ajustes presupuestales, se reactivará en Q2 2026.',
    category: 'electrico',
    applicantCount: 9,
    status: 'en_pausa',
    closingDate: 'Pausado',
    daysRemaining: 0,
  },
];

type HistoricalFilter = 'abiertos' | 'cerrados' | 'en_pausa' | 'borradores';

export default function AdminDashboardSimplified() {
  const navigate = useNavigate();
  const [historicalFilter, setHistoricalFilter] = useState<HistoricalFilter>('cerrados');
  const { theme, colors } = useTheme();

  const getCategoryBadge = (category: Tender['category']) => {
    const isLight = theme === 'light';
    
    const configs = {
      electrico: {
        icon: Zap,
        label: 'Eléctrico',
        bg: isLight ? '#FFF8E1' : '#1A1400',
        border: '#FFB800',
        text: isLight ? '#F57C00' : '#FFB800',
      },
      civil: {
        icon: Hammer,
        label: 'Civil',
        bg: isLight ? '#FFE5CC' : '#1A0F00',
        border: '#FF6B00',
        text: isLight ? '#E65100' : '#FF6B00',
      },
      mecanico: {
        icon: Settings,
        label: 'Mecánico',
        bg: isLight ? '#F5F5F5' : '#121212',
        border: isLight ? '#9E9E9E' : '#808080',
        text: isLight ? '#616161' : '#B0B0B0',
      },
      logistica: {
        icon: Users,
        label: 'Logística',
        bg: isLight ? '#E0F7FA' : '#001A1A',
        border: '#00C9C9',
        text: isLight ? '#00838F' : '#00C9C9',
      },
    };
    return configs[category];
  };

  const getStatusBadge = (status: Tender['status']) => {
    const configs = {
      abierto: { label: 'ABIERTO', color: '#00C853' },
      cerrado: { label: 'CERRADO', color: '#808080' },
      en_pausa: { label: 'EN PAUSA', color: '#FF9800' },
      borrador: { label: 'BORRADOR', color: '#1D99CC' },
    };
    return configs[status];
  };

  const getUrgencyColor = (days: number) => {
    if (days <= 3) return '#FF5252';
    if (days <= 7) return '#FF9800';
    return '#00C853';
  };

  const filteredHistorical = MOCK_HISTORICAL_TENDERS.filter((tender) => {
    if (historicalFilter === 'abiertos') return tender.status === 'abierto';
    if (historicalFilter === 'cerrados') return tender.status === 'cerrado';
    if (historicalFilter === 'en_pausa') return tender.status === 'en_pausa';
    if (historicalFilter === 'borradores') return tender.status === 'borrador';
    return true;
  });

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: colors.canvasBackground,
      }}
    >
      <AdminSidebar />

      <div
        className="flex-1 flex flex-col"
        style={{
          marginLeft: '240px',
        }}
      >
        {/* ===== MODULE A: ACTIVE TENDERS ===== */}
        <div className="flex-1">
          {/* Header */}
          <div
            className="px-8 py-5"
            style={{
              borderBottom: `1px solid ${colors.border}`,
            }}
          >
            <h1
              style={{
                color: colors.textPrimary,
                fontSize: '18px',
                fontWeight: '600',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Pliegos Activos en Ejecución
            </h1>
            <p
              style={{
                color: colors.textTertiary,
                fontSize: '11px',
                marginTop: '4px',
              }}
            >
              {MOCK_ACTIVE_TENDERS.length} pliegos abiertos esperando postulaciones
            </p>
          </div>

          {/* High-Density Data Grid */}
          <div>
            {/* Table Header */}
            <div
              className="grid px-8 py-3"
              style={{
                gridTemplateColumns: '160px 1fr 240px 140px 140px 160px',
                backgroundColor: colors.panelBackground,
                borderBottom: `1px solid ${colors.border}`,
              }}
            >
              <div
                style={{
                  color: colors.textTertiary,
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                ID Pliego
              </div>
              <div
                style={{
                  color: colors.textTertiary,
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Nombre
              </div>
              <div
                style={{
                  color: colors.textTertiary,
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Descripción del Pliego
              </div>
              <div
                style={{
                  color: colors.textTertiary,
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Categoría
              </div>
              <div
                style={{
                  color: colors.textTertiary,
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Fecha Cierre
              </div>
              <div
                style={{
                  color: colors.textTertiary,
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                  textAlign: 'center',
                }}
              >
                Postulados
              </div>
            </div>

            {/* Table Rows */}
            {MOCK_ACTIVE_TENDERS.map((tender, index) => {
              const categoryConfig = getCategoryBadge(tender.category);
              const urgencyColor = getUrgencyColor(tender.daysRemaining);
              const CategoryIcon = categoryConfig.icon;
              
              const rowBg = theme === 'light'
                ? (index % 2 === 0 ? '#FFFFFF' : '#F8F9FA')
                : (index % 2 === 0 ? '#050505' : '#0A0A0A');
              
              const hoverBg = theme === 'light' ? '#F0F2F4' : '#111111';

              return (
                <div
                  key={tender.id}
                  className="grid px-8 transition-all cursor-pointer"
                  style={{
                    gridTemplateColumns: '160px 1fr 240px 140px 140px 160px',
                    height: '48px',
                    backgroundColor: rowBg,
                    borderBottom: `1px solid ${colors.border}`,
                    alignItems: 'center',
                  }}
                  onClick={() => navigate(`/admin/pliegos/${tender.id}`)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = hoverBg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = rowBg;
                  }}
                >
                  {/* ID Pliego */}
                  <div
                    style={{
                      color: colors.accent,
                      fontSize: '11px',
                      fontWeight: '600',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {tender.code}
                  </div>

                  {/* Nombre */}
                  <div
                    style={{
                      color: colors.textPrimary,
                      fontSize: '12px',
                      fontWeight: '600',
                      fontFamily: 'Inter, sans-serif',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      paddingRight: '12px',
                    }}
                  >
                    {tender.title}
                  </div>

                  {/* Descripción */}
                  <div
                    style={{
                      color: colors.textSecondary,
                      fontSize: '10px',
                      lineHeight: '1.4',
                      fontFamily: 'Inter, sans-serif',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      paddingRight: '12px',
                    }}
                  >
                    {tender.description}
                  </div>

                  {/* Categoría Badge */}
                  <div>
                    <div
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded"
                      style={{
                        backgroundColor: categoryConfig.bg,
                        border: `1px solid ${categoryConfig.border}`,
                      }}
                    >
                      <CategoryIcon
                        style={{
                          width: '11px',
                          height: '11px',
                          color: categoryConfig.text,
                        }}
                      />
                      <span
                        style={{
                          color: categoryConfig.text,
                          fontSize: '10px',
                          fontWeight: '700',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {categoryConfig.label}
                      </span>
                    </div>
                  </div>

                  {/* Fecha Cierre */}
                  <div className="flex items-center gap-2">
                    <Calendar
                      style={{
                        width: '11px',
                        height: '11px',
                        color: colors.textDisabled,
                      }}
                    />
                    <span
                      style={{
                        color: urgencyColor,
                        fontSize: '11px',
                        fontWeight: '700',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      {tender.closingDate}
                    </span>
                  </div>

                  {/* Postulados */}
                  <div className="flex items-center justify-center gap-2">
                    <Users
                      style={{
                        width: '12px',
                        height: '12px',
                        color: colors.textTertiary,
                      }}
                    />
                    <span
                      style={{
                        color: colors.textPrimary,
                        fontSize: '14px',
                        fontWeight: '700',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      {tender.applicantCount}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            backgroundColor: colors.border,
            margin: '40px 0',
          }}
        />

        {/* ===== MODULE B: HISTÓRICO DE PLIEGOS ===== */}
        <div className="flex-1 pb-12">
          {/* Header */}
          <div className="px-8 pb-5">
            <h2
              style={{
                color: colors.textPrimary,
                fontSize: '18px',
                fontWeight: '600',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Histórico y Archivo de Pliegos
            </h2>
          </div>

          {/* Segmented Control Filters */}
          <div
            className="px-8 pb-6 flex gap-1"
            style={{
              borderBottom: `1px solid ${colors.border}`,
            }}
          >
            {(['abiertos', 'cerrados', 'en_pausa', 'borradores'] as HistoricalFilter[]).map((filter) => {
              const isActive = historicalFilter === filter;
              const inactiveColor = theme === 'light' ? '#94A3B8' : '#555555';
              const hoverColor = theme === 'light' ? '#64748B' : '#999999';
              
              return (
                <button
                  key={filter}
                  onClick={() => setHistoricalFilter(filter)}
                  className="px-5 py-2.5 transition-all"
                  style={{
                    color: isActive ? colors.textPrimary : inactiveColor,
                    fontSize: '11px',
                    fontWeight: '700',
                    fontFamily: 'Inter, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: isActive ? `2px solid ${colors.accent}` : '2px solid transparent',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = hoverColor;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = inactiveColor;
                    }
                  }}
                >
                  {filter === 'abiertos' && 'Abiertos'}
                  {filter === 'cerrados' && 'Cerrados'}
                  {filter === 'en_pausa' && 'En Pausa'}
                  {filter === 'borradores' && 'Borradores'}
                </button>
              );
            })}
          </div>

          {/* Historical Data Grid */}
          <div>
            {/* Table Header */}
            <div
              className="grid px-8 py-3"
              style={{
                gridTemplateColumns: '160px 1fr 240px 140px 140px 140px 160px',
                backgroundColor: colors.panelBackground,
                borderBottom: `1px solid ${colors.border}`,
              }}
            >
              <div
                style={{
                  color: colors.textDisabled,
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                ID Pliego
              </div>
              <div
                style={{
                  color: colors.textDisabled,
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Nombre
              </div>
              <div
                style={{
                  color: colors.textDisabled,
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Descripción
              </div>
              <div
                style={{
                  color: colors.textDisabled,
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Categoría
              </div>
              <div
                style={{
                  color: colors.textDisabled,
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Estado
              </div>
              <div
                style={{
                  color: colors.textDisabled,
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Fecha Cierre
              </div>
              <div
                style={{
                  color: colors.textDisabled,
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                  textAlign: 'center',
                }}
              >
                Acciones
              </div>
            </div>

            {/* Table Rows */}
            {filteredHistorical.map((tender, index) => {
              const categoryConfig = getCategoryBadge(tender.category);
              const statusConfig = getStatusBadge(tender.status);
              const CategoryIcon = categoryConfig.icon;
              
              const rowBg = theme === 'light'
                ? (index % 2 === 0 ? '#FFFFFF' : '#F8F9FA')
                : (index % 2 === 0 ? '#050505' : '#0A0A0A');
              
              const hoverBg = theme === 'light' ? '#F0F2F4' : '#0D0D0D';
              const dimmedTextColor = theme === 'light' ? '#94A3B8' : '#808080';
              const dimmedSecondaryColor = theme === 'light' ? '#CBD5E0' : '#606060';

              return (
                <div
                  key={tender.id}
                  className="grid px-8 transition-all cursor-pointer"
                  style={{
                    gridTemplateColumns: '160px 1fr 240px 140px 140px 140px 160px',
                    height: '48px',
                    backgroundColor: rowBg,
                    borderBottom: `1px solid ${colors.border}`,
                    alignItems: 'center',
                    opacity: 0.85,
                  }}
                  onClick={() => navigate(`/admin/pliegos/${tender.id}`)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = hoverBg;
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = rowBg;
                    e.currentTarget.style.opacity = '0.85';
                  }}
                >
                  {/* ID Pliego */}
                  <div
                    style={{
                      color: dimmedTextColor,
                      fontSize: '11px',
                      fontWeight: '600',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {tender.code}
                  </div>

                  {/* Nombre */}
                  <div
                    style={{
                      color: colors.textSecondary,
                      fontSize: '12px',
                      fontWeight: '600',
                      fontFamily: 'Inter, sans-serif',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      paddingRight: '12px',
                    }}
                  >
                    {tender.title}
                  </div>

                  {/* Descripción */}
                  <div
                    style={{
                      color: dimmedSecondaryColor,
                      fontSize: '10px',
                      lineHeight: '1.4',
                      fontFamily: 'Inter, sans-serif',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      paddingRight: '12px',
                    }}
                  >
                    {tender.description}
                  </div>

                  {/* Categoría */}
                  <div>
                    <div
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded"
                      style={{
                        backgroundColor: categoryConfig.bg,
                        border: `1px solid ${categoryConfig.border}`,
                        opacity: 0.7,
                      }}
                    >
                      <CategoryIcon
                        style={{
                          width: '11px',
                          height: '11px',
                          color: categoryConfig.text,
                        }}
                      />
                      <span
                        style={{
                          color: categoryConfig.text,
                          fontSize: '10px',
                          fontWeight: '700',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {categoryConfig.label}
                      </span>
                    </div>
                  </div>

                  {/* Estado */}
                  <div>
                    <div
                      className="inline-flex items-center px-2 py-1 rounded"
                      style={{
                        backgroundColor: theme === 'light' ? '#F8F9FA' : 'rgba(255, 255, 255, 0.03)',
                        border: `1px solid ${statusConfig.color}`,
                      }}
                    >
                      <span
                        style={{
                          color: statusConfig.color,
                          fontSize: '9px',
                          fontWeight: '700',
                          fontFamily: 'JetBrains Mono, monospace',
                          letterSpacing: '0.3px',
                        }}
                      >
                        {statusConfig.label}
                      </span>
                    </div>
                  </div>

                  {/* Fecha Cierre */}
                  <div
                    style={{
                      color: dimmedSecondaryColor,
                      fontSize: '11px',
                      fontWeight: '600',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {tender.closingDate}
                  </div>

                  {/* Acciones */}
                  <div className="flex items-center justify-center">
                    <button
                      className="px-3 py-1.5 rounded flex items-center gap-1.5 transition-all"
                      style={{
                        backgroundColor: 'transparent',
                        border: `1px solid ${colors.accent}`,
                        color: colors.accent,
                        fontSize: '10px',
                        fontWeight: '600',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/admin/pliegos/${tender.id}`);
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = colors.accent;
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = colors.accent;
                      }}
                    >
                      <Eye style={{ width: '11px', height: '11px' }} />
                      Ver
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}