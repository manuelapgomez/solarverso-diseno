// Data Base Central de UI - Proyecto Solenium Vista Suministro

export type LogisticaState = {
  label: string;
  fechaObjetivo: string;
  fechaReal?: string;
  status: "completed" | "current" | "pending" | "alert";
};

export type ChatMessage = {
  id: string;
  author: string;
  role: string;
  timestamp: string;
  content: string;
  attachment?: string;
  side: 'left' | 'right';
};

export type DocChecklist = {
  nombre: string;
  fecha: string;
  comentarios: string;
  valoracion: 'Cumple' | 'No cumple' | 'No aplica';
  chat?: ChatMessage[];
};

export type SpecEquipo = {
  hileras?: string;
  corrosionAtmosferica?: string;
  corrosionSuelo?: string;
  zonaVientos?: string;
  tamanoEquipo?: { code: string; quantity: number }[];
  [key: string]: any;
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
  pedidoCreado?: string;
  productoId?: string;
  proveedor?: string;
  oc?: string;
  ocZentrak?: string;
  estadoActual?: string;
  fechaTentativa?: string;
  bls?: string[];
  especificaciones?: SpecEquipo;
  documentos?: DocChecklist[];
  detallesDiseno?: Record<string, string | number>;
  timeline?: LogisticaState[];
  historial?: HistorialAsignacion[];
  faseLogistica?: 'barco' | 'puerto' | 'camion' | 'campo';
  BT_status?: 'pending' | 'approved' | 'rejected' | string;
  cantidadTotal?: number;
  cantidadDisponible?: number;
};

export type CamionItem = {
  tipo: string;
  cantidad: number;
  shipId: string;
  slotId: string;
  idMgsDestino: string;
  nombreMgsDestino: string;
  fechaEntrega: string;
};

export type Camion = {
  id: string;
  placa: string;
  capacidadMax: number;
  capacidadActual: number;
  estado: 'Loading' | 'On Route' | 'Arrived';
  items: CamionItem[];
  fechaRecepcion?: string;
  recepcionista?: string;
};

export type Incident = {
  id: string;
  category: string; // e.g., 'Huelga', 'Clima', 'Falla Mecánica', 'Repriorización', 'Cambio de Puerto'
  type: 'Detention' | 'Route';
  reason: string;
  date: string;
  etaImpact?: number; // Days +/-
  isResolved?: boolean;
};

export type Barco = {
  id: string;
  bl_code: string;
  nombre: string;
  etd: string; 
  eta: string; 
  telemetry?: {
    lat: string;
    lng: string;
    speed: string;
    heading: string;
    lastUpdate: string;
  };
  loading_progress: number;
  slots: SlotCarga[]; 
  portfolio?: string;
  estado?: 'Pending' | 'On Route' | 'Arrived' | 'Alert' | string;
  terminalArribo?: 'Cartagena' | 'Buenaventura' | null;
  incidents: Incident[];
};

export type MgsHuerfana = {
  id: string;
  nombre: string;
  codigo?: string;
  ubicacion?: string;
  prioridadUnergy?: string;
  equipoFaltante?: string;
};

export type EquipmentRequirement = {
  tipo: 'Tracker' | 'Shelter' | 'Inversor' | 'Paneles' | 'Reconectadores';
  estado: 'Faltante' | 'Ingreso a Zona Franca' | 'Licencia de importación' | 'Nacionalización' | 'Entregado' | string;
  fecha?: string;
  specs?: SpecEquipo;
};

export type Minigranja = {
  id: string;
  nombre: string;
  codigo: string;
  ubicacion: string;
  estado: string;
  progreso: number;
  requerimientos?: EquipmentRequirement[];
};

export type Portfolio = {
  id: string;
  nombre: string;
  inversionista: string;
  cantidadMgs: number;
  minigranjas: Minigranja[];
};

