import React from 'react'
import {
  Accordion, AccordionDetails, AccordionSummary,
  Box,
  Container,
  Paper,
  Typography
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OnceTime from './example/OnceTime/OnceTime';
import AfterEveryRender from './example/AfterEveryRender/AfterEveryRender';
import AllUseEffect from './example/AllUseEffect/AllUseEffect';
import OnceTimeCode from './exCode/OnceTimeCode';
import AfterEveryRenderCode from './exCode/AfterEveryRenderCode';
import AllUseEffectCode from './exCode/AllUseEffectCode';

const HookUseEffect = () => {
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
            useEffect
          </Typography>
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
                  <OnceTime />
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
                    <OnceTimeCode />
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Paper>

            <Paper sx={{ backgroundColor: 'grey.100' }}>
              <Box p={1}>
                <Box mb={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <AfterEveryRender />
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
                    <AfterEveryRenderCode />
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
                    <AllUseEffect />
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
                      <AllUseEffectCode />
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

export default HookUseEffect;