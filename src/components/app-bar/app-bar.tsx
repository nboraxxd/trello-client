import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AppsIcon from '@mui/icons-material/Apps'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import SvgIcon from '@mui/material/SvgIcon'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

import { ModeSelect, ProfileMenu, Recent, Starred, Templates, Workspaces } from '@/components/app-bar'
import trelloIcon from '@/assets/trello.svg?react'

export default function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        height: (theme) => theme.trello.appBarHeight,
        width: '100%',
        backgroundColor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'white' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={trelloIcon} fontSize="small" inheritViewBox sx={{ color: 'white' }} />
          <Typography component="span" sx={{ fontSize: '1.125rem', fontWeight: 500, color: 'white' }}>
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1' }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button
            variant="outlined"
            startIcon={<LibraryAddIcon />}
            sx={{
              color: 'white',
              borderColor: 'grey.100',
              '&:hover': {
                color: 'grey.200',
                borderColor: 'grey.300',
              },
            }}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id="primary-search"
          label="Search..."
          type="search"
          size="small"
          sx={{
            minWidth: '120px',
            maxWidth: '180px',
            label: { color: 'white' },
            '&:hover label': { color: 'grey.300' },
            '& label.Mui-focused': { color: 'grey.400' },
            '& .MuiInputBase-root': {
              pl: '8px',
              pr: '8px',
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'grey.300' },
              '&.Mui-focused fieldset': { borderColor: 'grey.400' },
              '& .MuiSvgIcon-root': { color: 'white' },
              '&:hover .MuiSvgIcon-root': { color: 'grey.300' },
              '&.Mui-focused .MuiSvgIcon-root': { color: 'grey.400' },
            },
            '& input': { color: 'white' },
          }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: 'white', cursor: 'pointer' }} />
        </Tooltip>
        <ProfileMenu />
      </Box>
    </Box>
  )
}
