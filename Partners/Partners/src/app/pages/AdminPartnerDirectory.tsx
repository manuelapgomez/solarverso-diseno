import { useState } from 'react';
import { AdminSidebar } from '../components/AdminSidebar';
import { Search, AlertTriangle, Users, MapPin, FileText, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useTheme } from '../contexts/ThemeContext';

type FilterType = 'all' | 'electrico' | 'civil' | 'vencidos';
type PartnerStatus = 'activo' | 'inactivo' | 'suspendido';
type DocumentHealth = 'green' | 'yellow' | 'red';

interface Partner {
  id: string;
  name: string;
  nit: string;
  logo: string;
  sstScore: number;
  status: PartnerStatus;
  category: 'electrico' | 'civil' | 'maquinaria';
  assignedMGS: string[];
  personnelOnSite: number;
  documentHealth: DocumentHealth;
  expiredDocs: number;
  location: string;
}

const MOCK_PARTNERS: Partner[] = [
  {
    id: 'PTR-001',
    name: 'Construcciones Eléctricas SAS',
    nit: '900.123.456',
    logo: 'CE',
    sstScore: 86,
    status: 'activo',
    category: 'electrico',
    assignedMGS: ['MGS-BOY-01', 'MGS-MET-02'],
    personnelOnSite: 24,
    documentHealth: 'yellow',
    expiredDocs: 2,
    location: 'Medellín, ANT',
  },
  {
    id: 'PTR-002',
    name: 'Inversiones Solares SAS',
    nit: '900.234.567',
    logo: 'IS',
    sstScore: 92,
    status: 'activo',
    category: 'civil',
    assignedMGS: ['MGS-CUN-03'],
    personnelOnSite: 18,
    documentHealth: 'green',
    expiredDocs: 0,
    location: 'Bogotá, DC',
  },
  {
    id: 'PTR-003',
    name: 'Obras Civiles del Norte',
    nit: '900.345.678',
    logo: 'ON',
    sstScore: 78,
    status: 'activo',
    category: 'civil',
    assignedMGS: ['MGS-SAN-02', 'MGS-ANT-04'],
    personnelOnSite: 32,
    documentHealth: 'red',
    expiredDocs: 5,
    location: 'Bucaramanga, SAN',
  },
  {
    id: 'PTR-004',
    name: 'Montajes Eléctricos LTDA',
    nit: '900.456.789',
    logo: 'ME',
    sstScore: 95,
    status: 'activo',
    category: 'electrico',
    assignedMGS: ['MGS-HUI-01'],
    personnelOnSite: 15,
    documentHealth: 'green',
    expiredDocs: 0,
    location: 'Neiva, HUI',
  },
  {
    id: 'PTR-005',
    name: 'Constructora del Caribe',
    nit: '900.567.890',
    logo: 'CC',
    sstScore: 88,
    status: 'activo',
    category: 'civil',
    assignedMGS: ['MGS-ATL-01', 'MGS-BOL-02'],
    personnelOnSite: 28,
    documentHealth: 'yellow',
    expiredDocs: 1,
    location: 'Barranquilla, ATL',
  },
  {
    id: 'PTR-006',
    name: 'Solar Build Co.',
    nit: '900.678.901',
    logo: 'SB',
    sstScore: 71,
    status: 'activo',
    category: 'electrico',
    assignedMGS: ['MGS-CAL-03'],
    personnelOnSite: 12,
    documentHealth: 'red',
    expiredDocs: 3,
    location: 'Manizales, CAL',
  },
  {
    id: 'PTR-007',
    name: 'Ingeniería Integral SAS',
    nit: '900.789.012',
    logo: 'II',
    sstScore: 89,
    status: 'activo',
    category: 'civil',
    assignedMGS: ['MGS-TOL-01'],
    personnelOnSite: 20,
    documentHealth: 'green',
    expiredDocs: 0,
    location: 'Ibagué, TOL',
  },
  {
    id: 'PTR-008',
    name: 'Electro Solar del Valle',
    nit: '900.890.123',
    logo: 'EV',
    sstScore: 84,
    status: 'activo',
    category: 'electrico',
    assignedMGS: ['MGS-VAL-02'],
    personnelOnSite: 16,
    documentHealth: 'yellow',
    expiredDocs: 1,
    location: 'Cali, VAL',
  },
];

