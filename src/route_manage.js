import LockIcon from '@material-ui/icons/Lock';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import TokenLock from './views/TokenLock/TokenLockManage.js';
import PresaleManage from './views/Presale/PresaleManage.js';
import CreateToken from './views/CreateToken/CreateTokenManage.js';

const dashboardRoutes = [
  {
    path: '/tokenlock',
    name: 'Token Lock',
    rtlName: 'التطور للاحترافية',
    icon: LockIcon,
    component: TokenLock,
    layout: '/manage',
  },
  
  //   {
  //     path: "/farm",
  //     name: "Farm",
  //     rtlName: "التطور للاحترافية",
  //     icon: EcoIcon,
  //     component: Farm,
  //     layout: "/admin",
  //   },
  //   {
  //     path: "/staking",
  //     name: "Staking",
  //     rtlName: "التطور للاحترافية",
  //     icon: EmojiNatureIcon,
  //     component: Staking,
  //     layout: "/admin",
  //   },
  {
    path: '/presale',
    name: 'Presale',
    rtlName: 'لوحة القيادة',
    icon: MonetizationOnIcon,
    component: PresaleManage,
    layout: '/manage',
  },
  {
    path: '/CreateTokenManage',
    name: 'CreateToken',
    rtlName: 'لوحة القيادة',
    icon: AddCircleOutlineIcon,
    component: CreateToken,
    layout: '/manage',
  },
  //   {
  //     path: "/dashboard",
  //     name: "Dashboard",
  //     rtlName: "لوحة القيادة",
  //     icon: MonetizationOnIcon,
  //     component: DashboardPage,
  //     layout: "/admin",
  //   },
  //   {
  //     path: "/user",
  //     name: "User Profile",
  //     rtlName: "ملف تعريفي للمستخدم",
  //     icon: MonetizationOnIcon,
  //     component: UserProfile,
  //     layout: "/admin",
  //   },
  //   {
  //     path: "/table",
  //     name: "Table List",
  //     rtlName: "قائمة الجدول",
  //     icon: MonetizationOnIcon,
  //     component: TableList,
  //     layout: "/admin",
  //   },
  //   {
  //     path: "/typography",
  //     name: "Typography",
  //     rtlName: "طباعة",
  //     icon: MonetizationOnIcon,
  //     component: Typography,
  //     layout: "/admin",
  //   },
  //   {
  //     path: "/icons",
  //     name: "Icons",
  //     rtlName: "الرموز",
  //     icon: MonetizationOnIcon,
  //     component: Icons,
  //     layout: "/admin",
  //   },
  //   {
  //     path: "/notifications",
  //     name: "Notifications",
  //     rtlName: "إخطارات",
  //     icon: MonetizationOnIcon,
  //     component: NotificationsPage,
  //     layout: "/admin",
  //   },
  //   {
  //     path: "/rtl-page",
  //     name: "RTL Support",
  //     rtlName: "پشتیبانی از راست به چپ",
  //     icon: MonetizationOnIcon,
  //     component: RTLPage,
  //     layout: "/rtl",
  //   },
  //   {
  //     path: "/upgrade-to-pro",
  //     name: "Upgrade To PRO",
  //     rtlName: "التطور للاحترافية",
  //     icon: MonetizationOnIcon,
  //     component: UpgradeToPro,
  //     layout: "/admin",
  //   },
];

export default dashboardRoutes;
