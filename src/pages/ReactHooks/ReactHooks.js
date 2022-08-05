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
import '../pages.css';
import './hook.css'
import Image1 from './ImageComponent/imageBox/Image1';
import Image2 from './ImageComponent/imageBox/image2';
import Image3 from './ImageComponent/imageBox/image3';
import Image4 from './ImageComponent/imageBox/image4';

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
        <div className='hook-image-group'>
          <Image1 />
        </div>
        <HookUseState />
        <HookUseEffect />
        <HookUseContext />
        <HookUseReducer />
        <div className='hook-image-group'>
          <Image2 />
          <Image3 />
        </div>
        <HookUseCallback />
        <HookUseMemo />
        <div>
          <Image4 />
        </div>
        <HookUseRef />
        <HookUseImperativeHandle />
        <HookUseLayoutEffect />
        <HookUseDebugValue />
        <HookUseDeferredValue />
        <HookUseTransition />
        <HookUseId />
        <HookUseSyncExternalStore />
        <HookUseInsertionEffect />
      </div>
    </div>
  )
}

export default ReactHooks;