import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { AdminSidebar } from '../components/AdminSidebar';
import {
  ArrowLeft,
  Star,
  CheckCircle2,
  XCircle,
  Eye,
  Download,
  AlertCircle,
  Save,
  Users,
  Calendar,
  DollarSign,
  MessageSquare,
  Lock,
  FileText,
  X,
  Send,
} from 'lucide-react';

// ===== TYPES =====
interface Document {
  id: string;
  name: string;
  uploadDate: string;
  size: string;
  status: 'approved' | 'rejected' | 'pending';
  category: 'legal' | 'financial' | 'technical' | 'sst';
  compliance: 'cumple' | 'no_cumple' | 'no_aplica';
  rating: number; // 0-5 stars
  commentCount: number;
}

interface PartnerProfile {
  partnerId: string;
  commercialName: string;
  legalName: string;
  sstScore: number;
  sstRating: number; // 1-5 stars
  sstMeetsThreshold: boolean;
  employees: number;
  machinery: number;
  rcePolicy: string;
  finalManualScore: number;
  documents: Document[];
}

// ===== MOCK DATA =====
const MOCK_PARTNER_PROFILE: Record<string, PartnerProfile> = {
  'SST-002': {
    partnerId: 'SST-002',
    commercialName: 'Construcciones Andinas SAS',
    legalName: 'Construcciones Andinas S.A.S.',
    sstScore: 92,
    sstRating: 5,
    sstMeetsThreshold: true,
    employees: 24,
    machinery: 12,
    rcePolicy: '$568.000.000',
    finalManualScore: 92,
    documents: [
      {
        id: 'DOC-001',
        name: 'Matriz de Riesgos SST',
        uploadDate: '10/10/2026',
        size: '2.3 MB',
        status: 'approved',
        category: 'sst',
        compliance: 'cumple',
        rating: 4,
        commentCount: 1,
      },
      {
        id: 'DOC-002',
        name: 'Certificación de Alturas',
        uploadDate: '10/10/2026',
        size: '988.9 KB',
        status: 'rejected',
        category: 'sst',
        compliance: 'no_cumple',
        rating: 1,
        commentCount: 0,
      },
      {
        id: 'DOC-003',
        name: 'Licencia Ambiental Específica',
        uploadDate: '10/10/2026',
        size: '186.6 KB',
        status: 'pending',
        category: 'legal',
        compliance: 'no_aplica',
        rating: 0,
        commentCount: 0,
      },
      {
        id: 'DOC-004',
        name: 'RUT',
        uploadDate: '10/10/2026',
        size: '433.3 KB',
        status: 'approved',
        category: 'legal',
        compliance: 'cumple',
        rating: 5,
        commentCount: 0,
      },
      {
        id: 'DOC-005',
        name: 'Cámara de Comercio',
        uploadDate: '10/10/2026',
        size: '1.2 MB',
        status: 'approved',
        category: 'legal',
        compliance: 'cumple',
        rating: 5,
        commentCount: 0,
      },
      {
        id: 'DOC-006',
        name: 'Estados Financieros 2025',
        uploadDate: '10/10/2026',
        size: '602.3 KB',
        status: 'approved',
        category: 'financial',
        compliance: 'cumple',
        rating: 5,
        commentCount: 0,
      },
      {
        id: 'DOC-007',
        name: 'Balance General',
        uploadDate: '17/10/2026',
        size: '867.1 KB',
        status: 'approved',
        category: 'financial',
        compliance: 'cumple',
        rating: 4,
        commentCount: 0,
      },
      {
        id: 'DOC-008',
        name: 'Certificado SST',
        uploadDate: '17/10/2026',
        size: '152.3 KB',
        status: 'approved',
        category: 'sst',
        compliance: 'cumple',
        rating: 5,
        commentCount: 0,
      },
      {
        id: 'DOC-009',
        name: 'Plan de Trabajo SST',
        uploadDate: '10/10/2026',
        size: '2.1 MB',
        status: 'approved',
        category: 'sst',
        compliance: 'cumple',
        rating: 5,
        commentCount: 2,
      },
      {
        id: 'DOC-010',
        name: 'Póliza RCE',
        uploadDate: '10/10/2026',
        size: '1.2 MB',
        status: 'approved',
        category: 'sst',
        compliance: 'cumple',
        rating: 5,
        commentCount: 0,
      },
    ],
  },
  'SST-005': {
    partnerId: 'SST-005',
    commercialName: 'Obras Express LTDA',
    legalName: 'Obras Express LTDA',
    sstScore: 88,
    sstRating: 4,
    sstMeetsThreshold: true,
    employees: 18,
    machinery: 9,
    rcePolicy: '$420.000.000',
    finalManualScore: 88,
    documents: [
      {
        id: 'DOC-016',
        name: 'RUT',
        uploadDate: '11/10/2026',
        size: '189.2 MB',
        status: 'approved',
        category: 'legal',
        compliance: 'cumple',
        rating: 5,
        commentCount: 0,
      },
      {
        id: 'DOC-017',
        name: 'Cámara de Comercio',
        uploadDate: '11/10/2026',
        size: '756.3 MB',
        status: 'approved',
        category: 'legal',
        compliance: 'cumple',
        rating: 5,
        commentCount: 0,
      },
      {
        id: 'DOC-018',
        name: 'Estados Financieros 2025',
        uploadDate: '11/10/2026',
        size: '985.6 KB',
        status: 'pending',
        category: 'financial',
        compliance: 'no_cumple',
        rating: 0,
        commentCount: 0,
      },
    ],
  },
};

