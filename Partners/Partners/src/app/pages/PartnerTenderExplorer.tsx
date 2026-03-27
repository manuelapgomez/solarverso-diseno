import { useState } from 'react';
import { PartnerSidebar } from '../components/PartnerSidebar';
import { ChevronRight, Download, FileText, CheckCircle2, Circle, Search } from 'lucide-react';

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
    id: 'TND-001',
    mgsId: 'MGS-BOY-04',
    title: 'Obra Civil MGS Boyacá IV',
    category: 'Civil',
    closingDate: '15 Dic',
    location: 'Paipa, Boyacá',
  },
  {
    id: 'TND-002',
    mgsId: 'MGS-MET-03',
    title: 'Montaje Eléctrico Meta III',
    category: 'Eléctrico',
    closingDate: '20 Dic',
    location: 'Puerto López',
  },
  {
    id: 'TND-003',
    mgsId: 'MGS-HUI-02',
    title: 'Obra Civil y Estructuras Huila II',
    category: 'Civil',
    closingDate: '18 Dic',
    location: 'Neiva',
  },
  {
    id: 'TND-004',
    mgsId: 'MGS-CAS-04',
    title: 'Suministro Maquinaria Casanare IV',
    category: 'Maquinaria',
    closingDate: '22 Dic',
    location: 'Yopal',
  },
  {
    id: 'TND-005',
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
  { id: 'DOC-04', name: 'Póliza RCE', uploaded: false },
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

export default function PartnerTenderExplorer() {
  const [selectedTender, setSelectedTender] = useState<TenderListItem>(AVAILABLE_TENDERS[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTenders = AVAILABLE_TENDERS.filter(
    (tender) =>
      tender.mgsId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tender.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: '#050505',
      }}
    >
      <PartnerSidebar />

      <div
        className="flex-1 flex"
        style={{
          marginLeft: '220px',
        }}
      >
        {/* LEFT RAIL: Tender Navigator (250px) */}
        <div
          className="flex flex-col"
          style={{
            width: '250px',
            borderRight: '0.5px solid #333333',
          }}
        >
          {/* Header */}
          <div
            className="px-4 flex flex-col justify-center"
            style={{
              height: '64px',
              borderBottom: '0.5px solid #333333',
            }}
          >
            <div
              style={{
                color: '#D0D0D0',
                fontSize: '12px',
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

          {/* Search */}
          <div className="px-3 py-3">
            <div
              className="flex items-center gap-2 px-3 py-2 rounded"
              style={{
                backgroundColor: '#0A0A0A',
                border: '0.5px solid #333333',
              }}
            >
              <Search style={{ width: '12px', height: '12px', color: '#606060' }} />
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
                isActive={selectedTender.id === tender.id}
                onClick={() => setSelectedTender(tender)}
              />
            ))}
          </div>
        </div>

        {/* CENTER: Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Breadcrumbs + Apply */}
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{
              borderBottom: '0.5px solid #333333',
            }}
          >
            <div className="flex items-center gap-2">
              <span style={{ color: '#606060', fontSize: '12px' }}>Hub</span>
              <ChevronRight style={{ width: '14px', height: '14px', color: '#606060' }} />
              <span
                style={{
                  color: '#1D99CC',
                  fontSize: '12px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '600',
                }}
              >
                {selectedTender.mgsId}
              </span>
            </div>

            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded transition-all"
              style={{
                backgroundColor: '#1D99CC',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: '600',
                boxShadow: '0 0 20px rgba(29, 153, 204, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1BA3D8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1D99CC';
              }}
            >
              Aplicar a este Pliego
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-auto p-6">
            {/* Description */}
            <div
              className="rounded p-6 mb-6"
              style={{
                backgroundColor: '#0A0A0A',
                border: '0.5px solid #333333',
              }}
            >
              <div style={{ color: '#E0E0E0', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>
                {selectedTender.title}
              </div>
              <div className="flex items-center gap-6 mb-4">
                <div style={{ color: '#808080', fontSize: '11px' }}>
                  📍 {selectedTender.location}
                </div>
                <div style={{ color: '#808080', fontSize: '11px' }}>
                  📅 Cierre: {selectedTender.closingDate}
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
              <div style={{ color: '#808080', fontSize: '12px', lineHeight: '1.6' }}>
                Solenium invita a empresas especializadas en obra civil a participar en la licitación para
                construcción de infraestructura solar fotovoltaica.
              </div>
            </div>

            {/* PDF Viewer */}
            <div
              className="rounded mb-6"
              style={{
                backgroundColor: '#0A0A0A',
                border: '0.5px solid #333333',
                height: '400px',
              }}
            >
              <div
                className="flex items-center justify-between px-4"
                style={{ height: '48px', borderBottom: '0.5px solid #333333' }}
              >
                <div className="flex items-center gap-2">
                  <FileText style={{ width: '16px', height: '16px', color: '#1D99CC' }} />
                  <span
                    style={{
                      color: '#B0B0B0',
                      fontSize: '12px',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    Pliego_Condiciones_Civil.pdf
                  </span>
                </div>
                <button
                  className="flex items-center gap-2 px-3 py-1.5 rounded"
                  style={{
                    backgroundColor: 'transparent',
                    border: '0.5px solid #1D99CC',
                    color: '#1D99CC',
                    fontSize: '11px',
                  }}
                >
                  <Download style={{ width: '12px', height: '12px' }} />
                  Descargar
                </button>
              </div>
              <div
                className="flex-1 flex items-center justify-center"
                style={{
                  height: 'calc(100% - 48px)',
                  background: 'linear-gradient(135deg, #0A0A0A 0%, #050505 100%)',
                }}
              >
                <div className="text-center">
                  <div style={{ color: '#404040', fontSize: '48px' }}>📄</div>
                  <div style={{ color: '#606060', fontSize: '11px' }}>Vista previa del documento</div>
                </div>
              </div>
            </div>

            {/* Annexes */}
            <div className="mb-6">
              <div style={{ color: '#B0B0B0', fontSize: '12px', fontWeight: '600', marginBottom: '12px' }}>
                Anexos Técnicos ({ANNEXES.length})
              </div>
              <div className="grid grid-cols-3 gap-3">
                {ANNEXES.map((annex) => (
                  <AnnexCard key={annex.id} annex={annex} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR: Document Checklist (280px) */}
        <div
          className="flex flex-col"
          style={{
            width: '280px',
            borderLeft: '0.5px solid #333333',
            backgroundColor: '#0A0A0A',
          }}
        >
          <div
            className="px-4 py-4"
            style={{
              borderBottom: '0.5px solid #333333',
            }}
          >
            <div style={{ color: '#D0D0D0', fontSize: '12px', fontWeight: '600', marginBottom: '2px' }}>
              Documentos Requeridos
            </div>
            <div style={{ color: '#606060', fontSize: '10px' }}>
              {DOCUMENT_SLOTS.length} documentos obligatorios
            </div>
          </div>

          <div className="flex-1 overflow-auto px-4 py-4">
            <div className="space-y-2">
              {DOCUMENT_SLOTS.map((doc) => (
                <DocumentSlotItem key={doc.id} document={doc} />
              ))}
            </div>
          </div>

          <div
            className="px-4 py-4"
            style={{
              borderTop: '0.5px solid #333333',
            }}
          >
            <button
              className="w-full px-4 py-3 rounded transition-all"
              style={{
                backgroundColor: '#1D99CC',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: '600',
                boxShadow: '0 0 20px rgba(29, 153, 204, 0.3)',
              }}
            >
              Iniciar Postulación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Components
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
        backgroundColor: isActive ? '#0A0A0A' : 'transparent',
        border: isActive ? '0.5px solid #1D99CC' : '0.5px solid transparent',
        boxShadow: isActive ? '0 0 12px rgba(29, 153, 204, 0.2)' : 'none',
      }}
      onClick={onClick}
    >
      <div
        style={{
          color: isActive ? '#1D99CC' : '#606060',
          fontSize: '10px',
          fontFamily: 'JetBrains Mono, monospace',
          fontWeight: '700',
          marginBottom: '4px',
        }}
      >
        {tender.mgsId}
      </div>
      <div
        style={{
          color: isActive ? '#D0D0D0' : '#808080',
          fontSize: '11px',
          fontWeight: '500',
          lineHeight: '1.3',
          marginBottom: '6px',
        }}
      >
        {tender.title}
      </div>
      <div style={{ color: '#606060', fontSize: '10px' }}>
        Cierre: {tender.closingDate}
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
        border: '0.5px solid #333333',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#1D99CC';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#333333';
      }}
    >
      <div className="flex items-start gap-2 mb-2">
        <FileText style={{ width: '14px', height: '14px', color: '#1D99CC', flexShrink: 0 }} />
        <div style={{ color: '#B0B0B0', fontSize: '11px', fontWeight: '500', lineHeight: '1.3' }}>
          {annex.name}
        </div>
      </div>
      <div style={{ color: '#606060', fontSize: '9px', fontFamily: 'JetBrains Mono, monospace', marginBottom: '6px' }}>
        {annex.fileName}
      </div>
      <div className="flex items-center justify-between">
        <span style={{ color: '#404040', fontSize: '9px' }}>{annex.size}</span>
        <Download style={{ width: '12px', height: '12px', color: '#606060' }} />
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
      className="flex items-center gap-3 px-3 py-2 rounded"
      style={{
        backgroundColor: '#121212',
        border: '0.5px solid #333333',
      }}
    >
      {document.uploaded ? (
        <CheckCircle2 style={{ width: '14px', height: '14px', color: '#00C853', flexShrink: 0 }} />
      ) : (
        <Circle style={{ width: '14px', height: '14px', color: '#404040', flexShrink: 0 }} />
      )}
      <div style={{ color: document.uploaded ? '#B0B0B0' : '#606060', fontSize: '11px' }}>
        {document.name}
      </div>
    </div>
  );
}
