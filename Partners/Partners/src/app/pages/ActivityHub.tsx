import { useState } from 'react';
import { UnifiedPartnerSidebar } from '../components/UnifiedPartnerSidebar';
import { Clock, AlertCircle, CheckCircle2, FileText, TrendingUp } from 'lucide-react';
import Masonry from 'react-responsive-masonry';

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
}

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
  },
];

export default function ActivityHub() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

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

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: '#050505', // Absolute Black
      }}
    >
      <UnifiedPartnerSidebar />

      <div
        className="flex-1 flex flex-col"
        style={{
          marginLeft: '240px',
        }}
      >
        {/* Header Bar */}
        <div
          className="px-8 py-6"
          style={{
            borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <h1
            style={{
              color: '#FFFFFF',
              fontSize: '24px',
              fontWeight: '700',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '4px',
            }}
          >
            Mi Actividad
          </h1>
          <div
            style={{
              color: '#808080',
              fontSize: '12px',
            }}
          >
            Estado de tus postulaciones y acciones pendientes
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className="px-8 py-5 flex items-center gap-4"
          style={{
            borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
          }}
        >
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

        {/* Application Grid */}
        <div className="flex-1 overflow-auto px-8 py-6">
          <Masonry columnsCount={3} gutter="16px">
            {filteredApplications.map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  isActive: boolean;
  onClick: () => void;
}

function StatCard({ label, value, icon, color, isActive, onClick }: StatCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3 rounded transition-all cursor-pointer"
      style={{
        backgroundColor: isActive ? '#121212' : '#0A0A0A',
        border: isActive ? `0.5px solid ${color}` : '0.5px solid rgba(255, 255, 255, 0.05)',
        boxShadow: isActive ? `0 0 16px ${color}33` : 'none',
        flex: 1,
      }}
    >
      <div style={{ color }}>{icon}</div>
      <div className="flex flex-col items-start">
        <div
          style={{
            color: '#606060',
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
            color: '#FFFFFF',
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
