// Data Base Central de UI - Proyecto Solenium Vista Suministro

export type LogisticaState = {
  label: string;
  fechaObjetivo: string;
  fechaReal?: string;
  status: "completed" | "current" | "pending";
};

export type HistorialAsignacion = {
  mgsNombre: string;
  fecha: string;
  motivo: string;
};

export type SlotCarga = {
  idSlot: string;
  tipoEquipo: "Tracker" | "Shelter" | "Inversor" | "Paneles" | "Reconectadores" | string | null;
  mgsAsignada: string | null;
  nombreMgs: string | null;
  // Propiedades Notion-Style
  proveedor?: string;
  oc?: string;
  detallesDiseno?: Record<string, string | number>;
  timeline?: LogisticaState[];
  historial?: HistorialAsignacion[];
  faseLogistica?: 'barco' | 'puerto' | 'camion' | 'campo';
  BT_status?: 'pending' | 'approved';
};

export type Barco = {
  id: string;
  bl_code: string;
  nombre: string;
  etd: string; // Estimated Time of Departure (desde China)
  eta: string; // Estimated Time of Arrival (al destino)
  telemetry?: {
    lat: string;
    lng: string;
    speed: string;
    heading: string;
    lastUpdate: string;
  };
  loading_progress: number;
  slots: SlotCarga[]; // Capacidad de hasta 15 slots
  portfolio?: string;
  estado?: 'Pending' | 'On Route' | 'Arrived' | 'Alert' | string;
  terminalArribo?: 'Cartagena' | 'Buenaventura' | null;
  incidente?: string;
};

export type MgsHuerfana = {
  id: string;
  nombre: string;
  codigo?: string;
  ubicacion?: string;
  prioridadUnergy: "Baja" | "Media" | "Alta" | "Crítica";
  equipoFaltante: string; // Ej. 'Tracker', 'Shelter', etc.
};

export type Minigranja = {
  id: string;
  nombre: string;
  codigo: string;
  ubicacion: string;
  estado: "Priorizada" | "En Espera" | "Asignada";
  progreso: number;
  inversionistaId?: string;
};

export type Portfolio = {
  id: string;
  nombre: string;
  inversionista: string;
  cantidadMgs: number;
  minigranjas: Minigranja[];
};

// Generador auxiliar de 15 slots por defecto (Pre-cargados con equipo aleatorio)
const generarSlotsPreCargados = (prefijo: string): SlotCarga[] => {
  const tipos = ["Tracker", "Shelter", "Inversor", "Paneles", "Reconectadores"];
  return Array.from({ length: 15 }).map((_, i) => {
    const tipo = tipos[Math.floor(Math.random() * tipos.length)];
    return {
      idSlot: `${prefijo}-SLOT-${i + 1}`,
      tipoEquipo: tipo,
      mgsAsignada: null,
      nombreMgs: null,
      proveedor: "Zentrack Industries",
      oc: `OC-2024-${Math.floor(Math.random() * 9000) + 1000}`,
      detallesDiseno: (tipo === "Tracker" ? { "Modelo": "1V84", "Config": "Self-Powered" } : { "Capacidad": "2.5MW", "Tipo": "Outdoor" }) as Record<string, string>,
      timeline: [
        { label: "Zarpe", fechaObjetivo: "2024-03-10", fechaReal: "2024-03-11", status: "completed" },
        { label: "En Barco", fechaObjetivo: "2024-04-15", status: "current" },
        { label: "Nacionalización", fechaObjetivo: "2024-05-01", status: "pending" }
      ],
      historial: [],
      faseLogistica: 'barco',
      BT_status: Math.random() > 0.3 ? 'approved' : 'pending'
    };
  });
};

