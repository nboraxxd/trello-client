import { createTheme } from '@mui/material/styles'
import { red, yellow } from '@mui/material/colors'

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000',
    },
    secondary: {
      main: yellow[500],
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
