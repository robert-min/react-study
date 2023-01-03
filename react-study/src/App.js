import React, {useState, useEffect, useRef} from "react";
// import ReactDOM from "react-dom";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);}
      }
  }, []);
  return element;
}


const App = () => {
  // const potato = useRef();
  // setTimeout(() => potato.current.focus(), 5000);
  const sayHello = () => console.log("Say hello")
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default App;
