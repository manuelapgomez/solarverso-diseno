import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Plus, ChevronDown, ChevronUp, Award, Clock } from 'lucide-react';
import { AdminSidebar } from '../components/AdminSidebar';

// ===== NESTED DATA STRUCTURE =====
interface Evaluation {
  id: string;
  partnerName: string;
  criteriaName: string;
  weight: number; // Percentage weight
  assignedRole: string;
  status: 'pending' | 'in_progress' | 'completed';
  score?: number;
}

interface TenderWithEvaluations {
  id: string;
  mgsId: string;
  name: string;
  location: string;
  closingDate: string;
  hoursRemaining: number;
  totalApplicants: number;
  evaluations: Evaluation[];
  completedCriteria: number;
  totalCriteria: number;
  averageScore: number;
}

const MOCK_TENDERS: TenderWithEvaluations[] = [
  {
    id: 'TND-001',
    mgsId: 'MGS-BOY-04',
    name: 'Obra Civil Boyacá IV',
    location: 'Paipa, Boyacá',
    closingDate: '15 Dic 2026',
    hoursRemaining: 48,
    totalApplicants: 8,
    completedCriteria: 3,
    totalCriteria: 5,
    averageScore: 72,
    evaluations: [
      {
        id: 'EVAL-001',
        partnerName: 'Construcciones SAS',
        criteriaName: 'Propuesta Técnica',
        weight: 80,
        assignedRole: 'Ing. Proyectos',
        status: 'pending',
      },
      {
        id: 'EVAL-002',
        partnerName: 'Construcciones SAS',
        criteriaName: 'Experiencia Previa',
        weight: 50,
        assignedRole: 'Analista SST',
        status: 'completed',
        score: 85,
      },
      {
        id: 'EVAL-003',
        partnerName: 'Ingeniería del Norte',
        criteriaName: 'Propuesta Económica',
        weight: 70,
        assignedRole: 'Dir. Financiero',
        status: 'in_progress',
      },
      {
        id: 'EVAL-004',
        partnerName: 'Ingeniería del Norte',
        criteriaName: 'Certificados SST',
        weight: 60,
        assignedRole: 'Analista SST',
        status: 'completed',
        score: 92,
      },
      {
        id: 'EVAL-005',
        partnerName: 'Obras Express',
        criteriaName: 'Propuesta Técnica',
        weight: 80,
        assignedRole: 'Ing. Proyectos',
        status: 'pending',
      },
    ],
  },
  {
    id: 'TND-002',
    mgsId: 'MGS-MET-03',
    name: 'Montaje Eléctrico Meta III',
    location: 'Puerto López, Meta',
    closingDate: '20 Dic 2026',
    hoursRemaining: 168,
    totalApplicants: 12,
    completedCriteria: 8,
    totalCriteria: 10,
    averageScore: 78,
    evaluations: [
      {
        id: 'EVAL-006',
        partnerName: 'Eléctricos LTDA',
        criteriaName: 'Capacidad Técnica',
        weight: 85,
        assignedRole: 'Ing. Eléctrico',
        status: 'pending',
      },
      {
        id: 'EVAL-007',
        partnerName: 'Eléctricos LTDA',
        criteriaName: 'Plan de Calidad',
        weight: 65,
        assignedRole: 'Ing. Proyectos',
        status: 'completed',
        score: 88,
      },
      {
        id: 'EVAL-008',
        partnerName: 'Solar Build Co.',
        criteriaName: 'Experiencia Solar',
        weight: 90,
        assignedRole: 'Analista SST',
        status: 'in_progress',
      },
    ],
  },
  {
    id: 'TND-003',
    mgsId: 'MGS-CUN-02',
    name: 'Obra Civil Cundinamarca II',
    location: 'Zipaquirá, Cundinamarca',
    closingDate: '18 Dic 2026',
    hoursRemaining: 120,
    totalApplicants: 6,
    completedCriteria: 2,
    totalCriteria: 6,
    averageScore: 65,
    evaluations: [
      {
        id: 'EVAL-009',
        partnerName: 'Constructora del Norte',
        criteriaName: 'Certificados SST',
        weight: 60,
        assignedRole: 'Analista SST',
        status: 'pending',
      },
      {
        id: 'EVAL-010',
        partnerName: 'Constructora del Norte',
        criteriaName: 'Estados Financieros',
        weight: 55,
        assignedRole: 'Dir. Financiero',
        status: 'completed',
        score: 75,
      },
    ],
  },
  {
    id: 'TND-004',
    mgsId: 'MGS-ANT-05',
    name: 'Instalación Paneles Antioquia V',
    location: 'Medellín, Antioquia',
    closingDate: '22 Dic 2026',
    hoursRemaining: 216,
    totalApplicants: 15,
    completedCriteria: 12,
    totalCriteria: 15,
    averageScore: 82,
    evaluations: [
      {
        id: 'EVAL-011',
        partnerName: 'Montajes Solares SAS',
        criteriaName: 'Cronograma de Obra',
        weight: 70,
        assignedRole: 'Ing. Proyectos',
        status: 'pending',
      },
      {
        id: 'EVAL-012',
        partnerName: 'Montajes Solares SAS',
        criteriaName: 'Certificaciones ISO',
        weight: 50,
        assignedRole: 'Analista SST',
        status: 'completed',
        score: 95,
      },
    ],
  },
];

