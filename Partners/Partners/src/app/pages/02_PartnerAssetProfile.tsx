import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { 
  ArrowLeft,
  Wrench,
  Users,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  Shield,
  Clock,
  MapPin,
  Gauge,
  Settings
} from 'lucide-react';
import GlobalSidebar from '../components/GlobalSidebar';

interface Machine {
  id: string;
  type: string;
  brand: string;
  model: string;
  year: number;
  capacity: string;
  status: 'operational' | 'maintenance' | 'available';
  soatExpiry: string;
  tecnoExpiry: string;
  operator: string;
}

interface Staff {
  id: string;
  name: string;
  role: string;
  certification: string;
  certExpiry: string;
  experience: string;
  status: 'active' | 'inactive';
  phone: string;
}

const mockMachinery: Machine[] = [
  {
    id: 'MAQ-001',
    type: 'Retroexcavadora',
    brand: 'Caterpillar',
    model: '416F2',
    year: 2019,
    capacity: '1.2 m³',
    status: 'operational',
    soatExpiry: '2026-06-15',
    tecnoExpiry: '2026-04-20',
    operator: 'Carlos Méndez'
  },
  {
    id: 'MAQ-002',
    type: 'Vibrocompactador',
    brand: 'BOMAG',
    model: 'BW 211 D-5',
    year: 2020,
    capacity: '1.8 ton',
    status: 'available',
    soatExpiry: '2026-08-10',
    tecnoExpiry: '2026-07-05',
    operator: 'N/A'
  },
  {
    id: 'MAQ-003',
    type: 'Bulldozer',
    brand: 'Komatsu',
    model: 'D65PX-18',
    year: 2018,
    capacity: '3.8 m³',
    status: 'maintenance',
    soatExpiry: '2026-05-22',
    tecnoExpiry: '2026-03-15',
    operator: 'Ana Rodríguez'
  },
  {
    id: 'MAQ-004',
    type: 'Cargador Frontal',
    brand: 'Volvo',
    model: 'L90H',
    year: 2021,
    capacity: '2.5 m³',
    status: 'operational',
    soatExpiry: '2026-09-30',
    tecnoExpiry: '2026-08-15',
    operator: 'Juan Pérez'
  },
  {
    id: 'MAQ-005',
    type: 'Motoniveladora',
    brand: 'CAT',
    model: '140M',
    year: 2017,
    capacity: '3.7 m',
    status: 'available',
    soatExpiry: '2026-07-20',
    tecnoExpiry: '2026-06-10',
    operator: 'N/A'
  }
];

const mockStaff: Staff[] = [
  {
    id: 'OPR-001',
    name: 'Carlos Méndez',
    role: 'Operador Retroexcavadora',
    certification: 'SENA - Operación Maquinaria Pesada',
    certExpiry: '2027-12-10',
    experience: '8 años',
    status: 'active',
    phone: '+57 314 555 0001'
  },
  {
    id: 'OPR-002',
    name: 'Ana Rodríguez',
    role: 'Operador Bulldozer',
    certification: 'SENA - Movimiento de Tierras',
    certExpiry: '2026-09-18',
    experience: '5 años',
    status: 'active',
    phone: '+57 312 555 0002'
  },
  {
    id: 'TEC-001',
    name: 'Juan Pérez',
    role: 'Técnico de Mantenimiento',
    certification: 'Técnico Mecánica Diesel',
    certExpiry: '2028-03-05',
    experience: '12 años',
    status: 'active',
    phone: '+57 310 555 0003'
  },
  {
    id: 'OPR-003',
    name: 'María González',
    role: 'Operador Cargador',
    certification: 'SENA - Maquinaria de Construcción',
    certExpiry: '2027-06-22',
    experience: '6 años',
    status: 'active',
    phone: '+57 315 555 0004'
  },
  {
    id: 'SUP-001',
    name: 'Luis Torres',
    role: 'Supervisor de Campo',
    certification: 'Ingeniería Civil',
    certExpiry: '2029-01-15',
    experience: '15 años',
    status: 'active',
    phone: '+57 311 555 0005'
  }
];

