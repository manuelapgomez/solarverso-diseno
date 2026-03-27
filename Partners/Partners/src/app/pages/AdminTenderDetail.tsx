import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { AdminSidebar } from '../components/AdminSidebar';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  DollarSign,
  Users,
  Clock,
  FileText,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Download,
  Eye,
} from 'lucide-react';

// ===== TYPES =====
interface Application {
  id: string;
  partnerId: string;
  partnerName: string;
  commercialName: string;
  appliedDate: string;
  sstScore: number;
  documentStatus: 'completo' | 'incompleto' | 'pendiente';
  documentsVerified: number;
  totalDocuments: number;
  documentsApproved: number;
  documentsUnderReview: number;
  documentsRejected: number;
  documentsNotUploaded: number;
  status: 'under_review' | 'approved' | 'rejected';
}

interface Requirement {
  id: string;
  name: string;
  description: string;
  required: boolean;
}

interface TimelineEvent {
  id: string;
  date: string;
  description: string;
  status: 'completed' | 'pending' | 'in_progress';
}

interface TenderDetails {
  id: string;
  mgsId: string;
  title: string;
  location: string;
  category: string;
  description: string;
  closingDate: string;
  status: 'open' | 'closed' | 'awarded';
  applicationsCount: number;
  createdDate: string;
  requirements: Requirement[];
  timeline: TimelineEvent[];
}

