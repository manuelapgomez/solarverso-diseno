import { useNavigate } from 'react-router';
import { 
  Building2,
  MapPin,
  CheckCircle2,
  Shield,
  Wrench,
  Users,
  Award,
  FileText
} from 'lucide-react';
import GlobalSidebar from '../components/GlobalSidebar';
import RoleIndicator from '../components/RoleIndicator';
import AssetGalleryCard from '../components/AssetGalleryCard';
import ScoreDonut from '../components/ScoreDonut';
import GenderQuotaIndicator from '../components/GenderQuotaIndicator';

interface Insurance {
  name: string;
  coverage: string;
  status: 'Vigente' | 'Vencida' | 'Próximo a Vencer';
  expiry: string;
}

interface Asset {
  name: string;
  imageUrl?: string;
  ownership: 'Propia' | 'Alquilada';
  soatExpiry: string;
  soatStatus: 'valid' | 'expiring' | 'expired';
  serial: string;
  model: string;
  specs: string;
}

interface StaffMember {
  name: string;
  role: string;
  certification: string;
  status: 'Vigente' | 'Vencida';
}

const mockCompany = {
  name: 'Soluciones Civiles SAS',
  nit: '900.123.456-7',
  location: 'Antioquia',
  sstScore: 92,
  habilitado: true,
  habilitadoPara: 'MINIGRANJA',
  genderPercentage: 32,
  totalStaff: 25,
  womenStaff: 8
};

const mockInsurances: Insurance[] = [
  {
    name: 'Póliza RCE',
    coverage: '$500M COP',
    status: 'Vigente',
    expiry: '15 Dic 2026'
  },
  {
    name: 'Todo Riesgo Maquinaria',
    coverage: '$800M COP',
    status: 'Vigente',
    expiry: '30 Jun 2026'
  },
  {
    name: 'Responsabilidad Civil',
    coverage: '$300M COP',
    status: 'Vigente',
    expiry: '10 Oct 2026'
  }
];

const mockAssets: Asset[] = [
  {
    name: 'Retroexcavadora (Pajarita)',
    ownership: 'Propia',
    soatExpiry: '20 Ago 2026',
    soatStatus: 'valid',
    serial: 'CAT-420F-2022-789',
    model: 'CAT 420F2',
    specs: '1.2 m³'
  },
  {
    name: 'Bulldozer D3',
    ownership: 'Propia',
    soatExpiry: '15 Mar 2026',
    soatStatus: 'expiring',
    serial: 'CAT-D3-2021-456',
    model: 'CAT D3K2',
    specs: '3 m³'
  },
  {
    name: 'Vibrocompactador',
    ownership: 'Alquilada',
    soatExpiry: '05 Jun 2026',
    soatStatus: 'valid',
    serial: 'BOMAG-BW211-2020-123',
    model: 'BOMAG BW211D-5',
    specs: '1.5 ton'
  },
  {
    name: 'Volqueta Kenworth',
    ownership: 'Propia',
    soatExpiry: '10 Ene 2026',
    soatStatus: 'expired',
    serial: 'KW-T800-2019-654',
    model: 'Kenworth T800',
    specs: '5 ton'
  }
];

const mockStaff: StaffMember[] = [
  {
    name: 'Juan Pérez',
    role: 'Operador CAT-420F',
    certification: 'Licencia C2 Vigente',
    status: 'Vigente'
  },
  {
    name: 'María González',
    role: 'Operador Bulldozer',
    certification: 'Cert. Trabajo en Alturas',
    status: 'Vigente'
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Supervisor SST',
    certification: 'Especialista SST',
    status: 'Vigente'
  },
  {
    name: 'Ana Martínez',
    role: 'Operador Vibrocompactador',
    certification: 'Licencia B2',
    status: 'Vigente'
  }
];

