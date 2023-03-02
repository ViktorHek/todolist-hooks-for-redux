import { useRedux } from "hooks-for-redux";
const initList = "do shit";

export const [useTodo, { addTodo, checkTodo, removeTodo }] = useRedux("bja", initList, {
  addTodo: (store, todo) => todo,
  removeTodo: () => initList,
  checkTodo: () => initList,
});
