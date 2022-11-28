import React from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary,
  Box, Container, Paper, Typography
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppClass from './example/ClassAndHook/AppClass';
import AppHook from './example/ClassAndHook/AppHook';
import Example1 from './example/Example1';
import UpdateCompare from './example/UpdateCompare/UpdateCompare';
//import Example4 from './example/Example4';
import AppClassCode from './exCode/AppClassCode';
import AppHookCode from './exCode/AppHookCode';
import ExCode1 from './exCode/ExCode1';
import UpdateCompareCode from './exCode/UpdateCompareCode';

const HookUseState = () => {

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
            useState
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ pt: 2, textAlign: 'center' }}
          >
            Class <span> vs </span> Function
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
            <Paper sx={{ backgroundColor: 'grey.100' }}>
              <Box p={1}>
                <Box mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <AppClass />
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
                    <AppClassCode />
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Paper>

            <Paper sx={{ backgroundColor: 'grey.100' }}>
              <Box p={1}>
                <Box mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <AppHook />
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
                    <AppHookCode />
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
              Direct Update <span> vs </span> Functional Update
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
              <Paper sx={{ backgroundColor: 'grey.100' }}>
                <Box p={1}>
                  <Box mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <UpdateCompare />
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
                      <UpdateCompareCode />
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Paper>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ pt: 2, textAlign: 'center' }}
            >
              Other Example
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
            </Box>
          </Box>
        </Box>
      </Box >
    </Container >
  )
}

export default HookUseState;
