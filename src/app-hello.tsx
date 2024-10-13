import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import Typography from '@mui/material/Typography'
import { pink } from '@mui/material/colors'

export default function AppHello() {
  return (
    <>
      <p>Hello world!</p>
      <Typography variant="body2" color="secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, illum.
      </Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  )
}
