import { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  TrendingUp,
  DollarSign,
  MapPin,
  Users,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Shield
} from 'lucide-react';
import GlobalSidebar from '../components/GlobalSidebar';
import RoleIndicator from '../components/RoleIndicator';
import ActionBar from '../components/ActionBar';

interface Partner {
  id: string;
  name: string;
  scoreSST: number;
  economicBid: number;
  localPriority: boolean;
  genderScore: number;
  location: string;
  polizaRCE: string;
  polizaAmount: number;
  documents: PartnerDocument[];
  habilitado: boolean;
}

interface PartnerDocument {
  name: string;
  status: 'approved' | 'pending' | 'rejected';
  url?: string;
}

const mockPartners: Partner[] = [
  {
    id: 'SST-001',
    name: 'Soluciones Civiles SAS',
    scoreSST: 92,
    economicBid: 45000000,
    localPriority: true,
    genderScore: 35,
    location: 'Antioquia',
    polizaRCE: 'Vigente',
    polizaAmount: 600000000,
    habilitado: true,
    documents: [
      { name: 'RUT Actualizado', status: 'approved' },
      { name: 'Póliza RCE $500M', status: 'approved' },
      { name: 'Certificado SST', status: 'approved' }
    ]
  },
  {
    id: 'SST-002',
    name: 'Construcciones Andinas SAS',
    scoreSST: 85,
    economicBid: 42000000,
    localPriority: false,
    genderScore: 28,
    location: 'Cundinamarca',
    polizaRCE: 'Vigente',
    polizaAmount: 500000000,
    habilitado: false,
    documents: [
      { name: 'RUT Actualizado', status: 'approved' },
      { name: 'Póliza RCE $500M', status: 'approved' },
      { name: 'Certificado SST', status: 'pending' }
    ]
  },
  {
    id: 'SST-003',
    name: 'Maquinaria del Valle LTDA',
    scoreSST: 88,
    economicBid: 48000000,
    localPriority: true,
    genderScore: 42,
    location: 'Antioquia',
    polizaRCE: 'Vigente',
    polizaAmount: 550000000,
    habilitado: true,
    documents: [
      { name: 'RUT Actualizado', status: 'approved' },
      { name: 'Póliza RCE $500M', status: 'approved' },
      { name: 'Certificado SST', status: 'approved' }
    ]
  },
  {
    id: 'SST-004',
    name: 'Transportes Express',
    scoreSST: 78,
    economicBid: 40000000,
    localPriority: false,
    genderScore: 25,
    location: 'Atlántico',
    polizaRCE: 'Pendiente',
    polizaAmount: 450000000,
    habilitado: false,
    documents: [
      { name: 'RUT Actualizado', status: 'approved' },
      { name: 'Póliza RCE $500M', status: 'rejected' },
      { name: 'Certificado SST', status: 'approved' }
    ]
  }
];

