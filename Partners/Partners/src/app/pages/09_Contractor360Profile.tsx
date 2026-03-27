import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { 
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  FileText,
  CheckCircle2,
  Download,
  Edit,
  Shield,
  Briefcase,
  Wrench,
  Star
} from 'lucide-react';
import GlobalSidebar from '../components/GlobalSidebar';
import RoleIndicator from '../components/RoleIndicator';
import SSTScoreCard from '../components/SSTScoreCard';
import DocGalleryItem from '../components/DocGalleryItem';
import StatusBadge from '../components/StatusBadge';
import contractorLogo from 'figma:asset/04a47e4a00f537d11c71758e8f0c1b2c72ff4114.png';

interface Partner {
  id: string;
  name: string;
  nit: string;
  location: string;
  yearsActive: number;
  sstScore: number;
  activeTenders: number;
  assignedPersonnel: number;
  genderDiversity: number;
  policyAmount: string;
}

interface Document {
  id: string;
  name: string;
  category: string;
  status: 'approved' | 'review' | 'pending' | 'rejected';
  uploadDate: string;
  highlighted?: boolean;
}

const mockPartnerData: { [key: string]: Partner } = {
  'SST-001': {
    id: 'SST-001',
    name: 'Construcciones Andinas SAS',
    nit: '900-123-456-7',
    location: 'Antioquia',
    yearsActive: 8,
    sstScore: 86,
    activeTenders: 3,
    assignedPersonnel: 12,
    genderDiversity: 33,
    policyAmount: '$500M'
  }
};

// Extended document list (68 docs simulation with 10 visible)
const mockDocuments: Document[] = [
  { id: 'DOC-001', name: 'Póliza RCE $500M', category: 'Seguros', status: 'approved', uploadDate: '2026-02-01', highlighted: true },
  { id: 'DOC-002', name: 'Cámara de Comercio (3 meses)', category: 'Legal', status: 'approved', uploadDate: '2026-01-20', highlighted: true },
  { id: 'DOC-003', name: 'RUT Actualizado', category: 'Legal', status: 'approved', uploadDate: '2026-01-15', highlighted: true },
  { id: 'DOC-004', name: 'Certificado SST', category: 'SST', status: 'approved', uploadDate: '2026-02-05' },
  { id: 'DOC-005', name: 'Estados Financieros 2025', category: 'Financiero', status: 'approved', uploadDate: '2026-01-10' },
  { id: 'DOC-006', name: 'Licencia Ambiental', category: 'Ambiental', status: 'approved', uploadDate: '2026-02-08' },
  { id: 'DOC-007', name: 'SOAT Retroexcavadora', category: 'Seguros', status: 'approved', uploadDate: '2026-01-22' },
  { id: 'DOC-008', name: 'SOAT Bulldozer', category: 'Seguros', status: 'approved', uploadDate: '2026-01-25' },
  { id: 'DOC-009', name: 'Contrato de Trabajo', category: 'Legal', status: 'approved', uploadDate: '2026-01-18' },
  { id: 'DOC-010', name: 'Planilla Seguridad Social', category: 'SST', status: 'approved', uploadDate: '2026-02-03' }
];