export default function Contractor360CommandCenter() {
  const navigate = useNavigate();

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

      {/* Role Indicator */}
      <RoleIndicator role="admin" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - Entity Identity */}
        <div 
          className="px-6 py-5"
          style={{ 
            backgroundColor: 'var(--panel-bg-color)',
            borderBottom: '1px solid var(--stroke-color)'
          }}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Building2 size={24} style={{ color: 'var(--accent-color)' }} />
                <div>
                  <h1 style={{ 
                    color: 'var(--text-on-dark)', 
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: '2px'
                  }}>
                    {mockCompany.name}
                  </h1>
                  <div className="flex items-center gap-3">
                    <span style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '11px',
                      fontFamily: 'var(--tech-mono)'
                    }}>
                      NIT: {mockCompany.nit}
                    </span>
                    <span style={{ color: 'var(--text-inactive)', fontSize: '11px' }}>|</span>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} style={{ color: 'var(--text-inactive)' }} />
                      <span style={{ 
                        color: 'var(--text-inactive)', 
                        fontSize: '11px'
                      }}>
                        {mockCompany.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Badge */}
            {mockCompany.habilitado && (
              <div 
                className="flex items-center gap-2 px-4 py-3 rounded-lg"
                style={{
                  backgroundColor: 'rgba(0, 200, 83, 0.15)',
                  border: '2px solid var(--compliance-green)'
                }}
              >
                <CheckCircle2 size={20} style={{ color: 'var(--compliance-green)' }} />
                <div>
                  <div style={{
                    color: 'var(--compliance-green)',
                    fontSize: '9px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '2px'
                  }}>
                    ESTADO
                  </div>
                  <div style={{
                    color: 'var(--compliance-green)',
                    fontSize: '13px',
                    fontWeight: 700,
                    lineHeight: '1.2'
                  }}>
                    HABILITADO PARA {mockCompany.habilitadoPara}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="flex-1 overflow-auto">
          <div 
            className="grid gap-4 p-6"
            style={{ 
              gridTemplateColumns: '320px 1fr 360px',
              gridTemplateRows: 'auto auto',
              height: 'fit-content'
            }}
          >
            {/* Left Panel - Master Compliance */}
            <div 
              className="rounded-lg p-5"
              style={{ 
                backgroundColor: 'var(--panel-bg-color)',
                border: '1px solid var(--stroke-color)',
                gridRow: 'span 2'
              }}
            >
              <h2 style={{ 
                color: 'var(--text-on-dark)', 
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '20px'
              }}>
                Master Compliance
              </h2>

              {/* Large Score Gauge */}
              <div className="flex justify-center mb-6">
                <ScoreDonut 
                  score={mockCompany.sstScore} 
                  size={140}
                  thickness={14}
                  label="SST Evaluation"
                  minThreshold={86}
                />
              </div>

              {/* Insurance Status */}
              <div>
                <h3 style={{ 
                  color: 'var(--text-inactive)', 
                  fontSize: '10px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '12px'
                }}>
                  Estado de Pólizas
                </h3>
                
                <div className="space-y-3">
                  {mockInsurances.map((insurance, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg"
                      style={{ 
                        backgroundColor: insurance.status === 'Vigente'
                          ? 'rgba(0, 200, 83, 0.1)'
                          : insurance.status === 'Próximo a Vencer'
                          ? 'rgba(255, 152, 0, 0.1)'
                          : 'rgba(255, 82, 82, 0.1)',
                        border: insurance.status === 'Vigente'
                          ? '1px solid rgba(0, 200, 83, 0.3)'
                          : insurance.status === 'Próximo a Vencer'
                          ? '1px solid rgba(255, 152, 0, 0.3)'
                          : '1px solid rgba(255, 82, 82, 0.3)'
                      }}
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <Shield size={14} style={{ 
                          color: insurance.status === 'Vigente'
                            ? 'var(--compliance-green)'
                            : insurance.status === 'Próximo a Vencer'
                            ? '#FF9800'
                            : 'var(--risk-red)',
                          marginTop: '2px'
                        }} />
                        <div className="flex-1">
                          <div style={{ 
                            color: 'var(--text-on-dark)', 
                            fontSize: '12px',
                            fontWeight: 600,
                            marginBottom: '2px'
                          }}>
                            {insurance.name}
                          </div>
                          <div style={{ 
                            color: 'var(--text-inactive)', 
                            fontSize: '10px',
                            fontFamily: 'var(--tech-mono)'
                          }}>
                            {insurance.coverage}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span style={{ 
                          color: 'var(--text-inactive)', 
                          fontSize: '9px',
                          fontFamily: 'var(--tech-mono)'
                        }}>
                          Vence: {insurance.expiry}
                        </span>
                        <span 
                          className="px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: insurance.status === 'Vigente'
                              ? 'rgba(0, 200, 83, 0.2)'
                              : insurance.status === 'Próximo a Vencer'
                              ? 'rgba(255, 152, 0, 0.2)'
                              : 'rgba(255, 82, 82, 0.2)',
                            color: insurance.status === 'Vigente'
                              ? 'var(--compliance-green)'
                              : insurance.status === 'Próximo a Vencer'
                              ? '#FF9800'
                              : 'var(--risk-red)',
                            fontSize: '8px',
                            fontWeight: 700,
                            textTransform: 'uppercase'
                          }}
                        >
                          {insurance.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Panel - Asset Inventory */}
            <div 
              className="rounded-lg p-5"
              style={{ 
                backgroundColor: 'var(--panel-bg-color)',
                border: '1px solid var(--stroke-color)',
                gridRow: 'span 2'
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 style={{ 
                    color: 'var(--text-on-dark)', 
                    fontSize: '16px',
                    fontWeight: 600,
                    marginBottom: '2px'
                  }}>
                    Inventario de Maquinaria
                  </h2>
                  <p style={{ 
                    color: 'var(--text-inactive)', 
                    fontSize: '10px'
                  }}>
                    {mockAssets.length} activos registrados
                  </p>
                </div>
                <Wrench size={20} style={{ color: 'var(--accent-color)' }} />
              </div>

              {/* Asset Gallery Grid */}
              <div 
                className="grid gap-4"
                style={{ 
                  gridTemplateColumns: 'repeat(auto-fill, 280px)',
                  justifyContent: 'start'
                }}
              >
                {mockAssets.map((asset, idx) => (
                  <AssetGalleryCard
                    key={idx}
                    name={asset.name}
                    imageUrl={asset.imageUrl}
                    ownership={asset.ownership}
                    soatExpiry={asset.soatExpiry}
                    soatStatus={asset.soatStatus}
                    serial={asset.serial}
                    model={asset.model}
                    specs={asset.specs}
                  />
                ))}
              </div>

              {/* Summary Stats */}
              <div 
                className="mt-5 p-4 rounded-lg"
                style={{ 
                  backgroundColor: 'rgba(29, 153, 204, 0.1)',
                  border: '1px solid rgba(29, 153, 204, 0.3)'
                }}
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '9px',
                      textTransform: 'uppercase',
                      marginBottom: '4px'
                    }}>
                      Total Activos
                    </div>
                    <div style={{ 
                      color: 'var(--accent-color)', 
                      fontSize: '24px',
                      fontWeight: 700,
                      fontFamily: 'var(--tech-mono)'
                    }}>
                      {mockAssets.length}
                    </div>
                  </div>
                  <div>
                    <div style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '9px',
                      textTransform: 'uppercase',
                      marginBottom: '4px'
                    }}>
                      Propios
                    </div>
                    <div style={{ 
                      color: 'var(--compliance-green)', 
                      fontSize: '24px',
                      fontWeight: 700,
                      fontFamily: 'var(--tech-mono)'
                    }}>
                      {mockAssets.filter(a => a.ownership === 'Propia').length}
                    </div>
                  </div>
                  <div>
                    <div style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '9px',
                      textTransform: 'uppercase',
                      marginBottom: '4px'
                    }}>
                      Alquilados
                    </div>
                    <div style={{ 
                      color: '#FF9800', 
                      fontSize: '24px',
                      fontWeight: 700,
                      fontFamily: 'var(--tech-mono)'
                    }}>
                      {mockAssets.filter(a => a.ownership === 'Alquilada').length}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Workforce & Gender */}
            <div 
              className="rounded-lg p-5"
              style={{ 
                backgroundColor: 'var(--panel-bg-color)',
                border: '1px solid var(--stroke-color)'
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <Users size={20} style={{ color: 'var(--accent-color)' }} />
                <h2 style={{ 
                  color: 'var(--text-on-dark)', 
                  fontSize: '14px',
                  fontWeight: 600
                }}>
                  Equipo Humano
                </h2>
              </div>

              {/* Gender Quota */}
              <div className="mb-5">
                <GenderQuotaIndicator
                  percentage={mockCompany.genderPercentage}
                  target={30}
                  total={mockCompany.totalStaff}
                  women={mockCompany.womenStaff}
                />
              </div>

              {/* Key Staff List */}
              <div>
                <h3 style={{ 
                  color: 'var(--text-inactive)', 
                  fontSize: '10px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '12px'
                }}>
                  Personal Clave
                </h3>
                
                <div className="space-y-2">
                  {mockStaff.map((staff, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg"
                      style={{ 
                        backgroundColor: 'var(--ui-bg-color)',
                        border: '1px solid var(--stroke-color)'
                      }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div style={{ 
                            color: 'var(--text-on-dark)', 
                            fontSize: '12px',
                            fontWeight: 600,
                            marginBottom: '2px'
                          }}>
                            {staff.name}
                          </div>
                          <div style={{ 
                            color: 'var(--text-inactive)', 
                            fontSize: '10px'
                          }}>
                            {staff.role}
                          </div>
                        </div>
                        {staff.status === 'Vigente' && (
                          <CheckCircle2 size={14} style={{ color: 'var(--compliance-green)' }} />
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Award size={10} style={{ color: 'var(--accent-color)' }} />
                        <span style={{ 
                          color: 'var(--accent-color)', 
                          fontSize: '9px',
                          fontFamily: 'var(--tech-mono)'
                        }}>
                          {staff.certification}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Bottom - Documents & Actions */}
            <div 
              className="rounded-lg p-5"
              style={{ 
                backgroundColor: 'var(--panel-bg-color)',
                border: '1px solid var(--stroke-color)'
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <FileText size={18} style={{ color: 'var(--accent-color)' }} />
                <h2 style={{ 
                  color: 'var(--text-on-dark)', 
                  fontSize: '14px',
                  fontWeight: 600
                }}>
                  Acciones Rápidas
                </h2>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => navigate('/admin/evaluation')}
                  className="w-full h-11 rounded flex items-center justify-center transition-all hover:opacity-90"
                  style={{
                    backgroundColor: 'var(--accent-color)',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: 600
                  }}
                >
                  Ver en Matriz de Evaluación
                </button>
                
                <button
                  className="w-full h-11 rounded flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid var(--stroke-color)',
                    color: 'var(--text-on-dark)',
                    fontSize: '12px',
                    fontWeight: 600
                  }}
                >
                  Exportar Hoja de Vida (PDF)
                </button>
                
                <button
                  onClick={() => navigate('/tenders')}
                  className="w-full h-11 rounded flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid var(--compliance-green)',
                    color: 'var(--compliance-green)',
                    fontSize: '12px',
                    fontWeight: 600
                  }}
                >
                  Asignar a Minigranja
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}