export default function AdminDashboardRefactored() {
  const [expandedTenders, setExpandedTenders] = useState<Set<string>>(new Set(['TND-001']));
  const navigate = useNavigate();

  const toggleTender = (tenderId: string) => {
    const newExpanded = new Set(expandedTenders);
    if (newExpanded.has(tenderId)) {
      newExpanded.delete(tenderId);
    } else {
      newExpanded.add(tenderId);
    }
    setExpandedTenders(newExpanded);
  };

  // Calculate global KPIs
  const totalActiveTenders = MOCK_TENDERS.length;
  const totalPendingEvaluations = MOCK_TENDERS.reduce(
    (sum, tender) => sum + tender.evaluations.filter((e) => e.status === 'pending').length,
    0
  );
  const globalAverageScore = Math.round(
    MOCK_TENDERS.reduce((sum, tender) => sum + tender.averageScore, 0) / MOCK_TENDERS.length
  );

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: '#050505', // Absolute Black
      }}
    >
      <AdminSidebar />

      <div
        className="flex-1 flex flex-col"
        style={{
          marginLeft: '220px',
        }}
      >
        {/* TOP ROW STATS - High Contrast KPIs */}
        <div
          className="px-8 py-6 flex items-center justify-between"
          style={{
            borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div className="flex items-center gap-6">
            <KPIBlock label="Pliegos Vivos" value={totalActiveTenders} color="#1D99CC" />
            <KPIBlock label="Evaluaciones en Cola" value={totalPendingEvaluations} color="#FF9800" />
            <KPIBlock label="Promedio SST" value={`${globalAverageScore}%`} color="#00C853" />
          </div>

          {/* Primary Action - Create New Tender */}
          <button
            onClick={() => navigate('/admin/crear-pliegos')}
            className="flex items-center gap-2 px-5 py-3 rounded transition-all"
            style={{
              backgroundColor: '#1D99CC',
              border: 'none',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: '600',
              boxShadow: '0 0 20px rgba(29, 153, 204, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1BA3D8';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1D99CC';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Plus style={{ width: '16px', height: '16px' }} />
            Crear Nuevo Pliego
          </button>
        </div>

        {/* CONTEXTUAL GRID - Tender Command Cards */}
        <div className="flex-1 overflow-auto px-8 py-6">
          <div className="space-y-4">
            {MOCK_TENDERS.map((tender) => (
              <TenderCommandCard
                key={tender.id}
                tender={tender}
                isExpanded={expandedTenders.has(tender.id)}
                onToggle={() => toggleTender(tender.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== KPI BLOCK (Top Stats) =====
interface KPIBlockProps {
  label: string;
  value: string | number;
  color: string;
}

function KPIBlock({ label, value, color }: KPIBlockProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        style={{
          width: '4px',
          height: '48px',
          backgroundColor: color,
          borderRadius: '2px',
        }}
      />
      <div>
        <div
          style={{
            color: '#606060',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '4px',
          }}
        >
          {label}
        </div>
        <div
          style={{
            color: '#FFFFFF',
            fontSize: '28px',
            fontWeight: '700',
            fontFamily: 'JetBrains Mono, monospace',
            lineHeight: '1',
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}

// ===== TENDER COMMAND CARD (Accordion Container) =====
interface TenderCommandCardProps {
  tender: TenderWithEvaluations;
  isExpanded: boolean;
  onToggle: () => void;
}

function TenderCommandCard({ tender, isExpanded, onToggle }: TenderCommandCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate time urgency color
  const getUrgencyColor = () => {
    if (tender.hoursRemaining <= 48) return '#FF5252';
    if (tender.hoursRemaining <= 120) return '#FF9800';
    return '#00C853';
  };

  const getUrgencyBg = () => {
    if (tender.hoursRemaining <= 48) return 'rgba(255, 82, 82, 0.12)';
    if (tender.hoursRemaining <= 120) return 'rgba(255, 152, 0, 0.12)';
    return 'rgba(0, 200, 83, 0.12)';
  };

  const completionPercentage = Math.round((tender.completedCriteria / tender.totalCriteria) * 100);

  return (
    <div
      className="rounded overflow-hidden transition-all"
      style={{
        backgroundColor: '#121212', // Panel Dark
        border: isHovered ? '0.5px solid #1D99CC' : '0.5px solid rgba(255, 255, 255, 0.05)',
        boxShadow: isHovered ? '0 0 24px rgba(29, 153, 204, 0.15)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* HEADER - Tender Info */}
      <div
        className="px-6 py-4 cursor-pointer"
        style={{
          borderBottom: isExpanded ? '0.5px solid rgba(255, 255, 255, 0.05)' : 'none',
        }}
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          {/* Left: MGS ID + Name */}
          <div className="flex items-center gap-4">
            <button
              className="flex items-center justify-center rounded transition-all"
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: isExpanded ? '#1D99CC' : '#0A0A0A',
                border: '0.5px solid rgba(255, 255, 255, 0.08)',
                color: isExpanded ? '#FFFFFF' : '#808080',
              }}
            >
              {isExpanded ? (
                <ChevronUp style={{ width: '16px', height: '16px' }} />
              ) : (
                <ChevronDown style={{ width: '16px', height: '16px' }} />
              )}
            </button>

            <div>
              <div
                className="inline-block px-2 py-1 rounded mb-2"
                style={{
                  backgroundColor: 'rgba(29, 153, 204, 0.15)',
                  border: '0.5px solid #1D99CC',
                }}
              >
                <span
                  style={{
                    color: '#1D99CC',
                    fontSize: '10px',
                    fontWeight: '700',
                    fontFamily: 'JetBrains Mono, monospace',
                    letterSpacing: '0.5px',
                  }}
                >
                  {tender.mgsId}
                </span>
              </div>
              <div
                style={{
                  color: '#E0E0E0',
                  fontSize: '16px',
                  fontWeight: '600',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {tender.name}
              </div>
              <div
                style={{
                  color: '#606060',
                  fontSize: '11px',
                  marginTop: '2px',
                }}
              >
                {tender.location} • {tender.totalApplicants} aplicantes
              </div>
            </div>
          </div>

          {/* Right: Status Badge + Progress */}
          <div className="flex items-center gap-4">
            <div
              className="px-3 py-2 rounded"
              style={{
                backgroundColor: getUrgencyBg(),
                border: `0.5px solid ${getUrgencyColor()}`,
              }}
            >
              <div className="flex items-center gap-2">
                <Clock style={{ width: '14px', height: '14px', color: getUrgencyColor() }} />
                <span
                  style={{
                    color: getUrgencyColor(),
                    fontSize: '11px',
                    fontWeight: '700',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  Cierra en {tender.hoursRemaining}h
                </span>
              </div>
            </div>

            <div style={{ width: '200px' }}>
              <div className="flex items-center justify-between mb-2">
                <span
                  style={{
                    color: '#808080',
                    fontSize: '10px',
                  }}
                >
                  Progreso Evaluación
                </span>
                <span
                  style={{
                    color: '#B0B0B0',
                    fontSize: '11px',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: '600',
                  }}
                >
                  {completionPercentage}%
                </span>
              </div>
              <div
                className="w-full rounded-full overflow-hidden"
                style={{
                  height: '6px',
                  backgroundColor: '#0A0A0A',
                }}
              >
                <div
                  style={{
                    width: `${completionPercentage}%`,
                    height: '100%',
                    backgroundColor: completionPercentage >= 80 ? '#00C853' : completionPercentage >= 50 ? '#FF9800' : '#FF5252',
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BODY - The Evaluation Pipeline (Nested Table) */}
      {isExpanded && (
        <div
          style={{
            backgroundColor: '#0A0A0A', // Nested dark area
          }}
        >
          {/* Table Header */}
          <div
            className="grid px-6 py-3"
            style={{
              gridTemplateColumns: '2fr 2fr 1.5fr 1fr',
              borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div
              style={{
                color: '#606060',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontWeight: '600',
              }}
            >
              Partner Name
            </div>
            <div
              style={{
                color: '#606060',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontWeight: '600',
              }}
            >
              Task
            </div>
            <div
              style={{
                color: '#606060',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontWeight: '600',
              }}
            >
              Assigned Role
            </div>
            <div
              style={{
                color: '#606060',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontWeight: '600',
                textAlign: 'right',
              }}
            >
              Action
            </div>
          </div>

          {/* Evaluation Rows - Zebra Striped */}
          {tender.evaluations.map((evaluation, index) => (
            <EvaluationRow
              key={evaluation.id}
              evaluation={evaluation}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      )}

      {/* FOOTER - Quick Stats */}
      {isExpanded && (
        <div
          className="px-6 py-3 flex items-center justify-between"
          style={{
            backgroundColor: '#121212',
            borderTop: '0.5px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div
            style={{
              color: '#808080',
              fontSize: '11px',
            }}
          >
            {tender.completedCriteria}/{tender.totalCriteria} Criterios calificados
          </div>
          <div className="flex items-center gap-2">
            <Award style={{ width: '14px', height: '14px', color: '#1D99CC' }} />
            <span
              style={{
                color: '#B0B0B0',
                fontSize: '11px',
              }}
            >
              Score Promedio:
            </span>
            <span
              style={{
                color: '#1D99CC',
                fontSize: '13px',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: '700',
              }}
            >
              {tender.averageScore}/100
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// ===== EVALUATION ROW (Nested Item with Zebra Stripes) =====
interface EvaluationRowProps {
  evaluation: Evaluation;
  isEven: boolean;
}

function EvaluationRow({ evaluation, isEven }: EvaluationRowProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusColor = () => {
    switch (evaluation.status) {
      case 'completed':
        return '#00C853';
      case 'in_progress':
        return '#FF9800';
      case 'pending':
        return '#606060';
    }
  };

  return (
    <div
      className="grid px-6 py-3 transition-all cursor-pointer"
      style={{
        gridTemplateColumns: '2fr 2fr 1.5fr 1fr',
        backgroundColor: isHovered
          ? '#121212'
          : isEven
          ? '#0A0A0A'
          : 'rgba(0, 0, 0, 0.3)', // Zebra stripes
        borderBottom: '0.5px solid rgba(255, 255, 255, 0.03)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Partner Name */}
      <div className="flex items-center gap-2">
        <div
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor: getStatusColor(),
          }}
        />
        <span
          style={{
            color: '#D0D0D0',
            fontSize: '12px',
            fontWeight: '500',
          }}
        >
          {evaluation.partnerName}
        </span>
      </div>

      {/* Task (Criteria + Weight) */}
      <div>
        <span
          style={{
            color: '#B0B0B0',
            fontSize: '12px',
          }}
        >
          {evaluation.criteriaName}
        </span>
        <span
          style={{
            color: '#606060',
            fontSize: '11px',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: '600',
            marginLeft: '8px',
          }}
        >
          Weight {evaluation.weight}%
        </span>
      </div>

      {/* Assigned Role */}
      <div>
        <span
          className="px-2 py-1 rounded"
          style={{
            backgroundColor: '#1A1A1A',
            color: '#808080',
            fontSize: '10px',
            fontWeight: '600',
          }}
        >
          {evaluation.assignedRole}
        </span>
      </div>

      {/* Action Button */}
      <div className="flex justify-end">
        {evaluation.status === 'completed' ? (
          <div className="flex items-center gap-2">
            <Award style={{ width: '12px', height: '12px', color: '#00C853' }} />
            <span
              style={{
                color: '#00C853',
                fontSize: '13px',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: '700',
              }}
            >
              {evaluation.score}
            </span>
          </div>
        ) : (
          <button
            className="px-3 py-1.5 rounded transition-all"
            style={{
              backgroundColor: isHovered ? '#1D99CC' : 'transparent',
              border: '0.5px solid #1D99CC',
              color: isHovered ? '#FFFFFF' : '#1D99CC',
              fontSize: '10px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            CALIFICAR
          </button>
        )}
      </div>
    </div>
  );
}
