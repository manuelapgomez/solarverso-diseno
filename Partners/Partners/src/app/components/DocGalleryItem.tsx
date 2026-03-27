import { FileText, FileCheck, FileX, FileClock, Clock } from 'lucide-react';

interface DocGalleryItemProps {
  name: string;
  category: string;
  status: 'approved' | 'review' | 'pending' | 'rejected';
  uploadDate: string;
}

export default function DocGalleryItem({ name, category, status, uploadDate }: DocGalleryItemProps) {
  const getStatusConfig = () => {
    switch (status) {
      case 'approved':
        return {
          icon: <FileCheck size={28} />,
          bg: 'rgba(0, 200, 83, 0.1)',
          color: '#00C853',
          label: 'Aprobado',
          iconBg: 'rgba(0, 200, 83, 0.15)'
        };
      case 'review':
        return {
          icon: <FileClock size={28} />,
          bg: 'rgba(255, 152, 0, 0.1)',
          color: '#FF9800',
          label: 'En Revisión',
          iconBg: 'rgba(255, 152, 0, 0.15)'
        };
      case 'pending':
        return {
          icon: <Clock size={28} />,
          bg: 'rgba(158, 158, 158, 0.1)',
          color: '#9E9E9E',
          label: 'Pendiente',
          iconBg: 'rgba(158, 158, 158, 0.15)'
        };
      case 'rejected':
        return {
          icon: <FileX size={28} />,
          bg: 'rgba(255, 82, 82, 0.1)',
          color: '#FF5252',
          label: 'Subsanar',
          iconBg: 'rgba(255, 82, 82, 0.15)'
        };
      default:
        return {
          icon: <FileText size={28} />,
          bg: 'rgba(158, 158, 158, 0.1)',
          color: '#9E9E9E',
          label: 'Desconocido',
          iconBg: 'rgba(158, 158, 158, 0.15)'
        };
    }
  };

  const config = getStatusConfig();
  
  // Highlight Póliza RCE with special border
  const isPoliza = name.includes('Póliza RCE');

  return (
    <div
      className="flex flex-col p-4 rounded transition-all cursor-pointer"
      style={{
        backgroundColor: '#1E1E1E',
        border: isPoliza ? '1px solid #1D99CC' : '1px solid rgba(255, 255, 255, 0.05)',
        minHeight: '140px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#252525';
        e.currentTarget.style.borderColor = isPoliza ? '#1D99CC' : 'rgba(255, 255, 255, 0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#1E1E1E';
        e.currentTarget.style.borderColor = isPoliza ? '#1D99CC' : 'rgba(255, 255, 255, 0.05)';
      }}
    >
      {/* PDF Icon Container */}
      <div 
        className="rounded flex items-center justify-center mb-3"
        style={{
          width: '48px',
          height: '48px',
          backgroundColor: config.iconBg,
          color: config.color,
          flexShrink: 0
        }}
      >
        {config.icon}
      </div>

      {/* Filename */}
      <div 
        className="mb-2"
        style={{ 
          color: '#FFFFFF',
          fontSize: '13px',
          fontWeight: 600,
          lineHeight: '1.3',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          flex: '1'
        }}
      >
        {name}
      </div>

      {/* Category */}
      <div style={{ 
        color: '#B0B0B0',
        fontSize: '11px',
        marginBottom: '8px'
      }}>
        {category}
      </div>

      {/* Status Badge */}
      <div 
        className="inline-flex items-center gap-1 px-2 py-1 rounded self-start"
        style={{
          backgroundColor: config.bg,
          color: config.color,
          fontSize: '9px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.3px'
        }}
      >
        {config.label}
      </div>
    </div>
  );
}