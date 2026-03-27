import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { UnifiedPartnerSidebar } from '../components/UnifiedPartnerSidebar';
import { Search, MapPin, Calendar, Download, FileText, Clock, ArrowLeft, ChevronRight, CheckCircle2, Circle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface TenderListItem {
  id: string;
  mgsId: string;
  title: string;
  category: string;
  closingDate: string;
  location: string;
}

interface Annex {
  id: string;
  name: string;
  fileName: string;
  size: string;
}

interface DocumentSlot {
  id: string;
  name: string;
  uploaded: boolean;
}

const AVAILABLE_TENDERS: TenderListItem[] = [
  {
    id: 'MGS-BOY-04',
    mgsId: 'MGS-BOY-04',
    title: 'Obra Civil MGS Boyacá IV',
    category: 'Civil',
    closingDate: '15 Dic',
    location: 'Paipa, Boyacá',
  },
  {
    id: 'MGS-MET-03',
    mgsId: 'MGS-MET-03',
    title: 'Montaje Eléctrico Meta III',
    category: 'Eléctrico',
    closingDate: '20 Dic',
    location: 'Puerto López',
  },
  {
    id: 'MGS-HUI-02',
    mgsId: 'MGS-HUI-02',
    title: 'Obra Civil y Estructuras Huila II',
    category: 'Civil',
    closingDate: '18 Dic',
    location: 'Neiva',
  },
  {
    id: 'MGS-CAS-04',
    mgsId: 'MGS-CAS-04',
    title: 'Suministro Maquinaria Casanare IV',
    category: 'Maquinaria',
    closingDate: '22 Dic',
    location: 'Yopal',
  },
  {
    id: 'MGS-CAL-01',
    mgsId: 'MGS-CAL-01',
    title: 'Instalación Paneles Caldas I',
    category: 'Eléctrico',
    closingDate: '25 Dic',
    location: 'Manizales',
  },
];

const ANNEXES: Annex[] = [
  {
    id: 'ANX-001',
    name: 'Anexo 1 - Especificaciones Técnicas',
    fileName: 'Anexo_01_Especificaciones.pdf',
    size: '2.4 MB',
  },
  {
    id: 'ANX-002',
    name: 'Anexo 2 - Planos Topográficos',
    fileName: 'Anexo_02_Planos_Topo.pdf',
    size: '8.1 MB',
  },
  {
    id: 'ANX-003',
    name: 'Anexo 3 - Presupuesto Base',
    fileName: 'Anexo_03_Presupuesto.xlsx',
    size: '1.2 MB',
  },
  {
    id: 'ANX-004',
    name: 'Anexo 4 - Cronograma de Obra',
    fileName: 'Anexo_04_Cronograma.pdf',
    size: '950 KB',
  },
  {
    id: 'ANX-005',
    name: 'Anexo 5 - Requerimientos SST',
    fileName: 'Anexo_05_SST.pdf',
    size: '3.2 MB',
  },
  {
    id: 'ANX-006',
    name: 'Anexo 6 - Licencias Ambientales',
    fileName: 'Anexo_06_Licencias.pdf',
    size: '4.5 MB',
  },
];

const DOCUMENT_SLOTS: DocumentSlot[] = [
  { id: 'DOC-01', name: 'RUT Actualizado', uploaded: false },
  { id: 'DOC-02', name: 'Cámara de Comercio', uploaded: false },
  { id: 'DOC-03', name: 'Estados Financieros', uploaded: false },
  { id: 'DOC-04', name: 'P��liza RCE', uploaded: false },
  { id: 'DOC-05', name: 'ARL Vigente', uploaded: false },
  { id: 'DOC-06', name: 'Certificado SST', uploaded: false },
  { id: 'DOC-07', name: 'Certificado Experiencia', uploaded: false },
  { id: 'DOC-08', name: 'Propuesta Técnica', uploaded: false },
  { id: 'DOC-09', name: 'Propuesta Económica', uploaded: false },
  { id: 'DOC-10', name: 'Cronograma de Obra', uploaded: false },
  { id: 'DOC-11', name: 'Certificado Bancario', uploaded: false },
  { id: 'DOC-12', name: 'RUP Vigente', uploaded: false },
  { id: 'DOC-13', name: 'Certificados Personal', uploaded: false },
  { id: 'DOC-14', name: 'Plan de Calidad', uploaded: false },
];

export default function TenderDetailView() {
  const { tenderId } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const selectedTender = AVAILABLE_TENDERS.find(t => t.id === tenderId) || AVAILABLE_TENDERS[0];

  const filteredTenders = AVAILABLE_TENDERS.filter(
    (tender) =>
      tender.id !== selectedTender.id &&
      (tender.mgsId.toLowerCase().includes(searchQuery.toLowerCase()) ||
       tender.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const { theme } = useTheme();

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: '#050505', // Absolute Black
      }}
    >
      <UnifiedPartnerSidebar />

      {/* LEFT SIDE-RAIL: Otros Pliegos Similares (300px) */}
      <div
        className="fixed top-0 h-screen flex flex-col"
        style={{
          left: '240px',
          width: '300px',
          backgroundColor: '#0A0A0A',
          borderRight: '0.5px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        {/* Header */}
        <div
          className="px-5 flex flex-col justify-center"
          style={{
            height: '72px',
            borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div
            style={{
              color: '#D0D0D0',
              fontSize: '13px',
              fontWeight: '600',
            }}
          >
            Pliegos Disponibles
          </div>
          <div
            style={{
              color: '#606060',
              fontSize: '10px',
            }}
          >
            {AVAILABLE_TENDERS.length} oportunidades
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 py-3">
          <div
            className="flex items-center gap-2 px-3 py-2 rounded"
            style={{
              backgroundColor: '#121212',
              border: '0.5px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <Search
              style={{
                width: '12px',
                height: '12px',
                color: '#606060',
              }}
            />
            <input
              type="text"
              placeholder="Filtrar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#B0B0B0',
                fontSize: '11px',
              }}
            />
          </div>
        </div>

        {/* Tender List */}
        <div className="flex-1 overflow-y-auto px-3 pb-3">
          {filteredTenders.map((tender) => (
            <TenderNavItem
              key={tender.id}
              tender={tender}
              isActive={false}
              onClick={() => navigate(`/partner/tender/${tender.id}`)}
            />
          ))}
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div
        className="flex-1"
        style={{
          marginLeft: '540px', // 240px sidebar + 300px rail
        }}
      >
        {/* BREADCRUMBS & NAVIGATION */}
        <div
          className="flex items-center justify-between px-8"
          style={{
            height: '72px',
            borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Back Button + Breadcrumbs */}
          <div className="flex items-center gap-4">
            <Link
              to="/partner/oportunidades"
              className="flex items-center gap-2 px-3 py-2 rounded transition-all"
              style={{
                backgroundColor: 'transparent',
                border: '0.5px solid rgba(255, 255, 255, 0.08)',
                color: '#808080',
                fontSize: '11px',
                fontWeight: '500',
                textDecoration: 'none',
              }}
            >
              <ArrowLeft style={{ width: '14px', height: '14px' }} />
              Volver al Explorador
            </Link>

            <div className="flex items-center gap-2">
              <span
                style={{
                  color: '#606060',
                  fontSize: '11px',
                }}
              >
                Marketplace
              </span>
              <ChevronRight
                style={{
                  width: '12px',
                  height: '12px',
                  color: '#606060',
                }}
              />
              <span
                style={{
                  color: '#1D99CC',
                  fontSize: '11px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '600',
                }}
              >
                {selectedTender.mgsId}
              </span>
              <ChevronRight
                style={{
                  width: '12px',
                  height: '12px',
                  color: '#606060',
                }}
              />
              <span
                style={{
                  color: '#808080',
                  fontSize: '11px',
                }}
              >
                Detalle
              </span>
            </div>
          </div>
        </div>

        {/* SPLIT LAYOUT: Center + Right */}
        <div className="flex" style={{ height: 'calc(100vh - 72px)' }}>
          {/* CENTER WORKSPACE */}
          <div
            className="flex-1 overflow-y-auto px-8 py-6"
            style={{
              borderRight: '0.5px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Job Description */}
            <div
              className="rounded p-6 mb-6"
              style={{
                backgroundColor: '#121212',
                border: '0.5px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div
                className="mb-3"
                style={{
                  color: '#E0E0E0',
                  fontSize: '18px',
                  fontWeight: '700',
                }}
              >
                {selectedTender.title}
              </div>

              <div className="flex items-center gap-6 mb-4">
                <MetaItem label="Ubicación" value={selectedTender.location} />
                <div className="flex items-center gap-2">
                  <div
                    style={{
                      color: '#606060',
                      fontSize: '10px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Categoría:
                  </div>
                  <div
                    className="px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: '#1A1A1A',
                      color: '#1D99CC',
                      fontSize: '10px',
                      fontWeight: '600',
                    }}
                  >
                    {selectedTender.category}
                  </div>
                </div>
                <MetaItem label="Cierre" value={selectedTender.closingDate} color="#FF9800" />
              </div>

              <div
                className="mb-4"
                style={{
                  color: '#808080',
                  fontSize: '12px',
                  lineHeight: '1.6',
                }}
              >
                Solenium invita a empresas especializadas en{' '}
                <span style={{ color: '#B0B0B0', fontWeight: '600' }}>obra civil</span> a participar en
                la licitación para construcción de infraestructura solar fotovoltaica.
              </div>
            </div>

            {/* PDF VIEWER */}
            <div
              className="rounded mb-4"
              style={{
                backgroundColor: '#121212',
                border: '0.5px solid rgba(255, 255, 255, 0.05)',
                height: '480px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* PDF Header */}
              <div
                className="flex items-center justify-between px-4"
                style={{
                  height: '48px',
                  borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <div className="flex items-center gap-2">
                  <FileText
                    style={{
                      width: '16px',
                      height: '16px',
                      color: '#1D99CC',
                    }}
                  />
                  <span
                    style={{
                      color: '#B0B0B0',
                      fontSize: '11px',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    Pliego_Condiciones_Civil.pdf
                  </span>
                </div>
                <button
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors"
                  style={{
                    backgroundColor: 'transparent',
                    border: '0.5px solid #1D99CC',
                    color: '#1D99CC',
                    fontSize: '11px',
                    fontWeight: '500',
                  }}
                >
                  <Download style={{ width: '12px', height: '12px' }} />
                  Descargar
                </button>
              </div>

              {/* PDF Content Area */}
              <div
                className="flex-1 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #0A0A0A 0%, #121212 100%)',
                }}
              >
                <div className="text-center">
                  <div
                    style={{
                      color: '#404040',
                      fontSize: '48px',
                      marginBottom: '12px',
                    }}
                  >
                    📄
                  </div>
                  <div
                    style={{
                      color: '#606060',
                      fontSize: '11px',
                    }}
                  >
                    Vista previa del documento
                  </div>
                </div>
              </div>
            </div>

            {/* Annexes Grid */}
            <div
              className="mb-3"
              style={{
                color: '#B0B0B0',
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              Anexos Técnicos ({ANNEXES.length})
            </div>
            <div className="grid grid-cols-3 gap-3">
              {ANNEXES.map((annex) => (
                <AnnexCard key={annex.id} annex={annex} />
              ))}
            </div>
          </div>

          {/* RIGHT PANEL: Action Center */}
          <div
            className="overflow-y-auto"
            style={{
              width: '380px',
              backgroundColor: '#0A0A0A',
            }}
          >
            <div className="px-6 py-6">
              {/* Primary Action Button */}
              <button
                onClick={() => navigate(`/partner/tender/${tenderId}/apply`)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded transition-all mb-6"
                style={{
                  backgroundColor: '#1D99CC',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: '600',
                  boxShadow: '0 0 20px rgba(29, 153, 204, 0.3)',
                  cursor: 'pointer',
                }}
              >
                APLICAR A ESTE PLIEGO
              </button>

              {/* Document Checklist */}
              <div
                className="mb-4"
                style={{
                  color: '#D0D0D0',
                  fontSize: '13px',
                  fontWeight: '600',
                }}
              >
                Documentos Requeridos
              </div>
              <div
                className="mb-2"
                style={{
                  color: '#606060',
                  fontSize: '10px',
                }}
              >
                {DOCUMENT_SLOTS.length} documentos obligatorios
              </div>

              <div className="space-y-2">
                {DOCUMENT_SLOTS.map((doc) => (
                  <DocumentSlotItem key={doc.id} document={doc} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== COMPONENTS =====

interface TenderNavItemProps {
  tender: TenderListItem;
  isActive: boolean;
  onClick: () => void;
}

function TenderNavItem({ tender, isActive, onClick }: TenderNavItemProps) {
  return (
    <div
      className="rounded p-3 mb-2 cursor-pointer transition-all"
      style={{
        backgroundColor: isActive ? '#121212' : 'transparent',
        border: isActive ? '0.5px solid #1D99CC' : '0.5px solid transparent',
      }}
      onClick={onClick}
    >
      <div
        className="mb-1"
        style={{
          color: '#606060',
          fontSize: '10px',
          fontFamily: 'JetBrains Mono, monospace',
          fontWeight: '700',
        }}
      >
        {tender.mgsId}
      </div>
      <div
        className="mb-2"
        style={{
          color: '#B0B0B0',
          fontSize: '11px',
          fontWeight: '500',
          lineHeight: '1.3',
        }}
      >
        {tender.title}
      </div>
      <div
        style={{
          color: '#606060',
          fontSize: '10px',
        }}
      >
        Cierre: {tender.closingDate}
      </div>
    </div>
  );
}

interface MetaItemProps {
  label: string;
  value: string;
  color?: string;
}

function MetaItem({ label, value, color = '#B0B0B0' }: MetaItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        style={{
          color: '#606060',
          fontSize: '10px',
          textTransform: 'uppercase',
        }}
      >
        {label}:
      </div>
      <div
        style={{
          color: color,
          fontSize: '12px',
          fontWeight: '600',
        }}
      >
        {value}
      </div>
    </div>
  );
}

interface AnnexCardProps {
  annex: Annex;
}

function AnnexCard({ annex }: AnnexCardProps) {
  return (
    <div
      className="rounded p-3 cursor-pointer transition-all"
      style={{
        backgroundColor: '#0A0A0A',
        border: '0.5px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="flex items-start gap-2 mb-2">
        <FileText
          style={{
            width: '14px',
            height: '14px',
            color: '#1D99CC',
            flexShrink: 0,
          }}
        />
        <div
          style={{
            color: '#B0B0B0',
            fontSize: '10px',
            fontWeight: '500',
            lineHeight: '1.3',
          }}
        >
          {annex.name}
        </div>
      </div>
      <div
        className="mb-2"
        style={{
          color: '#606060',
          fontSize: '9px',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {annex.fileName}
      </div>
      <div className="flex items-center justify-between">
        <span
          style={{
            color: '#404040',
            fontSize: '9px',
          }}
        >
          {annex.size}
        </span>
        <Download
          style={{
            width: '12px',
            height: '12px',
            color: '#606060',
          }}
        />
      </div>
    </div>
  );
}

interface DocumentSlotItemProps {
  document: DocumentSlot;
}

function DocumentSlotItem({ document }: DocumentSlotItemProps) {
  return (
    <div
      className="flex items-center gap-3 px-3 py-2.5 rounded"
      style={{
        backgroundColor: '#121212',
        border: '0.5px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {document.uploaded ? (
        <CheckCircle2
          style={{
            width: '14px',
            height: '14px',
            color: '#00C853',
            flexShrink: 0,
          }}
        />
      ) : (
        <Circle
          style={{
            width: '14px',
            height: '14px',
            color: '#404040',
            flexShrink: 0,
          }}
        />
      )}
      <div
        style={{
          color: document.uploaded ? '#B0B0B0' : '#606060',
          fontSize: '10px',
        }}
      >
        {document.name}
      </div>
    </div>
  );
}