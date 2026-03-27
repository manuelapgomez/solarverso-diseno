import { useState } from 'react';
import { UnifiedPartnerSidebar } from '../components/UnifiedPartnerSidebar'; // Updated import
import { Search, Eye, Upload, Trash2, AlertCircle, CheckCircle2, Shield, Award, MessageSquare, Send } from 'lucide-react';
import { ChatBox } from './PartnerPerfilChatBox';

type DocumentStatus = 'vigente' | 'proximo-vencer' | 'vencido' | 'faltante';
type CategoryType = 'all' | 'legal' | 'financiero' | 'sst' | 'ambiental' | 'equipos';

interface Document {
  id: string;
  name: string;
  status: DocumentStatus;
  category: 'legal' | 'financiero' | 'sst' | 'ambiental' | 'equipos';
  expiryDate?: string;
  daysUntilExpiry?: number;
  lastUpdated?: string;
  fileName?: string;
  scoreImpact: number;
  hasComments?: boolean;
  commentCount?: number;
  unreadComments?: boolean;
}

interface ChatMessage {
  id: string;
  sender: 'admin' | 'partner';
  message: string;
  timestamp: string;
}

// Mock chat messages for documents
const MOCK_CHAT_MESSAGES: Record<string, ChatMessage[]> = {
  'DOC-S-001': [
    {
      id: 'MSG-001',
      sender: 'admin',
      message: 'La póliza RCE está vencida. Por favor carga una póliza actualizada con vigencia mínima de 12 meses.',
      timestamp: '10 Dic 2026 14:22',
    },
    {
      id: 'MSG-002',
      sender: 'partner',
      message: 'Entendido. Ya tenemos la renovación en proceso con la aseguradora. ¿Puedo enviar el borrador?',
      timestamp: '10 Dic 2026 15:45',
    },
  ],
  'DOC-S-004': [
    {
      id: 'MSG-003',
      sender: 'admin',
      message: 'El certificado RETIE venció hace 4 días. Necesitamos urgente la certificación actualizada.',
      timestamp: '08 Dic 2026 09:15',
    },
  ],
};

