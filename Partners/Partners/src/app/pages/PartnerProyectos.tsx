import { useState } from 'react';
import { UnifiedPartnerSidebar } from '../components/UnifiedPartnerSidebar';
import { Link } from 'react-router';
import { 
  Users, 
  AlertCircle, 
  ChevronRight,
  Wrench
} from 'lucide-react';

// ===== TYPES =====
interface ActiveProject {
  id: string;
  mgsId: string;
  title: string;
  category: string;
  location: string;
  progress: number;
  personnel: number;
  equipment: number;
  nextMilestone: {
    description: string;
    daysRemaining: number;
  };
  startDate: string;
  budget: string;
}

// ===== MOCK DATA =====
const ACTIVE_PROJECTS: ActiveProject[] = [
  {
    id: 'PRJ-001',
    mgsId: 'MGS-ANT-02',
    title: 'Montaje Eléctrico Antioquia II',
    category: 'Eléctrico',
    location: 'Medellín, Antioquia',
    progress: 45,
    personnel: 12,
    equipment: 3,
    nextMilestone: {
      description: 'Entrega de Inversores',
      daysRemaining: 2,
    },
    startDate: '15 Nov 2026',
    budget: '$1.8M USD',
  },
  {
    id: 'PRJ-002',
    mgsId: 'MGS-CUN-05',
    title: 'Obra Civil Cundinamarca V',
    category: 'Civil',
    location: 'Facatativá, Cundinamarca',
    progress: 72,
    personnel: 18,
    equipment: 5,
    nextMilestone: {
      description: 'Inspección Final de Fundaciones',
      daysRemaining: 5,
    },
    startDate: '01 Nov 2026',
    budget: '$2.3M USD',
  },
  {
    id: 'PRJ-003',
    mgsId: 'MGS-CAL-01',
    title: 'Instalación Paneles Caldas I',
    category: 'Eléctrico',
    location: 'Manizales, Caldas',
    progress: 28,
    personnel: 9,
    equipment: 2,
    nextMilestone: {
      description: 'Completar Cableado Zona A',
      daysRemaining: 8,
    },
    startDate: '08 Dic 2026',
    budget: '$1.4M USD',
  },
  {
    id: 'PRJ-004',
    mgsId: 'MGS-SAN-01',
    title: 'Estructuras Metálicas Santander I',
    category: 'Estructuras',
    location: 'Floridablanca, Santander',
    progress: 61,
    personnel: 14,
    equipment: 4,
    nextMilestone: {
      description: 'Montaje Torre Principal',
      daysRemaining: 4,
    },
    startDate: '22 Nov 2026',
    budget: '$1.9M USD',
  },
];