// ===== MOCK DATA =====
const MOCK_TENDER_DATA: Record<string, TenderDetails> = {
  'TND-001': {
    id: 'TND-001',
    mgsId: 'MGS-BOY-04',
    title: 'Obra Civil Boyacá',
    location: 'Paipa, Boyacá',
    category: 'Obras Civiles',
    description:
      'Construcción de cimentaciones y estructuras de soporte para instalación de paneles solares en terreno de 12 hectáreas.',
    closingDate: '2026-03-15',
    status: 'open',
    applicationsCount: 8,
    createdDate: '2026-02-01',
    requirements: [
      {
        id: 'REQ-001',
        name: 'Planos de Construcción',
        description: 'Planos detallados de la obra civil.',
        required: true,
      },
      {
        id: 'REQ-002',
        name: 'Certificado de Calidad',
        description: 'Certificado de calidad de los materiales utilizados.',
        required: true,
      },
      {
        id: 'REQ-003',
        name: 'Plan de Seguridad',
        description: 'Plan de seguridad para el sitio de construcción.',
        required: true,
      },
    ],
    timeline: [
      {
        id: 'TLE-001',
        date: '2026-02-01',
        description: 'Publicación del pliego de condiciones.',
        status: 'completed',
      },
      {
        id: 'TLE-002',
        date: '2026-02-15',
        description: 'Recepción de postulaciones.',
        status: 'in_progress',
      },
      {
        id: 'TLE-003',
        date: '2026-03-15',
        description: 'Cierre de postulaciones.',
        status: 'pending',
      },
    ],
    applications: [
      {
        id: 'APP-001',
        partnerId: 'SST-002',
        partnerName: 'Construcciones Andinas SAS',
        commercialName: 'Construcciones Andinas SAS',
        appliedDate: '2026-02-13',
        sstScore: 92,
        documentStatus: 'completo',
        documentsVerified: 68,
        totalDocuments: 68,
        documentsApproved: 50,
        documentsUnderReview: 10,
        documentsRejected: 5,
        documentsNotUploaded: 3,
        status: 'under_review',
      },
      {
        id: 'APP-002',
        partnerId: 'SST-005',
        partnerName: 'Obras Express LTDA',
        commercialName: 'Obras Express LTDA',
        appliedDate: '2026-02-13',
        sstScore: 88,
        documentStatus: 'incompleto',
        documentsVerified: 65,
        totalDocuments: 68,
        documentsApproved: 45,
        documentsUnderReview: 15,
        documentsRejected: 5,
        documentsNotUploaded: 3,
        status: 'under_review',
      },
      {
        id: 'APP-003',
        partnerId: 'SST-008',
        partnerName: 'Ingeniería del Norte',
        commercialName: 'Ingeniería del Norte',
        appliedDate: '2026-02-13',
        sstScore: 95,
        documentStatus: 'completo',
        documentsVerified: 68,
        totalDocuments: 68,
        documentsApproved: 55,
        documentsUnderReview: 5,
        documentsRejected: 5,
        documentsNotUploaded: 3,
        status: 'under_review',
      },
      {
        id: 'APP-004',
        partnerId: 'SST-012',
        partnerName: 'Construcciones Solar',
        commercialName: 'Construcciones Solar',
        appliedDate: '2026-02-13',
        sstScore: 87,
        documentStatus: 'incompleto',
        documentsVerified: 68,
        totalDocuments: 68,
        documentsApproved: 40,
        documentsUnderReview: 20,
        documentsRejected: 5,
        documentsNotUploaded: 3,
        status: 'under_review',
      },
      {
        id: 'APP-005',
        partnerId: 'SST-015',
        partnerName: 'EcoEstructuras SAS',
        commercialName: 'EcoEstructuras SAS',
        appliedDate: '2026-02-13',
        sstScore: 98,
        documentStatus: 'pendiente',
        documentsVerified: 45,
        totalDocuments: 68,
        documentsApproved: 30,
        documentsUnderReview: 25,
        documentsRejected: 5,
        documentsNotUploaded: 3,
        status: 'under_review',
      },
      {
        id: 'APP-006',
        partnerId: 'SST-018',
        partnerName: 'Proyectos Integrales',
        commercialName: 'Proyectos Integrales',
        appliedDate: '2026-02-13',
        sstScore: 93,
        documentStatus: 'completo',
        documentsVerified: 68,
        totalDocuments: 68,
        documentsApproved: 50,
        documentsUnderReview: 10,
        documentsRejected: 5,
        documentsNotUploaded: 3,
        status: 'under_review',
      },
      {
        id: 'APP-007',
        partnerId: 'SST-021',
        partnerName: 'Civiles Andinos',
        commercialName: 'Civiles Andinos',
        appliedDate: '2026-02-13',
        sstScore: 86,
        documentStatus: 'incompleto',
        documentsVerified: 58,
        totalDocuments: 68,
        documentsApproved: 35,
        documentsUnderReview: 20,
        documentsRejected: 5,
        documentsNotUploaded: 3,
        status: 'under_review',
      },
      {
        id: 'APP-008',
        partnerId: 'SST-024',
        partnerName: 'Solar Builders',
        commercialName: 'Solar Builders',
        appliedDate: '2026-02-13',
        sstScore: 91,
        documentStatus: 'completo',
        documentsVerified: 68,
        totalDocuments: 68,
        documentsApproved: 50,
        documentsUnderReview: 10,
        documentsRejected: 5,
        documentsNotUploaded: 3,
        status: 'under_review',
      },
    ],
  },
  // ===== PLIEGOS CERRADOS (HISTÓRICO) =====
  'TND-H001': {
    id: 'TND-H001',
    mgsId: 'MGS-BOY-01',
    title: 'Instalación Eléctrica Proyecto Boyacá',
    location: 'Tunja, Boyacá',
    category: 'Sistemas Eléctricos',
    description:
      'Instalación eléctrica completa para proyecto solar en Boyacá incluyendo transformadores, inversores y cableado de alta tensión.',
    closingDate: '2025-12-30',
    status: 'closed',
    applicationsCount: 18,
    createdDate: '2025-11-15',
    requirements: [
      {
        id: 'REQ-H001',
        name: 'Certificación Eléctrica',
        description: 'Certificado de electricista profesional.',
        required: true,
      },
      {
        id: 'REQ-H002',
        name: 'Licencia Ambiental',
        description: 'Licencia ambiental vigente para obra eléctrica.',
        required: true,
      },
      {
        id: 'REQ-H003',
        name: 'Póliza de Seguro',
        description: 'Póliza de responsabilidad civil.',
        required: true,
      },
    ],
    timeline: [
      {
        id: 'TLE-H001',
        date: '2025-11-15',
        description: 'Publicación del pliego de condiciones.',
        status: 'completed',
      },
      {
        id: 'TLE-H002',
        date: '2025-12-01',
        description: 'Recepción de postulaciones.',
        status: 'completed',
      },
      {
        id: 'TLE-H003',
        date: '2025-12-30',
        description: 'Cierre de postulaciones.',
        status: 'completed',
      },
      {
        id: 'TLE-H004',
        date: '2026-01-15',
        description: 'Adjudicación a Electrosolar Andina SAS.',
        status: 'completed',
      },
    ],
    applications: [
      {
        id: 'APP-H001',
        partnerId: 'SST-045',
        partnerName: 'Electrosolar Andina SAS',
        commercialName: 'Electrosolar Andina',
        appliedDate: '2025-12-10',
        sstScore: 96,
        documentStatus: 'completo',
        documentsVerified: 72,
        totalDocuments: 72,
        documentsApproved: 72,
        documentsUnderReview: 0,
        documentsRejected: 0,
        documentsNotUploaded: 0,
        status: 'approved',
      },
      {
        id: 'APP-H002',
        partnerId: 'SST-052',
        partnerName: 'Potencia Solar LTDA',
        commercialName: 'Potencia Solar',
        appliedDate: '2025-12-12',
        sstScore: 89,
        documentStatus: 'completo',
        documentsVerified: 72,
        totalDocuments: 72,
        documentsApproved: 65,
        documentsUnderReview: 0,
        documentsRejected: 7,
        documentsNotUploaded: 0,
        status: 'rejected',
      },
      {
        id: 'APP-H003',
        partnerId: 'SST-063',
        partnerName: 'Ingeniería Eléctrica Total',
        commercialName: 'Eléctrica Total',
        appliedDate: '2025-12-15',
        sstScore: 92,
        documentStatus: 'completo',
        documentsVerified: 72,
        totalDocuments: 72,
        documentsApproved: 68,
        documentsUnderReview: 0,
        documentsRejected: 4,
        documentsNotUploaded: 0,
        status: 'rejected',
      },
    ],
  },
  'TND-H002': {
    id: 'TND-H002',
    mgsId: 'MGS-MET-05',
    title: 'Transporte Logística Equipos Solares',
    location: 'Villavicencio, Meta',
    category: 'Logística y Transporte',
    description:
      'Servicio de transporte especializado para equipos solares desde puerto hasta sitio de instalación con vehículos de carga pesada.',
    closingDate: '2025-12-28',
    status: 'closed',
    applicationsCount: 12,
    createdDate: '2025-11-20',
    requirements: [
      {
        id: 'REQ-H004',
        name: 'Flota de Vehículos',
        description: 'Mínimo 5 vehículos de carga pesada disponibles.',
        required: true,
      },
      {
        id: 'REQ-H005',
        name: 'GPS Tracking',
        description: 'Sistema de rastreo GPS en todos los vehículos.',
        required: true,
      },
      {
        id: 'REQ-H006',
        name: 'Seguro de Carga',
        description: 'Póliza de seguro de carga vigente.',
        required: true,
      },
    ],
    timeline: [
      {
        id: 'TLE-H005',
        date: '2025-11-20',
        description: 'Publicación del pliego de condiciones.',
        status: 'completed',
      },
      {
        id: 'TLE-H006',
        date: '2025-12-05',
        description: 'Recepción de postulaciones.',
        status: 'completed',
      },
      {
        id: 'TLE-H007',
        date: '2025-12-28',
        description: 'Cierre de postulaciones.',
        status: 'completed',
      },
      {
        id: 'TLE-H008',
        date: '2026-01-10',
        description: 'Adjudicación a TransSolar Llanero.',
        status: 'completed',
      },
    ],
    applications: [
      {
        id: 'APP-H004',
        partnerId: 'SST-078',
        partnerName: 'TransSolar Llanero',
        commercialName: 'TransSolar',
        appliedDate: '2025-12-08',
        sstScore: 94,
        documentStatus: 'completo',
        documentsVerified: 55,
        totalDocuments: 55,
        documentsApproved: 55,
        documentsUnderReview: 0,
        documentsRejected: 0,
        documentsNotUploaded: 0,
        status: 'approved',
      },
      {
        id: 'APP-H005',
        partnerId: 'SST-081',
        partnerName: 'Logística Express Colombia',
        commercialName: 'Logística Express',
        appliedDate: '2025-12-10',
        sstScore: 88,
        documentStatus: 'completo',
        documentsVerified: 55,
        totalDocuments: 55,
        documentsApproved: 48,
        documentsUnderReview: 0,
        documentsRejected: 7,
        documentsNotUploaded: 0,
        status: 'rejected',
      },
    ],
  },
};

