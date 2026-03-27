import { useState } from 'react';
import { AdminSidebar } from '../components/AdminSidebar';
import { ChevronRight, Plus, Trash2, AlertCircle, CheckCircle2, Info, Minus, CloudUpload, FileText, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

type Step = 1 | 2 | 3 | 4 | 5;
type Category = 'electrico' | 'civil' | 'maquinaria';
type Evaluator = 'ambiental' | 'proyectos' | 'sst' | 'legal';
type FileType = 'PDF' | 'Excel' | 'Word' | 'ZIP';
type PersonType = 'natural' | 'juridica' | 'ambos';

interface UploadedFile {
  name: string;
  size: number;
  type: string;
}

interface Requirement {
  id: string;
  name: string;
  fileType: FileType;
  evaluator: Evaluator | '';
  weight: number;
}

interface TenderData {
  // Step 1: Datos Generales (Alcance)
  mgsId: string;
  title: string;
  description: string;
  projectCount: number;
  targetPerson: PersonType;
  closingDate: string;

  // Step 2: Documentación Técnica
  mainDocument: UploadedFile | null;
  annexes: (UploadedFile | null)[];

  // Step 3: Segmentación (Calificación)
  categories: Category[];

  // Step 4: Requisitos
  requirements: Requirement[];
}

const INITIAL_TENDER: TenderData = {
  mgsId: '',
  title: '',
  description: '',
  projectCount: 1,
  targetPerson: 'juridica',
  closingDate: '',
  mainDocument: null,
  annexes: [null, null, null, null, null, null],
  categories: [],
  requirements: [],
};

const CATEGORY_OPTIONS = [
  { id: 'electrico' as Category, label: 'Eléctricos', icon: '⚡', count: 28 },
  { id: 'civil' as Category, label: 'Civiles', icon: '🏗️', count: 45 },
  { id: 'maquinaria' as Category, label: 'Maquinaria', icon: '🚜', count: 12 },
];

const EVALUATOR_OPTIONS = [
  { id: 'ambiental' as Evaluator, label: 'Equipo Ambiental', color: '#00C853' },
  { id: 'proyectos' as Evaluator, label: 'Ing. Proyectos', color: '#1D99CC' },
  { id: 'sst' as Evaluator, label: 'SST', color: '#FF9800' },
  { id: 'legal' as Evaluator, label: 'Legal', color: '#9C27B0' },
];

const FILE_TYPE_OPTIONS: FileType[] = ['PDF', 'Excel', 'Word', 'ZIP'];

export default function AdminTenderBuilder() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [tenderData, setTenderData] = useState<TenderData>(INITIAL_TENDER);
  const { colors } = useTheme();

  const addRequirement = () => {
    const newRequirement: Requirement = {
      id: `REQ-${Date.now()}`,
      name: '',
      fileType: 'PDF',
      evaluator: '',
      weight: 0,
    };
    setTenderData({
      ...tenderData,
      requirements: [...tenderData.requirements, newRequirement],
    });
  };

  const removeRequirement = (id: string) => {
    setTenderData({
      ...tenderData,
      requirements: tenderData.requirements.filter((req) => req.id !== id),
    });
  };

  const updateRequirement = (id: string, field: keyof Requirement, value: any) => {
    setTenderData({
      ...tenderData,
      requirements: tenderData.requirements.map((req) =>
        req.id === id ? { ...req, [field]: value } : req
      ),
    });
  };

  const toggleCategory = (category: Category) => {
    if (tenderData.categories.includes(category)) {
      setTenderData({
        ...tenderData,
        categories: tenderData.categories.filter((c) => c !== category),
      });
    } else {
      setTenderData({
        ...tenderData,
        categories: [...tenderData.categories, category],
      });
    }
  };

  const getTotalWeight = () => {
    return tenderData.requirements.reduce((sum, req) => sum + (req.weight || 0), 0);
  };

  const isWeightValid = () => {
    const total = getTotalWeight();
    return total === 100;
  };

  const getTotalPartners = () => {
    return tenderData.categories.reduce((sum, cat) => {
      const option = CATEGORY_OPTIONS.find((opt) => opt.id === cat);
      return sum + (option?.count || 0);
    }, 0);
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return tenderData.mgsId && tenderData.title && tenderData.closingDate;
    }
    if (currentStep === 2) {
      return tenderData.mainDocument !== null;
    }
    if (currentStep === 3) {
      return tenderData.categories.length > 0;
    }
    if (currentStep === 4) {
      return tenderData.requirements.length > 0 && isWeightValid();
    }
    return true;
  };

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: colors.canvasBackground,
      }}
    >
      <AdminSidebar />

      <div
        className="flex-1 flex flex-col"
        style={{
          marginLeft: '240px', // Match sidebar width exactly
        }}
      >
        {/* HEADER */}
        <div
          className="px-8 py-4"
          style={{
            borderBottom: `1px solid ${colors.border}`,
          }}
        >
          <h1
            style={{
              color: colors.textPrimary,
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '2px',
            }}
          >
            Tender Builder
          </h1>
          <div
            style={{
              color: colors.textTertiary,
              fontSize: '11px',
            }}
          >
            Crear nuevo pliego de licitación
          </div>
        </div>

        {/* STEPPER NAVIGATION */}
        <div
          className="px-8 py-6"
          style={{
            borderBottom: `1px solid ${colors.border}`,
          }}
        >
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <StepIndicator
              stepNumber={1}
              label="Datos Generales"
              isActive={currentStep === 1}
              isCompleted={currentStep > 1}
              onClick={() => setCurrentStep(1)}
            />
            <StepConnector isCompleted={currentStep > 1} />
            <StepIndicator
              stepNumber={2}
              label="Documentación Técnica"
              isActive={currentStep === 2}
              isCompleted={currentStep > 2}
              onClick={() => currentStep > 1 && setCurrentStep(2)}
            />
            <StepConnector isCompleted={currentStep > 2} />
            <StepIndicator
              stepNumber={3}
              label="Segmentación"
              isActive={currentStep === 3}
              isCompleted={currentStep > 3}
              onClick={() => currentStep > 2 && setCurrentStep(3)}
            />
            <StepConnector isCompleted={currentStep > 3} />
            <StepIndicator
              stepNumber={4}
              label="Requisitos & Pesos"
              isActive={currentStep === 4}
              isCompleted={currentStep > 4}
              onClick={() => currentStep > 3 && setCurrentStep(4)}
            />
            <StepConnector isCompleted={currentStep > 4} />
            <StepIndicator
              stepNumber={5}
              label="Publicar"
              isActive={currentStep === 5}
              isCompleted={false}
              onClick={() => currentStep > 4 && setCurrentStep(5)}
            />
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-auto px-8 py-6">
          <div className="max-w-5xl mx-auto">
            {currentStep === 1 && <Step1DatosGenerales data={tenderData} setData={setTenderData} />}
            {currentStep === 2 && (
              <Step2DocumentacionTecnica
                mainDocument={tenderData.mainDocument}
                annexes={tenderData.annexes}
                setMainDocument={(file) => setTenderData({ ...tenderData, mainDocument: file })}
                setAnnexes={(files) => setTenderData({ ...tenderData, annexes: files })}
              />
            )}
            {currentStep === 3 && (
              <Step3Segmentacion
                categories={tenderData.categories}
                toggleCategory={toggleCategory}
                totalPartners={getTotalPartners()}
              />
            )}
            {currentStep === 4 && (
              <Step4Requisitos
                requirements={tenderData.requirements}
                addRequirement={addRequirement}
                removeRequirement={removeRequirement}
                updateRequirement={updateRequirement}
                totalWeight={getTotalWeight()}
                isValid={isWeightValid()}
              />
            )}
            {currentStep === 5 && <Step5Publicar data={tenderData} />}
          </div>
        </div>

        {/* FOOTER ACTIONS */}
        <div
          className="px-8 py-4 flex items-center justify-between"
          style={{
            borderTop: `1px solid ${colors.border}`,
          }}
        >
          <button
            onClick={() => currentStep > 1 && setCurrentStep((currentStep - 1) as Step)}
            disabled={currentStep === 1}
            className="px-5 py-2.5 rounded transition-colors"
            style={{
              backgroundColor: 'transparent',
              border: `1px solid ${colors.border}`,
              color: currentStep === 1 ? '#404040' : '#B0B0B0',
              fontSize: '12px',
              fontWeight: '600',
              cursor: currentStep === 1 ? 'not-allowed' : 'pointer',
            }}
          >
            Anterior
          </button>

          <div className="flex items-center gap-3">
            <button
              className="px-5 py-2.5 rounded transition-colors"
              style={{
                backgroundColor: 'transparent',
                border: '0.5px solid #606060',
                color: '#B0B0B0',
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              Guardar Borrador
            </button>

            <button
              onClick={() => {
                if (canProceed()) {
                  if (currentStep < 5) {
                    setCurrentStep((currentStep + 1) as Step);
                  }
                }
              }}
              disabled={!canProceed()}
              className="px-5 py-2.5 rounded transition-all flex items-center gap-2"
              style={{
                backgroundColor: canProceed() ? '#1D99CC' : '#1A1A1A',
                border: 'none',
                color: canProceed() ? '#FFFFFF' : '#606060',
                fontSize: '12px',
                fontWeight: '600',
                cursor: canProceed() ? 'pointer' : 'not-allowed',
                boxShadow: canProceed() ? '0 0 20px rgba(29, 153, 204, 0.3)' : 'none',
              }}
            >
              {currentStep === 5 ? 'Publicar Pliego' : 'Siguiente'}
              <ChevronRight style={{ width: '14px', height: '14px' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== STEPPER COMPONENTS =====
interface StepIndicatorProps {
  stepNumber: number;
  label: string;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

function StepIndicator({ stepNumber, label, isActive, isCompleted, onClick }: StepIndicatorProps) {
  const { colors } = useTheme();
  
  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
      <div
        className="flex items-center justify-center rounded-full mb-2 transition-all"
        style={{
          width: '40px',
          height: '40px',
          backgroundColor: isCompleted ? colors.accent : isActive ? colors.accent : colors.cardBackground,
          border: `2px solid ${isCompleted || isActive ? colors.accent : colors.border}`,
          color: isCompleted || isActive ? '#FFFFFF' : colors.textTertiary,
          fontSize: '14px',
          fontWeight: '700',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {isCompleted ? <CheckCircle2 style={{ width: '20px', height: '20px' }} /> : stepNumber}
      </div>
      <div
        style={{
          color: isActive ? colors.textPrimary : colors.textTertiary,
          fontSize: '11px',
          fontWeight: '600',
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </div>
    </div>
  );
}

function StepConnector({ isCompleted }: { isCompleted: boolean }) {
  const { colors } = useTheme();
  
  return (
    <div
      style={{
        flex: 1,
        height: '2px',
        backgroundColor: isCompleted ? colors.accent : colors.border,
        margin: '0 16px',
        marginBottom: '36px',
      }}
    />
  );
}

// ===== STEP 1: DATOS GENERALES =====
interface Step1Props {
  data: TenderData;
  setData: (data: TenderData) => void;
}

function Step1DatosGenerales({ data, setData }: Step1Props) {
  const { colors } = useTheme();
  
  return (
    <div>
      <h2
        style={{
          color: colors.textPrimary,
          fontSize: '16px',
          fontWeight: '600',
          marginBottom: '16px',
        }}
      >
        Datos Generales del Pliego
      </h2>

      <div className="space-y-5">
        <FormField label="MGS ID" required>
          <input
            type="text"
            value={data.mgsId}
            onChange={(e) => setData({ ...data, mgsId: e.target.value })}
            placeholder="Ej: MGS-BOY-05"
            className="w-full px-4 py-3 rounded transition-colors"
            style={{
              backgroundColor: colors.cardBackground,
              border: `1px solid ${colors.border}`,
              color: colors.textPrimary,
              fontSize: '13px',
              fontFamily: 'JetBrains Mono, monospace',
              outline: 'none',
            }}
            onFocus={(e) => (e.target.style.borderColor = colors.accent)}
            onBlur={(e) => (e.target.style.borderColor = colors.border)}
          />
        </FormField>

        <FormField label="Título del Pliego" required>
          <input
            type="text"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            placeholder="Ej: Obra Civil MGS Boyacá V"
            className="w-full px-4 py-3 rounded transition-colors"
            style={{
              backgroundColor: colors.cardBackground,
              border: `1px solid ${colors.border}`,
              color: colors.textPrimary,
              fontSize: '13px',
              outline: 'none',
            }}
            onFocus={(e) => (e.target.style.borderColor = colors.accent)}
            onBlur={(e) => (e.target.style.borderColor = colors.border)}
          />
        </FormField>

        <FormField label="Descripción">
          <textarea
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            placeholder="Descripción detallada del proyecto..."
            rows={4}
            className="w-full px-4 py-3 rounded transition-colors resize-none"
            style={{
              backgroundColor: colors.cardBackground,
              border: `1px solid ${colors.border}`,
              color: colors.textPrimary,
              fontSize: '13px',
              outline: 'none',
              lineHeight: '1.6',
            }}
            onFocus={(e) => (e.target.style.borderColor = colors.accent)}
            onBlur={(e) => (e.target.style.borderColor = colors.border)}
          />
        </FormField>

        <div className="grid grid-cols-2 gap-5">
          <FormField label="# de Proyectos (MGS) Incluidos" required>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setData({ ...data, projectCount: Math.max(1, data.projectCount - 1) })}
                className="px-4 py-3 rounded transition-all"
                style={{
                  backgroundColor: colors.cardBackground,
                  border: `1px solid ${colors.border}`,
                  color: colors.textTertiary,
                  fontSize: '16px',
                  fontWeight: '700',
                  width: '48px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.accent;
                  e.currentTarget.style.color = colors.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.color = colors.textTertiary;
                }}
              >
                −
              </button>

              <div
                className="flex items-center justify-center rounded"
                style={{
                  backgroundColor: colors.cardBackground,
                  border: `1px solid ${colors.border}`,
                  width: '120px',
                  height: '48px',
                }}
              >
                <span
                  style={{
                    color: colors.accent,
                    fontSize: '20px',
                    fontWeight: '700',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {data.projectCount}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setData({ ...data, projectCount: data.projectCount + 1 })}
                className="px-4 py-3 rounded transition-all"
                style={{
                  backgroundColor: colors.cardBackground,
                  border: `1px solid ${colors.border}`,
                  color: colors.textTertiary,
                  fontSize: '16px',
                  fontWeight: '700',
                  width: '48px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.accent;
                  e.currentTarget.style.color = colors.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.color = colors.textTertiary;
                }}
              >
                +
              </button>
            </div>
          </FormField>

          <FormField label="Fecha de Cierre" required>
            <input
              type="datetime-local"
              value={data.closingDate}
              onChange={(e) => setData({ ...data, closingDate: e.target.value })}
              className="w-full px-4 py-3 rounded transition-colors"
              style={{
                backgroundColor: colors.cardBackground,
                border: `1px solid ${colors.border}`,
                color: colors.textPrimary,
                fontSize: '13px',
                fontFamily: 'JetBrains Mono, monospace',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderColor = colors.accent)}
              onBlur={(e) => (e.target.style.borderColor = colors.border)}
            />
          </FormField>
        </div>

        <FormField label="Dirigido a:" required>
          <div className="relative">
            <select
              value={data.targetPerson}
              onChange={(e) => setData({ ...data, targetPerson: e.target.value as PersonType })}
              className="w-full px-4 py-3 rounded transition-colors appearance-none cursor-pointer"
              style={{
                backgroundColor: colors.cardBackground,
                border: `1px solid ${colors.border}`,
                color: colors.textPrimary,
                fontSize: '13px',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderColor = colors.accent)}
              onBlur={(e) => (e.target.style.borderColor = colors.border)}
            >
              <option value="natural">Persona Natural</option>
              <option value="juridica">Persona Jurídica</option>
              <option value="ambos">Ambos</option>
            </select>

            <div
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: colors.textTertiary, fontSize: '12px' }}
            >
              ▼
            </div>
          </div>
        </FormField>
      </div>
    </div>
  );
}

// ===== STEP 2: DOCUMENTACIÓN TÉCNICA =====
interface Step2Props {
  mainDocument: UploadedFile | null;
  annexes: (UploadedFile | null)[];
  setMainDocument: (file: UploadedFile | null) => void;
  setAnnexes: (files: (UploadedFile | null)[]) => void;
}

function Step2DocumentacionTecnica({ mainDocument, annexes, setMainDocument, setAnnexes }: Step2Props) {
  // Safety check: ensure annexes is always an array
  const safeAnnexes = annexes || [null, null, null, null, null, null];

  const handleMainDocumentUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.docx';
    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        setMainDocument({
          name: file.name,
          size: file.size,
          type: file.type,
        });
      }
    };
    input.click();
  };

  const handleAnnexUpload = (index: number) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.xlsx,.docx,.dwg';
    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const newAnnexes = [...safeAnnexes];
        newAnnexes[index] = {
          name: file.name,
          size: file.size,
          type: file.type,
        };
        setAnnexes(newAnnexes);
      }
    };
    input.click();
  };

  const removeAnnex = (index: number) => {
    const newAnnexes = [...safeAnnexes];
    newAnnexes[index] = null;
    setAnnexes(newAnnexes);
  };

  return (
    <div>
      {/* MAIN COMPONENT - MASSIVE DROPZONE */}
      <div className="mb-10">
        {!mainDocument ? (
          <div
            className="cursor-pointer transition-all"
            style={{
              backgroundColor: '#0A0A0A',
              border: '1px solid #1D99CC',
              padding: '80px 60px',
              borderRadius: '0px',
              boxShadow: '0 0 30px rgba(29, 153, 204, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0D0D0D';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(29, 153, 204, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0A0A0A';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(29, 153, 204, 0.15)';
            }}
            onClick={handleMainDocumentUpload}
          >
            <div className="flex flex-col items-center justify-center gap-6">
              <CloudUpload
                style={{
                  width: '80px',
                  height: '80px',
                  color: '#1D99CC',
                  strokeWidth: 1.2,
                }}
              />
              <div className="text-center">
                <h2
                  style={{
                    color: '#1D99CC',
                    fontSize: '18px',
                    fontWeight: '700',
                    fontFamily: 'JetBrains Mono, monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '8px',
                  }}
                >
                  DOCUMENTO MAESTRO DEL PLIEGO
                </h2>
                <p
                  style={{
                    color: '#707070',
                    fontSize: '13px',
                    fontWeight: '500',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Arrastra el PDF principal aquí
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="transition-all"
            style={{
              backgroundColor: '#0A0A0A',
              border: '1px solid #1D99CC',
              padding: '32px 40px',
              borderRadius: '0px',
              boxShadow: '0 0 30px rgba(29, 153, 204, 0.2)',
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#1D99CC20',
                    borderRadius: '0px',
                  }}
                >
                  <FileText
                    style={{
                      width: '32px',
                      height: '32px',
                      color: '#1D99CC',
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      color: '#FFFFFF',
                      fontSize: '15px',
                      fontWeight: '600',
                      fontFamily: 'JetBrains Mono, monospace',
                      marginBottom: '6px',
                    }}
                  >
                    {mainDocument.name}
                  </p>
                  <p
                    style={{
                      color: '#1D99CC',
                      fontSize: '11px',
                      fontFamily: 'JetBrains Mono, monospace',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    DOCUMENTO PRINCIPAL · {(mainDocument.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMainDocument(null)}
                className="px-5 py-2.5 transition-all"
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #333333',
                  borderRadius: '0px',
                  color: '#808080',
                  fontSize: '12px',
                  fontWeight: '600',
                  fontFamily: 'Inter, sans-serif',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FF5252';
                  e.currentTarget.style.color = '#FF5252';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#333333';
                  e.currentTarget.style.color = '#808080';
                }}
              >
                Reemplazar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* SECONDARY GRID - 6 SMALL CARDS (3x2) */}
      <div>
        <h3
          style={{
            color: '#606060',
            fontSize: '11px',
            fontWeight: '700',
            fontFamily: 'JetBrains Mono, monospace',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '16px',
          }}
        >
          ANEXOS TÉCNICOS COMPLEMENTARIOS
        </h3>

        <div className="grid grid-cols-3 gap-5">
          {safeAnnexes.map((annex, index) => (
            <AnnexCard
              key={index}
              index={index}
              file={annex}
              onUpload={() => handleAnnexUpload(index)}
              onRemove={() => removeAnnex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== ANNEX CARD COMPONENT =====
interface AnnexCardProps {
  index: number;
  file: UploadedFile | null;
  onUpload: () => void;
  onRemove: () => void;
}

function AnnexCard({ index, file, onUpload, onRemove }: AnnexCardProps) {
  if (!file) {
    return (
      <div
        className="cursor-pointer transition-all"
        style={{
          backgroundColor: '#121212',
          border: '2px dashed #333333',
          padding: '40px 24px',
          borderRadius: '0px',
          minHeight: '160px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#505050';
          e.currentTarget.style.backgroundColor = '#151515';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#333333';
          e.currentTarget.style.backgroundColor = '#121212';
        }}
        onClick={onUpload}
      >
        <div className="flex flex-col items-center gap-3">
          <div
            className="flex items-center justify-center"
            style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#0A0A0A',
              border: '1px solid #333333',
              borderRadius: '0px',
            }}
          >
            <Plus
              style={{
                width: '24px',
                height: '24px',
                color: '#505050',
                strokeWidth: 2,
              }}
            />
          </div>
          <div className="text-center">
            <p
              style={{
                color: '#505050',
                fontSize: '10px',
                fontWeight: '600',
                fontFamily: 'JetBrains Mono, monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '2px',
              }}
            >
              Anexo {String(index + 1).padStart(2, '0')}
            </p>
            <p
              style={{
                color: '#404040',
                fontSize: '10px',
                fontWeight: '500',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Subir Anexo (Opcional)
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="transition-all"
      style={{
        backgroundColor: '#121212',
        border: '1px solid #505050',
        padding: '20px',
        borderRadius: '0px',
        minHeight: '160px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <div className="flex items-start justify-between mb-3">
          <div
            className="flex items-center justify-center"
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#1D99CC15',
              borderRadius: '0px',
            }}
          >
            <FileText
              style={{
                width: '16px',
                height: '16px',
                color: '#1D99CC',
              }}
            />
          </div>
          <button
            onClick={onRemove}
            className="transition-all"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              padding: '4px',
            }}
          >
            <X
              style={{
                width: '16px',
                height: '16px',
                color: '#606060',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as SVGElement).style.color = '#FF5252';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as SVGElement).style.color = '#606060';
              }}
            />
          </button>
        </div>
        <p
          style={{
            color: '#D0D0D0',
            fontSize: '11px',
            fontWeight: '600',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '4px',
            lineHeight: '1.4',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {file.name}
        </p>
      </div>
      <p
        style={{
          color: '#606060',
          fontSize: '9px',
          fontFamily: 'JetBrains Mono, monospace',
          textTransform: 'uppercase',
          letterSpacing: '0.3px',
        }}
      >
        ANEXO {String(index + 1).padStart(2, '0')} · {(file.size / 1024).toFixed(0)} KB
      </p>
    </div>
  );
}

// ===== STEP 3: SEGMENTACIÓN =====
interface Step3Props {
  categories: Category[];
  toggleCategory: (category: Category) => void;
  totalPartners: number;
}

function Step3Segmentacion({ categories, toggleCategory, totalPartners }: Step3Props) {
  return (
    <div>
      <h2
        style={{
          color: '#D0D0D0',
          fontSize: '16px',
          fontWeight: '600',
          marginBottom: '4px',
        }}
      >
        Segmentación de Audiencia
      </h2>
      <p
        style={{
          color: '#606060',
          fontSize: '12px',
          marginBottom: '24px',
        }}
      >
        Selecciona las categorías de partners que podrán ver este pliego
      </p>

      <div className="space-y-4 mb-6">
        {CATEGORY_OPTIONS.map((option) => (
          <CategoryToggle
            key={option.id}
            option={option}
            isSelected={categories.includes(option.id)}
            onToggle={() => toggleCategory(option.id)}
          />
        ))}
      </div>

      {/* Preview */}
      {categories.length > 0 && (
        <div
          className="rounded p-5"
          style={{
            backgroundColor: 'rgba(29, 153, 204, 0.08)',
            border: '1px solid #1D99CC',
          }}
        >
          <div className="flex items-start gap-3">
            <Info style={{ width: '18px', height: '18px', color: '#1D99CC', flexShrink: 0 }} />
            <div>
              <div
                style={{
                  color: '#1D99CC',
                  fontSize: '13px',
                  fontWeight: '600',
                  marginBottom: '4px',
                }}
              >
                Alcance Estimado
              </div>
              <div
                style={{
                  color: '#B0B0B0',
                  fontSize: '12px',
                }}
              >
                Este pliego será visible para{' '}
                <span
                  style={{
                    color: '#1D99CC',
                    fontWeight: '700',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {totalPartners} Partners
                </span>{' '}
                registrados en las categorías seleccionadas
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface CategoryToggleProps {
  option: { id: Category; label: string; icon: string; count: number };
  isSelected: boolean;
  onToggle: () => void;
}

function CategoryToggle({ option, isSelected, onToggle }: CategoryToggleProps) {
  return (
    <div
      className="rounded p-4 cursor-pointer transition-all"
      style={{
        backgroundColor: isSelected ? 'rgba(29, 153, 204, 0.12)' : '#1A1A1A',
        border: `1px solid ${isSelected ? '#1D99CC' : '#333333'}`,
      }}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div style={{ fontSize: '24px' }}>{option.icon}</div>
          <div>
            <div
              style={{
                color: isSelected ? '#1D99CC' : '#E0E0E0',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '2px',
              }}
            >
              {option.label}
            </div>
            <div
              style={{
                color: '#606060',
                fontSize: '11px',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {option.count} partners registrados
            </div>
          </div>
        </div>

        <div
          className="rounded"
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: isSelected ? '#1D99CC' : '#0A0A0A',
            border: `2px solid ${isSelected ? '#1D99CC' : '#333333'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isSelected && <CheckCircle2 style={{ width: '12px', height: '12px', color: '#FFFFFF' }} />}
        </div>
      </div>
    </div>
  );
}

// ===== STEP 4: REQUISITOS & PESOS =====
interface Step4Props {
  requirements: Requirement[];
  addRequirement: () => void;
  removeRequirement: (id: string) => void;
  updateRequirement: (id: string, field: keyof Requirement, value: any) => void;
  totalWeight: number;
  isValid: boolean;
}

function Step4Requisitos({
  requirements,
  addRequirement,
  removeRequirement,
  updateRequirement,
  totalWeight,
  isValid,
}: Step4Props) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2
            style={{
              color: '#D0D0D0',
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '4px',
            }}
          >
            Requisitos & Pesos
          </h2>
          <p
            style={{
              color: '#606060',
              fontSize: '12px',
            }}
          >
            Define los documentos requeridos y asigna evaluadores
          </p>
        </div>

        <button
          onClick={addRequirement}
          className="flex items-center gap-2 px-4 py-2.5 rounded transition-all"
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #1D99CC',
            color: '#1D99CC',
            fontSize: '12px',
            fontWeight: '600',
          }}
        >
          <Plus style={{ width: '14px', height: '14px' }} />
          Agregar Requisito
        </button>
      </div>

      {/* Requirements List */}
      <div className="space-y-4 mb-6">
        {requirements.length === 0 ? (
          <div
            className="rounded p-8 text-center"
            style={{
              backgroundColor: '#1A1A1A',
              border: '1px dashed #333333',
            }}
          >
            <div
              style={{
                color: '#606060',
                fontSize: '13px',
              }}
            >
              No hay requisitos definidos. Haz clic en "Agregar Requisito" para comenzar.
            </div>
          </div>
        ) : (
          requirements.map((req, index) => (
            <RequirementRow
              key={req.id}
              requirement={req}
              index={index}
              onUpdate={updateRequirement}
              onRemove={removeRequirement}
            />
          ))
        )}
      </div>

      {/* Weight Summary */}
      {requirements.length > 0 && (
        <div
          className="rounded p-5"
          style={{
            backgroundColor: isValid ? 'rgba(0, 200, 83, 0.08)' : 'rgba(255, 82, 82, 0.08)',
            border: `1px solid ${isValid ? '#00C853' : '#FF5252'}`,
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {isValid ? (
                <CheckCircle2 style={{ width: '20px', height: '20px', color: '#00C853' }} />
              ) : (
                <AlertCircle style={{ width: '20px', height: '20px', color: '#FF5252' }} />
              )}
              <div>
                <div
                  style={{
                    color: isValid ? '#00C853' : '#FF5252',
                    fontSize: '13px',
                    fontWeight: '600',
                  }}
                >
                  {isValid ? 'Pesos Válidos' : 'Ajuste Necesario'}
                </div>
                <div
                  style={{
                    color: '#808080',
                    fontSize: '11px',
                  }}
                >
                  {isValid
                    ? 'La suma de pesos es correcta'
                    : 'Los pesos deben sumar exactamente 100%'}
                </div>
              </div>
            </div>

            <div
              style={{
                color: isValid ? '#00C853' : '#FF5252',
                fontSize: '28px',
                fontWeight: '700',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {totalWeight}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface RequirementRowProps {
  requirement: Requirement;
  index: number;
  onUpdate: (id: string, field: keyof Requirement, value: any) => void;
  onRemove: (id: string) => void;
}

function RequirementRow({ requirement, index, onUpdate, onRemove }: RequirementRowProps) {
  return (
    <div
      className="rounded p-4"
      style={{
        backgroundColor: '#1A1A1A',
        border: '1px solid #333333',
      }}
    >
      <div className="grid grid-cols-12 gap-4 items-start">
        {/* Index */}
        <div className="col-span-1 flex items-center justify-center">
          <div
            className="rounded-full flex items-center justify-center"
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#0A0A0A',
              color: '#606060',
              fontSize: '12px',
              fontWeight: '700',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {index + 1}
          </div>
        </div>

        {/* Name */}
        <div className="col-span-4">
          <label
            style={{
              color: '#606060',
              fontSize: '10px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            Nombre del Requisito
          </label>
          <input
            type="text"
            value={requirement.name}
            onChange={(e) => onUpdate(requirement.id, 'name', e.target.value)}
            placeholder="Ej: Propuesta de Diseño"
            className="w-full px-3 py-2 rounded transition-colors"
            style={{
              backgroundColor: '#0A0A0A',
              border: '1px solid #333333',
              color: '#E0E0E0',
              fontSize: '12px',
              outline: 'none',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#1D99CC')}
            onBlur={(e) => (e.target.style.borderColor = '#333333')}
          />
        </div>

        {/* File Type */}
        <div className="col-span-2">
          <label
            style={{
              color: '#606060',
              fontSize: '10px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            Tipo de Archivo
          </label>
          <select
            value={requirement.fileType}
            onChange={(e) => onUpdate(requirement.id, 'fileType', e.target.value as FileType)}
            className="w-full px-3 py-2 rounded transition-colors"
            style={{
              backgroundColor: '#0A0A0A',
              border: '1px solid #333333',
              color: '#E0E0E0',
              fontSize: '12px',
              outline: 'none',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#1D99CC')}
            onBlur={(e) => (e.target.style.borderColor = '#333333')}
          >
            {FILE_TYPE_OPTIONS.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Evaluator */}
        <div className="col-span-3">
          <label
            style={{
              color: '#606060',
              fontSize: '10px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            Asignar Evaluador
          </label>
          <select
            value={requirement.evaluator}
            onChange={(e) => onUpdate(requirement.id, 'evaluator', e.target.value as Evaluator)}
            className="w-full px-3 py-2 rounded transition-colors"
            style={{
              backgroundColor: '#0A0A0A',
              border: '1px solid #333333',
              color: requirement.evaluator
                ? EVALUATOR_OPTIONS.find((e) => e.id === requirement.evaluator)?.color
                : '#808080',
              fontSize: '12px',
              outline: 'none',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#1D99CC')}
            onBlur={(e) => (e.target.style.borderColor = '#333333')}
          >
            <option value="">Seleccionar...</option>
            {EVALUATOR_OPTIONS.map((evaluator) => (
              <option key={evaluator.id} value={evaluator.id}>
                {evaluator.label}
              </option>
            ))}
          </select>
        </div>

        {/* Weight */}
        <div className="col-span-1">
          <label
            style={{
              color: '#606060',
              fontSize: '10px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            Peso %
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={requirement.weight || ''}
            onChange={(e) => onUpdate(requirement.id, 'weight', parseInt(e.target.value) || 0)}
            className="w-full px-3 py-2 rounded transition-colors text-center"
            style={{
              backgroundColor: '#0A0A0A',
              border: '1px solid #333333',
              color: '#1D99CC',
              fontSize: '12px',
              fontWeight: '700',
              fontFamily: 'JetBrains Mono, monospace',
              outline: 'none',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#1D99CC')}
            onBlur={(e) => (e.target.style.borderColor = '#333333')}
          />
        </div>

        {/* Delete */}
        <div className="col-span-1 flex items-end justify-center" style={{ height: '58px' }}>
          <button
            onClick={() => onRemove(requirement.id)}
            className="p-2 rounded transition-colors"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #333333',
              color: '#606060',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#FF5252';
              e.currentTarget.style.color = '#FF5252';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#333333';
              e.currentTarget.style.color = '#606060';
            }}
          >
            <Trash2 style={{ width: '14px', height: '14px' }} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== STEP 5: PUBLICAR =====
interface Step5Props {
  data: TenderData;
}

function Step5Publicar({ data }: Step5Props) {
  return (
    <div>
      <h2
        style={{
          color: '#D0D0D0',
          fontSize: '16px',
          fontWeight: '600',
          marginBottom: '4px',
        }}
      >
        Revisión Final
      </h2>
      <p
        style={{
          color: '#606060',
          fontSize: '12px',
          marginBottom: '24px',
        }}
      >
        Revisa la información antes de publicar el pliego
      </p>

      <div className="space-y-4">
        <SummaryCard label="MGS ID" value={data.mgsId} />
        <SummaryCard label="Título" value={data.title} />
        <SummaryCard label="Fecha de Cierre" value={data.closingDate} />
        <SummaryCard
          label="Categorías"
          value={data.categories.map((c) => CATEGORY_OPTIONS.find((o) => o.id === c)?.label).join(', ')}
        />
        <SummaryCard label="Requisitos Definidos" value={`${data.requirements.length} documentos`} />
      </div>

      <div
        className="rounded p-5 mt-6"
        style={{
          backgroundColor: 'rgba(0, 200, 83, 0.08)',
          border: '1px solid #00C853',
        }}
      >
        <div className="flex items-center gap-3">
          <CheckCircle2 style={{ width: '20px', height: '20px', color: '#00C853' }} />
          <div>
            <div
              style={{
                color: '#00C853',
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '2px',
              }}
            >
              Listo para Publicar
            </div>
            <div
              style={{
                color: '#B0B0B0',
                fontSize: '11px',
              }}
            >
              El pliego se enviará a todos los partners de las categorías seleccionadas
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded p-4"
      style={{
        backgroundColor: '#1A1A1A',
        border: '1px solid #333333',
      }}
    >
      <div
        style={{
          color: '#606060',
          fontSize: '10px',
          textTransform: 'uppercase',
          marginBottom: '6px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          color: '#E0E0E0',
          fontSize: '13px',
          fontWeight: '500',
        }}
      >
        {value || '—'}
      </div>
    </div>
  );
}

// ===== FORM FIELD =====
interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

function FormField({ label, required, children }: FormFieldProps) {
  const { colors } = useTheme();
  
  return (
    <div>
      <label
        style={{
          color: colors.textSecondary,
          fontSize: '12px',
          fontWeight: '600',
          display: 'block',
          marginBottom: '8px',
        }}
      >
        {label}
        {required && (
          <span style={{ color: colors.error, marginLeft: '4px' }}>*</span>
        )}
      </label>
      {children}
    </div>
  );
}