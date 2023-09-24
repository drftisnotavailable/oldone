// ** React Imports
import { ChangeEvent, MouseEvent, ReactNode, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// swall

import Swal from 'sweetalert2'

// ** MUI Components
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

// ** Icons Imports

import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

const PeopleAddViews = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(show => !show)
  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const [values, setValues] = useState({
    pegawaiId: '',
    pegawaiNama: '',
    pegawaiNIP: '',
    pegawaiFungsi: '',
    pegawaiEmail: '',
    pegawaiPassword: ''
  })

  const handleChange = props => event => {
    setValues({ ...values, [props]: event.target.value })
  }

  const handleDropDownChange = event => {
    setValues(values => ({
      ...values,
      pegawaiFungsi: event.target.value
    }))
  }

  // console.log(values)

  const router = useRouter()
  const handleEdit = () => {
    Swal.fire({
      title: 'Apa Anda Yakin?',
      text: 'Untuk mengedit akun ini!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, edit akun !'
    }).then(result => {
      if (result.isConfirmed) {
        router.push('/pegawai')
      } else {
        router.push('/pegawai')
      }
    })
  }
  return (
    <>
      <Card sx={{ padding: 4 }}>
        <Box sx={{ mb: 6 }}>
          <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
            Edit Pegawai
          </Typography>
          <Typography variant='body2'>Fill this blank field below</Typography>
        </Box>
        <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
          <TextField
            name={'pegawaiNama'}
            value={values.pegawiNama}
            onChange={handleChange('pegawaiNama')}
            autoFocus
            fullWidth
            id='nama'
            label='Nama'
            sx={{ marginBottom: 4 }}
          />
          <TextField
            name='NIP'
            value={values.pegawaiNIP}
            onChange={handleChange('pegawaiNIP')}
            autoFocus
            fullWidth
            type={'number'}
            id='nip'
            label='Nip'
            sx={{ marginBottom: 4 }}
          />
          <FormControl fullWidth sx={{ marginBottom: 4 }}>
            <InputLabel id='form-layouts-separator-select-label'>Fungsi</InputLabel>
            <Select
              name='pegawaiFungsi'
              sx={{ height: 50 }}
              label='Fungsi'
              onChange={handleDropDownChange}
              id='form-layouts-separator-fungsi'
              labelId='form-layouts-separator-fungsi-label'
              value={values.pegawaiFungsi}
              defaultChecked
            >
              <MenuItem value={2}>Bagian Umum</MenuItem>
              <MenuItem value={3}>Statistik Sosial </MenuItem>
              <MenuItem value={4}>Statistik Produksi</MenuItem>
              <MenuItem value={5}>Statistik Distribusi</MenuItem>
              <MenuItem value={6}>Neraca Wilayah dan Analisis Statistik</MenuItem>
              <MenuItem value={7}>Integrasi Pengolahan dan Diseminasi Statistik</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name='pegawaiEmail'
            onChange={handleChange('pegawaiEmail')}
            value={values.pegawaiEmail}
            autoFocus
            fullWidth
            id='email'
            label='Email/Username'
            sx={{}}
          />
          <FormControl fullWidth sx={{ marginTop: 4 }}>
            <InputLabel htmlFor='auth-login-password'>Password</InputLabel>
            <OutlinedInput
              name='pegawaiPassword'
              label='Password'
              id='auth-login-password'
              type={showPassword ? 'text' : 'password'}
              onChange={handleChange('pegawaiPassword')}
              value={values.pegawaiPassword}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button onClick={handleEdit} fullWidth size='medium' variant='contained' sx={{ marginTop: 4 }}>
            Edit
          </Button>
        </form>
      </Card>
    </>
  )
}

export default PeopleAddViews
