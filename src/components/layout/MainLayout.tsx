import React, { useState } from 'react';
import { Sidebar } from '../common/Sidebar';
import { Header } from '../common/Header';
import { SupplyLayout } from '../logistica/SupplyLayout';

export const MainLayout: React.FC = () => {
  const [activeView, setActiveView] = useState('my-requests');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case 'suministro':
        return <SupplyLayout />;
      default:
        return (
          <div style={{ 
            padding: '80px 24px', 
            textAlign: 'center', 
            color: 'var(--color-text-medium, #818181)',
            fontFamily: 'var(--font-family-primary, "Poppins", sans-serif)'
          }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              background: 'var(--brand-primary, #1d99cc)', 
              borderRadius: '16px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 auto 24px',
              color: 'white',
              opacity: 0.1
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: 700, 
              color: 'var(--color-text-dark, #282828)',
              marginBottom: '12px' 
            }}>
              Vista en Construcción
            </h2>
            <p style={{ fontSize: '16px', maxWidth: '400px', margin: '0 auto' }}>
              Esta sección de la plataforma <strong>Compras</strong> está siendo integrada. 
              Por favor, utiliza el menú lateral para navegar.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="platform-wrapper" style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
      <Sidebar 
        activeId={activeView} 
        onSelect={setActiveView} 
        collapsed={isSidebarCollapsed}
      />
      
      <main className="main-viewport" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header 
          onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
          isSidebarCollapsed={isSidebarCollapsed}
        />
        <div className="content-scroll-area" style={{ flex: 1, overflowY: 'auto' }}>
          {renderContent()}
        </div>
      </main>
    </div>
  );
};
