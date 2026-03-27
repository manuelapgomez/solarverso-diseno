import React, { useState } from 'react';
import {
  ChevronLeft,
  Star,
  MessageSquare,
  Upload,
  CheckCircle2,
  AlertTriangle,
  MinusCircle,
  Send,
  Download,
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { UnifiedPartnerSidebar } from '../components/UnifiedPartnerSidebar';
import { useTheme } from '../contexts/ThemeContext';

interface ProposalDocument {
  id: string;
  name: string;
  status: 'aprobado' | 'observado' | 'no-aplica';
  score: number; // 0-5
  adminFeedback?: string;
  hasComments: boolean;
  commentCount?: number;
  fileReplaced?: boolean;
}

interface ChatMessage {
  id: string;
  sender: 'admin' | 'partner';
  message: string;
  timestamp: string;
}

// MOCK DATA - 14 Documents (3 specific examples + 11 more)
const MOCK_PROPOSAL_DOCUMENTS: ProposalDocument[] = [
  // Row 1 (Approved)
  {
    id: 'DOC-001',
    name: 'RUT Actualizado',
    status: 'aprobado',
    score: 5,
    adminFeedback: 'Documento correcto',
    hasComments: false,
    fileReplaced: false,
  },
  // Row 2 (Observed)
  {
    id: 'DOC-002',
    name: 'Certificado de Alturas',
    status: 'observado',
    score: 1,
    adminFeedback: 'Vencido hace 2 meses',
    hasComments: true,
    commentCount: 2,
    fileReplaced: false,
  },
  // Row 3 (N/A)
  {
    id: 'DOC-003',
    name: 'Licencia Ambiental',
    status: 'no-aplica',
    score: 0,
    adminFeedback: 'No requerido para este perfil',
    hasComments: false,
    fileReplaced: false,
  },
  // Additional documents
  {
    id: 'DOC-004',
    name: 'Certificado de Existencia y Representación Legal',
    status: 'aprobado',
    score: 5,
    adminFeedback: 'Documento correcto',
    hasComments: false,
    fileReplaced: false,
  },
  {
    id: 'DOC-005',
    name: 'Póliza de Responsabilidad Civil Extracontractual',
    status: 'aprobado',
    score: 4,
    hasComments: false,
    fileReplaced: false,
  },
  {
    id: 'DOC-006',
    name: 'ARL Vigente del Personal Técnico',
    status: 'aprobado',
    score: 5,
    hasComments: false,
    fileReplaced: false,
  },
  {
    id: 'DOC-007',
    name: 'Certificación ISO 9001 Sistema de Gestión',
    status: 'aprobado',
    score: 4,
    hasComments: false,
    fileReplaced: false,
  },
  {
    id: 'DOC-008',
    name: 'Registro de Equipos y Maquinaria Especializada',
    status: 'aprobado',
    score: 5,
    hasComments: false,
    fileReplaced: false,
  },
  {
    id: 'DOC-009',
    name: 'Certificados de Calibración de Equipos',
    status: 'aprobado',
    score: 4,
    hasComments: false,
    fileReplaced: false,
  },
  {
    id: 'DOC-010',
    name: 'Plan de Seguridad y Salud en el Trabajo (SST)',
    status: 'aprobado',
    score: 5,
    hasComments: false,
    fileReplaced: false,
  },
  {
    id: 'DOC-011',
    name: 'Referencias Comerciales de Proyectos Anteriores',
    status: 'aprobado',
    score: 4,
    hasComments: false,
    fileReplaced: false,
  },
  {
    id: 'DOC-012',
    name: 'Certificado de Antecedentes Judiciales Empresa',
    status: 'aprobado',
    score: 5,
    hasComments: false,
    fileReplaced: false,
  },
  {
    id: 'DOC-013',
    name: 'Estados Financieros Auditados 2024-2025',
    status: 'aprobado',
    score: 5,
    hasComments: false,
    fileReplaced: false,
  },
  {
    id: 'DOC-014',
    name: 'Declaración de Origen y Procedencia de Equipos',
    status: 'aprobado',
    score: 4,
    hasComments: false,
    fileReplaced: false,
  },
];

const MOCK_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'MSG-001',
    sender: 'admin',
    message: 'El certificado de alturas está vencido desde hace 2 meses. Debe presentar uno actualizado.',
    timestamp: '14 Feb 2026 10:15',
  },
  {
    id: 'MSG-002',
    sender: 'partner',
    message: 'Entendido. Ya tenemos programada la renovación para el 18 de febrero. ¿Puedo adjuntar el certificado provisional?',
    timestamp: '14 Feb 2026 11:30',
  },
];

