import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useColorScheme } from '@mui/material'

import { THEMES } from '@/constants/list'

export default function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  if (!mode) {
    return null
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel
        id="label-select-dark-light-mode"
        sx={{
          color: 'white',
          '&.Mui-focused': {
            color: 'grey.300',
          },
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        sx={{
          color: 'white',
          '.MuiSvgIcon-root': {
            color: 'white',
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'grey.300',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'grey.400',
          },
        }}
        onChange={(event: SelectChangeEvent) => setMode(event.target.value as (typeof THEMES)[number]['value'])}
      >
        {THEMES.map(({ label, value, icon: IconComp }) => (
          <MenuItem key={value} value={value}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconComp fontSize="small" /> {label}
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
