import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { 
  FileText,
  Upload,
  CheckCircle2,
  Clock,
  Shield,
  Calendar,
  ArrowLeft,
  Wrench,
  DollarSign,
  Eye,
  Building2
} from 'lucide-react';
import GlobalSidebar from '../components/GlobalSidebar';

interface UploadedFile {
  name: string;
  size: number;
  uploadedAt: Date;
}

type WorkflowTab = 'tecnica' | 'economica' | 'sst';

export default function TenderWorkbench() {
  const navigate = useNavigate();
  const { tenderId } = useParams();
  const [activeTab, setActiveTab] = useState<WorkflowTab>('tecnica');
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, UploadedFile | null>>({
    hojaVidaMaquinaria: null,
    certificadoPropiedad: null,
    planillaSeguridad: null,
    propuestaEconomica: null,
    cotizaciones: null,
    certificadoSST: null,
    arlVigente: null,
    capacitaciones: null
  });

  // Mock form data
  const [formData, setFormData] = useState({
    partnerName: 'Construcciones Andinas SAS',
    partnerId: 'SST-002',
    pliego: 'Adecuación de Terreno',
    maquinaria: 12,
    personal: 24,
    polizaRCE: 'Vigente - $500M'
  });

  const handleFileUpload = (fieldName: string, file: File) => {
    setUploadedFiles(prev => ({
      ...prev,
      [fieldName]: {
        name: file.name,
        size: file.size,
        uploadedAt: new Date()
      }
    }));
  };

  const isTabComplete = (tab: WorkflowTab): boolean => {
    switch (tab) {
      case 'tecnica':
        return !!(uploadedFiles.hojaVidaMaquinaria && uploadedFiles.certificadoPropiedad && uploadedFiles.planillaSeguridad);
      case 'economica':
        return !!(uploadedFiles.propuestaEconomica && uploadedFiles.cotizaciones);
      case 'sst':
        return !!(uploadedFiles.certificadoSST && uploadedFiles.arlVigente && uploadedFiles.capacitaciones);
      default:
        return false;
    }
  };

  const Dropzone = ({ 
    label, 
    fieldName, 
    required = true 
  }: { 
    label: string; 
    fieldName: string; 
    required?: boolean;
  }) => {
    const isUploaded = !!uploadedFiles[fieldName];

    return (
      <div className="mb-4">
        <label style={{ 
          color: '#FFFFFF', 
          fontSize: '11px',
          fontWeight: 600,
          display: 'block',
          marginBottom: '8px'
        }}>
          {label}
          {required && <span style={{ color: '#FF5252', marginLeft: '4px' }}>*</span>}
        </label>
        <div
          className="relative rounded p-4 transition-all cursor-pointer"
          style={{
            border: isUploaded 
              ? '1px solid #00C853' 
              : '1px dashed rgba(29, 153, 204, 0.4)',
            backgroundColor: isUploaded 
              ? 'rgba(0, 200, 83, 0.1)' 
              : 'rgba(29, 153, 204, 0.05)'
          }}
          onClick={() => {
            const input = document.createElement('input');
            input.type = 'file';
            input.onchange = (e) => {
              const file = (e.target as HTMLInputElement).files?.[0];
              if (file) handleFileUpload(fieldName, file);
            };
            input.click();
          }}
          onMouseEnter={(e) => {
            if (!isUploaded) {
              e.currentTarget.style.borderColor = 'rgba(29, 153, 204, 0.8)';
              e.currentTarget.style.backgroundColor = 'rgba(29, 153, 204, 0.08)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isUploaded) {
              e.currentTarget.style.borderColor = 'rgba(29, 153, 204, 0.4)';
              e.currentTarget.style.backgroundColor = 'rgba(29, 153, 204, 0.05)';
            }
          }}
        >
          <div className="flex items-center gap-3">
            {isUploaded ? (
              <>
                <CheckCircle2 size={20} style={{ color: '#00C853' }} />
                <div className="flex-1">
                  <div style={{ 
                    color: '#FFFFFF', 
                    fontSize: '12px',
                    fontWeight: 600,
                    marginBottom: '2px'
                  }}>
                    {uploadedFiles[fieldName]?.name}
                  </div>
                  <div style={{ 
                    color: '#B0B0B0', 
                    fontSize: '10px'
                  }}>
                    {(uploadedFiles[fieldName]?.size ?? 0 / 1024).toFixed(2)} KB
                  </div>
                </div>
              </>
            ) : (
              <>
                <Upload size={20} style={{ color: '#1D99CC' }} />
                <div className="flex-1">
                  <div style={{ 
                    color: '#FFFFFF', 
                    fontSize: '12px',
                    fontWeight: 600
                  }}>
                    Click para subir archivo
                  </div>
                  <div style={{ 
                    color: '#B0B0B0', 
                    fontSize: '10px'
                  }}>
                    PDF, Max 10MB
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

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

      {/* Main Split View */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT: Editing Forms */}
        <div 
          className="flex flex-col overflow-hidden"
          style={{ 
            width: '50%',
            borderRight: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          {/* Header */}
          <div 
            className="px-6 py-4"
            style={{ 
              backgroundColor: '#1E1E1E',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
            }}
          >
            <button
              onClick={() => navigate('/tenders')}
              className="flex items-center gap-2 mb-4 transition-colors"
              style={{ color: '#1D99CC', fontSize: '12px', fontWeight: 600 }}
            >
              <ArrowLeft size={16} />
              Volver a Pliegos
            </button>

            <h1 style={{ 
              color: '#FFFFFF', 
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '4px'
            }}>
              Tender Architect
            </h1>
            <p style={{ 
              color: '#B0B0B0', 
              fontSize: '12px'
            }}>
              Completa tu postulación por secciones
            </p>
          </div>

          {/* Workflow Tabs */}
          <div 
            className="flex"
            style={{ 
              backgroundColor: '#1E1E1E',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
            }}
          >
            {[
              { id: 'tecnica', label: 'Técnica', icon: <Wrench size={16} /> },
              { id: 'economica', label: 'Económica', icon: <DollarSign size={16} /> },
              { id: 'sst', label: 'SST', icon: <Shield size={16} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as WorkflowTab)}
                className="flex items-center gap-2 px-6 py-3 transition-all relative"
                style={{
                  color: activeTab === tab.id ? '#1D99CC' : '#B0B0B0',
                  fontSize: '13px',
                  fontWeight: 600,
                  backgroundColor: activeTab === tab.id ? 'rgba(29, 153, 204, 0.05)' : 'transparent'
                }}
              >
                {/* Bottom active indicator */}
                {activeTab === tab.id && (
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: '#1D99CC'
                    }}
                  />
                )}
                {tab.icon}
                <span>{tab.label}</span>
                {isTabComplete(tab.id as WorkflowTab) && (
                  <CheckCircle2 size={14} style={{ color: '#00C853' }} />
                )}
              </button>
            ))}
          </div>

          {/* Form Content */}
          <div 
            className="flex-1 overflow-y-auto px-6 py-6"
            style={{ backgroundColor: '#121212' }}
          >
            {activeTab === 'tecnica' && (
              <div>
                <h2 style={{ 
                  color: '#FFFFFF', 
                  fontSize: '16px',
                  fontWeight: 700,
                  marginBottom: '16px'
                }}>
                  Documentación Técnica
                </h2>

                <Dropzone 
                  label="Hoja de Vida Maquinaria"
                  fieldName="hojaVidaMaquinaria"
                />

                <Dropzone 
                  label="Certificado de Propiedad"
                  fieldName="certificadoPropiedad"
                />

                <Dropzone 
                  label="Planilla Seguridad Social"
                  fieldName="planillaSeguridad"
                />
              </div>
            )}

            {activeTab === 'economica' && (
              <div>
                <h2 style={{ 
                  color: '#FFFFFF', 
                  fontSize: '16px',
                  fontWeight: 700,
                  marginBottom: '16px'
                }}>
                  Propuesta Económica
                </h2>

                <Dropzone 
                  label="Propuesta Económica"
                  fieldName="propuestaEconomica"
                />

                <Dropzone 
                  label="Cotizaciones de Apoyo"
                  fieldName="cotizaciones"
                />
              </div>
            )}

            {activeTab === 'sst' && (
              <div>
                <h2 style={{ 
                  color: '#FFFFFF', 
                  fontSize: '16px',
                  fontWeight: 700,
                  marginBottom: '16px'
                }}>
                  Seguridad y Salud en el Trabajo
                </h2>

                <Dropzone 
                  label="Certificado SST"
                  fieldName="certificadoSST"
                />

                <Dropzone 
                  label="ARL Vigente"
                  fieldName="arlVigente"
                />

                <Dropzone 
                  label="Capacitaciones de Personal"
                  fieldName="capacitaciones"
                />
              </div>
            )}
          </div>

          {/* Submit Footer */}
          <div 
            className="px-6 py-4"
            style={{ 
              backgroundColor: '#1E1E1E',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)'
            }}
          >
            <button
              className="w-full h-12 rounded flex items-center justify-center gap-2 transition-colors"
              style={{
                backgroundColor: '#1D99CC',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 700
              }}
              onClick={() => alert('Postulación enviada!')}
            >
              <FileText size={18} />
              Enviar Postulación
            </button>
          </div>
        </div>

        {/* RIGHT: Live Preview - Partner Profile Style */}
        <div 
          className="flex flex-col overflow-hidden"
          style={{ 
            width: '50%',
            backgroundColor: '#121212'
          }}
        >
          {/* Preview Header */}
          <div 
            className="px-6 py-4 flex items-center gap-3"
            style={{ 
              backgroundColor: '#1E1E1E',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
            }}
          >
            <Eye size={18} style={{ color: '#1D99CC' }} />
            <div>
              <h2 style={{ 
                color: '#FFFFFF', 
                fontSize: '14px',
                fontWeight: 700
              }}>
                Vista Previa
              </h2>
              <p style={{ 
                color: '#B0B0B0', 
                fontSize: '11px'
              }}>
                Así se verá tu perfil
              </p>
            </div>
          </div>

          {/* Preview Content - Matches Partner Profile */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {/* Hero Card */}
            <div 
              className="rounded-lg p-6 mb-6"
              style={{
                backgroundColor: '#1E1E1E',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              {/* Logo + Badge */}
              <div className="flex items-start justify-between mb-4">
                <div 
                  className="rounded flex items-center justify-center"
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: 'rgba(29, 153, 204, 0.1)',
                    border: '2px solid #1D99CC',
                    color: '#1D99CC',
                    fontSize: '20px',
                    fontWeight: 700
                  }}
                >
                  <Building2 size={32} />
                </div>

                {/* SST Score Badge */}
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 200, 83, 0.1)',
                    border: '2px solid #00C853',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    boxShadow: '0 0 20px rgba(0, 200, 83, 0.2)'
                  }}
                >
                  <div style={{ 
                    color: '#00C853', 
                    fontSize: '20px',
                    fontWeight: 700,
                    fontFamily: 'JetBrains Mono, monospace',
                    lineHeight: '1'
                  }}>
                    92
                  </div>
                  <div style={{ 
                    color: '#B0B0B0', 
                    fontSize: '9px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    marginTop: '2px'
                  }}>
                    SST
                  </div>
                </div>
              </div>

              {/* Partner Name */}
              <h1 style={{ 
                color: '#FFFFFF',
                fontSize: '24px',
                fontWeight: 700,
                marginBottom: '8px'
              }}>
                {formData.partnerName}
              </h1>

              <p style={{ 
                color: '#B0B0B0',
                fontSize: '13px',
                marginBottom: '4px'
              }}>
                {formData.pliego}
              </p>

              <p style={{ 
                color: '#1D99CC',
                fontSize: '12px',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: 600
              }}>
                {formData.partnerId}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div 
                className="rounded-lg p-4"
                style={{
                  backgroundColor: '#1E1E1E',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <div style={{ color: '#B0B0B0', fontSize: '11px', marginBottom: '6px' }}>
                  Personal Disponible
                </div>
                <div style={{ 
                  color: '#1D99CC',
                  fontSize: '28px',
                  fontWeight: 700,
                  fontFamily: 'JetBrains Mono, monospace'
                }}>
                  {formData.personal}
                </div>
              </div>

              <div 
                className="rounded-lg p-4"
                style={{
                  backgroundColor: '#1E1E1E',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <div style={{ color: '#B0B0B0', fontSize: '11px', marginBottom: '6px' }}>
                  Maquinaria
                </div>
                <div style={{ 
                  color: '#1D99CC',
                  fontSize: '28px',
                  fontWeight: 700,
                  fontFamily: 'JetBrains Mono, monospace'
                }}>
                  {formData.maquinaria}
                </div>
              </div>
            </div>

            {/* Póliza RCE - Highlighted */}
            <div 
              className="rounded-lg p-4 mb-6"
              style={{
                backgroundColor: '#1E1E1E',
                border: '1px solid #1D99CC'
              }}
            >
              <div style={{ 
                color: '#B0B0B0', 
                fontSize: '11px',
                marginBottom: '6px'
              }}>
                Póliza RCE
              </div>
              <div style={{ 
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: 700
              }}>
                {formData.polizaRCE}
              </div>
            </div>

            {/* Documents Upload Status */}
            <div 
              className="rounded-lg p-4"
              style={{
                backgroundColor: '#1E1E1E',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <h3 style={{ 
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 700,
                marginBottom: '12px'
              }}>
                Estado de Documentación
              </h3>

              <div className="space-y-2">
                {Object.entries(uploadedFiles).map(([key, file]) => (
                  <div 
                    key={key}
                    className="flex items-center justify-between py-2"
                    style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
                  >
                    <span style={{ color: '#B0B0B0', fontSize: '11px' }}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    {file ? (
                      <CheckCircle2 size={16} style={{ color: '#00C853' }} />
                    ) : (
                      <Clock size={16} style={{ color: '#FF9800' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