export default function AdminPartnerDirectory() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { colors } = useTheme();

  const getFilteredPartners = () => {
    let filtered = MOCK_PARTNERS;

    // Apply category filter
    if (activeFilter === 'electrico') {
      filtered = filtered.filter((p) => p.category === 'electrico');
    } else if (activeFilter === 'civil') {
      filtered = filtered.filter((p) => p.category === 'civil');
    } else if (activeFilter === 'vencidos') {
      filtered = filtered.filter((p) => p.documentHealth === 'red');
    }

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.nit.includes(searchQuery)
      );
    }

    return filtered;
  };

  const filteredPartners = getFilteredPartners();

  const getFilterCount = (filter: FilterType) => {
    if (filter === 'all') return MOCK_PARTNERS.length;
    if (filter === 'electrico') return MOCK_PARTNERS.filter((p) => p.category === 'electrico').length;
    if (filter === 'civil') return MOCK_PARTNERS.filter((p) => p.category === 'civil').length;
    if (filter === 'vencidos') return MOCK_PARTNERS.filter((p) => p.documentHealth === 'red').length;
    return 0;
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
            Directorio de Partners
          </h1>
          <div
            style={{
              color: colors.textTertiary,
              fontSize: '11px',
            }}
          >
            {MOCK_PARTNERS.length} partners activos en el ecosistema
          </div>
        </div>

        {/* SEARCH & FILTER HEADER */}
        <div
          className="px-8 py-5"
          style={{
            borderBottom: `1px solid ${colors.border}`,
          }}
        >
          <div className="flex items-center justify-between mb-4">
            {/* Search */}
            <div
              className="flex items-center gap-3 px-4 py-2.5 rounded"
              style={{
                width: '400px',
                backgroundColor: colors.cardBackground,
                border: `1px solid ${colors.border}`,
              }}
            >
              <Search style={{ width: '16px', height: '16px', color: colors.textTertiary }} />
              <input
                type="text"
                placeholder="Buscar por NIT o Nombre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: colors.textSecondary,
                  fontSize: '13px',
                  fontFamily: 'Inter, sans-serif',
                }}
              />
            </div>

            {/* Results Count */}
            <div
              style={{
                color: colors.textSecondary,
                fontSize: '12px',
              }}
            >
              {filteredPartners.length} resultado{filteredPartners.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2">
            <FilterButton
              label="Todos"
              count={getFilterCount('all')}
              isActive={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
              colors={colors}
            />
            <FilterButton
              icon="⚡"
              label="Eléctricos"
              count={getFilterCount('electrico')}
              isActive={activeFilter === 'electrico'}
              onClick={() => setActiveFilter('electrico')}
              colors={colors}
            />
            <FilterButton
              icon="🏗️"
              label="Civiles"
              count={getFilterCount('civil')}
              isActive={activeFilter === 'civil'}
              onClick={() => setActiveFilter('civil')}
              colors={colors}
            />
            <FilterButton
              icon="⚠️"
              label="Documentos Vencidos"
              count={getFilterCount('vencidos')}
              isActive={activeFilter === 'vencidos'}
              onClick={() => setActiveFilter('vencidos')}
              alert
              colors={colors}
            />
          </div>
        </div>

        {/* PARTNER GRID */}
        <div className="flex-1 overflow-auto px-8 py-6">
          <div className="grid grid-cols-3 gap-5">
            {filteredPartners.map((partner) => (
              <PartnerCard
                key={partner.id}
                partner={partner}
                onAudit={() => navigate(`/admin/partners/${partner.id}`)}
                colors={colors}
              />
            ))}
          </div>

          {filteredPartners.length === 0 && (
            <div
              className="flex flex-col items-center justify-center"
              style={{ minHeight: '400px' }}
            >
              <Users style={{ width: '64px', height: '64px', color: colors.textTertiary, marginBottom: '16px' }} />
              <div style={{ color: colors.textTertiary, fontSize: '14px' }}>No se encontraron partners</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ===== FILTER BUTTON =====
interface FilterButtonProps {
  icon?: string;
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
  alert?: boolean;
  colors: any;
}

function FilterButton({ icon, label, count, isActive, onClick, alert, colors }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 rounded transition-all"
      style={{
        backgroundColor: isActive ? (alert ? 'rgba(255, 82, 82, 0.15)' : 'rgba(29, 153, 204, 0.15)') : '#1A1A1A',
        border: `1px solid ${isActive ? (alert ? '#FF5252' : '#1D99CC') : '#333333'}`,
        color: isActive ? (alert ? '#FF5252' : '#1D99CC') : '#808080',
        fontSize: '12px',
        fontWeight: '600',
      }}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
      <span
        className="px-1.5 py-0.5 rounded"
        style={{
          backgroundColor: isActive ? (alert ? '#FF5252' : '#1D99CC') : '#0A0A0A',
          color: isActive ? '#FFFFFF' : '#606060',
          fontSize: '10px',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {count}
      </span>
    </button>
  );
}

// ===== PARTNER CARD =====
interface PartnerCardProps {
  partner: Partner;
  onAudit: () => void;
  colors: any;
}

function PartnerCard({ partner, onAudit, colors }: PartnerCardProps) {
  const getHealthColor = () => {
    switch (partner.documentHealth) {
      case 'green':
        return colors.success;
      case 'yellow':
        return colors.warning;
      case 'red':
        return colors.error;
    }
  };

  const getHealthLabel = () => {
    switch (partner.documentHealth) {
      case 'green':
        return 'Completo';
      case 'yellow':
        return 'Atención';
      case 'red':
        return 'Crítico';
    }
  };

  return (
    <div
      className="rounded transition-all"
      style={{
        backgroundColor: colors.cardBackground,
        border: `1px solid ${partner.documentHealth === 'red' ? colors.error : colors.border}`,
        boxShadow: partner.documentHealth === 'red' ? `0 0 20px ${colors.errorBg}` : colors.shadowMd,
      }}
    >
      {/* Header */}
      <div className="p-5 pb-4">
        <div className="flex items-start gap-3 mb-4">
          {/* Logo */}
          <div
            className="flex items-center justify-center rounded"
            style={{
              width: '56px',
              height: '56px',
              backgroundColor: colors.theme === 'dark' ? '#121212' : colors.panelBackground,
              border: `1px solid ${colors.border}`,
              color: colors.accent,
              fontSize: '18px',
              fontWeight: '700',
              flexShrink: 0,
            }}
          >
            {partner.logo}
          </div>

          {/* Name & NIT */}
          <div className="flex-1 min-w-0">
            <div
              className="mb-1 truncate"
              style={{
                color: colors.textPrimary,
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              {partner.name}
            </div>
            <div
              style={{
                color: colors.textTertiary,
                fontSize: '11px',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              NIT: {partner.nit}
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-2 mb-4">
          <div
            className="px-2 py-1 rounded"
            style={{
              backgroundColor: colors.successBg,
              color: colors.success,
              fontSize: '10px',
              fontWeight: '700',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            SST: {partner.sstScore}%
          </div>

          <div
            className="px-2 py-1 rounded"
            style={{
              backgroundColor: colors.infoBg,
              color: colors.accent,
              fontSize: '10px',
              fontWeight: '600',
            }}
          >
            Activo
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mb-4">
          <MapPin style={{ width: '12px', height: '12px', color: colors.textTertiary }} />
          <span
            style={{
              color: colors.textSecondary,
              fontSize: '11px',
            }}
          >
            {partner.location}
          </span>
        </div>

        {/* MGS Asignadas */}
        <div className="mb-3">
          <div
            style={{
              color: colors.textTertiary,
              fontSize: '10px',
              textTransform: 'uppercase',
              marginBottom: '6px',
            }}
          >
            MGS Asignadas ({partner.assignedMGS.length})
          </div>
          <div className="flex flex-wrap gap-1.5">
            {partner.assignedMGS.map((mgs) => (
              <div
                key={mgs}
                className="px-2 py-1 rounded"
                style={{
                  backgroundColor: colors.theme === 'dark' ? '#1A1A1A' : colors.canvasBackground,
                  border: `1px solid ${colors.border}`,
                  color: colors.partnerAccent,
                  fontSize: '10px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: '600',
                }}
              >
                {mgs}
              </div>
            ))}
          </div>
        </div>

        {/* Personal en Sitio */}
        <div className="flex items-center justify-between mb-4">
          <span
            style={{
              color: colors.textTertiary,
              fontSize: '11px',
            }}
          >
            Personal en Sitio
          </span>
          <span
            style={{
              color: colors.textSecondary,
              fontSize: '14px',
              fontWeight: '700',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {partner.personnelOnSite}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-5 py-4"
        style={{
          borderTop: `1px solid ${colors.border}`,
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: getHealthColor(),
                boxShadow: `0 0 8px ${getHealthColor()}`,
              }}
            />
            <span
              style={{
                color: getHealthColor(),
                fontSize: '11px',
                fontWeight: '600',
              }}
            >
              {getHealthLabel()}
            </span>
          </div>

          {partner.expiredDocs > 0 && (
            <div className="flex items-center gap-1.5">
              <AlertTriangle style={{ width: '12px', height: '12px', color: '#FF5252' }} />
              <span
                style={{
                  color: '#FF5252',
                  fontSize: '10px',
                  fontWeight: '600',
                }}
              >
                {partner.expiredDocs} vencido{partner.expiredDocs > 1 ? 's' : ''}
              </span>
            </div>
          )}
        </div>

        <button
          onClick={onAudit}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded transition-all"
          style={{
            backgroundColor: partner.documentHealth === 'red' ? colors.error : colors.theme === 'dark' ? '#1A1A1A' : 'transparent',
            border: `1px solid ${partner.documentHealth === 'red' ? colors.error : colors.accent}`,
            color: partner.documentHealth === 'red' ? '#FFFFFF' : colors.accent,
            fontSize: '12px',
            fontWeight: '600',
          }}
          onMouseEnter={(e) => {
            if (partner.documentHealth !== 'red') {
              e.currentTarget.style.backgroundColor = colors.accent;
              e.currentTarget.style.color = '#FFFFFF';
            }
          }}
          onMouseLeave={(e) => {
            if (partner.documentHealth !== 'red') {
              e.currentTarget.style.backgroundColor = colors.theme === 'dark' ? '#1A1A1A' : 'transparent';
              e.currentTarget.style.color = colors.accent;
            }
          }}
        >
          <FileText style={{ width: '14px', height: '14px' }} />
          Auditar Perfil
          <ExternalLink style={{ width: '12px', height: '12px' }} />
        </button>
      </div>
    </div>
  );
}