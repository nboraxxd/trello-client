import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import AvatarGroup from '@mui/material/AvatarGroup'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

import { BOARD_BAR_LEFT_MENU } from '@/constants/list'

const MENU_STYLES = {
  px: '8px',
  border: 'none',
  borderRadius: '4px',
  bgcolor: 'transparent',
  color: 'white',
  '&:hover': {
    bgcolor: 'primary.50',
  },
  '& .MuiSvgIcon-root': {
    ml: 0,
    color: 'white',
  },
  '& .MuiChip-label': {
    pr: 0,
  },
}

export default function BoardBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        backgroundColor: 'primary.dark',
        px: 2,
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      }}
    >
      {/* Left */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {BOARD_BAR_LEFT_MENU.map(({ label, icon: IconComp }) => (
          <Chip key={label} icon={<IconComp />} label={label} clickable sx={MENU_STYLES} />
        ))}
      </Box>

      {/* Right */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            ':hover': {
              borderColor: 'grey.300',
            },
          }}
          startIcon={<PersonAddIcon />}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' },
            },
          }}
        >
          <Tooltip title="Trung Quan Dev">
            <Avatar
              alt="Trung Quan Dev"
              src="https://trungquandev.com/wp-content/uploads/2023/08/transparent-main-avatar-circle-min-trungquandev-codetq@3x-Large.jpeg"
            />
          </Tooltip>
          <Tooltip title="Helena">
            <Avatar alt="Helena" src="https://randomuser.me/api/portraits/women/12.jpg" />
          </Tooltip>
          <Tooltip title="Velma">
            <Avatar alt="Velma" src="https://randomuser.me/api/portraits/women/54.jpg" />
          </Tooltip>
          <Tooltip title="Aoife">
            <Avatar alt="Aoife" src="https://randomuser.me/api/portraits/women/34.jpg" />
          </Tooltip>
          <Tooltip title="Lucie">
            <Avatar alt="Lucie" src="https://randomuser.me/api/portraits/women/40.jpg" />
          </Tooltip>
          <Tooltip title="Harris">
            <Avatar alt="Harris" src="https://randomuser.me/api/portraits/women/55.jpg" />
          </Tooltip>
          <Tooltip title="Angie">
            <Avatar alt="Angie" src="https://randomuser.me/api/portraits/women/21.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}
