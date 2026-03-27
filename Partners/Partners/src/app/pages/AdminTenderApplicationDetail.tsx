import React, { useState } from 'react';
import { AdminSidebar } from '../components/AdminSidebar';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  MessageSquare,
  Download,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Send,
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router';

interface DocumentEvaluation {
  id: string;
  name: string;
  uploadDate: string;
  status: 'cumple' | 'no-cumple' | 'no-aplica';
  stars: number;
  hasComments: boolean;
  commentCount?: number;
}

interface ChatMessage {
  id: string;
  sender: 'admin' | 'partner';
  message: string;
  timestamp: string;
}

// MOCK DATA - 14 Documents
const MOCK_DOCUMENTS: DocumentEvaluation[] = [
  { id: 'DOC-001', name: 'Certificado de Experiencia en Proyectos Similares', uploadDate: '10 Feb 2026', status: 'cumple', stars: 5, hasComments: false },
  { id: 'DOC-002', name: 'Registro Único Tributario (RUT) Actualizado', uploadDate: '10 Feb 2026', status: 'cumple', stars: 5, hasComments: false },
  { id: 'DOC-003', name: 'Certificado de Existencia y Representación Legal', uploadDate: '09 Feb 2026', status: 'cumple', stars: 4, hasComments: false },
  { id: 'DOC-004', name: 'Póliza de Responsabilidad Civil Extracontractual', uploadDate: '09 Feb 2026', status: 'cumple', stars: 5, hasComments: false },
  { id: 'DOC-005', name: 'ARL Vigente del Personal Técnico', uploadDate: '10 Feb 2026', status: 'cumple', stars: 4, hasComments: false },
  { id: 'DOC-006', name: 'Certificación ISO 9001 Sistema de Gestión', uploadDate: '08 Feb 2026', status: 'cumple', stars: 5, hasComments: false },
  { id: 'DOC-007', name: 'Registro de Equipos y Maquinaria Especializada', uploadDate: '10 Feb 2026', status: 'cumple', stars: 4, hasComments: false },
  { id: 'DOC-008', name: 'Certificados de Calibración de Equipos', uploadDate: '09 Feb 2026', status: 'cumple', stars: 5, hasComments: false },
  { id: 'DOC-009', name: 'Plan de Seguridad y Salud en el Trabajo (SST)', uploadDate: '10 Feb 2026', status: 'cumple', stars: 4, hasComments: false },
  { id: 'DOC-010', name: 'Referencias Comerciales de Proyectos Anteriores', uploadDate: '08 Feb 2026', status: 'cumple', stars: 5, hasComments: false },
  { id: 'DOC-011', name: 'Licencia Ambiental o Permiso de Vertimientos', uploadDate: '07 Feb 2026', status: 'no-cumple', stars: 1, hasComments: true, commentCount: 3 },
  { id: 'DOC-012', name: 'Certificado de Antecedentes Judiciales Empresa', uploadDate: '10 Feb 2026', status: 'no-aplica', stars: 0, hasComments: false },
  { id: 'DOC-013', name: 'Estados Financieros Auditados 2024-2025', uploadDate: '09 Feb 2026', status: 'cumple', stars: 5, hasComments: false },
  { id: 'DOC-014', name: 'Declaración de Origen y Procedencia de Equipos', uploadDate: '10 Feb 2026', status: 'cumple', stars: 4, hasComments: false },
];

const MOCK_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'MSG-001',
    sender: 'admin',
    message: 'La licencia ambiental adjunta no corresponde al tipo de proyecto solicitado. Se requiere permiso específico para instalaciones solares de más de 50 hectáreas.',
    timestamp: '10 Feb 2026 14:23',
  },
  {
    id: 'MSG-002',
    sender: 'partner',
    message: 'Entendido. ¿Es posible presentar un permiso provisional mientras tramitamos el definitivo con la autoridad ambiental regional?',
    timestamp: '10 Feb 2026 15:10',
  },
  {
    id: 'MSG-003',
    sender: 'admin',
    message: 'No, para continuar con la evaluación necesitamos el permiso definitivo o carta de compromiso firmada por la CAR. Por favor adjuntar en los próximos 5 días hábiles.',
    timestamp: '10 Feb 2026 15:47',
  },
];

