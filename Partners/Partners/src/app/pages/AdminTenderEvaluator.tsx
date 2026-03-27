import { useState } from 'react';
import { AdminSidebar } from '../components/AdminSidebar';
import { Star, Download, Users, Calendar, DollarSign, FileText } from 'lucide-react';

interface Candidate {
  id: string;
  companyName: string;
  rating: number;
  isTopRated: boolean;
  proposedPrice: string;
  deadline: string;
  personnel: number;
  experience: string;
  docsSubmitted: number;
  totalDocs: number;
  highlights: string[];
}

const TENDER_INFO = {
  mgsId: 'MGS-BOY-04',
  title: 'MGS Boyacá - Obra Civil',
  location: 'Paipa, Boyacá',
  closingDate: '15 Dic 2026',
};

const CANDIDATES: Candidate[] = [
  {
    id: 'CND-001',
    companyName: 'Constructora Andina S.A.S.',
    rating: 4.9,
    isTopRated: true,
    proposedPrice: '$1.150M',
    deadline: '85 días',
    personnel: 18,
    experience: '12 años',
    docsSubmitted: 14,
    totalDocs: 14,
    highlights: [
      '+50 proyectos similares',
      'Equipo SST certificado',
      'Maquinaria propia',
    ],
  },
  {
    id: 'CND-002',
    companyName: 'Obras Civiles Boyacá Ltda.',
    rating: 4.7,
    isTopRated: true,
    proposedPrice: '$1.180M',
    deadline: '90 días',
    personnel: 16,
    experience: '8 años',
    docsSubmitted: 14,
    totalDocs: 14,
    highlights: [
      'Experiencia local en Boyacá',
      'Certificación ISO 9001',
      'Score SST: 94%',
    ],
  },
  {
    id: 'CND-003',
    companyName: 'Ingeniería Solar del Oriente',
    rating: 4.5,
    isTopRated: false,
    proposedPrice: '$1.220M',
    deadline: '95 días',
    personnel: 15,
    experience: '6 años',
    docsSubmitted: 13,
    totalDocs: 14,
    highlights: [
      '15 proyectos fotovoltaicos',
      'Garantía extendida',
    ],
  },
  {
    id: 'CND-004',
    companyName: 'Constructora Meta Solar',
    rating: 4.3,
    isTopRated: false,
    proposedPrice: '$1.095M',
    deadline: '100 días',
    personnel: 12,
    experience: '5 años',
    docsSubmitted: 12,
    totalDocs: 14,
    highlights: [
      'Propuesta económica competitiva',
      'Experiencia en Meta',
    ],
  },
  {
    id: 'CND-005',
    companyName: 'Desarrollo de Infraestructura SAS',
    rating: 4.6,
    isTopRated: false,
    proposedPrice: '$1.165M',
    deadline: '88 días',
    personnel: 17,
    experience: '10 años',
    docsSubmitted: 14,
    totalDocs: 14,
    highlights: [
      'Certificación ambiental',
      'Plan de calidad robusto',
      'Referencias verificadas',
    ],
  },
  {
    id: 'CND-006',
    companyName: 'Constructora Santander Verde',
    rating: 4.4,
    isTopRated: false,
    proposedPrice: '$1.190M',
    deadline: '92 días',
    personnel: 14,
    experience: '7 años',
    docsSubmitted: 13,
    totalDocs: 14,
    highlights: [
      'Experiencia en energías renovables',
      'Equipo multidisciplinario',
    ],
  },
];

