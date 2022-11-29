import React from 'react';
import { Box, Container, Divider } from '@mui/material';
//import APIComponent from './pages/APIComponent/APIComponent';
//import APIPureComponent from './pages/APIPure/APIPure';
import APIMemo from './pages/APIMemo/APIMemo';
import APIForwardRef from './pages/APIForwardRef/APIForwardRef';
import APILazySuspense from './pages/APILazySuspense/APILazySuspense';

//import APIFragment from './pages/APIFragment/APIFragment';
import APIProfiler from './pages/APIProfiler/APIProfiler';
//import APIStrickMode from './pages/APIStrictMode/APIStrictMode';
import '../pages.css';

const ReactAPI = () => {

  const functionRecord = [
    <APIMemo />,
    <APIForwardRef />,
    <APILazySuspense />,
    //<APIProfiler />,
  ]

  return (
    <>
      <Container maxWidth="xl">
        {
          functionRecord.map((item, i) => {
            return (
              <Box
                key={i}
                sx={{ p: 1 }}
              >
                {item}
                <Divider sx={{ m: 1 }} />
              </Box>
            )
          })
        }
      </Container>
    </>
  )
}
export default ReactAPI;
