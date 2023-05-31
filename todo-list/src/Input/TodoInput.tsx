import { RiChatNewLine } from "react-icons/ri";
import "./TodoInput.css";

const TodoInput = () => {
  return (
    <section className={"container"}>
      <form className={"fromContainer"}>
        <input className={"input"} />
      </form>
      <button className="enter">
        <RiChatNewLine />
      </button>
    </section>
  );
};

export default TodoInput;
