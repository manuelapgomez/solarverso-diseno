// Data Base Central de UI - Proyecto Solenium Vista Suministro

export type SlotCarga = {
  idSlot: string;
  tipoEquipo: "Tracker" | "Shelter" | "Inversor" | "Paneles" | "Reconectadores" | string | null;
  mgsAsignada: string | null;
  nombreMgs: string | null;
};

export type Barco = {
  id: string;
  bl_code: string;
  nombre: string;
  eta: string;
  loading_progress: number;
  slots: SlotCarga[]; // Capacidad de hasta 15 slots
  portfolio?: string;
  estado?: string;
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

// Generador auxiliar de 15 slots por defecto
const generarSlotsVacios = (prefijo: string): SlotCarga[] => {
  return Array.from({ length: 15 }).map((_, i) => ({
    idSlot: `${prefijo}-SLOT-${i + 1}`,
    tipoEquipo: null,
    mgsAsignada: null,
    nombreMgs: null,
  }));
};

const slotsMSC = generarSlotsVacios("MSC");
// Asignamos algunos quemados para la demostración
slotsMSC[0] = { idSlot: "MSC-SLOT-1", tipoEquipo: "Tracker", mgsAsignada: "MGS-002", nombreMgs: "Uruaco 2" };
slotsMSC[1] = { idSlot: "MSC-SLOT-2", tipoEquipo: "Shelter", mgsAsignada: "MGS-002", nombreMgs: "Uruaco 2" };
slotsMSC[2] = { idSlot: "MSC-SLOT-3", tipoEquipo: "Inversor", mgsAsignada: "MGS-002", nombreMgs: "Uruaco 2" };
slotsMSC[3] = { idSlot: "MSC-SLOT-4", tipoEquipo: "Paneles", mgsAsignada: "MGS-002", nombreMgs: "Uruaco 2" };
slotsMSC[4] = { idSlot: "MSC-SLOT-5", tipoEquipo: "Tracker", mgsAsignada: "MGS-005", nombreMgs: "Valle 5" };
// 10 vacíos...

const slotsPacific = generarSlotsVacios("PAC");
slotsPacific[0] = { idSlot: "PAC-SLOT-1", tipoEquipo: "Tracker", mgsAsignada: "MGS-003", nombreMgs: "Solar Delta" };
slotsPacific[1] = { idSlot: "PAC-SLOT-2", tipoEquipo: "Inversor", mgsAsignada: "MGS-003", nombreMgs: "Solar Delta" };
slotsPacific[2] = { idSlot: "PAC-SLOT-3", tipoEquipo: "Reconectadores", mgsAsignada: "MGS-003", nombreMgs: "Solar Delta" };
slotsPacific[5] = { idSlot: "PAC-SLOT-6", tipoEquipo: "Paneles", mgsAsignada: "MGS-010", nombreMgs: "Uruaco 10" };

const slotsAtlantic = generarSlotsVacios("ATL");
slotsAtlantic[0] = { idSlot: "ATL-SLOT-1", tipoEquipo: "Inversor", mgsAsignada: "MGS-014", nombreMgs: "Solaris 3" };
slotsAtlantic[1] = { idSlot: "ATL-SLOT-2", tipoEquipo: "Tracker", mgsAsignada: "MGS-025", nombreMgs: "Uruaco 1" };

const slotsSolaris = generarSlotsVacios("SOL");
slotsSolaris[0] = { idSlot: "SOL-SLOT-1", tipoEquipo: "Inversor", mgsAsignada: "MGS-101", nombreMgs: "Andes 1" };

const slotsEverest = generarSlotsVacios("EVE");
slotsEverest[0] = { idSlot: "EVE-SLOT-1", tipoEquipo: "Tracker", mgsAsignada: "MGS-401", nombreMgs: "Bucaramanga 1" };

export const inicialBarcosData: Barco[] = [
  {
    id: "SHIP-001",
    bl_code: "BL-7890123",
    nombre: "MSC Katrina",
    eta: "2026-04-15",
    loading_progress: 40,
    slots: slotsMSC,
    portfolio: "Portafolio Andino",
    estado: "On Route"
  },
  {
    id: "SHIP-002",
    bl_code: "BL-8901234",
    nombre: "Pacific Voyager",
    eta: "2026-05-02",
    loading_progress: 27,
    slots: slotsPacific,
    portfolio: "Caribe Solar Grid",
    estado: "Pending"
  },
  {
    id: "SHIP-003",
    bl_code: "BL-9012345",
    nombre: "Atlantic Express",
    eta: "2026-05-20",
    loading_progress: 12,
    slots: slotsAtlantic,
    portfolio: "Valle del Cauca Hub",
    estado: "Arrived"
  },
  {
    id: "SHIP-004",
    bl_code: "BL-1122334",
    nombre: "Solaris Carrier",
    eta: "2026-06-10",
    loading_progress: 85,
    slots: slotsSolaris,
    portfolio: "Portafolio Andino",
    estado: "On Route"
  },
  {
    id: "SHIP-005",
    bl_code: "BL-5566778",
    nombre: "Everest Line",
    eta: "2026-06-25",
    loading_progress: 60,
    slots: slotsEverest,
    portfolio: "Santander Energy Plus",
    estado: "Pending"
  },
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

