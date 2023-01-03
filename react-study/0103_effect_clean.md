
# React Effect study

```js
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyWord] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyWord(event.target.value);
  console.log("i run all time");
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search For", keyword);
    }
  }, [keyword])
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!!</button>
    </div>
  );
}

export default App;

```

# React Effect Clean
```js
// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("Destroy : ");
  }
  function hiFn() {
    console.log("Created : ");
    return byFn;
  }
  useEffect(hiFn, []);
  return (
    <h1>Hello</h1>
  );
};


function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev)

  return (
    <div>
    {showing ? <Hello />: null}
    <button onClick={onClick}>{showing ? "Hide": "Show"}</button>
    </div>
  );
};

export default App;

```