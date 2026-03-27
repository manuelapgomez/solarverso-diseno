import { useState } from 'react';
import { AdminSidebar } from '../components/AdminSidebar';
import { ChevronLeft, ChevronRight, AlertCircle, CheckCircle2, Clock, Users, Truck, Calendar } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';

type PersonnelStatus = 'compliant' | 'warning' | 'critical';
type TaskStatus = 'backlog' | 'in-progress' | 'blocked' | 'completed';
type TaskPriority = 'low' | 'medium' | 'high' | 'critical';

interface Personnel {
  id: string;
  name: string;
  role: string;
  status: PersonnelStatus;
  statusMessage: string;
  avatar?: string;
}

interface Machinery {
  id: string;
  type: string;
  identifier: string;
  status: 'operational' | 'maintenance' | 'inactive';
  operator?: string;
}

interface Task {
  id: string;
  title: string;
  category: string;
  priority: TaskPriority;
  status: TaskStatus;
  assignee: string;
  dueDate: string;
  tags: string[];
}

const MOCK_PERSONNEL: Personnel[] = [
  {
    id: 'P-001',
    name: 'Carlos Ruiz',
    role: 'Líder de Cuadrilla',
    status: 'compliant',
    statusMessage: 'Certificaciones al día',
  },
  {
    id: 'P-002',
    name: 'Ana López',
    role: 'Operaria Estructuras',
    status: 'compliant',
    statusMessage: 'Certificaciones al día',
  },
  {
    id: 'P-003',
    name: 'Jorge Ramírez',
    role: 'Operario Eléctrico',
    status: 'warning',
    statusMessage: 'Curso alturas vence en 15 días',
  },
  {
    id: 'P-004',
    name: 'María Fernández',
    role: 'Topógrafa',
    status: 'compliant',
    statusMessage: 'Certificaciones al día',
  },
  {
    id: 'P-005',
    name: 'Pedro Gómez',
    role: 'Operario Civil',
    status: 'critical',
    statusMessage: 'Falta curso trabajo en alturas',
  },
  {
    id: 'P-006',
    name: 'Luis Martínez',
    role: 'Soldador Certificado',
    status: 'compliant',
    statusMessage: 'Certificaciones al día',
  },
  {
    id: 'P-007',
    name: 'Carmen Silva',
    role: 'Operaria Montaje',
    status: 'compliant',
    statusMessage: 'Certificaciones al día',
  },
  {
    id: 'P-008',
    name: 'Roberto Torres',
    role: 'Operario Civil',
    status: 'compliant',
    statusMessage: 'Certificaciones al día',
  },
  {
    id: 'P-009',
    name: 'Diana Ruiz',
    role: 'Coordinadora SST',
    status: 'compliant',
    statusMessage: 'Certificaciones al día',
  },
  {
    id: 'P-010',
    name: 'Alberto Castro',
    role: 'Operario Eléctrico',
    status: 'compliant',
    statusMessage: 'Certificaciones al día',
  },
  {
    id: 'P-011',
    name: 'Sofía Morales',
    role: 'Operaria Montaje',
    status: 'warning',
    statusMessage: 'ARL pendiente renovación',
  },
  {
    id: 'P-012',
    name: 'Andrés Vargas',
    role: 'Operador Maquinaria',
    status: 'compliant',
    statusMessage: 'Certificaciones al día',
  },
];

const MOCK_MACHINERY: Machinery[] = [
  {
    id: 'M-001',
    type: 'Retroexcavadora',
    identifier: 'RE-ANT-001',
    status: 'operational',
    operator: 'Andrés Vargas',
  },
  {
    id: 'M-002',
    type: 'Retroexcavadora',
    identifier: 'RE-ANT-002',
    status: 'operational',
    operator: 'Pedro Gómez',
  },
  {
    id: 'M-003',
    type: 'Vibrocompactador',
    identifier: 'VC-ANT-001',
    status: 'maintenance',
    operator: undefined,
  },
];