const generarTimelineFull = (): LogisticaState[] => [
  { label: "Pedido", fechaObjetivo: "2024-01-15", fechaReal: "2024-01-16", status: "completed" },
  { label: "En Diseño", fechaObjetivo: "2024-02-01", fechaReal: "2024-02-05", status: "completed" },
  { label: "Fabricación", fechaObjetivo: "2024-03-01", status: "current" },
  { label: "Booking", fechaObjetivo: "2024-03-15", status: "pending" },
  { label: "Zarpe", fechaObjetivo: "2024-04-01", status: "pending" },
  { label: "Licencia de Importación", fechaObjetivo: "2024-04-15", status: "pending" },
  { label: "Nacionalización", fechaObjetivo: "2024-05-01", status: "pending" },
  { label: "Ingreso a Zona Franca", fechaObjetivo: "2024-05-15", status: "pending" },
  { label: "Inspección", fechaObjetivo: "2024-06-01", status: "pending" },
  { label: "Transporte al Proyecto", fechaObjetivo: "2024-06-15", status: "pending" },
  { label: "En Inventario", fechaObjetivo: "2024-07-01", status: "pending" },
];

const generarSlotsPreCargados = (prefijo: string): SlotCarga[] => {
  const tipos = ["Tracker", "Shelter", "Inversor", "Paneles", "Reconectadores"];
  return Array.from({ length: 15 }).map((_, i) => {
    const tipo = tipos[Math.floor(Math.random() * tipos.length)];
    return {
      idSlot: `${prefijo}-SLOT-${i + 1}`,
      tipoEquipo: tipo,
      mgsAsignada: null,
      nombreMgs: null,
      pedidoCreado: "4 de diciembre de 2025 11:01 a.m.",
      productoId: `P${Math.floor(Math.random() * 900000) + 100000}`,
      proveedor: "Zentrack Industries",
      oc: `OC-2024-${Math.floor(Math.random() * 9000) + 1000}`,
      ocZentrak: `OC-Z-${Math.floor(Math.random() * 9000) + 1000}`,
      estadoActual: "Fabricación",
      fechaTentativa: "15/01/2026",
      bls: ["# 101010101010101", "# 202020202020202"],
      especificaciones: {
        hileras: "24 Mesas",
        corrosionAtmosferica: "C2",
        corrosionSuelo: "Agresivo",
        zonaVientos: "5",
        tamanoEquipo: [
          { code: "1P56", quantity: 17 },
          { code: "1P28", quantity: 20 },
          { code: "1P84", quantity: 5 }
        ]
      },
      documentos: [
        { 
          nombre: "Certificado ARL", 
          fecha: "2024-11-03", 
          comentarios: "Vencido", 
          valoracion: "No cumple",
          chat: [
            { id: "1", author: "Ana García", role: "Revisor SST", timestamp: "2024-11-03 09:00", content: "El certificado presentado se encuentra vencido con fecha de expiración 15/10/2024.", attachment: "Certificado ARL", side: "left" },
            { id: "2", author: "Ana Gemela", role: "Contratista Y", timestamp: "2024-11-03 09:05", content: "Adjunto la versión actualizada.", attachment: "Certificado ARL v2", side: "right" }
          ]
        },
        { 
          nombre: "Ficha técnica", 
          fecha: "2024-01-15", 
          comentarios: "OK", 
          valoracion: "Cumple" 
        }
      ],
      detallesDiseno: (tipo === "Tracker" ? { "Modelo": "1V84", "Config": "Self-Powered" } : { "Capacidad": "2.5MW", "Tipo": "Outdoor" }) as Record<string, string>,
      timeline: generarTimelineFull(),
      historial: [],
      faseLogistica: 'barco',
      BT_status: Math.random() > 0.3 ? 'approved' : 'pending',
      cantidadTotal: 30,
      cantidadDisponible: 30
    };
  });
};

