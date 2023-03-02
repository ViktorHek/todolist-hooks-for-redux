import { createReduxModule } from "hooks-for-redux";
const initList = [{ text: "doing shit", check: false }];
const mainList = [{ text: "doing shit", check: false }];

export const [useTodo, { addTodo, checkTodo, removeTodo }] = createReduxModule("todo", mainList, {
  addTodo: (store, todo) => handleAddTodo(todo),
  removeTodo: () => initList,
  checkTodo: (store, val) => handleCheckTodo(val),
});

function handleAddTodo(todo) {
  mainList.push(todo);
  return mainList;
}

function handleCheckTodo(val) {
  mainList.map((el) => {
    if (el.text === val) {
      el.check = !el.check;
    }
  });
  return mainList;
}