const MOCK_DOCUMENTS: Document[] = [
  // LEGAL
  {
    id: 'DOC-L-001',
    name: 'RUT Actualizado',
    status: 'vigente',
    category: 'legal',
    lastUpdated: '05 Nov 2026',
    fileName: 'RUT_Empresa.pdf',
    scoreImpact: 95,
  },
  {
    id: 'DOC-L-002',
    name: 'Cámara de Comercio',
    status: 'proximo-vencer',
    category: 'legal',
    expiryDate: '17 Dic 2026',
    daysUntilExpiry: 5,
    fileName: 'Camara_Comercio.pdf',
    scoreImpact: 78,
  },
  {
    id: 'DOC-L-003',
    name: 'Certificado de Existencia',
    status: 'vigente',
    category: 'legal',
    lastUpdated: '12 Nov 2026',
    fileName: 'Certificado_Existencia.pdf',
    scoreImpact: 92,
  },
  {
    id: 'DOC-L-004',
    name: 'Certificado Antecedentes Judiciales',
    status: 'faltante',
    category: 'legal',
    scoreImpact: 0,
  },
  
  // FINANCIERO
  {
    id: 'DOC-F-001',
    name: 'Estados Financieros 2025',
    status: 'vigente',
    category: 'financiero',
    lastUpdated: '30 Nov 2026',
    fileName: 'EEFF_2025.pdf',
    scoreImpact: 96,
  },
  {
    id: 'DOC-F-002',
    name: 'Certificado Paz y Salvo DIAN',
    status: 'proximo-vencer',
    category: 'financiero',
    expiryDate: '19 Dic 2026',
    daysUntilExpiry: 7,
    fileName: 'Paz_Salvo_DIAN.pdf',
    scoreImpact: 74,
  },
  {
    id: 'DOC-F-003',
    name: 'Balance General Actualizado',
    status: 'vigente',
    category: 'financiero',
    lastUpdated: '01 Dic 2026',
    fileName: 'Balance_General.pdf',
    scoreImpact: 93,
  },
  
  // SST
  {
    id: 'DOC-S-001',
    name: 'Póliza RCE',
    status: 'vencido',
    category: 'sst',
    expiryDate: '10 Dic 2026',
    daysUntilExpiry: -2,
    scoreImpact: 0,
    hasComments: true,
    commentCount: 2,
    unreadComments: true,
  },
  {
    id: 'DOC-S-002',
    name: 'ARL Vigente',
    status: 'vigente',
    category: 'sst',
    lastUpdated: '01 Dic 2026',
    fileName: 'ARL.pdf',
    scoreImpact: 98,
  },
  {
    id: 'DOC-S-003',
    name: 'Sistema de Gestión SST',
    status: 'vigente',
    category: 'sst',
    lastUpdated: '15 Nov 2026',
    fileName: 'SG_SST.pdf',
    scoreImpact: 95,
  },
  {
    id: 'DOC-S-004',
    name: 'Certificado RETIE',
    status: 'vencido',
    category: 'sst',
    expiryDate: '08 Dic 2026',
    daysUntilExpiry: -4,
    scoreImpact: 0,
    hasComments: true,
    commentCount: 1,
    unreadComments: true,
  },
  {
    id: 'DOC-S-005',
    name: 'Plan de Emergencias',
    status: 'vigente',
    category: 'sst',
    lastUpdated: '10 Nov 2026',
    fileName: 'Plan_Emergencias.pdf',
    scoreImpact: 92,
  },
  
  // AMBIENTAL
  {
    id: 'DOC-A-001',
    name: 'Licencia Ambiental',
    status: 'vigente',
    category: 'ambiental',
    lastUpdated: '10 Nov 2026',
    fileName: 'Licencia_Ambiental.pdf',
    scoreImpact: 96,
  },
  {
    id: 'DOC-A-002',
    name: 'Plan de Manejo Ambiental',
    status: 'vigente',
    category: 'ambiental',
    lastUpdated: '15 Nov 2026',
    fileName: 'PMA.pdf',
    scoreImpact: 94,
  },
  {
    id: 'DOC-A-003',
    name: 'Permiso Vertimientos',
    status: 'proximo-vencer',
    category: 'ambiental',
    expiryDate: '22 Dic 2026',
    daysUntilExpiry: 10,
    fileName: 'Permiso_Vertimientos.pdf',
    scoreImpact: 77,
  },
  {
    id: 'DOC-A-004',
    name: 'Certificado Ruido Ambiental',
    status: 'vencido',
    category: 'ambiental',
    expiryDate: '05 Dic 2026',
    daysUntilExpiry: -7,
    scoreImpact: 0,
  },
  
  // EQUIPOS
  {
    id: 'DOC-E-001',
    name: 'Certificado RETIE Equipos',
    status: 'vigente',
    category: 'equipos',
    lastUpdated: '20 Nov 2026',
    fileName: 'RETIE_Equipos.pdf',
    scoreImpact: 94,
  },
  {
    id: 'DOC-E-002',
    name: 'Mantenimiento Maquinaria Pesada',
    status: 'vigente',
    category: 'equipos',
    lastUpdated: '25 Nov 2026',
    fileName: 'Mant_Maquinaria.pdf',
    scoreImpact: 91,
  },
  {
    id: 'DOC-E-003',
    name: 'Revisión Técnico-Mecánica',
    status: 'proximo-vencer',
    category: 'equipos',
    expiryDate: '18 Dic 2026',
    daysUntilExpiry: 6,
    fileName: 'RTM_Vehiculos.pdf',
    scoreImpact: 76,
  },
];

const COMPANY_INFO = {
  name: 'Construcciones Eléctricas SAS',
  nit: '900.XXX.XXX',
  representante: 'Juan Pérez',
  location: 'Medellín, ANT',
  personalActivo: 24,
  description: 'Especialistas en montaje fotovoltaico y obra civil para MGS. +5 años de experiencia en el sector energético, con certificaciones ISO 9001 y equipo técnico altamente calificado.',
  verified: true,
  sstScore: 86,
};

