import { useState } from 'react';
import { X, Upload, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface Document {
  id: string;
  label: string;
  isCritical: boolean;
  status: 'empty' | 'uploading' | 'uploaded' | 'error';
  fileName?: string;
  progress?: number;
  errorMessage?: string;
}

const REQUIRED_DOCUMENTS: Document[] = [
  {
    id: 'doc-01',
    label: 'Propuesta Económica (Formato A)',
    isCritical: true,
    status: 'uploaded',
    fileName: 'Propuesta_Economica_MGS-BOY-04.pdf',
  },
  {
    id: 'doc-02',
    label: 'Cronograma de Ejecución',
    isCritical: true,
    status: 'uploading',
    fileName: 'Cronograma_Obra_Civil.xlsx',
    progress: 67,
  },
  {
    id: 'doc-03',
    label: 'Hoja de Vida Director de Obra',
    isCritical: false,
    status: 'uploaded',
    fileName: 'HV_Director_Obra.pdf',
  },
  {
    id: 'doc-04',
    label: 'Hoja de Vida Residente SST',
    isCritical: false,
    status: 'error',
    errorMessage: 'Formato no válido. Solo PDF o DOCX',
  },
  {
    id: 'doc-05',
    label: 'Matriz de Riesgos del Proyecto',
    isCritical: false,
    status: 'empty',
  },
  {
    id: 'doc-06',
    label: 'Certificado de Experiencia 1',
    isCritical: false,
    status: 'empty',
  },
  {
    id: 'doc-07',
    label: 'Certificado de Experiencia 2',
    isCritical: false,
    status: 'empty',
  },
  {
    id: 'doc-08',
    label: 'Póliza de Cumplimiento',
    isCritical: false,
    status: 'empty',
  },
  {
    id: 'doc-09',
    label: 'RUT de la Empresa',
    isCritical: false,
    status: 'empty',
  },
  {
    id: 'doc-10',
    label: 'Cámara de Comercio (< 30 días)',
    isCritical: false,
    status: 'empty',
  },
  {
    id: 'doc-11',
    label: 'Estados Financieros 2024-2025',
    isCritical: false,
    status: 'empty',
  },
  {
    id: 'doc-12',
    label: 'Plan de Calidad del Proyecto',
    isCritical: false,
    status: 'empty',
  },
  {
    id: 'doc-13',
    label: 'Plan de Gestión Ambiental',
    isCritical: false,
    status: 'empty',
  },
  {
    id: 'doc-14',
    label: 'Declaración Juramentada de Cumplimiento',
    isCritical: false,
    status: 'empty',
  },
];

interface TenderApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  opportunity: {
    title: string;
    mgsId: string;
  } | null;
}

