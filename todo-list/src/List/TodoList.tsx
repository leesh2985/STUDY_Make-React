import { TodoType } from "../App";
import TodoItem from "../ListItem/TodoItem";
import styles from "./TodoList.module.css";

interface TodoLostProps {
  todos: TodoType[];
  onToggleClick: (id: number) => void;
  onRemoveClick: (id: number) => void;
}

const TodoList = (props: TodoLostProps) => {
  return (
    <section>
      <ol className={styles.olContainer}>
        {props.todos.map((todo) => {
          return (
            <TodoItem
              id={todo.id}
              key={todo.id}
              text={todo.text}
              isChecked={todo.isChecked}
              onToggleClick={props.onToggleClick}
              onRemoveClick={props.onRemoveClick}
            />
          );
        })}
      </ol>
    </section>
  );
};

export default TodoList;
