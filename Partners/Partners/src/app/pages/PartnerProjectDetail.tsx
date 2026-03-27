import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { UnifiedPartnerSidebar } from '../components/UnifiedPartnerSidebar';
import { 
  ChevronLeft, 
  Users, 
  CheckSquare, 
  FileText,
  Calendar,
  AlertTriangle
} from 'lucide-react';

// ===== TYPES =====
type TabType = 'personal' | 'tareas' | 'documentos';

interface PersonalData {
  id: string;
  nombre: string;
  rol: string;
  turno: string;
  estado: 'activo' | 'descanso';
}

interface Tarea {
  id: string;
  prioridad: 'BAJA' | 'MEDIA' | 'ALTA';
  titulo: string;
  responsable: string;
  fecha: string;
  status: 'pendiente' | 'en_progreso' | 'bloqueado' | 'completado';
}

// ===== MOCK DATA =====
const PERSONAL_MOCK: PersonalData[] = [
  {
    id: '1',
    nombre: 'Carlos Mendoza',
    rol: 'Líder Cuadrilla',
    turno: 'Mañana',
    estado: 'activo',
  },
  {
    id: '2',
    nombre: 'Ana María López',
    rol: 'Operario Excavación',
    turno: 'Mañana',
    estado: 'activo',
  },
  {
    id: '3',
    nombre: 'Jorge Ramirez',
    rol: 'Operario Compactación',
    turno: 'Tarde',
    estado: 'activo',
  },
  {
    id: '4',
    nombre: 'María Fernández',
    rol: 'Residente SST',
    turno: 'Mañana',
    estado: 'activo',
  },
  {
    id: '5',
    nombre: 'Pedro Gómez',
    rol: 'Operario Cerramiento',
    turno: 'Tarde',
    estado: 'descanso',
  },
  {
    id: '6',
    nombre: 'Luis Martínez',
    rol: 'Topógrafo',
    turno: 'Mañana',
    estado: 'activo',
  },
];

const TAREAS_MOCK: Tarea[] = [
  {
    id: 'T1',
    prioridad: 'MEDIA',
    titulo: 'Instalación de Fundaciones',
    responsable: 'Ana María López',
    fecha: '22 Dic 2026',
    status: 'pendiente',
  },
  {
    id: 'T2',
    prioridad: 'ALTA',
    titulo: 'Excavación Zanja 1',
    responsable: 'Ana María López',
    fecha: '18 Dic 2026',
    status: 'en_progreso',
  },
  {
    id: 'T3',
    prioridad: 'MEDIA',
    titulo: 'Compactación Base Granular',
    responsable: 'Jorge Ramirez',
    fecha: '18 Dic 2026',
    status: 'en_progreso',
  },
  {
    id: 'T4',
    prioridad: 'ALTA',
    titulo: 'Construcción Vía Acceso Principal',
    responsable: 'Carlos Mendoza',
    fecha: '21 Dic 2026',
    status: 'en_progreso',
  },
  {
    id: 'T5',
    prioridad: 'ALTA',
    titulo: 'Instalación Cerramiento Sector Norte',
    responsable: 'Pedro Gómez',
    fecha: '20 Dic 2026',
    status: 'bloqueado',
  },
  {
    id: 'T6',
    prioridad: 'BAJA',
    titulo: 'Levantamiento Topográfico',
    responsable: 'Luis Martínez',
    fecha: '16 Dic 2026',
    status: 'completado',
  },
];

const PROJECT_DATA = {
  'PRJ-001': {
    mgsId: 'MGS-ANT-02',
    title: 'Montaje Eléctrico Antioquia II',
    status: 'En Ejecución',
  },
  'PRJ-002': {
    mgsId: 'MGS-CUN-05',
    title: 'Obra Civil Cundinamarca V',
    status: 'En Ejecución',
  },
  'PRJ-003': {
    mgsId: 'MGS-CAL-01',
    title: 'Instalación Paneles Caldas I',
    status: 'En Ejecución',
  },
  'PRJ-004': {
    mgsId: 'MGS-SAN-01',
    title: 'Estructuras Metálicas Santander I',
    status: 'En Ejecución',
  },
};

