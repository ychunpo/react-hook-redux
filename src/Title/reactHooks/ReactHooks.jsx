import React from 'react';
//import { topic, listData } from './Data/listData';
import { Box, Container, Divider } from '@mui/material';
import HookUseState from './pages/UseState/HookUseState';
import HookUseEffect from './pages/UseEffect/HookUseEffect';
import HookUseContext from './pages/UseContext/HookUseContext';
import HookUseReducer from './pages/UseReducer/HookUseReducer';
import HookUseCallback from './pages/UseCallback/HookUseCallback';
import HookUseMemo from './pages/UseMemo/HookUseMemo';
import HookUseRef from './pages/UseRef/HookUseRef';
import HookUseImperativeHandle from './pages/UseImperativeHandle/HookUseImperativeHandle';
import HookUseLayoutEffect from './pages/UseLayoutEffect/HookUseLayoutEffect';
import HookUseDebugValue from './pages/UseDebugValue/HookUseDebugValue';
import HookUseDeferredValue from './pages/UseDeferredValue/HookUseDeferredValue';
import HookUseTransition from './pages/UseTransition/HookUseTransition';
import HookUseId from './pages/UseId/HookUseId';
import HookUseSyncExternalStore from './pages/UseSyncExternalStore/HookUseSyncExternalStore';
import HookUseInsertionEffect from './pages/UseInsertionEffect/HookUseInsertionEffect';
import CustomHooks from './pages/CustomHook/CustomHooks';

const ReactHooks = () => {

  const hookRecord = [
    <HookUseState />,
    <HookUseEffect />,
    <HookUseContext />,
    <HookUseReducer />,
    <HookUseCallback />,
    <HookUseMemo />,
    <HookUseRef />,
    <HookUseImperativeHandle />,
    <HookUseLayoutEffect />,
    <HookUseDebugValue />,
    <HookUseDeferredValue />,
    <HookUseTransition />,
    <HookUseId />,
    <HookUseSyncExternalStore />,
    <HookUseInsertionEffect />,
    <CustomHooks />,
  ]

  return (
    <>
      <Container maxWidth="xl">
        {
          hookRecord.map((item, i) => {
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

export default ReactHooks;