// ===== SEGMENTED STATUS TRACKER COMPONENT =====
interface SegmentedStatusTrackerProps {
  totalDocuments: number;
  approved: number;
  underReview: number;
  rejected: number;
  notUploaded: number;
}

function SegmentedStatusTracker({
  totalDocuments,
  approved,
  underReview,
  rejected,
  notUploaded,
}: SegmentedStatusTrackerProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getPercentage = (value: number) => {
    return (value / totalDocuments) * 100;
  };

  return (
    <div className="relative w-full">
      {/* Main Traffic Light Bar */}
      <div
        className="relative w-full rounded overflow-hidden transition-all"
        style={{
          height: '18px',
          backgroundColor: '#1A1A1A',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex h-full">
          {/* Approved Segment */}
          {approved > 0 && (
            <div
              style={{
                width: `${getPercentage(approved)}%`,
                backgroundColor: '#00C853',
                borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
              }}
            />
          )}
          {/* Under Review Segment */}
          {underReview > 0 && (
            <div
              style={{
                width: `${getPercentage(underReview)}%`,
                backgroundColor: '#FF9800',
                borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
              }}
            />
          )}
          {/* Rejected Segment */}
          {rejected > 0 && (
            <div
              style={{
                width: `${getPercentage(rejected)}%`,
                backgroundColor: '#FF5252',
                borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
              }}
            />
          )}
          {/* Not Uploaded Segment */}
          {notUploaded > 0 && (
            <div
              style={{
                width: `${getPercentage(notUploaded)}%`,
                backgroundColor: '#2A2A2A',
                transition: 'all 0.3s ease',
              }}
            />
          )}
        </div>
      </div>

      {/* Compact Stats Below Bar */}
      <div
        className="flex items-center justify-center gap-3 mt-2"
        style={{
          fontSize: '9px',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        <div className="flex items-center gap-1">
          <div
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: '#00C853',
              borderRadius: '1px',
            }}
          />
          <span style={{ color: '#00C853', fontWeight: '700' }}>{approved}</span>
        </div>
        <div className="flex items-center gap-1">
          <div
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: '#FF9800',
              borderRadius: '1px',
            }}
          />
          <span style={{ color: '#FF9800', fontWeight: '700' }}>{underReview}</span>
        </div>
        <div className="flex items-center gap-1">
          <div
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: '#FF5252',
              borderRadius: '1px',
            }}
          />
          <span style={{ color: '#FF5252', fontWeight: '700' }}>{rejected}</span>
        </div>
        <div className="flex items-center gap-1">
          <div
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: '#2A2A2A',
              borderRadius: '1px',
            }}
          />
          <span style={{ color: '#808080', fontWeight: '700' }}>{notUploaded}</span>
        </div>
      </div>

      {/* Tooltip on hover */}
      {isHovered && (
        <div
          className="absolute z-50"
          style={{
            top: '-95px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#0A0A0A',
            border: '1px solid #333333',
            borderRadius: '4px',
            padding: '10px 14px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.6)',
            whiteSpace: 'nowrap',
          }}
        >
          <div
            style={{
              color: '#606060',
              fontSize: '8px',
              fontWeight: '700',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            Estatus Documental
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#00C853',
                  borderRadius: '2px',
                }}
              />
              <span
                style={{
                  color: '#00C853',
                  fontSize: '11px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '700',
                }}
              >
                {approved} Aprobados
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#FF9800',
                  borderRadius: '2px',
                }}
              />
              <span
                style={{
                  color: '#FF9800',
                  fontSize: '11px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '700',
                }}
              >
                {underReview} En Revisión
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#FF5252',
                  borderRadius: '2px',
                }}
              />
              <span
                style={{
                  color: '#FF5252',
                  fontSize: '11px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '700',
                }}
              >
                {rejected} Rechazados
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#2A2A2A',
                  borderRadius: '2px',
                }}
              />
              <span
                style={{
                  color: '#808080',
                  fontSize: '11px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '700',
                }}
              >
                {notUploaded} No Subidos
              </span>
            </div>
          </div>
          
          {/* Tooltip Arrow */}
          <div
            style={{
              position: 'absolute',
              bottom: '-6px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '0',
              height: '0',
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '6px solid #333333',
            }}
          />
        </div>
      )}
    </div>
  );
}

