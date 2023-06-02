import { createContext, ReactNode, useReducer } from "react";
import { todoInputReducer } from "./todoInputReducer";
import { todoReducer } from "./todoReducer";

interface TodoProviderProps {
  childen: ReactNode;
}

const TodoStateContext = createContext(null);
const TodoTodoDispatchContext = createContext(null);
const InputTodoContext = createContext(null);
const InputTodoDispatchContext = createContext(null);

const TodoProvider = (props: TodoProviderProps) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: [] });
  const [inputState, inputDispatch] = useReducer(todoInputReducer, {
    todos: "",
  });

  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoTodoDispatchContext.Provider value={todoDispatch}>
        <InputTodoContext.Provider value={inputState}>
          <InputTodoDispatchContext.Provider value={inputDispatch}>
            {props.childen}
          </InputTodoDispatchContext.Provider>
        </InputTodoContext.Provider>
      </TodoTodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoProvider;
