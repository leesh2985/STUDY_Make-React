import styles from "./TodoItem.module.css";
import { BsCheckCircle } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";

interface TodoItemProps {
  text: string;
}

const TodoItem = (props: TodoItemProps) => {
  const isCheck = true;
  return (
    <li className={styles.container}>
      <BsCheckCircle
        className={[
          styles.checkIcon,
          ` ${isCheck ? styles.checkedCircleIcon : styles.unCheckedCircleIcon}`,
        ].join(" ")}
      />
      <span>{props.text}</span>
      <IoIosRemoveCircleOutline className={styles.removeIcon} />
    </li>
  );
};

export default TodoItem;
