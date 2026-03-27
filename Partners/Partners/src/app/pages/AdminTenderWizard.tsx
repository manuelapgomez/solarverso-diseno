import { useState } from 'react';
import { AdminSidebar } from '../components/AdminSidebar';
import { ChevronLeft, AlertCircle, ChevronRight, X, Upload, FileText, File } from 'lucide-react';
import { useNavigate } from 'react-router';

type PersonType = 'natural' | 'juridica' | 'ambos';
type Specialty = 'civil' | 'electrico' | 'maquinaria' | 'socioambiental';

interface UploadedFile {
  name: string;
  size: number;
  type: string;
}

export default function AdminTenderWizard() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // Step 1 Form State
  const [tenderName, setTenderName] = useState('');
  const [projectCount, setProjectCount] = useState(1);
  const [personType, setPersonType] = useState<PersonType>('juridica');
  const [selectedSpecialties, setSelectedSpecialties] = useState<Specialty[]>([]);

  // Step 2 Document State
  const [mainDocument, setMainDocument] = useState<UploadedFile | null>(null);
  const [annexes, setAnnexes] = useState<(UploadedFile | null)[]>([null, null, null, null, null, null]);

  const toggleSpecialty = (specialty: Specialty) => {
    setSelectedSpecialties((prev) =>
      prev.includes(specialty)
        ? prev.filter((s) => s !== specialty)
        : [...prev, specialty]
    );
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCancel = () => {
    navigate('/admin/dashboard');
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
        className="flex-1"
        style={{
          marginLeft: '220px',
          backgroundColor: '#050505',
        }}
      >
        {/* TOP HEADER BAR */}
        <div
          className="px-8 py-4"
          style={{
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            backgroundColor: '#050505',
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1
                style={{
                  color: '#FFFFFF',
                  fontSize: '18px',
                  fontWeight: '600',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '2px',
                }}
              >
                Tender Builder
              </h1>
              <p
                style={{
                  color: '#808080',
                  fontSize: '11px',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Crear nuevo pliego de licitación
              </p>
            </div>

            <button
              onClick={handleCancel}
              className="flex items-center gap-2 px-3 py-2 rounded transition-all"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                color: '#808080',
                fontSize: '11px',
                fontWeight: '600',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#333333';
                e.currentTarget.style.color = '#B0B0B0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.color = '#808080';
              }}
            >
              <X style={{ width: '14px', height: '14px' }} />
              Cancelar
            </button>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div
          className="px-8 py-8"
          style={{
            height: 'calc(100vh - 96px)',
            overflowY: 'auto',
          }}
        >
          {/* PROGRESS TRACKER - STEPPER */}
          <div className="mb-10">
            <StepperProgress currentStep={currentStep} />
          </div>

          {/* STEP 1: ALCANCE Y PERFIL */}
          {currentStep === 1 && (
            <div className="max-w-4xl">
              <div className="mb-6">
                <h2
                  style={{
                    color: '#FFFFFF',
                    fontSize: '20px',
                    fontWeight: '700',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '4px',
                  }}
                >
                  Alcance y Perfil del Postulante
                </h2>
                <p
                  style={{
                    color: '#808080',
                    fontSize: '12px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Define el alcance del pliego y el perfil requerido
                </p>
              </div>

              {/* INPUT GROUP A: SCOPE */}
              <div className="mb-8">
                <GroupTitle title="Información del Proyecto" />

                <div
                  className="rounded p-6"
                  style={{
                    backgroundColor: '#121212',
                    border: '1px solid #333333',
                  }}
                >
                  <div className="space-y-6">
                    {/* Input 1: Nombre del Pliego */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          color: '#B0B0B0',
                          fontSize: '11px',
                          fontWeight: '600',
                          fontFamily: 'Inter, sans-serif',
                          marginBottom: '8px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        Nombre del Pliego
                        <span style={{ color: '#FF5252' }}> *</span>
                      </label>
                      <input
                        type="text"
                        value={tenderName}
                        onChange={(e) => setTenderName(e.target.value)}
                        placeholder="Ej: Montaje Eléctrico Fase 1"
                        className="w-full px-4 py-3 rounded transition-all"
                        style={{
                          backgroundColor: '#0A0A0A',
                          border: '1px solid #333333',
                          color: '#FFFFFF',
                          fontSize: '13px',
                          fontFamily: 'Inter, sans-serif',
                          outline: 'none',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#1D99CC';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#333333';
                        }}
                      />
                    </div>

                    {/* Input 2: # de Proyectos (MGS) */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          color: '#B0B0B0',
                          fontSize: '11px',
                          fontWeight: '600',
                          fontFamily: 'Inter, sans-serif',
                          marginBottom: '8px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        # de Proyectos (MGS) Incluidos
                        <span style={{ color: '#FF5252' }}> *</span>
                      </label>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setProjectCount(Math.max(1, projectCount - 1))}
                          className="px-4 py-3 rounded transition-all"
                          style={{
                            backgroundColor: '#0A0A0A',
                            border: '1px solid #333333',
                            color: '#808080',
                            fontSize: '16px',
                            fontWeight: '700',
                            width: '48px',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#1D99CC';
                            e.currentTarget.style.color = '#1D99CC';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#333333';
                            e.currentTarget.style.color = '#808080';
                          }}
                        >
                          −
                        </button>

                        <div
                          className="flex items-center justify-center rounded"
                          style={{
                            backgroundColor: '#0A0A0A',
                            border: '1px solid #333333',
                            width: '120px',
                            height: '48px',
                          }}
                        >
                          <span
                            style={{
                              color: '#1D99CC',
                              fontSize: '20px',
                              fontWeight: '700',
                              fontFamily: 'JetBrains Mono, monospace',
                            }}
                          >
                            {projectCount}
                          </span>
                        </div>

                        <button
                          onClick={() => setProjectCount(projectCount + 1)}
                          className="px-4 py-3 rounded transition-all"
                          style={{
                            backgroundColor: '#0A0A0A',
                            border: '1px solid #333333',
                            color: '#808080',
                            fontSize: '16px',
                            fontWeight: '700',
                            width: '48px',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#1D99CC';
                            e.currentTarget.style.color = '#1D99CC';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#333333';
                            e.currentTarget.style.color = '#808080';
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Input 3: Dirigido a */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          color: '#B0B0B0',
                          fontSize: '11px',
                          fontWeight: '600',
                          fontFamily: 'Inter, sans-serif',
                          marginBottom: '8px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        Dirigido a
                        <span style={{ color: '#FF5252' }}> *</span>
                      </label>

                      <div className="relative">
                        <select
                          value={personType}
                          onChange={(e) => setPersonType(e.target.value as PersonType)}
                          className="w-full px-4 py-3 rounded transition-all appearance-none cursor-pointer"
                          style={{
                            backgroundColor: '#0A0A0A',
                            border: '1px solid #333333',
                            color: '#FFFFFF',
                            fontSize: '13px',
                            fontFamily: 'Inter, sans-serif',
                            outline: 'none',
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = '#1D99CC';
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = '#333333';
                          }}
                        >
                          <option value="natural">Persona Natural</option>
                          <option value="juridica">Persona Jurídica</option>
                          <option value="ambos">Ambos</option>
                        </select>

                        <div
                          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                          style={{ color: '#808080' }}
                        >
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* INPUT GROUP B: PARTICIPANT PROFILE */}
              <div className="mb-8">
                <GroupTitle title="Perfil del Postulante" />

                <div
                  className="rounded p-6"
                  style={{
                    backgroundColor: '#121212',
                    border: '1px solid #333333',
                  }}
                >
                  <div>
                    {/* DYNAMIC INFO ALERT */}
                    {personType === 'juridica' && (
                      <div
                        className="flex items-start gap-3 p-3 rounded"
                        style={{
                          backgroundColor: '#1D99CC15',
                          border: '1px solid #1D99CC',
                        }}
                      >
                        <AlertCircle
                          style={{
                            width: '16px',
                            height: '16px',
                            color: '#1D99CC',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        />
                        <p
                          style={{
                            color: '#1D99CC',
                            fontSize: '11px',
                            fontFamily: 'Inter, sans-serif',
                            lineHeight: '1.5',
                          }}
                        >
                          Si seleccionas <strong>Persona Jurídica</strong>, el sistema solicitará
                          automáticamente el RUT y Cámara de Comercio en la postulación.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* INPUT GROUP C: SPECIALIZATION */}
              <div className="mb-10">
                <GroupTitle title="Especialidad Requerida" />

                <div
                  className="rounded p-6"
                  style={{
                    backgroundColor: '#121212',
                    border: '1px solid #333333',
                  }}
                >
                  <div className="flex items-center gap-3 flex-wrap">
                    <SpecialtyChip
                      label="Civil"
                      value="civil"
                      isSelected={selectedSpecialties.includes('civil')}
                      onClick={() => toggleSpecialty('civil')}
                    />
                    <SpecialtyChip
                      label="Eléctrico"
                      value="electrico"
                      isSelected={selectedSpecialties.includes('electrico')}
                      onClick={() => toggleSpecialty('electrico')}
                    />
                    <SpecialtyChip
                      label="Maquinaria"
                      value="maquinaria"
                      isSelected={selectedSpecialties.includes('maquinaria')}
                      onClick={() => toggleSpecialty('maquinaria')}
                    />
                    <SpecialtyChip
                      label="Socio-Ambiental"
                      value="socioambiental"
                      isSelected={selectedSpecialties.includes('socioambiental')}
                      onClick={() => toggleSpecialty('socioambiental')}
                    />
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-2 px-5 py-3 rounded transition-all"
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid #333333',
                    color: '#808080',
                    fontSize: '12px',
                    fontWeight: '600',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#505050';
                    e.currentTarget.style.color = '#B0B0B0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#333333';
                    e.currentTarget.style.color = '#808080';
                  }}
                >
                  Cancelar
                </button>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 rounded transition-all"
                  style={{
                    backgroundColor: '#1D99CC',
                    border: '1px solid #1D99CC',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: '700',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1A8AB8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1D99CC';
                  }}
                >
                  Siguiente: Configurar Items y Pesos
                  <ChevronRight style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: CARGA DOCUMENTAL */}
          {currentStep === 2 && (
            <div className="max-w-5xl">
              <div className="mb-6">
                <h2
                  style={{
                    color: '#FFFFFF',
                    fontSize: '20px',
                    fontWeight: '700',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '4px',
                  }}
                >
                  Carga Documental
                </h2>
                <p
                  style={{
                    color: '#808080',
                    fontSize: '12px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Adjunta el pliego principal y documentos complementarios
                </p>
              </div>

              {/* HERO DROPZONE: MAIN DOCUMENT */}
              <div className="mb-8">
                <h3
                  style={{
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '600',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  Documento Principal del Pliego
                </h3>

                {!mainDocument ? (
                  <div
                    className="rounded cursor-pointer transition-all"
                    style={{
                      backgroundColor: '#0A0A0A',
                      border: '1px dashed #333333',
                      padding: '64px 32px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#1D99CC';
                      e.currentTarget.style.backgroundColor = '#0D0D0D';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#333333';
                      e.currentTarget.style.backgroundColor = '#0A0A0A';
                    }}
                    onClick={() => {
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
                    }}
                  >
                    <div className="flex flex-col items-center gap-4">
                      <Upload
                        style={{
                          width: '48px',
                          height: '48px',
                          color: '#404040',
                        }}
                      />
                      <div className="text-center">
                        <p
                          style={{
                            color: '#B0B0B0',
                            fontSize: '14px',
                            fontWeight: '600',
                            fontFamily: 'Inter, sans-serif',
                            marginBottom: '6px',
                          }}
                        >
                          Arrastra el Pliego de Condiciones
                        </p>
                        <p
                          style={{
                            color: '#606060',
                            fontSize: '11px',
                            fontFamily: 'Inter, sans-serif',
                          }}
                        >
                          o haz clic para buscar (.pdf, .docx)
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="rounded p-6"
                    style={{
                      backgroundColor: '#121212',
                      border: '1px solid #1D99CC',
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className="rounded flex items-center justify-center"
                          style={{
                            width: '48px',
                            height: '48px',
                            backgroundColor: '#1D99CC15',
                          }}
                        >
                          <FileText
                            style={{
                              width: '24px',
                              height: '24px',
                              color: '#1D99CC',
                            }}
                          />
                        </div>
                        <div>
                          <p
                            style={{
                              color: '#FFFFFF',
                              fontSize: '14px',
                              fontWeight: '600',
                              fontFamily: 'Inter, sans-serif',
                              marginBottom: '4px',
                            }}
                          >
                            {mainDocument.name}
                          </p>
                          <p
                            style={{
                              color: '#808080',
                              fontSize: '11px',
                              fontFamily: 'JetBrains Mono, monospace',
                            }}
                          >
                            {(mainDocument.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setMainDocument(null)}
                        className="px-4 py-2 rounded transition-all"
                        style={{
                          backgroundColor: 'transparent',
                          border: '1px solid #333333',
                          color: '#808080',
                          fontSize: '11px',
                          fontWeight: '600',
                          fontFamily: 'Inter, sans-serif',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#1D99CC';
                          e.currentTarget.style.color = '#1D99CC';
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

              {/* ANNEXES GRID: 6 SLOTS */}
              <div className="mb-10">
                <h3
                  style={{
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '600',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  Anexos Técnicos y Formatos{' '}
                  <span style={{ color: '#606060', fontWeight: '400' }}>(Opcional)</span>
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {annexes.map((annex, index) => (
                    <AnnexCard
                      key={index}
                      index={index}
                      file={annex}
                      onUpload={(file) => {
                        const newAnnexes = [...annexes];
                        newAnnexes[index] = file;
                        setAnnexes(newAnnexes);
                      }}
                      onRemove={() => {
                        const newAnnexes = [...annexes];
                        newAnnexes[index] = null;
                        setAnnexes(newAnnexes);
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-5 py-3 rounded transition-all"
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid #333333',
                    color: '#808080',
                    fontSize: '12px',
                    fontWeight: '600',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#505050';
                    e.currentTarget.style.color = '#B0B0B0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#333333';
                    e.currentTarget.style.color = '#808080';
                  }}
                >
                  <ChevronLeft style={{ width: '16px', height: '16px' }} />
                  Atrás
                </button>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 rounded transition-all"
                  style={{
                    backgroundColor: '#1D99CC',
                    border: '1px solid #1D99CC',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: '700',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1A8AB8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1D99CC';
                  }}
                >
                  Siguiente: Configurar Evaluación
                  <ChevronRight style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: REQUISITOS & PESOS */}
          {currentStep === 3 && (
            <div className="max-w-4xl">
              <div className="mb-6">
                <h2
                  style={{
                    color: '#FFFFFF',
                    fontSize: '20px',
                    fontWeight: '700',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '4px',
                  }}
                >
                  Requisitos & Pesos
                </h2>
                <p
                  style={{
                    color: '#808080',
                    fontSize: '12px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Define los requisitos y sus pesos
                </p>
              </div>

              {/* INPUT GROUP A: REQUIREMENTS */}
              <div className="mb-8">
                <GroupTitle title="Requisitos" />

                <div
                  className="rounded p-6"
                  style={{
                    backgroundColor: '#121212',
                    border: '1px solid #333333',
                  }}
                >
                  <div className="space-y-6">
                    {/* Input 1: Nombre del Pliego */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          color: '#B0B0B0',
                          fontSize: '11px',
                          fontWeight: '600',
                          fontFamily: 'Inter, sans-serif',
                          marginBottom: '8px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        Requisitos
                        <span style={{ color: '#FF5252' }}> *</span>
                      </label>
                      <input
                        type="text"
                        value={tenderName}
                        onChange={(e) => setTenderName(e.target.value)}
                        placeholder="Ej: Montaje Eléctrico Fase 1"
                        className="w-full px-4 py-3 rounded transition-all"
                        style={{
                          backgroundColor: '#0A0A0A',
                          border: '1px solid #333333',
                          color: '#FFFFFF',
                          fontSize: '13px',
                          fontFamily: 'Inter, sans-serif',
                          outline: 'none',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#1D99CC';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#333333';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* INPUT GROUP B: WEIGHTS */}
              <div className="mb-8">
                <GroupTitle title="Pesos" />

                <div
                  className="rounded p-6"
                  style={{
                    backgroundColor: '#121212',
                    border: '1px solid #333333',
                  }}
                >
                  <div className="space-y-6">
                    {/* Input 1: Nombre del Pliego */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          color: '#B0B0B0',
                          fontSize: '11px',
                          fontWeight: '600',
                          fontFamily: 'Inter, sans-serif',
                          marginBottom: '8px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        Pesos
                        <span style={{ color: '#FF5252' }}> *</span>
                      </label>
                      <input
                        type="text"
                        value={tenderName}
                        onChange={(e) => setTenderName(e.target.value)}
                        placeholder="Ej: Montaje Eléctrico Fase 1"
                        className="w-full px-4 py-3 rounded transition-all"
                        style={{
                          backgroundColor: '#0A0A0A',
                          border: '1px solid #333333',
                          color: '#FFFFFF',
                          fontSize: '13px',
                          fontFamily: 'Inter, sans-serif',
                          outline: 'none',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#1D99CC';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#333333';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-5 py-3 rounded transition-all"
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid #333333',
                    color: '#808080',
                    fontSize: '12px',
                    fontWeight: '600',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#505050';
                    e.currentTarget.style.color = '#B0B0B0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#333333';
                    e.currentTarget.style.color = '#808080';
                  }}
                >
                  <ChevronLeft style={{ width: '16px', height: '16px' }} />
                  Anterior: Segmentación
                </button>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 rounded transition-all"
                  style={{
                    backgroundColor: '#1D99CC',
                    border: '1px solid #1D99CC',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: '700',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1A8AB8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1D99CC';
                  }}
                >
                  Siguiente: Publicación
                  <ChevronRight style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: PUBLICACIÓN */}
          {currentStep === 4 && (
            <div className="max-w-4xl">
              <div className="text-center py-20">
                <h2
                  style={{
                    color: '#FFFFFF',
                    fontSize: '20px',
                    fontWeight: '700',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '8px',
                  }}
                >
                  Step 4: Publicación
                </h2>
                <p
                  style={{
                    color: '#808080',
                    fontSize: '13px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Configuración pendiente de implementación
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ===== GROUP TITLE =====
function GroupTitle({ title }: { title: string }) {
  return (
    <h3
      style={{
        color: '#FFFFFF',
        fontSize: '14px',
        fontWeight: '700',
        fontFamily: 'Inter, sans-serif',
        marginBottom: '12px',
      }}
    >
      {title}
    </h3>
  );
}

// ===== STEPPER PROGRESS =====
function StepperProgress({ currentStep }: { currentStep: number }) {
  const steps = [
    { number: 1, label: 'Alcance' },
    { number: 2, label: 'Documentos' },
    { number: 3, label: 'Pesos y Calificadores' },
    { number: 4, label: 'Publicación' },
  ];

  return (
    <div className="relative flex items-center justify-center">
      <div className="flex items-center gap-0" style={{ maxWidth: '800px' }}>
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            {/* Step Circle + Label */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="flex items-center justify-center rounded-full transition-all"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: currentStep >= step.number ? '#1D99CC' : '#121212',
                  border: `2px solid ${
                    currentStep >= step.number ? '#1D99CC' : 'rgba(255, 255, 255, 0.05)'
                  }`,
                }}
              >
                <span
                  style={{
                    color: currentStep >= step.number ? '#FFFFFF' : '#808080',
                    fontSize: '14px',
                    fontWeight: '700',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {step.number}
                </span>
              </div>

              <div
                style={{
                  color: currentStep === step.number ? '#FFFFFF' : '#808080',
                  fontSize: '11px',
                  fontWeight: '600',
                  fontFamily: 'Inter, sans-serif',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                }}
              >
                {step.label}
              </div>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                style={{
                  width: '120px',
                  height: '2px',
                  backgroundColor: currentStep > step.number ? '#1D99CC' : 'rgba(255, 255, 255, 0.05)',
                  marginBottom: '32px',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== SPECIALTY CHIP =====
interface SpecialtyChipProps {
  label: string;
  value: Specialty;
  isSelected: boolean;
  onClick: () => void;
}

function SpecialtyChip({ label, isSelected, onClick }: SpecialtyChipProps) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2.5 rounded transition-all"
      style={{
        backgroundColor: isSelected ? '#1D99CC15' : '#0A0A0A',
        border: `1px solid ${isSelected ? '#1D99CC' : '#333333'}`,
        color: isSelected ? '#1D99CC' : '#808080',
        fontSize: '12px',
        fontWeight: '600',
        fontFamily: 'Inter, sans-serif',
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = '#505050';
          e.currentTarget.style.color = '#B0B0B0';
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = '#333333';
          e.currentTarget.style.color = '#808080';
        }
      }}
    >
      {label}
    </button>
  );
}

// ===== ANNEX CARD =====
interface AnnexCardProps {
  index: number;
  file: UploadedFile | null;
  onUpload: (file: UploadedFile) => void;
  onRemove: () => void;
}

function AnnexCard({ index, file, onUpload, onRemove }: AnnexCardProps) {
  const getFileExtension = (filename: string) => {
    const parts = filename.split('.');
    return parts[parts.length - 1].toUpperCase();
  };

  return (
    <div
      className="rounded cursor-pointer transition-all aspect-square"
      style={{
        backgroundColor: file ? '#121212' : '#0A0A0A',
        border: `1px ${file ? 'solid #1D99CC' : 'dashed #333333'}`,
        padding: file ? '16px' : '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onMouseEnter={(e) => {
        if (!file) {
          e.currentTarget.style.borderColor = '#1D99CC';
          e.currentTarget.style.backgroundColor = '#0D0D0D';
        }
      }}
      onMouseLeave={(e) => {
        if (!file) {
          e.currentTarget.style.borderColor = '#333333';
          e.currentTarget.style.backgroundColor = '#0A0A0A';
        }
      }}
      onClick={() => {
        if (!file) {
          const input = document.createElement('input');
          input.type = 'file';
          input.accept = '.pdf,.docx,.xlsx,.dwg';
          input.onchange = (event) => {
            const selectedFile = (event.target as HTMLInputElement).files?.[0];
            if (selectedFile) {
              onUpload({
                name: selectedFile.name,
                size: selectedFile.size,
                type: selectedFile.type,
              });
            }
          };
          input.click();
        }
      }}
    >
      {file ? (
        <div className="flex flex-col items-center w-full gap-3">
          <div
            className="rounded flex items-center justify-center"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#1D99CC15',
            }}
          >
            <FileText
              style={{
                width: '20px',
                height: '20px',
                color: '#1D99CC',
              }}
            />
          </div>
          <div className="text-center flex-1 w-full">
            <div
              className="px-2 py-1 rounded inline-block mb-2"
              style={{
                backgroundColor: '#1D99CC',
                color: '#050505',
                fontSize: '9px',
                fontWeight: '700',
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: '0.5px',
              }}
            >
              {getFileExtension(file.name)}
            </div>
            <p
              style={{
                color: '#FFFFFF',
                fontSize: '11px',
                fontWeight: '600',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '4px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {file.name.length > 20 ? file.name.substring(0, 20) + '...' : file.name}
            </p>
            <p
              style={{
                color: '#606060',
                fontSize: '10px',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="px-3 py-1.5 rounded transition-all w-full"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #333333',
              color: '#808080',
              fontSize: '10px',
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
            Remover
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 h-full">
          <div
            className="rounded-full flex items-center justify-center"
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#121212',
              border: '1px dashed #333333',
            }}
          >
            <span
              style={{
                color: '#606060',
                fontSize: '16px',
                fontWeight: '700',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              +
            </span>
          </div>
          <div className="text-center">
            <p
              style={{
                color: '#808080',
                fontSize: '11px',
                fontWeight: '600',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '2px',
              }}
            >
              Anexo {index + 1}
            </p>
            <p
              style={{
                color: '#606060',
                fontSize: '9px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Click para subir
            </p>
          </div>
        </div>
      )}
    </div>
  );
}