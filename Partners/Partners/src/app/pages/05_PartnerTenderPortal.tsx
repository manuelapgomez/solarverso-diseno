import { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  CheckCircle2,
  Clock,
  Wrench,
  FileText,
  AlertCircle,
  Building2,
  Shield
} from 'lucide-react';
import GlobalSidebar from '../components/GlobalSidebar';
import RoleIndicator from '../components/RoleIndicator';
import ActionBar from '../components/ActionBar';

interface Tender {
  id: string;
  title: string;
  status: 'En Postulación' | 'Asignado' | 'Disponible';
  closeDate: string;
  requirements: TenderItem[];
}

interface TenderItem {
  id: number;
  name: string;
  specs: string;
  category: 'Maquinaria' | 'Obra Civil' | 'Montacargas';
}

interface PartnerAsset {
  id: string;
  name: string;
  serial: string;
  available: boolean;
}

interface DocumentStatus {
  name: string;
  status: 'complete' | 'pending' | 'missing';
  details?: string;
}

const mockTenders: Tender[] = [
  {
    id: 'SOL-2026-001',
    title: 'Prestación de Servicios Maquinaria Amarilla',
    status: 'En Postulación',
    closeDate: '12 Feb 2026',
    requirements: [
      { id: 1, name: 'Retroexcavadora (Pajarita)', specs: '1.2 m³', category: 'Maquinaria' },
      { id: 2, name: 'Bulldozer D3', specs: '3 m³', category: 'Maquinaria' },
      { id: 3, name: 'Vibrocompactador', specs: '1.5 ton', category: 'Maquinaria' }
    ]
  },
  {
    id: 'SOL-2026-002',
    title: 'Logística y Transporte Pétreo',
    status: 'Disponible',
    closeDate: '15 Feb 2026',
    requirements: [
      { id: 1, name: 'Volqueta', specs: '5 ton', category: 'Maquinaria' },
      { id: 2, name: 'Montacargas', specs: '3 ton', category: 'Montacargas' }
    ]
  },
  {
    id: 'SOL-2026-003',
    title: 'Construcción Minigranja Porcina',
    status: 'Asignado',
    closeDate: 'Asignado',
    requirements: [
      { id: 1, name: 'Excavadora', specs: '2.5 m³', category: 'Maquinaria' },
      { id: 2, name: 'Compactadora', specs: '2 ton', category: 'Obra Civil' }
    ]
  }
];

const mockPartnerAssets: PartnerAsset[] = [
  { id: 'MAQ-001', name: 'CAT-D3 Bulldozer', serial: '#CAT-D3-2022-123', available: true },
  { id: 'MAQ-002', name: 'Retroexcavadora 416F2', serial: '#CAT-416F2-2021-456', available: true },
  { id: 'MAQ-003', name: 'Vibrocompactador BOMAG', serial: '#BOMAG-BW211-2020-789', available: false },
  { id: 'MAQ-004', name: 'Volqueta Kenworth', serial: '#KW-T800-2019-321', available: true }
];

const mockDocuments: DocumentStatus[] = [
  { name: 'RUT Actualizado', status: 'complete', details: 'Válido hasta 2027' },
  { name: 'Cámara de Comercio < 3 meses', status: 'complete', details: 'Exp: 15 Abr 2026' },
  { name: 'Póliza RCE $500M', status: 'complete', details: 'Vigente - $600M' },
  { name: 'Certificado SST', status: 'pending', details: 'En revisión' },
  { name: 'Planilla Seguridad Social', status: 'complete', details: 'Febrero 2026' }
];

