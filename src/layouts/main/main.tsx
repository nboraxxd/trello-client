import { Outlet } from 'react-router-dom'

import Container from '@mui/material/Container'

import { AppBar } from '@/components/app-bar'
import { BoardBar } from '@/components/board-bar'

export default function MainLayout() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar />
      <Outlet />
    </Container>
  )
}