export default function PartnerAssetProfile() {
  const navigate = useNavigate();
  const { partnerId } = useParams();
  const [activeTab, setActiveTab] = useState<'machinery' | 'staff'>('machinery');
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(mockMachinery[0]);
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);

  return (
    <div 
      className="h-screen w-screen flex overflow-hidden"
      style={{ 
        fontFamily: 'var(--font-ui)',
        backgroundColor: '#121212'
      }}
    >
      {/* Global Sidebar */}
      <GlobalSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div 
          className="h-14 px-4 flex items-center gap-4"
          style={{ 
            backgroundColor: '#1E1E1E',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 transition-colors hover:text-white"
            style={{
              color: '#B0B0B0',
              fontSize: '12px',
              fontWeight: 600
            }}
          >
            <ArrowLeft size={16} />
            Volver al Centro de Operaciones
          </button>

          <div 
            style={{ 
              width: '1px', 
              height: '20px', 
              backgroundColor: 'rgba(255, 255, 255, 0.08)' 
            }} 
          />

          <div>
            <h1 style={{ 
              color: 'var(--text-on-dark)', 
              fontSize: '14px',
              fontWeight: 700
            }}>
              Construcciones Andinas SAS
            </h1>
            <p style={{ 
              color: 'var(--text-inactive)', 
              fontSize: '10px',
              fontFamily: 'var(--font-data)'
            }}>
              {partnerId}
            </p>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Content Area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Tabs */}
            <div 
              className="flex"
              style={{ 
                backgroundColor: 'var(--panel-bg-color)',
                borderBottom: '1px solid var(--stroke-color)'
              }}
            >
              <button
                onClick={() => {
                  setActiveTab('machinery');
                  setSelectedStaff(null);
                  setSelectedMachine(mockMachinery[0]);
                }}
                className="px-6 py-3 flex items-center gap-2 transition-colors"
                style={{
                  color: activeTab === 'machinery' ? 'var(--accent-color)' : 'var(--text-inactive)',
                  backgroundColor: activeTab === 'machinery' ? 'rgba(29, 153, 204, 0.1)' : 'transparent',
                  borderBottom: activeTab === 'machinery' ? '2px solid var(--accent-color)' : '2px solid transparent',
                  fontSize: '12px',
                  fontWeight: 600
                }}
              >
                <Wrench size={14} />
                Maquinaria ({mockMachinery.length})
              </button>
              <button
                onClick={() => {
                  setActiveTab('staff');
                  setSelectedMachine(null);
                  setSelectedStaff(mockStaff[0]);
                }}
                className="px-6 py-3 flex items-center gap-2 transition-colors"
                style={{
                  color: activeTab === 'staff' ? 'var(--accent-color)' : 'var(--text-inactive)',
                  backgroundColor: activeTab === 'staff' ? 'rgba(29, 153, 204, 0.1)' : 'transparent',
                  borderBottom: activeTab === 'staff' ? '2px solid var(--accent-color)' : '2px solid transparent',
                  fontSize: '12px',
                  fontWeight: 600
                }}
              >
                <Users size={14} />
                Personal ({mockStaff.length})
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-auto p-4">
              {activeTab === 'machinery' && (
                <div 
                  className="rounded-lg overflow-hidden"
                  style={{ border: '1px solid var(--stroke-color)' }}
                >
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ backgroundColor: 'var(--panel-bg-color)' }}>
                        <th style={{ 
                          padding: '10px 12px', 
                          textAlign: 'left',
                          color: 'var(--text-inactive)',
                          fontSize: '10px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          borderBottom: '1px solid var(--stroke-color)'
                        }}>
                          ID
                        </th>
                        <th style={{ 
                          padding: '10px 12px', 
                          textAlign: 'left',
                          color: 'var(--text-inactive)',
                          fontSize: '10px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          borderBottom: '1px solid var(--stroke-color)'
                        }}>
                          Tipo
                        </th>
                        <th style={{ 
                          padding: '10px 12px', 
                          textAlign: 'left',
                          color: 'var(--text-inactive)',
                          fontSize: '10px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          borderBottom: '1px solid var(--stroke-color)'
                        }}>
                          Marca/Modelo
                        </th>
                        <th style={{ 
                          padding: '10px 12px', 
                          textAlign: 'left',
                          color: 'var(--text-inactive)',
                          fontSize: '10px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          borderBottom: '1px solid var(--stroke-color)'
                        }}>
                          Año
                        </th>
                        <th style={{ 
                          padding: '10px 12px', 
                          textAlign: 'left',
                          color: 'var(--text-inactive)',
                          fontSize: '10px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          borderBottom: '1px solid var(--stroke-color)'
                        }}>
                          Capacidad
                        </th>
                        <th style={{ 
                          padding: '10px 12px', 
                          textAlign: 'left',
                          color: 'var(--text-inactive)',
                          fontSize: '10px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          borderBottom: '1px solid var(--stroke-color)'
                        }}>
                          Estado
                        </th>
                        <th style={{ 
                          padding: '10px 12px', 
                          textAlign: 'left',
                          color: 'var(--text-inactive)',
                          fontSize: '10px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          borderBottom: '1px solid var(--stroke-color)'
                        }}>
                          Operador
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockMachinery.map((machine) => (
                        <tr
                          key={machine.id}
                          onClick={() => setSelectedMachine(machine)}
                          className="cursor-pointer transition-colors"
                          style={{
                            backgroundColor: selectedMachine?.id === machine.id 
                              ? 'rgba(29, 153, 204, 0.1)' 
                              : 'transparent',
                            borderBottom: '1px solid var(--stroke-color)'
                          }}
                        >
                          <td style={{ 
                            padding: '10px 12px',
                            color: 'var(--accent-color)',
                            fontSize: '11px',
                            fontFamily: 'var(--font-data)',
                            fontWeight: 600
                          }}>
                            {machine.id}
                          </td>
                          <td style={{ 
                            padding: '10px 12px',
                            color: 'var(--text-on-dark)',
                            fontSize: '12px',
                            fontWeight: 500
                          }}>
                            {machine.type}
                          </td>
                          <td style={{ 
                            padding: '10px 12px',
                            color: 'var(--text-on-dark)',
                            fontSize: '11px'
                          }}>
                            {machine.brand} {machine.model}
                          </td>
                          <td style={{ 
                            padding: '10px 12px',
                            color: 'var(--text-on-dark)',
                            fontSize: '11px',
                            fontFamily: 'var(--font-data)'
                          }}>
                            {machine.year}
                          </td>
                          <td style={{ 
                            padding: '10px 12px',
                            color: 'var(--text-inactive)',
                            fontSize: '11px',
                            fontFamily: 'var(--font-data)'
                          }}>
                            {machine.capacity}
                          </td>
                          <td style={{ padding: '10px 12px' }}>
                            <span
                              className="px-2 py-1 rounded"
                              style={{
                                backgroundColor: machine.status === 'operational' 
                                  ? 'rgba(76, 175, 80, 0.2)' 
                                  : machine.status === 'available'
                                  ? 'rgba(29, 153, 204, 0.2)'
                                  : 'rgba(255, 152, 0, 0.2)',
                                color: machine.status === 'operational' 
                                  ? '#4CAF50' 
                                  : machine.status === 'available'
                                  ? 'var(--accent-color)'
                                  : '#FF9800',
                                fontSize: '10px',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.3px'
                              }}
                            >
                              {machine.status === 'operational' ? 'Operativo' : machine.status === 'available' ? 'Disponible' : 'Mantenimiento'}
                            </span>
                          </td>
                          <td style={{ 
                            padding: '10px 12px',
                            color: 'var(--text-inactive)',
                            fontSize: '11px'
                          }}>
                            {machine.operator}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'staff' && (
                <div 
                  className="rounded-lg overflow-hidden"
                  style={{ border: '1px solid var(--stroke-color)' }}
                >
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ backgroundColor: 'var(--panel-bg-color)' }}>
                        <th style={{ 
                          padding: '10px 12px', 
                          textAlign: 'left',
                          color: 'var(--text-inactive)',
                          fontSize: '10px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          borderBottom: '1px solid var(--stroke-color)'
                        }}>
                          ID
                        </th>
                        <th style={{ 
                          padding: '10px 12px', 
                          textAlign: 'left',
                          color: 'var(--text-inactive)',
                          fontSize: '10px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          borderBottom: '1px solid var(--stroke-color)'
                        }}>
                          Nombre
                        </th>
                        <th style={{ 
                          padding: '10px 12px', 
                          textAlign: 'left',
                          color: 'var(--text-inactive)',
                          fontSize: '10px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          borderBottom: '1px solid var(--stroke-color)'
                        }}>
                          Rol
                        </th>
                        <th style={{ 
                          padding: '10px 12px', 
                          textAlign: 'left',
                          color: 'var(--text-inactive)',
                          fontSize: '10px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          borderBottom: '1px solid var(--stroke-color)'
                        }}>
                          Certificación
                        </th>
                        <th style={{ 
                          padding: '10px 12px', 
                          textAlign: 'left',
                          color: 'var(--text-inactive)',
                          fontSize: '10px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          borderBottom: '1px solid var(--stroke-color)'
                        }}>
                          Experiencia
                        </th>
                        <th style={{ 
                          padding: '10px 12px', 
                          textAlign: 'left',
                          color: 'var(--text-inactive)',
                          fontSize: '10px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          borderBottom: '1px solid var(--stroke-color)'
                        }}>
                          Estado
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockStaff.map((person) => (
                        <tr
                          key={person.id}
                          onClick={() => setSelectedStaff(person)}
                          className="cursor-pointer transition-colors"
                          style={{
                            backgroundColor: selectedStaff?.id === person.id 
                              ? 'rgba(29, 153, 204, 0.1)' 
                              : 'transparent',
                            borderBottom: '1px solid var(--stroke-color)'
                          }}
                        >
                          <td style={{ 
                            padding: '10px 12px',
                            color: 'var(--accent-color)',
                            fontSize: '11px',
                            fontFamily: 'var(--font-data)',
                            fontWeight: 600
                          }}>
                            {person.id}
                          </td>
                          <td style={{ 
                            padding: '10px 12px',
                            color: 'var(--text-on-dark)',
                            fontSize: '12px',
                            fontWeight: 500
                          }}>
                            {person.name}
                          </td>
                          <td style={{ 
                            padding: '10px 12px',
                            color: 'var(--text-on-dark)',
                            fontSize: '11px'
                          }}>
                            {person.role}
                          </td>
                          <td style={{ 
                            padding: '10px 12px',
                            color: 'var(--text-inactive)',
                            fontSize: '11px'
                          }}>
                            {person.certification}
                          </td>
                          <td style={{ 
                            padding: '10px 12px',
                            color: 'var(--text-inactive)',
                            fontSize: '11px',
                            fontFamily: 'var(--font-data)'
                          }}>
                            {person.experience}
                          </td>
                          <td style={{ padding: '10px 12px' }}>
                            <span
                              className="px-2 py-1 rounded flex items-center gap-1"
                              style={{
                                display: 'inline-flex',
                                backgroundColor: person.status === 'active' 
                                  ? 'rgba(76, 175, 80, 0.2)' 
                                  : 'rgba(158, 158, 158, 0.2)',
                                color: person.status === 'active' 
                                  ? '#4CAF50' 
                                  : '#9E9E9E',
                                fontSize: '10px',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.3px'
                              }}
                            >
                              {person.status === 'active' && <CheckCircle2 size={10} />}
                              {person.status === 'active' ? 'Activo' : 'Inactivo'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Inspector Panel */}
          <div 
            className="flex flex-col overflow-hidden"
            style={{ 
              width: '320px',
              backgroundColor: 'var(--panel-bg-color)',
              borderLeft: '1px solid var(--stroke-color)'
            }}
          >
            {/* Header */}
            <div className="px-4 py-4" style={{ borderBottom: '1px solid var(--stroke-color)' }}>
              <h2 style={{ 
                color: 'var(--text-on-dark)', 
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '2px'
              }}>
                {activeTab === 'machinery' ? 'Detalles Maquinaria' : 'Detalles Personal'}
              </h2>
              <p style={{ 
                color: 'var(--text-inactive)', 
                fontSize: '10px',
                fontFamily: 'var(--font-data)'
              }}>
                {activeTab === 'machinery' ? selectedMachine?.id : selectedStaff?.id}
              </p>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {activeTab === 'machinery' && selectedMachine && (
                <>
                  <div>
                    <div style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '8px'
                    }}>
                      Información Técnica
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div style={{ 
                          color: 'var(--text-inactive)', 
                          fontSize: '10px',
                          marginBottom: '2px'
                        }}>
                          Tipo
                        </div>
                        <div style={{ 
                          color: 'var(--text-on-dark)', 
                          fontSize: '13px',
                          fontWeight: 600
                        }}>
                          {selectedMachine.type}
                        </div>
                      </div>
                      <div>
                        <div style={{ 
                          color: 'var(--text-inactive)', 
                          fontSize: '10px',
                          marginBottom: '2px'
                        }}>
                          Marca/Modelo
                        </div>
                        <div style={{ 
                          color: 'var(--text-on-dark)', 
                          fontSize: '12px',
                          fontFamily: 'var(--font-data)'
                        }}>
                          {selectedMachine.brand} {selectedMachine.model}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-1">
                          <div style={{ 
                            color: 'var(--text-inactive)', 
                            fontSize: '10px',
                            marginBottom: '2px'
                          }}>
                            Año
                          </div>
                          <div style={{ 
                            color: 'var(--text-on-dark)', 
                            fontSize: '12px',
                            fontFamily: 'var(--font-data)'
                          }}>
                            {selectedMachine.year}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div style={{ 
                            color: 'var(--text-inactive)', 
                            fontSize: '10px',
                            marginBottom: '2px'
                          }}>
                            Capacidad
                          </div>
                          <div style={{ 
                            color: 'var(--accent-color)', 
                            fontSize: '12px',
                            fontWeight: 700,
                            fontFamily: 'var(--font-data)'
                          }}>
                            {selectedMachine.capacity}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '8px'
                    }}>
                      Documentación
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield size={14} style={{ color: '#4CAF50' }} />
                          <span style={{ 
                            color: 'var(--text-on-dark)', 
                            fontSize: '11px'
                          }}>
                            SOAT
                          </span>
                        </div>
                        <span style={{ 
                          color: 'var(--text-on-dark)', 
                          fontSize: '11px',
                          fontFamily: 'var(--font-data)'
                        }}>
                          {selectedMachine.soatExpiry}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Settings size={14} style={{ color: 'var(--accent-color)' }} />
                          <span style={{ 
                            color: 'var(--text-on-dark)', 
                            fontSize: '11px'
                          }}>
                            Tecnomecánica
                          </span>
                        </div>
                        <span style={{ 
                          color: 'var(--text-on-dark)', 
                          fontSize: '11px',
                          fontFamily: 'var(--font-data)'
                        }}>
                          {selectedMachine.tecnoExpiry}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '8px'
                    }}>
                      Operador Asignado
                    </div>
                    <div style={{ 
                      color: 'var(--text-on-dark)', 
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {selectedMachine.operator}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'staff' && selectedStaff && (
                <>
                  <div>
                    <div style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '8px'
                    }}>
                      Información Personal
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div style={{ 
                          color: 'var(--text-inactive)', 
                          fontSize: '10px',
                          marginBottom: '2px'
                        }}>
                          Nombre Completo
                        </div>
                        <div style={{ 
                          color: 'var(--text-on-dark)', 
                          fontSize: '13px',
                          fontWeight: 600
                        }}>
                          {selectedStaff.name}
                        </div>
                      </div>
                      <div>
                        <div style={{ 
                          color: 'var(--text-inactive)', 
                          fontSize: '10px',
                          marginBottom: '2px'
                        }}>
                          Rol
                        </div>
                        <div style={{ 
                          color: 'var(--text-on-dark)', 
                          fontSize: '12px'
                        }}>
                          {selectedStaff.role}
                        </div>
                      </div>
                      <div>
                        <div style={{ 
                          color: 'var(--text-inactive)', 
                          fontSize: '10px',
                          marginBottom: '2px'
                        }}>
                          Teléfono
                        </div>
                        <div style={{ 
                          color: 'var(--accent-color)', 
                          fontSize: '11px',
                          fontFamily: 'var(--font-data)'
                        }}>
                          {selectedStaff.phone}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '8px'
                    }}>
                      Certificación
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div style={{ 
                          color: 'var(--text-on-dark)', 
                          fontSize: '11px',
                          marginBottom: '4px'
                        }}>
                          {selectedStaff.certification}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={10} style={{ color: 'var(--text-inactive)' }} />
                          <span style={{ 
                            color: 'var(--text-inactive)', 
                            fontSize: '10px',
                            fontFamily: 'var(--font-data)'
                          }}>
                            Válida hasta: {selectedStaff.certExpiry}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '8px'
                    }}>
                      Experiencia
                    </div>
                    <div style={{ 
                      color: 'var(--accent-color)', 
                      fontSize: '18px',
                      fontWeight: 700,
                      fontFamily: 'var(--font-data)'
                    }}>
                      {selectedStaff.experience}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Stats Summary */}
            <div 
              className="px-4 py-4"
              style={{ 
                borderTop: '1px solid var(--stroke-color)',
                backgroundColor: 'rgba(29, 153, 204, 0.05)'
              }}
            >
              <div style={{ 
                color: 'var(--text-inactive)', 
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '8px'
              }}>
                Resumen Total
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div style={{ 
                    color: 'var(--text-inactive)', 
                    fontSize: '10px',
                    marginBottom: '2px'
                  }}>
                    Maquinaria
                  </div>
                  <div style={{ 
                    color: 'var(--accent-color)', 
                    fontSize: '20px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-data)'
                  }}>
                    {mockMachinery.length}
                  </div>
                </div>
                <div>
                  <div style={{ 
                    color: 'var(--text-inactive)', 
                    fontSize: '10px',
                    marginBottom: '2px'
                  }}>
                    Personal
                  </div>
                  <div style={{ 
                    color: 'var(--accent-color)', 
                    fontSize: '20px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-data)'
                  }}>
                    {mockStaff.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}