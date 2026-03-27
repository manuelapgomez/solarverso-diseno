import { useState } from 'react';
import { PartnerSidebar } from '../components/PartnerSidebar';
import { TenderApplicationModal } from '../components/TenderApplicationModal';
import { Search, MapPin, Calendar, FileText, Download, X } from 'lucide-react';

interface Opportunity {
  id: string;
  title: string;
  mgsId: string;
  zone: string;
  category: 'Civil' | 'Eléctrico';
  tags: string[];
  closingDate: string;
  budget: string;
  description: string;
  pdfCover: string;
  annexes: {
    id: string;
    name: string;
    size: string;
  }[];
}

const MOCK_OPPORTUNITIES: Opportunity[] = [
  {
    id: 'OPP-001',
    title: 'Obra Civil - MGS Boyacá IV',
    mgsId: 'MGS-BOY-04',
    zone: 'Paipa, Boyacá',
    category: 'Civil',
    tags: ['Tierras', 'Vías', 'Exp. 5 Años'],
    closingDate: '15 Dic 2026',
    budget: '$2.1M USD',
    description: 'Construcción completa de infraestructura civil para Mini Granja Solar en Paipa, Boyacá. Incluye movimiento de tierras, compactación, vías internas, cerramiento perimetral y fundaciones para estructuras de soporte. Se requiere experiencia mínima de 5 años en proyectos de energía renovable.',
    pdfCover: 'Pliego_Condiciones_Civil.pdf',
    annexes: [
      { id: 'A1', name: 'Planos Arquitectónicos.dwg', size: '4.2 MB' },
      { id: 'A2', name: 'Estudio de Suelos.pdf', size: '1.8 MB' },
      { id: 'A3', name: 'Especificaciones Técnicas.pdf', size: '2.1 MB' },
      { id: 'A4', name: 'Cronograma Referencial.xlsx', size: '156 KB' },
      { id: 'A5', name: 'Presupuesto Base.xlsx', size: '228 KB' },
      { id: 'A6', name: 'Matriz de Riesgos.pdf', size: '890 KB' },
      { id: 'A7', name: 'Requisitos SST.pdf', size: '1.2 MB' },
      { id: 'A8', name: 'Formulario Postulación.docx', size: '124 KB' },
    ],
  },
  {
    id: 'OPP-002',
    title: 'Montaje Eléctrico - MGS Cundinamarca III',
    mgsId: 'MGS-CUN-03',
    zone: 'Zipaquirá, Cundinamarca',
    category: 'Eléctrico',
    tags: ['Cableado', 'Inversores', 'Exp. 3 Años'],
    closingDate: '20 Dic 2026',
    budget: '$1.8M USD',
    description: 'Instalación completa del sistema eléctrico para Mini Granja Solar. Incluye tendido de cableado DC/AC, instalación de inversores, transformadores, subestación y conexión a red. Certificación RETIE obligatoria.',
    pdfCover: 'Pliego_Condiciones_Electrico.pdf',
    annexes: [
      { id: 'B1', name: 'Diagrama Unifilar.pdf', size: '3.1 MB' },
      { id: 'B2', name: 'Lista de Equipos.xlsx', size: '445 KB' },
      { id: 'B3', name: 'Especificaciones Técnicas.pdf', size: '1.9 MB' },
      { id: 'B4', name: 'Planos Eléctricos.dwg', size: '5.2 MB' },
      { id: 'B5', name: 'Presupuesto Base.xlsx', size: '198 KB' },
      { id: 'B6', name: 'Requisitos RETIE.pdf', size: '2.4 MB' },
      { id: 'B7', name: 'Cronograma.xlsx', size: '167 KB' },
      { id: 'B8', name: 'Formulario Postulación.docx', size: '124 KB' },
    ],
  },
  {
    id: 'OPP-003',
    title: 'Obra Civil - MGS Santander II',
    mgsId: 'MGS-SAN-02',
    zone: 'Floridablanca, Santander',
    category: 'Civil',
    tags: ['Fundaciones', 'Estructuras', 'Exp. 5 Años'],
    closingDate: '18 Dic 2026',
    budget: '$2.3M USD',
    description: 'Construcción de infraestructura civil completa para proyecto solar. Incluye excavaciones, fundaciones, vías de acceso, drenajes y obras complementarias. Proyecto en zona de alta complejidad geotécnica.',
    pdfCover: 'Pliego_Condiciones_Civil.pdf',
    annexes: [
      { id: 'C1', name: 'Planos Generales.dwg', size: '6.8 MB' },
      { id: 'C2', name: 'Estudio Geotécnico.pdf', size: '3.2 MB' },
      { id: 'C3', name: 'Especificaciones.pdf', size: '2.5 MB' },
      { id: 'C4', name: 'Presupuesto.xlsx', size: '312 KB' },
      { id: 'C5', name: 'Cronograma.xlsx', size: '189 KB' },
      { id: 'C6', name: 'Requisitos SST.pdf', size: '1.4 MB' },
      { id: 'C7', name: 'Plan de Calidad.pdf', size: '980 KB' },
      { id: 'C8', name: 'Formulario.docx', size: '124 KB' },
    ],
  },
  {
    id: 'OPP-004',
    title: 'Montaje Eléctrico - MGS Antioquia I',
    mgsId: 'MGS-ANT-01',
    zone: 'Medellín, Antioquia',
    category: 'Eléctrico',
    tags: ['Alta Tensión', 'Subestación', 'Exp. 5 Años'],
    closingDate: '22 Dic 2026',
    budget: '$2.0M USD',
    description: 'Instalación eléctrica de alta complejidad. Incluye subestación 34.5kV, sistema de media tensión, inversores centrales y sistema SCADA. Requiere experiencia certificada en proyectos similares.',
    pdfCover: 'Pliego_Condiciones_Electrico.pdf',
    annexes: [
      { id: 'D1', name: 'Diagrama Unifilar.pdf', size: '4.5 MB' },
      { id: 'D2', name: 'Especificaciones SCADA.pdf', size: '2.8 MB' },
      { id: 'D3', name: 'Lista Equipos.xlsx', size: '567 KB' },
      { id: 'D4', name: 'Planos Subestación.dwg', size: '7.2 MB' },
      { id: 'D5', name: 'Presupuesto.xlsx', size: '421 KB' },
      { id: 'D6', name: 'Requisitos RETIE.pdf', size: '3.1 MB' },
      { id: 'D7', name: 'Cronograma.xlsx', size: '234 KB' },
      { id: 'D8', name: 'Formulario.docx', size: '124 KB' },
    ],
  },
  {
    id: 'OPP-005',
    title: 'Obra Civil - MGS Boyacá I',
    mgsId: 'MGS-BOY-01',
    zone: 'Tunja, Boyacá',
    category: 'Civil',
    tags: ['Movimiento Tierras', 'Compactación', 'Exp. 3 Años'],
    closingDate: '10 Dic 2026',
    budget: '$1.9M USD',
    description: 'Obras civiles preliminares y principales para proyecto solar. Incluye desmonte, descapote, movimiento de tierras, nivelación, compactación y conformación de vías internas.',
    pdfCover: 'Pliego_Condiciones_Civil.pdf',
    annexes: [
      { id: 'E1', name: 'Planos Topográficos.dwg', size: '5.4 MB' },
      { id: 'E2', name: 'Estudio Suelos.pdf', size: '2.1 MB' },
      { id: 'E3', name: 'Especificaciones.pdf', size: '1.7 MB' },
      { id: 'E4', name: 'Presupuesto.xlsx', size: '278 KB' },
      { id: 'E5', name: 'Cronograma.xlsx', size: '145 KB' },
      { id: 'E6', name: 'Plan Ambiental.pdf', size: '1.9 MB' },
      { id: 'E7', name: 'Requisitos SST.pdf', size: '1.1 MB' },
      { id: 'E8', name: 'Formulario.docx', size: '124 KB' },
    ],
  },
  {
    id: 'OPP-006',
    title: 'Montaje Eléctrico - MGS Boyacá III',
    mgsId: 'MGS-BOY-03',
    zone: 'Sogamoso, Boyacá',
    category: 'Eléctrico',
    tags: ['Inversores', 'Cableado MT', 'Exp. 3 Años'],
    closingDate: '25 Dic 2026',
    budget: '$1.6M USD',
    description: 'Instalación del sistema eléctrico completo. Incluye cableado DC/AC, instalación de inversores string, tableros de control, sistema de monitoreo y conexión a red en media tensión.',
    pdfCover: 'Pliego_Condiciones_Electrico.pdf',
    annexes: [
      { id: 'F1', name: 'Diagrama Unifilar.pdf', size: '2.9 MB' },
      { id: 'F2', name: 'Lista Equipos.xlsx', size: '398 KB' },
      { id: 'F3', name: 'Especificaciones.pdf', size: '1.8 MB' },
      { id: 'F4', name: 'Planos Eléctricos.dwg', size: '4.8 MB' },
      { id: 'F5', name: 'Presupuesto.xlsx', size: '212 KB' },
      { id: 'F6', name: 'Requisitos RETIE.pdf', size: '2.2 MB' },
      { id: 'F7', name: 'Cronograma.xlsx', size: '156 KB' },
      { id: 'F8', name: 'Formulario.docx', size: '124 KB' },
    ],
  },
];