export default function Contractor360Profile() {
  const navigate = useNavigate();
  const { partnerId } = useParams<{ partnerId: string }>();
  const partner = mockPartnerData[partnerId || 'SST-001'] || mockPartnerData['SST-001'];
  const [activeTab, setActiveTab] = useState<'general' | 'equipment' | 'personnel'>('equipment');

  return (
    <div 
      className="h-screen w-screen flex overflow-hidden"
      style={{ 
        fontFamily: 'Inter, sans-serif',
        backgroundColor: '#121212'
      }}
    >
      <GlobalSidebar />
      <RoleIndicator role="admin" />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <div 
          className="px-6 py-4 flex items-center justify-between"
          style={{ 
            backgroundColor: '#1E1E1E',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            minHeight: '64px'
          }}
        >
          <button
            onClick={() => navigate('/partners/explorer')}
            className="flex items-center gap-2 px-3 py-2 rounded transition-colors"
            style={{
              color: '#1D99CC',
              fontSize: '13px',
              fontWeight: 600,
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(29, 153, 204, 0.15)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <ArrowLeft size={16} />
            Volver a Partners
          </button>

          <div className="flex items-center" style={{ gap: '12px' }}>
            <div 
              className="px-4 py-2 rounded flex items-center gap-2"
              style={{
                backgroundColor: '#1B2B20',
                border: '1px solid #00C853'
              }}
            >
              <Shield size={16} style={{ color: '#00C853' }} />
              <span style={{ 
                color: '#00C853',
                fontSize: '12px',
                fontWeight: 700,
                fontFamily: 'JetBrains Mono, monospace'
              }}>
                Calificación SST: {partner.sstScore}%
              </span>
            </div>

            <button
              className="px-4 py-2 rounded flex items-center hover:opacity-80"
              style={{
                backgroundColor: '#2B2B2B',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: 600,
                gap: '8px',
                height: '36px',
                border: 'none'
              }}
            >
              <Download size={14} />
              Descargar Portafolio
            </button>

            <button
              className="px-4 py-2 rounded flex items-center hover:opacity-80"
              style={{
                backgroundColor: '#1D99CC',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: 600,
                gap: '8px',
                height: '36px',
                border: 'none'
              }}
            >
              <Edit size={14} />
              Editar Perfil
            </button>
          </div>
        </div>

        {/* Hero Header */}
        <div 
          className="px-6 py-6"
          style={{
            backgroundColor: '#1E1E1E',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="flex items-center gap-4">
            <div 
              className="rounded overflow-hidden flex items-center justify-center"
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#2B2B2B',
                border: '1px solid #1D99CC'
              }}
            >
              <img 
                src={contractorLogo} 
                alt="Logo" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }} 
              />
            </div>

            <div className="flex-1">
              <h1 style={{ 
                fontSize: '24px',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '4px'
              }}>
                {partner.name}
              </h1>

              <div className="flex items-center gap-3">
                <span style={{ 
                  color: '#1D99CC',
                  fontSize: '12px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 700
                }}>
                  {partner.id}
                </span>
                <span style={{ color: '#666666' }}>•</span>
                <span style={{ 
                  color: '#B0B0B0',
                  fontSize: '12px',
                  fontFamily: 'JetBrains Mono, monospace'
                }}>
                  NIT {partner.nit}
                </span>
                <span style={{ color: '#666666' }}>•</span>
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} style={{ color: '#B0B0B0' }} />
                  <span style={{ color: '#B0B0B0', fontSize: '12px' }}>
                    {partner.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div 
          className="flex items-center px-6"
          style={{
            backgroundColor: '#1E1E1E',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="flex items-center" style={{ gap: '32px' }}>
            <button
              onClick={() => setActiveTab('general')}
              className="relative py-3"
              style={{
                color: activeTab === 'general' ? '#FFFFFF' : '#B0B0B0',
                fontSize: '13px',
                fontWeight: 600,
                background: 'none',
                border: 'none'
              }}
            >
              Información General
              {activeTab === 'general' && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: '#1D99CC'
                }} />
              )}
            </button>

            <button
              onClick={() => setActiveTab('equipment')}
              className="relative py-3"
              style={{
                color: activeTab === 'equipment' ? '#FFFFFF' : '#B0B0B0',
                fontSize: '13px',
                fontWeight: 600,
                background: 'none',
                border: 'none'
              }}
            >
              Inventario de Activos
              {activeTab === 'equipment' && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: '#1D99CC'
                }} />
              )}
            </button>

            <button
              onClick={() => setActiveTab('personnel')}
              className="relative py-3"
              style={{
                color: activeTab === 'personnel' ? '#FFFFFF' : '#B0B0B0',
                fontSize: '13px',
                fontWeight: 600,
                background: 'none',
                border: 'none'
              }}
            >
              Bóveda Documental
              {activeTab === 'personnel' && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: '#1D99CC'
                }} />
              )}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6" style={{ backgroundColor: '#121212' }}>
          {/* Tab: Información General */}
          {activeTab === 'general' && (
            <div className="grid grid-cols-3 gap-4">
              <div className="p-6 rounded flex items-center justify-center" style={{
                backgroundColor: '#1E1E1E',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <SSTScoreCard score={partner.sstScore} minThreshold={86} />
              </div>
            </div>
          )}

          {/* Tab: Inventario de Activos */}
          {activeTab === 'equipment' && (
            <div>
              {/* Calificación Card */}
              <div className="p-6 rounded mb-6" style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid #262626'
              }}>
                <div style={{ 
                  color: '#B0B0B0',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '8px'
                }}>
                  Calificación del Perfil
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={20} style={{ 
                      fill: s <= 4 ? '#1D99CC' : 'transparent',
                      color: '#1D99CC'
                    }} />
                  ))}
                  <span style={{ 
                    color: '#FFFFFF',
                    fontSize: '18px',
                    fontWeight: 700,
                    fontFamily: 'JetBrains Mono, monospace',
                    marginLeft: '8px'
                  }}>
                    86 Puntos
                  </span>
                </div>
              </div>

              {/* Maquinaria Table */}
              <div className="mb-6">
                <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                  Inventario de Maquinaria
                </h2>
                <div className="rounded overflow-hidden" style={{
                  backgroundColor: '#1E1E1E',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <div className="grid grid-cols-12 gap-4 px-4" style={{
                    backgroundColor: '#2B2B2B',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    height: '36px',
                    alignItems: 'center'
                  }}>
                    <div className="col-span-5" style={{ color: '#B0B0B0', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>Equipo</div>
                    <div className="col-span-3" style={{ color: '#B0B0B0', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>ID</div>
                    <div className="col-span-4" style={{ color: '#B0B0B0', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>SOAT / Status</div>
                  </div>

                  <div className="grid grid-cols-12 gap-4 px-4" style={{ 
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    height: '36px',
                    alignItems: 'center'
                  }}>
                    <div className="col-span-5 flex items-center gap-2">
                      <Wrench size={14} style={{ color: '#1D99CC' }} />
                      <span style={{ color: '#FFFFFF', fontSize: '13px' }}>Retroexcavadora Pajarita</span>
                    </div>
                    <div className="col-span-3"><span style={{ color: '#B0B0B0', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace' }}>CAT-420F</span></div>
                    <div className="col-span-4">
                      <span className="px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(0, 200, 83, 0.15)', color: '#00C853', fontSize: '10px', fontWeight: 700 }}>SOAT Vigente</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4 px-4" style={{
                    height: '36px',
                    alignItems: 'center'
                  }}>
                    <div className="col-span-5 flex items-center gap-2">
                      <Wrench size={14} style={{ color: '#1D99CC' }} />
                      <span style={{ color: '#FFFFFF', fontSize: '13px' }}>Bulldozer D3</span>
                    </div>
                    <div className="col-span-3"><span style={{ color: '#B0B0B0', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace' }}>CAT-D3</span></div>
                    <div className="col-span-4">
                      <span className="px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(0, 200, 83, 0.15)', color: '#00C853', fontSize: '10px', fontWeight: 700 }}>Operativo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Table */}
              <div className="mb-6">
                <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                  Personal Asignado
                </h2>
                <div className="rounded overflow-hidden" style={{
                  backgroundColor: '#1E1E1E',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <div className="grid grid-cols-12 gap-4 px-4" style={{
                    backgroundColor: '#2B2B2B',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    height: '36px',
                    alignItems: 'center'
                  }}>
                    <div className="col-span-4" style={{ color: '#B0B0B0', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>Rol</div>
                    <div className="col-span-4" style={{ color: '#B0B0B0', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>Licencia / Curso</div>
                    <div className="col-span-4" style={{ color: '#B0B0B0', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>Riesgo ARL / Status</div>
                  </div>

                  <div className="grid grid-cols-12 gap-4 px-4" style={{ 
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    height: '36px',
                    alignItems: 'center'
                  }}>
                    <div className="col-span-4 flex items-center gap-2">
                      <Users size={14} style={{ color: '#1D99CC' }} />
                      <span style={{ color: '#FFFFFF', fontSize: '13px' }}>Operador Líder</span>
                    </div>
                    <div className="col-span-4"><span style={{ color: '#B0B0B0', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace' }}>Licencia C2</span></div>
                    <div className="col-span-4">
                      <span className="px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(255, 152, 0, 0.15)', color: '#FF9800', fontSize: '10px', fontWeight: 700 }}>Riesgo V</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4 px-4" style={{
                    height: '36px',
                    alignItems: 'center'
                  }}>
                    <div className="col-span-4 flex items-center gap-2">
                      <Users size={14} style={{ color: '#1D99CC' }} />
                      <span style={{ color: '#FFFFFF', fontSize: '13px' }}>Auxiliar SST</span>
                    </div>
                    <div className="col-span-4"><span style={{ color: '#B0B0B0', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace' }}>Curso Alturas</span></div>
                    <div className="col-span-4">
                      <span className="px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(0, 200, 83, 0.15)', color: '#00C853', fontSize: '10px', fontWeight: 700 }}>Vigente</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Historial Postulaciones */}
              <div className="mb-6">
                <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                  Historial de Postulaciones
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded" style={{ backgroundColor: '#1E1E1E', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div className="flex items-start justify-between mb-3">
                      <Briefcase size={20} style={{ color: '#1D99CC' }} />
                      <span className="px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(0, 200, 83, 0.15)', color: '#00C853', fontSize: '9px', fontWeight: 700, textTransform: 'uppercase' }}>Aprobado</span>
                    </div>
                    <h3 style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 700, marginBottom: '8px' }}>Pliego Maquinaria Amarilla</h3>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={11} style={{ color: '#B0B0B0' }} />
                      <span style={{ color: '#B0B0B0', fontSize: '11px', fontFamily: 'JetBrains Mono, monospace' }}>Fecha: 12-Feb-2026</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formularios */}
              <div className="mb-6">
                <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                  Formularios y Bitácoras
                </h2>
                <div className="rounded overflow-hidden" style={{
                  backgroundColor: '#1E1E1E',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <div className="grid grid-cols-12 gap-4 px-4" style={{
                    backgroundColor: '#2B2B2B',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    height: '36px',
                    alignItems: 'center'
                  }}>
                    <div className="col-span-7" style={{ color: '#B0B0B0', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>Nombre de Formulario</div>
                    <div className="col-span-2" style={{ color: '#B0B0B0', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>Fecha</div>
                    <div className="col-span-3" style={{ color: '#B0B0B0', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>Estado</div>
                  </div>

                  {[
                    { name: 'Check-list Pre-operacional Diario', date: '10/02/2026', status: 'Completo' },
                    { name: 'Bitácora de Obra Civil', date: '09/02/2026', status: 'Completo' },
                    { name: 'Inducción SST Solenium', date: '08/02/2026', status: 'Aprobado' }
                  ].map((form, i) => (
                    <div key={i} className="grid grid-cols-12 gap-4 px-4" style={{ 
                      borderBottom: i < 2 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                      height: '36px',
                      alignItems: 'center'
                    }}>
                      <div className="col-span-7 flex items-center gap-2">
                        <FileText size={14} style={{ color: '#1D99CC' }} />
                        <span style={{ color: '#FFFFFF', fontSize: '12px' }}>{form.name}</span>
                      </div>
                      <div className="col-span-2"><span style={{ color: '#B0B0B0', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace' }}>{form.date}</span></div>
                      <div className="col-span-3">
                        <span className="px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(0, 200, 83, 0.15)', color: '#00C853', fontSize: '10px', fontWeight: 700 }}>{form.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab: Bóveda Documental */}
          {activeTab === 'personnel' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>
                  Bóveda Documental SST
                </h2>
                <span style={{ color: '#B0B0B0', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace' }}>
                  68 documentos totales
                </span>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {mockDocuments.map((doc) => (
                  <div key={doc.id} style={{ position: 'relative' }}>
                    {doc.highlighted && (
                      <div style={{
                        position: 'absolute',
                        top: '-8px',
                        right: '-8px',
                        zIndex: 10,
                        backgroundColor: '#1D99CC',
                        color: '#FFFFFF',
                        fontSize: '9px',
                        fontWeight: 700,
                        padding: '4px 8px',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                      }}>
                        Destacado
                      </div>
                    )}
                    <DocGalleryItem
                      name={doc.name}
                      category={doc.category}
                      status={doc.status}
                      uploadDate={doc.uploadDate}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}