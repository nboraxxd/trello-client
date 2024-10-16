import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined'
import BoltIcon from '@mui/icons-material/Bolt'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import FilterListIcon from '@mui/icons-material/FilterList'

export const THEMES = [
  {
    label: 'Light',
    value: 'light',
    icon: LightModeIcon,
  },
  {
    label: 'Dark',
    value: 'dark',
    icon: DarkModeOutlinedIcon,
  },
  {
    label: 'System',
    value: 'system',
    icon: SettingsBrightnessOutlinedIcon,
  },
] as const

export const BOARD_BAR_LEFT_MENU = [
  {
    label: 'TrungQuanDev MERN Stack Board',
    icon: DashboardIcon,
  },
  {
    label: 'Public/Private Workspace',
    icon: VpnLockIcon,
  },
  {
    label: 'Add To Google Drive',
    icon: AddToDriveIcon,
  },
  {
    label: 'Automation',
    icon: BoltIcon,
  },
  {
    label: 'Filter',
    icon: FilterListIcon,
  },
] as const
