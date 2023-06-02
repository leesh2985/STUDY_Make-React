import { RiChatNewLine } from "react-icons/ri";
import styles from "./TodoInput.module.css";
import { ChangeEvent, FormEvent } from "react";
import {
  useInputTodoDispatch,
  useInputTodoState,
  useTodoDispatch,
} from "../Todo/TodoProvider";

const TodoInput = () => {
  const todoDispatch = useTodoDispatch();

  // 똑같이 썻음
  const inputDispatch = useInputTodoDispatch();
  const inputState = useInputTodoState();

  const handleInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    inputDispatch({
      type: "change",
      payload: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!inputState.text) {
      return;
    }

    todoDispatch({
      type: "add",
      payload: { text: inputState.text },
    });

    inputDispatch({
      type: "clear",
    });
  };

  return (
    <section className={styles.container}>
      <form className={styles.fromContainer} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder={"해야할 Todo"}
          value={inputState.text}
          onChange={handleInputChanged}
        />
        <button type="submit" className={styles.enter}>
          <RiChatNewLine />
        </button>
      </form>
    </section>
  );
};

export default TodoInput;
