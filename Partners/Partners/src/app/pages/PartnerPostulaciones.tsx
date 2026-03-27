import { PartnerSidebar } from '../components/PartnerSidebar';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

interface Application {
  id: string;
  mgsId: string;
  projectName: string;
  stage: 'postulado' | 'revision' | 'evaluacion' | 'fallo';
  score?: number;
  lastComment: string;
  isActive: boolean;
}

const MOCK_APPLICATIONS: Application[] = [
  {
    id: 'APP-001',
    mgsId: 'MGS-HUI-02',
    projectName: 'Obra Civil y Estructuras Huila II',
    stage: 'postulado',
    score: 85,
    lastComment: 'Falta certificado de experiencia.',
    isActive: true,
  },
  {
    id: 'APP-002',
    mgsId: 'MGS-CAL-01',
    projectName: 'Instalación Paneles Caldas I',
    stage: 'fallo',
    score: 90,
    lastComment: 'Aprobado.',
    isActive: true,
  },
  {
    id: 'APP-003',
    mgsId: 'MGS-MET-03',
    projectName: 'Montaje Eléctrico Meta III',
    stage: 'revision',
    lastComment: '',
    isActive: false,
  },
  {
    id: 'APP-004',
    mgsId: 'MGS-CUN-03',
    projectName: 'Sistema Estructural Cundinamarca III',
    stage: 'evaluacion',
    score: 75,
    lastComment: 'Rechazado.',
    isActive: true,
  },
];

export default function PartnerPostulaciones() {
  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: '#080808',
      }}
    >
      <PartnerSidebar />

      <div
        className="flex-1 flex flex-col"
        style={{
          marginLeft: '220px',
        }}
      >
        {/* Header */}
        <div className="p-6 pb-4">
          <h1
            style={{
              color: '#FFFFFF',
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '4px',
            }}
          >
            Mis Postulaciones
          </h1>
          <div
            style={{
              color: '#808080',
              fontSize: '12px',
            }}
          >
            {MOCK_APPLICATIONS.length} postulaciones activas
          </div>
        </div>

        {/* Applications List */}
        <div className="flex-1 px-6 pb-6 space-y-4">
          {MOCK_APPLICATIONS.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== APPLICATION CARD =====
interface ApplicationCardProps {
  application: Application;
}

function ApplicationCard({ application }: ApplicationCardProps) {
  const stages = [
    { id: 'postulado', label: 'POSTULADO' },
    { id: 'revision', label: 'REVISIÓN\nDOCUMENTAL' },
    { id: 'evaluacion', label: 'EVALUACIÓN\nTÉCNICA' },
    { id: 'fallo', label: 'FALLO FINAL' },
  ];

  const currentStageIndex = stages.findIndex((s) => s.id === application.stage);

  return (
    <div
      className="rounded"
      style={{
        backgroundColor: '#0F0F0F',
        border: '1px solid #1E1E1E',
        padding: '24px',
      }}
    >
      <div className="grid grid-cols-[auto_1fr_auto] gap-8 items-start">
        {/* LEFT: Project Info */}
        <div style={{ minWidth: '260px', maxWidth: '260px' }}>
          <div
            style={{
              color: '#1D99CC',
              fontSize: '13px',
              fontWeight: '700',
              fontFamily: 'JetBrains Mono, monospace',
              marginBottom: '8px',
            }}
          >
            {application.mgsId}
          </div>
          <div
            style={{
              color: '#FFFFFF',
              fontSize: '15px',
              fontWeight: '600',
              lineHeight: '1.4',
            }}
          >
            {application.projectName}
          </div>
        </div>

        {/* CENTER: Pipeline Stages */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            paddingTop: '8px',
          }}
        >
          <div className="flex items-start justify-between relative" style={{ gap: '8px' }}>
            {stages.map((stage, index) => {
              const isCompleted = index < currentStageIndex;
              const isActive = index === currentStageIndex;
              const isFuture = index > currentStageIndex;

              return (
                <div
                  key={stage.id}
                  className="flex flex-col items-center"
                  style={{
                    flex: 1,
                    minWidth: 0,
                    position: 'relative',
                    zIndex: 10,
                  }}
                >
                  {/* Stage Indicator Circle */}
                  <div
                    className="flex items-center justify-center rounded-full mb-2 transition-all"
                    style={{
                      width: isActive ? '42px' : '36px',
                      height: isActive ? '42px' : '36px',
                      backgroundColor: isCompleted || isActive ? '#1D99CC' : 'transparent',
                      border: `2px solid ${isCompleted || isActive ? '#1D99CC' : '#333333'}`,
                      position: 'relative',
                    }}
                  >
                    {isCompleted ? (
                      <CheckCircle2
                        style={{
                          width: '18px',
                          height: '18px',
                          color: '#FFFFFF',
                        }}
                      />
                    ) : isActive ? (
                      <Clock
                        style={{
                          width: '18px',
                          height: '18px',
                          color: '#FFFFFF',
                        }}
                      />
                    ) : (
                      <Circle
                        style={{
                          width: '16px',
                          height: '16px',
                          color: '#333333',
                        }}
                      />
                    )}
                  </div>

                  {/* Stage Label */}
                  <div
                    style={{
                      color: isCompleted || isActive ? '#FFFFFF' : '#505050',
                      fontSize: '10px',
                      fontWeight: '700',
                      textAlign: 'center',
                      lineHeight: '1.3',
                      textTransform: 'uppercase',
                      whiteSpace: 'pre-line',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {stage.label}
                  </div>

                  {/* Connector Line */}
                  {index < stages.length - 1 && (
                    <div
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: isActive ? '21px' : '18px',
                        width: '100%',
                        height: '2px',
                        backgroundColor: isCompleted ? '#1D99CC' : '#1E1E1E',
                        zIndex: -1,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Score & Action */}
        <div
          style={{
            minWidth: '220px',
            maxWidth: '220px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {/* Score Display */}
          {application.score !== undefined && (
            <div>
              <div
                style={{
                  color: '#808080',
                  fontSize: '9px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '6px',
                }}
              >
                TU SCORE
              </div>
              <div
                style={{
                  color: '#1D99CC',
                  fontSize: '24px',
                  fontWeight: '700',
                  fontFamily: 'JetBrains Mono, monospace',
                  lineHeight: '1',
                }}
              >
                {application.score}
                <span
                  style={{
                    color: '#505050',
                    fontSize: '16px',
                  }}
                >
                  /100
                </span>
              </div>
            </div>
          )}

          {/* Last Comment */}
          {application.lastComment && (
            <div>
              <div
                style={{
                  color: '#808080',
                  fontSize: '9px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '6px',
                }}
              >
                ÚLTIMO COMENTARIO
              </div>
              <div
                style={{
                  color: '#B0B0B0',
                  fontSize: '12px',
                  lineHeight: '1.4',
                }}
              >
                {application.lastComment}
              </div>
            </div>
          )}

          {/* Action Button */}
          <button
            className="px-4 py-2.5 rounded transition-all"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #333333',
              color: '#B0B0B0',
              fontSize: '11px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              cursor: 'pointer',
              marginTop: 'auto',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1D99CC15';
              e.currentTarget.style.borderColor = '#1D99CC';
              e.currentTarget.style.color = '#1D99CC';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#333333';
              e.currentTarget.style.color = '#B0B0B0';
            }}
          >
            Ver Detalles de Mi Propuesta
          </button>
        </div>
      </div>
    </div>
  );
}