export function TenderApplicationModal({
  isOpen,
  onClose,
  opportunity,
}: TenderApplicationModalProps) {
  const [documents, setDocuments] = useState<Document[]>(REQUIRED_DOCUMENTS);

  if (!isOpen || !opportunity) return null;

  const uploadedCount = documents.filter((d) => d.status === 'uploaded').length;
  const totalCount = documents.length;
  const allUploaded = uploadedCount === totalCount;

  const handleFileSelect = (docId: string, file: File) => {
    // Mock file upload logic
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === docId
          ? { ...doc, status: 'uploading', fileName: file.name, progress: 0 }
          : doc
      )
    );

    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress >= 100) {
        clearInterval(interval);
        setDocuments((prev) =>
          prev.map((doc) =>
            doc.id === docId ? { ...doc, status: 'uploaded', progress: 100 } : doc
          )
        );
      } else {
        setDocuments((prev) =>
          prev.map((doc) => (doc.id === docId ? { ...doc, progress } : doc))
        );
      }
    }, 200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
      }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col max-h-[90vh] rounded"
        style={{
          width: '1100px',
          backgroundColor: '#0D0D0D',
          border: '0.5px solid rgba(255, 255, 255, 0.08)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="px-6 py-5 shrink-0"
          style={{
            borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h2
                style={{
                  color: '#FFFFFF',
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '6px',
                }}
              >
                Postulación a {opportunity.title}
              </h2>
              <div
                style={{
                  color: '#1D99CC',
                  fontSize: '11px',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {opportunity.mgsId}
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded transition-colors"
              style={{
                backgroundColor: 'transparent',
                border: '0.5px solid rgba(255, 255, 255, 0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1A1A1A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <X style={{ width: '16px', height: '16px', color: '#808080' }} />
            </button>
          </div>

          {/* Progress Tracker */}
          <div className="flex items-center gap-3">
            <div
              className="px-3 py-1.5 rounded"
              style={{
                backgroundColor: '#1A1A1A',
                border: '0.5px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div
                style={{
                  color: '#2E7D32',
                  fontSize: '11px',
                  fontWeight: '600',
                }}
              >
                Paso 2 de 3: Carga de Evidencias
              </div>
            </div>

            <div
              style={{
                color: '#606060',
                fontSize: '11px',
              }}
            >
              {uploadedCount} de {totalCount} documentos cargados
            </div>
          </div>
        </div>

        {/* Upload Grid - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-2 gap-4">
            {documents.map((doc) => (
              <UploadZone
                key={doc.id}
                document={doc}
                onFileSelect={(file) => handleFileSelect(doc.id, file)}
              />
            ))}
          </div>
        </div>

        {/* Bottom Bar - Sticky */}
        <div
          className="px-6 py-4 shrink-0"
          style={{
            borderTop: '0.5px solid rgba(255, 255, 255, 0.05)',
            backgroundColor: '#0D0D0D',
          }}
        >
          <div className="flex items-center justify-between">
            <div
              style={{
                color: '#808080',
                fontSize: '11px',
              }}
            >
              {allUploaded
                ? '✓ Todos los documentos están listos'
                : `Faltan ${totalCount - uploadedCount} documentos por cargar`}
            </div>

            <button
              disabled={!allUploaded}
              className="px-6 rounded transition-colors"
              style={{
                height: '36px',
                backgroundColor: allUploaded ? '#2E7D32' : '#252525',
                border: 'none',
                color: allUploaded ? '#FFFFFF' : '#606060',
                fontSize: '12px',
                fontWeight: '600',
                cursor: allUploaded ? 'pointer' : 'not-allowed',
              }}
              onMouseEnter={(e) => {
                if (allUploaded) {
                  e.currentTarget.style.backgroundColor = '#267028';
                }
              }}
              onMouseLeave={(e) => {
                if (allUploaded) {
                  e.currentTarget.style.backgroundColor = '#2E7D32';
                }
              }}
            >
              Enviar Postulación Definitiva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface UploadZoneProps {
  document: Document;
  onFileSelect: (file: File) => void;
}

function UploadZone({ document, onFileSelect }: UploadZoneProps) {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div>
      {/* Label */}
      <div className="flex items-center gap-2 mb-2">
        <div
          style={{
            color: '#B0B0B0',
            fontSize: '11px',
            fontWeight: '500',
          }}
        >
          {document.label}
        </div>
        {document.isCritical && (
          <span
            className="px-1.5 py-0.5 rounded"
            style={{
              backgroundColor: 'rgba(255, 82, 82, 0.15)',
              color: '#FF5252',
              fontSize: '9px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Crítico
          </span>
        )}
      </div>

      {/* Upload Zone */}
      <div
        className="relative rounded transition-all"
        style={{
          height: '100px',
          backgroundColor: '#1A1A1A',
          border:
            document.status === 'error'
              ? '1px dashed rgba(255, 82, 82, 0.4)'
              : document.status === 'uploaded'
              ? '1px solid rgba(0, 200, 83, 0.3)'
              : '1px dashed rgba(255, 255, 255, 0.15)',
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {/* Empty State */}
        {document.status === 'empty' && (
          <label className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer">
            <Upload
              style={{
                width: '20px',
                height: '20px',
                color: '#606060',
                marginBottom: '6px',
              }}
            />
            <div
              style={{
                color: '#606060',
                fontSize: '10px',
                textAlign: 'center',
              }}
            >
              Arrastrar archivo o hacer clic
            </div>
            <div
              style={{
                color: '#454545',
                fontSize: '9px',
                marginTop: '2px',
              }}
            >
              PDF, DOCX, XLSX • Max 10MB
            </div>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.docx,.xlsx"
              onChange={handleFileInput}
            />
          </label>
        )}

        {/* Uploading State */}
        {document.status === 'uploading' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
            <Loader2
              className="animate-spin mb-2"
              style={{
                width: '20px',
                height: '20px',
                color: '#2E7D32',
              }}
            />
            <div
              className="truncate w-full text-center mb-2"
              style={{
                color: '#B0B0B0',
                fontSize: '10px',
              }}
            >
              {document.fileName}
            </div>
            {/* Progress Bar */}
            <div
              className="w-full rounded-full overflow-hidden"
              style={{
                height: '4px',
                backgroundColor: '#252525',
              }}
            >
              <div
                className="h-full transition-all"
                style={{
                  width: `${document.progress}%`,
                  backgroundColor: '#2E7D32',
                }}
              />
            </div>
            <div
              style={{
                color: '#606060',
                fontSize: '9px',
                marginTop: '4px',
              }}
            >
              {document.progress}%
            </div>
          </div>
        )}

        {/* Uploaded State */}
        {document.status === 'uploaded' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
            <CheckCircle2
              style={{
                width: '20px',
                height: '20px',
                color: '#00C853',
                marginBottom: '6px',
              }}
            />
            <div
              className="truncate w-full text-center"
              style={{
                color: '#B0B0B0',
                fontSize: '10px',
              }}
            >
              {document.fileName}
            </div>
            <button
              className="mt-2 px-2 py-0.5 rounded transition-colors"
              style={{
                backgroundColor: 'transparent',
                border: '0.5px solid rgba(255, 255, 255, 0.1)',
                color: '#808080',
                fontSize: '9px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#252525';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Reemplazar
            </button>
          </div>
        )}

        {/* Error State */}
        {document.status === 'error' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
            <AlertCircle
              style={{
                width: '20px',
                height: '20px',
                color: '#FF5252',
                marginBottom: '6px',
              }}
            />
            <div
              className="text-center"
              style={{
                color: '#FF5252',
                fontSize: '10px',
                marginBottom: '6px',
              }}
            >
              {document.errorMessage}
            </div>
            <button
              className="px-2 py-0.5 rounded transition-colors"
              style={{
                backgroundColor: 'transparent',
                border: '0.5px solid rgba(255, 82, 82, 0.3)',
                color: '#FF5252',
                fontSize: '9px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 82, 82, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Reintentar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}