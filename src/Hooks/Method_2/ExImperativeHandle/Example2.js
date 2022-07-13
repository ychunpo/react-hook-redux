import React from 'react'
import { useState, useCallback, forwardRef, useRef, useImperativeHandle } from 'react'

/**
 * https://segmentfault.com/a/1190000017827094?utm_source=tag-newest
 * @param {*} props 
 * @param {*} ref 
 */

function FancyInput(props, ref) {
  const [fresh, setFresh] = useState(0)

  const attRef = useRef(0);

  useImperativeHandle(ref, () => {
    return {
      attRef,  //attRef:attRef, 
      fresh,
    }
  }, [fresh]);

  const handleClick = useCallback(() => {
    attRef.current = attRef.current + 1;
  }, []);

  return <div>
    attRef.current: {attRef.current}
    <br />
    <button onClick={handleClick}>+ 1</button>
    <button onClick={() => setFresh(!fresh)}>刷新</button>
  </div>
}

FancyInput = forwardRef(FancyInput);

const Example2 = props => {

  const fancyInputRef = useRef();

  return <div>
    <h3>Example-2</h3>
    <FancyInput ref={fancyInputRef} />
    <br />
    <button
      onClick={() => console.log(fancyInputRef.current)}>
      父组件访问子组件的实例属性
    </button>
  </div>
}

export default Example2;