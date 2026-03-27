import { useState } from 'react';
import { UnifiedPartnerSidebar } from '../components/UnifiedPartnerSidebar';
import { Search, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import Masonry from 'react-responsive-masonry';

interface Tender {
  id: string;
  mgsId: string;
  title: string;
  category: string;
  location: string;
  closingDate: string;
  matchScore: number;
  description: string;
}

const MOCK_TENDERS: Tender[] = [
  {
    id: 'TND-001',
    mgsId: 'MGS-BOY-04',
    title: 'Obra Civil MGS Boyacá IV',
    category: 'Civiles',
    location: 'Paipa, Boyacá',
    closingDate: '15 Dic 2026',
    matchScore: 94,
    description: 'Construcción de cimentaciones, estructuras y vías de acceso para mini granja solar.',
  },
  {
    id: 'TND-002',
    mgsId: 'MGS-MET-03',
    title: 'Montaje Eléctrico Meta III',
    category: 'Eléctricos',
    location: 'Puerto López, Meta',
    closingDate: '20 Dic 2026',
    matchScore: 88,
    description: 'Instalación de sistema eléctrico completo, inversor y conexión a red.',
  },
  {
    id: 'TND-003',
    mgsId: 'MGS-HUI-02',
    title: 'Obra Civil y Estructuras Huila II',
    category: 'Civiles',
    location: 'Neiva, Huila',
    closingDate: '18 Dic 2026',
    matchScore: 91,
    description: 'Construcción integral de infraestructura civil y montaje de estructuras metálicas.',
  },
  {
    id: 'TND-004',
    mgsId: 'MGS-CAS-04',
    title: 'Suministro Maquinaria Casanare IV',
    category: 'Maquinaria',
    location: 'Yopal, Casanare',
    closingDate: '22 Dic 2026',
    matchScore: 76,
    description: 'Suministro e instalación de maquinaria y equipos especializados.',
  },
  {
    id: 'TND-005',
    mgsId: 'MGS-CAL-01',
    title: 'Instalación Paneles Caldas I',
    category: 'Eléctricos',
    location: 'Manizales, Caldas',
    closingDate: '25 Dic 2026',
    matchScore: 82,
    description: 'Montaje de módulos fotovoltaicos y sistema de cableado DC.',
  },
  {
    id: 'TND-006',
    mgsId: 'MGS-CUN-03',
    title: 'Sistema Estructural Cundinamarca III',
    category: 'Civiles',
    location: 'Facatativá, Cundinamarca',
    closingDate: '28 Dic 2026',
    matchScore: 89,
    description: 'Construcción de estructuras metálicas y sistemas de soporte.',
  },
];

const CATEGORIES = ['Todos', 'Civiles', 'Eléctricos', 'Maquinaria', 'Estructuras'];

export default function OpportunityFeed() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredTenders = MOCK_TENDERS.filter((tender) => {
    const matchesSearch =
      tender.mgsId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tender.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tender.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'Todos' || tender.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: '#050505', // Absolute Black
      }}
    >
      <UnifiedPartnerSidebar />

      <div
        className="flex-1 flex flex-col"
        style={{
          marginLeft: '240px',
        }}
      >
        {/* Header Bar */}
        <div
          className="flex items-center justify-between px-8 py-6"
          style={{
            borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div>
            <h1
              style={{
                color: '#FFFFFF',
                fontSize: '24px',
                fontWeight: '700',
                fontFamily: 'Inter, sans-serif',
                marginBottom: '4px',
              }}
            >
              Oportunidades
            </h1>
            <div
              style={{
                color: '#808080',
                fontSize: '12px',
              }}
            >
              {filteredTenders.length} pliegos disponibles para aplicar
            </div>
          </div>

          {/* Search */}
          <div
            className="flex items-center gap-3 px-4 py-2.5 rounded"
            style={{
              backgroundColor: '#121212',
              border: '0.5px solid rgba(255, 255, 255, 0.08)',
              width: '360px',
            }}
          >
            <Search style={{ width: '16px', height: '16px', color: '#606060' }} />
            <input
              type="text"
              placeholder="Buscar por MGS, ubicación o tipo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#D0D0D0',
                fontSize: '12px',
              }}
            />
          </div>
        </div>

        {/* Category Pills */}
        <div
          className="px-8 py-4 flex items-center gap-2"
          style={{
            borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="px-4 py-2 rounded transition-all"
              style={{
                backgroundColor: selectedCategory === category ? 'rgba(29, 153, 204, 0.12)' : '#121212',
                border: selectedCategory === category ? '0.5px solid #1D99CC' : '0.5px solid rgba(255, 255, 255, 0.08)',
                color: selectedCategory === category ? '#1D99CC' : '#808080',
                fontSize: '11px',
                fontWeight: '600',
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="flex-1 overflow-auto px-8 py-6">
          <Masonry columnsCount={3} gutter="16px">
            {filteredTenders.map((tender) => (
              <TenderCard key={tender.id} tender={tender} />
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
}

interface TenderCardProps {
  tender: Tender;
}

function TenderCard({ tender }: TenderCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded overflow-hidden transition-all cursor-pointer"
      style={{
        backgroundColor: '#121212', // Dark Card
        border: isHovered ? '0.5px solid #1D99CC' : '0.5px solid rgba(255, 255, 255, 0.08)',
        boxShadow: isHovered ? '0 0 24px rgba(29, 153, 204, 0.15)' : 'none',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div
        className="px-5 py-4"
        style={{
          borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <div
            style={{
              color: isHovered ? '#1D99CC' : '#B0B0B0',
              fontSize: '10px',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: '700',
              letterSpacing: '0.5px',
            }}
          >
            {tender.mgsId}
          </div>
          <div
            className="px-2 py-1 rounded"
            style={{
              backgroundColor: 'rgba(29, 153, 204, 0.12)',
              color: '#1D99CC',
              fontSize: '10px',
              fontWeight: '700',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {tender.matchScore}% MATCH
          </div>
        </div>

        <h3
          style={{
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: '700',
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.4',
            marginBottom: '8px',
          }}
        >
          {tender.title}
        </h3>

        <div
          className="inline-block px-2 py-1 rounded"
          style={{
            backgroundColor: '#0A0A0A',
            color: '#808080',
            fontSize: '9px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {tender.category}
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-4">
        <p
          style={{
            color: '#808080',
            fontSize: '11px',
            lineHeight: '1.6',
            marginBottom: '16px',
          }}
        >
          {tender.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <MapPin style={{ width: '12px', height: '12px', color: '#606060' }} />
            <span
              style={{
                color: '#B0B0B0',
                fontSize: '11px',
              }}
            >
              {tender.location}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar style={{ width: '12px', height: '12px', color: '#606060' }} />
            <span
              style={{
                color: '#B0B0B0',
                fontSize: '11px',
              }}
            >
              Cierre: {tender.closingDate}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link
            to={`/partner/tender/${tender.mgsId}`}
            className="flex items-center gap-2 px-3 py-2 rounded transition-all"
            style={{
              backgroundColor: isHovered ? '#1D99CC' : 'transparent',
              border: '0.5px solid #1D99CC',
              color: isHovered ? '#FFFFFF' : '#1D99CC',
              fontSize: '11px',
              fontWeight: '600',
              textDecoration: 'none',
            }}
          >
            Ver Pliego
            <ArrowRight style={{ width: '12px', height: '12px' }} />
          </Link>
        </div>
      </div>
    </div>
  );
}