import { useState } from 'react';
import { Plus, ChevronDown, ChevronRight, Circle, Award } from 'lucide-react';
import { AdminSidebar } from '../components/AdminSidebar';

// ===== TYPES =====
interface TeamMember {
  id: string;
  name: string;
  badge: 'SST' | 'Ing. Proyectos' | 'Legal' | 'Financiero';
  badgeColor: string;
}

interface Evaluation {
  id: string;
  partnerName: string;
  documentItem: string;
  weight: number; // Percentage
  assignedTeam: TeamMember['badge'];
  status: 'pending' | 'in_progress' | 'completed';
  score?: number;
}

interface Tender {
  id: string;
  mgsId: string;
  name: string;
  location: string;
  segment: string;
  applicantCount: number;
  hoursRemaining: number;
  evaluations: Evaluation[];
}

// ===== MOCK DATA =====
const MOCK_TENDERS: Tender[] = [
  {
    id: 'TND-001',
    mgsId: 'MGS-BOY-04',
    name: 'Obra Civil Boyacá',
    location: 'Paipa, Boyacá',
    segment: 'Civiles',
    applicantCount: 14,
    hoursRemaining: 48,
    evaluations: [
      {
        id: 'EVAL-001',
        partnerName: 'Inversiones Solares SAS',
        documentItem: 'Propuesta Técnica',
        weight: 80,
        assignedTeam: 'Ing. Proyectos',
        status: 'pending',
      },
      {
        id: 'EVAL-002',
        partnerName: 'Inversiones Solares SAS',
        documentItem: 'Certificados SST',
        weight: 60,
        assignedTeam: 'SST',
        status: 'completed',
        score: 92,
      },
      {
        id: 'EVAL-003',
        partnerName: 'Construcciones del Norte',
        documentItem: 'Estados Financieros',
        weight: 70,
        assignedTeam: 'Financiero',
        status: 'in_progress',
      },
      {
        id: 'EVAL-004',
        partnerName: 'Construcciones del Norte',
        documentItem: 'Propuesta Técnica',
        weight: 80,
        assignedTeam: 'Ing. Proyectos',
        status: 'pending',
      },
      {
        id: 'EVAL-005',
        partnerName: 'Obras Express LTDA',
        documentItem: 'Certificados SST',
        weight: 60,
        assignedTeam: 'SST',
        status: 'completed',
        score: 88,
      },
    ],
  },
  {
    id: 'TND-002',
    mgsId: 'MGS-MET-03',
    name: 'Montaje Eléctrico Meta III',
    location: 'Puerto López, Meta',
    segment: 'Eléctricos',
    applicantCount: 8,
    hoursRemaining: 120,
    evaluations: [
      {
        id: 'EVAL-006',
        partnerName: 'Eléctricos Profesionales SAS',
        documentItem: 'Propuesta Técnica',
        weight: 85,
        assignedTeam: 'Ing. Proyectos',
        status: 'in_progress',
      },
      {
        id: 'EVAL-007',
        partnerName: 'Eléctricos Profesionales SAS',
        documentItem: 'Certificaciones ISO',
        weight: 65,
        assignedTeam: 'SST',
        status: 'completed',
        score: 95,
      },
      {
        id: 'EVAL-008',
        partnerName: 'Solar Build Co.',
        documentItem: 'Experiencia Previa',
        weight: 90,
        assignedTeam: 'Legal',
        status: 'pending',
      },
    ],
  },
  {
    id: 'TND-003',
    mgsId: 'MGS-CUN-02',
    name: 'Obra Civil Cundinamarca II',
    location: 'Zipaquirá, Cundinamarca',
    segment: 'Civiles',
    applicantCount: 6,
    hoursRemaining: 72,
    evaluations: [
      {
        id: 'EVAL-009',
        partnerName: 'Constructora del Sur',
        documentItem: 'Certificados SST',
        weight: 60,
        assignedTeam: 'SST',
        status: 'pending',
      },
      {
        id: 'EVAL-010',
        partnerName: 'Constructora del Sur',
        documentItem: 'Plan de Calidad',
        weight: 75,
        assignedTeam: 'Ing. Proyectos',
        status: 'completed',
        score: 78,
      },
    ],
  },
  {
    id: 'TND-004',
    mgsId: 'MGS-ANT-05',
    name: 'Instalación Paneles Antioquia V',
    location: 'Medellín, Antioquia',
    segment: 'Eléctricos',
    applicantCount: 15,
    hoursRemaining: 168,
    evaluations: [
      {
        id: 'EVAL-011',
        partnerName: 'Montajes Solares SAS',
        documentItem: 'Cronograma de Obra',
        weight: 70,
        assignedTeam: 'Ing. Proyectos',
        status: 'in_progress',
      },
      {
        id: 'EVAL-012',
        partnerName: 'Montajes Solares SAS',
        documentItem: 'Certificaciones ISO',
        weight: 50,
        assignedTeam: 'SST',
        status: 'completed',
        score: 91,
      },
    ],
  },
];

