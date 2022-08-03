import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { topic, listData } from './Data/listData';
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
import OtherMemo from './pages/OtherMemo';
import '../pages.css';
import './hook.css'
import Image1 from './ImageComponent/image1/Image1';

const ReactHooks = () => {

  return (
    <div className='main-container'>
      <div className='main-left'>
        <Sidebar
          topic={topic}
          listData={listData}
        />
      </div>
      <div className='main-right'>
        <div>
          <Image1 />
        </div>
        <HookUseState />
        <HookUseEffect />
        <HookUseContext />
        <HookUseReducer />
        <HookUseCallback />
        <HookUseReducer />
        <HookUseMemo />
        <HookUseRef />
        <HookUseImperativeHandle />
        <HookUseLayoutEffect />
        <HookUseDebugValue />
        <HookUseDeferredValue />
        <HookUseTransition />
        <HookUseId />
        <HookUseSyncExternalStore />
        <HookUseInsertionEffect />
        <OtherMemo />
      </div>
    </div>
  )
}

export default ReactHooks;