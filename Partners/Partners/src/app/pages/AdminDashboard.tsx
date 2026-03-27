import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Plus, TrendingUp, Clock, Users, Award, X, ChevronRight, CheckCircle2, AlertCircle, Search, MapPin } from 'lucide-react';
import UserProfileLogout from '../components/UserProfileLogout';
import { AdminSidebar } from '../components/AdminSidebar';

interface PendingEvaluation {
  id: string;
  postulante: string;
  pliego: string;
  mgsId: string;
  item: string;
  receivedDate: string;
  priority: 'Alta' | 'Media' | 'Baja';
}

interface ActiveTender {
  id: string;
  mgsId: string;
  name: string;
  location: string;
  department: string;
  closingDate: string;
  applicants: number;
  daysRemaining: number;
}

const PENDING_EVALUATIONS: PendingEvaluation[] = [
  {
    id: 'EVAL-001',
    postulante: 'Construcciones SAS',
    pliego: 'MGS Boyacá IV',
    mgsId: 'MGS-BOY-04',
    item: 'Propuesta Técnica',
    receivedDate: '10 Dic 2026',
    priority: 'Alta',
  },
  {
    id: 'EVAL-002',
    postulante: 'Ingeniería Eléctrica LTDA',
    pliego: 'MGS Meta III',
    mgsId: 'MGS-MET-03',
    item: 'Propuesta Económica',
    receivedDate: '11 Dic 2026',
    priority: 'Alta',
  },
  {
    id: 'EVAL-003',
    postulante: 'Constructora del Norte',
    pliego: 'MGS Cundinamarca II',
    mgsId: 'MGS-CUN-02',
    item: 'Certificados SST',
    receivedDate: '09 Dic 2026',
    priority: 'Media',
  },
  {
    id: 'EVAL-004',
    postulante: 'Solar Build Co.',
    pliego: 'MGS Antioquia V',
    mgsId: 'MGS-ANT-05',
    item: 'Propuesta Técnica',
    receivedDate: '12 Dic 2026',
    priority: 'Alta',
  },
  {
    id: 'EVAL-005',
    postulante: 'Montajes del Caribe',
    pliego: 'MGS Atlántico I',
    mgsId: 'MGS-ATL-01',
    item: 'Plan de Calidad',
    receivedDate: '08 Dic 2026',
    priority: 'Baja',
  },
  {
    id: 'EVAL-006',
    postulante: 'Obras Civiles Express',
    pliego: 'MGS Huila II',
    mgsId: 'MGS-HUI-02',
    item: 'Cronograma',
    receivedDate: '11 Dic 2026',
    priority: 'Media',
  },
];