// ===== MAIN COMPONENT =====
export function AdminTenderDetail() {
  const { tenderId } = useParams<{ tenderId: string }>();
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState<'all' | 'completo' | 'incompleto' | 'pendiente'>(
    'all'
  );

  const tender = tenderId ? MOCK_TENDER_DATA[tenderId] : null;

  if (!tender) {
    return (
      <div className="flex h-screen" style={{ backgroundColor: '#080808' }}>
        <AdminSidebar />
        <div className="flex-1 flex items-center justify-center">
          <div style={{ color: '#808080', fontSize: '16px' }}>Pliego no encontrado</div>
        </div>
      </div>
    );
  }

  const filteredApplications =
    filterStatus === 'all'
      ? tender.applications
      : tender.applications.filter((app) => app.documentStatus === filterStatus);

  const getStatusConfig = (status: Application['documentStatus']) => {
    switch (status) {
      case 'completo':
        return {
          label: 'COMPLETO',
          color: '#00C853',
          bg: 'rgba(0, 200, 83, 0.12)',
          icon: <CheckCircle2 style={{ width: '14px', height: '14px' }} />,
        };
      case 'incompleto':
        return {
          label: 'INCOMPLETO',
          color: '#FF9800',
          bg: 'rgba(255, 152, 0, 0.12)',
          icon: <AlertCircle style={{ width: '14px', height: '14px' }} />,
        };
      case 'pendiente':
        return {
          label: 'PENDIENTE',
          color: '#808080',
          bg: 'rgba(128, 128, 128, 0.12)',
          icon: <Clock style={{ width: '14px', height: '14px' }} />,
        };
    }
  };

  const getSSTColor = (score: number) => {
    if (score >= 90) return '#00C853';
    if (score >= 80) return '#1D99CC';
    return '#FF9800';
  };

  return (
    <div className="flex h-screen" style={{ backgroundColor: '#080808' }}>
      <AdminSidebar />

      <div className="flex-1 flex flex-col overflow-hidden" style={{ marginLeft: '240px' }}>
        {/* Header */}
        <div
          className="px-8 py-6"
          style={{
            backgroundColor: '#0A0A0A',
            borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="flex items-center gap-2 mb-4 transition-all"
            style={{
              color: '#808080',
              fontSize: '11px',
              fontWeight: '600',
            }}
          >
            <ArrowLeft style={{ width: '14px', height: '14px' }} />
            Volver al Dashboard
          </button>

          <div className="flex items-start justify-between">
            <div>
              <div
                style={{
                  color: '#1D99CC',
                  fontSize: '12px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  marginBottom: '8px',
                }}
              >
                {tender.mgsId}
              </div>
              <h1
                style={{
                  color: '#FFFFFF',
                  fontSize: '28px',
                  fontWeight: '700',
                  marginBottom: '12px',
                }}
              >
                {tender.title}
              </h1>

              {/* Info Row */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <MapPin style={{ width: '14px', height: '14px', color: '#606060' }} />
                  <span style={{ color: '#B0B0B0', fontSize: '12px' }}>{tender.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar style={{ width: '14px', height: '14px', color: '#606060' }} />
                  <span style={{ color: '#B0B0B0', fontSize: '12px' }}>
                    Cierra: {new Date(tender.closingDate).toLocaleDateString('es-ES')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users style={{ width: '14px', height: '14px', color: '#606060' }} />
                  <span style={{ color: '#B0B0B0', fontSize: '12px' }}>
                    {tender.applicationsCount} Postulaciones
                  </span>
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div
              className="px-4 py-2 rounded"
              style={{
                backgroundColor:
                  tender.status === 'closed'
                    ? 'rgba(128, 128, 128, 0.12)'
                    : 'rgba(29, 153, 204, 0.12)',
                border:
                  tender.status === 'closed'
                    ? '0.5px solid #808080'
                    : '0.5px solid #1D99CC',
                color: tender.status === 'closed' ? '#808080' : '#1D99CC',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.5px',
              }}
            >
              {tender.status === 'closed' ? 'CERRADO' : 'ABIERTO'}
            </div>
          </div>

          {/* Closed Tender Banner */}
          {tender.status === 'closed' && (
            <div
              className="mt-4 px-4 py-3 rounded flex items-center gap-3"
              style={{
                backgroundColor: 'rgba(0, 200, 83, 0.08)',
                border: '1px solid rgba(0, 200, 83, 0.3)',
              }}
            >
              <CheckCircle2 style={{ width: '18px', height: '18px', color: '#00C853' }} />
              <div>
                <div
                  style={{
                    color: '#00C853',
                    fontSize: '12px',
                    fontWeight: '700',
                    marginBottom: '2px',
                  }}
                >
                  Proceso Finalizado
                </div>
                <div style={{ color: '#808080', fontSize: '10px' }}>
                  {tender.timeline[tender.timeline.length - 1]?.description || 'Pliego cerrado'}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Filter Bar */}
        <div
          className="px-8 py-4 flex items-center gap-3"
          style={{
            backgroundColor: '#0A0A0A',
            borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div
            style={{
              color: '#606060',
              fontSize: '10px',
              fontWeight: '700',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}
          >
            Filtrar:
          </div>
          {(['all', 'completo', 'incompleto', 'pendiente'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className="px-3 py-1.5 rounded transition-all"
              style={{
                backgroundColor:
                  filterStatus === status ? 'rgba(29, 153, 204, 0.15)' : 'transparent',
                border:
                  filterStatus === status
                    ? '0.5px solid #1D99CC'
                    : '0.5px solid rgba(255, 255, 255, 0.08)',
                color: filterStatus === status ? '#1D99CC' : '#808080',
                fontSize: '10px',
                fontWeight: '600',
                letterSpacing: '0.3px',
                textTransform: 'uppercase',
              }}
            >
              {status === 'all' ? 'Todas' : status}
            </button>
          ))}
        </div>

        {/* Applications Table */}
        <div className="flex-1 overflow-auto px-8 py-6">
          <div
            className="rounded overflow-hidden"
            style={{
              backgroundColor: '#121212',
              border: '0.5px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Table Header */}
            <div
              className="grid grid-cols-12 gap-4 px-6 py-4"
              style={{
                backgroundColor: '#0A0A0A',
                borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div
                className="col-span-1"
                style={{
                  color: '#606060',
                  fontSize: '10px',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                ID Partner
              </div>
              <div
                className="col-span-3"
                style={{
                  color: '#606060',
                  fontSize: '10px',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                Nombre Comercial
              </div>
              <div
                className="col-span-2"
                style={{
                  color: '#606060',
                  fontSize: '10px',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                SST Score
              </div>
              <div
                className="col-span-3"
                style={{
                  color: '#606060',
                  fontSize: '10px',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                Estatus Documental
              </div>
              <div
                className="col-span-3"
                style={{
                  color: '#606060',
                  fontSize: '10px',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                Acción
              </div>
            </div>

            {/* Table Rows */}
            {filteredApplications.map((app) => {
              const statusConfig = getStatusConfig(app.documentStatus);
              const sstColor = getSSTColor(app.sstScore);

              return (
                <div
                  key={app.id}
                  className="grid grid-cols-12 gap-4 px-6 py-5 transition-all"
                  style={{
                    borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {/* ID Partner */}
                  <div className="col-span-1 flex items-center">
                    <div
                      style={{
                        color: '#1D99CC',
                        fontSize: '12px',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontWeight: '700',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {app.partnerId}
                    </div>
                  </div>

                  {/* Nombre Comercial */}
                  <div className="col-span-3 flex flex-col justify-center">
                    <div
                      style={{
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: '600',
                        marginBottom: '2px',
                      }}
                    >
                      {app.commercialName}
                    </div>
                    <div
                      style={{
                        color: '#B0B0B0',
                        fontSize: '10px',
                      }}
                    >
                      Postulado: {new Date(app.appliedDate).toLocaleDateString('es-ES')}
                    </div>
                  </div>

                  {/* SST Score */}
                  <div className="col-span-2 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        style={{
                          color: sstColor,
                          fontSize: '14px',
                          fontFamily: 'JetBrains Mono, monospace',
                          fontWeight: '700',
                        }}
                      >
                        {app.sstScore}%
                      </div>
                      <div
                        style={{
                          color: '#B0B0B0',
                          fontSize: '10px',
                        }}
                      >
                        Habilita
                      </div>
                    </div>
                    <div
                      className="relative rounded-full overflow-hidden"
                      style={{
                        height: '4.5px',
                        width: '120px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${app.sstScore}%`,
                          backgroundColor: sstColor,
                        }}
                      />
                    </div>
                  </div>

                  {/* Estatus Documental */}
                  <div className="col-span-3 flex items-center justify-center">
                    <SegmentedStatusTracker
                      totalDocuments={app.totalDocuments}
                      approved={app.documentsApproved}
                      underReview={app.documentsUnderReview}
                      rejected={app.documentsRejected}
                      notUploaded={app.documentsNotUploaded}
                    />
                  </div>

                  {/* Acción */}
                  <div className="col-span-3 flex items-center gap-2">
                    <button
                      onClick={() => navigate(`/admin/pliegos/${tenderId}/audit/${app.partnerId}`)}
                      className="flex items-center gap-2 px-4 py-2 rounded transition-all"
                      style={{
                        backgroundColor: '#1D99CC',
                        border: '0.5px solid #1D99CC',
                        color: '#FFFFFF',
                        fontSize: '10px',
                        fontWeight: '700',
                        letterSpacing: '0.3px',
                        textTransform: 'uppercase',
                      }}
                    >
                      <Eye style={{ width: '12px', height: '12px' }} />
                      Auditar
                    </button>
                    <button
                      className="px-3 py-2 rounded transition-all"
                      style={{
                        backgroundColor: 'transparent',
                        border: '0.5px solid rgba(255, 255, 255, 0.15)',
                        color: '#808080',
                        fontSize: '10px',
                      }}
                    >
                      <Download style={{ width: '12px', height: '12px' }} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}