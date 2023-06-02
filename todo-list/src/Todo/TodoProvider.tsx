import { ReactNode } from "react";

interface TodoProviderProps {
  childen: ReactNode;
}

const TodoProvider = (props: TodoProviderProps) => {
  return <>{props.childen}</>;
};

export default TodoProvider;
