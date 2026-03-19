import React, { useState } from 'react';
import { VesselAssignmentView } from './VesselAssignmentView';
import { MaterialTrackingView } from './MaterialTrackingView';
import './logistica.css';

export const SupplyLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vessels' | 'materials'>('materials');

  return (
    <div className="supply-layout-container">
      <div className="supply-tab-switcher">
        <button 
          className={`tab-btn ${activeTab === 'vessels' ? 'active' : ''}`}
          onClick={() => setActiveTab('vessels')}
        >
          Asignación en Tránsito
        </button>
        <button 
          className={`tab-btn ${activeTab === 'materials' ? 'active' : ''}`}
          onClick={() => setActiveTab('materials')}
        >
          Seguimiento de Materiales
        </button>
      </div>

      <div className="supply-view-content">
        {activeTab === 'vessels' ? (
          <VesselAssignmentView />
        ) : (
          <MaterialTrackingView onSwitchToVessels={() => setActiveTab('vessels')} />
        )}
      </div>
    </div>
  );
};