const slotsMSC = generarSlotsPreCargados("MSC");
// Asignamos algunos quemados para la demostración
slotsMSC[0] = { 
  idSlot: "MSC-SLOT-1", 
  tipoEquipo: "Tracker", 
  mgsAsignada: "MGS-002", 
  nombreMgs: "Uruaco 2",
  proveedor: "NextTracker",
  oc: "OC-7782",
  detallesDiseno: { "Hileras": "24 Mesas", "Viento": "140km/h" },
  timeline: [
    { label: "Zarpe", fechaObjetivo: "2024-01-05", fechaReal: "2024-01-05", status: "completed" },
    { label: "En Barco", fechaObjetivo: "2024-02-10", fechaReal: "2024-02-12", status: "completed" },
    { label: "Nacionalización", fechaObjetivo: "2024-03-01", status: "current" }
  ],
  historial: [
    { mgsNombre: "Galapa Elite", fecha: "2023-12-01", motivo: "Repriorización de Portafolio" }
  ],
  faseLogistica: 'barco',
  BT_status: 'approved'
};
slotsMSC[1] = { idSlot: "MSC-SLOT-2", tipoEquipo: "Shelter", mgsAsignada: "MGS-002", nombreMgs: "Uruaco 2", historial: [] };
slotsMSC[2] = { idSlot: "MSC-SLOT-3", tipoEquipo: "Inversor", mgsAsignada: "MGS-002", nombreMgs: "Uruaco 2", historial: [] };
slotsMSC[3] = { idSlot: "MSC-SLOT-4", tipoEquipo: "Paneles", mgsAsignada: "MGS-002", nombreMgs: "Uruaco 2", historial: [] };
slotsMSC[4] = { idSlot: "MSC-SLOT-5", tipoEquipo: "Tracker", mgsAsignada: "MGS-005", nombreMgs: "Valle 5", historial: [] };
// 10 vacíos...

const slotsPacific = generarSlotsPreCargados("PAC");
slotsPacific[0] = { idSlot: "PAC-SLOT-1", tipoEquipo: "Tracker", mgsAsignada: "MGS-003", nombreMgs: "Solar Delta", historial: [] };
slotsPacific[1] = { idSlot: "PAC-SLOT-2", tipoEquipo: "Inversor", mgsAsignada: "MGS-003", nombreMgs: "Solar Delta", historial: [] };
slotsPacific[2] = { idSlot: "PAC-SLOT-3", tipoEquipo: "Reconectadores", mgsAsignada: "MGS-003", nombreMgs: "Solar Delta", historial: [] };
slotsPacific[5] = { idSlot: "PAC-SLOT-6", tipoEquipo: "Paneles", mgsAsignada: "MGS-010", nombreMgs: "Uruaco 10", historial: [] };

const slotsKraken = generarSlotsPreCargados("KRK");
slotsKraken[0] = { idSlot: "KRK-SLOT-1", tipoEquipo: "Inversor", mgsAsignada: "MGS-120", nombreMgs: "Galapa 4", historial: [] };
slotsKraken[2] = { idSlot: "KRK-SLOT-3", tipoEquipo: "Transformer", mgsAsignada: "MGS-120", nombreMgs: "Galapa 4", historial: [] };

const slotsAtlantic = generarSlotsPreCargados("ATL");
slotsAtlantic[0] = { idSlot: "ATL-SLOT-1", tipoEquipo: "Inversor", mgsAsignada: "MGS-014", nombreMgs: "Solaris 3", historial: [] };
slotsAtlantic[1] = { idSlot: "ATL-SLOT-2", tipoEquipo: "Tracker", mgsAsignada: "MGS-025", nombreMgs: "Uruaco 1", historial: [] };

const slotsSolaris = generarSlotsPreCargados("SOL");
slotsSolaris[0] = { idSlot: "SOL-SLOT-1", tipoEquipo: "Inversor", mgsAsignada: "MGS-101", nombreMgs: "Andes 1", historial: [] };
slotsSolaris[1] = { idSlot: "SOL-SLOT-2", tipoEquipo: "Tracker", mgsAsignada: "MGS-101", nombreMgs: "Andes 1", historial: [] };
slotsSolaris[4] = { idSlot: "SOL-SLOT-5", tipoEquipo: "Paneles", mgsAsignada: "MGS-101", nombreMgs: "Andes 1", historial: [] };

const slotsEverest = generarSlotsPreCargados("EVE");
slotsEverest[0] = { idSlot: "EVE-SLOT-1", tipoEquipo: "Tracker", mgsAsignada: "MGS-401", nombreMgs: "Bucaramanga 1", historial: [] };