export default function SSTEvaluationEngine() {
  const navigate = useNavigate();
  const [selectedPartner, setSelectedPartner] = useState<Partner>(mockPartners[0]);
  const [sortBy, setSortBy] = useState<'scoreSST' | 'economicBid' | 'genderScore'>('scoreSST');

  const sortedPartners = [...mockPartners].sort((a, b) => {
    if (sortBy === 'economicBid') return a.economicBid - b.economicBid;
    return b[sortBy] - a[sortBy];
  });

  const formatCurrency = (amount: number) => {
    return `$${(amount / 1000000).toFixed(1)}M COP`;
  };

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
      <RoleIndicator role="admin" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div 
          className="px-6 py-5"
          style={{ 
            backgroundColor: 'var(--panel-bg-color)',
            borderBottom: '1px solid var(--stroke-color)'
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 style={{ 
                color: 'var(--text-on-dark)', 
                fontSize: '20px',
                fontWeight: 700,
                marginBottom: '4px'
              }}>
                Evaluación de Pliego: Maquinaria Amarilla
              </h1>
              <div className="flex items-center gap-3">
                <span style={{ 
                  color: 'var(--accent-color)', 
                  fontSize: '11px',
                  fontFamily: 'var(--font-data)',
                  fontWeight: 600
                }}>
                  SOL-2026-001
                </span>
                <span style={{ color: 'var(--text-inactive)', fontSize: '11px' }}>|</span>
                <span style={{ 
                  color: 'var(--text-inactive)', 
                  fontSize: '11px'
                }}>
                  {sortedPartners.length} postulaciones recibidas
                </span>
              </div>
            </div>

            {/* Sort Controls */}
            <div className="flex items-center gap-2">
              <span style={{ 
                color: 'var(--text-inactive)', 
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Ordenar por:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                style={{
                  height: '32px',
                  padding: '0 12px',
                  backgroundColor: 'var(--ui-bg-color)',
                  border: '1px solid var(--stroke-color)',
                  borderRadius: '4px',
                  color: 'var(--text-on-dark)',
                  fontSize: '11px'
                }}
              >
                <option value="scoreSST">Score SST</option>
                <option value="economicBid">Oferta Económica</option>
                <option value="genderScore">Equidad de Género</option>
              </select>
            </div>
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="flex-1 overflow-auto">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ position: 'sticky', top: 0, zIndex: 10 }}>
              <tr style={{ backgroundColor: 'var(--panel-bg-color)' }}>
                <th style={{ 
                  padding: '10px 16px', 
                  textAlign: 'left',
                  color: 'var(--text-inactive)',
                  fontSize: '10px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '1px solid var(--stroke-color)',
                  width: '25%'
                }}>
                  Partner
                </th>
                <th style={{ 
                  padding: '10px 16px', 
                  textAlign: 'center',
                  color: 'var(--text-inactive)',
                  fontSize: '10px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '1px solid var(--stroke-color)',
                  width: '12%'
                }}>
                  Score SST
                  <div style={{ 
                    color: 'var(--text-inactive)', 
                    fontSize: '9px',
                    fontWeight: 400,
                    marginTop: '2px'
                  }}>
                    Min 86%
                  </div>
                </th>
                <th style={{ 
                  padding: '10px 16px', 
                  textAlign: 'center',
                  color: 'var(--text-inactive)',
                  fontSize: '10px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '1px solid var(--stroke-color)',
                  width: '15%'
                }}>
                  Oferta Económica
                </th>
                <th style={{ 
                  padding: '10px 16px', 
                  textAlign: 'center',
                  color: 'var(--text-inactive)',
                  fontSize: '10px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '1px solid var(--stroke-color)',
                  width: '12%'
                }}>
                  Prioridad Local
                </th>
                <th style={{ 
                  padding: '10px 16px', 
                  textAlign: 'center',
                  color: 'var(--text-inactive)',
                  fontSize: '10px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '1px solid var(--stroke-color)',
                  width: '13%'
                }}>
                  Equidad Género
                  <div style={{ 
                    color: 'var(--text-inactive)', 
                    fontSize: '9px',
                    fontWeight: 400,
                    marginTop: '2px'
                  }}>
                    30% mujeres
                  </div>
                </th>
                <th style={{ 
                  padding: '10px 16px', 
                  textAlign: 'center',
                  color: 'var(--text-inactive)',
                  fontSize: '10px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '1px solid var(--stroke-color)',
                  width: '13%'
                }}>
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedPartners.map((partner) => {
                const isInhabilitado = partner.scoreSST < 86;
                
                return (
                  <tr
                    key={partner.id}
                    onClick={() => setSelectedPartner(partner)}
                    className="cursor-pointer transition-colors"
                    style={{
                      backgroundColor: selectedPartner?.id === partner.id 
                        ? 'rgba(29, 153, 204, 0.1)' 
                        : isInhabilitado
                        ? 'rgba(244, 67, 54, 0.05)'
                        : 'transparent',
                      borderLeft: selectedPartner?.id === partner.id 
                        ? '3px solid var(--accent-color)' 
                        : '3px solid transparent',
                      borderBottom: '1px solid var(--stroke-color)'
                    }}
                  >
                    {/* Partner Name */}
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ 
                        color: 'var(--text-on-dark)', 
                        fontSize: '13px',
                        fontWeight: 600,
                        marginBottom: '2px'
                      }}>
                        {partner.name}
                      </div>
                      <div style={{ 
                        color: 'var(--accent-color)', 
                        fontSize: '10px',
                        fontFamily: 'var(--font-data)',
                        fontWeight: 600
                      }}>
                        {partner.id}
                      </div>
                    </td>

                    {/* Score SST */}
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <div className="flex flex-col items-center">
                        <div style={{ 
                          color: isInhabilitado ? '#F44336' : '#4CAF50', 
                          fontSize: '18px',
                          fontWeight: 700,
                          fontFamily: 'var(--font-data)',
                          marginBottom: '4px'
                        }}>
                          {partner.scoreSST}%
                        </div>
                        {isInhabilitado && (
                          <div className="flex items-center gap-1 px-2 py-1 rounded" style={{
                            backgroundColor: 'rgba(244, 67, 54, 0.2)',
                            color: '#F44336',
                            fontSize: '9px',
                            fontWeight: 700,
                            textTransform: 'uppercase'
                          }}>
                            <AlertTriangle size={10} />
                            Inhabilitado
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Economic Bid */}
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <div style={{ 
                        color: 'var(--text-on-dark)', 
                        fontSize: '14px',
                        fontWeight: 700,
                        fontFamily: 'var(--font-data)'
                      }}>
                        {formatCurrency(partner.economicBid)}
                      </div>
                    </td>

                    {/* Local Priority */}
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <div className="flex items-center justify-center gap-2">
                        <MapPin size={14} style={{ 
                          color: partner.localPriority ? '#4CAF50' : 'var(--text-inactive)' 
                        }} />
                        <span style={{ 
                          color: partner.localPriority ? '#4CAF50' : 'var(--text-inactive)', 
                          fontSize: '11px',
                          fontWeight: 600
                        }}>
                          {partner.location}
                        </span>
                      </div>
                    </td>

                    {/* Gender Score */}
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <div className="flex flex-col items-center">
                        <div style={{ 
                          color: partner.genderScore >= 30 ? '#4CAF50' : '#FF9800', 
                          fontSize: '16px',
                          fontWeight: 700,
                          fontFamily: 'var(--font-data)',
                          marginBottom: '2px'
                        }}>
                          {partner.genderScore}%
                        </div>
                        <div 
                          style={{
                            width: '60px',
                            height: '4px',
                            backgroundColor: 'var(--ui-bg-color)',
                            borderRadius: '2px',
                            overflow: 'hidden'
                          }}
                        >
                          <div 
                            style={{
                              width: `${partner.genderScore}%`,
                              height: '100%',
                              backgroundColor: partner.genderScore >= 30 ? '#4CAF50' : '#FF9800'
                            }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Status */}
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      {partner.habilitado ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded" style={{
                          backgroundColor: 'rgba(76, 175, 80, 0.2)',
                          color: '#4CAF50',
                          fontSize: '10px',
                          fontWeight: 700,
                          textTransform: 'uppercase'
                        }}>
                          <CheckCircle2 size={12} />
                          Habilitado
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded" style={{
                          backgroundColor: 'rgba(244, 67, 54, 0.2)',
                          color: '#F44336',
                          fontSize: '10px',
                          fontWeight: 700,
                          textTransform: 'uppercase'
                        }}>
                          <AlertTriangle size={12} />
                          No Habilitado
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Inspector - The Auditor */}
      <div 
        className="flex flex-col overflow-hidden"
        style={{ 
          width: '360px',
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
            Auditor - Detalle Partner
          </h2>
          <p style={{ 
            color: 'var(--text-inactive)', 
            fontSize: '10px',
            fontFamily: 'var(--font-data)'
          }}>
            {selectedPartner.id}
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {/* Partner Info */}
          <div>
            <h3 style={{ 
              color: 'var(--text-on-dark)', 
              fontSize: '16px',
              fontWeight: 700,
              marginBottom: '4px'
            }}>
              {selectedPartner.name}
            </h3>
            <p style={{ 
              color: 'var(--text-inactive)', 
              fontSize: '11px'
            }}>
              {selectedPartner.location}
            </p>
          </div>

          {/* Score Breakdown */}
          <div 
            className="p-4 rounded-lg"
            style={{ 
              backgroundColor: selectedPartner.scoreSST >= 86 
                ? 'rgba(76, 175, 80, 0.1)' 
                : 'rgba(244, 67, 54, 0.1)',
              border: selectedPartner.scoreSST >= 86
                ? '1px solid rgba(76, 175, 80, 0.3)'
                : '1px solid rgba(244, 67, 54, 0.3)'
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={16} style={{ 
                color: selectedPartner.scoreSST >= 86 ? '#4CAF50' : '#F44336' 
              }} />
              <span style={{ 
                color: 'var(--text-on-dark)', 
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Score SST
              </span>
            </div>
            <div style={{ 
              color: selectedPartner.scoreSST >= 86 ? '#4CAF50' : '#F44336', 
              fontSize: '32px',
              fontWeight: 700,
              fontFamily: 'var(--font-data)',
              lineHeight: '1'
            }}>
              {selectedPartner.scoreSST}%
            </div>
            <div style={{ 
              color: 'var(--text-inactive)', 
              fontSize: '10px',
              marginTop: '4px'
            }}>
              {selectedPartner.scoreSST >= 86 
                ? '✓ Cumple mínimo 86%' 
                : '✗ Menor al 86% requerido'}
            </div>
          </div>

          {/* Póliza RCE Verification */}
          <div>
            <div style={{ 
              color: 'var(--text-inactive)', 
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '8px'
            }}>
              Verificación Póliza RCE
            </div>
            <div 
              className="p-4 rounded-lg"
              style={{ 
                backgroundColor: selectedPartner.polizaAmount >= 500000000
                  ? 'rgba(76, 175, 80, 0.1)'
                  : 'rgba(244, 67, 54, 0.1)',
                border: selectedPartner.polizaAmount >= 500000000
                  ? '1px solid rgba(76, 175, 80, 0.3)'
                  : '1px solid rgba(244, 67, 54, 0.3)'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Shield size={16} style={{ 
                  color: selectedPartner.polizaAmount >= 500000000 ? '#4CAF50' : '#F44336' 
                }} />
                <span style={{ 
                  color: 'var(--text-on-dark)', 
                  fontSize: '11px',
                  fontWeight: 600
                }}>
                  Estado: {selectedPartner.polizaRCE}
                </span>
              </div>
              <div style={{ 
                color: selectedPartner.polizaAmount >= 500000000 ? '#4CAF50' : '#F44336', 
                fontSize: '20px',
                fontWeight: 700,
                fontFamily: 'var(--font-data)',
                marginBottom: '2px'
              }}>
                {formatCurrency(selectedPartner.polizaAmount)}
              </div>
              <div className="flex items-center justify-between" style={{ 
                color: 'var(--text-inactive)', 
                fontSize: '9px',
                marginTop: '4px'
              }}>
                <span>Requerido: $500M</span>
                {selectedPartner.polizaAmount >= 500000000 && (
                  <span style={{ color: '#4CAF50' }}>✓ Cumple</span>
                )}
                {selectedPartner.polizaAmount < 500000000 && (
                  <span style={{ color: '#F44336' }}>✗ Insuficiente</span>
                )}
              </div>
            </div>
          </div>

          {/* Additional Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div 
              className="p-3 rounded-lg"
              style={{ 
                backgroundColor: 'rgba(29, 153, 204, 0.1)',
                border: '1px solid rgba(29, 153, 204, 0.3)'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <DollarSign size={14} style={{ color: '#1D99CC' }} />
                <span style={{ 
                  color: 'var(--text-inactive)', 
                  fontSize: '9px',
                  textTransform: 'uppercase'
                }}>
                  Oferta
                </span>
              </div>
              <div style={{ 
                color: '#1D99CC', 
                fontSize: '14px',
                fontWeight: 700,
                fontFamily: 'var(--font-data)'
              }}>
                {formatCurrency(selectedPartner.economicBid)}
              </div>
            </div>

            <div 
              className="p-3 rounded-lg"
              style={{ 
                backgroundColor: selectedPartner.genderScore >= 30
                  ? 'rgba(76, 175, 80, 0.1)'
                  : 'rgba(255, 152, 0, 0.1)',
                border: selectedPartner.genderScore >= 30
                  ? '1px solid rgba(76, 175, 80, 0.3)'
                  : '1px solid rgba(255, 152, 0, 0.3)'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Users size={14} style={{ 
                  color: selectedPartner.genderScore >= 30 ? '#4CAF50' : '#FF9800' 
                }} />
                <span style={{ 
                  color: 'var(--text-inactive)', 
                  fontSize: '9px',
                  textTransform: 'uppercase'
                }}>
                  Género
                </span>
              </div>
              <div style={{ 
                color: selectedPartner.genderScore >= 30 ? '#4CAF50' : '#FF9800', 
                fontSize: '14px',
                fontWeight: 700,
                fontFamily: 'var(--font-data)'
              }}>
                {selectedPartner.genderScore}%
              </div>
            </div>
          </div>

          {/* Documents */}
          <div>
            <div style={{ 
              color: 'var(--text-inactive)', 
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '8px'
            }}>
              Documentos Cargados
            </div>
            <div className="space-y-2">
              {selectedPartner.documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg flex items-center justify-between"
                  style={{ 
                    backgroundColor: 'var(--ui-bg-color)',
                    border: '1px solid var(--stroke-color)'
                  }}
                >
                  <div className="flex items-center gap-2">
                    <FileText size={14} style={{ color: 'var(--accent-color)' }} />
                    <span style={{ 
                      color: 'var(--text-on-dark)', 
                      fontSize: '11px'
                    }}>
                      {doc.name}
                    </span>
                  </div>
                  {doc.status === 'approved' && (
                    <CheckCircle2 size={14} style={{ color: '#4CAF50' }} />
                  )}
                  {doc.status === 'pending' && (
                    <AlertTriangle size={14} style={{ color: '#FF9800' }} />
                  )}
                  {doc.status === 'rejected' && (
                    <AlertTriangle size={14} style={{ color: '#F44336' }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Warning if not habilitado */}
          {!selectedPartner.habilitado && (
            <div 
              className="p-3 rounded-lg flex items-start gap-2"
              style={{ 
                backgroundColor: 'rgba(244, 67, 54, 0.1)',
                border: '1px solid rgba(244, 67, 54, 0.3)'
              }}
            >
              <AlertTriangle size={16} style={{ color: '#F44336', marginTop: '2px' }} />
              <div>
                <div style={{ 
                  color: '#F44336', 
                  fontSize: '11px',
                  fontWeight: 700,
                  marginBottom: '4px'
                }}>
                  Partner No Habilitado
                </div>
                <div style={{ 
                  color: 'var(--text-inactive)', 
                  fontSize: '10px',
                  lineHeight: '1.4'
                }}>
                  {selectedPartner.scoreSST < 86 
                    ? 'Score SST inferior al mínimo requerido (86%)'
                    : 'Documentación incompleta o rechazada'}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats Footer */}
        <div 
          className="px-4 py-3"
          style={{ 
            borderTop: '1px solid var(--stroke-color)',
            backgroundColor: 'rgba(29, 153, 204, 0.05)'
          }}
        >
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div style={{ 
                color: 'var(--text-inactive)', 
                fontSize: '9px',
                textTransform: 'uppercase',
                marginBottom: '2px'
              }}>
                Total
              </div>
              <div style={{ 
                color: 'var(--accent-color)', 
                fontSize: '16px',
                fontWeight: 700,
                fontFamily: 'var(--font-data)'
              }}>
                {mockPartners.length}
              </div>
            </div>
            <div>
              <div style={{ 
                color: 'var(--text-inactive)', 
                fontSize: '9px',
                textTransform: 'uppercase',
                marginBottom: '2px'
              }}>
                Habilitados
              </div>
              <div style={{ 
                color: '#4CAF50', 
                fontSize: '16px',
                fontWeight: 700,
                fontFamily: 'var(--font-data)'
              }}>
                {mockPartners.filter(p => p.habilitado).length}
              </div>
            </div>
            <div>
              <div style={{ 
                color: 'var(--text-inactive)', 
                fontSize: '9px',
                textTransform: 'uppercase',
                marginBottom: '2px'
              }}>
                Rechazados
              </div>
              <div style={{ 
                color: '#F44336', 
                fontSize: '16px',
                fontWeight: 700,
                fontFamily: 'var(--font-data)'
              }}>
                {mockPartners.filter(p => !p.habilitado).length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <ActionBar
        role="admin"
        onApprove={() => alert(`Contrato asignado a ${selectedPartner.name}`)}
        onReject={() => alert('Solicitar subsanación')}
        disabled={!selectedPartner.habilitado}
      />
    </div>
  );
}