export default function PartnerProposalWorkstation() {
  const navigate = useNavigate();
  const { applicationId } = useParams<{ applicationId: string }>();
  const [documents, setDocuments] = useState<ProposalDocument[]>(MOCK_PROPOSAL_DOCUMENTS);
  const [activeChatDoc, setActiveChatDoc] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(MOCK_CHAT_MESSAGES);
  const [newMessage, setNewMessage] = useState('');
  const { colors } = useTheme();

  const globalScore = 88;
  const mgsId = 'MGS-BOY-05';
  const projectName = 'Montaje Estructuras Boyacá V';
  const category = 'Civil';
  const submissionDate = '08 Feb 2026';

  const observedDocs = documents.filter((doc) => doc.status === 'observado');
  const correctedDocs = observedDocs.filter((doc) => doc.fileReplaced);
  const hasReplacedFiles = correctedDocs.length > 0;

  const handleFileReplace = (docId: string) => {
    setDocuments(
      documents.map((doc) => (doc.id === docId ? { ...doc, fileReplaced: true } : doc))
    );
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
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
      setChatMessages([...chatMessages, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Dynamic track color for progress arcs based on theme
  const trackColor = colors.theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0';
  const tableHeaderBg = colors.theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#F1F5F9';
  const tableRowEvenBg = colors.theme === 'dark' ? colors.panelBackground : colors.cardBackground;
  const tableRowOddBg = colors.theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : '#FAFBFC';
  const chatBgAdmin = colors.theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : '#F1F5F9';
  const inputBg = colors.theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#F8FAFC';
  const inputBorder = colors.theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#CBD5E1';

  return (
    <div
      className="min-h-screen flex"
      style={{
        backgroundColor: colors.canvasBackground,
      }}
    >
      {/* SIDEBAR */}
      <UnifiedPartnerSidebar />

      {/* MAIN CONTENT */}
      <div
        className="flex-1 flex flex-col"
        style={{
          marginLeft: '240px',
        }}
      >
        {/* TOP NAVIGATION (THE BRIDGE) */}
        <div
          style={{
            backgroundColor: colors.panelBackground,
            borderBottom: `1px solid ${colors.border}`,
            padding: '20px 32px',
            boxShadow: colors.shadowSm,
          }}
        >
          <div className="flex items-center justify-between">
            {/* Left: Back Button */}
            <button
              onClick={() => navigate('/partner/actividad')}
              className="flex items-center gap-2 px-3 py-2 rounded transition-all"
              style={{
                backgroundColor: 'transparent',
                border: `1px solid ${colors.border}`,
                color: colors.textTertiary,
                fontSize: '11px',
                fontWeight: '600',
              }}
            >
              <ChevronLeft style={{ width: '14px', height: '14px' }} />
              Volver a Mi Actividad
            </button>

            {/* Center: Title */}
            <h1
              style={{
                color: colors.textPrimary,
                fontSize: '18px',
                fontWeight: '700',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Detalle de Postulación: <span style={{ color: colors.accent, fontFamily: 'JetBrains Mono, monospace' }}>{mgsId}</span>-{projectName}
            </h1>

            {/* Right: Status Badge */}
            <div
              className="px-4 py-2 rounded"
              style={{
                backgroundColor: colors.infoBg,
                border: `1px solid ${colors.accent}`,
                color: colors.accent,
                fontSize: '11px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              EN EVALUACIÓN
            </div>
          </div>
        </div>

        {/* PERFORMANCE DASHBOARD (HEADER) */}
        <div
          style={{
            backgroundColor: colors.panelBackground,
            borderBottom: `1px solid ${colors.border}`,
            padding: '32px',
            boxShadow: colors.shadowSm,
          }}
        >
          <div className="flex items-center justify-between">
            {/* Left Column: Project Info */}
            <div style={{ flex: 1 }}>
              <h2
                style={{
                  color: colors.textPrimary,
                  fontSize: '22px',
                  fontWeight: '700',
                  marginBottom: '12px',
                }}
              >
                {projectName}
              </h2>
              <div className="flex items-center gap-6">
                <div>
                  <div
                    style={{
                      color: colors.textTertiary,
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '4px',
                    }}
                  >
                    Categoría
                  </div>
                  <div
                    className="inline-block px-3 py-1 rounded"
                    style={{
                      backgroundColor: colors.infoBg,
                      border: `1px solid ${colors.accent}`,
                      color: colors.accent,
                      fontSize: '11px',
                      fontWeight: '700',
                    }}
                  >
                    {category}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      color: colors.textTertiary,
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '4px',
                    }}
                  >
                    Fecha de Envío
                  </div>
                  <div
                    style={{
                      color: colors.textSecondary,
                      fontSize: '12px',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {submissionDate}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Performance Gauge (Semi-Circle) */}
            <div
              className="flex flex-col items-center"
              style={{
                width: '200px',
                flexShrink: 0,
              }}
            >
              {/* Semi-Circular Progress Bar */}
              <div className="relative" style={{ width: '160px', height: '80px', marginBottom: '12px' }}>
                <svg width="160" height="80" viewBox="0 0 160 80" style={{ overflow: 'visible' }}>
                  {/* Background Arc */}
                  <path
                    d="M 10 75 A 70 70 0 0 1 150 75"
                    fill="none"
                    stroke={trackColor}
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  {/* Progress Arc */}
                  <path
                    d="M 10 75 A 70 70 0 0 1 150 75"
                    fill="none"
                    stroke={colors.accent}
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${(globalScore / 100) * 220} 220`}
                  />
                </svg>
                {/* Score Text in Center */}
                <div
                  className="absolute"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, 0%)',
                  }}
                >
                  <div
                    style={{
                      color: colors.accent,
                      fontSize: '32px',
                      fontWeight: '700',
                      fontFamily: 'JetBrains Mono, monospace',
                      lineHeight: '1',
                      textAlign: 'center',
                    }}
                  >
                    {globalScore}
                  </div>
                  <div
                    style={{
                      color: colors.textTertiary,
                      fontSize: '12px',
                      fontFamily: 'JetBrains Mono, monospace',
                      textAlign: 'center',
                    }}
                  >
                    /100
                  </div>
                </div>
              </div>
              <div
                style={{
                  color: colors.textTertiary,
                  fontSize: '10px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Score Actual
              </div>
            </div>
          </div>
        </div>

        {/* THE DOCUMENT SUBSIDY MATRIX (THE CORE GRID) */}
        <div
          className="flex-1"
          style={{
            padding: '32px',
            paddingBottom: '100px', // Space for footer
          }}
        >
          <h2
            style={{
              color: colors.textPrimary,
              fontSize: '16px',
              fontWeight: '700',
              marginBottom: '20px',
            }}
          >
            Estado de Documentación y Propuesta (14 Items)
          </h2>

          {/* High-Density Table */}
          <div
            style={{
              border: `1px solid ${colors.border}`,
              borderRadius: '4px',
              overflow: 'hidden',
              backgroundColor: colors.cardBackground,
              boxShadow: colors.shadowSm,
            }}
          >
            {/* Table Header */}
            <div
              className="grid"
              style={{
                gridTemplateColumns: '50px 1fr 140px 300px 80px 180px',
                backgroundColor: tableHeaderBg,
                padding: '12px 20px',
                borderBottom: `1px solid ${colors.border}`,
              }}
            >
              <div style={{ color: colors.textSecondary, fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>
                Status
              </div>
              <div style={{ color: colors.textSecondary, fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>
                Documento
              </div>
              <div style={{ color: colors.textSecondary, fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>
                Calificación
              </div>
              <div style={{ color: colors.textSecondary, fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>
                Feedback del Admin
              </div>
              <div
                style={{
                  color: colors.textSecondary,
                  fontSize: '10px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                Chat
              </div>
              <div
                style={{
                  color: colors.textSecondary,
                  fontSize: '10px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                Acción
              </div>
            </div>

            {/* Table Rows */}
            {documents.map((doc, index) => (
              <DocumentRow
                key={doc.id}
                document={doc}
                index={index}
                isActiveChatDoc={activeChatDoc === doc.id}
                onChatClick={() => setActiveChatDoc(activeChatDoc === doc.id ? null : doc.id)}
                onFileReplace={handleFileReplace}
                rowEvenBg={tableRowEvenBg}
                rowOddBg={tableRowOddBg}
                colors={colors}
              />
            ))}
          </div>

          {/* Floating Chat Component */}
          {activeChatDoc && (
            <>
              {/* Overlay */}
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  zIndex: 40,
                }}
                onClick={() => setActiveChatDoc(null)}
              />

              {/* Chat Box */}
              <div
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '520px',
                  height: '600px',
                  backgroundColor: colors.cardBackground,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '8px',
                  zIndex: 50,
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: colors.shadowLg,
                }}
              >
                {/* Chat Header */}
                <div
                  style={{
                    padding: '20px',
                    borderBottom: `1px solid ${colors.border}`,
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      style={{
                        color: colors.textPrimary,
                        fontSize: '14px',
                        fontWeight: '700',
                      }}
                    >
                      Conversación con Evaluador
                    </h3>
                    <button
                      onClick={() => setActiveChatDoc(null)}
                      style={{
                        color: colors.textTertiary,
                        fontSize: '20px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      ×
                    </button>
                  </div>
                  <p
                    style={{
                      color: colors.textTertiary,
                      fontSize: '11px',
                    }}
                  >
                    {documents.find((d) => d.id === activeChatDoc)?.name}
                  </p>
                </div>

                {/* Chat Messages */}
                <div
                  style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    backgroundColor: colors.canvasBackground,
                  }}
                >
                  {chatMessages.map((msg) => (
                    <ChatBubble key={msg.id} message={msg} chatBgAdmin={chatBgAdmin} colors={colors} />
                  ))}
                </div>

                {/* Chat Footer - Input */}
                <div
                  style={{
                    padding: '20px',
                    borderTop: `1px solid ${colors.border}`,
                    backgroundColor: colors.cardBackground,
                  }}
                >
                  <div
                    className="flex items-center gap-2"
                    style={{
                      backgroundColor: inputBg,
                      border: `1px solid ${inputBorder}`,
                      borderRadius: '24px',
                      padding: '10px 18px',
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Responder al evaluador..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      style={{
                        flex: 1,
                        background: 'none',
                        border: 'none',
                        outline: 'none',
                        color: colors.textPrimary,
                        fontSize: '12px',
                      }}
                    />
                    <button
                      onClick={handleSendMessage}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                      }}
                    >
                      <Send style={{ width: '16px', height: '16px', color: colors.accent }} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* SUBMISSION CONTROL (FOOTER) */}
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: '240px',
            right: 0,
            backgroundColor: colors.panelBackground,
            borderTop: `1px solid ${colors.border}`,
            padding: '20px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 30,
            boxShadow: colors.shadowSm,
          }}
        >
          {/* Left: Progress */}
          <div className="flex items-center gap-6">
            <div
              style={{
                color: colors.textSecondary,
                fontSize: '12px',
              }}
            >
              Progreso de Subsanación:{' '}
              <span
                style={{
                  color: colors.accent,
                  fontWeight: '700',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {correctedDocs.length}/{observedDocs.length}
              </span>{' '}
              documentos corregidos
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded transition-all"
              style={{
                backgroundColor: 'transparent',
                border: `1px solid ${colors.border}`,
                color: colors.textTertiary,
                fontSize: '11px',
                fontWeight: '600',
              }}
            >
              <Download style={{ width: '14px', height: '14px' }} />
              Descargar Pliego Original
            </button>
          </div>

          {/* Right: Action Button */}
          {hasReplacedFiles && (
            <button
              className="px-8 py-3 rounded transition-all"
              style={{
                backgroundColor: colors.accent,
                border: `1px solid ${colors.accent}`,
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              ENVIAR ACTUALIZACIÓN
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ===== DOCUMENT ROW =====
function DocumentRow({
  document,
  index,
  isActiveChatDoc,
  onChatClick,
  onFileReplace,
  rowEvenBg,
  rowOddBg,
  colors,
}: {
  document: ProposalDocument;
  index: number;
  isActiveChatDoc: boolean;
  onChatClick: () => void;
  onFileReplace: (docId: string) => void;
  rowEvenBg: string;
  rowOddBg: string;
  colors: any;
}) {
  const getStatusConfig = (status: ProposalDocument['status']) => {
    switch (status) {
      case 'aprobado':
        return {
          icon: <CheckCircle2 style={{ width: '16px', height: '16px', color: colors.success }} />,
          label: 'Aprobado',
          color: colors.success,
        };
      case 'observado':
        return {
          icon: <AlertTriangle style={{ width: '16px', height: '16px', color: colors.error }} />,
          label: 'Observado',
          color: colors.error,
        };
      case 'no-aplica':
        return {
          icon: <MinusCircle style={{ width: '16px', height: '16px', color: colors.textDisabled }} />,
          label: 'No Aplica',
          color: colors.textDisabled,
        };
    }
  };

  const statusConfig = getStatusConfig(document.status);
  const isDisabled = document.status === 'no-aplica';

  return (
    <div
      className="grid transition-all"
      style={{
        gridTemplateColumns: '50px 1fr 140px 300px 80px 180px',
        backgroundColor: index % 2 === 0 ? rowEvenBg : rowOddBg,
        padding: '14px 20px',
        borderBottom: `1px solid ${colors.border}`,
        alignItems: 'center',
        opacity: isDisabled ? 0.4 : 1,
      }}
    >
      {/* Status Icon */}
      <div>{statusConfig.icon}</div>

      {/* Document Name */}
      <div
        style={{
          color: isDisabled ? colors.textTertiary : colors.textPrimary,
          fontSize: '12px',
          fontWeight: '500',
        }}
      >
        {document.name}
      </div>

      {/* Star Rating */}
      <div className="flex items-center gap-1">
        {document.status === 'no-aplica' ? (
          <span
            style={{
              color: colors.textTertiary,
              fontSize: '11px',
              fontStyle: 'italic',
            }}
          >
            N/A
          </span>
        ) : (
          [1, 2, 3, 4, 5].map((starNum) => (
            <Star
              key={starNum}
              style={{
                width: '14px',
                height: '14px',
                fill: starNum <= document.score ? '#FFB800' : 'transparent',
                stroke: starNum <= document.score ? '#FFB800' : colors.border,
              }}
            />
          ))
        )}
      </div>

      {/* Admin Feedback */}
      <div
        style={{
          color: document.adminFeedback ? colors.textSecondary : colors.textTertiary,
          fontSize: '11px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {document.adminFeedback || '—'}
      </div>

      {/* Chat Icon */}
      <div className="flex items-center justify-center">
        <button
          onClick={onChatClick}
          disabled={isDisabled}
          className="relative p-2 rounded transition-all"
          style={{
            backgroundColor: isActiveChatDoc ? colors.infoBg : 'transparent',
            border: isActiveChatDoc ? `1px solid ${colors.accent}` : '1px solid transparent',
            color: isDisabled ? colors.textDisabled : colors.textTertiary,
            cursor: isDisabled ? 'not-allowed' : 'pointer',
          }}
        >
          <MessageSquare style={{ width: '16px', height: '16px' }} />
          {document.hasComments && !isDisabled && (
            <div
              style={{
                position: 'absolute',
                top: '4px',
                right: '4px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: colors.accent,
                border: `2px solid ${colors.cardBackground}`,
              }}
            />
          )}
        </button>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-center">
        {document.status === 'aprobado' && (
          <div
            style={{
              color: colors.textTertiary,
              fontSize: '11px',
              fontStyle: 'italic',
            }}
          >
            —
          </div>
        )}
        {document.status === 'observado' && !document.fileReplaced && (
          <button
            onClick={() => onFileReplace(document.id)}
            className="flex items-center gap-2 px-4 py-2 rounded transition-all"
            style={{
              backgroundColor: colors.accent,
              border: `1px solid ${colors.accent}`,
              color: '#FFFFFF',
              fontSize: '10px',
              fontWeight: '700',
              textTransform: 'uppercase',
            }}
          >
            <Upload style={{ width: '12px', height: '12px' }} />
            SUBIR NUEVO
          </button>
        )}
        {document.status === 'observado' && document.fileReplaced && (
          <div
            className="px-4 py-2 rounded"
            style={{
              backgroundColor: colors.infoBg,
              border: `1px solid ${colors.accent}`,
              color: colors.accent,
              fontSize: '10px',
              fontWeight: '700',
              textTransform: 'uppercase',
            }}
          >
            ✓ Actualizado
          </div>
        )}
        {document.status === 'no-aplica' && (
          <div
            style={{
              color: colors.textTertiary,
              fontSize: '10px',
              fontStyle: 'italic',
            }}
          >
            —
          </div>
        )}
      </div>
    </div>
  );
}

// ===== CHAT BUBBLE =====
function ChatBubble({ message, chatBgAdmin, colors }: { message: ChatMessage; chatBgAdmin: string; colors: any }) {
  const isPartner = message.sender === 'partner';

  return (
    <div
      style={{
        alignSelf: isPartner ? 'flex-end' : 'flex-start',
        maxWidth: '70%',
      }}
    >
      <div
        style={{
          padding: '12px 16px',
          backgroundColor: isPartner ? colors.accent : chatBgAdmin,
          borderRadius: '12px',
          borderBottomRightRadius: isPartner ? '4px' : '12px',
          borderBottomLeftRadius: isPartner ? '12px' : '4px',
        }}
      >
        <p
          style={{
            color: isPartner ? '#FFFFFF' : colors.textPrimary,
            fontSize: '12px',
            lineHeight: '1.5',
            marginBottom: '6px',
          }}
        >
          {message.message}
        </p>
        <span
          style={{
            color: isPartner ? 'rgba(255, 255, 255, 0.7)' : colors.textTertiary,
            fontSize: '9px',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          {message.timestamp}
        </span>
      </div>
    </div>
  );
}
