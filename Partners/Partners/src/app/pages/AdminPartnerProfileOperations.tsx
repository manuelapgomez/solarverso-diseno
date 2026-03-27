import { useState } from 'react';
import { AdminSidebar } from '../components/AdminSidebar';
import { ChevronLeft, Search, Users, Truck, CheckCircle2, ChevronDown, ChevronUp, ExternalLink, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

type ProjectStatus = 'active' | 'completed';
type ActivityStatus = 'completed' | 'in-progress' | 'pending';

interface Activity {
  id: string;
  name: string;
  progress: number;
  status: ActivityStatus;
}

interface Personnel {
  id: string;
  name: string;
  avatar?: string;
}

interface Machinery {
  id: string;
  name: string;
  count: number;
}

interface Project {
  id: string;
  mgsId: string;
  name: string;
  phase: string;
  status: ProjectStatus;
  progress: number;
  startDate: string;
  activities: Activity[];
  personnel: Personnel[];
  machinery: Machinery[];
}

const MOCK_PROJECTS: Project[] = [
  {
    id: 'PROJ-001',
    mgsId: 'MGS-ANT-02',
    name: 'MGS Antioquia 02',
    phase: 'Fase Obra Civil',
    status: 'active',
    progress: 65,
    startDate: 'Oct 2025',
    activities: [
      { id: 'ACT-001', name: 'Excavación Zanja 1', progress: 100, status: 'completed' },
      { id: 'ACT-002', name: 'Cerramiento Perimetral', progress: 40, status: 'in-progress' },
      { id: 'ACT-003', name: 'Fundaciones Torre Principal', progress: 75, status: 'in-progress' },
      { id: 'ACT-004', name: 'Instalación Sistema Drenaje', progress: 0, status: 'pending' },
    ],
    personnel: [
      { id: 'P-001', name: 'Carlos Mendoza' },
      { id: 'P-002', name: 'Ana López' },
      { id: 'P-003', name: 'Jorge Ramírez' },
      { id: 'P-004', name: 'María Fernández' },
      { id: 'P-005', name: 'Pedro Gómez' },
      { id: 'P-006', name: 'Luis Martínez' },
      { id: 'P-007', name: 'Carmen Silva' },
      { id: 'P-008', name: 'Roberto Torres' },
      { id: 'P-009', name: 'Diana Ruiz' },
      { id: 'P-010', name: 'Alberto Castro' },
      { id: 'P-011', name: 'Sofía Morales' },
      { id: 'P-012', name: 'Andrés Vargas' },
    ],
    machinery: [
      { id: 'M-001', name: 'Retroexcavadora', count: 2 },
      { id: 'M-002', name: 'Vibrocompactador', count: 1 },
    ],
  },
  {
    id: 'PROJ-002',
    mgsId: 'MGS-CUN-05',
    name: 'MGS Cundinamarca 05',
    phase: 'Fase Montaje Eléctrico',
    status: 'active',
    progress: 42,
    startDate: 'Nov 2025',
    activities: [
      { id: 'ACT-005', name: 'Tendido Cable Principal', progress: 60, status: 'in-progress' },
      { id: 'ACT-006', name: 'Instalación Inversores', progress: 25, status: 'in-progress' },
    ],
    personnel: [
      { id: 'P-013', name: 'Felipe Vargas' },
      { id: 'P-014', name: 'Laura Díaz' },
    ],
    machinery: [
      { id: 'M-003', name: 'Grúa Torre', count: 1 },
    ],
  },
  {
    id: 'PROJ-003',
    mgsId: 'MGS-BOY-01',
    name: 'MGS Boyacá 01',
    phase: 'Terminada',
    status: 'completed',
    progress: 100,
    startDate: 'Jul 2025',
    activities: [],
    personnel: [],
    machinery: [],
  },
  {
    id: 'PROJ-004',
    mgsId: 'MGS-CAL-03',
    name: 'MGS Caldas 03',
    phase: 'Terminada',
    status: 'completed',
    progress: 100,
    startDate: 'Ago 2025',
    activities: [],
    personnel: [],
    machinery: [],
  },
];

export default function AdminPartnerProfileOperations() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'documents' | 'operations' | 'evaluations'>('operations');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'completed'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>('PROJ-001');

  const filteredProjects = MOCK_PROJECTS.filter((project) => {
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
    const matchesSearch = project.mgsId.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const activeCount = MOCK_PROJECTS.filter((p) => p.status === 'active').length;
  const completedCount = MOCK_PROJECTS.filter((p) => p.status === 'completed').length;

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: '#050505',
      }}
    >
      <AdminSidebar />

      <div
        className="flex-1"
        style={{
          marginLeft: '220px',
        }}
      >
        {/* Back Button */}
        <div
          className="px-8 py-4"
          style={{
            borderBottom: '0.5px solid #222222',
          }}
        >
          <button
            onClick={() => navigate('/admin/partners')}
            className="flex items-center gap-2 px-3 py-1.5 rounded transition-colors"
            style={{
              backgroundColor: 'transparent',
              border: '0.5px solid rgba(255, 255, 255, 0.05)',
              color: '#808080',
              fontSize: '11px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1A1A1A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <ChevronLeft style={{ width: '14px', height: '14px' }} />
            Volver al Directorio
          </button>
        </div>

        {/* Two Column Layout */}
        <div className="flex">
          {/* LEFT COLUMN (30% - Fixed Identity) */}
          <div
            style={{
              width: '30%',
              minWidth: '360px',
              backgroundColor: '#050505',
              borderRight: '1px solid #222222',
              padding: '32px',
            }}
          >
            {/* Partner Logo */}
            <div className="flex items-center justify-center mb-6">
              <div
                className="flex items-center justify-center"
                style={{
                  width: '140px',
                  height: '140px',
                  backgroundColor: '#121212',
                  border: '2px solid #1D99CC',
                  borderRadius: '8px',
                }}
              >
                <div
                  style={{
                    color: '#1D99CC',
                    fontSize: '56px',
                    fontWeight: '700',
                  }}
                >
                  CE
                </div>
              </div>
            </div>

            {/* Company Name */}
            <h1
              style={{
                color: '#E0E0E0',
                fontSize: '22px',
                fontWeight: '700',
                textAlign: 'center',
                marginBottom: '8px',
              }}
            >
              Construcciones Eléctricas SAS
            </h1>

            {/* SST Score */}
            <div className="flex justify-center mb-6">
              <div
                className="px-4 py-2 rounded"
                style={{
                  backgroundColor: 'rgba(0, 200, 83, 0.15)',
                  border: '0.5px solid #00C853',
                }}
              >
                <div
                  style={{
                    color: '#00C853',
                    fontSize: '13px',
                    fontWeight: '700',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  Score: 86% SST
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div
              className="px-4 py-3 rounded mb-8"
              style={{
                backgroundColor: '#0A0A0A',
                border: '1px solid #222222',
                textAlign: 'center',
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#00C853',
                  }}
                />
                <span
                  style={{
                    color: '#00C853',
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                  }}
                >
                  Habilitado
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div
              className="p-5 rounded"
              style={{
                backgroundColor: '#0A0A0A',
                border: '1px solid #222222',
              }}
            >
              <div
                style={{
                  color: '#808080',
                  fontSize: '10px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  letterSpacing: '0.5px',
                }}
              >
                Información de Contacto
              </div>
              <div className="space-y-4">
                <InfoRow label="NIT" value="900.123.456" />
                <InfoRow label="Representante Legal" value="Juan Pérez" />
                <InfoRow label="Ubicación" value="Medellín, ANT" />
                <InfoRow label="Teléfono" value="+57 300 123 4567" />
                <InfoRow label="Email" value="contacto@construcciones.com" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (70% - The Workspace) */}
          <div
            className="flex-1"
            style={{
              backgroundColor: '#050505',
            }}
          >
            {/* Header Tabs */}
            <div
              className="flex items-center gap-1 px-8 pt-6"
              style={{
                borderBottom: '1px solid #222222',
              }}
            >
              <TabButton
                label="📁 Bóveda Documental"
                isActive={activeTab === 'documents'}
                onClick={() => setActiveTab('documents')}
              />
              <TabButton
                label="🏗️ Proyectos y Operaciones"
                isActive={activeTab === 'operations'}
                onClick={() => setActiveTab('operations')}
              />
              <TabButton
                label="⭐️ Evaluaciones"
                isActive={activeTab === 'evaluations'}
                onClick={() => setActiveTab('evaluations')}
              />
            </div>

            {/* Operations Workspace */}
            {activeTab === 'operations' && (
              <div className="p-8">
                {/* Filter Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <FilterButton
                      label={`En Ejecución (${activeCount})`}
                      isActive={filterStatus === 'active'}
                      onClick={() => setFilterStatus(filterStatus === 'active' ? 'all' : 'active')}
                    />
                    <FilterButton
                      label={`Finalizados (${completedCount})`}
                      isActive={filterStatus === 'completed'}
                      onClick={() => setFilterStatus(filterStatus === 'completed' ? 'all' : 'completed')}
                    />
                  </div>

                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded"
                    style={{
                      width: '280px',
                      backgroundColor: '#0A0A0A',
                      border: '1px solid #222222',
                    }}
                  >
                    <Search style={{ width: '13px', height: '13px', color: '#606060' }} />
                    <input
                      type="text"
                      placeholder="Buscar por MGS..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        border: 'none',
                        outline: 'none',
                        color: '#B0B0B0',
                        fontSize: '12px',
                      }}
                    />
                  </div>
                </div>

                {/* Project Cards */}
                <div className="space-y-4">
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      isExpanded={expandedProjectId === project.id}
                      onToggle={() =>
                        setExpandedProjectId(expandedProjectId === project.id ? null : project.id)
                      }
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== TAB BUTTON =====
function TabButton({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-5 pb-3 pt-3 transition-colors relative"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        color: isActive ? '#FFFFFF' : '#808080',
        fontSize: '13px',
        fontWeight: isActive ? '600' : '500',
      }}
    >
      {label}
      {isActive && (
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '2px',
            backgroundColor: '#1D99CC',
          }}
        />
      )}
    </button>
  );
}

// ===== FILTER BUTTON =====
function FilterButton({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded transition-all"
      style={{
        backgroundColor: isActive ? '#1D99CC15' : '#0A0A0A',
        border: `1px solid ${isActive ? '#1D99CC' : '#222222'}`,
        color: isActive ? '#1D99CC' : '#808080',
        fontSize: '12px',
        fontWeight: '600',
      }}
    >
      {label}
    </button>
  );
}

// ===== PROJECT CARD =====
interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}

function ProjectCard({ project, isExpanded, onToggle }: ProjectCardProps) {
  const isActive = project.status === 'active';

  return (
    <div
      className="rounded transition-all"
      style={{
        backgroundColor: project.status === 'completed' ? '#080808' : '#121212',
        border: '1px solid #222222',
        opacity: project.status === 'completed' ? 0.7 : 1,
      }}
    >
      {/* Card Header */}
      <div
        className="p-5"
        style={{
          borderBottom: isExpanded ? '1px solid #222222' : 'none',
        }}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              {/* Status Dot */}
              {isActive && (
                <div
                  className="relative"
                  style={{
                    width: '10px',
                    height: '10px',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{
                      backgroundColor: '#1D99CC',
                      opacity: 0.4,
                    }}
                  />
                  <div
                    className="relative rounded-full"
                    style={{
                      width: '10px',
                      height: '10px',
                      backgroundColor: '#1D99CC',
                    }}
                  />
                </div>
              )}

              {/* Title */}
              <div>
                <div
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#1D99CC',
                    marginBottom: '4px',
                  }}
                >
                  {project.mgsId}
                </div>
                <h3
                  style={{
                    color: '#E0E0E0',
                    fontSize: '16px',
                    fontWeight: '600',
                  }}
                >
                  {project.name} - {project.phase}
                </h3>
              </div>
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-6 mt-3">
              <div className="flex items-center gap-2">
                <span
                  style={{
                    color: '#606060',
                    fontSize: '11px',
                  }}
                >
                  Avance:
                </span>
                <span
                  style={{
                    color: '#1D99CC',
                    fontSize: '14px',
                    fontWeight: '700',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {project.progress}%
                </span>
              </div>
              <div
                style={{
                  width: '1px',
                  height: '16px',
                  backgroundColor: '#222222',
                }}
              />
              <div className="flex items-center gap-2">
                <span
                  style={{
                    color: '#606060',
                    fontSize: '11px',
                  }}
                >
                  Inicio:
                </span>
                <span
                  style={{
                    color: '#B0B0B0',
                    fontSize: '12px',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {project.startDate}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {isActive && (
              <button
                className="px-4 py-2 rounded transition-all"
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #1D99CC',
                  color: '#1D99CC',
                  fontSize: '11px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1D99CC';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#1D99CC';
                }}
              >
                Evaluar Desempeño
              </button>
            )}

            {project.status === 'completed' ? (
              <button
                className="px-4 py-2 rounded transition-all flex items-center gap-2"
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #333333',
                  color: '#808080',
                  fontSize: '11px',
                  fontWeight: '600',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#505050';
                  e.currentTarget.style.color = '#B0B0B0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#333333';
                  e.currentTarget.style.color = '#808080';
                }}
              >
                <ExternalLink style={{ width: '13px', height: '13px' }} />
                Ver Historial
              </button>
            ) : (
              <button
                onClick={onToggle}
                className="px-3 py-2 rounded transition-all flex items-center gap-2"
                style={{
                  backgroundColor: isExpanded ? '#1D99CC15' : 'transparent',
                  border: `1px solid ${isExpanded ? '#1D99CC' : '#333333'}`,
                  color: isExpanded ? '#1D99CC' : '#808080',
                  fontSize: '11px',
                  fontWeight: '600',
                }}
              >
                {isExpanded ? <ChevronUp style={{ width: '14px', height: '14px' }} /> : <ChevronDown style={{ width: '14px', height: '14px' }} />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Card Body (Expanded - The Deep Dive) */}
      {isExpanded && isActive && (
        <div
          className="p-5"
          style={{
            backgroundColor: '#0A0A0A',
          }}
        >
          <div className="grid grid-cols-3 gap-6">
            {/* Column A: Actividades */}
            <div>
              <div
                style={{
                  color: '#B0B0B0',
                  fontSize: '11px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  letterSpacing: '0.5px',
                }}
              >
                Actividades ({project.activities.length})
              </div>
              <div className="space-y-3">
                {project.activities.map((activity) => (
                  <ActivityItem key={activity.id} activity={activity} />
                ))}
              </div>
            </div>

            {/* Column B: Personal en Sitio */}
            <div>
              <div
                style={{
                  color: '#B0B0B0',
                  fontSize: '11px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  letterSpacing: '0.5px',
                }}
              >
                Personal en Sitio
              </div>
              <div
                className="p-4 rounded"
                style={{
                  backgroundColor: '#121212',
                  border: '1px solid #222222',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Users style={{ width: '16px', height: '16px', color: '#1D99CC' }} />
                  <span
                    style={{
                      color: '#E0E0E0',
                      fontSize: '16px',
                      fontWeight: '700',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {project.personnel.length} Operarios Asignados
                  </span>
                </div>

                {/* Avatars */}
                <div className="flex items-center gap-2 mb-3">
                  {project.personnel.slice(0, 3).map((person, index) => (
                    <div
                      key={person.id}
                      className="flex items-center justify-center"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: '#1D99CC',
                        color: '#FFFFFF',
                        fontSize: '11px',
                        fontWeight: '700',
                      }}
                    >
                      {person.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .toUpperCase()}
                    </div>
                  ))}
                  {project.personnel.length > 3 && (
                    <div
                      style={{
                        color: '#808080',
                        fontSize: '11px',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      +{project.personnel.length - 3}
                    </div>
                  )}
                </div>

                <button
                  className="w-full px-3 py-2 rounded transition-all flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid #333333',
                    color: '#808080',
                    fontSize: '11px',
                    fontWeight: '600',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#1D99CC';
                    e.currentTarget.style.color = '#1D99CC';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#333333';
                    e.currentTarget.style.color = '#808080';
                  }}
                >
                  Ver Cuadrilla Completa
                </button>
              </div>
            </div>

            {/* Column C: Maquinaria */}
            <div>
              <div
                style={{
                  color: '#B0B0B0',
                  fontSize: '11px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  letterSpacing: '0.5px',
                }}
              >
                Maquinaria
              </div>
              <div
                className="p-4 rounded"
                style={{
                  backgroundColor: '#121212',
                  border: '1px solid #222222',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Truck style={{ width: '16px', height: '16px', color: '#1D99CC' }} />
                  <span
                    style={{
                      color: '#E0E0E0',
                      fontSize: '16px',
                      fontWeight: '700',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {project.machinery.reduce((sum, m) => sum + m.count, 0)} Equipos Activos
                  </span>
                </div>

                <div className="space-y-2">
                  {project.machinery.map((machine) => (
                    <div
                      key={machine.id}
                      className="flex items-center justify-between px-3 py-2 rounded"
                      style={{
                        backgroundColor: '#0A0A0A',
                        border: '1px solid #1E1E1E',
                      }}
                    >
                      <span
                        style={{
                          color: '#D0D0D0',
                          fontSize: '12px',
                        }}
                      >
                        {machine.name}
                      </span>
                      <span
                        style={{
                          color: '#1D99CC',
                          fontSize: '13px',
                          fontWeight: '700',
                          fontFamily: 'JetBrains Mono, monospace',
                        }}
                      >
                        {machine.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* VIEW DASHBOARD BUTTON */}
          <button
            className="w-full px-4 py-2.5 rounded transition-all flex items-center justify-center gap-2 mt-4"
            onClick={() => navigate(`/admin/partners/construcciones-sas/projects/${project.id}`)}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #1D99CC',
              color: '#1D99CC',
              fontSize: '11px',
              fontWeight: '700',
              textTransform: 'uppercase',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1D99CC';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1D99CC';
            }}
          >
            <ExternalLink style={{ width: '14px', height: '14px' }} />
            Abrir Dashboard de Obra
          </button>
        </div>
      )}
    </div>
  );
}

// ===== ACTIVITY ITEM =====
function ActivityItem({ activity }: { activity: Activity }) {
  const getStatusColor = () => {
    switch (activity.status) {
      case 'completed':
        return '#00C853';
      case 'in-progress':
        return '#1D99CC';
      case 'pending':
        return '#606060';
    }
  };

  return (
    <div
      className="p-3 rounded"
      style={{
        backgroundColor: '#121212',
        border: '1px solid #222222',
      }}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-start gap-2 flex-1">
          {activity.status === 'completed' ? (
            <CheckCircle2 style={{ width: '14px', height: '14px', color: getStatusColor(), marginTop: '2px' }} />
          ) : activity.status === 'in-progress' ? (
            <div
              className="mt-1"
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                border: `2px solid ${getStatusColor()}`,
                borderTopColor: 'transparent',
                animation: 'spin 1s linear infinite',
              }}
            />
          ) : (
            <div
              className="mt-1"
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                border: `2px solid ${getStatusColor()}`,
              }}
            />
          )}
          <span
            style={{
              color: '#D0D0D0',
              fontSize: '12px',
              lineHeight: '1.4',
            }}
          >
            {activity.name}
          </span>
        </div>
        <span
          style={{
            color: getStatusColor(),
            fontSize: '12px',
            fontWeight: '700',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          {activity.progress}%
        </span>
      </div>
      <div
        className="rounded-full overflow-hidden"
        style={{
          height: '4px',
          backgroundColor: '#1E1E1E',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${activity.progress}%`,
            backgroundColor: getStatusColor(),
          }}
        />
      </div>
    </div>
  );
}

// ===== INFO ROW =====
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        style={{
          color: '#606060',
          fontSize: '9px',
          textTransform: 'uppercase',
          marginBottom: '4px',
          letterSpacing: '0.5px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          color: '#D0D0D0',
          fontSize: '12px',
        }}
      >
        {value}
      </div>
    </div>
  );
}