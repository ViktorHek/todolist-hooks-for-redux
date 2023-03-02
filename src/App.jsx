import React, { useState } from "react";
// import { ToDoItem } from "./ToDoItem";
import { addTodo, checkTodo, removeTodo, useTodo } from "./redux/store";

const App = () => {
  // const list = useList();
  // const [text, setText] = useState("");

  // const createNewToDoItem = () => {
  //   if (!text) return alert("Please enter text!");
  //   addItem({ text });
  //   setText("");
  // };

  return (
    <div>
      <h1>{useTodo()}</h1>
      <a href="#" onClick={() => addTodo("shitting")}>
        add
      </a>
      <a href="#" onClick={() => removeTodo()}>
        remove
      </a>
      {/* <ul>
        {list.map((item) => (
          <ToDoItem key={item.id} item={item} />
        ))}
      </ul>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && createNewToDoItem()}
      />
      <button onClick={createNewToDoItem}>{" + "}</button> */}
    </div>
  );
};
export default App