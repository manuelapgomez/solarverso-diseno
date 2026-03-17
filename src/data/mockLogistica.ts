// Data Base Central de UI - Proyecto Solenium Vista Suministro

export type EquipoAsignacion = {
  idEquipo: string;
  mgsAsignada: string;
  nombreMgs: string;
};

export type Barco = {
  id: string;
  bl_code: string;
  nombre: string;
  eta: string;
  loading_progress: number;
  asignaciones: {
    Tracker: EquipoAsignacion | null;
    Shelter: EquipoAsignacion | null;
    Inversor: EquipoAsignacion | null;
    Paneles: EquipoAsignacion | null;
    Reconectadores: EquipoAsignacion | null;
  };
};

export type MgsHuerfana = {
  id: string;
  nombre: string;
  prioridadUnergy: "Baja" | "Media" | "Alta" | "Crítica";
  equipoFaltante: string; // Ej. 'Tracker', 'Shelter', etc.
};

export const inicialBarcosData: Barco[] = [
  {
    id: "SHIP-001",
    bl_code: "BL-7890123",
    nombre: "MSC Katrina",
    eta: "2026-04-15",
    loading_progress: 75,
    asignaciones: {
      Tracker: { idEquipo: "EQ-TRK-01", mgsAsignada: "MGS-002", nombreMgs: "Uruaco 2" },
      Shelter: { idEquipo: "EQ-SHL-01", mgsAsignada: "MGS-002", nombreMgs: "Uruaco 2" },
      Inversor: { idEquipo: "EQ-INV-01", mgsAsignada: "MGS-002", nombreMgs: "Uruaco 2" },
      Paneles: { idEquipo: "EQ-PNL-01", mgsAsignada: "MGS-002", nombreMgs: "Uruaco 2" },
      Reconectadores: null,
    },
  },
  {
    id: "SHIP-002",
    bl_code: "BL-8901234",
    nombre: "Pacific Voyager",
    eta: "2026-05-02",
    loading_progress: 10,
    asignaciones: {
      Tracker: { idEquipo: "EQ-TRK-02", mgsAsignada: "MGS-003", nombreMgs: "Solar Delta" },
      Shelter: null,
      Inversor: { idEquipo: "EQ-INV-02", mgsAsignada: "MGS-003", nombreMgs: "Solar Delta" },
      Paneles: null,
      Reconectadores: { idEquipo: "EQ-REC-02", mgsAsignada: "MGS-003", nombreMgs: "Solar Delta" },
    },
  },
];

export const inicialMgsHuerfanasData: MgsHuerfana[] = [
  {
    id: "MGS-008",
    nombre: "Uruaco 8",
    prioridadUnergy: "Crítica",
    equipoFaltante: "Tracker",
  },
  {
    id: "MGS-012",
    nombre: "Valle Solar 1",
    prioridadUnergy: "Alta",
    equipoFaltante: "Shelter",
  },
];
