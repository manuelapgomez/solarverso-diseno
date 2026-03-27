import { useState } from 'react';
import { AdminSidebar } from '../components/AdminSidebar';
import { ChevronLeft, FileText, CheckCircle2, Clock, XCircle, Download, Save } from 'lucide-react';
import { useNavigate } from 'react-router';

type CriteriaStatus = 'calificado' | 'pendiente' | 'no-aplica';
type Evaluator = 'ambiental' | 'proyectos' | 'sst' | 'legal';

interface Criteria {
  id: string;
  name: string;
  weight: number;
  evaluator: Evaluator;
  status: CriteriaStatus;
  score?: number;
  comments?: string;
  documentName?: string;
}

const EVALUATOR_INFO = {
  ambiental: { label: 'Equipo Ambiental', color: '#00C853' },
  proyectos: { label: 'Ing. Proyectos', color: '#1D99CC' },
  sst: { label: 'SST', color: '#FF9800' },
  legal: { label: 'Legal', color: '#9C27B0' },
};

const MOCK_CRITERIA: Criteria[] = [
  {
    id: 'CRIT-001',
    name: 'Propuesta de Diseño',
    weight: 25,
    evaluator: 'proyectos',
    status: 'calificado',
    score: 85,
    comments: 'Propuesta técnica sólida con enfoque innovador.',
    documentName: 'Propuesta_Tecnica.pdf',
  },
  {
    id: 'CRIT-002',
    name: 'Propuesta Económica',
    weight: 20,
    evaluator: 'proyectos',
    status: 'calificado',
    score: 92,
    comments: 'Presupuesto detallado y competitivo.',
    documentName: 'Propuesta_Economica.pdf',
  },
  {
    id: 'CRIT-003',
    name: 'Certificados SST',
    weight: 15,
    evaluator: 'sst',
    status: 'pendiente',
    documentName: 'Certificados_SST.pdf',
  },
  {
    id: 'CRIT-004',
    name: 'Cronograma de Obra',
    weight: 10,
    evaluator: 'proyectos',
    status: 'pendiente',
    documentName: 'Cronograma.pdf',
  },
  {
    id: 'CRIT-005',
    name: 'Plan de Calidad',
    weight: 10,
    evaluator: 'proyectos',
    status: 'pendiente',
    documentName: 'Plan_Calidad.pdf',
  },
  {
    id: 'CRIT-006',
    name: 'Licencias Ambientales',
    weight: 10,
    evaluator: 'ambiental',
    status: 'pendiente',
    documentName: 'Licencias_Ambientales.pdf',
  },
  {
    id: 'CRIT-007',
    name: 'Certificados Personal',
    weight: 5,
    evaluator: 'sst',
    status: 'pendiente',
    documentName: 'Cert_Personal.pdf',
  },
  {
    id: 'CRIT-008',
    name: 'Póliza RCE',
    weight: 5,
    evaluator: 'legal',
    status: 'no-aplica',
    comments: 'No requerido para este tipo de obra.',
  },
];

