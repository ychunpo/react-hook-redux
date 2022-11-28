import React from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary,
  Box, Container, Paper, Typography
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Example1 from './example/Example1';
import Example1ExCode1 from './exCode/ExCode1';


const HookUseLayoutEffect = () => {
  return (
    <Container maxWidth="xl">
      <Box >
        <Box
          sx={{
            bgcolor: '#039be5'
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              p: 1,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
              boxShadow: 2
            }}
          >
            useLayoutEffect
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ pt: 2, textAlign: 'center' }}
          >

          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              justifyContent: 'center'
            }}>
            <Paper sx={{ backgroundColor: 'grey.100' }}>
              <Box p={1}>
                <Box mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Example1 />
                </Box>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <CodeIcon />
                    <Typography m='0 6px' sx={{}}>
                      Code
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Example1ExCode1 />
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default HookUseLayoutEffect