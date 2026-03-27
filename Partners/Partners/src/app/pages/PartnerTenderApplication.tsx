import { useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router';
import { UnifiedPartnerSidebar } from '../components/UnifiedPartnerSidebar';
import { useTheme } from '../contexts/ThemeContext';
import {
  ArrowLeft,
  Upload,
  CheckCircle2,
  XCircle,
  AlertCircle,
  FileText,
  Loader2,
  X,
  ChevronRight,
} from 'lucide-react';

// ===== TYPES =====
interface DocumentRequirement {
  id: string;
  title: string;
  weight: number;
  isCritical: boolean;
  acceptedFormats: string[];
  maxSizeMB: number;
  category: 'technical' | 'financial' | 'legal' | 'sst';
}

interface UploadedFile {
  requirementId: string;
  file: File;
  status: 'uploading' | 'success' | 'error';
  progress: number;
  errorMessage?: string;
}

// ===== MOCK DATA =====
const DOCUMENT_REQUIREMENTS: DocumentRequirement[] = [
  {
    id: 'DOC-001',
    title: 'Propuesta Económica (Formato A)',
    weight: 20,
    isCritical: true,
    acceptedFormats: ['PDF'],
    maxSizeMB: 25,
    category: 'financial',
  },
  {
    id: 'DOC-002',
    title: 'Cronograma de Ejecución',
    weight: 15,
    isCritical: true,
    acceptedFormats: ['PDF', 'DOCX', 'XLSX'],
    maxSizeMB: 10,
    category: 'technical',
  },
  {
    id: 'DOC-003',
    title: 'Hoja de Vida Director de Obra',
    weight: 10,
    isCritical: false,
    acceptedFormats: ['PDF'],
    maxSizeMB: 5,
    category: 'technical',
  },
  {
    id: 'DOC-004',
    title: 'Hoja de Vida Residente SST',
    weight: 10,
    isCritical: false,
    acceptedFormats: ['PDF'],
    maxSizeMB: 5,
    category: 'sst',
  },
  {
    id: 'DOC-005',
    title: 'Matriz de Riesgos del Proyecto',
    weight: 8,
    isCritical: false,
    acceptedFormats: ['PDF', 'DOCX', 'XLSX'],
    maxSizeMB: 10,
    category: 'sst',
  },
  {
    id: 'DOC-006',
    title: 'Certificado de Experiencia 1',
    weight: 7,
    isCritical: false,
    acceptedFormats: ['PDF'],
    maxSizeMB: 5,
    category: 'legal',
  },
  {
    id: 'DOC-007',
    title: 'Certificado de Experiencia 2',
    weight: 7,
    isCritical: false,
    acceptedFormats: ['PDF'],
    maxSizeMB: 5,
    category: 'legal',
  },
  {
    id: 'DOC-008',
    title: 'Póliza de Cumplimiento',
    weight: 6,
    isCritical: false,
    acceptedFormats: ['PDF'],
    maxSizeMB: 5,
    category: 'legal',
  },
  {
    id: 'DOC-009',
    title: 'RUT de la Empresa',
    weight: 5,
    isCritical: false,
    acceptedFormats: ['PDF'],
    maxSizeMB: 2,
    category: 'legal',
  },
  {
    id: 'DOC-010',
    title: 'Cámara de Comercio (< 30 días)',
    weight: 5,
    isCritical: false,
    acceptedFormats: ['PDF'],
    maxSizeMB: 5,
    category: 'legal',
  },
  {
    id: 'DOC-011',
    title: 'Estados Financieros',
    weight: 4,
    isCritical: false,
    acceptedFormats: ['PDF', 'XLSX'],
    maxSizeMB: 10,
    category: 'financial',
  },
  {
    id: 'DOC-012',
    title: 'Certificado de Antecedentes',
    weight: 1,
    isCritical: false,
    acceptedFormats: ['PDF'],
    maxSizeMB: 2,
    category: 'legal',
  },
  {
    id: 'DOC-013',
    title: 'Plan de Trabajo SST',
    weight: 1,
    isCritical: false,
    acceptedFormats: ['PDF', 'DOCX'],
    maxSizeMB: 10,
    category: 'sst',
  },
  {
    id: 'DOC-014',
    title: 'Licencias de Personal Clave',
    weight: 1,
    isCritical: false,
    acceptedFormats: ['PDF'],
    maxSizeMB: 5,
    category: 'technical',
  },
];

const TENDER_MOCK = {
  id: 'TND-001',
  mgsId: 'MGS-BOY-04',
  title: 'Obra Civil MGS Boyacá IV',
  location: 'Paipa, Boyacá',
  closingDate: '2026-03-15',
};

// ===== MAIN COMPONENT =====
export function PartnerTenderApplication() {
  const { tenderId } = useParams<{ tenderId: string }>();
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, UploadedFile>>({});
  const [dragOverId, setDragOverId] = useState<string | null>(null);
  const { theme } = useTheme();

  const handleFileSelect = useCallback(
    (requirementId: string, file: File, requirement: DocumentRequirement) => {
      // Validate file size
      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > requirement.maxSizeMB) {
        setUploadedFiles((prev) => ({
          ...prev,
          [requirementId]: {
            requirementId,
            file,
            status: 'error',
            progress: 0,
            errorMessage: `Archivo excede ${requirement.maxSizeMB}MB`,
          },
        }));
        return;
      }

      // Validate file format
      const fileExtension = file.name.split('.').pop()?.toUpperCase() || '';
      if (!requirement.acceptedFormats.includes(fileExtension)) {
        setUploadedFiles((prev) => ({
          ...prev,
          [requirementId]: {
            requirementId,
            file,
            status: 'error',
            progress: 0,
            errorMessage: `Formato no válido. Solo ${requirement.acceptedFormats.join(', ')}`,
          },
        }));
        return;
      }

      // Start upload simulation
      setUploadedFiles((prev) => ({
        ...prev,
        [requirementId]: {
          requirementId,
          file,
          status: 'uploading',
          progress: 0,
        },
      }));

      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (progress >= 100) {
          clearInterval(interval);
          setUploadedFiles((prev) => ({
            ...prev,
            [requirementId]: {
              ...prev[requirementId],
              status: 'success',
              progress: 100,
            },
          }));
        } else {
          setUploadedFiles((prev) => ({
            ...prev,
            [requirementId]: {
              ...prev[requirementId],
              progress,
            },
          }));
        }
      }, 200);
    },
    []
  );

  const handleDrop = useCallback(
    (e: React.DragEvent, requirementId: string, requirement: DocumentRequirement) => {
      e.preventDefault();
      setDragOverId(null);

      const file = e.dataTransfer.files[0];
      if (file) {
        handleFileSelect(requirementId, file, requirement);
      }
    },
    [handleFileSelect]
  );

  const handleDragOver = useCallback((e: React.DragEvent, requirementId: string) => {
    e.preventDefault();
    setDragOverId(requirementId);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragOverId(null);
  }, []);

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, requirementId: string, requirement: DocumentRequirement) => {
      const file = e.target.files?.[0];
      if (file) {
        handleFileSelect(requirementId, file, requirement);
      }
    },
    [handleFileSelect]
  );

  const handleRemoveFile = useCallback((requirementId: string) => {
    setUploadedFiles((prev) => {
      const newFiles = { ...prev };
      delete newFiles[requirementId];
      return newFiles;
    });
  }, []);

  const uploadedCount = Object.keys(uploadedFiles).filter(
    (key) => uploadedFiles[key].status === 'success'
  ).length;
  const totalCount = DOCUMENT_REQUIREMENTS.length;
  const progressPercentage = Math.round((uploadedCount / totalCount) * 100);
  const isComplete = uploadedCount === totalCount;

  const handleSubmitApplication = () => {
    if (!isComplete) return;
    alert('Postulación enviada exitosamente');
    navigate('/partner/oportunidades');
  };

  return (
    <div className="flex h-screen" style={{ backgroundColor: '#050505' }}>
      <UnifiedPartnerSidebar currentView="opportunities" />

      <div className="flex-1 flex overflow-hidden" style={{ marginLeft: '240px' }}>
        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div
            className="px-6 py-5"
            style={{
              backgroundColor: '#050505',
              borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => navigate('/partner/oportunidades')}
                style={{
                  color: '#606060',
                  fontSize: '11px',
                  fontWeight: '600',
                }}
              >
                Explorador
              </button>
              <ChevronRight style={{ width: '12px', height: '12px', color: '#404040' }} />
              <button
                onClick={() => navigate(`/partner/tender/${tenderId}`)}
                style={{
                  color: '#606060',
                  fontSize: '11px',
                  fontWeight: '600',
                }}
              >
                {TENDER_MOCK.mgsId}
              </button>
              <ChevronRight style={{ width: '12px', height: '12px', color: '#404040' }} />
              <span
                style={{
                  color: '#1D99CC',
                  fontSize: '11px',
                  fontWeight: '600',
                }}
              >
                Postular
              </span>
            </div>

            <h1
              style={{
                color: '#FFFFFF',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '6px',
              }}
            >
              Postulación a {TENDER_MOCK.title}
            </h1>
            <div
              style={{
                color: '#1D99CC',
                fontSize: '11px',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: '400',
                marginBottom: '12px',
              }}
            >
              {TENDER_MOCK.mgsId}
            </div>

            {/* Progress Badge */}
            <div className="flex items-center gap-3">
              <div
                className="px-3 py-1.5 rounded"
                style={{
                  backgroundColor: '#1A1A1A',
                  border: '0.5px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <span
                  style={{
                    color: '#2E7D32',
                    fontSize: '11px',
                    fontWeight: '600',
                  }}
                >
                  Paso 2 de 3: Carga de Evidencias
                </span>
              </div>
              <span
                style={{
                  color: '#606060',
                  fontSize: '11px',
                }}
              >
                {uploadedCount} de {totalCount} documentos cargados
              </span>
            </div>
          </div>

          {/* Upload Grid */}
          <div className="flex-1 overflow-auto px-6 py-6">
            <div className="grid grid-cols-2 gap-4">
              {DOCUMENT_REQUIREMENTS.map((requirement) => {
                const uploadedFile = uploadedFiles[requirement.id];
                return (
                  <UploadCard
                    key={requirement.id}
                    requirement={requirement}
                    uploadedFile={uploadedFile}
                    isDragOver={dragOverId === requirement.id}
                    onDrop={(e) => handleDrop(e, requirement.id, requirement)}
                    onDragOver={(e) => handleDragOver(e, requirement.id)}
                    onDragLeave={handleDragLeave}
                    onFileInputChange={(e) => handleFileInputChange(e, requirement.id, requirement)}
                    onRemoveFile={() => handleRemoveFile(requirement.id)}
                  />
                );
              })}
            </div>
          </div>

          {/* Bottom Status Bar */}
          <div
            className="px-6 py-4 flex items-center justify-between"
            style={{
              backgroundColor: '#0A0A0A',
              borderTop: '0.5px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div
              style={{
                color: '#606060',
                fontSize: '11px',
              }}
            >
              Faltan {totalCount - uploadedCount} documentos por cargar
            </div>
            <button
              onClick={handleSubmitApplication}
              disabled={!isComplete}
              className="px-8 py-3 rounded flex items-center justify-center gap-2 transition-all"
              style={{
                backgroundColor: isComplete ? '#1D99CC' : '#1A1A1A',
                border: `0.5px solid ${isComplete ? '#1D99CC' : 'rgba(255, 255, 255, 0.08)'}`,
                color: isComplete ? '#FFFFFF' : '#404040',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                cursor: isComplete ? 'pointer' : 'not-allowed',
              }}
            >
              Enviar Postulación Definitiva
            </button>
          </div>
        </div>

        {/* RIGHT SIDEBAR - CHECKLIST */}
        <div
          className="flex flex-col overflow-auto"
          style={{
            width: '300px',
            backgroundColor: '#0A0A0A',
            borderLeft: '0.5px solid rgba(255, 255, 255, 0.05)',
            flexShrink: 0,
          }}
        >
          {/* Progress Circle */}
          <div
            className="px-6 py-8 flex flex-col items-center"
            style={{
              borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div className="relative mb-4" style={{ width: '120px', height: '120px' }}>
              {/* Background Circle */}
              <svg className="absolute inset-0" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.05)"
                  strokeWidth="6"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#1D99CC"
                  strokeWidth="6"
                  strokeDasharray={`${(progressPercentage / 100) * 339.292} 339.292`}
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                  style={{ transition: 'stroke-dasharray 0.3s ease' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  style={{
                    color: '#1D99CC',
                    fontSize: '32px',
                    fontWeight: '700',
                    fontFamily: 'JetBrains Mono, monospace',
                    lineHeight: '1',
                  }}
                >
                  {progressPercentage}%
                </div>
                <div
                  style={{
                    color: '#606060',
                    fontSize: '10px',
                    marginTop: '4px',
                  }}
                >
                  Completado
                </div>
              </div>
            </div>

            <div
              style={{
                color: '#B0B0B0',
                fontSize: '11px',
                textAlign: 'center',
              }}
            >
              {uploadedCount}/{totalCount} documentos
            </div>
          </div>

          {/* Document Checklist */}
          <div className="flex-1 overflow-auto px-6 py-4">
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
              Checklist de Documentos
            </div>

            <div className="space-y-2">
              {DOCUMENT_REQUIREMENTS.map((requirement) => {
                const uploaded = uploadedFiles[requirement.id];
                const isSuccess = uploaded?.status === 'success';
                const isError = uploaded?.status === 'error';

                return (
                  <div
                    key={requirement.id}
                    className="flex items-start gap-2 p-2 rounded transition-all"
                    style={{
                      backgroundColor: isSuccess
                        ? 'rgba(29, 153, 204, 0.08)'
                        : 'rgba(255, 255, 255, 0.02)',
                    }}
                  >
                    <div style={{ marginTop: '2px' }}>
                      {isSuccess ? (
                        <CheckCircle2 style={{ width: '14px', height: '14px', color: '#1D99CC' }} />
                      ) : isError ? (
                        <XCircle style={{ width: '14px', height: '14px', color: '#FF5252' }} />
                      ) : (
                        <div
                          style={{
                            width: '14px',
                            height: '14px',
                            borderRadius: '50%',
                            border: '1.5px solid #404040',
                          }}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <div
                        style={{
                          color: isSuccess ? '#1D99CC' : '#B0B0B0',
                          fontSize: '10px',
                          fontWeight: '500',
                          lineHeight: '1.4',
                        }}
                      >
                        {requirement.title}
                      </div>
                      {requirement.isCritical && (
                        <div
                          className="inline-block px-1.5 py-0.5 rounded mt-1"
                          style={{
                            backgroundColor: 'rgba(255, 82, 82, 0.15)',
                            color: '#FF5252',
                            fontSize: '8px',
                            fontWeight: '700',
                            letterSpacing: '0.3px',
                            textTransform: 'uppercase',
                          }}
                        >
                          Crítico
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Validation Message */}
          <div
            className="px-6 py-6"
            style={{
              borderTop: '0.5px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div
              className="p-4 rounded"
              style={{
                backgroundColor: 'rgba(29, 153, 204, 0.08)',
                border: '0.5px solid rgba(29, 153, 204, 0.2)',
              }}
            >
              <div
                style={{
                  color: '#B0B0B0',
                  fontSize: '10px',
                  lineHeight: '1.5',
                }}
              >
                Tu postulación será enviada al equipo de{' '}
                <span style={{ color: '#1D99CC', fontWeight: '600' }}>
                  Ingeniería de Proyectos
                </span>{' '}
                y <span style={{ color: '#1D99CC', fontWeight: '600' }}>SST</span>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== UPLOAD CARD =====
interface UploadCardProps {
  requirement: DocumentRequirement;
  uploadedFile?: UploadedFile;
  isDragOver: boolean;
  onDrop: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: () => void;
  onFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: () => void;
}

function UploadCard({
  requirement,
  uploadedFile,
  isDragOver,
  onDrop,
  onDragOver,
  onDragLeave,
  onFileInputChange,
  onRemoveFile,
}: UploadCardProps) {
  const isUploading = uploadedFile?.status === 'uploading';
  const isSuccess = uploadedFile?.status === 'success';
  const isError = uploadedFile?.status === 'error';

  return (
    <div
      className="p-4 rounded transition-all"
      style={{
        backgroundColor: '#121212',
        border: isDragOver
          ? '1px dashed #1D99CC'
          : isSuccess
          ? '0.5px solid rgba(0, 200, 83, 0.3)'
          : isError
          ? '0.5px solid rgba(255, 82, 82, 0.3)'
          : '0.5px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div
            style={{
              color: '#B0B0B0',
              fontSize: '11px',
              fontWeight: '500',
              marginBottom: '4px',
            }}
          >
            {requirement.title}
          </div>
          <div className="flex items-center gap-2">
            {requirement.isCritical && (
              <div
                className="px-1.5 py-0.5 rounded"
                style={{
                  backgroundColor: 'rgba(255, 82, 82, 0.15)',
                  color: '#FF5252',
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                Crítico
              </div>
            )}
            <div
              style={{
                color: '#606060',
                fontSize: '9px',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              Peso: {requirement.weight}%
            </div>
          </div>
        </div>

        {isSuccess && (
          <button
            onClick={onRemoveFile}
            className="p-1 rounded transition-all"
            style={{
              color: '#808080',
              backgroundColor: 'transparent',
            }}
          >
            <X style={{ width: '14px', height: '14px' }} />
          </button>
        )}
      </div>

      {/* Upload Area */}
      <div
        className="relative"
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
      >
        {isSuccess ? (
          // Success State
          <div
            className="p-4 rounded flex items-center gap-3"
            style={{
              backgroundColor: 'rgba(0, 200, 83, 0.08)',
              border: '1px dashed rgba(0, 200, 83, 0.3)',
            }}
          >
            <CheckCircle2 style={{ width: '18px', height: '18px', color: '#00C853' }} />
            <div className="flex-1">
              <div
                style={{
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: '500',
                  marginBottom: '2px',
                }}
              >
                {uploadedFile.file.name}
              </div>
              <div
                style={{
                  color: '#606060',
                  fontSize: '9px',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {(uploadedFile.file.size / (1024 * 1024)).toFixed(2)} MB
              </div>
            </div>
          </div>
        ) : isUploading ? (
          // Uploading State
          <div
            className="p-4 rounded"
            style={{
              backgroundColor: 'rgba(29, 153, 204, 0.08)',
              border: '1px dashed rgba(29, 153, 204, 0.3)',
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Loader2
                className="animate-spin"
                style={{ width: '16px', height: '16px', color: '#1D99CC' }}
              />
              <div
                style={{
                  color: '#1D99CC',
                  fontSize: '11px',
                  fontWeight: '500',
                }}
              >
                Escaneando... {uploadedFile.progress}%
              </div>
            </div>
            <div
              className="relative rounded-full overflow-hidden"
              style={{
                height: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${uploadedFile.progress}%`,
                  backgroundColor: '#1D99CC',
                  transition: 'width 0.2s ease',
                }}
              />
            </div>
          </div>
        ) : isError ? (
          // Error State
          <div
            className="p-4 rounded"
            style={{
              backgroundColor: 'rgba(255, 82, 82, 0.08)',
              border: '1px dashed rgba(255, 82, 82, 0.3)',
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <XCircle style={{ width: '16px', height: '16px', color: '#FF5252' }} />
              <div
                style={{
                  color: '#FF5252',
                  fontSize: '11px',
                  fontWeight: '500',
                }}
              >
                {uploadedFile.errorMessage}
              </div>
            </div>
            <button
              onClick={() => onRemoveFile()}
              style={{
                color: '#FF5252',
                fontSize: '10px',
                fontWeight: '600',
                textDecoration: 'underline',
              }}
            >
              Reintentar
            </button>
          </div>
        ) : (
          // Empty State
          <label
            className="block p-6 rounded cursor-pointer transition-all"
            style={{
              backgroundColor: isDragOver ? 'rgba(29, 153, 204, 0.08)' : 'transparent',
              border: '1px dashed rgba(255, 255, 255, 0.15)',
            }}
          >
            <input
              type="file"
              className="hidden"
              accept={requirement.acceptedFormats.map((f) => `.${f.toLowerCase()}`).join(',')}
              onChange={onFileInputChange}
            />
            <div className="flex flex-col items-center text-center">
              <Upload
                style={{
                  width: '24px',
                  height: '24px',
                  color: '#606060',
                  marginBottom: '8px',
                }}
              />
              <div
                style={{
                  color: '#808080',
                  fontSize: '10px',
                  marginBottom: '4px',
                }}
              >
                Arrastrar archivo o hacer clic
              </div>
              <div
                style={{
                  color: '#606060',
                  fontSize: '9px',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {requirement.acceptedFormats.join(', ')} • Max {requirement.maxSizeMB}MB
              </div>
            </div>
          </label>
        )}
      </div>
    </div>
  );
}