export default function OpportunityMarketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredOpportunities = MOCK_OPPORTUNITIES.filter((opp) => {
    const query = searchQuery.toLowerCase();
    return (
      opp.title.toLowerCase().includes(query) ||
      opp.mgsId.toLowerCase().includes(query) ||
      opp.zone.toLowerCase().includes(query) ||
      opp.category.toLowerCase().includes(query)
    );
  });

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: '#080808',
      }}
    >
      {/* Sidebar */}
      <PartnerSidebar />

      {/* Main Content */}
      <div
        className="flex-1 flex flex-col"
        style={{
          marginLeft: '220px',
        }}
      >
        {/* Header with Search */}
        <div
          className="px-6 py-4"
          style={{
            borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div className="flex items-center gap-3">
            <Search
              style={{
                width: '16px',
                height: '16px',
                color: '#606060',
              }}
            />
            <input
              type="text"
              placeholder="Buscar por MGS, Zona o Especialidad (Civil/Eléctrico)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none"
              style={{
                color: '#FFFFFF',
                fontSize: '12px',
              }}
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          {!selectedOpportunity ? (
            <>
              {/* Headline */}
              <div className="mb-6">
                <h1
                  style={{
                    color: '#FFFFFF',
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '4px',
                  }}
                >
                  Oportunidades Disponibles en 84 MGS
                </h1>
                <div
                  style={{
                    color: '#808080',
                    fontSize: '11px',
                  }}
                >
                  {filteredOpportunities.length} licitaciones activas
                </div>
              </div>

              {/* Job Grid */}
              <div className="grid grid-cols-3 gap-4">
                {filteredOpportunities.map((opp) => (
                  <div
                    key={opp.id}
                    className="rounded cursor-pointer transition-all"
                    style={{
                      backgroundColor: '#1A1A1A',
                      border: '0.5px solid rgba(255, 255, 255, 0.05)',
                    }}
                    onClick={() => setSelectedOpportunity(opp)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.backgroundColor = '#1E1E1E';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.backgroundColor = '#1A1A1A';
                    }}
                  >
                    <div className="p-4">
                      {/* Title */}
                      <div
                        className="mb-3"
                        style={{
                          color: '#FFFFFF',
                          fontSize: '13px',
                          fontWeight: '600',
                        }}
                      >
                        {opp.title}
                      </div>

                      {/* MGS ID */}
                      <div
                        className="mb-3"
                        style={{
                          color: '#1D99CC',
                          fontSize: '11px',
                          fontFamily: 'JetBrains Mono, monospace',
                          fontWeight: '600',
                        }}
                      >
                        {opp.mgsId}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {opp.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded"
                            style={{
                              backgroundColor: '#252525',
                              color: '#B0B0B0',
                              fontSize: '10px',
                              fontWeight: '500',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Zone */}
                      <div
                        className="flex items-center gap-2 mb-2"
                        style={{
                          color: '#808080',
                          fontSize: '11px',
                        }}
                      >
                        <MapPin style={{ width: '12px', height: '12px' }} />
                        {opp.zone}
                      </div>

                      {/* Closing Date */}
                      <div
                        className="flex items-center gap-2 mb-4 pb-3"
                        style={{
                          color: '#808080',
                          fontSize: '11px',
                          borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
                        }}
                      >
                        <Calendar style={{ width: '12px', height: '12px' }} />
                        Cierre: {opp.closingDate}
                      </div>

                      {/* Button */}
                      <button
                        className="w-full rounded transition-colors"
                        style={{
                          height: '28px',
                          backgroundColor: 'transparent',
                          border: '0.5px solid rgba(255, 255, 255, 0.08)',
                          color: '#B0B0B0',
                          fontSize: '11px',
                          fontWeight: '500',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#252525';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        Ver Detalle
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            // Detail View - Split Panel
            <div className="flex gap-6 h-full">
              {/* Left Panel - Description */}
              <div className="flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h2
                      style={{
                        color: '#FFFFFF',
                        fontSize: '18px',
                        fontWeight: '600',
                        marginBottom: '8px',
                      }}
                    >
                      {selectedOpportunity.title}
                    </h2>
                    <div
                      style={{
                        color: '#1D99CC',
                        fontSize: '12px',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontWeight: '600',
                      }}
                    >
                      {selectedOpportunity.mgsId}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedOpportunity(null)}
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

                {/* Metadata */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div
                      style={{
                        color: '#606060',
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px',
                      }}
                    >
                      Zona
                    </div>
                    <div
                      style={{
                        color: '#B0B0B0',
                        fontSize: '12px',
                      }}
                    >
                      {selectedOpportunity.zone}
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        color: '#606060',
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px',
                      }}
                    >
                      Presupuesto
                    </div>
                    <div
                      style={{
                        color: '#00C853',
                        fontSize: '12px',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontWeight: '600',
                      }}
                    >
                      {selectedOpportunity.budget}
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        color: '#606060',
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px',
                      }}
                    >
                      Cierre
                    </div>
                    <div
                      style={{
                        color: '#B0B0B0',
                        fontSize: '12px',
                      }}
                    >
                      {selectedOpportunity.closingDate}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div
                  className="p-4 rounded mb-6"
                  style={{
                    backgroundColor: '#1A1A1A',
                    border: '0.5px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div
                    style={{
                      color: '#606060',
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '12px',
                    }}
                  >
                    Descripción del Proyecto
                  </div>
                  <div
                    style={{
                      color: '#B0B0B0',
                      fontSize: '12px',
                      lineHeight: '1.6',
                    }}
                  >
                    {selectedOpportunity.description}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedOpportunity.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded"
                      style={{
                        backgroundColor: '#252525',
                        color: '#B0B0B0',
                        fontSize: '11px',
                        fontWeight: '500',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Panel - Resources */}
              <div
                className="shrink-0"
                style={{
                  width: '380px',
                }}
              >
                {/* PDF Previewer */}
                <div
                  className="rounded mb-6"
                  style={{
                    backgroundColor: '#1A1A1A',
                    border: '0.5px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div className="p-4">
                    <div
                      style={{
                        color: '#606060',
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '12px',
                      }}
                    >
                      Pliego Principal
                    </div>

                    {/* PDF Cover Mockup */}
                    <div
                      className="rounded flex items-center justify-center mb-3"
                      style={{
                        height: '200px',
                        backgroundColor: '#252525',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <div className="text-center">
                        <FileText
                          style={{
                            width: '48px',
                            height: '48px',
                            color: '#606060',
                            margin: '0 auto 12px',
                          }}
                        />
                        <div
                          style={{
                            color: '#B0B0B0',
                            fontSize: '12px',
                            fontWeight: '600',
                          }}
                        >
                          {selectedOpportunity.pdfCover}
                        </div>
                      </div>
                    </div>

                    <button
                      className="w-full rounded transition-colors flex items-center justify-center gap-2"
                      style={{
                        height: '32px',
                        backgroundColor: 'transparent',
                        border: '0.5px solid rgba(255, 255, 255, 0.08)',
                        color: '#B0B0B0',
                        fontSize: '11px',
                        fontWeight: '500',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#252525';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <Download style={{ width: '14px', height: '14px' }} />
                      Descargar PDF
                    </button>
                  </div>
                </div>

                {/* Annex List */}
                <div
                  className="rounded mb-6"
                  style={{
                    backgroundColor: '#1A1A1A',
                    border: '0.5px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div className="p-4">
                    <div
                      style={{
                        color: '#606060',
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '12px',
                      }}
                    >
                      Anexos ({selectedOpportunity.annexes.length})
                    </div>

                    <div className="space-y-1">
                      {selectedOpportunity.annexes.map((annex) => (
                        <button
                          key={annex.id}
                          className="w-full flex items-center justify-between px-3 py-2 rounded transition-colors"
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            textAlign: 'left',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#252525';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          <div className="flex-1 min-w-0">
                            <div
                              className="truncate"
                              style={{
                                color: '#B0B0B0',
                                fontSize: '11px',
                              }}
                            >
                              {annex.name}
                            </div>
                            <div
                              style={{
                                color: '#606060',
                                fontSize: '10px',
                                fontFamily: 'JetBrains Mono, monospace',
                              }}
                            >
                              {annex.size}
                            </div>
                          </div>

                          <Download
                            style={{
                              width: '14px',
                              height: '14px',
                              color: '#606060',
                              flexShrink: 0,
                              marginLeft: '8px',
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary Action */}
                <button
                  className="w-full rounded transition-colors"
                  style={{
                    height: '40px',
                    backgroundColor: '#1D99CC',
                    border: 'none',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '600',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1B8AB8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1D99CC';
                  }}
                  onClick={() => setIsModalOpen(true)}
                >
                  Aplicar a este Pliego
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tender Application Modal */}
      <TenderApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        opportunity={selectedOpportunity}
      />
    </div>
  );
}