// ===== MAIN COMPONENT =====
export function AdminPartnerAudit() {
  const { tenderId, partnerId } = useParams<{ tenderId: string; partnerId: string }>();
  const navigate = useNavigate();
  const [auditNotes, setAuditNotes] = useState('');
  const [documentStatuses, setDocumentStatuses] = useState<Record<string, Document['status']>>({});

  const partner = partnerId ? MOCK_PARTNER_PROFILE[partnerId] : null;

  if (!partner) {
    return (
      <div className="flex h-screen" style={{ backgroundColor: '#080808' }}>
        <AdminSidebar />
        <div className="flex-1 flex items-center justify-center">
          <div style={{ color: '#808080', fontSize: '16px' }}>Partner no encontrado</div>
        </div>
      </div>
    );
  }

  const groupedDocuments = {
    legal: partner.documents.filter((doc) => doc.category === 'legal'),
    financial: partner.documents.filter((doc) => doc.category === 'financial'),
    technical: partner.documents.filter((doc) => doc.category === 'technical'),
    sst: partner.documents.filter((doc) => doc.category === 'sst'),
  };

  const getStatusCounts = () => {
    const approved = partner.documents.filter(
      (doc) => (documentStatuses[doc.id] || doc.status) === 'approved'
    ).length;
    const rejected = partner.documents.filter(
      (doc) => (documentStatuses[doc.id] || doc.status) === 'rejected'
    ).length;
    const pending = partner.documents.filter(
      (doc) => (documentStatuses[doc.id] || doc.status) === 'pending'
    ).length;
    return { approved, rejected, pending };
  };

  const statusCounts = getStatusCounts();

  const handleDocumentStatus = (docId: string, newStatus: Document['status']) => {
    setDocumentStatuses((prev) => ({
      ...prev,
      [docId]: newStatus,
    }));
  };

  const handleSaveAudit = () => {
    // TODO: Save audit to backend
    alert('Auditoría guardada exitosamente');
    navigate(`/admin/pliegos/${tenderId}`);
  };

  return (
    <div className="flex h-screen" style={{ backgroundColor: '#080808' }}>
      <AdminSidebar />

      <div className="flex-1 flex overflow-hidden" style={{ marginLeft: '240px' }}>
        {/* LEFT SIDEBAR - PARTNER PROFILE */}
        <div
          className="flex flex-col overflow-auto"
          style={{
            width: '280px',
            backgroundColor: '#0A0A0A',
            borderRight: '0.5px solid rgba(255, 255, 255, 0.05)',
            flexShrink: 0,
          }}
        >
          {/* Header */}
          <div
            className="px-6 py-5"
            style={{
              borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <button
              onClick={() => navigate(`/admin/pliegos/${tenderId}`)}
              className="flex items-center gap-2 mb-4 transition-all"
              style={{
                color: '#1D99CC',
                fontSize: '10px',
                fontWeight: '600',
                letterSpacing: '0.3px',
                textTransform: 'uppercase',
              }}
            >
              <ArrowLeft style={{ width: '12px', height: '12px' }} />
              Volver a Postulaciones
            </button>

            <div
              style={{
                color: '#606060',
                fontSize: '9px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              Perfil del Partner
            </div>
            <h2
              style={{
                color: '#FFFFFF',
                fontSize: '15px',
                fontWeight: '700',
                marginBottom: '4px',
              }}
            >
              {partner.commercialName}
            </h2>
            <div
              style={{
                color: '#1D99CC',
                fontSize: '11px',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: '700',
                letterSpacing: '0.5px',
              }}
            >
              {partner.partnerId}
            </div>
          </div>

          {/* SST Score Card - PROMINENT */}
          <div
            className="mx-5 my-5 p-5 rounded"
            style={{
              backgroundColor: '#121212',
              border: '1px solid rgba(0, 200, 83, 0.3)',
              boxShadow: '0 0 20px rgba(0, 200, 83, 0.15)',
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div
                style={{
                  color: '#606060',
                  fontSize: '10px',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                SST Score
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    style={{
                      width: '14px',
                      height: '14px',
                      fill: i < partner.sstRating ? '#FFB800' : 'transparent',
                      stroke: i < partner.sstRating ? '#FFB800' : '#404040',
                    }}
                  />
                ))}
              </div>
            </div>

            <div
              style={{
                color: '#00C853',
                fontSize: '42px',
                fontWeight: '700',
                fontFamily: 'JetBrains Mono, monospace',
                lineHeight: '1',
                marginBottom: '12px',
              }}
            >
              {partner.sstScore}%
            </div>

            <div
              className="flex items-center gap-2 mb-3"
              style={{
                color: '#00C853',
                fontSize: '10px',
                fontWeight: '600',
              }}
            >
              <CheckCircle2 style={{ width: '14px', height: '14px' }} />
              Cumple umbral mínimo 86%
            </div>

            {/* Progress Bar */}
            <div
              className="relative rounded-full overflow-hidden"
              style={{
                height: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${partner.sstScore}%`,
                  backgroundColor: '#00C853',
                }}
              />
            </div>
          </div>

          {/* Key Stats */}
          <div
            className="px-6 py-4"
            style={{
              borderTop: '0.5px solid rgba(255, 255, 255, 0.05)',
              borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div
              style={{
                color: '#606060',
                fontSize: '9px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              Resumen de Verificación y datos clave
            </div>

            <div className="space-y-3">
              <StatRow label="Personal" value={partner.employees.toString()} />
              <StatRow label="Maquinaria" value={partner.machinery.toString()} />
            </div>
          </div>

          {/* Póliza RCE */}
          <div className="px-6 py-4">
            <div
              className="p-4 rounded"
              style={{
                backgroundColor: '#121212',
                border: '0.5px solid rgba(29, 153, 204, 0.3)',
              }}
            >
              <div
                style={{
                  color: '#606060',
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Póliza RCE
              </div>
              <div
                style={{
                  color: '#1D99CC',
                  fontSize: '18px',
                  fontWeight: '700',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {partner.rcePolicy}
              </div>
            </div>
          </div>

          {/* Manual Score */}
          <div
            className="px-6 py-4"
            style={{
              borderTop: '0.5px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div
              style={{
                color: '#606060',
                fontSize: '9px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              Score Final Manual
            </div>
            <div
              style={{
                color: '#FFFFFF',
                fontSize: '28px',
                fontWeight: '700',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {partner.finalManualScore}
            </div>
            <div
              style={{
                color: '#606060',
                fontSize: '9px',
                marginTop: '4px',
              }}
            >
              Ajuste manual del score basado en revisión documental
            </div>
          </div>
        </div>

        {/* MAIN CONTENT - DOCUMENT VAULT */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div
            className="px-8 py-6"
            style={{
              backgroundColor: '#0A0A0A',
              borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <h1
              style={{
                color: '#FFFFFF',
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '12px',
              }}
            >
              Bóveda Documental
            </h1>

            {/* Status Summary */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 style={{ width: '16px', height: '16px', color: '#00C853' }} />
                <span style={{ color: '#B0B0B0', fontSize: '12px' }}>
                  Aprobados:{' '}
                  <span
                    style={{
                      color: '#00C853',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontWeight: '700',
                    }}
                  >
                    {statusCounts.approved}/{partner.documents.length}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle style={{ width: '16px', height: '16px', color: '#FF5252' }} />
                <span style={{ color: '#B0B0B0', fontSize: '12px' }}>
                  Rechazados:{' '}
                  <span
                    style={{
                      color: '#FF5252',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontWeight: '700',
                    }}
                  >
                    {statusCounts.rejected}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle style={{ width: '16px', height: '16px', color: '#FF9800' }} />
                <span style={{ color: '#B0B0B0', fontSize: '12px' }}>
                  Pendientes:{' '}
                  <span
                    style={{
                      color: '#FF9800',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontWeight: '700',
                    }}
                  >
                    {statusCounts.pending}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Document Sections */}
          <div className="flex-1 overflow-auto px-8 py-6">
            {/* LEGAL Section */}
            {groupedDocuments.legal.length > 0 && (
              <DocumentSection
                title="LEGAL"
                count={groupedDocuments.legal.length}
                documents={groupedDocuments.legal}
                documentStatuses={documentStatuses}
                onStatusChange={handleDocumentStatus}
              />
            )}

            {/* FINANCIAL Section */}
            {groupedDocuments.financial.length > 0 && (
              <DocumentSection
                title="FINANCIERO"
                count={groupedDocuments.financial.length}
                documents={groupedDocuments.financial}
                documentStatuses={documentStatuses}
                onStatusChange={handleDocumentStatus}
              />
            )}

            {/* SST Section */}
            {groupedDocuments.sst.length > 0 && (
              <DocumentSection
                title="SST"
                count={groupedDocuments.sst.length}
                documents={groupedDocuments.sst}
                documentStatuses={documentStatuses}
                onStatusChange={handleDocumentStatus}
              />
            )}

            {/* TECHNICAL Section */}
            {groupedDocuments.technical.length > 0 && (
              <DocumentSection
                title="TÉCNICO"
                count={groupedDocuments.technical.length}
                documents={groupedDocuments.technical}
                documentStatuses={documentStatuses}
                onStatusChange={handleDocumentStatus}
              />
            )}

            {/* Audit Notes */}
            <div className="mt-8">
              <div
                style={{
                  color: '#606060',
                  fontSize: '10px',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                Notas de Auditoría
              </div>
              <textarea
                value={auditNotes}
                onChange={(e) => setAuditNotes(e.target.value)}
                placeholder="Añade comentarios sobre esta auditoría..."
                className="w-full px-4 py-3 rounded"
                rows={4}
                style={{
                  backgroundColor: '#121212',
                  border: '0.5px solid rgba(255, 255, 255, 0.08)',
                  color: '#D0D0D0',
                  fontSize: '12px',
                  resize: 'vertical',
                  outline: 'none',
                }}
              />
            </div>

            {/* Save Button */}
            <button
              onClick={handleSaveAudit}
              className="w-full mt-6 px-6 py-4 rounded flex items-center justify-center gap-3 transition-all"
              style={{
                backgroundColor: '#1D99CC',
                border: '0.5px solid #1D99CC',
                color: '#FFFFFF',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              <Save style={{ width: '16px', height: '16px' }} />
              Guardar Auditoría
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== STAT ROW =====
interface StatRowProps {
  label: string;
  value: string;
}

function StatRow({ label, value }: StatRowProps) {
  return (
    <div className="flex items-center justify-between">
      <span
        style={{
          color: '#606060',
          fontSize: '10px',
        }}
      >
        {label}
      </span>
      <span
        style={{
          color: '#1D99CC',
          fontSize: '14px',
          fontFamily: 'JetBrains Mono, monospace',
          fontWeight: '700',
        }}
      >
        {value}
      </span>
    </div>
  );
}

// ===== DOCUMENT SECTION =====
interface DocumentSectionProps {
  title: string;
  count: number;
  documents: Document[];
  documentStatuses: Record<string, Document['status']>;
  onStatusChange: (docId: string, newStatus: Document['status']) => void;
}

function DocumentSection({
  title,
  count,
  documents,
  documentStatuses,
  onStatusChange,
}: DocumentSectionProps) {
  return (
    <div className="mb-8">
      {/* Section Header */}
      <div
        className="flex items-center gap-3 px-4 py-3 rounded mb-3"
        style={{
          backgroundColor: '#0A0A0A',
          border: '0.5px solid rgba(29, 153, 204, 0.3)',
        }}
      >
        <div
          className="px-2 py-1 rounded"
          style={{
            backgroundColor: '#1D99CC',
            color: '#FFFFFF',
            fontSize: '9px',
            fontWeight: '700',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          {count}
        </div>
        <div
          style={{
            color: '#1D99CC',
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </div>
      </div>

      {/* Table Container */}
      <div
        className="rounded overflow-hidden"
        style={{
          border: '1px solid #333333',
        }}
      >
        {/* Table Header */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: '280px 180px 180px 180px 140px',
            backgroundColor: '#0A0A0A',
            borderBottom: '1px solid #333333',
            padding: '14px 20px',
          }}
        >
          <div
            style={{
              color: '#808080',
              fontSize: '12px',
              fontWeight: '500',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Documento
          </div>
          <div
            style={{
              color: '#808080',
              fontSize: '12px',
              fontWeight: '500',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Archivo
          </div>
          <div
            style={{
              color: '#808080',
              fontSize: '12px',
              fontWeight: '500',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Cumplimiento
          </div>
          <div
            style={{
              color: '#808080',
              fontSize: '12px',
              fontWeight: '500',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Valoración 0-5
          </div>
          <div
            style={{
              color: '#808080',
              fontSize: '12px',
              fontWeight: '500',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center',
            }}
          >
            Comentarios
          </div>
        </div>

        {/* Document Rows */}
        {documents.map((doc) => (
          <DocumentRow
            key={doc.id}
            document={doc}
            currentStatus={documentStatuses[doc.id] || doc.status}
            onStatusChange={(newStatus) => onStatusChange(doc.id, newStatus)}
          />
        ))}
      </div>
    </div>
  );
}

// ===== DOCUMENT ROW =====
interface DocumentRowProps {
  document: Document;
  currentStatus: Document['status'];
  onStatusChange: (newStatus: Document['status']) => void;
}

function DocumentRow({ document, currentStatus, onStatusChange }: DocumentRowProps) {
  const [selectedCompliance, setSelectedCompliance] = useState<Document['compliance']>(document.compliance);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number>(document.rating);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const isLocked = selectedCompliance === 'no_aplica';

  const getComplianceConfig = (compliance: Document['compliance']) => {
    switch (compliance) {
      case 'cumple':
        return {
          label: '✓ Cumple',
          color: '#00C853',
          bg: 'rgba(0, 200, 83, 0.12)',
          icon: <CheckCircle2 style={{ width: '12px', height: '12px' }} />,
        };
      case 'no_cumple':
        return {
          label: '✕ No Cumple',
          color: '#FF3B30',
          bg: 'rgba(255, 59, 48, 0.12)',
          icon: <XCircle style={{ width: '12px', height: '12px' }} />,
        };
      case 'no_aplica':
        return {
          label: '– No Aplica',
          color: '#555555',
          bg: 'rgba(85, 85, 85, 0.12)',
          icon: <AlertCircle style={{ width: '12px', height: '12px' }} />,
        };
    }
  };

  const complianceConfig = getComplianceConfig(selectedCompliance);

  return (
    <>
      {/* Chat Overlay */}
      {isChatOpen && (
        <div
          className="fixed inset-0"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 9998,
          }}
          onClick={() => setIsChatOpen(false)}
        />
      )}

      {/* Chat Box */}
      {isChatOpen && (
        <ChatBox
          documentName={document.name}
          onClose={() => setIsChatOpen(false)}
        />
      )}

      <div
        className="grid transition-all"
        style={{
          gridTemplateColumns: '280px 180px 180px 180px 140px',
          backgroundColor: isLocked ? '#030303' : '#050505',
          borderBottom: '1px solid #222222',
          minHeight: '56px',
          alignItems: 'center',
          padding: '0 20px',
          opacity: isLocked ? 0.4 : 1,
        }}
      >
        {/* Column 1: Documento */}
        <div>
          <div
            style={{
              color: isLocked ? '#606060' : '#FFFFFF',
              fontSize: '12px',
              fontWeight: '500',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '4px',
            }}
          >
            {document.name}
          </div>
          <div
            style={{
              color: '#555555',
              fontSize: '9px',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {document.size}
          </div>
        </div>

        {/* Column 2: Archivo */}
        <div>
          {isLocked ? (
            <div
              style={{
                color: '#404040',
                fontSize: '10px',
                fontStyle: 'italic',
              }}
            >
              N/A
            </div>
          ) : (
            <button
              className="flex items-center gap-2 px-3 py-2 rounded transition-all"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(29, 153, 204, 0.3)',
                color: '#1D99CC',
                fontSize: '10px',
                fontWeight: '600',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(29, 153, 204, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <FileText style={{ width: '12px', height: '12px' }} />
              Ver Documento
            </button>
          )}
        </div>

        {/* Column 3: Cumplimiento */}
        <div>
          <select
            value={selectedCompliance}
            onChange={(e) => {
              const newCompliance = e.target.value as Document['compliance'];
              setSelectedCompliance(newCompliance);
              if (newCompliance === 'no_aplica') {
                setSelectedRating(0);
              }
            }}
            className="px-3 py-2 rounded transition-all"
            style={{
              backgroundColor: complianceConfig.bg,
              border: `1px solid ${complianceConfig.color}`,
              color: complianceConfig.color,
              fontSize: '11px',
              fontWeight: '700',
              fontFamily: 'Inter, sans-serif',
              outline: 'none',
              cursor: 'pointer',
              width: '160px',
            }}
          >
            <option value="cumple">✓ Cumple</option>
            <option value="no_cumple">✕ No Cumple</option>
            <option value="no_aplica">– No Aplica</option>
          </select>
        </div>

        {/* Column 4: Valoración 0-5 */}
        <div>
          {isLocked ? (
            <div className="flex items-center gap-2">
              <Lock style={{ width: '14px', height: '14px', color: '#404040' }} />
              <span
                style={{
                  color: '#404040',
                  fontSize: '10px',
                  fontWeight: '600',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Bloqueado / N/A
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((starValue) => (
                <button
                  key={starValue}
                  onClick={() => setSelectedRating(starValue)}
                  onMouseEnter={() => setHoveredStar(starValue)}
                  onMouseLeave={() => setHoveredStar(null)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2px',
                  }}
                >
                  <Star
                    style={{
                      width: '18px',
                      height: '18px',
                      fill:
                        (hoveredStar !== null ? starValue <= hoveredStar : starValue <= selectedRating)
                          ? '#1D99CC'
                          : 'transparent',
                      stroke:
                        (hoveredStar !== null ? starValue <= hoveredStar : starValue <= selectedRating)
                          ? '#1D99CC'
                          : '#333333',
                      strokeWidth: 1.5,
                      transition: 'all 0.15s ease',
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Column 5: Comentarios */}
        <div className="flex justify-center">
          {isLocked ? (
            <div
              style={{
                opacity: 0.3,
              }}
            >
              <MessageSquare style={{ width: '16px', height: '16px', color: '#404040' }} />
            </div>
          ) : (
            <button
              className="relative p-2 rounded transition-all"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#808080',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = '#1D99CC';
                e.currentTarget.style.color = '#1D99CC';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = '#808080';
              }}
              onClick={() => setIsChatOpen(true)}
            >
              <MessageSquare style={{ width: '16px', height: '16px' }} />
              {document.commentCount > 0 && (
                <div
                  className="absolute"
                  style={{
                    top: '-4px',
                    right: '-4px',
                    backgroundColor: '#FF3B30',
                    color: '#FFFFFF',
                    fontSize: '8px',
                    fontWeight: '700',
                    fontFamily: 'JetBrains Mono, monospace',
                    borderRadius: '50%',
                    width: '16px',
                    height: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #050505',
                  }}
                >
                  {document.commentCount}
                </div>
              )}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

// ===== CHAT BOX =====
interface ChatBoxProps {
  documentName: string;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'admin' | 'partner';
  text: string;
  timestamp: string;
  avatar?: string;
}

function ChatBox({ documentName, onClose }: ChatBoxProps) {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Mock messages
  const mockMessages: ChatMessage[] = [
    {
      id: '1',
      sender: 'partner',
      text: 'Hola, subí la matriz de riesgos actualizada. ¿Podrías revisarla?',
      timestamp: '14:20',
    },
    {
      id: '2',
      sender: 'admin',
      text: 'Perfecto. La revisión muestra que el documento cumple con la mayoría de requisitos, pero falta el anexo de evaluación médica ocupacional.',
      timestamp: '14:32',
    },
    {
      id: '3',
      sender: 'partner',
      text: 'Entendido. Lo subo en las próximas horas.',
      timestamp: '14:35',
    },
  ];

  const handleSend = () => {
    if (message.trim()) {
      // TODO: Send message to backend
      setMessage('');
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="fixed"
      style={{
        right: '40px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '380px',
        height: '500px',
        backgroundColor: '#121212',
        borderTop: '3px solid #1D99CC',
        borderRadius: '8px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{
          borderBottom: '1px solid #333333',
        }}
      >
        <div className="flex-1">
          <div
            style={{
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: '700',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '4px',
            }}
          >
            Chat de Subsanación: {documentName}
          </div>
          <div className="flex items-center gap-2">
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#00C853',
              }}
            />
            <span
              style={{
                color: '#00C853',
                fontSize: '9px',
                fontWeight: '600',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Partner Online
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded transition-all"
          style={{
            backgroundColor: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#808080',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 82, 82, 0.15)';
            e.currentTarget.style.borderColor = '#FF5252';
            e.currentTarget.style.color = '#FF5252';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.color = '#808080';
          }}
        >
          <X style={{ width: '14px', height: '14px' }} />
        </button>
      </div>

      {/* Messages Container */}
      <div
        className="flex-1 overflow-y-auto px-5 py-4"
        style={{
          backgroundColor: '#0A0A0A',
        }}
      >
        {mockMessages.map((msg) => (
          <div
            key={msg.id}
            className="mb-4"
            style={{
              display: 'flex',
              flexDirection: msg.sender === 'admin' ? 'row-reverse' : 'row',
              alignItems: 'flex-start',
              gap: '10px',
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: msg.sender === 'admin' ? '#1D99CC' : '#2E7D32',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: '700',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {msg.sender === 'admin' ? 'AD' : 'PT'}
              </span>
            </div>

            {/* Message Bubble */}
            <div
              style={{
                maxWidth: '65%',
              }}
            >
              <div
                className="px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: msg.sender === 'admin' ? '#1D99CC' : '#1E1E1E',
                  color: msg.sender === 'admin' ? '#FFFFFF' : '#BBBBBB',
                  fontSize: '11px',
                  lineHeight: '1.5',
                  fontFamily: 'Inter, sans-serif',
                  borderRadius: '12px',
                }}
              >
                {msg.text}
              </div>
              <div
                style={{
                  color: '#606060',
                  fontSize: '8px',
                  fontFamily: 'JetBrains Mono, monospace',
                  marginTop: '4px',
                  textAlign: msg.sender === 'admin' ? 'right' : 'left',
                }}
              >
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div
            className="mb-4"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#2E7D32',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: '700',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                PT
              </span>
            </div>

            {/* Typing Bubble */}
            <div
              className="px-4 py-3 rounded-xl flex items-center gap-1"
              style={{
                backgroundColor: '#1E1E1E',
                borderRadius: '12px',
              }}
            >
              <div
                className="animate-bounce"
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#808080',
                  animationDelay: '0ms',
                }}
              />
              <div
                className="animate-bounce"
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#808080',
                  animationDelay: '150ms',
                }}
              />
              <div
                className="animate-bounce"
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#808080',
                  animationDelay: '300ms',
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div
        className="px-5 py-4"
        style={{
          borderTop: '1px solid #333333',
        }}
      >
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            backgroundColor: '#0A0A0A',
            border: '1px solid #333333',
          }}
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu observación técnica..."
            className="flex-1"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#FFFFFF',
              fontSize: '12px',
              fontFamily: 'Inter, sans-serif',
            }}
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-full transition-all"
            style={{
              backgroundColor: '#1D99CC',
              border: 'none',
              cursor: message.trim() ? 'pointer' : 'not-allowed',
              opacity: message.trim() ? 1 : 0.5,
            }}
            disabled={!message.trim()}
          >
            <Send
              style={{
                width: '14px',
                height: '14px',
                color: '#FFFFFF',
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}