const MOCK_TASKS: Task[] = [
  {
    id: 'T-001',
    title: 'Replanteo Topográfico Sector Norte',
    category: 'Civil',
    priority: 'high',
    status: 'in-progress',
    assignee: 'María Fernández',
    dueDate: 'Hoy',
    tags: ['Civil', 'Crítico'],
  },
  {
    id: 'T-002',
    title: 'Excavación Zanja Norte',
    category: 'Civil',
    priority: 'critical',
    status: 'in-progress',
    assignee: 'Carlos Ruiz',
    dueDate: 'Hoy',
    tags: ['Civil', 'Crítico'],
  },
  {
    id: 'T-003',
    title: 'Instalación Cerramiento Oeste',
    category: 'Civil',
    priority: 'medium',
    status: 'in-progress',
    assignee: 'Jorge Ramírez',
    dueDate: 'Mañana',
    tags: ['Civil'],
  },
  {
    id: 'T-004',
    title: 'Fundaciones Torre Principal',
    category: 'Estructuras',
    priority: 'high',
    status: 'blocked',
    assignee: 'Ana López',
    dueDate: '18 Feb',
    tags: ['Estructuras', 'Bloqueado'],
  },
  {
    id: 'T-005',
    title: 'Verificación Compactación Suelo',
    category: 'Civil',
    priority: 'low',
    status: 'backlog',
    assignee: 'Roberto Torres',
    dueDate: '20 Feb',
    tags: ['Civil'],
  },
  {
    id: 'T-006',
    title: 'Instalación Drenaje Perimetral',
    category: 'Civil',
    priority: 'medium',
    status: 'backlog',
    assignee: 'Luis Martínez',
    dueDate: '22 Feb',
    tags: ['Civil'],
  },
  {
    id: 'T-007',
    title: 'Excavación Zanja Sur - Completada',
    category: 'Civil',
    priority: 'high',
    status: 'completed',
    assignee: 'Carlos Ruiz',
    dueDate: '14 Feb',
    tags: ['Civil'],
  },
  {
    id: 'T-008',
    title: 'Limpieza y Nivelación Terreno',
    category: 'Civil',
    priority: 'medium',
    status: 'completed',
    assignee: 'Pedro Gómez',
    dueDate: '12 Feb',
    tags: ['Civil'],
  },
];

