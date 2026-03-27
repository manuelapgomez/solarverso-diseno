import { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertCircle, 
  MapPin,
  Calendar,
  Shield,
  Phone,
  Mail,
  Building2,
  FileText,
  Wrench,
  Users
} from 'lucide-react';
import GlobalSidebar from '../components/GlobalSidebar';

interface Partner {
  id: string;
  name: string;
  status: 'approved' | 'pending' | 'rejected';
  location: string;
  machinery: number;
  staff: number;
  certExpiry: string;
  contact: string;
  email: string;
}

const mockPartners: Partner[] = [
  {
    id: 'SST-001',
    name: 'Construcciones Andinas SAS',
    status: 'approved',
    location: 'Medellín, ANT',
    machinery: 12,
    staff: 24,
    certExpiry: '2026-08-15',
    contact: '+57 314 555 0123',
    email: 'contacto@andinas.co'
  },
  {
    id: 'SST-002',
    name: 'Maquinaria del Valle LTDA',
    status: 'pending',
    location: 'Cali, VAC',
    machinery: 8,
    staff: 16,
    certExpiry: '2026-03-20',
    contact: '+57 312 555 0456',
    email: 'info@maqdelvalle.com'
  },
  {
    id: 'SST-003',
    name: 'Transportes Bogotá Express',
    status: 'approved',
    location: 'Bogotá, CUN',
    machinery: 18,
    staff: 35,
    certExpiry: '2027-01-10',
    contact: '+57 310 555 0789',
    email: 'admin@bogotaexpress.co'
  }
];

