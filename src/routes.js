import Dashboard from '@material-ui/icons/Dashboard';
// import LockIcon from '@material-ui/icons/Lock';
import EcoIcon from '@material-ui/icons/Eco';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import { RocketLaunch } from '@mui/icons-material';
// import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import TokenTImeLockImg from '../src/assets/img/payroll.png';

// core components/views for Admin layout
// import DashboardPage from './views/Dashboard/Dashboard.js';
// import UserProfile from './views/UserProfile/UserProfile.js';
// import TableList from './views/TableList/TableList.js';
// import Typography from './views/Typography/Typography.js';
// import Icons from './views/Icons/Icons.js';
// import Maps from "./views/Maps/Maps.js";
// import NotificationsPage from './views/Notifications/Notifications.js';
// import UpgradeToPro from './views/UpgradeToPro/UpgradeToPro.js';

import TokenLock from './views/TokenLock/TokenLock.js';
import Presale from './views/Presale/Presale.js';
import LiquidityLock from './views/LiquidityLock/LiquidityLock.js';
// import Farm from './views/Farm/Farm.js';
// import Staking from './views/Staking/Staking.js';
import CreateToken from './views/CreateToken/CreateToken.js';
import Echosystem from './views/echosystem/Echosystem';
import EchosystemDetails from './views/echosystem/EchoSystemDetails';
import Contracts from './views/contracts/Contracts';
import Pool from './views/Pool/Pool';
import Swap from './views/Swap/Swap.js';
import Governance from './views/Governance/Governance.js';
import Home from './views/Home/Home.js';
// core components/./views for RTL layout
// import RTLPage from './views/RTLPage/RTLPage.js';
import { LaunchOutlined, LockOutlined, LockTwoTone, MoneyOutlined } from '@material-ui/icons';

const dashboardRoutes = [
  {
    path: '/home',
    name: 'Dashboard',
    rtlName: 'لوحة القيادة',
    icon: Dashboard,
    component: Home,
    layout: '/client',
  },
  {
    path: '/createtoken',
    name: 'Tocken Factory',
    rtlName: 'لوحة القيادة',
    icon: AddCircleOutlineIcon,
    component: CreateToken,
    layout: '/client',
  },
  {
    path: '/tokenlock',
    name: 'Token Time Lock',
    rtlName: 'التطور للاحترافية',
    icon: LockOutlined,
    component: TokenLock,
    layout: '/client',
  },
  {
    path: '/liquiditylock',
    name: 'Liquidity Time Lock',
    rtlName: 'التطور للاحترافية',
    icon: LockTwoTone,
    component: LiquidityLock,
    layout: '/client',
  },

  // {
  //   path: '/farm',
  //   name: 'Farm',
  //   rtlName: 'التطور للاحترافية',
  //   icon: EcoIcon,
  //   component: Farm,
  //   layout: '/client',
  // },
  // {
  //   path: '/staking',
  //   name: 'Staking1',
  //   rtlName: 'التطور للاحترافية',
  //   icon: EmojiNatureIcon,
  //   component: Staking,
  //   layout: '/client',
  // },
  {
    path: '/presale',
    name: 'Tocken Launcher',
    rtlName: 'لوحة القيادة',
    icon: RocketLaunch,
    component: Presale,
    layout: '/client',
  },

  {
    path: '/echosystem',
    name: 'Echosystem',
    rtlName: 'التطور للاحترافية',
    icon: EcoIcon,
    component: Echosystem,
    layout: '/client',
  },

  {
    path: '/governance',
    name: 'Governance',
    rtlName: 'التطور للاحترافية',
    icon: MoneyOutlined,
    component: Governance,
    layout: '/client',
  },
  // {
  //   path: '/governance',
  //   name: 'DAO List',
  //   rtlName: 'التطور للاحترافية',
  //   icon: LaunchOutlined,
  //   component: LiquidityLock,
  //   layout: '/client',
  // },
  {
    path: '/pool',
    name: 'Pool',
    rtlName: 'التطور للاحترافية',
    icon: EcoIcon,
    component: Pool,
    layout: '/client',
  },
  {
    path: '/swap',
    name: 'Swap',
    rtlName: 'التطور للاحترافية',
    icon: LaunchOutlined,
    component: Swap,
    layout: '/client',
  },
  {
    path: '/contracts',
    name: 'Contracts',
    rtlName: 'التطور للاحترافية',
    icon: MoneyOutlined,
    component: Contracts,
    layout: '/client',
  },
  {
    path: '/:name',
    name: '',
    rtlName: 'التطور للاحترافية',
    icon: '',
    component: EchosystemDetails,
    layout: '/client',
  },

  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: MonetizationOnIcon,
  //   component: DashboardPage,
  //   layout: "/client",
  // },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: MonetizationOnIcon,
  //   component: UserProfile,
  //   layout: "/client",
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: MonetizationOnIcon,
  //   component: TableList,
  //   layout: "/client",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: MonetizationOnIcon,
  //   component: Typography,
  //   layout: "/client",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: MonetizationOnIcon,
  //   component: Icons,
  //   layout: "/client",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: MonetizationOnIcon,
  //   component: NotificationsPage,
  //   layout: "/client",
  // },
  // // {
  // //   path: "/rtl-page",
  // //   name: "RTL Support",
  // //   rtlName: "پشتیبانی از راست به چپ",
  // //   icon: MonetizationOnIcon,
  // //   component: RTLPage,
  // //   layout: "/rtl",
  // // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: MonetizationOnIcon,
  //   component: UpgradeToPro,
  //   layout: "/client",
  // },
];

export default dashboardRoutes;