export default function AdminTenderEvaluator() {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);

  const topRatedCandidates = CANDIDATES.filter(c => c.isTopRated);
  const otherCandidates = CANDIDATES.filter(c => !c.isTopRated);

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
          marginLeft: '64px',
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
            className="mb-2"
            style={{
              color: '#606060',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Evaluador de Pliegos
          </div>
          <h1
            style={{
              color: '#E0E0E0',
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '6px',
            }}
          >
            Postulantes para: {TENDER_INFO.title}
          </h1>
          <div className="flex items-center gap-6">
            <div
              style={{
                color: '#1D99CC',
                fontSize: '12px',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: '600',
              }}
            >
              {TENDER_INFO.mgsId}
            </div>
            <div
              style={{
                color: '#808080',
                fontSize: '11px',
              }}
            >
              📍 {TENDER_INFO.location}
            </div>
            <div
              style={{
                color: '#808080',
                fontSize: '11px',
              }}
            >
              📅 Cierre: {TENDER_INFO.closingDate}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className="px-6 py-3 flex items-center gap-6"
          style={{
            backgroundColor: '#0A0A0A',
            borderBottom: '0.5px solid #333333',
          }}
        >
          <StatItem label="Total Postulantes" value={CANDIDATES.length.toString()} />
          <StatItem label="Top Rated" value={topRatedCandidates.length.toString()} color="#1D99CC" />
          <StatItem label="Docs Completos" value={CANDIDATES.filter(c => c.docsSubmitted === c.totalDocs).length.toString()} color="#00C853" />
          <StatItem label="Promedio Rating" value="4.6" color="#FF9800" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Top Rated Section */}
          {topRatedCandidates.length > 0 && (
            <div className="mb-8">
              <div
                className="mb-4 flex items-center gap-2"
                style={{
                  color: '#1D99CC',
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                <Star style={{ width: '14px', height: '14px', fill: '#1D99CC' }} />
                Top Rated Candidates ({topRatedCandidates.length})
              </div>
              <div className="grid grid-cols-3 gap-4">
                {topRatedCandidates.map((candidate) => (
                  <CandidateCard
                    key={candidate.id}
                    candidate={candidate}
                    isSelected={selectedCandidate === candidate.id}
                    onSelect={() => setSelectedCandidate(candidate.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Other Candidates */}
          {otherCandidates.length > 0 && (
            <div>
              <div
                className="mb-4"
                style={{
                  color: '#808080',
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Other Candidates ({otherCandidates.length})
              </div>
              <div className="grid grid-cols-3 gap-4">
                {otherCandidates.map((candidate) => (
                  <CandidateCard
                    key={candidate.id}
                    candidate={candidate}
                    isSelected={selectedCandidate === candidate.id}
                    onSelect={() => setSelectedCandidate(candidate.id)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ===== STAT ITEM =====
interface StatItemProps {
  label: string;
  value: string;
  color?: string;
}

function StatItem({ label, value, color = '#B0B0B0' }: StatItemProps) {
  return (
    <div>
      <div
        style={{
          color: '#606060',
          fontSize: '9px',
          textTransform: 'uppercase',
          marginBottom: '4px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          color: color,
          fontSize: '16px',
          fontWeight: '700',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {value}
      </div>
    </div>
  );
}

// ===== CANDIDATE CARD =====
interface CandidateCardProps {
  candidate: Candidate;
  isSelected: boolean;
  onSelect: () => void;
}

function CandidateCard({ candidate, isSelected, onSelect }: CandidateCardProps) {
  return (
    <div
      onClick={onSelect}
      className="rounded transition-all cursor-pointer"
      style={{
        backgroundColor: '#0A0A0A',
        border: isSelected
          ? `1px solid ${candidate.isTopRated ? '#1D99CC' : '#333333'}`
          : '1px solid #1A1A1A',
        boxShadow: candidate.isTopRated ? '0 0 20px rgba(29, 153, 204, 0.15)' : 'none',
      }}
    >
      {/* Top: Company Name + Rating */}
      <div
        className="px-4 py-3"
        style={{
          borderBottom: '0.5px solid #1A1A1A',
          backgroundColor: candidate.isTopRated ? 'rgba(29, 153, 204, 0.05)' : 'transparent',
        }}
      >
        <div className="flex items-start justify-between mb-2">
          <div
            style={{
              color: candidate.isTopRated ? '#1D99CC' : '#D0D0D0',
              fontSize: '13px',
              fontWeight: '700',
              flex: 1,
              lineHeight: '1.3',
            }}
          >
            {candidate.companyName}
          </div>
          {candidate.isTopRated && (
            <Star
              style={{
                width: '16px',
                height: '16px',
                color: '#1D99CC',
                fill: '#1D99CC',
                flexShrink: 0,
                marginLeft: '8px',
              }}
            />
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              style={{
                width: '11px',
                height: '11px',
                color: i < Math.floor(candidate.rating) ? '#FF9800' : '#333333',
                fill: i < Math.floor(candidate.rating) ? '#FF9800' : 'none',
              }}
            />
          ))}
          <span
            style={{
              color: '#B0B0B0',
              fontSize: '11px',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: '600',
              marginLeft: '4px',
            }}
          >
            {candidate.rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Middle: Summary */}
      <div className="px-4 py-3">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <MetricItem
            icon={DollarSign}
            label="Propuesta"
            value={candidate.proposedPrice}
            color="#00C853"
          />
          <MetricItem
            icon={Calendar}
            label="Plazo"
            value={candidate.deadline}
            color="#808080"
          />
          <MetricItem
            icon={Users}
            label="Personal"
            value={`${candidate.personnel} personas`}
            color="#808080"
          />
          <MetricItem
            icon={FileText}
            label="Experiencia"
            value={candidate.experience}
            color="#1D99CC"
          />
        </div>

        {/* Documents Status */}
        <div
          className="px-3 py-2 rounded mb-3"
          style={{
            backgroundColor: candidate.docsSubmitted === candidate.totalDocs
              ? 'rgba(0, 200, 83, 0.1)'
              : 'rgba(255, 152, 0, 0.1)',
            border: `0.5px solid ${
              candidate.docsSubmitted === candidate.totalDocs ? '#00C853' : '#FF9800'
            }`,
          }}
        >
          <div
            style={{
              color: candidate.docsSubmitted === candidate.totalDocs ? '#00C853' : '#FF9800',
              fontSize: '10px',
              fontWeight: '600',
            }}
          >
            {candidate.docsSubmitted}/{candidate.totalDocs} Documentos Subidos
          </div>
        </div>

        {/* Highlights */}
        <div>
          <div
            className="mb-2"
            style={{
              color: '#606060',
              fontSize: '9px',
              textTransform: 'uppercase',
            }}
          >
            Destacados:
          </div>
          <div className="space-y-1">
            {candidate.highlights.map((highlight, idx) => (
              <div
                key={idx}
                style={{
                  color: '#808080',
                  fontSize: '10px',
                  lineHeight: '1.4',
                }}
              >
                • {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: Action Button */}
      <div className="px-4 py-3">
        <button
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded transition-all"
          style={{
            backgroundColor: candidate.isTopRated ? 'rgba(29, 153, 204, 0.15)' : 'transparent',
            border: `0.5px solid ${candidate.isTopRated ? '#1D99CC' : '#333333'}`,
            color: candidate.isTopRated ? '#1D99CC' : '#808080',
            fontSize: '11px',
            fontWeight: '600',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = candidate.isTopRated
              ? 'rgba(29, 153, 204, 0.25)'
              : '#0A0A0A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = candidate.isTopRated
              ? 'rgba(29, 153, 204, 0.15)'
              : 'transparent';
          }}
        >
          <Download style={{ width: '13px', height: '13px' }} />
          Ver Propuesta Completa (PDF)
        </button>
      </div>
    </div>
  );
}

// ===== METRIC ITEM =====
interface MetricItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
}

function MetricItem({ icon: Icon, label, value, color }: MetricItemProps) {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-1">
        <Icon style={{ width: '10px', height: '10px', color: '#606060' }} />
        <span
          style={{
            color: '#606060',
            fontSize: '9px',
            textTransform: 'uppercase',
          }}
        >
          {label}
        </span>
      </div>
      <div
        style={{
          color: color,
          fontSize: '11px',
          fontFamily: 'JetBrains Mono, monospace',
          fontWeight: '600',
        }}
      >
        {value}
      </div>
    </div>
  );
}