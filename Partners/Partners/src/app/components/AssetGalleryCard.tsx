import { Calendar, CheckCircle2, AlertTriangle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AssetGalleryCardProps {
  name: string;
  imageUrl?: string;
  ownership: 'Propia' | 'Alquilada';
  soatExpiry: string;
  soatStatus: 'valid' | 'expiring' | 'expired';
  serial: string;
  model?: string;
  specs?: string;
}

export default function AssetGalleryCard({
  name,
  imageUrl,
  ownership,
  soatExpiry,
  soatStatus,
  serial,
  model,
  specs
}: AssetGalleryCardProps) {
  return (
    <div 
      className="rounded-lg overflow-hidden"
      style={{ 
        width: '220px',
        backgroundColor: '#1E1E1E',
        border: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      {/* Image Top - Aspect 16:9 */}
      <div 
        className="relative"
        style={{ 
          width: '100%',
          paddingTop: '56.25%',
          backgroundColor: '#000',
          overflow: 'hidden'
        }}
      >
        {imageUrl ? (
          <ImageWithFallback
            src={imageUrl}
            alt={name}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        ) : (
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: '#1a1a1a' }}
          >
            <span style={{ 
              color: '#707070', 
              fontSize: '10px',
              fontWeight: 600
            }}>
              {name}
            </span>
          </div>
        )}
        
        {/* Ownership Badge Overlay */}
        <div 
          className="absolute top-1 right-1 px-1.5 py-0.5 rounded"
          style={{
            backgroundColor: ownership === 'Propia' 
              ? 'rgba(0, 200, 83, 0.9)' 
              : 'rgba(29, 153, 204, 0.9)',
            color: '#FFFFFF',
            fontSize: '8px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.3px'
          }}
        >
          {ownership}
        </div>

        {/* SOAT Status Overlay - Bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 px-2 py-1.5 flex items-center gap-1.5"
          style={{
            backgroundColor: soatStatus === 'valid' 
              ? 'rgba(0, 200, 83, 0.95)' 
              : soatStatus === 'expiring'
              ? 'rgba(255, 152, 0, 0.95)'
              : 'rgba(255, 82, 82, 0.95)',
            backdropFilter: 'blur(4px)'
          }}
        >
          <Calendar size={10} style={{ color: '#FFFFFF' }} />
          <div className="flex-1">
            <div style={{ 
              color: '#FFFFFF', 
              fontSize: '7px',
              textTransform: 'uppercase',
              letterSpacing: '0.3px',
              marginBottom: '1px'
            }}>
              SOAT {soatStatus === 'expired' ? 'Vencido' : soatStatus === 'expiring' ? 'Próximo a Vencer' : 'Vigente'}
            </div>
            <div style={{ 
              color: '#FFFFFF', 
              fontSize: '9px',
              fontWeight: 700,
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              {soatExpiry}
            </div>
          </div>
          {soatStatus === 'valid' && <CheckCircle2 size={12} style={{ color: '#FFFFFF' }} />}
          {soatStatus !== 'valid' && <AlertTriangle size={12} style={{ color: '#FFFFFF' }} />}
        </div>
      </div>

      {/* Data Section */}
      <div className="p-2">
        <h3 style={{ 
          color: '#FFFFFF', 
          fontSize: '12px',
          fontWeight: 600,
          marginBottom: '4px',
          lineHeight: '1.2'
        }}>
          {name}
        </h3>
        
        <div className="space-y-0.5 mb-2">
          <div className="flex items-center justify-between">
            <span style={{ 
              color: '#707070', 
              fontSize: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.3px'
            }}>
              Serial
            </span>
            <span style={{ 
              color: '#1D99CC', 
              fontSize: '9px',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 600
            }}>
              {serial}
            </span>
          </div>
          
          {model && (
            <div className="flex items-center justify-between">
              <span style={{ 
                color: '#707070', 
                fontSize: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.3px'
              }}>
                Modelo
              </span>
              <span style={{ 
                color: '#FFFFFF', 
                fontSize: '9px',
                fontFamily: 'JetBrains Mono, monospace'
              }}>
                {model}
              </span>
            </div>
          )}
          
          {specs && (
            <div className="flex items-center justify-between">
              <span style={{ 
                color: '#707070', 
                fontSize: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.3px'
              }}>
                Specs
              </span>
              <span style={{ 
                color: '#FFFFFF', 
                fontSize: '9px',
                fontFamily: 'JetBrains Mono, monospace'
              }}>
                {specs}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}