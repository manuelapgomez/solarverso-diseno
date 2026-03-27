import { Send } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'admin' | 'partner';
  message: string;
  timestamp: string;
}

interface ChatBoxProps {
  documentName: string;
  messages: ChatMessage[];
  newMessage: string;
  onMessageChange: (message: string) => void;
  onSendMessage: () => void;
  onClose: () => void;
}

export function ChatBox({
  documentName,
  messages,
  newMessage,
  onMessageChange,
  onSendMessage,
  onClose,
}: ChatBoxProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 999,
        }}
        onClick={onClose}
      />

      {/* Chat Box */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '560px',
          height: '640px',
          backgroundColor: '#121212',
          border: '1px solid #333333',
          borderRadius: '12px',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.8)',
        }}
      >
        {/* Chat Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid #222222',
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <h3
              style={{
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: '700',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Chat / Soporte Técnico
            </h3>
            <button
              onClick={onClose}
              style={{
                color: '#606060',
                fontSize: '24px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0',
                lineHeight: '1',
              }}
            >
              ×
            </button>
          </div>
          <p
            style={{
              color: '#808080',
              fontSize: '12px',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {documentName}
          </p>
        </div>

        {/* Chat Messages */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {messages.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                color: '#606060',
                fontSize: '13px',
                padding: '32px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              No hay mensajes. Escribe tu primera duda técnica.
            </div>
          ) : (
            messages.map((msg) => (
              <ChatBubble key={msg.id} message={msg} />
            ))
          )}
        </div>

        {/* Chat Footer - Input */}
        <div
          style={{
            padding: '20px 24px',
            borderTop: '1px solid #222222',
          }}
        >
          <div
            className="flex items-center gap-3"
            style={{
              backgroundColor: '#1E1E1E',
              border: '1px solid #333333',
              borderRadius: '24px',
              padding: '12px 20px',
            }}
          >
            <input
              type="text"
              placeholder="Escribe tu duda técnica..."
              value={newMessage}
              onChange={(e) => onMessageChange(e.target.value)}
              onKeyPress={handleKeyPress}
              style={{
                flex: 1,
                background: 'none',
                border: 'none',
                outline: 'none',
                color: '#FFFFFF',
                fontSize: '13px',
                fontFamily: 'Inter, sans-serif',
              }}
            />
            <button
              onClick={onSendMessage}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Send style={{ width: '18px', height: '18px', color: '#1D99CC' }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ===== CHAT BUBBLE =====
function ChatBubble({ message }: { message: ChatMessage }) {
  const isPartner = message.sender === 'partner';

  return (
    <div
      style={{
        alignSelf: isPartner ? 'flex-end' : 'flex-start',
        maxWidth: '75%',
      }}
    >
      <div
        style={{
          padding: '12px 16px',
          backgroundColor: isPartner ? '#1D99CC' : '#1E1E1E',
          borderRadius: '16px',
          borderBottomRightRadius: isPartner ? '4px' : '16px',
          borderBottomLeftRadius: isPartner ? '16px' : '4px',
        }}
      >
        <p
          style={{
            color: isPartner ? '#000000' : '#E0E0E0',
            fontSize: '13px',
            lineHeight: '1.5',
            marginBottom: '6px',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {message.message}
        </p>
        <span
          style={{
            color: isPartner ? 'rgba(0, 0, 0, 0.5)' : '#606060',
            fontSize: '10px',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          {message.timestamp}
        </span>
      </div>
    </div>
  );
}
