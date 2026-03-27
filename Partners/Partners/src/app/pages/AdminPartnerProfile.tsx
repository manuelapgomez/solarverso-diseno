import React, { useState } from 'react';
import { AdminSidebar } from '../components/AdminSidebar';
import {
  ChevronLeft,
  Edit3,
  Shield,
  Hammer,
  Eye,
  Upload,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock,
  ExternalLink,
  Users,
  Star,
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router';

type DocumentStatus = 'vigente' | 'proximo-vencer' | 'vencido' | 'faltante';
type DocumentCategory = 'sst' | 'legal' | 'financiero' | 'ambiental' | 'equipos';

interface Document {
  id: string;
  name: string;
  status: DocumentStatus;
  category: DocumentCategory;
  expiryDate?: string;
  lastUpdated?: string;
}

interface Project {
  id: string;
  mgsId: string;
  name: string;
  phase: string;
  progress: number;
  personnelCount: number;
  tasksTotal: number;
  tasksCompleted: number;
}

interface TenderApplication {
  id: string;
  mgsId: string;
  tenderName: string;
  status: 'postulado' | 'revision' | 'evaluacion' | 'aceptado' | 'rechazado';
  score: number;
  lastComment: string;
  date: string;
}

// MOCK DATA - 68 documents
const MOCK_DOCUMENTS: Document[] = [
  // Legal (12 docs)
  { id: 'DOC-L-001', name: 'RUT Actualizado', status: 'vigente', category: 'legal', lastUpdated: '05 Nov 2026' },
  { id: 'DOC-L-002', name: 'Cámara de Comercio', status: 'proximo-vencer', category: 'legal', expiryDate: '17 Dic 2026' },
  { id: 'DOC-L-003', name: 'Certificado Existencia y Representación Legal', status: 'vigente', category: 'legal', lastUpdated: '01 Dic 2026' },
  { id: 'DOC-L-004', name: 'Estatutos Sociales', status: 'vigente', category: 'legal', lastUpdated: '15 Oct 2026' },
  { id: 'DOC-L-005', name: 'Acta de Constitución', status: 'vigente', category: 'legal', lastUpdated: '10 Sep 2026' },
  { id: 'DOC-L-006', name: 'Poder del Representante Legal', status: 'vigente', category: 'legal', lastUpdated: '20 Nov 2026' },
  { id: 'DOC-L-007', name: 'Certificado de Antecedentes Disciplinarios', status: 'vigente', category: 'legal', lastUpdated: '12 Nov 2026' },
  { id: 'DOC-L-008', name: 'Registro Mercantil', status: 'vigente', category: 'legal', lastUpdated: '08 Dic 2026' },
  { id: 'DOC-L-009', name: 'Certificado de Contraloría', status: 'vigente', category: 'legal', lastUpdated: '25 Nov 2026' },
  { id: 'DOC-L-010', name: 'Certificado de Procuraduría', status: 'vigente', category: 'legal', lastUpdated: '22 Nov 2026' },
  { id: 'DOC-L-011', name: 'Referencias Comerciales', status: 'vigente', category: 'legal', lastUpdated: '18 Nov 2026' },
  { id: 'DOC-L-012', name: 'Referencias Bancarias', status: 'vigente', category: 'legal', lastUpdated: '14 Nov 2026' },

  // Financiero (10 docs)
  { id: 'DOC-F-001', name: 'Estados Financieros 2025', status: 'vigente', category: 'financiero', lastUpdated: '30 Nov 2026' },
  { id: 'DOC-F-002', name: 'Balance General', status: 'vigente', category: 'financiero', lastUpdated: '28 Nov 2026' },
  { id: 'DOC-F-003', name: 'Estado de Resultados', status: 'vigente', category: 'financiero', lastUpdated: '28 Nov 2026' },
  { id: 'DOC-F-004', name: 'Flujo de Caja Proyectado', status: 'vigente', category: 'financiero', lastUpdated: '25 Nov 2026' },
  { id: 'DOC-F-005', name: 'Certificación de Ingresos', status: 'vigente', category: 'financiero', lastUpdated: '20 Nov 2026' },
  { id: 'DOC-F-006', name: 'Declaración de Renta 2025', status: 'vigente', category: 'financiero', lastUpdated: '10 Nov 2026' },
  { id: 'DOC-F-007', name: 'Certificado Revisor Fiscal', status: 'vigente', category: 'financiero', lastUpdated: '05 Dic 2026' },
  { id: 'DOC-F-008', name: 'Pago de Seguridad Social', status: 'vigente', category: 'financiero', lastUpdated: '01 Dic 2026' },
  { id: 'DOC-F-009', name: 'Pago de Parafiscales', status: 'vigente', category: 'financiero', lastUpdated: '01 Dic 2026' },
  { id: 'DOC-F-010', name: 'Certificado Paz y Salvo DIAN', status: 'vigente', category: 'financiero', lastUpdated: '15 Nov 2026' },

  // SST (20 docs)
  { id: 'DOC-S-001', name: 'Póliza de Responsabilidad Civil Extracontractual', status: 'vencido', category: 'sst', expiryDate: '10 Dic 2026' },
  { id: 'DOC-S-002', name: 'ARL Vigente', status: 'vigente', category: 'sst', lastUpdated: '01 Dic 2026' },
  { id: 'DOC-S-003', name: 'Sistema de Gestión de Seguridad y Salud en el Trabajo', status: 'vigente', category: 'sst', lastUpdated: '15 Nov 2026' },
  { id: 'DOC-S-004', name: 'Matriz de Identificación de Peligros y Riesgos', status: 'vigente', category: 'sst', lastUpdated: '10 Nov 2026' },
  { id: 'DOC-S-005', name: 'Plan de Emergencias', status: 'vigente', category: 'sst', lastUpdated: '08 Nov 2026' },
  { id: 'DOC-S-006', name: 'Programa de Capacitación SST', status: 'vigente', category: 'sst', lastUpdated: '12 Nov 2026' },
  { id: 'DOC-S-007', name: 'Profesiograma', status: 'vigente', category: 'sst', lastUpdated: '20 Oct 2026' },
  { id: 'DOC-S-008', name: 'Exámenes Médicos Ocupacionales', status: 'vigente', category: 'sst', lastUpdated: '05 Dic 2026' },
  { id: 'DOC-S-009', name: 'Certificación Trabajo en Alturas - Personal', status: 'proximo-vencer', category: 'sst', expiryDate: '20 Dic 2026' },
  { id: 'DOC-S-010', name: 'Certificación Espacios Confinados', status: 'vigente', category: 'sst', lastUpdated: '18 Nov 2026' },
  { id: 'DOC-S-011', name: 'Actas COPASST', status: 'vigente', category: 'sst', lastUpdated: '01 Dic 2026' },
  { id: 'DOC-S-012', name: 'Actas Comité de Convivencia Laboral', status: 'vigente', category: 'sst', lastUpdated: '01 Dic 2026' },
  { id: 'DOC-S-013', name: 'Reglamento de Higiene y Seguridad Industrial', status: 'vigente', category: 'sst', lastUpdated: '10 Oct 2026' },
  { id: 'DOC-S-014', name: 'Inventario de Elementos de Protección Personal', status: 'vigente', category: 'sst', lastUpdated: '03 Dic 2026' },
  { id: 'DOC-S-015', name: 'Control de Entrega de EPP', status: 'vigente', category: 'sst', lastUpdated: '02 Dic 2026' },
  { id: 'DOC-S-016', name: 'Inspecciones de Seguridad', status: 'vigente', category: 'sst', lastUpdated: '28 Nov 2026' },
  { id: 'DOC-S-017', name: 'Investigación de Incidentes y Accidentes', status: 'vigente', category: 'sst', lastUpdated: '25 Nov 2026' },
  { id: 'DOC-S-018', name: 'Indicadores de Gestión SST', status: 'vigente', category: 'sst', lastUpdated: '30 Nov 2026' },
  { id: 'DOC-S-019', name: 'Auditoría Interna del Sistema SST', status: 'vigente', category: 'sst', lastUpdated: '15 Nov 2026' },
  { id: 'DOC-S-020', name: 'Plan de Mejoramiento SST', status: 'vigente', category: 'sst', lastUpdated: '16 Nov 2026' },

  // Ambiental (13 docs)
  { id: 'DOC-A-001', name: 'Licencia Ambiental', status: 'vigente', category: 'ambiental', lastUpdated: '10 Nov 2026' },
  { id: 'DOC-A-002', name: 'Plan de Manejo Ambiental', status: 'vigente', category: 'ambiental', lastUpdated: '12 Nov 2026' },
  { id: 'DOC-A-003', name: 'Programa de Gestión de Residuos', status: 'vigente', category: 'ambiental', lastUpdated: '05 Dic 2026' },
  { id: 'DOC-A-004', name: 'Certificados de Disposición Final de Residuos', status: 'vigente', category: 'ambiental', lastUpdated: '02 Dic 2026' },
  { id: 'DOC-A-005', name: 'Control de Emisiones Atmosféricas', status: 'vigente', category: 'ambiental', lastUpdated: '28 Nov 2026' },
  { id: 'DOC-A-006', name: 'Monitoreo de Ruido Ambiental', status: 'vigente', category: 'ambiental', lastUpdated: '25 Nov 2026' },
  { id: 'DOC-A-007', name: 'Permiso de Vertimientos', status: 'vigente', category: 'ambiental', lastUpdated: '20 Nov 2026' },
  { id: 'DOC-A-008', name: 'Certificación Manejo de RESPEL', status: 'vigente', category: 'ambiental', lastUpdated: '18 Nov 2026' },
  { id: 'DOC-A-009', name: 'Plan de Contingencia Ambiental', status: 'vigente', category: 'ambiental', lastUpdated: '15 Nov 2026' },
  { id: 'DOC-A-010', name: 'Capacitación Ambiental Personal', status: 'vigente', category: 'ambiental', lastUpdated: '10 Nov 2026' },
  { id: 'DOC-A-011', name: 'Indicadores de Gestión Ambiental', status: 'vigente', category: 'ambiental', lastUpdated: '30 Nov 2026' },
  { id: 'DOC-A-012', name: 'Auditoría Ambiental', status: 'vigente', category: 'ambiental', lastUpdated: '08 Nov 2026' },
  { id: 'DOC-A-013', name: 'Matriz de Aspectos e Impactos Ambientales', status: 'vigente', category: 'ambiental', lastUpdated: '05 Nov 2026' },

  // Equipos (13 docs)
  { id: 'DOC-E-001', name: 'Certificado RETIE Equipos Eléctricos', status: 'vigente', category: 'equipos', lastUpdated: '20 Nov 2026' },
  { id: 'DOC-E-002', name: 'Programa de Mantenimiento de Equipos', status: 'vigente', category: 'equipos', lastUpdated: '03 Dic 2026' },
  { id: 'DOC-E-003', name: 'Inventario de Herramientas y Equipos', status: 'vigente', category: 'equipos', lastUpdated: '01 Dic 2026' },
  { id: 'DOC-E-004', name: 'Certificados de Calibración', status: 'vigente', category: 'equipos', lastUpdated: '28 Nov 2026' },
  { id: 'DOC-E-005', name: 'Hojas de Vida de Equipos', status: 'vigente', category: 'equipos', lastUpdated: '25 Nov 2026' },
  { id: 'DOC-E-006', name: 'SOAT Vehículos', status: 'vigente', category: 'equipos', lastUpdated: '22 Nov 2026' },
  { id: 'DOC-E-007', name: 'Revisión Tecnomecánica', status: 'proximo-vencer', category: 'equipos', expiryDate: '25 Dic 2026' },
  { id: 'DOC-E-008', name: 'Póliza de Seguros Vehículos', status: 'vigente', category: 'equipos', lastUpdated: '15 Nov 2026' },
  { id: 'DOC-E-009', name: 'Inspecciones Pre-operacionales de Equipos', status: 'vigente', category: 'equipos', lastUpdated: '04 Dic 2026' },
  { id: 'DOC-E-010', name: 'Certificación de Operadores de Equipos', status: 'vigente', category: 'equipos', lastUpdated: '01 Dic 2026' },
  { id: 'DOC-E-011', name: 'Control de Combustible y Lubricantes', status: 'vigente', category: 'equipos', lastUpdated: '05 Dic 2026' },
  { id: 'DOC-E-012', name: 'Bitácora de Mantenimiento', status: 'vigente', category: 'equipos', lastUpdated: '03 Dic 2026' },
  { id: 'DOC-E-013', name: 'Plan de Reposición de Equipos', status: 'vigente', category: 'equipos', lastUpdated: '10 Nov 2026' },
];

const MOCK_PROJECTS: Project[] = [
  {
    id: 'mgs-ant-02',
    mgsId: 'MGS-ANT-02',
    name: 'Montaje Eléctrico Antioquia II',
    phase: 'Obra Civil',
    progress: 65,
    personnelCount: 12,
    tasksTotal: 8,
    tasksCompleted: 2,
  },
  {
    id: 'mgs-boy-01',
    mgsId: 'MGS-BOY-01',
    name: 'Sistema Solar Boyacá Centro',
    phase: 'Montaje Eléctrico',
    progress: 42,
    personnelCount: 6,
    tasksTotal: 4,
    tasksCompleted: 1,
  },
  {
    id: 'mgs-cun-03',
    mgsId: 'MGS-CUN-03',
    name: 'Instalación Fotovoltaica Cundinamarca',
    phase: 'Ingeniería de Detalle',
    progress: 28,
    personnelCount: 4,
    tasksTotal: 6,
    tasksCompleted: 0,
  },
];

const MOCK_TENDER_APPLICATIONS: TenderApplication[] = [
  {
    id: 'APP-001',
    mgsId: 'MGS-BOY-05',
    tenderName: 'Instalación Sistema Montaje Solar - Valle del Cauca',
    status: 'evaluacion',
    score: 88,
    lastComment: 'Documentación completa - En evaluación técnica',
    date: '10 Feb 2026',
  },
  {
    id: 'APP-002',
    mgsId: 'MGS-CUN-12',
    tenderName: 'Obra Civil - Preparación Terreno Solar 50 Ha',
    status: 'aceptado',
    score: 92,
    lastComment: 'Aprobado - Iniciar contratación',
    date: '05 Feb 2026',
  },
  {
    id: 'APP-003',
    mgsId: 'MGS-ANT-08',
    tenderName: 'Servicio Maquinaria Amarilla - Adecuación',
    status: 'revision',
    score: 85,
    lastComment: 'Pendiente certificación de seguros',
    date: '08 Feb 2026',
  },
  {
    id: 'APP-004',
    mgsId: 'MGS-VAL-03',
    tenderName: 'Suministro Equipos de Protección Personal',
    status: 'rechazado',
    score: 62,
    lastComment: 'No cumple experiencia mínima requerida',
    date: '02 Feb 2026',
  },
];

type PipelineFilter = 'todos' | 'abiertos' | 'calificados' | 'aceptados' | 'rechazados';

export default function AdminPartnerProfile() {
  const navigate = useNavigate();
  const { partnerId } = useParams<{ partnerId: string }>();
  const [pipelineFilter, setPipelineFilter] = useState<PipelineFilter>('todos');

  // Partner data
  const partnerName = 'Construcciones Eléctricas SAS';
  const partnerNIT = '900.123.456-7';
  const partnerRepresentante = 'Juan Pérez';
  const partnerUbicacion = 'Medellín, ANT';
  const partnerPersonal = '24 Operarios';
  const sstScore = 86;

  const documentCounts = {
    vigentes: MOCK_DOCUMENTS.filter((d) => d.status === 'vigente').length,
    proximosVencer: MOCK_DOCUMENTS.filter((d) => d.status === 'proximo-vencer').length,
    vencidos: MOCK_DOCUMENTS.filter((d) => d.status === 'vencido').length,
    faltantes: MOCK_DOCUMENTS.filter((d) => d.status === 'faltante').length,
  };

  const filteredApplications =
    pipelineFilter === 'todos'
      ? MOCK_TENDER_APPLICATIONS
      : pipelineFilter === 'abiertos'
      ? MOCK_TENDER_APPLICATIONS.filter((app) => app.status === 'postulado' || app.status === 'revision')
      : pipelineFilter === 'calificados'
      ? MOCK_TENDER_APPLICATIONS.filter((app) => app.status === 'evaluacion')
      : pipelineFilter === 'aceptados'
      ? MOCK_TENDER_APPLICATIONS.filter((app) => app.status === 'aceptado')
      : MOCK_TENDER_APPLICATIONS.filter((app) => app.status === 'rechazado');

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
        {/* ===== SECTION 1: HEADER (IDENTITY LAYER) ===== */}
        <div
          style={{
            backgroundColor: '#0A0A0A',
            borderBottom: '1px solid #222222',
            padding: '42px 36px',
          }}
        >
          <div className="flex items-start justify-between">
            {/* Left: Logo + Identity */}
            <div className="flex items-start gap-6">
              {/* Logo Square */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: '96px',
                  height: '96px',
                  backgroundColor: '#0A0A0A',
                  border: '2px solid #1D99CC',
                  borderRadius: '8px',
                }}
              >
                <span
                  style={{
                    color: '#1D99CC',
                    fontSize: '36px',
                    fontWeight: '700',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  CE
                </span>
              </div>

              {/* Identity Content */}
              <div>
                {/* Partner Name + Verified Badge */}
                <div className="flex items-center gap-3 mb-3">
                  <h1
                    style={{
                      color: '#E0E0E0',
                      fontSize: '28px',
                      fontWeight: '700',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {partnerName}
                  </h1>
                  <Shield
                    style={{
                      width: '20px',
                      height: '20px',
                      color: '#1D99CC',
                      fill: '#1D99CC',
                    }}
                  />
                </div>

                {/* Description */}
                <p
                  style={{
                    color: '#B0B0B0',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    maxWidth: '714px',
                    marginBottom: '20px',
                  }}
                >
                  Especialistas en montaje fotovoltaico y obra civil para MGS. +5 años de experiencia en el sector
                  energético, con certificaciones ISO 9001 y equipo técnico altamente calificado.
                </p>

                {/* Action Tags */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 rounded"
                    style={{
                      backgroundColor: 'rgba(29, 153, 204, 0.15)',
                      border: '1px solid #1D99CC',
                    }}
                  >
                    <Shield style={{ width: '14px', height: '14px', color: '#1D99CC' }} />
                    <span
                      style={{
                        color: '#1D99CC',
                        fontSize: '11px',
                        fontWeight: '600',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      Verified Partner
                    </span>
                  </div>
                  <div
                    className="px-3 py-1.5 rounded"
                    style={{
                      backgroundColor: 'rgba(0, 200, 83, 0.15)',
                      border: '1px solid #00C853',
                      color: '#00C853',
                      fontSize: '11px',
                      fontWeight: '600',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    Score: {sstScore}% SST
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Technical Info + Document Status */}
            <div
              style={{
                width: '280px',
                flexShrink: 0,
              }}
            >
              {/* Technical Info Box */}
              <div
                className="p-5 rounded mb-4"
                style={{
                  backgroundColor: '#121212',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <h3
                  style={{
                    color: '#808080',
                    fontSize: '10px',
                    fontWeight: '700',
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  Información Técnica
                </h3>

                <div className="space-y-3">
                  <InfoRow label="NIT" value={partnerNIT} />
                  <InfoRow label="Representante Legal" value={partnerRepresentante} />
                  <InfoRow label="Ubicación" value={partnerUbicacion} />
                  <InfoRow label="Personal Activo" value={partnerPersonal} />
                </div>
              </div>

              {/* Document Status Summary */}
              <div
                className="p-5 rounded"
                style={{
                  backgroundColor: '#121212',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <h3
                  style={{
                    color: '#808080',
                    fontSize: '10px',
                    fontWeight: '700',
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  Estado de Documentos
                </h3>

                <div className="space-y-2">
                  <DocumentStatusRow label="Vigentes" count={documentCounts.vigentes} color="#00C853" />
                  <DocumentStatusRow label="Próximos a Vencer" count={documentCounts.proximosVencer} color="#FF9800" />
                  <DocumentStatusRow label="Vencidos" count={documentCounts.vencidos} color="#FF5252" />
                  <DocumentStatusRow label="Faltantes" count={documentCounts.faltantes} color="#606060" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SECTION 2: PROYECTOS MGS ASOCIADOS (PRESERVATION LAYER) ===== */}
        <div
          style={{
            padding: '32px 36px',
            borderBottom: '1px solid #222222',
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Hammer style={{ width: '18px', height: '18px', color: '#1D99CC' }} />
            <h2
              style={{
                color: '#FFFFFF',
                fontSize: '18px',
                fontWeight: '700',
              }}
            >
              Proyectos MGS Asociados
            </h2>
          </div>

          {/* PROJECT GRID - PRESERVED */}
          <div className="grid grid-cols-3 gap-4">
            {MOCK_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* ===== SECTION 3: HISTORIAL DE POSTULACIONES (DATA LAYER - NEW) ===== */}
        <div
          style={{
            padding: '32px 36px',
            borderBottom: '1px solid #222222',
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
            Historial de Postulaciones a Pliegos
          </h2>

          {/* Horizontal Filter Tabs */}
          <div className="flex items-center gap-2 mb-6">
            {(['todos', 'abiertos', 'calificados', 'aceptados', 'rechazados'] as PipelineFilter[]).map((filter) => {
              const isActive = pipelineFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setPipelineFilter(filter)}
                  className="px-4 py-2 rounded transition-all"
                  style={{
                    backgroundColor: isActive ? 'rgba(29, 153, 204, 0.15)' : 'transparent',
                    border: isActive ? '1px solid #1D99CC' : '1px solid rgba(255, 255, 255, 0.05)',
                    color: isActive ? '#1D99CC' : '#808080',
                    fontSize: '11px',
                    fontWeight: '600',
                    textTransform: 'capitalize',
                  }}
                >
                  {filter === 'todos' && 'Todos'}
                  {filter === 'abiertos' && 'Abiertos'}
                  {filter === 'calificados' && 'Calificados'}
                  {filter === 'aceptados' && 'Aceptados'}
                  {filter === 'rechazados' && 'Rechazados'}
                </button>
              );
            })}
          </div>

          {/* High-Density Data Grid */}
          <div
            style={{
              border: '1px solid #222222',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            {/* Table Header */}
            <div
              className="grid"
              style={{
                gridTemplateColumns: '120px 1fr 280px 80px 280px',
                backgroundColor: '#0A0A0A',
                padding: '12px 20px',
                borderBottom: '1px solid #222222',
              }}
            >
              <div style={{ color: '#808080', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>
                MGS ID
              </div>
              <div style={{ color: '#808080', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>
                Nombre del Pliego
              </div>
              <div style={{ color: '#808080', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>
                Pipeline Status
              </div>
              <div style={{ color: '#808080', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>
                Score
              </div>
              <div style={{ color: '#808080', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>
                Último Comentario
              </div>
            </div>

            {/* Table Rows */}
            {filteredApplications.map((app, index) => (
              <ApplicationRow key={app.id} application={app} index={index} />
            ))}
          </div>
        </div>

        {/* ===== SECTION 4: AUDITORÍA DOCUMENTAL (ARCHIVE LAYER - PRESERVED) ===== */}
        <div
          style={{
            padding: '32px 36px 60px',
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Shield style={{ width: '18px', height: '18px', color: '#1D99CC' }} />
              <h2
                style={{
                  color: '#FFFFFF',
                  fontSize: '18px',
                  fontWeight: '700',
                }}
              >
                Auditoría Documental ({MOCK_DOCUMENTS.length} ítems)
              </h2>
            </div>

            {/* Stats Pills - PRESERVED */}
            <div className="flex items-center gap-3">
              <StatPill
                label="Vigentes"
                count={MOCK_DOCUMENTS.filter((d) => d.status === 'vigente').length}
                color="#00C853"
              />
              <StatPill
                label="Por Vencer"
                count={MOCK_DOCUMENTS.filter((d) => d.status === 'proximo-vencer').length}
                color="#FF9800"
              />
              <StatPill
                label="Vencidos"
                count={MOCK_DOCUMENTS.filter((d) => d.status === 'vencido').length}
                color="#FF5252"
              />
            </div>
          </div>

          {/* TECHNICAL TABLE - PRESERVED */}
          <DocumentTable documents={MOCK_DOCUMENTS} />
        </div>
      </div>
    </div>
  );
}

// ===== HELPER COMPONENTS =====

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span
        style={{
          color: '#606060',
          fontSize: '11px',
        }}
      >
        {label}
      </span>
      <span
        style={{
          color: '#B0B0B0',
          fontSize: '11px',
          fontWeight: '600',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {value}
      </span>
    </div>
  );
}

function DocumentStatusRow({ label, count, color }: { label: string; count: number; color: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: color,
          }}
        />
        <span
          style={{
            color: '#B0B0B0',
            fontSize: '11px',
          }}
        >
          {label}
        </span>
      </div>
      <span
        style={{
          color: color,
          fontSize: '14px',
          fontWeight: '700',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {count}
      </span>
    </div>
  );
}

// ===== STAT PILL (PRESERVED) =====
function StatPill({ label, count, color }: { label: string; count: number; color: string }) {
  return (
    <div
      className="px-3 py-1.5 rounded"
      style={{
        backgroundColor: `${color}15`,
        border: `1px solid ${color}`,
      }}
    >
      <div className="flex items-center gap-2">
        <span
          style={{
            color: color,
            fontSize: '14px',
            fontWeight: '700',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          {count}
        </span>
        <span
          style={{
            color: color,
            fontSize: '10px',
            fontWeight: '600',
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

// ===== PROJECT CARD (PRESERVED - INCLUDING ALL NAVIGATION) =====
function ProjectCard({ project }: { project: Project }) {
  const navigate = useNavigate();

  return (
    <div
      className="rounded transition-all"
      style={{
        backgroundColor: '#121212',
        border: '1px solid #333333',
        padding: '16px',
      }}
    >
      {/* Header */}
      <div className="mb-3">
        <div
          style={{
            color: '#2E7D32',
            fontSize: '12px',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: '700',
            marginBottom: '4px',
          }}
        >
          {project.mgsId}
        </div>
        <h3
          style={{
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: '700',
            marginBottom: '4px',
          }}
        >
          {project.name}
        </h3>
        <div
          style={{
            color: '#808080',
            fontSize: '10px',
          }}
        >
          Fase: {project.phase}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1">
          <span
            style={{
              color: '#606060',
              fontSize: '9px',
              fontWeight: '600',
            }}
          >
            Progreso
          </span>
          <span
            style={{
              color: '#1D99CC',
              fontSize: '11px',
              fontWeight: '700',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {project.progress}%
          </span>
        </div>
        <div
          className="rounded-full overflow-hidden"
          style={{
            height: '4px',
            backgroundColor: '#1A1A1A',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${project.progress}%`,
              backgroundColor: '#1D99CC',
            }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center gap-1.5">
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#606060',
            }}
          />
          <span
            style={{
              color: '#606060',
              fontSize: '10px',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {project.personnelCount} personas
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#606060',
            }}
          />
          <span
            style={{
              color: '#606060',
              fontSize: '10px',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {project.tasksCompleted}/{project.tasksTotal} tareas
          </span>
        </div>
      </div>

      {/* Action Button - PRESERVED NAVIGATION */}
      <button
        onClick={() => navigate(`/admin/partners/construcciones-sas/projects/${project.id}`)}
        className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded transition-all"
        style={{
          backgroundColor: '#1D99CC',
          border: '1px solid #1D99CC',
          color: '#FFFFFF',
          fontSize: '10px',
          fontWeight: '700',
          textTransform: 'uppercase',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#1A8AB8';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#1D99CC';
        }}
      >
        <ExternalLink style={{ width: '12px', height: '12px' }} />
        Ver Dashboard de Proyecto
      </button>
    </div>
  );
}

// ===== APPLICATION ROW (NEW) =====
function ApplicationRow({ application, index }: { application: TenderApplication; index: number }) {
  const navigate = useNavigate();
  
  const getStatusConfig = (status: TenderApplication['status']) => {
    switch (status) {
      case 'postulado':
        return { label: 'Postulado', color: '#808080', step: 1 };
      case 'revision':
        return { label: 'Revisión', color: '#FF9800', step: 2 };
      case 'evaluacion':
        return { label: 'Evaluación', color: '#1D99CC', step: 3 };
      case 'aceptado':
        return { label: 'Aceptado', color: '#00C853', step: 4 };
      case 'rechazado':
        return { label: 'Rechazado', color: '#FF5252', step: 0 };
    }
  };

  const statusConfig = getStatusConfig(application.status);

  return (
    <div
      className="grid transition-all cursor-pointer"
      style={{
        gridTemplateColumns: '120px 1fr 280px 80px 280px',
        backgroundColor: index % 2 === 0 ? '#050505' : '#0A0A0A',
        padding: '16px 20px',
        borderBottom: '1px solid #222222',
        alignItems: 'center',
      }}
      onClick={() => navigate(`/admin/pliegos/mgs-boy-05/application/${application.id}`)}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#0F0F0F';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#050505' : '#0A0A0A';
      }}
    >
      {/* MGS ID */}
      <div
        style={{
          color: '#1D99CC',
          fontSize: '12px',
          fontWeight: '700',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {application.mgsId}
      </div>

      {/* Tender Name */}
      <div
        style={{
          color: '#FFFFFF',
          fontSize: '12px',
          fontWeight: '500',
        }}
      >
        {application.tenderName}
      </div>

      {/* Pipeline Stepper */}
      <div>
        <PipelineStepper currentStep={statusConfig.step} status={application.status} />
      </div>

      {/* Score */}
      <div className="flex items-center gap-2">
        <Star
          style={{
            width: '14px',
            height: '14px',
            fill: application.score >= 80 ? '#FFB800' : 'transparent',
            stroke: application.score >= 80 ? '#FFB800' : '#404040',
          }}
        />
        <span
          style={{
            color: application.score >= 80 ? '#00C853' : '#FF9800',
            fontSize: '14px',
            fontWeight: '700',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          {application.score}
        </span>
      </div>

      {/* Last Comment */}
      <div
        style={{
          color: '#808080',
          fontSize: '11px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {application.lastComment}
      </div>
    </div>
  );
}

// ===== PIPELINE STEPPER (NEW) =====
function PipelineStepper({ currentStep, status }: { currentStep: number; status: TenderApplication['status'] }) {
  const steps = ['Postulado', 'Revisión', 'Evaluación', 'Fallo'];

  return (
    <div className="flex items-center gap-2">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber <= currentStep;
        const isCurrent = stepNumber === currentStep;
        const isRejected = status === 'rechazado';

        return (
          <div key={step} className="flex items-center">
            <div
              className="flex items-center justify-center"
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: isActive
                  ? isRejected
                    ? '#FF5252'
                    : status === 'aceptado' && stepNumber === 4
                    ? '#00C853'
                    : '#1D99CC'
                  : 'rgba(255, 255, 255, 0.05)',
                border: isCurrent ? `2px solid ${isRejected ? '#FF5252' : '#1D99CC'}` : 'none',
              }}
            >
              <span
                style={{
                  color: isActive ? '#FFFFFF' : '#404040',
                  fontSize: '9px',
                  fontWeight: '700',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {stepNumber}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                style={{
                  width: '24px',
                  height: '2px',
                  backgroundColor: stepNumber < currentStep ? '#1D99CC' : 'rgba(255, 255, 255, 0.05)',
                  marginLeft: '8px',
                  marginRight: '8px',
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ===== DOCUMENT TABLE (PRESERVED) =====
function DocumentTable({ documents }: { documents: Document[] }) {
  const [selectedArea, setSelectedArea] = useState<'todos' | DocumentCategory>('todos');

  const filteredDocuments = selectedArea === 'todos' ? documents : documents.filter((d) => d.category === selectedArea);

  const getStatusIcon = (status: DocumentStatus) => {
    switch (status) {
      case 'vigente':
        return <CheckCircle2 style={{ width: '14px', height: '14px', color: '#00C853' }} />;
      case 'proximo-vencer':
        return <Clock style={{ width: '14px', height: '14px', color: '#FF9800' }} />;
      case 'vencido':
        return <XCircle style={{ width: '14px', height: '14px', color: '#FF5252' }} />;
      case 'faltante':
        return <AlertCircle style={{ width: '14px', height: '14px', color: '#606060' }} />;
    }
  };

  const getStatusLabel = (status: DocumentStatus) => {
    switch (status) {
      case 'vigente':
        return 'Vigente';
      case 'proximo-vencer':
        return 'Próximo a Vencer';
      case 'vencido':
        return 'Vencido';
      case 'faltante':
        return 'Faltante';
    }
  };

  const getStatusColor = (status: DocumentStatus) => {
    switch (status) {
      case 'vigente':
        return '#00C853';
      case 'proximo-vencer':
        return '#FF9800';
      case 'vencido':
        return '#FF5252';
      case 'faltante':
        return '#606060';
    }
  };

  return (
    <div>
      {/* Filter Chips */}
      <div className="flex items-center gap-2 mb-4">
        <AreaChip label="Todos" isActive={selectedArea === 'todos'} onClick={() => setSelectedArea('todos')} />
        <AreaChip label="SST" isActive={selectedArea === 'sst'} onClick={() => setSelectedArea('sst')} />
        <AreaChip label="Legal" isActive={selectedArea === 'legal'} onClick={() => setSelectedArea('legal')} />
        <AreaChip
          label="Financiero"
          isActive={selectedArea === 'financiero'}
          onClick={() => setSelectedArea('financiero')}
        />
        <AreaChip
          label="Ambiental"
          isActive={selectedArea === 'ambiental'}
          onClick={() => setSelectedArea('ambiental')}
        />
        <AreaChip label="Equipos" isActive={selectedArea === 'equipos'} onClick={() => setSelectedArea('equipos')} />
      </div>

      {/* Document Grid */}
      <div
        style={{
          border: '1px solid #222222',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        {/* Header Row */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: '40px 1fr 140px 160px 120px 100px',
            backgroundColor: '#0A0A0A',
            borderBottom: '1px solid #222222',
            padding: '12px 16px',
          }}
        >
          <div
            style={{
              color: '#606060',
              fontSize: '9px',
              fontWeight: '700',
              textTransform: 'uppercase',
            }}
          >
            #
          </div>
          <div
            style={{
              color: '#606060',
              fontSize: '9px',
              fontWeight: '700',
              textTransform: 'uppercase',
            }}
          >
            Documento
          </div>
          <div
            style={{
              color: '#606060',
              fontSize: '9px',
              fontWeight: '700',
              textTransform: 'uppercase',
            }}
          >
            Estado
          </div>
          <div
            style={{
              color: '#606060',
              fontSize: '9px',
              fontWeight: '700',
              textTransform: 'uppercase',
            }}
          >
            Vencimiento/Actualización
          </div>
          <div
            style={{
              color: '#606060',
              fontSize: '9px',
              fontWeight: '700',
              textTransform: 'uppercase',
            }}
          >
            Categoría
          </div>
          <div
            style={{
              color: '#606060',
              fontSize: '9px',
              fontWeight: '700',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            Acciones
          </div>
        </div>

        {/* Document Rows */}
        <div
          style={{
            maxHeight: '600px',
            overflowY: 'auto',
          }}
        >
          {filteredDocuments.map((doc, index) => {
            return (
              <div
                key={doc.id}
                className="grid"
                style={{
                  gridTemplateColumns: '40px 1fr 140px 160px 120px 100px',
                  backgroundColor: index % 2 === 0 ? '#050505' : '#0A0A0A',
                  borderBottom: '1px solid #222222',
                  padding: '12px 16px',
                  alignItems: 'center',
                }}
              >
                {/* Index */}
                <div
                  style={{
                    color: '#404040',
                    fontSize: '10px',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Document Name */}
                <div
                  style={{
                    color: '#E0E0E0',
                    fontSize: '11px',
                    fontWeight: '500',
                  }}
                >
                  {doc.name}
                </div>

                {/* Status */}
                <div className="flex items-center gap-2">
                  {getStatusIcon(doc.status)}
                  <span
                    style={{
                      color: getStatusColor(doc.status),
                      fontSize: '10px',
                      fontWeight: '600',
                    }}
                  >
                    {getStatusLabel(doc.status)}
                  </span>
                </div>

                {/* Date */}
                <div
                  style={{
                    color: '#808080',
                    fontSize: '10px',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {doc.expiryDate || doc.lastUpdated || 'N/A'}
                </div>

                {/* Category Badge */}
                <div>
                  <div
                    className="inline-block px-2 py-1 rounded"
                    style={{
                      backgroundColor: '#1D99CC15',
                      border: '1px solid #1D99CC',
                    }}
                  >
                    <span
                      style={{
                        color: '#1D99CC',
                        fontSize: '8px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      {doc.category}
                    </span>
                  </div>
                </div>

                {/* Actions - PRESERVED */}
                <div className="col-span-1 flex items-center justify-center gap-2">
                  <button
                    className="p-1 rounded transition-all"
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#606060',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#1D99CC';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#606060';
                    }}
                  >
                    <Eye style={{ width: '12px', height: '12px' }} />
                  </button>
                  <button
                    className="p-1 rounded transition-all"
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#606060',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#00C853';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#606060';
                    }}
                  >
                    <Upload style={{ width: '12px', height: '12px' }} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Result Counter */}
      <div
        className="mt-3"
        style={{
          color: '#606060',
          fontSize: '10px',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        Mostrando {filteredDocuments.length} de {documents.length} documentos
      </div>
    </div>
  );
}

// ===== AREA CHIP (PRESERVED) =====
function AreaChip({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <div
      className="px-3 py-1.5 rounded transition-all"
      style={{
        backgroundColor: isActive ? '#1D99CC15' : '#050505',
        border: isActive ? '1px solid #1D99CC' : '1px solid #333333',
        color: isActive ? '#1D99CC' : '#808080',
        fontSize: '10px',
        fontWeight: '700',
        fontFamily: 'Inter, sans-serif',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {label}
    </div>
  );
}