const baseSlot = (tipo: string, id: string): SlotCarga => {
  const t = generarTimelineFull();
  return {
    idSlot: id,
    tipoEquipo: tipo,
    mgsAsignada: null,
    nombreMgs: null,
    pedidoCreado: "4 de diciembre de 2025 11:01 a.m.",
    productoId: `P${Math.floor(Math.random() * 900000) + 100000}`,
    proveedor: "Zentrack",
    oc: `OC-2024-${Math.floor(Math.random() * 9000) + 1000}`,
    ocZentrak: `OC-Z-${Math.floor(Math.random() * 9000) + 1000}`,
    estadoActual: "Fabricación",
    fechaTentativa: "15/01/2026",
    bls: ["# 101010101010101"],
    especificaciones: {
      hileras: "24 Mesas",
      corrosionAtmosferica: "C2",
      corrosionSuelo: "Agresivo",
      zonaVientos: "5",
      tamanoEquipo: [{ code: "1P56", quantity: 17 }]
    },
    documentos: [
      { nombre: "Ficha técnica", fecha: "2024-01-15", comentarios: "OK", valoracion: "Cumple" }
    ],
    timeline: t,
    historial: [],
    faseLogistica: 'barco',
    BT_status: 'pending',
    cantidadTotal: 30,
    cantidadDisponible: 30
  };
};

const slotsMSC = generarSlotsPreCargados("MSC");
slotsMSC[0] = { 
  idSlot: "MSC-SLOT-1", 
  tipoEquipo: "Tracker", 
  mgsAsignada: "MGS-002", 
  nombreMgs: "Uruaco 2",
  pedidoCreado: "4 de diciembre de 2025 11:01 a.m.",
  productoId: "P012012",
  proveedor: "NextTracker",
  oc: "OC-7782",
  ocZentrak: "OC-Z-9901",
  estadoActual: "Fabricación",
  fechaTentativa: "15/01/2026",
  bls: ["# 101010101010101", "# 101010101010101"],
  especificaciones: {
    hileras: "24 Mesas",
    corrosionAtmosferica: "C2",
    corrosionSuelo: "Agresivo",
    zonaVientos: "5",
    tamanoEquipo: [
      { code: "1P56", quantity: 17 },
      { code: "1P28", quantity: 20 },
      { code: "1P84", quantity: 5 }
    ]
  },
  documentos: [
    { 
      nombre: "Memorias de Cálculo", 
      fecha: "2024-01-15", 
      comentarios: "2.5 MB", 
      valoracion: "Cumple",
      chat: [
        { id: "c1", author: "Ingeniería Central", role: "Aprobador", timestamp: "2024-01-15 10:20", content: "Documento aprobado tras revisión de hileras.", side: "left" }
      ]
    },
    { 
      nombre: "Manual de operación", 
      fecha: "2024-01-14", 
      comentarios: "3.2 MB", 
      valoracion: "No cumple",
      chat: [
        { id: "c2", author: "Ana García", role: "Revisor", timestamp: "2024-01-14 15:45", content: "El manual no corresponde al modelo 1V84.", side: "left" },
        { id: "c3", author: "Soporte Zentrack", role: "Proveedor", timestamp: "2024-01-14 16:10", content: "Lo corregiremos de inmediato.", side: "right" }
      ]
    },
    { nombre: "Estudio de suelos", fecha: "2024-01-15", comentarios: "5.1 MB", valoracion: "No aplica" }
  ],
  detallesDiseno: { "Hileras": "24 Mesas", "Viento": "140km/h" },
  timeline: generarTimelineFull(),
  historial: [
    { mgsNombre: "Galapa Elite", fecha: "2023-12-01", motivo: "Repriorización de Portafolio" }
  ],
  faseLogistica: 'barco',
  BT_status: 'approved'
};
slotsMSC[1] = { ...baseSlot("Shelter", "MSC-SLOT-2"), mgsAsignada: "MGS-002", nombreMgs: "Uruaco 2" };
slotsMSC[2] = { ...baseSlot("Inversor", "MSC-SLOT-3"), mgsAsignada: "MGS-002", nombreMgs: "Uruaco 2" };
slotsMSC[3] = { ...baseSlot("Paneles", "MSC-SLOT-4"), mgsAsignada: "MGS-002", nombreMgs: "Uruaco 2" };
slotsMSC[4] = { ...baseSlot("Tracker", "MSC-SLOT-5"), mgsAsignada: "MGS-005", nombreMgs: "Valle 5" };