export default function PartnerProjectDetail() {
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = useState<TabType>('personal');

  const project = PROJECT_DATA[projectId as keyof typeof PROJECT_DATA] || PROJECT_DATA['PRJ-001'];

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: '#050505',
      }}
    >
      <UnifiedPartnerSidebar />

      <div
        className="flex-1 flex flex-col"
        style={{
          marginLeft: '240px',
        }}
      >
        {/* HEADER */}
        <div className="px-8 py-6">
          {/* Back Button */}
          <Link
            to="/partner/proyectos"
            className="inline-flex items-center gap-2 px-4 py-2 rounded mb-6 transition-all"
            style={{
              border: '0.5px solid rgba(255, 255, 255, 0.05)',
              color: '#808080',
              fontSize: '11px',
              fontWeight: '600',
            }}
          >
            <ChevronLeft style={{ width: '14px', height: '14px' }} />
            Volver a Proyectos
          </Link>

          {/* Project Title & Status */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1
                style={{
                  color: '#FFFFFF',
                  fontSize: '18px',
                  fontWeight: '600',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '6px',
                }}
              >
                {project.title}
              </h1>
              <div
                style={{
                  color: '#2E7D32',
                  fontSize: '12px',
                  fontWeight: '600',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {project.mgsId}
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: '7.5px',
                  height: '7.5px',
                  borderRadius: '50%',
                  backgroundColor: '#00C853',
                }}
              />
              <span
                style={{
                  color: '#B0B0B0',
                  fontSize: '12px',
                }}
              >
                {project.status}
              </span>
            </div>
          </div>

          {/* TABS */}
          <div
            className="flex items-center gap-0"
            style={{
              borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <TabButton
              icon={<Users style={{ width: '16px', height: '16px' }} />}
              label="Personal Asociado"
              isActive={activeTab === 'personal'}
              onClick={() => setActiveTab('personal')}
            />
            <TabButton
              icon={<CheckSquare style={{ width: '16px', height: '16px' }} />}
              label="Tareas"
              isActive={activeTab === 'tareas'}
              onClick={() => setActiveTab('tareas')}
            />
            <TabButton
              icon={<FileText style={{ width: '16px', height: '16px' }} />}
              label="Documentos MGS"
              isActive={activeTab === 'documentos'}
              onClick={() => setActiveTab('documentos')}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-auto px-8 pb-8">
          {activeTab === 'personal' && <PersonalTab personal={PERSONAL_MOCK} />}
          {activeTab === 'tareas' && <TareasTab tareas={TAREAS_MOCK} />}
          {activeTab === 'documentos' && <DocumentosTab />}
        </div>
      </div>
    </div>
  );
}

// ===== TAB BUTTON =====
interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function TabButton({ icon, label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-2 px-6 py-3 transition-all"
      style={{
        color: isActive ? '#2E7D32' : '#606060',
        fontSize: '12px',
        fontWeight: '600',
      }}
    >
      {icon}
      {label}
      {isActive && (
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '2px',
            backgroundColor: '#2E7D32',
          }}
        />
      )}
    </button>
  );
}

// ===== PERSONAL TAB =====
interface PersonalTabProps {
  personal: PersonalData[];
}

