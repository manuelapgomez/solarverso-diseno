import React from 'react';

export type LogisticsPhase = 'barco' | 'puerto' | 'camion' | 'campo';

interface PostPortStepperProps {
  activePhase: LogisticsPhase;
  onPhaseChange: (phase: LogisticsPhase) => void;
}

export const PostPortStepper: React.FC<PostPortStepperProps> = ({ activePhase, onPhaseChange }) => {
  const phases: { id: LogisticsPhase; label: string }[] = [
    { id: 'barco', label: 'BARCOS EN TRÁNSITO' },
    { id: 'puerto', label: 'CONTAINERS EN PUERTO' },
    { id: 'camion', label: 'CONTAINERS EN CAMIONES' },
    { id: 'campo', label: 'EQUIPO EN CAMPO' }
  ];

  return (
    <div className="post-port-stepper">
      {phases.map((phase, index) => (
        <React.Fragment key={phase.id}>
          <button 
            className={`stepper-item ${activePhase === phase.id ? 'active' : ''}`}
            onClick={() => onPhaseChange(phase.id)}
          >
            {phase.label}
          </button>
          {index < phases.length - 1 && <div className="stepper-divider"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};