export default function AdminProjectExecutionDashboard() {
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();
  const [tasks] = useState<Task[]>(MOCK_TASKS);

  // Calculate metrics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.status === 'completed').length;
  const progressPercentage = Math.round((completedTasks / totalTasks) * 100);
  const sstAlerts = MOCK_PERSONNEL.filter((p) => p.status === 'critical').length;

  // Group tasks by status
  const tasksByStatus = {
    backlog: tasks.filter((t) => t.status === 'backlog'),
    'in-progress': tasks.filter((t) => t.status === 'in-progress'),
    blocked: tasks.filter((t) => t.status === 'blocked'),
    completed: tasks.filter((t) => t.status === 'completed'),
  };

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
        {/* CONTEXT HEADER (Sticky) */}
        <div
          className="sticky top-0 z-10"
          style={{
            backgroundColor: '#050505',
            borderBottom: '1px solid #222222',
          }}
        >
          {/* Breadcrumbs */}
          <div
            className="px-8 py-3"
            style={{
              borderBottom: '0.5px solid #1A1A1A',
            }}
          >
            <div className="flex items-center gap-2">
              <span
                style={{
                  color: '#606060',
                  fontSize: '11px',
                }}
              >
                Perfil: Construcciones SAS
              </span>
              <ChevronRight style={{ width: '12px', height: '12px', color: '#333333' }} />
              <span
                style={{
                  color: '#606060',
                  fontSize: '11px',
                }}
              >
                Proyectos Activos
              </span>
              <ChevronRight style={{ width: '12px', height: '12px', color: '#333333' }} />
              <span
                style={{
                  color: '#1D99CC',
                  fontSize: '11px',
                  fontWeight: '600',
                }}
              >
                MGS Antioquia 02
              </span>
            </div>
          </div>

          {/* Title and Metrics */}
          <div className="px-8 py-5">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1
                  style={{
                    color: '#FFFFFF',
                    fontSize: '22px',
                    fontWeight: '700',
                    marginBottom: '8px',
                  }}
                >
                  Dashboard de Obra: MGS Antioquia 02
                </h1>
                <div
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    color: '#808080',
                  }}
                >
                  Fase: Obra Civil | Construcciones Eléctricas SAS
                </div>
              </div>

              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-4 py-2 rounded transition-all"
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
                <ChevronLeft style={{ width: '14px', height: '14px' }} />
                Volver al Resumen del Partner
              </button>
            </div>

            {/* Global Metrics */}
            <div className="flex items-center gap-8">
              {/* Progress */}
              <div className="flex-1" style={{ maxWidth: '400px' }}>
                <div className="flex items-center justify-between mb-2">
                  <span
                    style={{
                      color: '#B0B0B0',
                      fontSize: '11px',
                      fontWeight: '600',
                    }}
                  >
                    Progreso Civil
                  </span>
                  <span
                    style={{
                      color: '#1D99CC',
                      fontSize: '16px',
                      fontWeight: '700',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {progressPercentage}%
                  </span>
                </div>
                <div
                  className="rounded-full overflow-hidden"
                  style={{
                    height: '8px',
                    backgroundColor: '#1A1A1A',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${progressPercentage}%`,
                      backgroundColor: '#1D99CC',
                    }}
                  />
                </div>
              </div>

              {/* SST Alerts */}
              <div
                className="px-5 py-3 rounded"
                style={{
                  backgroundColor: sstAlerts > 0 ? 'rgba(255, 82, 82, 0.1)' : 'rgba(0, 200, 83, 0.1)',
                  border: `1px solid ${sstAlerts > 0 ? '#FF5252' : '#00C853'}`,
                }}
              >
                <div className="flex items-center gap-3">
                  {sstAlerts > 0 ? (
                    <AlertCircle style={{ width: '18px', height: '18px', color: '#FF5252' }} />
                  ) : (
                    <CheckCircle2 style={{ width: '18px', height: '18px', color: '#00C853' }} />
                  )}
                  <div>
                    <div
                      style={{
                        color: '#808080',
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        marginBottom: '2px',
                      }}
                    >
                      Alertas SST
                    </div>
                    <div
                      style={{
                        color: sstAlerts > 0 ? '#FF5252' : '#00C853',
                        fontSize: '20px',
                        fontWeight: '700',
                        fontFamily: 'JetBrains Mono, monospace',
                        lineHeight: '1',
                      }}
                    >
                      {sstAlerts}
                    </div>
                  </div>
                </div>
              </div>

              {/* Task Stats */}
              <div
                className="px-5 py-3 rounded"
                style={{
                  backgroundColor: '#0A0A0A',
                  border: '1px solid #222222',
                }}
              >
                <div
                  style={{
                    color: '#808080',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}
                >
                  Tareas
                </div>
                <div
                  style={{
                    color: '#E0E0E0',
                    fontSize: '16px',
                    fontWeight: '700',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {completedTasks}/{totalTasks}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="flex">
          {/* LEFT COLUMN: THE SQUAD (35%) */}
          <div
            style={{
              width: '35%',
              minWidth: '380px',
              backgroundColor: '#0A0A0A',
              borderRight: '1px solid #222222',
              padding: '24px',
              height: 'calc(100vh - 240px)',
              overflowY: 'auto',
            }}
          >
            {/* Personnel Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Users style={{ width: '16px', height: '16px', color: '#1D99CC' }} />
                <h3
                  style={{
                    color: '#E0E0E0',
                    fontSize: '14px',
                    fontWeight: '700',
                  }}
                >
                  Cuadrilla Asignada ({MOCK_PERSONNEL.length})
                </h3>
              </div>

              <div className="space-y-2">
                {MOCK_PERSONNEL.map((person) => (
                  <PersonnelCard key={person.id} person={person} />
                ))}
              </div>
            </div>

            {/* Machinery Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Truck style={{ width: '16px', height: '16px', color: '#1D99CC' }} />
                <h3
                  style={{
                    color: '#E0E0E0',
                    fontSize: '14px',
                    fontWeight: '700',
                  }}
                >
                  Maquinaria en Sitio ({MOCK_MACHINERY.length})
                </h3>
              </div>

              <div className="space-y-2">
                {MOCK_MACHINERY.map((machine) => (
                  <MachineryCard key={machine.id} machine={machine} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE KANBAN BOARD (65%) */}
          <div
            className="flex-1"
            style={{
              padding: '24px',
              maxHeight: 'calc(100vh - 240px)',
              overflowY: 'auto',
            }}
          >
            <h3
              style={{
                color: '#E0E0E0',
                fontSize: '14px',
                fontWeight: '700',
                marginBottom: '16px',
              }}
            >
              Cronograma y Ejecución
            </h3>

            {/* Kanban Board */}
            <div className="grid grid-cols-4 gap-4">
              <KanbanColumn
                title="Pendiente"
                count={tasksByStatus.backlog.length}
                tasks={tasksByStatus.backlog}
                color="#606060"
              />
              <KanbanColumn
                title="En Progreso"
                count={tasksByStatus['in-progress'].length}
                tasks={tasksByStatus['in-progress']}
                color="#1D99CC"
                highlight
              />
              <KanbanColumn
                title="Bloqueado"
                count={tasksByStatus.blocked.length}
                tasks={tasksByStatus.blocked}
                color="#FF9800"
              />
              <KanbanColumn
                title="Completado"
                count={tasksByStatus.completed.length}
                tasks={tasksByStatus.completed}
                color="#00C853"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== PERSONNEL CARD =====
function PersonnelCard({ person }: { person: Personnel }) {
  const getStatusConfig = () => {
    switch (person.status) {
      case 'compliant':
        return { color: '#00C853', icon: CheckCircle2 };
      case 'warning':
        return { color: '#FF9800', icon: AlertCircle };
      case 'critical':
        return { color: '#FF5252', icon: AlertCircle };
    }
  };

  const statusConfig = getStatusConfig();
  const StatusIcon = statusConfig.icon;

  return (
    <div
      className="p-3 rounded transition-all"
      style={{
        backgroundColor: '#121212',
        border: '1px solid #222222',
      }}
    >
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div
          className="flex items-center justify-center flex-shrink-0"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#1D99CC',
            color: '#FFFFFF',
            fontSize: '12px',
            fontWeight: '700',
          }}
        >
          {person.name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div
            style={{
              color: '#E0E0E0',
              fontSize: '12px',
              fontWeight: '600',
              marginBottom: '2px',
            }}
          >
            {person.name}
          </div>
          <div
            style={{
              color: '#808080',
              fontSize: '10px',
              marginBottom: '4px',
            }}
          >
            {person.role}
          </div>
          <div className="flex items-center gap-1.5">
            <StatusIcon style={{ width: '11px', height: '11px', color: statusConfig.color }} />
            <span
              style={{
                color: statusConfig.color,
                fontSize: '10px',
              }}
            >
              {person.statusMessage}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== MACHINERY CARD =====
function MachineryCard({ machine }: { machine: Machinery }) {
  const getStatusConfig = () => {
    switch (machine.status) {
      case 'operational':
        return { color: '#00C853', label: 'Operacional' };
      case 'maintenance':
        return { color: '#FF9800', label: 'Mantenimiento' };
      case 'inactive':
        return { color: '#606060', label: 'Inactivo' };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <div
      className="p-3 rounded"
      style={{
        backgroundColor: '#121212',
        border: '1px solid #222222',
      }}
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <div
            style={{
              color: '#E0E0E0',
              fontSize: '12px',
              fontWeight: '600',
              marginBottom: '2px',
            }}
          >
            {machine.type}
          </div>
          <div
            style={{
              color: '#808080',
              fontSize: '10px',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {machine.identifier}
          </div>
        </div>
        <div
          className="px-2 py-1 rounded"
          style={{
            backgroundColor: `${statusConfig.color}15`,
            border: `0.5px solid ${statusConfig.color}`,
          }}
        >
          <span
            style={{
              color: statusConfig.color,
              fontSize: '9px',
              fontWeight: '700',
              textTransform: 'uppercase',
            }}
          >
            {statusConfig.label}
          </span>
        </div>
      </div>

      {machine.operator && (
        <div
          style={{
            color: '#606060',
            fontSize: '10px',
          }}
        >
          Operador: {machine.operator}
        </div>
      )}
    </div>
  );
}

// ===== KANBAN COLUMN =====
function KanbanColumn({
  title,
  count,
  tasks,
  color,
  highlight,
}: {
  title: string;
  count: number;
  tasks: Task[];
  color: string;
  highlight?: boolean;
}) {
  return (
    <div>
      {/* Column Header */}
      <div
        className="px-3 py-2 rounded mb-3"
        style={{
          backgroundColor: highlight ? `${color}10` : '#0A0A0A',
          border: `1px solid ${highlight ? color : '#222222'}`,
        }}
      >
        <div className="flex items-center justify-between">
          <span
            style={{
              color: highlight ? color : '#B0B0B0',
              fontSize: '11px',
              fontWeight: '700',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </span>
          <span
            style={{
              color: '#606060',
              fontSize: '11px',
              fontWeight: '700',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {count}
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

// ===== TASK CARD =====
function TaskCard({ task }: { task: Task }) {
  const [isHovered, setIsHovered] = useState(false);

  const getPriorityColor = () => {
    switch (task.priority) {
      case 'critical':
        return '#FF5252';
      case 'high':
        return '#FF9800';
      case 'medium':
        return '#1D99CC';
      case 'low':
        return '#606060';
    }
  };

  const isDueToday = task.dueDate === 'Hoy';
  const priorityColor = getPriorityColor();

  return (
    <div
      className="p-3 rounded transition-all cursor-pointer"
      style={{
        backgroundColor: '#121212',
        border: `1px solid ${isHovered ? '#1D99CC' : '#333333'}`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Title */}
      <div
        style={{
          color: '#E0E0E0',
          fontSize: '12px',
          fontWeight: '600',
          marginBottom: '8px',
          lineHeight: '1.4',
        }}
      >
        {task.title}
      </div>

      {/* Tags */}
      <div className="flex items-center gap-2 mb-3">
        {task.tags.map((tag) => {
          const isBlocked = tag === 'Bloqueado';
          const isCritical = tag === 'Crítico';
          const tagColor = isBlocked ? '#FF9800' : isCritical ? '#FF5252' : '#606060';

          return (
            <div
              key={tag}
              className="px-2 py-0.5 rounded"
              style={{
                backgroundColor: `${tagColor}15`,
                border: `0.5px solid ${tagColor}`,
              }}
            >
              <span
                style={{
                  color: tagColor,
                  fontSize: '9px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                }}
              >
                {tag}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Assignee */}
        <div
          className="flex items-center justify-center"
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#1D99CC',
            color: '#FFFFFF',
            fontSize: '9px',
            fontWeight: '700',
          }}
        >
          {task.assignee
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()}
        </div>

        {/* Due Date */}
        <div className="flex items-center gap-1.5">
          <Clock style={{ width: '11px', height: '11px', color: isDueToday ? '#FF9800' : '#606060' }} />
          <span
            style={{
              color: isDueToday ? '#FF9800' : '#606060',
              fontSize: '10px',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: isDueToday ? '700' : '500',
            }}
          >
            {task.dueDate}
          </span>
        </div>
      </div>
    </div>
  );
}