function PersonalTab({ personal }: PersonalTabProps) {
  return (
    <div>
      <p
        style={{
          color: '#808080',
          fontSize: '11px',
          marginBottom: '12px',
        }}
      >
        {personal.length} personas asignadas a este proyecto
      </p>

      <div
        className="rounded overflow-hidden"
        style={{
          backgroundColor: '#1A1A1A',
          border: '0.5px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        {/* Table Header */}
        <div
          className="grid grid-cols-4 gap-3 px-3 py-2.5"
          style={{
            backgroundColor: '#121212',
            borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div
            style={{
              color: '#606060',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Nombre
          </div>
          <div
            style={{
              color: '#606060',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Rol
          </div>
          <div
            style={{
              color: '#606060',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Turno
          </div>
          <div
            style={{
              color: '#606060',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Estado
          </div>
        </div>

        {/* Table Rows */}
        {personal.map((person) => (
          <div
            key={person.id}
            className="grid grid-cols-4 gap-3 px-3 py-2.5"
            style={{
              borderBottom: '0.5px solid rgba(255, 255, 255, 0.03)',
            }}
          >
            <div
              style={{
                color: '#B0B0B0',
                fontSize: '12px',
              }}
            >
              {person.nombre}
            </div>
            <div
              style={{
                color: '#808080',
                fontSize: '11px',
              }}
            >
              {person.rol}
            </div>
            <div
              style={{
                color: '#808080',
                fontSize: '11px',
              }}
            >
              {person.turno}
            </div>
            <div>
              <span
                className="inline-block px-2 py-1 rounded"
                style={{
                  backgroundColor:
                    person.estado === 'activo'
                      ? 'rgba(0, 200, 83, 0.15)'
                      : 'rgba(96, 96, 96, 0.15)',
                  color: person.estado === 'activo' ? '#00C853' : '#606060',
                  fontSize: '10px',
                  fontWeight: '600',
                }}
              >
                {person.estado === 'activo' ? 'Activo' : 'Descanso'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== TAREAS TAB =====
interface TareasTabProps {
  tareas: Tarea[];
}

function TareasTab({ tareas }: TareasTabProps) {
  const statusColumns = [
    { key: 'pendiente', label: 'Pendiente', count: tareas.filter((t) => t.status === 'pendiente').length },
    { key: 'en_progreso', label: 'En Progreso', count: tareas.filter((t) => t.status === 'en_progreso').length },
    { key: 'bloqueado', label: 'Bloqueado', count: tareas.filter((t) => t.status === 'bloqueado').length },
    { key: 'completado', label: 'Completado', count: tareas.filter((t) => t.status === 'completado').length },
  ];

  return (
    <div>
      <p
        style={{
          color: '#808080',
          fontSize: '11px',
          marginBottom: '12px',
        }}
      >
        {tareas.length} tareas totales
      </p>

      <div className="grid grid-cols-4 gap-4">
        {statusColumns.map((column) => (
          <div key={column.key}>
            {/* Column Header */}
            <div
              className="flex items-center justify-between px-4 py-2.5 rounded-t mb-3"
              style={{
                backgroundColor: '#121212',
                border: '0.5px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <span
                style={{
                  color: '#A0A0A0',
                  fontSize: '11px',
                  fontWeight: '600',
                }}
              >
                {column.label}
              </span>
              <span
                className="px-2 py-0.5 rounded"
                style={{
                  backgroundColor: '#0A0A0A',
                  color: '#606060',
                  fontSize: '10px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '700',
                }}
              >
                {column.count}
              </span>
            </div>

            {/* Tasks */}
            <div className="space-y-3">
              {tareas
                .filter((t) => t.status === column.key)
                .map((tarea) => (
                  <TareaCard key={tarea.id} tarea={tarea} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface TareaCardProps {
  tarea: Tarea;
}

function TareaCard({ tarea }: TareaCardProps) {
  const getPrioridadColor = (prioridad: string) => {
    switch (prioridad) {
      case 'ALTA':
        return '#FF5252';
      case 'MEDIA':
        return '#FF9800';
      case 'BAJA':
        return '#1D99CC';
      default:
        return '#606060';
    }
  };

  return (
    <div
      className="p-4 rounded"
      style={{
        backgroundColor: '#1A1A1A',
        border: '0.5px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Priority Badge */}
      <div
        className="inline-block px-2 py-0.5 rounded mb-3"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: `0.5px solid ${getPrioridadColor(tarea.prioridad)}`,
        }}
      >
        <span
          style={{
            color: getPrioridadColor(tarea.prioridad),
            fontSize: '9px',
            fontWeight: '700',
            letterSpacing: '0.5px',
          }}
        >
          {tarea.prioridad}
        </span>
      </div>

      {/* Title */}
      <h4
        style={{
          color: '#E0E0E0',
          fontSize: '12px',
          fontWeight: '600',
          marginBottom: '8px',
          lineHeight: '1.4',
        }}
      >
        {tarea.titulo}
      </h4>

      {/* Responsable */}
      <div
        className="flex items-center gap-2 mb-2"
        style={{
          color: '#808080',
          fontSize: '10px',
        }}
      >
        <Users style={{ width: '11px', height: '11px' }} />
        {tarea.responsable}
      </div>

      {/* Fecha */}
      <div
        className="flex items-center gap-2"
        style={{
          color: '#606060',
          fontSize: '10px',
        }}
      >
        <Calendar style={{ width: '11px', height: '11px' }} />
        {tarea.fecha}
      </div>

      {/* Bloqueado Alert */}
      {tarea.status === 'bloqueado' && (
        <div
          className="flex items-center gap-2 mt-3 px-2 py-1.5 rounded"
          style={{
            backgroundColor: 'rgba(255, 82, 82, 0.1)',
            border: '0.5px solid rgba(255, 82, 82, 0.3)',
          }}
        >
          <AlertTriangle
            style={{
              width: '12px',
              height: '12px',
              color: '#FF5252',
            }}
          />
          <span
            style={{
              color: '#FF5252',
              fontSize: '9px',
              fontWeight: '600',
            }}
          >
            Bloqueado
          </span>
        </div>
      )}
    </div>
  );
}

// ===== DOCUMENTOS TAB =====
function DocumentosTab() {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        minHeight: '400px',
      }}
    >
      <div className="text-center">
        <FileText
          style={{
            width: '48px',
            height: '48px',
            color: '#404040',
            margin: '0 auto 16px',
          }}
        />
        <p
          style={{
            color: '#606060',
            fontSize: '14px',
            marginBottom: '8px',
          }}
        >
          Módulo de Documentos MGS
        </p>
        <p
          style={{
            color: '#404040',
            fontSize: '11px',
          }}
        >
          Disponible próximamente
        </p>
      </div>
    </div>
  );
}
