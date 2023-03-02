import React, { useState } from "react";
import { addTodo, checkTodo, removeTodo, useTodo } from "./redux/store";

const App = () => {
  const [text, setText] = useState("");
  const [render, setRender] = useState(false);

  function handleChange(event) {
    event.preventDefault();
    setText(event.target.value);
  }

  function handleClick() {
    let obj = {
      text: text,
      check: false,
    };
    addTodo(obj);
    setText("");
  }

  function handleCheck(text) {
    checkTodo(text);
    setRender(!render);
  }

  let displayLis = useTodo().map((el) => {
    return (
      <p
        key={el.text}
        onClick={() => handleCheck(el.text)}
        style={{ color: `${el.check ? "green" : "red"}` }}>
        {el.text}
      </p>
    );
  });

  return (
    <div className="main-container">
      <div className="list-container">{displayLis && displayLis}</div>
      <div>
        <input onChange={(event) => handleChange(event)} value={text}></input>
        <button onClick={() => handleClick()}>submit</button>
      </div>
      <a href="#" onClick={() => removeTodo()}>
        remove
      </a>
    </div>
  );
};
export default App;
