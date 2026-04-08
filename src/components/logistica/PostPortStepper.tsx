import React from 'react';

export type LogisticsPhase = 'barco' | 'puerto' | 'camion';

interface PostPortStepperProps {
  activePhase: LogisticsPhase;
  onPhaseChange: (phase: LogisticsPhase) => void;
}

export const PostPortStepper: React.FC<PostPortStepperProps> = ({ activePhase, onPhaseChange }) => {
  const phases: { id: LogisticsPhase; label: string }[] = [
    { id: 'barco', label: 'EN TRÁNSITO INTERNACIONAL' },
    { id: 'puerto', label: 'EN PUERTO' },
    { id: 'camion', label: 'EN CAMINO A PROYECTOS' }
  ];

  return (
    <div className="stepper-container">
      {phases.map((phase) => (
        <button 
          key={phase.id}
          className={`step-item ${activePhase === phase.id ? 'active' : ''}`}
          onClick={() => onPhaseChange(phase.id)}
        >
          {phase.label}
        </button>
      ))}
    </div>
  );
};
