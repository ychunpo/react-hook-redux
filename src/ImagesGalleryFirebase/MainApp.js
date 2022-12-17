import React from 'react'
import { Container } from '@mui/material';
import Nav from './components/Nav'
import Upload from './components/upload/Upload'
import ImagesList from './components/imagesList/ImagesList'

const MainApp = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', mt: '3rem' }}>
      <Nav />
      <Upload />
      <ImagesList />
    </Container>
  )
}

export default MainApp