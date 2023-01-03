# React Hooks

## UseInput
```js
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: {value}
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
    
  };
  return { value, onChange };
}
```

## UseTabs
```js
import React, {useState} from "react";
// import ReactDOM from "react-dom";

const content = [
  {
    tab: "Section 1",
    content: "I', the content of the Section 1"
  },

  {
    tab: "Section 2",
    content: "I', the content of the Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const App = () => {
  const {currentItem, changeItem} = useTabs(0, content);
  return (
    <div className="App">
      <h1>Hello</h1>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default App;

```

## UseTitle
```js
import React, {useState, useEffect} from "react";
// import ReactDOM from "react-dom";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [title]);
  return setTitle;
}

const App = () => {
  const titleUpdater = useTitle("Loading ...");
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}

export default App;

```

## UseClick
```js
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

```