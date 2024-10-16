import { Outlet } from 'react-router-dom'

import Container from '@mui/material/Container'

import { Header } from '@/components/header'
import { BoardBar } from '@/components/board-bar'

export default function MainLayout() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Header />
      <BoardBar />
      <Outlet />
    </Container>
  )
}
