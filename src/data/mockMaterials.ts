export interface MaterialStatus {
  status: 'Zarpe' | 'Ingreso a Zona Franca' | 'Licencia de importación' | 'Nacionalización' | 'Faltante';
  date?: string;
  shipId?: string;
  slotIndex?: number;
}

export interface MaterialProject {
  id: string;
  name: string;
  location: string;
  materials: {
    panels: MaterialStatus;
    inverters: MaterialStatus;
    reconectador: MaterialStatus;
    tracker: MaterialStatus;
    shelter: MaterialStatus;
  };
}

export interface Portfolio {
  id: string;
  name: string;
  isPriority: boolean;
  mgsCount: number;
  projects: MaterialProject[];
}

export interface InvestorGroup {
  investor: string;
  portfolios: Portfolio[];
}

export const mockMaterialTrackingData: InvestorGroup[] = [
  {
    investor: 'FMO',
    portfolios: [
      {
        id: 'fmo-port-a',
        name: 'Portafolio A',
        isPriority: true,
        mgsCount: 18,
        projects: [
          {
            id: 'proj-1',
            name: 'MiniGranja 0001 — Uruaco1',
            location: 'COLATLT14P2_LURUACO_SUR',
            materials: {
              panels: { status: 'Zarpe', date: 'FEB.26/25', shipId: 'SHIP-001', slotIndex: 0 },
              inverters: { status: 'Zarpe', date: 'FEB.26/25', shipId: 'SHIP-001', slotIndex: 1 },
              reconectador: { status: 'Ingreso a Zona Franca', date: 'FEB.26/25', shipId: 'SHIP-001', slotIndex: 2 },
              tracker: { status: 'Licencia de importación', date: 'FEB.26/25', shipId: 'SHIP-001', slotIndex: 3 },
              shelter: { status: 'Nacionalización', date: 'FEB.26/25', shipId: 'SHIP-001', slotIndex: 4 }
            }
          },
          {
            id: 'proj-2',
            name: 'MiniGranja 0001 — Uruaco2',
            location: 'COLATLT14P2_LURUACO_SUR',
            materials: {
              panels: { status: 'Faltante' },
              inverters: { status: 'Faltante' },
              reconectador: { status: 'Ingreso a Zona Franca', date: 'FEB.26/25', shipId: 'SHIP-002', slotIndex: 1 },
              tracker: { status: 'Licencia de importación', date: 'FEB.26/25', shipId: 'SHIP-002', slotIndex: 0 },
              shelter: { status: 'Nacionalización', date: 'FEB.26/25', shipId: 'SHIP-002', slotIndex: 5 }
            }
          }
        ]
      },
      {
        id: 'fmo-port-b',
        name: 'Portafolio B',
        isPriority: false,
        mgsCount: 12,
        projects: [
          {
            id: 'proj-3',
            name: 'MiniGranja 0005 — Atlántico',
            location: 'COL_ATL_005',
            materials: {
              panels: { status: 'Zarpe', date: 'MAR.10/25', shipId: 'SHIP-001', slotIndex: 10 },
              inverters: { status: 'Zarpe', date: 'MAR.10/25', shipId: 'SHIP-001', slotIndex: 11 },
              reconectador: { status: 'Faltante' },
              tracker: { status: 'Zarpe', date: 'MAR.10/25', shipId: 'SHIP-001', slotIndex: 12 },
              shelter: { status: 'Faltante' }
            }
          }
        ]
      },
      {
        id: 'fmo-port-c',
        name: 'Portafolio C',
        isPriority: false,
        mgsCount: 8,
        projects: []
      }
    ]
  },
  {
    investor: 'IDB Invest',
    portfolios: [
      {
        id: 'idb-port-1',
        name: 'Caribe Solar',
        isPriority: true,
        mgsCount: 24,
        projects: [
          {
            id: 'proj-4',
            name: 'Sol de la Guajira',
            location: 'COL_GUA_001',
            materials: {
              panels: { status: 'Nacionalización', date: 'FEB.15/25', shipId: 'SHIP-003', slotIndex: 0 },
              inverters: { status: 'Nacionalización', date: 'FEB.15/25', shipId: 'SHIP-003', slotIndex: 1 },
              reconectador: { status: 'Nacionalización', date: 'FEB.15/25', shipId: 'SHIP-003', slotIndex: 2 },
              tracker: { status: 'Faltante' },
              shelter: { status: 'Zarpe', date: 'MAR.01/25', shipId: 'SHIP-003', slotIndex: 3 }
            }
          }
        ]
      },
      {
        id: 'idb-port-2',
        name: 'Andino Green',
        isPriority: false,
        mgsCount: 15,
        projects: [
          {
            id: 'proj-5',
            name: 'Viento del Sur',
            location: 'COL_NAR_002',
            materials: {
              panels: { status: 'Licencia de importación', date: 'MAR.20/25', shipId: 'SHIP-004', slotIndex: 0 },
              inverters: { status: 'Licencia de importación', date: 'MAR.20/25', shipId: 'SHIP-004', slotIndex: 1 },
              reconectador: { status: 'Licencia de importación', date: 'MAR.20/25', shipId: 'SHIP-004', slotIndex: 2 },
              tracker: { status: 'Licencia de importación', date: 'MAR.20/25', shipId: 'SHIP-004', slotIndex: 3 },
              shelter: { status: 'Licencia de importación', date: 'MAR.20/25', shipId: 'SHIP-004', slotIndex: 4 }
            }
          }
        ]
      }
    ]
  }
];
