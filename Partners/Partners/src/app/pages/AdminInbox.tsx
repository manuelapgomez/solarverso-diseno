import { useState } from 'react';
import { AdminSidebar } from '../components/AdminSidebar';
import { MessageSquare, Check, X, Eye, Upload, Trash2, AlertCircle, CheckCircle2 } from 'lucide-react';

interface Company {
  id: string;
  name: string;
  registrationDate: string;
  docsUploaded: number;
  totalDocs: number;
  tempScore: number;
  status: 'pending' | 'reviewing' | 'approved' | 'rejected';
}

interface Document {
  id: string;
  name: string;
  category: 'legal' | 'financiero' | 'sst' | 'ambiental';
  uploaded: boolean;
  verified: boolean | null; // null = pending, true = pass, false = fail
  comment?: string;
}

const COMPANIES: Company[] = [
  {
    id: 'CMP-001',
    name: 'Constructora Andina S.A.S.',
    registrationDate: '10 Dic 2026',
    docsUploaded: 68,
    totalDocs: 70,
    tempScore: 86.4,
    status: 'reviewing',
  },
  {
    id: 'CMP-002',
    name: 'Energía Solar del Caribe',
    registrationDate: '09 Dic 2026',
    docsUploaded: 70,
    totalDocs: 70,
    tempScore: 92.1,
    status: 'pending',
  },
  {
    id: 'CMP-003',
    name: 'Obras Civiles Boyacá Ltda.',
    registrationDate: '08 Dic 2026',
    docsUploaded: 54,
    totalDocs: 70,
    tempScore: 71.5,
    status: 'pending',
  },
  {
    id: 'CMP-004',
    name: 'Inversiones Meta Solar',
    registrationDate: '07 Dic 2026',
    docsUploaded: 42,
    totalDocs: 70,
    tempScore: 58.2,
    status: 'pending',
  },
];

const DOCUMENTS: Document[] = [
  // LEGAL
  { id: 'DOC-L-001', name: 'RUT Actualizado', category: 'legal', uploaded: true, verified: true },
  { id: 'DOC-L-002', name: 'Cámara de Comercio', category: 'legal', uploaded: true, verified: true },
  { id: 'DOC-L-003', name: 'Certificado de Existencia', category: 'legal', uploaded: true, verified: null },
  { id: 'DOC-L-004', name: 'Estatutos de la Sociedad', category: 'legal', uploaded: true, verified: true },
  { id: 'DOC-L-005', name: 'Representación Legal', category: 'legal', uploaded: true, verified: null },
  { id: 'DOC-L-006', name: 'Cert. Antecedentes Judiciales', category: 'legal', uploaded: false, verified: null },
  { id: 'DOC-L-007', name: 'Cert. Antecedentes Fiscales', category: 'legal', uploaded: true, verified: true },
  { id: 'DOC-L-008', name: 'Certificado Contraloría', category: 'legal', uploaded: true, verified: true },
  { id: 'DOC-L-009', name: 'Certificado Procuraduría', category: 'legal', uploaded: true, verified: null },
  { id: 'DOC-L-010', name: 'Registro Único Proponentes', category: 'legal', uploaded: true, verified: true },
  
  // FINANCIERO
  { id: 'DOC-F-001', name: 'Estados Financieros 2025', category: 'financiero', uploaded: true, verified: true },
  { id: 'DOC-F-002', name: 'Estados Financieros 2024', category: 'financiero', uploaded: true, verified: true },
  { id: 'DOC-F-003', name: 'Declaración de Renta 2025', category: 'financiero', uploaded: true, verified: null },
  { id: 'DOC-F-004', name: 'Certificado Cuenta Bancaria', category: 'financiero', uploaded: true, verified: true },
  { id: 'DOC-F-005', name: 'Certificado Revisor Fiscal', category: 'financiero', uploaded: true, verified: true },
  { id: 'DOC-F-006', name: 'Balance General', category: 'financiero', uploaded: true, verified: null },
  { id: 'DOC-F-007', name: 'Paz y Salvo DIAN', category: 'financiero', uploaded: true, verified: true },
  { id: 'DOC-F-008', name: 'Aportes Parafiscales', category: 'financiero', uploaded: true, verified: true },
  
  // SST
  { id: 'DOC-S-001', name: 'Póliza RCE', category: 'sst', uploaded: true, verified: false, comment: 'Monto insuficiente' },
  { id: 'DOC-S-002', name: 'Póliza Todo Riesgo', category: 'sst', uploaded: true, verified: true },
  { id: 'DOC-S-003', name: 'ARL Vigente', category: 'sst', uploaded: true, verified: true },
  { id: 'DOC-S-004', name: 'Sistema de Gestión SST', category: 'sst', uploaded: true, verified: null },
  { id: 'DOC-S-005', name: 'Certificado Copasst', category: 'sst', uploaded: true, verified: true },
  { id: 'DOC-S-006', name: 'Plan de Emergencias', category: 'sst', uploaded: true, verified: true },
  { id: 'DOC-S-007', name: 'Matriz de Riesgos', category: 'sst', uploaded: true, verified: null },
  { id: 'DOC-S-008', name: 'Certificado Alturas', category: 'sst', uploaded: true, verified: true },
  { id: 'DOC-S-009', name: 'Cert. Espacios Confinados', category: 'sst', uploaded: true, verified: true },
  { id: 'DOC-S-010', name: 'Certificado RETIE', category: 'sst', uploaded: false, verified: null },
  
  // AMBIENTAL
  { id: 'DOC-A-001', name: 'Licencia Ambiental', category: 'ambiental', uploaded: true, verified: true },
  { id: 'DOC-A-002', name: 'Plan de Manejo Ambiental', category: 'ambiental', uploaded: true, verified: true },
  { id: 'DOC-A-003', name: 'Gestión de Residuos', category: 'ambiental', uploaded: true, verified: null },
  { id: 'DOC-A-004', name: 'Permiso Vertimientos', category: 'ambiental', uploaded: true, verified: true },
];