export default function PartnerProyectos() {
  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: '#050505', // Absolute Black Canvas
      }}
    >
      <UnifiedPartnerSidebar />

      <div
        className="flex-1 flex flex-col"
        style={{
          marginLeft: '240px',
        }}
      >
        {/* GLOBAL HEADER */}
        <div
          className="px-8 py-5"
          style={{
            borderBottom: '1px solid #333333',
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1
                style={{
                  color: '#FFFFFF',
                  fontSize: '24px',
                  fontWeight: '700',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '4px',
                }}
              >
                Mi Portafolio Operativo
              </h1>
              <div
                style={{
                  color: '#606060',
                  fontSize: '12px',
                }}
              >
                {ACTIVE_PROJECTS.length} obras activas
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-4">
              <QuickStat label="Avance Promedio" value="52%" />
              <QuickStat label="Personal Total" value="53" />
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-auto px-8 py-8">
            <div className="mb-6">
              <h2
                style={{
                  color: '#FFFFFF',
                  fontSize: '20px',
                  fontWeight: '700',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '4px',
                }}
              >
                🏗️ Obras Activas
              </h2>
              <div
                style={{
                  color: '#606060',
                  fontSize: '11px',
                }}
              >
                Proyectos en ejecución bajo tu gestión
              </div>
            </div>

            <div className="space-y-4">
              {ACTIVE_PROJECTS.map((project) => (
                <WideProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== COMPONENTS =====

interface QuickStatProps {
  label: string;
  value: string;
}

function QuickStat({ label, value }: QuickStatProps) {
  return (
    <div
      className="px-4 py-2 rounded"
      style={{
        backgroundColor: '#121212',
        borderTop: '0.5px solid rgba(255, 255, 255, 0.05)',
        borderRight: '0.5px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
        borderLeft: '0.5px solid rgba(255, 255, 255, 0.05)',
      }}
    >
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
          color: '#1D99CC',
          fontSize: '16px',
          fontWeight: '700',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {value}
      </div>
    </div>
  );
}

interface WideProjectCardProps {
  project: ActiveProject;
}

function WideProjectCard({ project }: WideProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getMilestoneUrgency = (days: number) => {
    if (days <= 3) return { color: '#FF5252', label: 'URGENTE' };
    if (days <= 7) return { color: '#FF9800', label: 'PRÓXIMO' };
    return { color: '#1D99CC', label: 'PROGRAMADO' };
  };

  const urgency = getMilestoneUrgency(project.nextMilestone.daysRemaining);

  return (
    <div
      className="flex items-center gap-6 px-6 py-5 rounded transition-all"
      style={{
        backgroundColor: '#121212',
        borderTop: '0.5px solid rgba(255, 255, 255, 0.06)',
        borderRight: '0.5px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '0.5px solid rgba(255, 255, 255, 0.06)',
        borderLeft: isHovered ? '2px solid #1D99CC' : '2px solid #1D99CC',
        boxShadow: isHovered ? '0 0 20px rgba(29, 153, 204, 0.12)' : 'none',
        transform: isHovered ? 'translateX(2px)' : 'translateX(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* LEFT SECTION - Info */}
      <div
        style={{
          width: '240px',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            color: '#1D99CC',
            fontSize: '11px',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: '700',
            letterSpacing: '0.5px',
            marginBottom: '6px',
          }}
        >
          {project.mgsId}
        </div>
        <h3
          style={{
            color: '#FFFFFF',
            fontSize: '15px',
            fontWeight: '600',
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.3',
            marginBottom: '6px',
          }}
        >
          {project.title}
        </h3>
        <div
          className="inline-block px-2 py-0.5 rounded"
          style={{
            backgroundColor: '#0A0A0A',
            color: '#808080',
            fontSize: '9px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.3px',
          }}
        >
          {project.category}
        </div>
      </div>

      {/* MIDDLE SECTION - Metrics */}
      <div className="flex-1">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span
              style={{
                color: '#909090',
                fontSize: '10px',
                fontWeight: '600',
              }}
            >
              Avance
            </span>
            <span
              style={{
                color: '#1D99CC',
                fontSize: '13px',
                fontWeight: '700',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {project.progress}%
            </span>
          </div>
          <div
            className="rounded-full overflow-hidden"
            style={{
              width: '100%',
              height: '6px',
              backgroundColor: '#0A0A0A',
            }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${project.progress}%`,
                backgroundColor: '#1D99CC',
                boxShadow: '0 0 6px rgba(29, 153, 204, 0.4)',
              }}
            />
          </div>
        </div>

        {/* Inline Metrics */}
        <div className="flex items-center gap-5">
          <InlineMetric
            icon={<Users style={{ width: '13px', height: '13px' }} />}
            label="Personal"
            value={project.personnel.toString()}
          />
          <InlineMetric
            icon={<Wrench style={{ width: '13px', height: '13px' }} />}
            label="Equipos"
            value={project.equipment.toString()}
          />
          <div className="flex items-center gap-2">
            <AlertCircle
              style={{
                width: '13px',
                height: '13px',
                color: urgency.color,
              }}
            />
            <div>
              <div
                style={{
                  color: urgency.color,
                  fontSize: '10px',
                  fontWeight: '600',
                }}
              >
                {project.nextMilestone.description}
              </div>
              <div
                style={{
                  color: '#606060',
                  fontSize: '9px',
                }}
              >
                {project.nextMilestone.daysRemaining}d restantes
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION - Action */}
      <div
        style={{
          flexShrink: 0,
        }}
      >
        <Link
          to={`/partner/proyectos/${project.id}`}
          className="flex items-center gap-2 px-5 py-2.5 rounded transition-all"
          style={{
            backgroundColor: '#1D99CC',
            color: '#FFFFFF',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.3px',
            opacity: isHovered ? 1 : 0.9,
          }}
        >
          GESTIONAR OBRA
          <ChevronRight style={{ width: '13px', height: '13px' }} />
        </Link>
      </div>
    </div>
  );
}

interface InlineMetricProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InlineMetric({ icon, label, value }: InlineMetricProps) {
  return (
    <div className="flex items-center gap-2">
      <div style={{ color: '#606060' }}>{icon}</div>
      <div>
        <div
          style={{
            color: '#909090',
            fontSize: '10px',
          }}
        >
          {label}
        </div>
        <div
          style={{
            color: '#E0E0E0',
            fontSize: '12px',
            fontWeight: '600',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}