export default function PartnerPerfil() {
  const [activeTab, setActiveTab] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [activeChatDoc, setActiveChatDoc] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<Record<string, ChatMessage[]>>(MOCK_CHAT_MESSAGES);
  const [newMessage, setNewMessage] = useState('');

  const getFilteredDocuments = () => {
    let filtered = MOCK_DOCUMENTS;

    // Apply tab filter
    if (activeTab !== 'all') {
      filtered = filtered.filter((d) => d.category === activeTab);
    }

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter((d) =>
        d.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredDocs = getFilteredDocuments();

  const getCategoryCount = (category: CategoryType) => {
    if (category === 'all') return MOCK_DOCUMENTS.length;
    return MOCK_DOCUMENTS.filter((d) => d.category === category).length;
  };

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: '#050505',
      }}
    >
      <UnifiedPartnerSidebar />

      <div
        className="flex-1 flex"
        style={{
          marginLeft: '240px', // Updated to match new sidebar width
        }}
      >
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* PROFILE HEADER */}
          <div className="relative">
            {/* Cover Image */}
            <div
              className="relative overflow-hidden"
              style={{
                height: '180px',
                background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)',
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=300&fit=crop")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.2,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, transparent 0%, #050505 100%)',
                }}
              />
            </div>

            {/* Company Logo */}
            <div
              className="absolute"
              style={{
                left: '48px',
                bottom: '-40px',
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#121212',
                  border: '2px solid #1D99CC',
                  borderRadius: '8px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div
                  style={{
                    color: '#1D99CC',
                    fontSize: '48px',
                    fontWeight: '700',
                  }}
                >
                  CE
                </div>
              </div>
            </div>
          </div>

          {/* Company Info Section */}
          <div
            className="px-12 pt-14 pb-6"
            style={{
              borderBottom: '0.5px solid #333333',
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1" style={{ paddingLeft: '132px' }}>
                {/* Company Name */}
                <div className="flex items-center gap-3 mb-2">
                  <h1
                    style={{
                      color: '#E0E0E0',
                      fontSize: '28px',
                      fontWeight: '700',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {COMPANY_INFO.name}
                  </h1>
                  {COMPANY_INFO.verified && (
                    <Shield
                      style={{
                        width: '20px',
                        height: '20px',
                        color: '#1D99CC',
                        fill: '#1D99CC',
                      }}
                    />
                  )}
                </div>

                {/* Description */}
                <p
                  style={{
                    color: '#B0B0B0',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    maxWidth: '720px',
                    marginBottom: '16px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {COMPANY_INFO.description}
                </p>

                {/* Badges */}
                <div className="flex items-center gap-3">
                  <div
                    className="px-3 py-1.5 rounded flex items-center gap-2"
                    style={{
                      backgroundColor: 'rgba(29, 153, 204, 0.15)',
                      border: '0.5px solid #1D99CC',
                    }}
                  >
                    <Award style={{ width: '14px', height: '14px', color: '#1D99CC' }} />
                    <span
                      style={{
                        color: '#1D99CC',
                        fontSize: '11px',
                        fontWeight: '600',
                      }}
                    >
                      Verified Partner
                    </span>
                  </div>

                  <div
                    className="px-3 py-1.5 rounded"
                    style={{
                      backgroundColor: 'rgba(0, 200, 83, 0.15)',
                      border: '0.5px solid #00C853',
                    }}
                  >
                    <span
                      style={{
                        color: '#00C853',
                        fontSize: '11px',
                        fontWeight: '600',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      Score: {COMPANY_INFO.sstScore}% SST
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* THE INTEGRATED VAULT - ArtStation Tabs */}
          <div
            className="flex items-center gap-1 px-12 pt-4"
            style={{
              borderBottom: '0.5px solid #333333',
            }}
          >
            <TabButton
              icon="📦"
              label="Todos"
              count={getCategoryCount('all')}
              isActive={activeTab === 'all'}
              onClick={() => setActiveTab('all')}
            />
            <TabButton
              icon="⚖️"
              label="Legal"
              count={getCategoryCount('legal')}
              isActive={activeTab === 'legal'}
              onClick={() => setActiveTab('legal')}
            />
            <TabButton
              icon="🛡️"
              label="SST"
              count={getCategoryCount('sst')}
              isActive={activeTab === 'sst'}
              onClick={() => setActiveTab('sst')}
            />
            <TabButton
              icon="🌿"
              label="Ambiental"
              count={getCategoryCount('ambiental')}
              isActive={activeTab === 'ambiental'}
              onClick={() => setActiveTab('ambiental')}
            />
            <TabButton
              icon="💰"
              label="Financiero"
              count={getCategoryCount('financiero')}
              isActive={activeTab === 'financiero'}
              onClick={() => setActiveTab('financiero')}
            />
            <TabButton
              icon="🚜"
              label="Equipos"
              count={getCategoryCount('equipos')}
              isActive={activeTab === 'equipos'}
              onClick={() => setActiveTab('equipos')}
            />

            {/* Search Bar */}
            <div className="flex-1" />
            <div
              className="flex items-center gap-2 px-3 py-2 rounded"
              style={{
                width: '280px',
                backgroundColor: '#0A0A0A',
                border: '0.5px solid #333333',
                marginBottom: '4px',
              }}
            >
              <Search style={{ width: '13px', height: '13px', color: '#606060' }} />
              <input
                type="text"
                placeholder="Buscar documentos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#B0B0B0',
                  fontSize: '12px',
                  fontFamily: 'Inter, sans-serif',
                }}
              />
            </div>
          </div>

          {/* High-Density Table */}
          <div className="flex-1 overflow-auto">
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
              }}
            >
              <thead
                style={{
                  position: 'sticky',
                  top: 0,
                  backgroundColor: '#050505',
                  zIndex: 5,
                }}
              >
                <tr style={{ borderBottom: '0.5px solid #333333' }}>
                  <th style={{ width: '4px', padding: 0 }} />
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '12px 16px',
                      paddingLeft: '48px',
                      color: '#606060',
                      fontSize: '10px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Document
                  </th>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '12px 16px',
                      color: '#888888',
                      fontSize: '12px',
                      fontWeight: '500',
                      letterSpacing: '0.3px',
                      width: '100px',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    Chat / Soporte
                  </th>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '12px 16px',
                      color: '#606060',
                      fontSize: '10px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      width: '150px',
                    }}
                  >
                    Expiry Date
                  </th>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '12px 16px',
                      color: '#606060',
                      fontSize: '10px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      width: '180px',
                    }}
                  >
                    Score Impact
                  </th>
                  <th
                    style={{
                      textAlign: 'right',
                      padding: '12px 16px',
                      paddingRight: '48px',
                      color: '#606060',
                      fontSize: '10px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      width: '160px',
                    }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredDocs.map((doc) => (
                  <DocumentRow
                    key={doc.id}
                    document={doc}
                    isSelected={selectedRow === doc.id}
                    onSelect={() => setSelectedRow(doc.id)}
                    onChatClick={() => setActiveChatDoc(doc.id)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SIDEBAR INFO (Quick Specs) */}
        <div
          className="flex flex-col"
          style={{
            width: '280px',
            backgroundColor: '#0A0A0A',
            borderLeft: '0.5px solid #333333',
          }}
        >
          <div
            className="px-5 py-5"
            style={{
              borderBottom: '0.5px solid #333333',
            }}
          >
            <div
              style={{
                color: '#B0B0B0',
                fontSize: '12px',
                fontWeight: '600',
                marginBottom: '16px',
              }}
            >
              Información Técnica
            </div>

            <div className="space-y-4">
              <InfoItem label="NIT" value={COMPANY_INFO.nit} mono />
              <InfoItem label="Representante Legal" value={COMPANY_INFO.representante} />
              <InfoItem label="Ubicación" value={COMPANY_INFO.location} />
              <InfoItem
                label="Personal Activo"
                value={`${COMPANY_INFO.personalActivo} Operarios`}
                mono
              />
            </div>
          </div>

          {/* Document Stats */}
          <div className="px-5 py-5">
            <div
              style={{
                color: '#B0B0B0',
                fontSize: '12px',
                fontWeight: '600',
                marginBottom: '16px',
              }}
            >
              Estado de Documentos
            </div>

            <div className="space-y-3">
              <StatItem
                label="Vigentes"
                value={MOCK_DOCUMENTS.filter((d) => d.status === 'vigente').length}
                color="#00C853"
              />
              <StatItem
                label="Próximos a Vencer"
                value={MOCK_DOCUMENTS.filter((d) => d.status === 'proximo-vencer').length}
                color="#FF9800"
              />
              <StatItem
                label="Vencidos"
                value={MOCK_DOCUMENTS.filter((d) => d.status === 'vencido').length}
                color="#FF4D4D"
              />
              <StatItem
                label="Faltantes"
                value={MOCK_DOCUMENTS.filter((d) => d.status === 'faltante').length}
                color="#606060"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Chat Box */}
      {activeChatDoc && (
        <ChatBox
          documentName={MOCK_DOCUMENTS.find((d) => d.id === activeChatDoc)?.name || ''}
          messages={chatMessages[activeChatDoc] || []}
          newMessage={newMessage}
          onMessageChange={(msg) => setNewMessage(msg)}
          onSendMessage={() => {
            if (newMessage.trim() && activeChatDoc) {
              const message: ChatMessage = {
                id: `MSG-${Date.now()}`,
                sender: 'partner',
                message: newMessage,
                timestamp: new Date().toLocaleString('es-ES', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                }),
              };
              setChatMessages({
                ...chatMessages,
                [activeChatDoc]: [...(chatMessages[activeChatDoc] || []), message],
              });
              setNewMessage('');
            }
          }}
          onClose={() => setActiveChatDoc(null)}
        />
      )}
    </div>
  );
}