export default function AdminTenderApplicationDetail() {
  const navigate = useNavigate();
  const { applicationId } = useParams<{ applicationId: string }>();
  const [activeChatDoc, setActiveChatDoc] = useState<string | null>('DOC-011');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(MOCK_CHAT_MESSAGES);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: `MSG-${Date.now()}`,
        sender: 'admin',
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

  const currentStep = 3; // Evaluación
  const globalScore = 88;

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: '#050505',
      }}
    >
      <AdminSidebar />

      <div
        className="flex-1"
        style={{
          marginLeft: '240px',
          backgroundColor: '#050505',
        }}
      >
        {/* TOP NAVIGATION & CONTEXT */}
        <div
          style={{
            backgroundColor: '#0A0A0A',
            borderBottom: '1px solid #222222',
            padding: '24px 36px',
          }}
        >
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => navigate('/admin/tenders')}
              style={{
                color: '#606060',
                fontSize: '11px',
                fontWeight: '600',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Pliegos
            </button>
            <ChevronRight style={{ width: '12px', height: '12px', color: '#404040' }} />
            <button
              onClick={() => navigate('/admin/partners/construcciones-sas')}
              style={{
                color: '#606060',
                fontSize: '11px',
                fontWeight: '600',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Historial
            </button>
            <ChevronRight style={{ width: '12px', height: '12px', color: '#404040' }} />
            <span
              style={{
                color: '#1D99CC',
                fontSize: '11px',
                fontWeight: '700',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              Detalle Postulación [MGS-BOY-05]
            </span>
          </div>

          <div className="flex items-start justify-between">
            {/* Left: Title + Pipeline */}
            <div style={{ flex: 1 }}>
              <h1
                style={{
                  color: '#FFFFFF',
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '24px',
                }}
              >
                Postulación: Instalación Sistema Montaje Solar
              </h1>

              {/* Large Pipeline Stepper */}
              <div className="flex items-center gap-3">
                {['Postulado', 'Revisión', 'Evaluación', 'Fallo'].map((step, index) => {
                  const stepNumber = index + 1;
                  const isActive = stepNumber <= currentStep;
                  const isCurrent = stepNumber === currentStep;

                  return (
                    <div key={step} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div
                          className="flex items-center justify-center"
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            backgroundColor: isActive ? '#1D99CC' : 'rgba(255, 255, 255, 0.05)',
                            border: isCurrent ? '3px solid #1D99CC' : isActive ? '2px solid #1D99CC' : 'none',
                          }}
                        >
                          <span
                            style={{
                              color: isActive ? '#FFFFFF' : '#404040',
                              fontSize: '18px',
                              fontWeight: '700',
                              fontFamily: 'JetBrains Mono, monospace',
                            }}
                          >
                            {stepNumber}
                          </span>
                        </div>
                        <span
                          style={{
                            color: isActive ? '#1D99CC' : '#606060',
                            fontSize: '10px',
                            fontWeight: '700',
                            marginTop: '8px',
                            textTransform: 'uppercase',
                          }}
                        >
                          {step}
                        </span>
                      </div>
                      {index < 3 && (
                        <div
                          style={{
                            width: '80px',
                            height: '3px',
                            backgroundColor: stepNumber < currentStep ? '#1D99CC' : 'rgba(255, 255, 255, 0.05)',
                            marginLeft: '12px',
                            marginRight: '12px',
                            marginBottom: '24px',
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Global Score with Circular Progress Ring */}
            <div
              className="flex flex-col items-center justify-center"
              style={{
                width: '180px',
                flexShrink: 0,
              }}
            >
              <div className="relative flex items-center justify-center" style={{ width: '140px', height: '140px' }}>
                {/* Background Circle */}
                <svg className="absolute" width="140" height="140" style={{ transform: 'rotate(-90deg)' }}>
                  <circle
                    cx="70"
                    cy="70"
                    r="60"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.05)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="70"
                    cy="70"
                    r="60"
                    fill="none"
                    stroke="#1D99CC"
                    strokeWidth="8"
                    strokeDasharray={`${(globalScore / 100) * 377} 377`}
                    strokeLinecap="round"
                  />
                </svg>

                {/* Score Text */}
                <div className="flex flex-col items-center">
                  <span
                    style={{
                      color: '#1D99CC',
                      fontSize: '36px',
                      fontWeight: '700',
                      fontFamily: 'JetBrains Mono, monospace',
                      lineHeight: '1',
                    }}
                  >
                    {globalScore}
                  </span>
                  <span
                    style={{
                      color: '#606060',
                      fontSize: '14px',
                      fontWeight: '600',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    /100
                  </span>
                </div>
              </div>
              <span
                style={{
                  color: '#808080',
                  fontSize: '10px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginTop: '12px',
                }}
              >
                Tu Score
              </span>
            </div>
          </div>
        </div>

        {/* DOCUMENT EVALUATION MATRIX */}
        <div
          style={{
            padding: '32px 36px',
            paddingBottom: '120px', // Space for sticky footer
          }}
        >
          <h2
            style={{
              color: '#FFFFFF',
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '20px',
            }}
          >
            Análisis de Documentación Técnica (14 Documentos)
          </h2>

          {/* High-Density Grid */}
          <div
            style={{
              border: '1px solid #222222',
              borderRadius: '4px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Table Header */}
            <div
              className="grid"
              style={{
                gridTemplateColumns: '50px 1fr 140px 140px 140px 100px',
                backgroundColor: '#0A0A0A',
                padding: '12px 20px',
                borderBottom: '1px solid #222222',
              }}
            >
              <div style={{ color: '#808080', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>
                Estado
              </div>
              <div style={{ color: '#808080', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>
                Nombre del Documento
              </div>
              <div style={{ color: '#808080', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>
                Fecha Subida
              </div>
              <div style={{ color: '#808080', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>
                Cumplimiento
              </div>
              <div style={{ color: '#808080', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>
                Puntaje
              </div>
              <div
                style={{
                  color: '#808080',
                  fontSize: '10px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                Chat
              </div>
            </div>

            {/* Table Rows */}
            {MOCK_DOCUMENTS.map((doc, index) => (
              <DocumentRow
                key={doc.id}
                document={doc}
                index={index}
                isActiveChatDoc={activeChatDoc === doc.id}
                onChatClick={() => setActiveChatDoc(activeChatDoc === doc.id ? null : doc.id)}
              />
            ))}
          </div>

          {/* Floating Chat Box */}
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
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
                  width: '480px',
                  height: '600px',
                  backgroundColor: '#121212',
                  border: '1px solid #333333',
                  borderRadius: '8px',
                  zIndex: 50,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Chat Header */}
                <div
                  style={{
                    padding: '20px',
                    borderBottom: '1px solid #222222',
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      style={{
                        color: '#FFFFFF',
                        fontSize: '14px',
                        fontWeight: '700',
                      }}
                    >
                      Comentarios de Subsanación
                    </h3>
                    <button
                      onClick={() => setActiveChatDoc(null)}
                      style={{
                        color: '#606060',
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
                      color: '#808080',
                      fontSize: '11px',
                    }}
                  >
                    {MOCK_DOCUMENTS.find((d) => d.id === activeChatDoc)?.name}
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
                  }}
                >
                  {chatMessages.map((msg) => (
                    <ChatBubble key={msg.id} message={msg} />
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div
                      style={{
                        alignSelf: 'flex-start',
                        padding: '12px 16px',
                        backgroundColor: '#1E1E1E',
                        borderRadius: '12px',
                        maxWidth: '70%',
                      }}
                    >
                      <div className="flex items-center gap-1">
                        <div
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#606060',
                            animation: 'pulse 1.5s infinite',
                          }}
                        />
                        <div
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#606060',
                            animation: 'pulse 1.5s infinite 0.2s',
                          }}
                        />
                        <div
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#606060',
                            animation: 'pulse 1.5s infinite 0.4s',
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <div
                  style={{
                    padding: '20px',
                    borderTop: '1px solid #222222',
                  }}
                >
                  <div
                    className="flex items-center gap-2"
                    style={{
                      backgroundColor: '#1E1E1E',
                      border: '1px solid #333333',
                      borderRadius: '24px',
                      padding: '8px 16px',
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Escribe tu mensaje..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      style={{
                        flex: 1,
                        background: 'none',
                        border: 'none',
                        outline: 'none',
                        color: '#FFFFFF',
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
                      <Send style={{ width: '16px', height: '16px', color: '#1D99CC' }} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* STICKY FOOTER ACTIONS */}
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: '240px',
            right: 0,
            backgroundColor: '#0A0A0A',
            borderTop: '1px solid #222222',
            padding: '20px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 30,
          }}
        >
          {/* Left: Export */}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded transition-all"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #333333',
              color: '#B0B0B0',
              fontSize: '11px',
              fontWeight: '600',
            }}
          >
            <Download style={{ width: '14px', height: '14px' }} />
            Exportar Reporte de Evaluación (PDF)
          </button>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              className="px-6 py-3 rounded transition-all"
              style={{
                backgroundColor: 'rgba(255, 193, 7, 0.15)',
                border: '1px solid #FFC107',
                color: '#FFC107',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
              }}
            >
              Solicitar Subsanación
            </button>
            <button
              className="px-6 py-3 rounded transition-all"
              style={{
                backgroundColor: '#1D99CC',
                border: '1px solid #1D99CC',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
              }}
            >
              APROBAR POSTULACIÓN FINAL
            </button>
          </div>
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
}: {
  document: DocumentEvaluation;
  index: number;
  isActiveChatDoc: boolean;
  onChatClick: () => void;
}) {
  const getStatusConfig = (status: DocumentEvaluation['status']) => {
    switch (status) {
      case 'cumple':
        return {
          icon: <CheckCircle2 style={{ width: '16px', height: '16px', color: '#00C853' }} />,
          label: 'Cumple',
          color: '#00C853',
        };
      case 'no-cumple':
        return {
          icon: <XCircle style={{ width: '16px', height: '16px', color: '#FF5252' }} />,
          label: 'No Cumple',
          color: '#FF5252',
        };
      case 'no-aplica':
        return {
          icon: <AlertCircle style={{ width: '16px', height: '16px', color: '#606060' }} />,
          label: 'No Aplica',
          color: '#606060',
        };
    }
  };

  const statusConfig = getStatusConfig(document.status);
  const isDisabled = document.status === 'no-aplica';

  return (
    <div
      className="grid transition-all"
      style={{
        gridTemplateColumns: '50px 1fr 140px 140px 140px 100px',
        backgroundColor: index % 2 === 0 ? '#050505' : '#0A0A0A',
        padding: '14px 20px',
        borderBottom: '1px solid #222222',
        alignItems: 'center',
      }}
    >
      {/* Status Icon */}
      <div>{statusConfig.icon}</div>

      {/* Document Name */}
      <div
        style={{
          color: isDisabled ? '#606060' : '#FFFFFF',
          fontSize: '12px',
          fontWeight: '500',
        }}
      >
        {document.name}
      </div>

      {/* Upload Date */}
      <div
        style={{
          color: '#808080',
          fontSize: '11px',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {document.uploadDate}
      </div>

      {/* Compliance Status */}
      <div
        className="inline-flex items-center px-3 py-1 rounded"
        style={{
          backgroundColor: `${statusConfig.color}15`,
          border: `1px solid ${statusConfig.color}`,
          width: 'fit-content',
        }}
      >
        <span
          style={{
            color: statusConfig.color,
            fontSize: '10px',
            fontWeight: '700',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          {statusConfig.label}
        </span>
      </div>

      {/* Star Rating */}
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((starNum) => (
          <Star
            key={starNum}
            style={{
              width: '14px',
              height: '14px',
              fill: !isDisabled && starNum <= document.stars ? '#FFB800' : 'transparent',
              stroke: !isDisabled && starNum <= document.stars ? '#FFB800' : '#404040',
              opacity: isDisabled ? 0.3 : 1,
            }}
          />
        ))}
      </div>

      {/* Chat Icon */}
      <div className="flex items-center justify-center">
        <button
          onClick={onChatClick}
          disabled={isDisabled}
          className="relative p-2 rounded transition-all"
          style={{
            backgroundColor: isActiveChatDoc ? '#1D99CC15' : 'transparent',
            border: isActiveChatDoc ? '1px solid #1D99CC' : '1px solid transparent',
            color: isDisabled ? '#404040' : '#606060',
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            opacity: isDisabled ? 0.3 : 1,
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
                backgroundColor: '#FF5252',
                border: '2px solid #121212',
              }}
            />
          )}
        </button>
      </div>
    </div>
  );
}

// ===== CHAT BUBBLE =====
function ChatBubble({ message }: { message: ChatMessage }) {
  const isAdmin = message.sender === 'admin';

  return (
    <div
      style={{
        alignSelf: isAdmin ? 'flex-end' : 'flex-start',
        maxWidth: '70%',
      }}
    >
      <div
        style={{
          padding: '12px 16px',
          backgroundColor: isAdmin ? '#1D99CC' : '#1E1E1E',
          borderRadius: '12px',
          borderBottomRightRadius: isAdmin ? '4px' : '12px',
          borderBottomLeftRadius: isAdmin ? '12px' : '4px',
        }}
      >
        <p
          style={{
            color: isAdmin ? '#FFFFFF' : '#E0E0E0',
            fontSize: '12px',
            lineHeight: '1.5',
            marginBottom: '6px',
          }}
        >
          {message.message}
        </p>
        <span
          style={{
            color: isAdmin ? 'rgba(255, 255, 255, 0.7)' : '#606060',
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
