// ** Third Party Imports
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// Mui Import
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'

import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { styled } from '@mui/material/styles'

// icon
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import ClipboardFileOutline from 'mdi-material-ui/ClipboardFileOutline'
import LockOutline from 'mdi-material-ui/LockOutline'

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {}
}))
const CardProjectDetails = props => {
  const router = useRouter()
  const {
    id,
    namaKegiatan,
    intervalWaktu,
    tanggalDimulai,
    tanggalBerakhir,
    jumlahParicipant,
    justt,
    totalSubKegiatan,
    totalGaji
  } = props
  return (
    <Card>
      <CardContent key={id} sx={{ padding: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant='h5' sx={{ marginBottom: 3.5, fontWeight: 600 }}>
              {namaKegiatan}
            </Typography>
            <Typography variant='body2'>
              {intervalWaktu}-{totalGaji}
            </Typography>
          </Grid>
          <Grid item xs={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant='h6' sx={{ lineHeight: 1, fontWeight: 600, fontSize: '3rem !important' }}>
                {Math.round(Number(30))}%
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ marginTop: 4.5, marginBottom: 4.75 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <StyledBox>
              <Box sx={{ mb: 10, mt: 3, display: 'flex', alignItems: 'center' }}>
                <LockOpenOutline sx={{ color: 'primary.main', marginRight: 2.25 }} fontSize='small' />
                <Typography variant='body2' sx={{ fontSize: '12px' }}>
                  Tanggal Dimulai: <strong>{tanggalDimulai}</strong>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline sx={{ color: 'primary.main', marginRight: 2.25 }} fontSize='small' />
                <Typography variant='body2' sx={{ fontSize: '12px' }}>
                  Jumlah Participant: <strong>{jumlahParicipant}</strong>
                </Typography>
              </Box>
            </StyledBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ mb: 10, mt: 3, display: 'flex', alignItems: 'center' }}>
              <LockOutline sx={{ color: 'primary.main', marginRight: 2.25 }} fontSize='small' />
              <Typography variant='body2' sx={{ fontSize: '12px' }}>
                Tanggal Berakhir: <strong>{tanggalBerakhir}</strong>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ClipboardFileOutline sx={{ color: 'primary.main', marginRight: 2.25 }} fontSize='small' />
              <Typography variant='body2' sx={{ fontSize: '12px' }}>
                Total Sub Kegiatan: <strong>{totalSubKegiatan}</strong>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ marginTop: 4.5, marginBottom: 1.75 }} />
        <Grid justifyContent='end' display='flex'>
          <Link onClick={e => router.push(`/project-detail`)}>
            <Button sx={{ mt: 5 }} variant='contained'>
              Selengkapnya
            </Button>
          </Link>
          <Button size={'small'} mt={4} variant={'contained'} onClick={() => justt(id)}>
            justtry
          </Button>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardProjectDetails