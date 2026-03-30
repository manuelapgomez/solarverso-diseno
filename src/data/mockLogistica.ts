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
  // Propiedades Notion-Style (Hoja de Vida)
  pedidoCreado?: string;
  productoId?: string;
  proveedor?: string;
  oc?: string;
  ocZentrak?: string;
  estadoActual?: string;
  fechaTentativa?: string;
  cantidadSinStock?: number;
  bls?: string[];
  especificaciones?: SpecEquipo;
  documentos?: DocChecklist[];
  detallesDiseno?: Record<string, string | number>;
  timeline?: LogisticaState[];
  historial?: HistorialAsignacion[];
  faseLogistica?: 'barco' | 'puerto' | 'camion' | 'campo';
  BT_status?: 'pending' | 'approved' | 'rejected' | string;
  // Cantidades para despacho
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
const generarTimelineFull = (): LogisticaState[] => [
  { label: "No Pedido", fechaObjetivo: "2024-01-01", fechaReal: "2024-01-01", status: "completed" },
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
      cantidadSinStock: Math.floor(Math.random() * 2000) + 500,
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
    cantidadSinStock: 2016,
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
// Asignamos algunos quemados para la demostración
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
  cantidadSinStock: 2016,
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
// 10 vacíos...

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

