import TodoItem from "../ListItem/TodoItem";
import styles from "./TodoList.module.css";

const List = () => {
  const arr = ["React", "Typescript", "Javascript", "Css", "Html"];

  return (
    <section>
      <ol className={styles.olContainer}>
        {arr.map((str, index) => {
          return <TodoItem key={`${str}_${index}`} text={str} />;
        })}
      </ol>
    </section>
  );
};

export default List;