// ===== TAB BUTTON (ArtStation Style) =====
interface TabButtonProps {
  icon: string;
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

function TabButton({ icon, label, count, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 pb-3 pt-3 transition-colors relative"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        color: isActive ? '#FFFFFF' : '#808080',
        fontSize: '13px',
        fontWeight: isActive ? '600' : '500',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <span>{icon}</span>
      <span>{label}</span>
      <span
        style={{
          color: '#606060',
          fontSize: '11px',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        ({count})
      </span>
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

// ===== INFO ITEM =====
interface InfoItemProps {
  label: string;
  value: string;
  mono?: boolean;
}

function InfoItem({ label, value, mono }: InfoItemProps) {
  return (
    <div>
      <div
        style={{
          color: '#606060',
          fontSize: '10px',
          textTransform: 'uppercase',
          marginBottom: '4px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          color: '#D0D0D0',
          fontSize: '12px',
          fontWeight: '500',
          fontFamily: mono ? 'JetBrains Mono, monospace' : 'Inter, sans-serif',
        }}
      >
        {value}
      </div>
    </div>
  );
}

// ===== STAT ITEM =====
interface StatItemProps {
  label: string;
  value: number;
  color: string;
}

function StatItem({ label, value, color }: StatItemProps) {
  return (
    <div className="flex items-center justify-between">
      <span style={{ color: '#808080', fontSize: '11px' }}>{label}</span>
      <span
        style={{
          color: color,
          fontSize: '14px',
          fontWeight: '700',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {value}
      </span>
    </div>
  );
}

// ===== DOCUMENT ROW =====
interface DocumentRowProps {
  document: Document;
  isSelected: boolean;
  onSelect: () => void;
  onChatClick: () => void;
}

function DocumentRow({ document, isSelected, onSelect, onChatClick }: DocumentRowProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusColor = () => {
    switch (document.status) {
      case 'vigente':
        return '#00C853';
      case 'proximo-vencer':
        return '#FF9800';
      case 'vencido':
      case 'faltante':
        return '#FF4D4D';
      default:
        return '#606060';
    }
  };

  const getTextColor = () => {
    if (document.status === 'vigente') return '#808080';
    if (document.status === 'proximo-vencer') return '#D0D0D0';
    return '#E0E0E0';
  };

  return (
    <tr
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: '32px',
        backgroundColor: isSelected ? 'rgba(29, 153, 204, 0.1)' : 'transparent',
        borderBottom: '0.5px solid #1A1A1A',
        cursor: 'pointer',
        transition: 'background-color 0.15s ease',
      }}
    >
      {/* Status Indicator */}
      <td style={{ width: '4px', padding: 0, position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '4px',
            backgroundColor: getStatusColor(),
            boxShadow:
              document.status === 'vencido' || document.status === 'faltante'
                ? `0 0 8px ${getStatusColor()}`
                : 'none',
          }}
        />
        {isSelected && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '3px',
              backgroundColor: '#1D99CC',
            }}
          />
        )}
      </td>

      {/* Document Name */}
      <td style={{ padding: '6px 16px', paddingLeft: '48px' }}>
        <div className="flex items-center gap-2">
          {(document.status === 'vencido' || document.status === 'faltante') && (
            <AlertCircle style={{ width: '13px', height: '13px', color: '#FF4D4D' }} />
          )}
          {document.status === 'vigente' && (
            <CheckCircle2 style={{ width: '13px', height: '13px', color: '#00C853' }} />
          )}
          <span
            style={{
              color: getTextColor(),
              fontSize: '12px',
              fontWeight: '500',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {document.name}
          </span>
        </div>
      </td>

      {/* Chat / Soporte */}
      <td
        onClick={(e) => {
          if (document.hasComments) {
            e.stopPropagation();
            onChatClick();
          }
        }}
        style={{
          padding: '6px 16px',
          color: '#888888',
          fontSize: '12px',
          fontWeight: '500',
          letterSpacing: '0.3px',
          width: '100px',
          fontFamily: 'Inter, sans-serif',
          cursor: document.hasComments ? 'pointer' : 'default',
        }}
      >
        {document.hasComments ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onChatClick();
            }}
            className="flex items-center gap-2 relative p-1.5 rounded transition-all"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid transparent',
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(29, 153, 204, 0.12)';
              e.currentTarget.style.border = '1px solid #1D99CC';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.border = '1px solid transparent';
            }}
          >
            <MessageSquare style={{ width: '16px', height: '16px', color: '#1D99CC' }} />
            {document.unreadComments && (
              <div
                style={{
                  position: 'absolute',
                  top: '2px',
                  right: '2px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#1D99CC',
                  border: '2px solid #050505',
                }}
              />
            )}
          </button>
        ) : (
          <button
            disabled
            className="flex items-center gap-2 p-1.5"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              opacity: 0.4,
              cursor: 'not-allowed',
            }}
          >
            <MessageSquare style={{ width: '16px', height: '16px', color: '#606060' }} />
          </button>
        )}
      </td>

      {/* Expiry Date */}
      <td
        style={{
          padding: '6px 16px',
          color: document.status === 'proximo-vencer' ? '#FF9800' : '#606060',
          fontSize: '11px',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {document.expiryDate || (document.lastUpdated ? `Act. ${document.lastUpdated}` : '—')}
      </td>

      {/* Score Impact */}
      <td style={{ padding: '6px 16px' }}>
        <div className="flex items-center gap-3">
          <div
            className="flex-1 rounded-full overflow-hidden"
            style={{ height: '6px', backgroundColor: '#1A1A1A' }}
          >
            <div
              style={{
                width: `${document.scoreImpact}%`,
                height: '100%',
                backgroundColor:
                  document.scoreImpact >= 80
                    ? '#00C853'
                    : document.scoreImpact >= 50
                    ? '#FF9800'
                    : '#FF4D4D',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
          <span
            style={{
              color: '#B0B0B0',
              fontSize: '11px',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: '600',
              width: '36px',
              textAlign: 'right',
            }}
          >
            {document.scoreImpact}%
          </span>
        </div>
      </td>

      {/* Actions */}
      <td style={{ padding: '6px 16px', paddingRight: '48px', textAlign: 'right' }}>
        {/* Show prominent Upload button for expired/missing/expiring documents */}
        {(document.status === 'vencido' || document.status === 'faltante' || document.status === 'proximo-vencer') ? (
          <div className="flex items-center justify-end gap-2">
            <button
              className="px-3 py-1.5 rounded flex items-center gap-2 transition-all"
              style={{
                backgroundColor: document.status === 'vencido' || document.status === 'faltante' ? '#FF4D4D' : '#FF9800',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '11px',
                fontWeight: '600',
                fontFamily: 'Inter, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = document.status === 'vencido' || document.status === 'faltante' 
                  ? '0 0 12px rgba(255, 77, 77, 0.5)' 
                  : '0 0 12px rgba(255, 152, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={(e) => {
                e.stopPropagation();
                // Handle upload action
                console.log('Upload document:', document.id);
              }}
            >
              <Upload style={{ width: '13px', height: '13px' }} />
              <span>
                {document.status === 'faltante' ? 'Cargar' : 'Actualizar'}
              </span>
            </button>
          </div>
        ) : (
          isHovered && (
            <div className="flex items-center justify-end gap-2">
              <button
                className="p-1.5 rounded transition-colors"
                style={{
                  backgroundColor: 'transparent',
                  border: '0.5px solid #333333',
                  color: '#808080',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0A0A0A';
                  e.currentTarget.style.color = '#1D99CC';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#808080';
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle view action
                  console.log('View document:', document.id);
                }}
              >
                <Eye style={{ width: '13px', height: '13px' }} />
              </button>
              <button
                className="p-1.5 rounded transition-colors"
                style={{
                  backgroundColor: 'transparent',
                  border: '0.5px solid #333333',
                  color: '#808080',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0A0A0A';
                  e.currentTarget.style.color = '#FF9800';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#808080';
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle replace action
                  console.log('Replace document:', document.id);
                }}
              >
                <Upload style={{ width: '13px', height: '13px' }} />
              </button>
              <button
                className="p-1.5 rounded transition-colors"
                style={{
                  backgroundColor: 'transparent',
                  border: '0.5px solid #333333',
                  color: '#808080',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0A0A0A';
                  e.currentTarget.style.color = '#FF4D4D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#808080';
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle delete action
                  console.log('Delete document:', document.id);
                }}
              >
                <Trash2 style={{ width: '13px', height: '13px' }} />
              </button>
            </div>
          )
        )}
      </td>
    </tr>
  );
}