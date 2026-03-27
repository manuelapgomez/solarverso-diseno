import { useState } from 'react';
import { AdminSidebar } from '../components/AdminSidebar';
import {
  ChevronLeft,
  ChevronRight,
  Users,
  CheckSquare,
  FileText,
  Clock,
  AlertCircle,
  CheckCircle2,
  Eye,
  MessageSquare,
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router';

type TabType = 'personal' | 'tareas';
type TaskStatus = 'pendiente' | 'en-progreso' | 'bloqueado' | 'completado';
type TaskPriority = 'baja' | 'media' | 'alta';
type PersonnelStatus = 'activo' | 'descanso' | 'curso-vencido';

interface Personnel {
  id: string;
  name: string;
  role: string;
  turno: string;
  status: PersonnelStatus;
  avatar?: string;
}

interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee: string;
  dueDate: string;
}

const MOCK_PERSONNEL: Personnel[] = [
  { id: 'P-001', name: 'Carlos Mendoza', role: 'Líder Cuadrilla', turno: 'Mañana', status: 'activo' },
  { id: 'P-002', name: 'Ana María López', role: 'Operario Excavación', turno: 'Mañana', status: 'activo' },
  { id: 'P-003', name: 'Jorge Ramírez', role: 'Operario Compactación', turno: 'Tarde', status: 'activo' },
  { id: 'P-004', name: 'María Fernández', role: 'Residente SST', turno: 'Mañana', status: 'activo' },
  { id: 'P-005', name: 'Pedro Gómez', role: 'Operario Cerramiento', turno: 'Tarde', status: 'descanso' },
  { id: 'P-006', name: 'Luis Martínez', role: 'Topógrafo', turno: 'Mañana', status: 'activo' },
  { id: 'P-007', name: 'Diana Torres', role: 'Operaria Montaje', turno: 'Mañana', status: 'activo' },
  { id: 'P-008', name: 'Roberto Silva', role: 'Soldador Certificado', turno: 'Tarde', status: 'activo' },
  { id: 'P-009', name: 'Carmen Ruiz', role: 'Electricista', turno: 'Mañana', status: 'activo' },
  { id: 'P-010', name: 'Alberto Castro', role: 'Operario Civil', turno: 'Tarde', status: 'activo' },
  { id: 'P-011', name: 'Sofía Morales', role: 'Operaria Estructuras', turno: 'Mañana', status: 'curso-vencido' },
  { id: 'P-012', name: 'Andrés Vargas', role: 'Operador Maquinaria', turno: 'Tarde', status: 'activo' },
];

const MOCK_TASKS: Task[] = [
  // Pendiente (1)
  { id: 'T-001', title: 'Instalación de Fundaciones', status: 'pendiente', priority: 'media', assignee: 'Ana María López', dueDate: '23 Dic 2026' },
  
  // En Progreso (3)
  { id: 'T-002', title: 'Excavación Zanja 1', status: 'en-progreso', priority: 'alta', assignee: 'Ana María López', dueDate: '18 Dic 2026' },
  { id: 'T-003', title: 'Compactación Base Granular', status: 'en-progreso', priority: 'media', assignee: 'Jorge Ramírez', dueDate: '18 Dic 2026' },
  { id: 'T-004', title: 'Construcción Vía Acceso Principal', status: 'en-progreso', priority: 'alta', assignee: 'Carlos Mendoza', dueDate: '21 Dic 2026' },
  
  // Bloqueado (1)
  { id: 'T-005', title: 'Instalación Cerramiento Sector Norte', status: 'bloqueado', priority: 'alta', assignee: 'Pedro Gómez', dueDate: '20 Dic 2026' },
  
  // Completado (1)
  { id: 'T-006', title: 'Levantamiento Topográfico', status: 'completado', priority: 'baja', assignee: 'Luis Martínez', dueDate: '16 Dic 2026' },
];

