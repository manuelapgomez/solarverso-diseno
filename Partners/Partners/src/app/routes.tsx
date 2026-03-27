import { createBrowserRouter } from 'react-router';
import SSTCommandCenter from './pages/01_SSTCommandCenter';
import PartnerAssetProfile from './pages/02_PartnerAssetProfile';
import TenderWorkbench from './pages/03_TenderWorkbench';
import TenderCenter from './pages/04_TenderCenter';
import PartnerTenderPortal from './pages/05_PartnerTenderPortal';
import SSTEvaluationEngine from './pages/06_SSTEvaluationEngine';
import Contractor360CommandCenter from './pages/07_Contractor360CommandCenter';
import SolarversoPartnerExplorer from './pages/08_SolarversoPartnerExplorer';
import Contractor360Profile from './pages/09_Contractor360Profile';
import OpportunityMarketplace from './pages/OpportunityMarketplace';
import PartnerPostulaciones from './pages/PartnerPostulaciones';
import PartnerProyectos from './pages/PartnerProyectos';
import PartnerPerfil from './pages/PartnerPerfil';
import TenderDetailView from './pages/TenderDetailView';
import PartnerTenderExplorer from './pages/PartnerTenderExplorer';
import AdminInbox from './pages/AdminInbox';
import AdminTenderEvaluator from './pages/AdminTenderEvaluator';
import AdminDashboard from './pages/AdminDashboard';
import AdminDashboardRefactored from './pages/AdminDashboardRefactored';
import AdminMasterDashboard from './pages/AdminMasterDashboard';
import AdminDashboardSimplified from './pages/AdminDashboardSimplified';
import AdminTenderBuilder from './pages/AdminTenderBuilder';
import AdminTenderEvaluation from './pages/AdminTenderEvaluation';
import AdminPartnerDirectory from './pages/AdminPartnerDirectory';
import AdminPartnerProfile from './pages/AdminPartnerProfile';
import AdminPartnerProfileOperations from './pages/AdminPartnerProfileOperations';
import AdminProjectExecutionDashboard from './pages/AdminProjectExecutionDashboard';
import AdminProjectDetailWorkspace from './pages/AdminProjectDetailWorkspace';
import Login from './pages/Login';
import RedirectToExplorador from './pages/RedirectToExplorador';
import OpportunityFeed from './pages/OpportunityFeed';
import ActivityHub from './pages/ActivityHub';
import UnifiedPartnerWorkspace from './pages/UnifiedPartnerWorkspace';
import PartnerProjectDetail from './pages/PartnerProjectDetail';
import { AdminTenderDetail } from './pages/AdminTenderDetail';
import { AdminPartnerAudit } from './pages/AdminPartnerAudit';
import { PartnerTenderApplication } from './pages/PartnerTenderApplication';
import AdminTenderApplicationDetail from './pages/AdminTenderApplicationDetail';
import PartnerProposalDetail from './pages/PartnerProposalDetail';
import PartnerApplicationDetail from './pages/PartnerApplicationDetail';
import PartnerProposalWorkstation from './pages/PartnerProposalWorkstation';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AdminTenderBuilder,
  },
  {
    path: '/login',
    Component: Login,
  },
  // NEW UNIFIED PARTNER ROUTES
  {
    path: '/partner/oportunidades',
    Component: UnifiedPartnerWorkspace,
  },
  {
    path: '/partner/actividad',
    Component: UnifiedPartnerWorkspace,
  },
  // Tender Detail (Deep navigation from Explorer)
  {
    path: '/partner/tender/:tenderId',
    Component: TenderDetailView,
  },
  // Tender Application Form
  {
    path: '/partner/tender/:tenderId/apply',
    Component: PartnerTenderApplication,
  },
  // Legacy redirects
  {
    path: '/partner/hub',
    Component: UnifiedPartnerWorkspace,
  },
  {
    path: '/partner/explorador',
    Component: UnifiedPartnerWorkspace,
  },
  {
    path: '/partner/postulaciones',
    Component: PartnerPostulaciones,
  },
  {
    path: '/partner/proyectos',
    Component: PartnerProyectos,
  },
  {
    path: '/partner/proyectos/:projectId',
    Component: PartnerProjectDetail,
  },
  {
    path: '/partner/perfil',
    Component: PartnerPerfil,
  },
  {
    path: '/partner/propuesta/:proposalId',
    Component: PartnerProposalDetail,
  },
  {
    path: '/partner/application/:applicationId',
    Component: PartnerApplicationDetail,
  },
  {
    path: '/partner/proposal-workstation/:proposalId',
    Component: PartnerProposalWorkstation,
  },
  {
    path: '/admin/dashboard',
    Component: AdminDashboardSimplified,
  },
  {
    path: '/admin/pliegos/:tenderId',
    Component: AdminTenderDetail,
  },
  {
    path: '/admin/pliegos/:tenderId/audit/:partnerId',
    Component: AdminPartnerAudit,
  },
  {
    path: '/admin/pliegos/:tenderId/application/:applicationId',
    Component: AdminTenderApplicationDetail,
  },
  {
    path: '/admin/crear-pliegos',
    Component: AdminTenderBuilder,
  },
  {
    path: '/admin/inbox',
    Component: AdminInbox,
  },
  {
    path: '/admin/evaluation/:applicationId',
    Component: AdminTenderEvaluation,
  },
  {
    path: '/admin/partners',
    Component: AdminPartnerDirectory,
  },
  {
    path: '/admin/partners/:partnerId',
    Component: AdminPartnerProfile,
  },
  {
    path: '/admin/partners/:partnerId/operations',
    Component: AdminPartnerProfileOperations,
  },
  {
    path: '/admin/partners/:partnerId/projects/:projectId',
    Component: AdminProjectDetailWorkspace,
  },
  {
    path: '/admin/compliance',
    Component: AdminInbox,
  },
  {
    path: '/partners/:partnerId/assets',
    Component: PartnerAssetProfile,
  },
  {
    path: '/tenders',
    Component: TenderCenter,
  },
  {
    path: '/tenders/:tenderId/submit',
    Component: TenderWorkbench,
  },
  {
    path: '/tenders/submit',
    Component: TenderWorkbench,
  },
  {
    path: '/partner/portal',
    Component: PartnerTenderPortal,
  },
  {
    path: '/admin/evaluation/:tenderId',
    Component: SSTEvaluationEngine,
  },
  {
    path: '/admin/evaluation',
    Component: SSTEvaluationEngine,
  },
  {
    path: '/contractor360/:partnerId',
    Component: Contractor360CommandCenter,
  },
  {
    path: '/contractor360',
    Component: Contractor360CommandCenter,
  },
  {
    path: '/partners/explorer',
    Component: SolarversoPartnerExplorer,
  },
  {
    path: '/contractor360/profile/:partnerId',
    Component: Contractor360Profile,
  },
  {
    path: '/marketplace',
    Component: OpportunityMarketplace,
  },
  {
    path: '*',
    Component: Login,
  },
]);
