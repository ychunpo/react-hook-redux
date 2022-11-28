import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState } from "react";

/**
 * useImperativeHandle(): 透傳 Ref
 * 作用：使父組件具備了獲取子組件【實例】和【狀態數據】的能力，
 * 還可以根據參數來定義傳遞的數據是否要隨著子組件對應數據的更新而更新
 * 即：子組件通過useImperativeHandle自定義要傳遞給父組件的狀態或功能
 * （想傳什麼給父組件，就通過useImperativeHandle第二個參數返回值對像中定義即可）
 * 注意：需要配合forwardRef一起使用，需要用到forwardRef轉發ref給子組件的能力，
 *      否則無法獲取到對應的ref引用，數據就不知道傳給誰了。
 */
/**
 * 使用forwardRef，轉發FancyButton的ref引用到組件內部
 */
const FancyButton = forwardRef((props, ref) => {
  const inputRef = useRef()
  const [inputValue, setInputValue] = useState(0)
  // 在useImperativeHandle中自定義要返回的屬性給ref引用
  useImperativeHandle(ref, () => ({
    // 傳遞功能
    focus: () => {
      inputRef.current.focus()
    },
    // 傳遞狀態數據
    inputValue,
    // 傳遞實例屬性
    inputRef
  }))
  return <input ref={inputRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
})
const Example3 = () => {
  // 創建一個ref引用
  const ref = useRef()
  // 獲取input的焦點
  const handleInputFocus = useCallback(() => {
    ref.current.focus()
  }, [])
  // 獲取傳遞的狀態數據
  const handleGetChildState = useCallback(() => {
    // 因此ref被轉發到了FancyButton內部，
    // 經過useImperativeHandle就可以獲取到返回的相關屬性
    console.log('ref', ref.current)
    // {inputValue: '11111', inputRef: {…}, focus: ƒ}
  }, [])
  return (
    <div>
      {/* 綁定ref引用到 FancyButton上*/}
      <h3>Example 3</h3>
      <FancyButton ref={ref} />
      <button onClick={handleInputFocus}>获取子组件input的焦点</button>
      <button onClick={handleGetChildState}>获取子组件的状态</button>
    </div>
  )
}

export default Example3;