export default function AdminInbox() {
  const [selectedCompany, setSelectedCompany] = useState<Company>(COMPANIES[0]);
  const [documents, setDocuments] = useState<Document[]>(DOCUMENTS);
  const [activeComment, setActiveComment] = useState<string | null>(null);

  const handleVerification = (docId: string, status: boolean) => {
    setDocuments(docs =>
      docs.map(doc =>
        doc.id === docId ? { ...doc, verified: status } : doc
      )
    );
  };

  const handleComment = (docId: string, comment: string) => {
    setDocuments(docs =>
      docs.map(doc =>
        doc.id === docId ? { ...doc, comment } : doc
      )
    );
    setActiveComment(null);
  };

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: '#050505',
      }}
    >
      <AdminSidebar />

      {/* Main Content */}
      <div
        className="flex-1 flex"
        style={{
          marginLeft: '64px',
        }}
      >
        {/* LEFT PANEL: Cola de Solicitudes (35%) */}
        <div
          className="flex flex-col"
          style={{
            width: '35%',
            borderRight: '0.5px solid #333333',
          }}
        >
          {/* Header */}
          <div
            className="px-5 py-4"
            style={{
              borderBottom: '0.5px solid #333333',
            }}
          >
            <h1
              style={{
                color: '#E0E0E0',
                fontSize: '14px',
                fontWeight: '700',
                marginBottom: '2px',
              }}
            >
              Cola de Solicitudes
            </h1>
            <div
              style={{
                color: '#606060',
                fontSize: '10px',
              }}
            >
              {COMPANIES.length} empresas en revisión
            </div>
          </div>

          {/* Company List */}
          <div className="flex-1 overflow-y-auto">
            {COMPANIES.map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
                isSelected={selectedCompany.id === company.id}
                onClick={() => setSelectedCompany(company)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT PANEL: Expediente de Auditoría (65%) */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div
            className="px-6 py-4"
            style={{
              borderBottom: '0.5px solid #333333',
            }}
          >
            <h1
              style={{
                color: '#E0E0E0',
                fontSize: '14px',
                fontWeight: '700',
                marginBottom: '2px',
              }}
            >
              Expediente de Auditoría
            </h1>
            <div
              style={{
                color: '#1D99CC',
                fontSize: '12px',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: '600',
              }}
            >
              {selectedCompany.name}
            </div>
          </div>

          {/* Document Table */}
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
                      padding: '10px 16px',
                      color: '#606060',
                      fontSize: '9px',
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
                      padding: '10px 16px',
                      color: '#606060',
                      fontSize: '9px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      width: '100px',
                    }}
                  >
                    Category
                  </th>
                  <th
                    style={{
                      textAlign: 'center',
                      padding: '10px 16px',
                      color: '#606060',
                      fontSize: '9px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      width: '120px',
                    }}
                  >
                    Status
                  </th>
                  <th
                    style={{
                      textAlign: 'center',
                      padding: '10px 16px',
                      color: '#606060',
                      fontSize: '9px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      width: '140px',
                    }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <AuditDocumentRow
                    key={doc.id}
                    document={doc}
                    onVerify={handleVerification}
                    onComment={handleComment}
                    activeComment={activeComment}
                    setActiveComment={setActiveComment}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Float Bar: Final Decision */}
          <div
            className="px-6 py-4 flex items-center justify-between"
            style={{
              borderTop: '0.5px solid #333333',
              backgroundColor: '#0A0A0A',
            }}
          >
            <div>
              <div
                style={{
                  color: '#808080',
                  fontSize: '10px',
                  marginBottom: '4px',
                }}
              >
                Documentos verificados: {documents.filter(d => d.verified === true).length} / {documents.filter(d => d.uploaded).length}
              </div>
              <div
                style={{
                  color: '#1D99CC',
                  fontSize: '12px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '600',
                }}
              >
                SST Score: {selectedCompany.tempScore}%
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="flex items-center gap-2 px-5 py-2.5 rounded transition-all"
                style={{
                  backgroundColor: 'transparent',
                  border: '0.5px solid #FF4D4D',
                  color: '#FF4D4D',
                  fontSize: '11px',
                  fontWeight: '600',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 77, 77, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <X style={{ width: '14px', height: '14px' }} />
                Rechazar Partner
              </button>

              <button
                className="flex items-center gap-2 px-5 py-2.5 rounded transition-all"
                style={{
                  backgroundColor: '#00C853',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: '600',
                  boxShadow: '0 0 20px rgba(0, 200, 83, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#00D65A';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 200, 83, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#00C853';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 200, 83, 0.3)';
                }}
              >
                <Check style={{ width: '14px', height: '14px' }} />
                Habilitar para Solarverso
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== COMPANY CARD =====
interface CompanyCardProps {
  company: Company;
  isSelected: boolean;
  onClick: () => void;
}

function CompanyCard({ company, isSelected, onClick }: CompanyCardProps) {
  const percentage = (company.docsUploaded / company.totalDocs) * 100;

  return (
    <div
      onClick={onClick}
      className="px-4 py-3 cursor-pointer transition-all"
      style={{
        backgroundColor: isSelected ? '#0A0A0A' : 'transparent',
        borderLeft: isSelected ? '3px solid #1D99CC' : '3px solid transparent',
        borderBottom: '0.5px solid #1A1A1A',
      }}
    >
      <div
        className="mb-2"
        style={{
          color: isSelected ? '#E0E0E0' : '#B0B0B0',
          fontSize: '12px',
          fontWeight: '600',
        }}
      >
        {company.name}
      </div>

      <div className="flex items-center gap-3 mb-2">
        <div
          style={{
            color: '#606060',
            fontSize: '10px',
          }}
        >
          {company.registrationDate}
        </div>
        <div
          style={{
            color: '#808080',
            fontSize: '10px',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          {company.docsUploaded}/{company.totalDocs} docs
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-2">
        <div
          className="rounded-full overflow-hidden"
          style={{
            height: '4px',
            backgroundColor: '#1A1A1A',
          }}
        >
          <div
            style={{
              width: `${percentage}%`,
              height: '100%',
              backgroundColor: percentage >= 95 ? '#00C853' : percentage >= 70 ? '#FF9800' : '#FF4D4D',
            }}
          />
        </div>
      </div>

      {/* Temp Score */}
      <div
        style={{
          color: company.tempScore >= 85 ? '#00C853' : company.tempScore >= 70 ? '#FF9800' : '#FF4D4D',
          fontSize: '11px',
          fontFamily: 'JetBrains Mono, monospace',
          fontWeight: '700',
        }}
      >
        Score: {company.tempScore}%
      </div>
    </div>
  );
}

// ===== AUDIT DOCUMENT ROW =====
interface AuditDocumentRowProps {
  document: Document;
  onVerify: (id: string, status: boolean) => void;
  onComment: (id: string, comment: string) => void;
  activeComment: string | null;
  setActiveComment: (id: string | null) => void;
}

function AuditDocumentRow({
  document,
  onVerify,
  onComment,
  activeComment,
  setActiveComment,
}: AuditDocumentRowProps) {
  const [commentText, setCommentText] = useState(document.comment || '');

  const getStatusColor = () => {
    if (!document.uploaded) return '#FF4D4D';
    if (document.verified === true) return '#00C853';
    if (document.verified === false) return '#FF4D4D';
    return '#FF9800';
  };

  return (
    <tr
      style={{
        height: '32px',
        borderBottom: '0.5px solid #1A1A1A',
      }}
    >
      {/* Status Indicator */}
      <td style={{ width: '4px', padding: 0 }}>
        <div
          style={{
            width: '4px',
            height: '100%',
            backgroundColor: getStatusColor(),
          }}
        />
      </td>

      {/* Document Name */}
      <td style={{ padding: '6px 16px' }}>
        <div className="flex items-center gap-2">
          {!document.uploaded && (
            <AlertCircle style={{ width: '12px', height: '12px', color: '#FF4D4D' }} />
          )}
          {document.verified === true && (
            <CheckCircle2 style={{ width: '12px', height: '12px', color: '#00C853' }} />
          )}
          <span
            style={{
              color: document.uploaded ? '#B0B0B0' : '#808080',
              fontSize: '11px',
              fontWeight: '500',
            }}
          >
            {document.name}
          </span>
          {document.comment && (
            <MessageSquare
              style={{ width: '11px', height: '11px', color: '#1D99CC' }}
              title={document.comment}
            />
          )}
        </div>
      </td>

      {/* Category */}
      <td style={{ padding: '6px 16px' }}>
        <div
          className="inline-block px-2 py-0.5 rounded"
          style={{
            backgroundColor: '#0A0A0A',
            border: '0.5px solid #333333',
            color: '#808080',
            fontSize: '9px',
            fontWeight: '600',
            textTransform: 'uppercase',
          }}
        >
          {document.category === 'legal' ? 'LEG' :
           document.category === 'financiero' ? 'FIN' :
           document.category === 'sst' ? 'SST' : 'AMB'}
        </div>
      </td>

      {/* Status */}
      <td style={{ padding: '6px 16px', textAlign: 'center' }}>
        {!document.uploaded ? (
          <span style={{ color: '#FF4D4D', fontSize: '10px', fontWeight: '600' }}>
            MISSING
          </span>
        ) : document.verified === true ? (
          <span style={{ color: '#00C853', fontSize: '10px', fontWeight: '600' }}>
            PASS
          </span>
        ) : document.verified === false ? (
          <span style={{ color: '#FF4D4D', fontSize: '10px', fontWeight: '600' }}>
            FAIL
          </span>
        ) : (
          <span style={{ color: '#FF9800', fontSize: '10px', fontWeight: '600' }}>
            PENDING
          </span>
        )}
      </td>

      {/* Actions */}
      <td style={{ padding: '6px 16px' }}>
        {document.uploaded && (
          <div className="flex items-center justify-center gap-1">
            <button
              onClick={() => onVerify(document.id, true)}
              className="p-1 rounded transition-colors"
              style={{
                backgroundColor: document.verified === true ? 'rgba(0, 200, 83, 0.2)' : 'transparent',
                border: '0.5px solid #333333',
                color: document.verified === true ? '#00C853' : '#606060',
              }}
              title="Pass"
            >
              <Check style={{ width: '12px', height: '12px' }} />
            </button>
            <button
              onClick={() => onVerify(document.id, false)}
              className="p-1 rounded transition-colors"
              style={{
                backgroundColor: document.verified === false ? 'rgba(255, 77, 77, 0.2)' : 'transparent',
                border: '0.5px solid #333333',
                color: document.verified === false ? '#FF4D4D' : '#606060',
              }}
              title="Fail"
            >
              <X style={{ width: '12px', height: '12px' }} />
            </button>
            <button
              onClick={() => setActiveComment(activeComment === document.id ? null : document.id)}
              className="p-1 rounded transition-colors"
              style={{
                backgroundColor: document.comment ? 'rgba(29, 153, 204, 0.2)' : 'transparent',
                border: '0.5px solid #333333',
                color: document.comment ? '#1D99CC' : '#606060',
              }}
              title="Add Comment"
            >
              <MessageSquare style={{ width: '12px', height: '12px' }} />
            </button>
          </div>
        )}
        {activeComment === document.id && (
          <div
            className="absolute z-10 mt-1 p-2 rounded"
            style={{
              backgroundColor: '#121212',
              border: '0.5px solid #333333',
              minWidth: '200px',
            }}
          >
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add comment..."
              className="w-full mb-2 px-2 py-1 rounded"
              style={{
                backgroundColor: '#0A0A0A',
                border: '0.5px solid #333333',
                color: '#B0B0B0',
                fontSize: '10px',
                outline: 'none',
              }}
            />
            <button
              onClick={() => onComment(document.id, commentText)}
              className="px-2 py-1 rounded"
              style={{
                backgroundColor: '#1D99CC',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '10px',
                fontWeight: '600',
              }}
            >
              Save
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}
