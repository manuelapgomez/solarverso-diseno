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
  Award,
  Clock,
  MapPin,
  Phone
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
}

interface Staff {
  id: string;
  name: string;
  role: string;
  certification: string;
  certExpiry: string;
  experience: string;
  status: 'active' | 'inactive';
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
    tecnoExpiry: '2026-04-20'
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
    tecnoExpiry: '2026-07-05'
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
    tecnoExpiry: '2026-03-15'
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
    status: 'active'
  },
  {
    id: 'OPR-002',
    name: 'Ana Rodríguez',
    role: 'Operador Bulldozer',
    certification: 'SENA - Movimiento de Tierras',
    certExpiry: '2026-09-18',
    experience: '5 años',
    status: 'active'
  },
  {
    id: 'TEC-001',
    name: 'Juan Pérez',
    role: 'Técnico de Mantenimiento',
    certification: 'Técnico Mecánica Diesel',
    certExpiry: '2028-03-05',
    experience: '12 años',
    status: 'active'
  }
];

export default function PartnerAssetProfile() {
  const navigate = useNavigate();
  const { partnerId } = useParams();
  const [activeTab, setActiveTab] = useState<'machinery' | 'staff'>('machinery');

  return (
    <div 
      className="h-screen w-screen flex overflow-hidden"
      style={{ 
        fontFamily: 'var(--font-ui)',
        backgroundColor: 'var(--ui-bg-color)'
      }}
    >
      {/* Global Sidebar */}
      <GlobalSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div 
          className="h-14 px-4 flex items-center gap-4"
          style={{ 
            backgroundColor: 'var(--panel-bg-color)',
            borderBottom: '1px solid var(--stroke-color)'
          }}
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 transition-colors"
            style={{
              color: 'var(--text-inactive)',
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
              backgroundColor: 'var(--stroke-color)' 
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
          {/* Main Content */}
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
                onClick={() => setActiveTab('machinery')}
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
                onClick={() => setActiveTab('staff')}
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
                          SOAT
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
                          Tecnomecánica
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockMachinery.map((machine) => (
                        <tr
                          key={machine.id}
                          style={{ borderBottom: '1px solid var(--stroke-color)' }}
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
                            color: 'var(--text-on-dark)',
                            fontSize: '11px',
                            fontFamily: 'var(--font-data)'
                          }}>
                            {machine.soatExpiry}
                          </td>
                          <td style={{ 
                            padding: '10px 12px',
                            color: 'var(--text-on-dark)',
                            fontSize: '11px',
                            fontFamily: 'var(--font-data)'
                          }}>
                            {machine.tecnoExpiry}
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
                          Cert. Expira
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
                          style={{ borderBottom: '1px solid var(--stroke-color)' }}
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
                            color: 'var(--text-on-dark)',
                            fontSize: '11px',
                            fontFamily: 'var(--font-data)'
                          }}>
                            {person.certExpiry}
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
                {activeTab === 'machinery' ? 'Resumen Maquinaria' : 'Resumen Personal'}
              </h2>
            </div>

            {/* Stats */}
            <div className="px-4 py-6 space-y-4">
              {activeTab === 'machinery' && (
                <>
                  <div>
                    <div style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '8px'
                    }}>
                      Estados
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} style={{ color: '#4CAF50' }} />
                          <span style={{ 
                            color: 'var(--text-on-dark)', 
                            fontSize: '11px'
                          }}>
                            Operativo
                          </span>
                        </div>
                        <span style={{ 
                          color: 'var(--text-on-dark)', 
                          fontSize: '13px',
                          fontWeight: 700,
                          fontFamily: 'var(--font-data)'
                        }}>
                          1
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} style={{ color: 'var(--accent-color)' }} />
                          <span style={{ 
                            color: 'var(--text-on-dark)', 
                            fontSize: '11px'
                          }}>
                            Disponible
                          </span>
                        </div>
                        <span style={{ 
                          color: 'var(--text-on-dark)', 
                          fontSize: '13px',
                          fontWeight: 700,
                          fontFamily: 'var(--font-data)'
                        }}>
                          1
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <AlertTriangle size={14} style={{ color: '#FF9800' }} />
                          <span style={{ 
                            color: 'var(--text-on-dark)', 
                            fontSize: '11px'
                          }}>
                            Mantenimiento
                          </span>
                        </div>
                        <span style={{ 
                          color: 'var(--text-on-dark)', 
                          fontSize: '13px',
                          fontWeight: 700,
                          fontFamily: 'var(--font-data)'
                        }}>
                          1
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
                      Total
                    </div>
                    <div style={{ 
                      color: 'var(--accent-color)', 
                      fontSize: '32px',
                      fontWeight: 700,
                      fontFamily: 'var(--font-data)'
                    }}>
                      {mockMachinery.length}
                    </div>
                    <div style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '11px'
                    }}>
                      Unidades registradas
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'staff' && (
                <>
                  <div>
                    <div style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '8px'
                    }}>
                      Estados
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} style={{ color: '#4CAF50' }} />
                          <span style={{ 
                            color: 'var(--text-on-dark)', 
                            fontSize: '11px'
                          }}>
                            Activo
                          </span>
                        </div>
                        <span style={{ 
                          color: 'var(--text-on-dark)', 
                          fontSize: '13px',
                          fontWeight: 700,
                          fontFamily: 'var(--font-data)'
                        }}>
                          {mockStaff.filter(s => s.status === 'active').length}
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
                      Total Personal
                    </div>
                    <div style={{ 
                      color: 'var(--accent-color)', 
                      fontSize: '32px',
                      fontWeight: 700,
                      fontFamily: 'var(--font-data)'
                    }}>
                      {mockStaff.length}
                    </div>
                    <div style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '11px'
                    }}>
                      Empleados registrados
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}