const slotsPacific = generarSlotsPreCargados("PAC");
slotsPacific[0] = { ...baseSlot("Tracker", "PAC-SLOT-1"), mgsAsignada: "MGS-003", nombreMgs: "Solar Delta" };
slotsPacific[1] = { ...baseSlot("Inversor", "PAC-SLOT-2"), mgsAsignada: "MGS-003", nombreMgs: "Solar Delta" };
slotsPacific[2] = { ...baseSlot("Reconectadores", "PAC-SLOT-3"), mgsAsignada: "MGS-003", nombreMgs: "Solar Delta" };
slotsPacific[5] = { ...baseSlot("Paneles", "PAC-SLOT-6"), mgsAsignada: "MGS-010", nombreMgs: "Uruaco 10" };

const slotsKraken = generarSlotsPreCargados("KRK");
slotsKraken[0] = { ...baseSlot("Inversor", "KRK-SLOT-1"), mgsAsignada: "MGS-120", nombreMgs: "Galapa 4" };
slotsKraken[2] = { ...baseSlot("Transformer", "KRK-SLOT-3"), mgsAsignada: "MGS-120", nombreMgs: "Galapa 4" };

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
    estado: "On Route",
    incidents: [],
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
    estado: "Pending",
    incidents: [],
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
    terminalArribo: "Cartagena",
    incidents: [],
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
    estado: "On Route",
    incidents: [],
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
    estado: "Pending",
    incidents: [],
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
    estado: "Pending",
    incidents: [],
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
    estado: "Pending",
    incidents: [],
  }
];