export default function AdminTenderEvaluation() {
  const navigate = useNavigate();
  const [criteriaList, setCriteriaList] = useState<Criteria[]>(MOCK_CRITERIA);
  const [selectedCriteria, setSelectedCriteria] = useState<Criteria>(MOCK_CRITERIA[2]); // Pendiente
  const [currentScore, setCurrentScore] = useState<number>(selectedCriteria.score || 0);
  const [currentComments, setCurrentComments] = useState<string>(selectedCriteria.comments || '');

  const handleSelectCriteria = (criteria: Criteria) => {
    setSelectedCriteria(criteria);
    setCurrentScore(criteria.score || 0);
    setCurrentComments(criteria.comments || '');
  };

  const handleSaveGrade = () => {
    setCriteriaList(
      criteriaList.map((c) =>
        c.id === selectedCriteria.id
          ? { ...c, status: 'calificado', score: currentScore, comments: currentComments }
          : c
      )
    );
    setSelectedCriteria({ ...selectedCriteria, status: 'calificado', score: currentScore, comments: currentComments });
  };

  const calculatePartialScore = () => {
    const totalWeight = criteriaList.reduce((sum, c) => sum + (c.status === 'calificado' ? c.weight : 0), 0);
    const weightedScore = criteriaList.reduce(
      (sum, c) => sum + (c.status === 'calificado' && c.score ? (c.score * c.weight) / 100 : 0),
      0
    );
    return Math.round(weightedScore);
  };

  const getTotalPossibleScore = () => {
    return criteriaList.reduce((sum, c) => sum + (c.status !== 'no-aplica' ? c.weight : 0), 0);
  };

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: '#050505',
      }}
    >
      <AdminSidebar />

      <div
        className="flex-1 flex flex-col"
        style={{
          marginLeft: '220px',
        }}
      >
        {/* HEADER */}
        <div
          className="px-8 py-4"
          style={{
            borderBottom: '0.5px solid #333333',
          }}
        >
          <button
            onClick={() => navigate('/admin/tenders')}
            className="flex items-center gap-2 mb-3 px-3 py-1.5 rounded transition-colors"
            style={{
              backgroundColor: 'transparent',
              border: '0.5px solid rgba(255, 255, 255, 0.05)',
              color: '#808080',
              fontSize: '11px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1A1A1A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <ChevronLeft style={{ width: '14px', height: '14px' }} />
            Volver a Evaluaciones
          </button>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1
                  style={{
                    color: '#E0E0E0',
                    fontSize: '18px',
                    fontWeight: '600',
                  }}
                >
                  Evaluando: Construcciones SAS
                </h1>
                <div
                  className="px-3 py-1 rounded"
                  style={{
                    backgroundColor: 'rgba(29, 153, 204, 0.15)',
                    color: '#1D99CC',
                    fontSize: '11px',
                    fontWeight: '600',
                  }}
                >
                  En Revisión
                </div>
              </div>
              <div
                style={{
                  color: '#808080',
                  fontSize: '12px',
                }}
              >
                Pliego: <span style={{ color: '#1D99CC', fontFamily: 'JetBrains Mono, monospace' }}>MGS-BOY-04</span> - MGS Boyacá IV
              </div>
            </div>

            {/* Current Score */}
            <div
              className="rounded px-5 py-3"
              style={{
                backgroundColor: '#0A0A0A',
                border: '1px solid #333333',
              }}
            >
              <div
                style={{
                  color: '#606060',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}
              >
                Puntaje Parcial
              </div>
              <div
                style={{
                  color: '#1D99CC',
                  fontSize: '28px',
                  fontWeight: '700',
                  fontFamily: 'JetBrains Mono, monospace',
                  lineHeight: '1',
                }}
              >
                {calculatePartialScore()}/{getTotalPossibleScore()}
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 flex overflow-hidden">
          {/* LEFT SIDEBAR: Criteria List */}
          <div
            className="flex flex-col"
            style={{
              width: '320px',
              borderRight: '0.5px solid #333333',
              backgroundColor: '#0A0A0A',
            }}
          >
            <div
              className="px-5 py-4"
              style={{
                borderBottom: '0.5px solid #333333',
              }}
            >
              <div
                style={{
                  color: '#D0D0D0',
                  fontSize: '13px',
                  fontWeight: '600',
                  marginBottom: '2px',
                }}
              >
                Criterios de Evaluación
              </div>
              <div
                style={{
                  color: '#606060',
                  fontSize: '11px',
                }}
              >
                {criteriaList.filter((c) => c.status === 'calificado').length}/{criteriaList.filter((c) => c.status !== 'no-aplica').length} completados
              </div>
            </div>

            <div className="flex-1 overflow-auto">
              {criteriaList.map((criteria) => (
                <CriteriaListItem
                  key={criteria.id}
                  criteria={criteria}
                  isSelected={selectedCriteria.id === criteria.id}
                  onClick={() => handleSelectCriteria(criteria)}
                />
              ))}
            </div>
          </div>

          {/* CENTER: Document Preview */}
          <div className="flex-1 flex flex-col">
            <div
              className="px-6 py-4"
              style={{
                borderBottom: '0.5px solid #333333',
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText style={{ width: '18px', height: '18px', color: '#1D99CC' }} />
                  <span
                    style={{
                      color: '#B0B0B0',
                      fontSize: '13px',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontWeight: '600',
                    }}
                  >
                    {selectedCriteria.documentName || 'No disponible'}
                  </span>
                </div>

                {selectedCriteria.documentName && (
                  <button
                    className="flex items-center gap-2 px-3 py-1.5 rounded transition-colors"
                    style={{
                      backgroundColor: 'transparent',
                      border: '0.5px solid #1D99CC',
                      color: '#1D99CC',
                      fontSize: '11px',
                      fontWeight: '600',
                    }}
                  >
                    <Download style={{ width: '12px', height: '12px' }} />
                    Descargar
                  </button>
                )}
              </div>
            </div>

            {/* PDF Preview Area */}
            <div
              className="flex-1 flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #0A0A0A 0%, #050505 100%)',
              }}
            >
              {selectedCriteria.documentName ? (
                <div className="text-center">
                  <div style={{ color: '#404040', fontSize: '64px', marginBottom: '16px' }}>📄</div>
                  <div style={{ color: '#606060', fontSize: '13px', marginBottom: '8px' }}>Vista previa del documento</div>
                  <div
                    style={{
                      color: '#808080',
                      fontSize: '11px',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {selectedCriteria.documentName}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div style={{ color: '#404040', fontSize: '64px', marginBottom: '16px' }}>⚠️</div>
                  <div style={{ color: '#606060', fontSize: '13px' }}>No hay documento asociado</div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT PANEL: Grading Tool */}
          <div
            className="flex flex-col"
            style={{
              width: '400px',
              borderLeft: '0.5px solid #333333',
              backgroundColor: '#0A0A0A',
            }}
          >
            {/* Header */}
            <div
              className="px-6 py-5"
              style={{
                borderBottom: '0.5px solid #333333',
              }}
            >
              <div
                style={{
                  color: '#D0D0D0',
                  fontSize: '15px',
                  fontWeight: '600',
                  marginBottom: '8px',
                }}
              >
                {selectedCriteria.name}
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div
                  className="px-2 py-1 rounded"
                  style={{
                    backgroundColor: 'rgba(29, 153, 204, 0.15)',
                    color: '#1D99CC',
                    fontSize: '10px',
                    fontWeight: '700',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  Peso: {selectedCriteria.weight}%
                </div>

                <div
                  className="px-2 py-1 rounded"
                  style={{
                    backgroundColor: `${EVALUATOR_INFO[selectedCriteria.evaluator].color}22`,
                    color: EVALUATOR_INFO[selectedCriteria.evaluator].color,
                    fontSize: '10px',
                    fontWeight: '600',
                  }}
                >
                  {EVALUATOR_INFO[selectedCriteria.evaluator].label}
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2">
                {selectedCriteria.status === 'calificado' && (
                  <>
                    <CheckCircle2 style={{ width: '14px', height: '14px', color: '#00C853' }} />
                    <span style={{ color: '#00C853', fontSize: '11px', fontWeight: '600' }}>Calificado</span>
                  </>
                )}
                {selectedCriteria.status === 'pendiente' && (
                  <>
                    <Clock style={{ width: '14px', height: '14px', color: '#FF9800' }} />
                    <span style={{ color: '#FF9800', fontSize: '11px', fontWeight: '600' }}>Pendiente</span>
                  </>
                )}
                {selectedCriteria.status === 'no-aplica' && (
                  <>
                    <XCircle style={{ width: '14px', height: '14px', color: '#606060' }} />
                    <span style={{ color: '#606060', fontSize: '11px', fontWeight: '600' }}>No Aplica</span>
                  </>
                )}
              </div>
            </div>

            {/* Grading Form */}
            {selectedCriteria.status !== 'no-aplica' && (
              <div className="flex-1 flex flex-col px-6 py-6">
                <div className="flex-1">
                  {/* Score Input */}
                  <div className="mb-6">
                    <label
                      style={{
                        color: '#B0B0B0',
                        fontSize: '12px',
                        fontWeight: '600',
                        display: 'block',
                        marginBottom: '12px',
                      }}
                    >
                      Calificación (0-100)
                    </label>

                    {/* Number Display */}
                    <div
                      className="rounded px-4 py-3 mb-4 text-center"
                      style={{
                        backgroundColor: '#121212',
                        border: '2px solid #1D99CC',
                      }}
                    >
                      <div
                        style={{
                          color: '#1D99CC',
                          fontSize: '48px',
                          fontWeight: '700',
                          fontFamily: 'JetBrains Mono, monospace',
                          lineHeight: '1',
                        }}
                      >
                        {currentScore}
                      </div>
                    </div>

                    {/* Slider */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={currentScore}
                      onChange={(e) => setCurrentScore(parseInt(e.target.value))}
                      style={{
                        width: '100%',
                        height: '6px',
                        borderRadius: '3px',
                        background: `linear-gradient(to right, #1D99CC 0%, #1D99CC ${currentScore}%, #333333 ${currentScore}%, #333333 100%)`,
                        outline: 'none',
                        appearance: 'none',
                        WebkitAppearance: 'none',
                      }}
                      className="slider"
                    />

                    {/* Quick Score Buttons */}
                    <div className="grid grid-cols-5 gap-2 mt-4">
                      {[0, 25, 50, 75, 100].map((value) => (
                        <button
                          key={value}
                          onClick={() => setCurrentScore(value)}
                          className="px-2 py-1.5 rounded transition-colors"
                          style={{
                            backgroundColor: currentScore === value ? '#1D99CC' : '#1A1A1A',
                            border: `1px solid ${currentScore === value ? '#1D99CC' : '#333333'}`,
                            color: currentScore === value ? '#FFFFFF' : '#808080',
                            fontSize: '11px',
                            fontWeight: '600',
                            fontFamily: 'JetBrains Mono, monospace',
                          }}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Comments */}
                  <div className="mb-6">
                    <label
                      style={{
                        color: '#B0B0B0',
                        fontSize: '12px',
                        fontWeight: '600',
                        display: 'block',
                        marginBottom: '8px',
                      }}
                    >
                      Observaciones para el Partner
                    </label>
                    <textarea
                      value={currentComments}
                      onChange={(e) => setCurrentComments(e.target.value)}
                      placeholder="Escribe comentarios o retroalimentación..."
                      rows={6}
                      className="w-full px-4 py-3 rounded resize-none transition-colors"
                      style={{
                        backgroundColor: '#1A1A1A',
                        border: '1px solid #333333',
                        color: '#E0E0E0',
                        fontSize: '12px',
                        outline: 'none',
                        lineHeight: '1.6',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#1D99CC')}
                      onBlur={(e) => (e.target.style.borderColor = '#333333')}
                    />
                  </div>
                </div>

                {/* Save Button */}
                <button
                  onClick={handleSaveGrade}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded transition-all"
                  style={{
                    backgroundColor: '#1D99CC',
                    border: 'none',
                    color: '#FFFFFF',
                    fontSize: '13px',
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
                  <Save style={{ width: '16px', height: '16px' }} />
                  Guardar Calificación
                </button>
              </div>
            )}

            {/* No Aplica Message */}
            {selectedCriteria.status === 'no-aplica' && (
              <div className="flex-1 flex items-center justify-center px-6">
                <div className="text-center">
                  <XCircle style={{ width: '48px', height: '48px', color: '#606060', margin: '0 auto 16px' }} />
                  <div style={{ color: '#808080', fontSize: '13px', marginBottom: '8px' }}>
                    Este criterio no aplica
                  </div>
                  {selectedCriteria.comments && (
                    <div
                      className="rounded px-4 py-3 mt-4"
                      style={{
                        backgroundColor: '#1A1A1A',
                        color: '#B0B0B0',
                        fontSize: '12px',
                        lineHeight: '1.6',
                      }}
                    >
                      {selectedCriteria.comments}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #1D99CC;
          cursor: pointer;
          border: 2px solid #FFFFFF;
          box-shadow: 0 2px 8px rgba(29, 153, 204, 0.4);
        }

        .slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #1D99CC;
          cursor: pointer;
          border: 2px solid #FFFFFF;
          box-shadow: 0 2px 8px rgba(29, 153, 204, 0.4);
        }
      `}</style>
    </div>
  );
}

// ===== CRITERIA LIST ITEM =====
interface CriteriaListItemProps {
  criteria: Criteria;
  isSelected: boolean;
  onClick: () => void;
}

function CriteriaListItem({ criteria, isSelected, onClick }: CriteriaListItemProps) {
  const getStatusIcon = () => {
    switch (criteria.status) {
      case 'calificado':
        return <CheckCircle2 style={{ width: '16px', height: '16px', color: '#00C853' }} />;
      case 'pendiente':
        return <Clock style={{ width: '16px', height: '16px', color: '#FF9800' }} />;
      case 'no-aplica':
        return <XCircle style={{ width: '16px', height: '16px', color: '#606060' }} />;
    }
  };

  const getStatusColor = () => {
    switch (criteria.status) {
      case 'calificado':
        return '#00C853';
      case 'pendiente':
        return '#FF9800';
      case 'no-aplica':
        return '#606060';
    }
  };

  return (
    <div
      className="px-5 py-4 cursor-pointer transition-all"
      style={{
        borderBottom: '0.5px solid #1A1A1A',
        backgroundColor: isSelected ? '#121212' : 'transparent',
        borderLeft: isSelected ? '3px solid #1D99CC' : '3px solid transparent',
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.backgroundColor = '#0F0F0F';
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      <div className="flex items-start gap-3 mb-3">
        {getStatusIcon()}
        <div className="flex-1">
          <div
            style={{
              color: isSelected ? '#E0E0E0' : '#B0B0B0',
              fontSize: '13px',
              fontWeight: '600',
              marginBottom: '4px',
              lineHeight: '1.3',
            }}
          >
            {criteria.name}
          </div>
          <div
            style={{
              color: '#606060',
              fontSize: '10px',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            Peso: {criteria.weight}%
          </div>
        </div>
      </div>

      {criteria.status === 'calificado' && criteria.score !== undefined && (
        <div
          className="rounded px-3 py-1.5"
          style={{
            backgroundColor: '#1A1A1A',
            border: `1px solid ${getStatusColor()}`,
          }}
        >
          <div className="flex items-center justify-between">
            <span style={{ color: '#808080', fontSize: '10px' }}>Calificación</span>
            <span
              style={{
                color: getStatusColor(),
                fontSize: '14px',
                fontWeight: '700',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {criteria.score}/100
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