const slotsTitan = generarSlotsPreCargados("TIT");
slotsTitan[0] = { idSlot: "TIT-SLOT-1", tipoEquipo: "Paneles", mgsAsignada: "MGS-102", nombreMgs: "Andes 2", historial: [] };
slotsTitan[1] = { idSlot: "TIT-SLOT-2", tipoEquipo: "Tracker", mgsAsignada: "MGS-102", nombreMgs: "Andes 2", historial: [] };

const slotsAurora = generarSlotsPreCargados("AUR");
slotsAurora[0] = { idSlot: "AUR-SLOT-1", tipoEquipo: "Inversor", mgsAsignada: "MGS-203", nombreMgs: "Bolívar Eco", historial: [] };
slotsAurora[3] = { idSlot: "AUR-SLOT-4", tipoEquipo: "Shelter", mgsAsignada: "MGS-203", nombreMgs: "Bolívar Eco", historial: [] };

export const inicialBarcosData: Barco[] = [
  {
    id: "SHIP-001",
    bl_code: "BL-7890123",
    nombre: "MSC Katrina",
    etd: "2026-03-05",
    eta: "2026-04-15",
    telemetry: { lat: "12.3° N", lng: "74.8° W", speed: "18.5 kn", heading: "285°", lastUpdate: "3m ago" },
    loading_progress: 100,
    slots: slotsMSC,
    portfolio: "Portafolio Andino",
    estado: "On Route"
  },
  {
    id: "SHIP-002",
    bl_code: "BL-8901234",
    nombre: "Pacific Voyager",
    etd: "2026-03-24",
    eta: "2026-05-02",
    telemetry: { lat: "22.1° N", lng: "114.2° E", speed: "14.2 kn", heading: "180°", lastUpdate: "12m ago" },
    loading_progress: 100,
    slots: slotsPacific,
    portfolio: "Caribe Solar Grid",
    estado: "Pending"
  },
  {
    id: "SHIP-003",
    bl_code: "BL-9012345",
    nombre: "Atlantic Express",
    etd: "2026-04-10",
    eta: "2026-05-20",
    telemetry: { lat: "10.5° N", lng: "75.5° W", speed: "16.8 kn", heading: "90°", lastUpdate: "Just now" },
    loading_progress: 100,
    slots: slotsAtlantic,
    portfolio: "Valle del Cauca Hub",
    estado: "Arrived",
    terminalArribo: "Cartagena"
  },
  {
    id: "SHIP-004",
    bl_code: "BL-1122334",
    nombre: "Solaris Carrier",
    etd: "2026-05-01",
    eta: "2026-06-10",
    telemetry: { lat: "1.2° S", lng: "103.8° E", speed: "19.2 kn", heading: "270°", lastUpdate: "5m ago" },
    loading_progress: 100,
    slots: slotsSolaris,
    portfolio: "Portafolio Andino",
    estado: "On Route"
  },
  {
    id: "SHIP-005",
    bl_code: "BL-5566778",
    nombre: "Everest Line",
    etd: "2026-05-15",
    eta: "2026-06-25",
    loading_progress: 100,
    slots: slotsEverest,
    portfolio: "Santander Energy Plus",
    estado: "Pending"
  },
  {
    id: "SHIP-006",
    bl_code: "BL-3344556",
    nombre: "Titan Ocean",
    etd: "2026-06-02",
    eta: "2026-07-12",
    loading_progress: 100,
    slots: slotsTitan,
    portfolio: "Portafolio Andino",
    estado: "Pending"
  },
  {
    id: "SHIP-007",
    bl_code: "BL-9988776",
    nombre: "Aurora Line",
    etd: "2026-06-25",
    eta: "2026-08-05",
    loading_progress: 100,
    slots: slotsAurora,
    portfolio: "Caribe Solar Grid",
    estado: "Pending"
  }
];