export const inicialCamionesData: Camion[] = [
  {
    id: "TRK-001",
    placa: "XYZ-123",
    capacidadMax: 100,
    capacidadActual: 100,
    estado: "On Route",
    items: [
      { 
        tipo: "Tracker", 
        cantidad: 30, 
        shipId: "SHIP-003", 
        slotId: "ATL-SLOT-2",
        idMgsDestino: "MGS-101",
        nombreMgsDestino: "Andes 1",
        fechaEntrega: "2026-04-18"
      }
    ]
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
      { id: "MGS-101", nombre: "Uruaco 2", codigo: "COLATLT14P2_LURUACO_SUR", ubicacion: "Uruaco - Luruaco, Atlántico", estado: "Priorizada", progreso: 100, 
        requerimientos: [
          { tipo: "Paneles", estado: "Faltante", specs: { modelo: "Bifacial 600W", cantidad: 4000 } },
          { tipo: "Inversor", estado: "Faltante", specs: { capacidad: "200kW" } },
          { tipo: "Reconectadores", estado: "Ingreso a Zona Franca", fecha: "FEB.26/25", specs: { voltaje: "34.5kV" } },
          { tipo: "Tracker", estado: "Licencia de importación", fecha: "FEB.26/25", specs: { hileras: "1P", corrosionAtmosferica: "Alta", corrosionSuelo: "Media", zonaVientos: "Baja" } },
          { tipo: "Shelter", estado: "Nacionalización", fecha: "FEB.26/25", specs: { tipo: "Contenedor 20ft" } }
        ]
      },
      { id: "MGS-102", nombre: "Andes 2", codigo: "COLAND02", ubicacion: "Antioquia, Col", estado: "En Espera", progreso: 40,
        requerimientos: [
          { tipo: "Paneles", estado: "Entregado", fecha: "JAN.10/25" },
          { tipo: "Inversor", estado: "Nacionalización", fecha: "MAR.01/25" },
          { tipo: "Reconectadores", estado: "Entregado", fecha: "JAN.12/25" },
          { tipo: "Tracker", estado: "Faltante", specs: { hileras: "2P", zonaVientos: "Alta" } },
          { tipo: "Shelter", estado: "Entregado", fecha: "JAN.15/25" }
        ]
      },
      { id: "MGS-103", nombre: "Caldas Solar", codigo: "COLCAL01", ubicacion: "Caldas, Col", estado: "Priorizada", progreso: 80,
        requerimientos: [
          { tipo: "Paneles", estado: "Nacionalización", fecha: "FEB.20/25" },
          { tipo: "Inversor", estado: "Nacionalización", fecha: "FEB.20/25" },
          { tipo: "Reconectadores", estado: "Faltante" },
          { tipo: "Tracker", estado: "Faltante", specs: { hileras: "1P" } },
          { tipo: "Shelter", estado: "Ingreso a Zona Franca", fecha: "MAR.05/25" }
        ]
      },
      { id: "MGS-104", nombre: "Risaralda Eco", codigo: "COLRIS01", ubicacion: "Risaralda, Col", estado: "Asignada", progreso: 100,
        requerimientos: [
          { tipo: "Paneles", estado: "Entregado", fecha: "DEC.10/24" },
          { tipo: "Inversor", estado: "Entregado", fecha: "DEC.15/24" },
          { tipo: "Reconectadores", estado: "Entregado", fecha: "DEC.20/24" },
          { tipo: "Tracker", estado: "Entregado", fecha: "JAN.05/25" },
          { tipo: "Shelter", estado: "Entregado", fecha: "JAN.08/25" }
        ]
      }
    ]
  },
  {
    id: "PORT-002",
    nombre: "Caribe Solar Grid",
    inversionista: "Nordic Renewables",
    cantidadMgs: 3,
    minigranjas: [
      { id: "MGS-201", nombre: "Atlántico Norte", codigo: "COLATL01", ubicacion: "Atlántico, Col", estado: "Priorizada", progreso: 60,
        requerimientos: [
          { tipo: "Paneles", estado: "Faltante" },
          { tipo: "Inversor", estado: "Faltante" },
          { tipo: "Reconectadores", estado: "Faltante" },
          { tipo: "Tracker", estado: "Faltante", specs: { zonaVientos: "Huracanada" } },
          { tipo: "Shelter", estado: "Licencia de importación", fecha: "FEB.15/25" }
        ]
      },
      { id: "MGS-202", nombre: "Atlántico Sur", codigo: "COLATL02", ubicacion: "Atlántico, Col", estado: "Priorizada", progreso: 90,
        requerimientos: [
          { tipo: "Paneles", estado: "Ingreso a Zona Franca", fecha: "FEB.28/25" },
          { tipo: "Inversor", estado: "Ingreso a Zona Franca", fecha: "FEB.28/25" },
          { tipo: "Reconectadores", estado: "Faltante" },
          { tipo: "Tracker", estado: "Faltante" },
          { tipo: "Shelter", estado: "Faltante" }
        ]
      },
      { id: "MGS-203", nombre: "Bolívar Eco", codigo: "COLBOL01", ubicacion: "Bolívar, Col", estado: "En Espera", progreso: 20,
        requerimientos: [
          { tipo: "Paneles", estado: "Faltante" },
          { tipo: "Inversor", estado: "Faltante" },
          { tipo: "Reconectadores", estado: "Faltante" },
          { tipo: "Tracker", estado: "Faltante" },
          { tipo: "Shelter", estado: "Faltante" }
        ]
      }
    ]
  },
  {
    id: "PORT-003",
    nombre: "Valle del Cauca Hub",
    inversionista: "Solenium Ventures",
    cantidadMgs: 2,
    minigranjas: [
      { id: "MGS-301", nombre: "Cali Central", codigo: "COLVAL01", ubicacion: "Valle, Col", estado: "Priorizada", progreso: 75,
        requerimientos: [
          { tipo: "Paneles", estado: "Nacionalización", fecha: "MAR.01/25" },
          { tipo: "Inversor", estado: "Faltante" },
          { tipo: "Reconectadores", estado: "Faltante" },
          { tipo: "Tracker", estado: "Nacionalización", fecha: "MAR.01/25" },
          { tipo: "Shelter", estado: "Nacionalización", fecha: "MAR.01/25" }
        ]
      },
      { id: "MGS-302", nombre: "Palmira Solar", codigo: "COLVAL02", ubicacion: "Valle, Col", estado: "Priorizada", progreso: 85,
        requerimientos: [
          { tipo: "Paneles", estado: "Ingreso a Zona Franca", fecha: "MAR.05/25" },
          { tipo: "Inversor", estado: "Ingreso a Zona Franca", fecha: "MAR.05/25" },
          { tipo: "Reconectadores", estado: "Faltante" },
          { tipo: "Tracker", estado: "Faltante" },
          { tipo: "Shelter", estado: "Faltante" }
        ]
      }
    ]
  }
];