export default function PartnerTenderPortal() {
  const navigate = useNavigate();
  const [selectedTender, setSelectedTender] = useState<Tender>(mockTenders[0]);
  const [assetMapping, setAssetMapping] = useState<Record<number, string>>({});

  const handleAssetMapping = (requirementId: number, assetId: string) => {
    setAssetMapping(prev => ({
      ...prev,
      [requirementId]: assetId
    }));
  };

  const completedMappings = Object.keys(assetMapping).length;
  const totalRequirements = selectedTender.requirements.length;
  const completedDocuments = mockDocuments.filter(d => d.status === 'complete').length;
  const totalDocuments = mockDocuments.length;
  const technicalCompliance = Math.round(
    ((completedMappings / totalRequirements) * 0.5 + 
     (completedDocuments / totalDocuments) * 0.5) * 100
  );

  return (
    <div 
      className="h-screen w-screen flex overflow-hidden"
      style={{ 
        fontFamily: 'var(--font-ui)',
        backgroundColor: '#121212',
        paddingBottom: '80px'
      }}
    >
      {/* Global Sidebar */}
      <GlobalSidebar />

      {/* Role Indicator */}
      <RoleIndicator role="partner" />

      {/* Left Panel - Tender Feed */}
      <div 
        className="flex flex-col"
        style={{ 
          width: '280px',
          backgroundColor: '#151515',
          borderRight: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        {/* Header */}
        <div className="px-4 py-4" style={{ borderBottom: '1px solid var(--stroke-color)' }}>
          <h1 style={{ 
            color: 'var(--text-on-dark)', 
            fontSize: '16px',
            fontWeight: 700,
            marginBottom: '4px'
          }}>
            Mis Oportunidades
          </h1>
          <p style={{ 
            color: 'var(--text-inactive)', 
            fontSize: '10px'
          }}>
            Mission Log - Portal del Partner
          </p>
        </div>

        {/* Tender List */}
        <div className="flex-1 overflow-y-auto">
          {mockTenders.map((tender) => (
            <div
              key={tender.id}
              onClick={() => setSelectedTender(tender)}
              className="px-4 py-4 cursor-pointer transition-colors"
              style={{
                borderBottom: '1px solid var(--stroke-color)',
                backgroundColor: selectedTender?.id === tender.id 
                  ? 'rgba(46, 125, 50, 0.15)' 
                  : 'transparent',
                borderLeft: selectedTender?.id === tender.id 
                  ? '3px solid #2E7D32' 
                  : '3px solid transparent'
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div style={{ 
                    color: 'var(--text-on-dark)', 
                    fontSize: '13px',
                    fontWeight: 600,
                    marginBottom: '4px',
                    lineHeight: '1.3'
                  }}>
                    {tender.title}
                  </div>
                  <div style={{ 
                    color: '#2E7D32', 
                    fontSize: '10px',
                    fontFamily: 'var(--font-data)',
                    fontWeight: 600
                  }}>
                    {tender.id}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span
                  className="px-2 py-1 rounded"
                  style={{
                    backgroundColor: tender.status === 'Asignado' 
                      ? 'rgba(76, 175, 80, 0.2)' 
                      : tender.status === 'En Postulación'
                      ? 'rgba(255, 152, 0, 0.2)'
                      : 'rgba(29, 153, 204, 0.2)',
                    color: tender.status === 'Asignado' 
                      ? '#4CAF50' 
                      : tender.status === 'En Postulación'
                      ? '#FF9800'
                      : '#1D99CC',
                    fontSize: '9px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.3px'
                  }}
                >
                  {tender.status}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <Clock size={10} style={{ color: 'var(--text-inactive)' }} />
                <span style={{ 
                  color: 'var(--text-inactive)', 
                  fontSize: '10px'
                }}>
                  Cierre: {tender.closeDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Central Workspace - The Workbench */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div 
          className="px-6 py-4"
          style={{ 
            backgroundColor: 'var(--panel-bg-color)',
            borderBottom: '1px solid var(--stroke-color)'
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 style={{ 
                color: 'var(--text-on-dark)', 
                fontSize: '18px',
                fontWeight: 700,
                marginBottom: '4px'
              }}>
                {selectedTender.title}
              </h1>
              <div className="flex items-center gap-3">
                <span style={{ 
                  color: '#2E7D32', 
                  fontSize: '11px',
                  fontFamily: 'var(--font-data)',
                  fontWeight: 600
                }}>
                  {selectedTender.id}
                </span>
                <span style={{ color: 'var(--text-inactive)', fontSize: '11px' }}>|</span>
                <span style={{ 
                  color: 'var(--text-inactive)', 
                  fontSize: '11px'
                }}>
                  Cierre: {selectedTender.closeDate}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tender Specs Summary */}
        <div 
          className="px-6 py-4"
          style={{ 
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid #E5E7EB'
          }}
        >
          <h2 style={{ 
            color: 'var(--text-on-light)', 
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '12px'
          }}>
            Ítems Requeridos
          </h2>

          <div className="grid grid-cols-3 gap-3">
            {selectedTender.requirements.map((req) => (
              <div 
                key={req.id}
                className="p-3 rounded-lg"
                style={{ 
                  backgroundColor: '#F9FAFB',
                  border: '1px solid #E5E7EB'
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div 
                    className="w-6 h-6 rounded flex items-center justify-center"
                    style={{ backgroundColor: '#2E7D32' }}
                  >
                    <span style={{ 
                      color: '#FFFFFF', 
                      fontSize: '11px',
                      fontWeight: 700,
                      fontFamily: 'var(--font-data)'
                    }}>
                      {req.id}
                    </span>
                  </div>
                  <span style={{ 
                    color: '#6B7280', 
                    fontSize: '9px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {req.category}
                  </span>
                </div>
                <div style={{ 
                  color: 'var(--text-on-light)', 
                  fontSize: '12px',
                  fontWeight: 600,
                  marginBottom: '2px'
                }}>
                  {req.name}
                </div>
                <div style={{ 
                  color: '#6B7280', 
                  fontSize: '11px',
                  fontFamily: 'var(--font-data)'
                }}>
                  {req.specs}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Asset Matching Section */}
        <div className="flex-1 overflow-auto px-6 py-4">
          <div className="mb-3">
            <h2 style={{ 
              color: 'var(--text-on-dark)', 
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '2px'
            }}>
              Asignación de Activos
            </h2>
            <p style={{ 
              color: 'var(--text-inactive)', 
              fontSize: '10px'
            }}>
              Selecciona tu maquinaria disponible para cada ítem requerido
            </p>
          </div>

          <div className="space-y-3">
            {selectedTender.requirements.map((req) => (
              <div 
                key={req.id}
                className="p-4 rounded-lg"
                style={{ 
                  backgroundColor: 'var(--panel-bg-color)',
                  border: '1px solid var(--stroke-color)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Wrench size={14} style={{ color: '#2E7D32' }} />
                      <span style={{ 
                        color: 'var(--text-on-dark)', 
                        fontSize: '12px',
                        fontWeight: 600
                      }}>
                        Ítem {req.id}: {req.name}
                      </span>
                    </div>
                    <div style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '11px',
                      fontFamily: 'var(--font-data)'
                    }}>
                      Especificación requerida: {req.specs}
                    </div>
                  </div>

                  <div style={{ minWidth: '250px' }}>
                    <label style={{
                      display: 'block',
                      color: 'var(--text-inactive)',
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '6px'
                    }}>
                      Asignar Activo
                    </label>
                    <select
                      value={assetMapping[req.id] || ''}
                      onChange={(e) => handleAssetMapping(req.id, e.target.value)}
                      style={{
                        width: '100%',
                        height: '36px',
                        padding: '0 12px',
                        backgroundColor: 'var(--ui-bg-color)',
                        border: assetMapping[req.id] 
                          ? '1px solid #2E7D32' 
                          : '1px solid var(--stroke-color)',
                        borderRadius: '4px',
                        color: 'var(--text-on-dark)',
                        fontSize: '11px'
                      }}
                    >
                      <option value="">Seleccionar...</option>
                      {mockPartnerAssets
                        .filter(a => a.available)
                        .map(asset => (
                          <option key={asset.id} value={asset.id}>
                            {asset.name} ({asset.serial})
                          </option>
                        ))}
                    </select>
                  </div>

                  {assetMapping[req.id] && (
                    <CheckCircle2 size={20} style={{ color: '#4CAF50', marginTop: '24px' }} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Compliance Tracker */}
      <div 
        className="flex flex-col overflow-hidden"
        style={{ 
          width: '300px',
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
            Compliance Tracker
          </h2>
          <p style={{ 
            color: 'var(--text-inactive)', 
            fontSize: '10px'
          }}>
            Estado de documentación
          </p>
        </div>

        {/* Progress Gauge */}
        <div 
          className="mx-4 my-4 p-4 rounded-lg"
          style={{ 
            backgroundColor: 'rgba(46, 125, 50, 0.1)',
            border: '1px solid rgba(46, 125, 50, 0.3)'
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="relative flex items-center justify-center"
              style={{ width: '70px', height: '70px' }}
            >
              <svg width="70" height="70" style={{ transform: 'rotate(-90deg)' }}>
                <circle
                  cx="35"
                  cy="35"
                  r="30"
                  fill="none"
                  stroke="var(--ui-bg-color)"
                  strokeWidth="6"
                />
                <circle
                  cx="35"
                  cy="35"
                  r="30"
                  fill="none"
                  stroke="#2E7D32"
                  strokeWidth="6"
                  strokeDasharray={`${2 * Math.PI * 30}`}
                  strokeDashoffset={`${2 * Math.PI * 30 * (1 - technicalCompliance / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div 
                className="absolute"
                style={{
                  color: '#2E7D32',
                  fontSize: '16px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-data)'
                }}
              >
                {technicalCompliance}%
              </div>
            </div>

            <div className="flex-1">
              <div style={{ 
                color: 'var(--text-on-dark)', 
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '2px'
              }}>
                Cumplimiento Técnico
              </div>
              <div style={{ 
                color: 'var(--text-inactive)', 
                fontSize: '10px'
              }}>
                {completedMappings}/{totalRequirements} equipos asignados
              </div>
              <div style={{ 
                color: 'var(--text-inactive)', 
                fontSize: '10px'
              }}>
                {completedDocuments}/{totalDocuments} documentos OK
              </div>
            </div>
          </div>
        </div>

        {/* Document Checklist */}
        <div className="flex-1 overflow-y-auto px-4">
          <div className="mb-3">
            <h3 style={{ 
              color: 'var(--text-on-dark)', 
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Documentos Requeridos
            </h3>
          </div>

          <div className="space-y-2">
            {mockDocuments.map((doc, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg"
                style={{ 
                  backgroundColor: doc.status === 'complete'
                    ? 'rgba(76, 175, 80, 0.1)'
                    : doc.status === 'pending'
                    ? 'rgba(255, 152, 0, 0.1)'
                    : 'rgba(244, 67, 54, 0.1)',
                  border: doc.status === 'complete'
                    ? '1px solid rgba(76, 175, 80, 0.3)'
                    : doc.status === 'pending'
                    ? '1px solid rgba(255, 152, 0, 0.3)'
                    : '1px solid rgba(244, 67, 54, 0.3)'
                }}
              >
                <div className="flex items-start gap-2">
                  {doc.status === 'complete' && (
                    <CheckCircle2 size={14} style={{ color: '#4CAF50', marginTop: '2px' }} />
                  )}
                  {doc.status === 'pending' && (
                    <Clock size={14} style={{ color: '#FF9800', marginTop: '2px' }} />
                  )}
                  {doc.status === 'missing' && (
                    <AlertCircle size={14} style={{ color: '#F44336', marginTop: '2px' }} />
                  )}
                  
                  <div className="flex-1">
                    <div style={{ 
                      color: 'var(--text-on-dark)', 
                      fontSize: '11px',
                      fontWeight: 600,
                      marginBottom: '2px'
                    }}>
                      {doc.name}
                    </div>
                    {doc.details && (
                      <div style={{ 
                        color: 'var(--text-inactive)', 
                        fontSize: '9px',
                        fontFamily: 'var(--font-data)'
                      }}>
                        {doc.details}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Special Requirements */}
          <div 
            className="mt-4 p-3 rounded-lg"
            style={{ 
              backgroundColor: 'rgba(29, 153, 204, 0.1)',
              border: '1px solid rgba(29, 153, 204, 0.3)'
            }}
          >
            <div className="flex items-start gap-2 mb-2">
              <Shield size={14} style={{ color: '#1D99CC', marginTop: '2px' }} />
              <div style={{ 
                color: 'var(--text-on-dark)', 
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Póliza RCE
              </div>
            </div>
            <div style={{ 
              color: '#1D99CC', 
              fontSize: '14px',
              fontWeight: 700,
              fontFamily: 'var(--font-data)',
              marginBottom: '2px'
            }}>
              $500,000,000 COP
            </div>
            <div style={{ 
              color: 'var(--text-inactive)', 
              fontSize: '9px'
            }}>
              Mínimo requerido
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <ActionBar
        role="partner"
        onSubmit={() => alert('Postulación enviada')}
        onSaveDraft={() => alert('Borrador guardado')}
        disabled={technicalCompliance < 100}
      />
    </div>
  );
}