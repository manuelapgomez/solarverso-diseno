import React from "react";
import { type Barco, type SlotCarga } from "../../data/mockLogistica";

interface VesselPremiumCardProps {
  ship: Barco;
  isActive: boolean;
  onClick: () => void;
  onOpenSwap: (slot: SlotCarga, slotIndex: number) => void;
  onDeclareArrival?: (shipId: string) => void;
  onReportIncident?: (shipId: string) => void;
  onResumeCourse?: (shipId: string) => void;
}

export const VesselPremiumCard: React.FC<VesselPremiumCardProps> = ({
  ship, isActive, onClick, onOpenSwap, onDeclareArrival, onReportIncident, onResumeCourse
}) => {
  // Calculamos slots llenos
  const filledSlotsCount = ship.slots.filter(s => s.mgsAsignada !== null).length;
  const totalSlots = ship.slots.length;

  // Nueva lógica de alertas condicionales
  const incidentHistory = ship.incidents || [];
  const incidentCount = incidentHistory.length;
  const hasActiveDetention = incidentHistory.some(i => i.type === 'Detention' && !i.isResolved);
  const isOverLimit = incidentCount > 7;
  const showAlertState = hasActiveDetention || isOverLimit;

  return (
    <div className={`ship-card ${isActive ? 'active' : ''} ${showAlertState ? 'alert-state' : ''}`} onClick={(e) => {
      e.stopPropagation();
      if ((e.target as HTMLElement).closest('.cargo-slot') || (e.target as HTMLElement).closest('.mini-slot') || (e.target as HTMLElement).closest('.arrival-declare-btn') || (e.target as HTMLElement).closest('.report-incident-btn') || (e.target as HTMLElement).closest('.alert-resume-btn')) return;

      // Si está en alerta por detención, el click principal abre el reanudar (si el usuario lo prefiere así)
      if (hasActiveDetention && onResumeCourse) {
        onResumeCourse(ship.id);
      } else {
        onClick();
      }
    }}>

      {/* BADGE DE CONTEO DE INCIDENTES */}
      {incidentCount > 0 && (
        <div className={`incident-count-badge ${isOverLimit ? 'badge-limit-hit' : ''}`} title={`${incidentCount} Incidentes en bitácora`}>
          <svg className="badge-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          {incidentCount} {isOverLimit ? 'LÍMITE' : ''}
        </div>
      )}

      {/* BOTÓN DE LLEGADA (TOP LEFT) */}
      {ship.estado === 'On Route' && !hasActiveDetention && onDeclareArrival && (
        <button
          className="arrival-declare-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDeclareArrival(ship.id);
          }}
          title="Nacionalizar"
        >
          <div className="btn-pulse-ring"></div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17H2l2-2h16l2 2z"></path><path d="M20 15V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7"></path></svg>
          <span className="btn-text">Nacionalizar</span>
        </button>
      )}

      {/* 1. SECCIÓN DE SLOTS & SHIP (CENTER) */}
      <div className="vessel-main-visual">
         <div className={`shipcard-hull-wrapper ${ship.tipo === 'aereo' ? 'aereo-wrapper' : ''}`}>
          <div className={`${ship.tipo === 'aereo' ? 'plane-hull-graphic' : 'ship-hull-graphic'} mini`}>
            <div className={`cargo-grid mini ${ship.tipo === 'aereo' ? 'plane-grid' : ''}`}>
              {ship.slots.map((slot, index) => {
                const isFilled = slot.mgsAsignada !== null;
                return (
                  <div
                    key={slot.idSlot}
                    className={`cargo-slot mini-slot ${isFilled ? 'filled' : 'unassigned'} ${hasActiveDetention ? 'disabled' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (hasActiveDetention) return;
                      onOpenSwap(slot, index);
                    }}
                    title={hasActiveDetention ? "Operaciones Suspendidas" : isFilled ? `Reasignar: ${slot.tipoEquipo}` : `Asignar destino para: ${slot.tipoEquipo}`}
                  >
                    <span className="cargo-type-label">{slot.tipoEquipo}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 2. IDENTIDAD Y ACCIONES (BELOW VISUAL) */}
      <div className="vessel-identity-row">
        <h3 className="vessel-id-title">{ship.bl_code.toUpperCase()}</h3>
        
        {/* INCIDENT REPORT BUTTON */}
        {!hasActiveDetention && onReportIncident && (
          <button
            className="report-incident-btn-v2"
            onClick={(e) => { e.stopPropagation(); onReportIncident(ship.id); }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            Bitácora Logística
          </button>
        )}
      </div>

      {/* 3. TIEMPOS Y TRÁNSITO (BOTTOM) */}
      <div className="vessel-transit-footer">
        <div className="transit-node-v2">
          <span className="node-label">SALIDA (ETD)</span>
          <span className="node-date">{ship.etd}</span>
          <span className="node-loc">{ship.tipo === 'aereo' ? 'Shanghai, CN' : 'Shanghai, CN'}</span>
        </div>

        <div className="transit-progress-v2">
          <div className="progress-line"></div>
          <div className="progress-icon-circle">
            {ship.tipo === 'aereo' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2.5">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2.5">
                <path d="M22 17H2l2-2h16l2 2z"></path>
                <path d="M20 15V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7"></path>
              </svg>
            )}
          </div>
        </div>

        <div className="transit-node-v2 align-right">
          <span className="node-label highlight">LLEGADA (ETA)</span>
          <span className="node-date">{ship.eta}</span>
          <span className="node-loc">{ship.tipo === 'aereo' ? 'Barranquilla, CO' : 'Barranquilla, CO'}</span>
        </div>
      </div>

    </div>
  );
};