export default function SSTCommandCenter() {
  const navigate = useNavigate();
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(mockPartners[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPartners = mockPartners.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div 
      className="h-screen w-screen flex overflow-hidden"
      style={{ 
        fontFamily: 'var(--font-ui)',
        backgroundColor: 'var(--ui-bg-color)'
      }}
    >
      {/* Global Sidebar */}
      <GlobalSidebar />

      {/* Sidebar */}
      <div 
        className="flex flex-col"
        style={{ 
          width: '260px',
          backgroundColor: 'var(--panel-bg-color)',
          borderRight: '1px solid var(--stroke-color)'
        }}
      >
        {/* Header */}
        <div className="px-4 py-4" style={{ borderBottom: '1px solid var(--stroke-color)' }}>
          <h1 style={{ 
            color: 'var(--text-on-dark)', 
            fontSize: '16px',
            fontWeight: 700,
            marginBottom: '4px'
          }}>
            SST Command Center
          </h1>
          <p style={{ 
            color: 'var(--text-inactive)', 
            fontSize: '10px'
          }}>
            Centro de Operaciones de Contratistas
          </p>
        </div>

        {/* Search */}
        <div className="px-4 py-3" style={{ borderBottom: '1px solid var(--stroke-color)' }}>
          <div className="relative">
            <Search 
              size={14} 
              style={{ 
                position: 'absolute', 
                left: '8px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: 'var(--text-inactive)'
              }} 
            />
            <input
              type="text"
              placeholder="Buscar contratista..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                height: '32px',
                paddingLeft: '30px',
                paddingRight: '8px',
                backgroundColor: 'var(--ui-bg-color)',
                border: '1px solid var(--stroke-color)',
                borderRadius: '4px',
                color: 'var(--text-on-dark)',
                fontSize: '11px'
              }}
            />
          </div>
        </div>

        {/* Partner List */}
        <div className="flex-1 overflow-y-auto">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              onClick={() => setSelectedPartner(partner)}
              onDoubleClick={() => navigate(`/partners/${partner.id}/assets`)}
              className="px-4 py-3 cursor-pointer transition-colors"
              style={{
                borderBottom: '1px solid var(--stroke-color)',
                backgroundColor: selectedPartner?.id === partner.id 
                  ? 'rgba(29, 153, 204, 0.15)' 
                  : 'transparent',
                borderLeft: selectedPartner?.id === partner.id 
                  ? '3px solid var(--accent-color)' 
                  : '3px solid transparent'
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div style={{ 
                    color: 'var(--text-on-dark)', 
                    fontSize: '12px',
                    fontWeight: 600,
                    marginBottom: '2px'
                  }}>
                    {partner.name}
                  </div>
                  <div style={{ 
                    color: 'var(--text-inactive)', 
                    fontSize: '10px',
                    fontFamily: 'var(--font-data)'
                  }}>
                    {partner.id}
                  </div>
                </div>
                {partner.status === 'approved' && (
                  <CheckCircle2 size={14} style={{ color: '#4CAF50' }} />
                )}
                {partner.status === 'pending' && (
                  <AlertCircle size={14} style={{ color: '#FF9800' }} />
                )}
              </div>
              <div className="flex items-center gap-1" style={{ marginTop: '6px' }}>
                <MapPin size={10} style={{ color: 'var(--text-inactive)' }} />
                <span style={{ 
                  color: 'var(--text-inactive)', 
                  fontSize: '10px'
                }}>
                  {partner.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Button */}
        <div className="px-4 py-3" style={{ borderTop: '1px solid var(--stroke-color)' }}>
          <button
            className="w-full h-9 rounded flex items-center justify-center gap-2"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid var(--stroke-color)',
              color: 'var(--text-on-dark)',
              fontSize: '11px',
              fontWeight: 600
            }}
          >
            <Filter size={14} />
            Filtros Avanzados
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Toolbar */}
        <div 
          className="h-12 px-4 flex items-center gap-2"
          style={{ 
            backgroundColor: 'var(--panel-bg-color)',
            borderBottom: '1px solid var(--stroke-color)'
          }}
        >
          <span style={{ 
            color: 'var(--text-inactive)', 
            fontSize: '11px'
          }}>
            {filteredPartners.length} contratistas
          </span>
        </div>

        {/* Data Grid */}
        <div className="flex-1 overflow-auto p-4">
          <div 
            className="rounded-lg overflow-hidden"
            style={{ border: '1px solid var(--stroke-color)' }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--panel-bg-color)' }}>
                  <th style={{ 
                    padding: '10px 12px', 
                    textAlign: 'left',
                    color: 'var(--text-inactive)',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '1px solid var(--stroke-color)'
                  }}>
                    ID
                  </th>
                  <th style={{ 
                    padding: '10px 12px', 
                    textAlign: 'left',
                    color: 'var(--text-inactive)',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '1px solid var(--stroke-color)'
                  }}>
                    Contratista
                  </th>
                  <th style={{ 
                    padding: '10px 12px', 
                    textAlign: 'left',
                    color: 'var(--text-inactive)',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '1px solid var(--stroke-color)'
                  }}>
                    Estado
                  </th>
                  <th style={{ 
                    padding: '10px 12px', 
                    textAlign: 'left',
                    color: 'var(--text-inactive)',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '1px solid var(--stroke-color)'
                  }}>
                    Ubicación
                  </th>
                  <th style={{ 
                    padding: '10px 12px', 
                    textAlign: 'right',
                    color: 'var(--text-inactive)',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '1px solid var(--stroke-color)'
                  }}>
                    Maquinaria
                  </th>
                  <th style={{ 
                    padding: '10px 12px', 
                    textAlign: 'right',
                    color: 'var(--text-inactive)',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '1px solid var(--stroke-color)'
                  }}>
                    Personal
                  </th>
                  <th style={{ 
                    padding: '10px 12px', 
                    textAlign: 'left',
                    color: 'var(--text-inactive)',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '1px solid var(--stroke-color)'
                  }}>
                    Cert. Expira
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPartners.map((partner) => (
                  <tr
                    key={partner.id}
                    onClick={() => setSelectedPartner(partner)}
                    onDoubleClick={() => navigate(`/partners/${partner.id}/assets`)}
                    className="cursor-pointer transition-colors"
                    style={{
                      backgroundColor: selectedPartner?.id === partner.id 
                        ? 'rgba(29, 153, 204, 0.1)' 
                        : 'transparent',
                      borderBottom: '1px solid var(--stroke-color)'
                    }}
                  >
                    <td style={{ 
                      padding: '10px 12px',
                      color: 'var(--accent-color)',
                      fontSize: '11px',
                      fontFamily: 'var(--font-data)',
                      fontWeight: 600
                    }}>
                      {partner.id}
                    </td>
                    <td style={{ 
                      padding: '10px 12px',
                      color: 'var(--text-on-dark)',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {partner.name}
                    </td>
                    <td style={{ padding: '10px 12px' }}>
                      <span
                        className="px-2 py-1 rounded"
                        style={{
                          backgroundColor: partner.status === 'approved' 
                            ? 'rgba(76, 175, 80, 0.2)' 
                            : partner.status === 'pending'
                            ? 'rgba(255, 152, 0, 0.2)'
                            : 'rgba(244, 67, 54, 0.2)',
                          color: partner.status === 'approved' 
                            ? '#4CAF50' 
                            : partner.status === 'pending'
                            ? '#FF9800'
                            : '#F44336',
                          fontSize: '10px',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.3px'
                        }}
                      >
                        {partner.status === 'approved' ? 'Aprobado' : 'Pendiente'}
                      </span>
                    </td>
                    <td style={{ 
                      padding: '10px 12px',
                      color: 'var(--text-inactive)',
                      fontSize: '11px'
                    }}>
                      {partner.location}
                    </td>
                    <td style={{ 
                      padding: '10px 12px',
                      color: 'var(--text-on-dark)',
                      fontSize: '12px',
                      textAlign: 'right',
                      fontFamily: 'var(--font-data)'
                    }}>
                      {partner.machinery}
                    </td>
                    <td style={{ 
                      padding: '10px 12px',
                      color: 'var(--text-on-dark)',
                      fontSize: '12px',
                      textAlign: 'right',
                      fontFamily: 'var(--font-data)'
                    }}>
                      {partner.staff}
                    </td>
                    <td style={{ 
                      padding: '10px 12px',
                      color: 'var(--text-on-dark)',
                      fontSize: '11px',
                      fontFamily: 'var(--font-data)'
                    }}>
                      {partner.certExpiry}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Inspector Panel */}
      {selectedPartner && (
        <div 
          className="flex flex-col overflow-hidden"
          style={{ 
            width: '320px',
            backgroundColor: 'var(--panel-bg-color)',
            borderLeft: '1px solid var(--stroke-color)'
          }}
        >
          {/* Header */}
          <div className="px-4 py-4" style={{ borderBottom: '1px solid var(--stroke-color)' }}>
            <h2 style={{ 
              color: 'var(--text-on-dark)', 
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '2px'
            }}>
              Detalles del Contratista
            </h2>
            <p style={{ 
              color: 'var(--text-inactive)', 
              fontSize: '10px',
              fontFamily: 'var(--font-data)'
            }}>
              {selectedPartner.id}
            </p>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {/* Company Info */}
            <div>
              <div style={{ 
                color: 'var(--text-inactive)', 
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '8px'
              }}>
                Información General
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Building2 size={14} style={{ color: 'var(--text-inactive)', marginTop: '2px' }} />
                  <div className="flex-1">
                    <div style={{ 
                      color: 'var(--text-on-dark)', 
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {selectedPartner.name}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={14} style={{ color: 'var(--text-inactive)', marginTop: '2px' }} />
                  <div className="flex-1">
                    <div style={{ 
                      color: 'var(--text-on-dark)', 
                      fontSize: '11px'
                    }}>
                      {selectedPartner.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <div style={{ 
                color: 'var(--text-inactive)', 
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '8px'
              }}>
                Contacto
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Phone size={14} style={{ color: 'var(--text-inactive)', marginTop: '2px' }} />
                  <div className="flex-1">
                    <div style={{ 
                      color: 'var(--text-on-dark)', 
                      fontSize: '11px',
                      fontFamily: 'var(--font-data)'
                    }}>
                      {selectedPartner.contact}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail size={14} style={{ color: 'var(--text-inactive)', marginTop: '2px' }} />
                  <div className="flex-1">
                    <div style={{ 
                      color: 'var(--accent-color)', 
                      fontSize: '11px',
                      fontFamily: 'var(--font-data)'
                    }}>
                      {selectedPartner.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div>
              <div style={{ 
                color: 'var(--text-inactive)', 
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '8px'
              }}>
                Recursos
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wrench size={14} style={{ color: 'var(--text-inactive)' }} />
                    <span style={{ 
                      color: 'var(--text-on-dark)', 
                      fontSize: '11px'
                    }}>
                      Maquinaria
                    </span>
                  </div>
                  <span style={{ 
                    color: 'var(--accent-color)', 
                    fontSize: '13px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-data)'
                  }}>
                    {selectedPartner.machinery}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users size={14} style={{ color: 'var(--text-inactive)' }} />
                    <span style={{ 
                      color: 'var(--text-on-dark)', 
                      fontSize: '11px'
                    }}>
                      Personal
                    </span>
                  </div>
                  <span style={{ 
                    color: 'var(--accent-color)', 
                    fontSize: '13px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-data)'
                  }}>
                    {selectedPartner.staff}
                  </span>
                </div>
              </div>
            </div>

            {/* Certification */}
            <div>
              <div style={{ 
                color: 'var(--text-inactive)', 
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '8px'
              }}>
                Certificación
              </div>
              <div className="flex items-start gap-2">
                <Shield size={14} style={{ color: '#4CAF50', marginTop: '2px' }} />
                <div className="flex-1">
                  <div style={{ 
                    color: 'var(--text-on-dark)', 
                    fontSize: '11px',
                    marginBottom: '2px'
                  }}>
                    SST Vigente
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={10} style={{ color: 'var(--text-inactive)' }} />
                    <span style={{ 
                      color: 'var(--text-inactive)', 
                      fontSize: '10px',
                      fontFamily: 'var(--font-data)'
                    }}>
                      Exp: {selectedPartner.certExpiry}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="px-4 py-3" style={{ borderTop: '1px solid var(--stroke-color)' }}>
            <button
              onClick={() => navigate(`/partners/${selectedPartner.id}/assets`)}
              className="w-full h-10 rounded flex items-center justify-center gap-2"
              style={{
                backgroundColor: 'var(--accent-color)',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: 600
              }}
            >
              <FileText size={14} />
              Ver Perfil Completo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}