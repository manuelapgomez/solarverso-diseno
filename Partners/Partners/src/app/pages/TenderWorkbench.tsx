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
  DollarSign
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
          color: 'var(--text-on-dark)', 
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          display: 'block',
          marginBottom: '8px'
        }}>
          {label}
          {required && <span style={{ color: '#F44336', marginLeft: '4px' }}>*</span>}
        </label>
        <div
          className="relative rounded-lg p-4 transition-all cursor-pointer hover:border-opacity-100"
          style={{
            border: isUploaded 
              ? '2px solid #4CAF50' 
              : '2px dashed var(--accent-color)',
            borderOpacity: isUploaded ? 1 : 0.5,
            backgroundColor: isUploaded 
              ? 'rgba(76, 175, 80, 0.1)' 
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
        >
          {isUploaded ? (
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} style={{ color: '#4CAF50' }} />
              <div className="flex-1">
                <div style={{ 
                  color: 'var(--text-on-dark)', 
                  fontSize: '12px',
                  fontWeight: 500
                }}>
                  {uploadedFiles[fieldName]?.name}
                </div>
                <div style={{ 
                  color: 'var(--text-inactive)', 
                  fontSize: '10px',
                  fontFamily: 'var(--font-data)'
                }}>
                  {(uploadedFiles[fieldName]?.size! / 1024).toFixed(1)} KB
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Upload size={20} style={{ color: 'var(--accent-color)' }} />
              <div>
                <div style={{ 
                  color: 'var(--text-on-dark)', 
                  fontSize: '12px',
                  fontWeight: 500
                }}>
                  Haz clic para cargar archivo
                </div>
                <div style={{ 
                  color: 'var(--text-inactive)', 
                  fontSize: '10px'
                }}>
                  PDF, DOC, XLS (Max 10MB)
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

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
            Volver
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
              Postulación a Tender
            </h1>
            <p style={{ 
              color: 'var(--text-inactive)', 
              fontSize: '10px',
              fontFamily: 'var(--font-data)'
            }}>
              {tenderId || 'PLIEGO-2026-001'}
            </p>
          </div>
        </div>

        {/* Main Split View */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel - Requirement (Paper/Read Mode) */}
          <div 
            className="w-1/2 flex flex-col overflow-hidden"
            style={{ 
              backgroundColor: '#FFFFFF',
              borderRight: '1px solid #D0D5DD'
            }}
          >
            {/* Header */}
            <div 
              className="px-8 py-6"
              style={{ borderBottom: '1px solid #E5E7EB' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText size={20} style={{ color: 'var(--accent-color)' }} />
                    <span style={{ 
                      color: 'var(--accent-color)', 
                      fontSize: '11px',
                      fontFamily: 'var(--font-data)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      PLIEGO ABIERTO
                    </span>
                  </div>
                  <h1 style={{ 
                    color: 'var(--text-on-light)', 
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: '6px'
                  }}>
                    Maquinaria Amarilla
                  </h1>
                  <p style={{ 
                    color: '#6B7280', 
                    fontSize: '12px',
                    fontFamily: 'var(--font-data)'
                  }}>
                    Versión 00 | Publicado: 28 Ene 2026
                  </p>
                </div>
                
                {/* Closing Date Badge */}
                <div 
                  className="px-4 py-2 rounded-lg flex items-center gap-2"
                  style={{ 
                    backgroundColor: 'rgba(29, 153, 204, 0.1)',
                    border: '1px solid var(--accent-color)'
                  }}
                >
                  <Clock size={14} style={{ color: 'var(--accent-color)' }} />
                  <div>
                    <div style={{ 
                      color: '#6B7280', 
                      fontSize: '9px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Cierre
                    </div>
                    <div style={{ 
                      color: 'var(--accent-color)', 
                      fontSize: '13px',
                      fontWeight: 700,
                      fontFamily: 'var(--font-data)'
                    }}>
                      12 Feb 2026
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content - Scrollable */}
            <div className="flex-1 overflow-y-auto px-8 py-6">
              {/* Objeto */}
              <section className="mb-6">
                <h2 style={{ 
                  color: 'var(--text-on-light)', 
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '12px',
                  paddingBottom: '8px',
                  borderBottom: '2px solid #E5E7EB'
                }}>
                  Objeto del Contrato
                </h2>
                <p style={{ 
                  color: '#374151', 
                  fontSize: '13px',
                  lineHeight: '1.6'
                }}>
                  Adecuación de terreno y descargue de material para construcción de minigranja 
                  porcina en zona rural del municipio de Medellín, Antioquia.
                </p>
              </section>

              {/* Items Required */}
              <section className="mb-6">
                <h2 style={{ 
                  color: 'var(--text-on-light)', 
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '12px',
                  paddingBottom: '8px',
                  borderBottom: '2px solid #E5E7EB'
                }}>
                  Ítems Solicitados
                </h2>
                
                <div className="space-y-4">
                  {/* Item 1 */}
                  <div 
                    className="p-4 rounded-lg"
                    style={{ 
                      backgroundColor: '#F9FAFB',
                      border: '1px solid #E5E7EB'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'var(--accent-color)' }}
                      >
                        <span style={{ 
                          color: '#FFFFFF', 
                          fontSize: '14px',
                          fontWeight: 700,
                          fontFamily: 'var(--font-data)'
                        }}>
                          1
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 style={{ 
                          color: 'var(--text-on-light)', 
                          fontSize: '14px',
                          fontWeight: 600,
                          marginBottom: '4px'
                        }}>
                          Retroexcavadora (Pajarita)
                        </h3>
                        <ul className="space-y-1" style={{ paddingLeft: '16px' }}>
                          <li style={{ 
                            color: '#6B7280', 
                            fontSize: '12px',
                            listStyleType: 'disc'
                          }}>
                            Capacidad mínima: 1.2 m³
                          </li>
                          <li style={{ 
                            color: '#6B7280', 
                            fontSize: '12px',
                            listStyleType: 'disc'
                          }}>
                            Modelo no mayor a 10 años
                          </li>
                          <li style={{ 
                            color: '#6B7280', 
                            fontSize: '12px',
                            listStyleType: 'disc'
                          }}>
                            Operador certificado SENA
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div 
                    className="p-4 rounded-lg"
                    style={{ 
                      backgroundColor: '#F9FAFB',
                      border: '1px solid #E5E7EB'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'var(--accent-color)' }}
                      >
                        <span style={{ 
                          color: '#FFFFFF', 
                          fontSize: '14px',
                          fontWeight: 700,
                          fontFamily: 'var(--font-data)'
                        }}>
                          2
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 style={{ 
                          color: 'var(--text-on-light)', 
                          fontSize: '14px',
                          fontWeight: 600,
                          marginBottom: '4px'
                        }}>
                          Vibrocompactador
                        </h3>
                        <ul className="space-y-1" style={{ paddingLeft: '16px' }}>
                          <li style={{ 
                            color: '#6B7280', 
                            fontSize: '12px',
                            listStyleType: 'disc'
                          }}>
                            Peso mínimo: 1.5 toneladas
                          </li>
                          <li style={{ 
                            color: '#6B7280', 
                            fontSize: '12px',
                            listStyleType: 'disc'
                          }}>
                            Mantenimiento al día
                          </li>
                          <li style={{ 
                            color: '#6B7280', 
                            fontSize: '12px',
                            listStyleType: 'disc'
                          }}>
                            SOAT y tecnomecánica vigentes
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Insurance Required */}
              <section className="mb-6">
                <h2 style={{ 
                  color: 'var(--text-on-light)', 
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '12px',
                  paddingBottom: '8px',
                  borderBottom: '2px solid #E5E7EB'
                }}>
                  Seguros Requeridos
                </h2>
                
                <div 
                  className="p-4 rounded-lg flex items-start gap-3"
                  style={{ 
                    backgroundColor: 'rgba(255, 152, 0, 0.05)',
                    border: '1px solid rgba(255, 152, 0, 0.3)'
                  }}
                >
                  <Shield size={20} style={{ color: '#FF9800', marginTop: '2px' }} />
                  <div>
                    <h3 style={{ 
                      color: 'var(--text-on-light)', 
                      fontSize: '13px',
                      fontWeight: 600,
                      marginBottom: '4px'
                    }}>
                      Responsabilidad Civil Extracontractual (RCE)
                    </h3>
                    <p style={{ 
                      color: '#6B7280', 
                      fontSize: '12px',
                      marginBottom: '6px'
                    }}>
                      Monto mínimo requerido:
                    </p>
                    <div style={{ 
                      color: '#FF9800', 
                      fontSize: '18px',
                      fontWeight: 700,
                      fontFamily: 'var(--font-data)'
                    }}>
                      $500,000,000 COP
                    </div>
                  </div>
                </div>
              </section>

              {/* Duration */}
              <section className="mb-6">
                <h2 style={{ 
                  color: 'var(--text-on-light)', 
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '12px',
                  paddingBottom: '8px',
                  borderBottom: '2px solid #E5E7EB'
                }}>
                  Plazo de Ejecución
                </h2>
                <div className="flex items-center gap-2">
                  <Calendar size={16} style={{ color: 'var(--accent-color)' }} />
                  <span style={{ 
                    color: '#374151', 
                    fontSize: '13px'
                  }}>
                    60 días calendario a partir de la firma del contrato
                  </span>
                </div>
              </section>
            </div>
          </div>

          {/* Right Panel - Response (Tool/Edit Mode) */}
          <div 
            className="w-1/2 flex flex-col overflow-hidden"
            style={{ backgroundColor: 'var(--ui-bg-color)' }}
          >
            {/* Header */}
            <div 
              className="px-6 py-4"
              style={{ borderBottom: '1px solid var(--stroke-color)' }}
            >
              <h2 style={{ 
                color: 'var(--text-on-dark)', 
                fontSize: '16px',
                fontWeight: 600,
                marginBottom: '2px'
              }}>
                Mi Postulación
              </h2>
              <p style={{ 
                color: 'var(--text-inactive)', 
                fontSize: '11px'
              }}>
                Completa todos los campos requeridos para enviar tu propuesta
              </p>
            </div>

            {/* Workflow Tabs */}
            <div 
              className="flex"
              style={{ 
                backgroundColor: 'var(--panel-bg-color)',
                borderBottom: '1px solid var(--stroke-color)'
              }}
            >
              <button
                onClick={() => setActiveTab('tecnica')}
                className="flex-1 px-4 py-3 flex items-center justify-center gap-2 transition-colors relative"
                style={{
                  color: activeTab === 'tecnica' ? 'var(--accent-color)' : 'var(--text-inactive)',
                  backgroundColor: activeTab === 'tecnica' ? 'rgba(29, 153, 204, 0.1)' : 'transparent',
                  borderBottom: activeTab === 'tecnica' ? '2px solid var(--accent-color)' : '2px solid transparent',
                  fontSize: '12px',
                  fontWeight: 600
                }}
              >
                {isTabComplete('tecnica') && (
                  <CheckCircle2 size={14} style={{ color: '#4CAF50' }} />
                )}
                <Wrench size={14} />
                <span>1. Técnica</span>
              </button>
              <button
                onClick={() => setActiveTab('economica')}
                className="flex-1 px-4 py-3 flex items-center justify-center gap-2 transition-colors"
                style={{
                  color: activeTab === 'economica' ? 'var(--accent-color)' : 'var(--text-inactive)',
                  backgroundColor: activeTab === 'economica' ? 'rgba(29, 153, 204, 0.1)' : 'transparent',
                  borderBottom: activeTab === 'economica' ? '2px solid var(--accent-color)' : '2px solid transparent',
                  fontSize: '12px',
                  fontWeight: 600
                }}
              >
                {isTabComplete('economica') && (
                  <CheckCircle2 size={14} style={{ color: '#4CAF50' }} />
                )}
                <DollarSign size={14} />
                <span>2. Económica</span>
              </button>
              <button
                onClick={() => setActiveTab('sst')}
                className="flex-1 px-4 py-3 flex items-center justify-center gap-2 transition-colors"
                style={{
                  color: activeTab === 'sst' ? 'var(--accent-color)' : 'var(--text-inactive)',
                  backgroundColor: activeTab === 'sst' ? 'rgba(29, 153, 204, 0.1)' : 'transparent',
                  borderBottom: activeTab === 'sst' ? '2px solid var(--accent-color)' : '2px solid transparent',
                  fontSize: '12px',
                  fontWeight: 600
                }}
              >
                {isTabComplete('sst') && (
                  <CheckCircle2 size={14} style={{ color: '#4CAF50' }} />
                )}
                <Shield size={14} />
                <span>3. SST</span>
              </button>
            </div>

            {/* Form Content - Scrollable */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {/* Técnica Tab */}
              {activeTab === 'tecnica' && (
                <div>
                  <div className="mb-6">
                    <h3 style={{ 
                      color: 'var(--text-on-dark)', 
                      fontSize: '14px',
                      fontWeight: 600,
                      marginBottom: '12px'
                    }}>
                      Documentación Técnica
                    </h3>
                    <p style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '11px',
                      marginBottom: '16px',
                      lineHeight: '1.5'
                    }}>
                      Adjunta los documentos que acrediten la capacidad técnica de tu empresa 
                      para ejecutar el objeto del contrato.
                    </p>
                  </div>

                  <Dropzone 
                    label="Hoja de Vida Maquinaria"
                    fieldName="hojaVidaMaquinaria"
                  />
                  <Dropzone 
                    label="Certificado de Propiedad/Alquiler"
                    fieldName="certificadoPropiedad"
                  />
                  <Dropzone 
                    label="Planilla Seguridad Social"
                    fieldName="planillaSeguridad"
                  />
                </div>
              )}

              {/* Económica Tab */}
              {activeTab === 'economica' && (
                <div>
                  <div className="mb-6">
                    <h3 style={{ 
                      color: 'var(--text-on-dark)', 
                      fontSize: '14px',
                      fontWeight: 600,
                      marginBottom: '12px'
                    }}>
                      Propuesta Económica
                    </h3>
                    <p style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '11px',
                      marginBottom: '16px',
                      lineHeight: '1.5'
                    }}>
                      Presenta tu oferta económica y documentos de soporte financiero.
                    </p>
                  </div>

                  <Dropzone 
                    label="Propuesta Económica (Excel/PDF)"
                    fieldName="propuestaEconomica"
                  />
                  <Dropzone 
                    label="Cotizaciones de Respaldo"
                    fieldName="cotizaciones"
                  />
                </div>
              )}

              {/* SST Tab */}
              {activeTab === 'sst' && (
                <div>
                  <div className="mb-6">
                    <h3 style={{ 
                      color: 'var(--text-on-dark)', 
                      fontSize: '14px',
                      fontWeight: 600,
                      marginBottom: '12px'
                    }}>
                      Seguridad y Salud en el Trabajo
                    </h3>
                    <p style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '11px',
                      marginBottom: '16px',
                      lineHeight: '1.5'
                    }}>
                      Documentos que acrediten el cumplimiento de normas SST y afiliaciones vigentes.
                    </p>
                  </div>

                  <Dropzone 
                    label="Certificado Sistema de Gestión SST"
                    fieldName="certificadoSST"
                  />
                  <Dropzone 
                    label="ARL Vigente (Operadores)"
                    fieldName="arlVigente"
                  />
                  <Dropzone 
                    label="Certificados de Capacitación"
                    fieldName="capacitaciones"
                  />
                </div>
              )}
            </div>

            {/* Sticky Footer */}
            <div 
              className="px-6 py-4 flex gap-3"
              style={{ 
                borderTop: '1px solid var(--stroke-color)',
                backgroundColor: 'var(--panel-bg-color)'
              }}
            >
              <button
                className="flex-1 h-11 rounded flex items-center justify-center transition-all"
                style={{ 
                  backgroundColor: 'transparent',
                  border: '1px solid var(--stroke-color)',
                  color: 'var(--text-on-dark)',
                  fontSize: '13px',
                  fontWeight: 600
                }}
              >
                Guardar Borrador
              </button>
              <button
                className="flex-1 h-11 rounded flex items-center justify-center transition-all"
                style={{ 
                  backgroundColor: 'var(--accent-color)',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 600
                }}
              >
                Enviar Postulación
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}