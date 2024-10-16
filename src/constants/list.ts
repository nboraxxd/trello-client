import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined'

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