export default function AdminProjectDetailWorkspace() {
  const navigate = useNavigate();
  const { partnerId, projectId } = useParams<{ partnerId: string; projectId: string }>();
  const [activeTab, setActiveTab] = useState<TabType>('tareas');

  // Project data
  const projectName = 'Montaje Eléctrico Antioquia II';
  const mgsId = 'MGS-ANT-02';
  const completionPercentage = 65;
  const milestonesCompleted = 12;
  const milestonesTotal = 18;

  // Task stats
  const tasksByStatus = {
    pendiente: MOCK_TASKS.filter((t) => t.status === 'pendiente'),
    'en-progreso': MOCK_TASKS.filter((t) => t.status === 'en-progreso'),
    bloqueado: MOCK_TASKS.filter((t) => t.status === 'bloqueado'),
    completado: MOCK_TASKS.filter((t) => t.status === 'completado'),
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
          backgroundColor: '#050505',
        }}
      >
        {/* PROJECT CONTEXT HEADER */}
        <div
          className="sticky top-0 z-10"
          style={{
            backgroundColor: '#050505',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Breadcrumb */}
          <div
            className="px-8 py-4"
            style={{
              borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate(`/admin/partners/${partnerId}`)}
                className="flex items-center gap-2 transition-colors"
                style={{
                  color: '#606060',
                  fontSize: '11px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#1D99CC';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#606060';
                }}
              >
                <ChevronLeft style={{ width: '12px', height: '12px' }} />
                Volver a Proyectos
              </button>
            </div>
          </div>

          {/* Title and Metrics */}
          <div className="px-8 py-4">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1
                  style={{
                    color: '#FFFFFF',
                    fontSize: '22px',
                    fontWeight: '700',
                    marginBottom: '6px',
                  }}
                >
                  Control Operativo: {projectName}
                </h1>
                <div
                  style={{
                    color: '#2E7D32',
                    fontSize: '13px',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: '700',
                  }}
                >
                  {mgsId}
                </div>
              </div>

              {/* Status Badge */}
              <div
                className="px-3 py-1.5 rounded"
                style={{
                  backgroundColor: 'rgba(0, 200, 83, 0.15)',
                  border: '1px solid #00C853',
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#00C853',
                    }}
                  />
                  <span
                    style={{
                      color: '#00C853',
                      fontSize: '11px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                    }}
                  >
                    En Ejecución
                  </span>
                </div>
              </div>
            </div>

            {/* Primary Metrics */}
            <div className="flex items-center gap-6 mb-4">
              {/* Completion Bar */}
              <div style={{ width: '300px' }}>
                <div className="flex items-center justify-between mb-2">
                  <span
                    style={{
                      color: '#B0B0B0',
                      fontSize: '11px',
                      fontWeight: '600',
                    }}
                  >
                    Progreso General
                  </span>
                  <span
                    style={{
                      color: '#1D99CC',
                      fontSize: '14px',
                      fontWeight: '700',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {completionPercentage}%
                  </span>
                </div>
                <div
                  className="rounded-full overflow-hidden"
                  style={{
                    height: '6px',
                    backgroundColor: '#1A1A1A',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${completionPercentage}%`,
                      backgroundColor: '#1D99CC',
                    }}
                  />
                </div>
              </div>

              {/* Milestones */}
              <div
                className="px-4 py-2 rounded"
                style={{
                  backgroundColor: '#0A0A0A',
                  border: '1px solid #333333',
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    style={{
                      color: '#808080',
                      fontSize: '11px',
                    }}
                  >
                    Hitos:
                  </span>
                  <span
                    style={{
                      color: '#1D99CC',
                      fontSize: '14px',
                      fontWeight: '700',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {milestonesCompleted}/{milestonesTotal}
                  </span>
                </div>
              </div>
            </div>

            {/* TABS (The Switch) */}
            <div className="flex items-center gap-2">
              <TabButton
                icon={Users}
                label="Personal Interno"
                count={MOCK_PERSONNEL.length}
                isActive={activeTab === 'personal'}
                onClick={() => setActiveTab('personal')}
              />
              <TabButton
                icon={CheckSquare}
                label="Gestión de Tareas (Kanban)"
                count={MOCK_TASKS.length}
                isActive={activeTab === 'tareas'}
                onClick={() => setActiveTab('tareas')}
              />
              <TabButton
                icon={FileText}
                label="Documentos MGS"
                count={0}
                isActive={false}
                onClick={() => {}}
                disabled
              />
            </div>
          </div>
        </div>

        {/* TAB CONTENT */}
        <div
          className="px-8 py-6"
          style={{
            height: 'calc(100vh - 280px)',
            overflowY: 'auto',
          }}
        >
          {activeTab === 'personal' && <PersonalInternoTab personnel={MOCK_PERSONNEL} />}
          {activeTab === 'tareas' && <GestionTareasTab tasks={tasksByStatus} />}
        </div>
      </div>
    </div>
  );
}

// ===== TAB BUTTON =====
interface TabButtonProps {
  icon: React.ElementType;
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
  disabled?: boolean;
}

function TabButton({ icon: Icon, label, count, isActive, onClick, disabled }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-2 px-4 py-2 rounded-t transition-all relative"
      style={{
        backgroundColor: isActive ? '#0A0A0A' : 'transparent',
        border: isActive ? '1px solid #333333' : '1px solid transparent',
        borderBottom: isActive ? '1px solid #0A0A0A' : '1px solid transparent',
        color: isActive ? '#1D99CC' : '#606060',
        fontSize: '11px',
        fontWeight: '700',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
      onMouseEnter={(e) => {
        if (!disabled && !isActive) {
          e.currentTarget.style.color = '#808080';
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.color = '#606060';
        }
      }}
    >
      <Icon style={{ width: '14px', height: '14px' }} />
      <span>{label}</span>
      {count > 0 && (
        <span
          className="px-1.5 py-0.5 rounded"
          style={{
            backgroundColor: isActive ? '#1D99CC' : '#333333',
            color: isActive ? '#000000' : '#808080',
            fontSize: '10px',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: '700',
          }}
        >
          {count}
        </span>
      )}

      {/* Active Indicator */}
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

// ===== TAB A: PERSONAL INTERNO =====
function PersonalInternoTab({ personnel }: { personnel: Personnel[] }) {
  return (
    <div>
      <div
        style={{
          color: '#808080',
          fontSize: '11px',
          marginBottom: '16px',
        }}
      >
        {personnel.length} personas asignadas a este proyecto
      </div>

      {/* HIGH-DENSITY TABLE */}
      <div
        className="rounded"
        style={{
          backgroundColor: '#1A1A1A',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          overflow: 'hidden',
        }}
      >
        {/* Table Header */}
        <div
          className="grid grid-cols-12 gap-4 px-4 py-3"
          style={{
            backgroundColor: '#121212',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div className="col-span-3">
            <span
              style={{
                color: '#606060',
                fontSize: '10px',
                fontWeight: '400',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Nombre
            </span>
          </div>
          <div className="col-span-3">
            <span
              style={{
                color: '#606060',
                fontSize: '10px',
                fontWeight: '400',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Rol
            </span>
          </div>
          <div className="col-span-2">
            <span
              style={{
                color: '#606060',
                fontSize: '10px',
                fontWeight: '400',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Turno
            </span>
          </div>
          <div className="col-span-2">
            <span
              style={{
                color: '#606060',
                fontSize: '10px',
                fontWeight: '400',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Estado
            </span>
          </div>
          <div className="col-span-2">
            <span
              style={{
                color: '#606060',
                fontSize: '10px',
                fontWeight: '400',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Acciones
            </span>
          </div>
        </div>

        {/* Table Body */}
        <div>
          {personnel.map((person, index) => (
            <PersonnelRow key={person.id} person={person} isEven={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PersonnelRow({ person, isEven }: { person: Personnel; isEven: boolean }) {
  const getStatusConfig = () => {
    switch (person.status) {
      case 'activo':
        return { color: '#00C853', label: 'Activo' };
      case 'descanso':
        return { color: '#606060', label: 'Descanso' };
      case 'curso-vencido':
        return { color: '#FF5252', label: 'Curso Vencido' };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <div
      className="grid grid-cols-12 gap-4 px-4 py-3"
      style={{
        backgroundColor: 'transparent',
        borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
      }}
    >
      {/* Name */}
      <div className="col-span-3">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: '#1D99CC',
              color: '#FFFFFF',
              fontSize: '10px',
              fontWeight: '700',
            }}
          >
            {person.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()}
          </div>

          <span
            style={{
              color: '#B0B0B0',
              fontSize: '12px',
            }}
          >
            {person.name}
          </span>
        </div>
      </div>

      {/* Role */}
      <div className="col-span-3 flex items-center">
        <span
          style={{
            color: '#808080',
            fontSize: '11px',
          }}
        >
          {person.role}
        </span>
      </div>

      {/* Turno */}
      <div className="col-span-2 flex items-center">
        <span
          style={{
            color: '#808080',
            fontSize: '11px',
          }}
        >
          {person.turno}
        </span>
      </div>

      {/* Status */}
      <div className="col-span-2 flex items-center">
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
              fontSize: '10px',
              fontWeight: '600',
            }}
          >
            {statusConfig.label}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="col-span-2 flex items-center">
        <button
          className="flex items-center gap-1.5 px-2 py-1 rounded transition-all"
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #333333',
            color: '#808080',
            fontSize: '10px',
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
          <Eye style={{ width: '11px', height: '11px' }} />
          Ver Docs
        </button>
      </div>
    </div>
  );
}

// ===== TAB B: GESTIÓN DE TAREAS (KANBAN) =====
function GestionTareasTab({
  tasks,
}: {
  tasks: {
    pendiente: Task[];
    'en-progreso': Task[];
    bloqueado: Task[];
    completado: Task[];
  };
}) {
  return (
    <div>
      <div
        style={{
          color: '#808080',
          fontSize: '11px',
          marginBottom: '16px',
        }}
      >
        {Object.values(tasks).flat().length} tareas totales
      </div>

      {/* KANBAN BOARD */}
      <div className="grid grid-cols-4 gap-4">
        <KanbanColumn
          title="Pendiente"
          count={tasks.pendiente.length}
          tasks={tasks.pendiente}
          color="#606060"
        />
        <KanbanColumn
          title="En Progreso"
          count={tasks['en-progreso'].length}
          tasks={tasks['en-progreso']}
          color="#1D99CC"
          highlight
        />
        <KanbanColumn
          title="Bloqueado"
          count={tasks.bloqueado.length}
          tasks={tasks.bloqueado}
          color="#FF5252"
        />
        <KanbanColumn
          title="Completado"
          count={tasks.completado.length}
          tasks={tasks.completado}
          color="#00C853"
        />
      </div>
    </div>
  );
}

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
          border: `1px solid ${highlight ? color : '#333333'}`,
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

      {/* Task Cards */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

function TaskCard({ task }: { task: Task }) {
  const [isHovered, setIsHovered] = useState(false);

  const getPriorityConfig = () => {
    switch (task.priority) {
      case 'alta':
        return { color: '#FF5252', label: 'ALTA' };
      case 'media':
        return { color: '#FF9800', label: 'MEDIA' };
      case 'baja':
        return { color: '#1D99CC', label: 'BAJA' };
    }
  };

  const priorityConfig = getPriorityConfig();

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
      {/* Priority Badge */}
      <div className="mb-2">
        <div
          className="inline-block px-2 py-0.5 rounded"
          style={{
            backgroundColor: `${priorityConfig.color}15`,
            border: `0.5px solid ${priorityConfig.color}`,
          }}
        >
          <span
            style={{
              color: priorityConfig.color,
              fontSize: '9px',
              fontWeight: '700',
            }}
          >
            {priorityConfig.label}
          </span>
        </div>
      </div>

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

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Assignee */}
        <div className="flex items-center gap-2">
          <div
            className="flex items-center justify-center"
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              backgroundColor: '#1D99CC',
              color: '#FFFFFF',
              fontSize: '8px',
              fontWeight: '700',
            }}
          >
            {task.assignee
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()}
          </div>
          <span
            style={{
              color: '#606060',
              fontSize: '9px',
            }}
          >
            {task.assignee.split(' ')[0]}
          </span>
        </div>

        {/* Due Date */}
        <div className="flex items-center gap-1">
          <Clock style={{ width: '10px', height: '10px', color: '#606060' }} />
          <span
            style={{
              color: '#606060',
              fontSize: '9px',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {task.dueDate}
          </span>
        </div>
      </div>

      {/* Admin Action (visible on hover) */}
      {isHovered && (
        <div className="mt-3 pt-3" style={{ borderTop: '1px solid #222222' }}>
          <button
            className="w-full flex items-center justify-center gap-2 px-2 py-1.5 rounded transition-all"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #1D99CC',
              color: '#1D99CC',
              fontSize: '9px',
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
            <MessageSquare style={{ width: '10px', height: '10px' }} />
            Comentario de Auditoría
          </button>
        </div>
      )}
    </div>
  );
}