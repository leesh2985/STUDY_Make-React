import { TodoType } from "./todoReducer";

export const saveTodos = (todos: TodoType[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const loadTodos = (): TodoType[] => {
  //: TodoType[] 추가안함
  const todoJson = localStorage.getItem("todos");

  if (!todoJson) {
    return [];
  }

  try {
    return JSON.parse(todoJson);
  } catch (e) {
    console.error(e);
    return [];
  }
};