export const inicialMgsHuerfanasData: MgsHuerfana[] = [
  { 
    id: "MGS-008", 
    nombre: "Uruaco 8", 
    codigo: "COLATLT14P2_LURUACO_SUR",
    ubicacion: "Uruaco - Luruaco, Atlántico",
    prioridadUnergy: "Crítica", 
    equipoFaltante: "Tracker" 
  },
  { 
    id: "MGS-012", 
    nombre: "Valle Solar 1", 
    codigo: "COLVAL85P1_VALLEDUPAR",
    ubicacion: "Valle Solar - Valledupar, Cesar",
    prioridadUnergy: "Alta", 
    equipoFaltante: "Shelter" 
  },
  { 
    id: "MGS-014", 
    nombre: "Solaris 3", 
    codigo: "COLMAG30P3_FUNDACION",
    ubicacion: "Solaris - Fundación, Magdalena",
    prioridadUnergy: "Media", 
    equipoFaltante: "Inversor" 
  },
  {
    id: "MGS-025",
    nombre: "Uruaco 1",
    codigo: "COLATLT14P1_LURUACO_NORTE",
    ubicacion: "Uruaco - Luruaco, Atlántico",
    prioridadUnergy: "Crítica",
    equipoFaltante: "Tracker"
  }
];

export const mockPortfolios: Portfolio[] = [
  {
    id: "PORT-001",
    nombre: "Portafolio Andino",
    inversionista: "Green Energy Fund LLC",
    cantidadMgs: 4,
    minigranjas: [
      { id: "MGS-101", nombre: "Andes 1", codigo: "COLAND01", ubicacion: "Antioquia, Col", estado: "Priorizada", progreso: 100 },
      { id: "MGS-102", nombre: "Andes 2", codigo: "COLAND02", ubicacion: "Antioquia, Col", estado: "En Espera", progreso: 40 },
      { id: "MGS-103", nombre: "Caldas Solar", codigo: "COLCAL01", ubicacion: "Caldas, Col", estado: "Priorizada", progreso: 80 },
      { id: "MGS-104", nombre: "Risaralda Eco", codigo: "COLRIS01", ubicacion: "Risaralda, Col", estado: "Asignada", progreso: 100 }
    ]
  },
  {
    id: "PORT-002",
    nombre: "Caribe Solar Grid",
    inversionista: "Nordic Renewables",
    cantidadMgs: 3,
    minigranjas: [
      { id: "MGS-201", nombre: "Atlántico Norte", codigo: "COLATL01", ubicacion: "Atlántico, Col", estado: "Priorizada", progreso: 60 },
      { id: "MGS-202", nombre: "Atlántico Sur", codigo: "COLATL02", ubicacion: "Atlántico, Col", estado: "Priorizada", progreso: 90 },
      { id: "MGS-203", nombre: "Bolívar Eco", codigo: "COLBOL01", ubicacion: "Bolívar, Col", estado: "En Espera", progreso: 20 }
    ]
  },
  {
    id: "PORT-003",
    nombre: "Valle del Cauca Hub",
    inversionista: "Inversiones del Pacífico",
    cantidadMgs: 2,
    minigranjas: [
      { id: "MGS-301", nombre: "Cali Central", codigo: "COLVAL01", ubicacion: "Valle, Col", estado: "Priorizada", progreso: 75 },
      { id: "MGS-302", nombre: "Palmira Solar", codigo: "COLVAL02", ubicacion: "Valle, Col", estado: "Priorizada", progreso: 85 }
    ]
  },
  {
    id: "PORT-004",
    nombre: "Santander Energy Plus",
    inversionista: "EcoCapital Partners",
    cantidadMgs: 5,
    minigranjas: [
      { id: "MGS-401", nombre: "Bucaramanga 1", codigo: "COLSAN01", ubicacion: "Santander, Col", estado: "Asignada", progreso: 100 },
      { id: "MGS-402", nombre: "Giron Solar", codigo: "COLSAN02", ubicacion: "Santander, Col", estado: "Priorizada", progreso: 50 },
      { id: "MGS-403", nombre: "Piedecuesta", codigo: "COLSAN03", ubicacion: "Santander, Col", estado: "En Espera", progreso: 10 },
      { id: "MGS-404", nombre: "Lebrija Sol", codigo: "COLSAN04", ubicacion: "Santander, Col", estado: "En Espera", progreso: 5 },
      { id: "MGS-405", nombre: "Mesa de los Santos", codigo: "COLSAN05", ubicacion: "Santander, Col", estado: "Priorizada", progreso: 95 }
    ]
  }
];

