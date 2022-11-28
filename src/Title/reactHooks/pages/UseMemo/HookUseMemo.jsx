import React from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary,
  Box, Container, Paper, Typography
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SlowAppNoUseMemo from './example/SlowApp/SlowApp_NoUseMemo';
import SlowAppUseMemo from './example/SlowApp/SlowApp_useMemo';
import Example1 from './example/ex1/Example1';
import Example2 from './example/ex2/Example2';
import SlowAppNoUseMemoCode from './exCode/SlowAppNoUseMemoCode';
import SlowAppUseMemoCode from './exCode/SlowAppUseMemoCode';
import ExCode1 from './exCode/ExCode1';
import ExCode2 from './exCode/ExCode2';


const HookUseMemo = () => {
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
            useMemo
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ pt: 2, textAlign: 'center' }}
          >
            no useMemo <span> vs </span> useMemo
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
            <Paper sx={{ backgroundColor: 'grey.100' }}>
              <Box p={1}>
                <Box mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <SlowAppNoUseMemo />
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
                    <SlowAppNoUseMemoCode />
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Paper>

            <Paper sx={{ backgroundColor: 'grey.100' }}>
              <Box p={1}>
                <Box mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <SlowAppUseMemo />
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
                    <SlowAppUseMemoCode />
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Paper>

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
                    <ExCode1 />
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Paper>

            <Paper sx={{ backgroundColor: 'grey.100' }}>
              <Box p={1}>
                <Box mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Example2 />
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
                    <ExCode2 />
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

export default HookUseMemo