const ACTIVE_TENDERS: ActiveTender[] = [
  {
    id: 'TND-001',
    mgsId: 'MGS-BOY-04',
    name: 'Obra Civil Boyacá IV',
    location: 'Paipa',
    department: 'Boyacá',
    closingDate: '15 Dic',
    applicants: 8,
    daysRemaining: 3,
  },
  {
    id: 'TND-002',
    mgsId: 'MGS-MET-03',
    name: 'Montaje Eléctrico Meta III',
    location: 'Puerto López',
    department: 'Meta',
    closingDate: '20 Dic',
    applicants: 12,
    daysRemaining: 8,
  },
  {
    id: 'TND-003',
    mgsId: 'MGS-CUN-02',
    name: 'Obra Civil Cundinamarca II',
    location: 'Zipaquirá',
    department: 'Cundinamarca',
    closingDate: '18 Dic',
    applicants: 6,
    daysRemaining: 6,
  },
  {
    id: 'TND-004',
    mgsId: 'MGS-ANT-05',
    name: 'Instalación Paneles Antioquia V',
    location: 'Medellín',
    department: 'Antioquia',
    closingDate: '22 Dic',
    applicants: 15,
    daysRemaining: 10,
  },
  {
    id: 'TND-005',
    mgsId: 'MGS-ATL-01',
    name: 'MGS Atlántico I',
    location: 'Barranquilla',
    department: 'Atlántico',
    closingDate: '25 Dic',
    applicants: 9,
    daysRemaining: 13,
  },
  {
    id: 'TND-006',
    mgsId: 'MGS-HUI-02',
    name: 'Obra Civil Huila II',
    location: 'Neiva',
    department: 'Huila',
    closingDate: '19 Dic',
    applicants: 7,
    daysRemaining: 7,
  },
];

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: '#050505',
      }}
    >
      <AdminSidebar />

      <div
        className="flex-1 flex flex-col"
        style={{
          marginLeft: '220px',
        }}
      >
        {/* HEADER */}
        <div
          className="px-8 py-4 flex items-center justify-between"
          style={{
            borderBottom: '0.5px solid #333333',
          }}
        >
          <div>
            <h1
              style={{
                color: '#E0E0E0',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '2px',
              }}
            >
              Command Center
            </h1>
            <div
              style={{
                color: '#606060',
                fontSize: '11px',
              }}
            >
              Gestión centralizada de pliegos y partners
            </div>
          </div>

          {/* Global Search */}
          <div
            className="flex items-center gap-3 px-4 py-2.5 rounded"
            style={{
              width: '400px',
              backgroundColor: '#0A0A0A',
              border: '0.5px solid #333333',
            }}
          >
            <Search style={{ width: '16px', height: '16px', color: '#606060' }} />
            <input
              type="text"
              placeholder="Buscar Partner, Pliego o MGS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#B0B0B0',
                fontSize: '13px',
                fontFamily: 'Inter, sans-serif',
              }}
            />
          </div>
        </div>

        {/* TOP METRICS - The Pulse */}
        <div className="px-8 py-6">
          <div className="grid grid-cols-3 gap-5">
            {/* Card 1: Pliegos Activos */}
            <MetricCard
              label="Pliegos Activos"
              value="12"
              status="3 cerrando hoy"
              statusColor="#FF9800"
              icon="📝"
            />

            {/* Card 2: Postulaciones Recibidas */}
            <MetricCard
              label="Postulaciones Recibidas"
              value="145"
              status="Requires Grading"
              statusColor="#1D99CC"
              icon="📥"
            />

            {/* Card 3: Partners Activos */}
            <MetricCard
              label="Partners Activos"
              value="84"
              status="5 con documentos vencidos"
              statusColor="#FF5252"
              icon="👥"
              alert
            />
          </div>
        </div>

        {/* MAIN CONTENT - Split View */}
        <div className="flex-1 px-8 pb-8">
          <div className="grid grid-cols-2 gap-6 h-full">
            {/* LEFT: Priority Tasks */}
            <div
              className="rounded flex flex-col"
              style={{
                backgroundColor: '#0A0A0A',
                border: '0.5px solid #333333',
              }}
            >
              {/* Header */}
              <div
                className="px-5 py-4"
                style={{
                  borderBottom: '0.5px solid #333333',
                }}
              >
                <div
                  style={{
                    color: '#D0D0D0',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '2px',
                  }}
                >
                  Evaluaciones Pendientes
                </div>
                <div
                  style={{
                    color: '#606060',
                    fontSize: '11px',
                  }}
                >
                  {PENDING_EVALUATIONS.length} postulaciones requieren revisión
                </div>
              </div>

              {/* List */}
              <div className="flex-1 overflow-auto">
                {PENDING_EVALUATIONS.map((evaluation) => (
                  <EvaluationRow key={evaluation.id} evaluation={evaluation} />
                ))}
              </div>
            </div>

            {/* RIGHT: Active Tenders Map */}
            <div
              className="rounded flex flex-col"
              style={{
                backgroundColor: '#0A0A0A',
                border: '0.5px solid #333333',
              }}
            >
              {/* Header */}
              <div
                className="px-5 py-4"
                style={{
                  borderBottom: '0.5px solid #333333',
                }}
              >
                <div
                  style={{
                    color: '#D0D0D0',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '2px',
                  }}
                >
                  Pliegos Activos por Región
                </div>
                <div
                  style={{
                    color: '#606060',
                    fontSize: '11px',
                  }}
                >
                  Distribución geográfica de oportunidades abiertas
                </div>
              </div>

              {/* Map/List */}
              <div className="flex-1 overflow-auto p-4">
                <div className="space-y-3">
                  {ACTIVE_TENDERS.map((tender) => (
                    <TenderMapItem key={tender.id} tender={tender} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== METRIC CARD =====
interface MetricCardProps {
  label: string;
  value: string;
  status: string;
  statusColor: string;
  icon: string;
  alert?: boolean;
}

function MetricCard({ label, value, status, statusColor, icon, alert }: MetricCardProps) {
  return (
    <div
      className="rounded p-5"
      style={{
        backgroundColor: '#0A0A0A',
        border: alert ? `0.5px solid ${statusColor}` : '0.5px solid #333333',
        boxShadow: alert ? `0 0 20px ${statusColor}33` : 'none',
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          style={{
            color: '#808080',
            fontSize: '12px',
            fontWeight: '500',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {label}
        </div>
        <div style={{ fontSize: '24px' }}>{icon}</div>
      </div>

      <div
        className="mb-3"
        style={{
          color: '#E0E0E0',
          fontSize: '32px',
          fontWeight: '700',
          fontFamily: 'JetBrains Mono, monospace',
          lineHeight: '1',
        }}
      >
        {value}
      </div>

      <div className="flex items-center gap-2">
        {alert && <AlertCircle style={{ width: '14px', height: '14px', color: statusColor }} />}
        <span
          style={{
            color: statusColor,
            fontSize: '11px',
            fontWeight: '600',
          }}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

// ===== EVALUATION ROW =====
interface EvaluationRowProps {
  evaluation: PendingEvaluation;
}

function EvaluationRow({ evaluation }: EvaluationRowProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="px-5 py-4 transition-colors cursor-pointer"
      style={{
        borderBottom: '0.5px solid #1A1A1A',
        backgroundColor: isHovered ? '#121212' : 'transparent',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor:
                evaluation.priority === 'Alta'
                  ? '#FF5252'
                  : evaluation.priority === 'Media'
                  ? '#FF9800'
                  : '#606060',
            }}
          />
          <div
            style={{
              color: '#D0D0D0',
              fontSize: '13px',
              fontWeight: '600',
            }}
          >
            {evaluation.postulante}
          </div>
        </div>

        <div
          style={{
            color: '#1D99CC',
            fontSize: '11px',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: '600',
          }}
        >
          {evaluation.mgsId}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <div
            style={{
              color: '#606060',
              fontSize: '9px',
              textTransform: 'uppercase',
              marginBottom: '3px',
            }}
          >
            Pliego
          </div>
          <div
            style={{
              color: '#B0B0B0',
              fontSize: '11px',
            }}
          >
            {evaluation.pliego}
          </div>
        </div>

        <div>
          <div
            style={{
              color: '#606060',
              fontSize: '9px',
              textTransform: 'uppercase',
              marginBottom: '3px',
            }}
          >
            Item a Evaluar
          </div>
          <div
            style={{
              color: '#B0B0B0',
              fontSize: '11px',
            }}
          >
            {evaluation.item}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Clock style={{ width: '11px', height: '11px', color: '#606060' }} />
          <span
            style={{
              color: '#606060',
              fontSize: '10px',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {evaluation.receivedDate}
          </span>
        </div>

        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded transition-all"
          style={{
            backgroundColor: isHovered ? '#1D99CC' : 'transparent',
            border: '0.5px solid #1D99CC',
            color: isHovered ? '#FFFFFF' : '#1D99CC',
            fontSize: '11px',
            fontWeight: '600',
          }}
        >
          Grade Now
          <ChevronRight style={{ width: '12px', height: '12px' }} />
        </button>
      </div>
    </div>
  );
}

// ===== TENDER MAP ITEM =====
interface TenderMapItemProps {
  tender: ActiveTender;
}

function TenderMapItem({ tender }: TenderMapItemProps) {
  return (
    <div
      className="rounded p-4 transition-all cursor-pointer"
      style={{
        backgroundColor: '#121212',
        border: '0.5px solid #333333',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#1D99CC';
        e.currentTarget.style.backgroundColor = '#1A1A1A';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#333333';
        e.currentTarget.style.backgroundColor = '#121212';
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <div
            style={{
              color: '#1D99CC',
              fontSize: '11px',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: '700',
              marginBottom: '4px',
            }}
          >
            {tender.mgsId}
          </div>
          <div
            style={{
              color: '#D0D0D0',
              fontSize: '12px',
              fontWeight: '500',
            }}
          >
            {tender.name}
          </div>
        </div>

        <div
          className="px-2 py-1 rounded"
          style={{
            backgroundColor:
              tender.daysRemaining <= 3
                ? 'rgba(255, 82, 82, 0.15)'
                : tender.daysRemaining <= 7
                ? 'rgba(255, 152, 0, 0.15)'
                : 'rgba(0, 200, 83, 0.15)',
            color:
              tender.daysRemaining <= 3
                ? '#FF5252'
                : tender.daysRemaining <= 7
                ? '#FF9800'
                : '#00C853',
            fontSize: '10px',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: '600',
          }}
        >
          {tender.daysRemaining}d
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <MapPin style={{ width: '12px', height: '12px', color: '#606060' }} />
        <span
          style={{
            color: '#808080',
            fontSize: '11px',
          }}
        >
          {tender.location}, {tender.department}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div
          style={{
            color: '#606060',
            fontSize: '10px',
          }}
        >
          Cierre: {tender.closingDate}
        </div>

        <div className="flex items-center gap-1.5">
          <TrendingUp style={{ width: '11px', height: '11px', color: '#1D99CC' }} />
          <span
            style={{
              color: '#1D99CC',
              fontSize: '11px',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: '600',
            }}
          >
            {tender.applicants} postulantes
          </span>
        </div>
      </div>
    </div>
  );
}