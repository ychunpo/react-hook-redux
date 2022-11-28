import React from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary,
  Box,
  Container,
  Paper,
  Typography
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WithoutUseContext from './example/CaseCompare/WithoutUseContext';
import WithUseContext from './example/CaseCompare/WithUseContext';
import Example1 from './example/ex1/Example1';
import WithoutUseContextCode from './exCode/WithoutUseContextCode';
import WithUseContextCode from './exCode/WithUseContextCode';
import Example1ExCode1 from './exCode/ExCode1';

const HookUseContext = () => {
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
            useContext
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ pt: 2, textAlign: 'center' }}
          >
            without useContext <span> vs </span> with useContext
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
            <Paper sx={{ backgroundColor: 'grey.100' }}>
              <Box p={1}>
                <Box mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <WithoutUseContext />
                </Box>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography mr={1} sx={{}}>
                      Code
                    </Typography>
                    <CodeIcon />
                  </AccordionSummary>
                  <AccordionDetails>
                    <WithoutUseContextCode />
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Paper>

            <Paper sx={{ backgroundColor: 'grey.100' }}>
              <Box p={1}>
                <Box mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <WithUseContext />
                </Box>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography mr={1} sx={{}}>
                      Code
                    </Typography>
                    <CodeIcon />
                  </AccordionSummary>
                  <AccordionDetails>
                    <WithUseContextCode />
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Paper>

          </Box>

          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ pt: 2, textAlign: 'center' }}
            >

            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
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
                      <Typography mr={1} sx={{}}>
                        Code
                      </Typography>
                      <CodeIcon />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Example1ExCode1 />
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Paper>

              {/*<Paper sx={{ backgroundColor: 'grey.100' }}>
                <Box p={1}>
                  <Box mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>

                  </Box>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography mr={1} sx={{}}>
                        Code
                      </Typography>
                      <CodeIcon />
                    </AccordionSummary>
                    <AccordionDetails>

                    </AccordionDetails>
                  </Accordion>
                </Box>
          </Paper>*/}

            </Box>
          </Box>

        </Box>
      </Box>
    </Container>
  )
}

export default HookUseContext;