export default function AdminMasterDashboard() {
  const [expandedTenders, setExpandedTenders] = useState<Set<string>>(
    new Set(['TND-001', 'TND-002']) // First two expanded by default
  );

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
  const globalCompliance = 86;

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
        {/* TOP COMMAND BAR */}
        <div
          className="px-8 py-5"
          style={{
            borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Title Row */}
          <div className="flex items-center justify-between mb-5">
            <div
              style={{
                color: '#1D99CC',
                fontSize: '13px',
                fontWeight: '700',
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              ADMIN COMMAND CENTER // PIPELINE
            </div>

            {/* Primary Action */}
            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded transition-all"
              style={{
                backgroundColor: '#1D99CC',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.5px',
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
              <Plus style={{ width: '14px', height: '14px' }} />
              CREAR NUEVO PLIEGO
            </button>
          </div>

          {/* KPI Row */}
          <div className="flex items-center gap-8">
            <KPICell label="Pliegos Vivos" value={totalActiveTenders} color="#1D99CC" />
            <KPICell label="Evaluaciones Pendientes" value={totalPendingEvaluations} color="#FF9800" />
            <KPICell label="Global Compliance" value={`${globalCompliance}%`} color="#00C853" />
          </div>
        </div>

        {/* THE NESTED DATA GRID */}
        <div className="flex-1 overflow-auto">
          {/* Table Header */}
          <div
            className="grid px-8 py-3 sticky top-0 z-10"
            style={{
              gridTemplateColumns: '3fr 2fr 1fr 120px',
              backgroundColor: '#0A0A0A',
              borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div
              style={{
                color: '#606060',
                fontSize: '9px',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              ID / OBJETO
            </div>
            <div
              style={{
                color: '#606060',
                fontSize: '9px',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              UBICACIÓN / SEGMENTO
            </div>
            <div
              style={{
                color: '#606060',
                fontSize: '9px',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              POSTULANTES
            </div>
            <div
              style={{
                color: '#606060',
                fontSize: '9px',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontFamily: 'JetBrains Mono, monospace',
                textAlign: 'right',
              }}
            >
              ESTADO / CIERRE
            </div>
          </div>

          {/* Tender Rows (Parent + Nested Children) */}
          {MOCK_TENDERS.map((tender) => (
            <TenderRow
              key={tender.id}
              tender={tender}
              isExpanded={expandedTenders.has(tender.id)}
              onToggle={() => toggleTender(tender.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== KPI CELL =====
interface KPICellProps {
  label: string;
  value: string | number;
  color: string;
}

function KPICell({ label, value, color }: KPICellProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        style={{
          width: '3px',
          height: '32px',
          backgroundColor: color,
          borderRadius: '2px',
        }}
      />
      <div>
        <div
          style={{
            color: '#606060',
            fontSize: '9px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontFamily: 'JetBrains Mono, monospace',
            marginBottom: '2px',
          }}
        >
          {label}
        </div>
        <div
          style={{
            color: '#FFFFFF',
            fontSize: '20px',
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

// ===== TENDER ROW (Parent Container) =====
interface TenderRowProps {
  tender: Tender;
  isExpanded: boolean;
  onToggle: () => void;
}

function TenderRow({ tender, isExpanded, onToggle }: TenderRowProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getTimeColor = () => {
    if (tender.hoursRemaining <= 48) return '#FF5252';
    if (tender.hoursRemaining <= 120) return '#FF9800';
    return '#00C853';
  };

  const timeProgress = Math.max(0, Math.min(100, (tender.hoursRemaining / 168) * 100));

  return (
    <div
      style={{
        borderBottom: '0.5px solid rgba(255, 255, 255, 0.03)',
      }}
    >
      {/* PARENT ROW - The Tender */}
      <div
        className="grid px-8 cursor-pointer transition-all"
        style={{
          gridTemplateColumns: '3fr 2fr 1fr 120px',
          height: '34px', // Ultra-slim
          alignItems: 'center',
          backgroundColor: isHovered ? '#1A1A1A' : '#121212',
        }}
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Column 1: MGS-ID + Name */}
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center transition-all"
            style={{
              width: '16px',
              height: '16px',
              color: isExpanded ? '#1D99CC' : '#606060',
            }}
          >
            {isExpanded ? (
              <ChevronDown style={{ width: '14px', height: '14px' }} />
            ) : (
              <ChevronRight style={{ width: '14px', height: '14px' }} />
            )}
          </div>

          <div
            className="px-2 py-0.5 rounded"
            style={{
              backgroundColor: 'rgba(29, 153, 204, 0.15)',
              border: '0.5px solid #1D99CC',
            }}
          >
            <span
              style={{
                color: '#1D99CC',
                fontSize: '9px',
                fontWeight: '700',
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: '0.5px',
              }}
            >
              {tender.mgsId}
            </span>
          </div>

          <span
            style={{
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: '600',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {tender.name}
          </span>
        </div>

        {/* Column 2: Location + Segment */}
        <div className="flex items-center gap-3">
          <span
            style={{
              color: '#808080',
              fontSize: '11px',
            }}
          >
            {tender.location}
          </span>
          <div
            className="px-2 py-0.5 rounded"
            style={{
              backgroundColor: '#0A0A0A',
              border: '0.5px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <span
              style={{
                color: '#B0B0B0',
                fontSize: '9px',
                fontWeight: '600',
                textTransform: 'uppercase',
              }}
            >
              {tender.segment}
            </span>
          </div>
        </div>

        {/* Column 3: Applicant Count */}
        <div className="flex items-center gap-2">
          <Circle style={{ width: '6px', height: '6px', fill: '#1D99CC', stroke: 'none' }} />
          <span
            style={{
              color: '#1D99CC',
              fontSize: '11px',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: '600',
            }}
          >
            {tender.applicantCount} postulantes
          </span>
        </div>

        {/* Column 4: Time Progress */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span
              style={{
                color: getTimeColor(),
                fontSize: '9px',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: '700',
              }}
            >
              {tender.hoursRemaining}h
            </span>
          </div>
          <div
            className="w-full rounded-full overflow-hidden"
            style={{
              height: '3px',
              backgroundColor: '#0A0A0A',
            }}
          >
            <div
              style={{
                width: `${timeProgress}%`,
                height: '100%',
                backgroundColor: getTimeColor(),
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>
      </div>

      {/* NESTED TABLE - The Evaluations */}
      {isExpanded && (
        <div
          style={{
            backgroundColor: '#080808', // Deep Black for nested content
            borderTop: '0.5px solid rgba(255, 255, 255, 0.03)',
          }}
        >
          {/* Nested Table Header */}
          <div
            className="grid px-12 py-2"
            style={{
              gridTemplateColumns: '24px 2fr 2fr 100px 140px 120px',
              backgroundColor: '#0A0A0A',
              borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div /> {/* Status dot column */}
            <div
              style={{
                color: '#505050',
                fontSize: '8px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              Partner Name
            </div>
            <div
              style={{
                color: '#505050',
                fontSize: '8px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              Document / Item
            </div>
            <div
              style={{
                color: '#505050',
                fontSize: '8px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              Weight %
            </div>
            <div
              style={{
                color: '#505050',
                fontSize: '8px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              Assigned Team
            </div>
            <div
              style={{
                color: '#505050',
                fontSize: '8px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontFamily: 'JetBrains Mono, monospace',
                textAlign: 'right',
              }}
            >
              Action
            </div>
          </div>

          {/* Evaluation Rows */}
          {tender.evaluations.map((evaluation, index) => (
            <EvaluationRow
              key={evaluation.id}
              evaluation={evaluation}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ===== EVALUATION ROW (Nested Child Item) =====
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
        return '#FF5252';
    }
  };

  const getTeamBadgeColor = (team: Evaluation['assignedTeam']) => {
    switch (team) {
      case 'SST':
        return { bg: 'rgba(0, 200, 83, 0.12)', color: '#00C853' };
      case 'Ing. Proyectos':
        return { bg: 'rgba(29, 153, 204, 0.12)', color: '#1D99CC' };
      case 'Legal':
        return { bg: 'rgba(156, 39, 176, 0.12)', color: '#9C27B0' };
      case 'Financiero':
        return { bg: 'rgba(255, 152, 0, 0.12)', color: '#FF9800' };
    }
  };

  const teamStyle = getTeamBadgeColor(evaluation.assignedTeam);

  return (
    <div
      className="grid px-12 transition-all cursor-pointer"
      style={{
        gridTemplateColumns: '24px 2fr 2fr 100px 140px 120px',
        height: '34px', // Ultra-slim
        alignItems: 'center',
        backgroundColor: isHovered ? '#0F0F0F' : isEven ? '#080808' : '#0A0A0A',
        borderBottom: '0.5px solid rgba(255, 255, 255, 0.02)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Status Indicator */}
      <div className="flex items-center justify-center">
        <Circle
          style={{
            width: '6px',
            height: '6px',
            fill: getStatusColor(),
            stroke: 'none',
          }}
        />
      </div>

      {/* Partner Name */}
      <div
        style={{
          color: '#D0D0D0',
          fontSize: '11px',
          fontWeight: '500',
        }}
      >
        {evaluation.partnerName}
      </div>

      {/* Document/Item */}
      <div
        style={{
          color: '#B0B0B0',
          fontSize: '11px',
        }}
      >
        {evaluation.documentItem}
      </div>

      {/* Weight % */}
      <div
        style={{
          color: '#1D99CC',
          fontSize: '11px',
          fontFamily: 'JetBrains Mono, monospace',
          fontWeight: '700',
        }}
      >
        {evaluation.weight}% Weight
      </div>

      {/* Assigned Team */}
      <div>
        <div
          className="inline-block px-2 py-1 rounded"
          style={{
            backgroundColor: teamStyle.bg,
            border: `0.5px solid ${teamStyle.color}`,
          }}
        >
          <span
            style={{
              color: teamStyle.color,
              fontSize: '9px',
              fontWeight: '700',
              letterSpacing: '0.3px',
            }}
          >
            {evaluation.assignedTeam}
          </span>
        </div>
      </div>

      {/* Action */}
      <div className="flex justify-end">
        {evaluation.status === 'completed' && evaluation.score !== undefined ? (
          <div className="flex items-center gap-2">
            <Award style={{ width: '12px', height: '12px', color: '#00C853' }} />
            <span
              style={{
                color: '#00C853',
                fontSize: '11px',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: '700',
              }}
            >
              {evaluation.score}
            </span>
          </div>
        ) : (
          <button
            className="px-3 py-1 rounded transition-all"
            style={{
              backgroundColor: isHovered ? '#1D99CC' : 'transparent',
              border: '0.5px solid #1D99CC',
              color: isHovered ? '#FFFFFF' : '#1D99CC',
              fontSize: '9px',
              fontWeight: '700',
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
