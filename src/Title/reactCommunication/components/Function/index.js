import React from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary, Box,
  Container, List, ListItem, ListItemText, Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import FatherProps1 from './props/FatherToChild/ex1/FatherProps1';
import FatherProps2 from './props/ChildToFather/ex1/FatherProps2';
import FatherLevel from './CrossLevel/FatherComponent';
import SiblingFather from './Sibling/ex1/SiblingFather';
import Channel from './Sibling/ex2/Channel';
import Father2 from './props/ChildToFather/ex2/Father2';
import Father3 from './props/ChildToFather/ex3/Father3';
//import Example1 from '../../../reactHooks/pages/UseRef/example/Example1';
import FatherProps1ExCode1 from './props/FatherToChild/exCode/ExCode1';
import FatherProps2ExCode1 from './props/ChildToFather/exCode/ExCode1';
import Father2ExCode2 from './props/ChildToFather/exCode/ExCode2';
import Father3ExCode3 from './props/ChildToFather/exCode/ExCode3';
import FatherComponentExCode1 from './CrossLevel/exCode/ExCode1';
import SiblingFatherExCode1 from './Sibling/exCode/ExCode1';
import ChannelExCode2 from './Sibling/exCode/ExCode2';

const data = [
  {
    title: 'Props - Father To Child',
    example: [
      { name: '例子 1:', prog: <FatherProps1 />, code: <FatherProps1ExCode1 /> }
    ],
  },
  {
    title: 'Props - Child to Father',
    example: [
      { name: '例子 1:', prog: <FatherProps2 />, code: <FatherProps2ExCode1 /> },
      { name: '例子 2:', prog: <Father2 />, code: <Father2ExCode2 /> },
      { name: '例子 3:', prog: <Father3 />, code: <Father3ExCode3 /> },
    ],
  },
  {
    title: 'Cross Level',
    example: [
      { name: '例子 1:', prog: <FatherLevel />, code: <FatherComponentExCode1 /> },
    ]
  },
  {
    title: 'Sibling',
    example: [
      { name: '例子 1:', prog: <SiblingFather />, code: <SiblingFatherExCode1 /> },
      { name: '例子 2:', prog: <Channel />, code: <ChannelExCode2 /> },
    ],
  },
]

function FunctionCommunication() {
  return (
    <Container maxWidth="xl">
      {data.map((items, i) => {
        return (
          <Box key={i}>
            <Box p={1} bgcolor='#482880'>
              <Typography
                variant='h6'
                textAlign='center'
                color='#ffac33'
              >
                {items.title}
              </Typography>
            </Box>

            <List>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '0 30px'
                }}
              >
                {
                  items.example.map((itemExample, i) => {
                    return (
                      <Box
                        key={i}
                      >
                        <ListItem>
                          <ListItemText primary={itemExample.name} />
                        </ListItem>
                        <ListItem>
                          {itemExample.prog}
                        </ListItem>

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
                            {itemExample.code}
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    )
                  })
                }
              </Box>
            </List>
          </Box>
        )
      })}
    </Container >
  )
}

export default FunctionCommunication;
