import { useRef, forwardRef, useImperativeHandle } from "react";

const App = () => {
  const inputRef = useRef(null);

  const handleChange = () => {
    inputRef.current.verify();
    inputRef.current.validate();
  };

  return (
    <div className="example-container">
      <h3>Example: 1</h3>
      <TextInput ref={inputRef} onChange={handleChange} />
    </div>
  );
};

const TextInput = forwardRef((props, ref) => {
  const verify = () => {
    console.log("----Verify() function called----");
  };

  const validate = () => {
    console.log("----validate() function called----");
  };

  useImperativeHandle(ref, () => ({ verify, validate }), []);

  return (
    <>
      <p></p>
      <p></p>
      <input {...props} type="text" />
    </>
  )
});

export default App;