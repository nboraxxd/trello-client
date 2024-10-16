import Box from '@mui/material/Box'

export default function Homepage() {
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.boardContentHeight,
        width: '100%',
        backgroundColor: 'primary.main',
        display: 'flex',
      }}
    >
      Homepage
    </Box>
  )
}
