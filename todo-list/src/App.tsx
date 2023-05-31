import "./App.css";
import Divder from "./Divder/Divder";
import TodoHeader from "./Header/TodoHeader";
import TodoInput from "./Input/TodoInput";
import TodoList from "./List/TodoList";
import TodoListTools from "./Tools/TodoListTools";

function App() {
  return (
    <main className="App">
      <TodoHeader />
      <TodoInput />
      <TodoListTools />
      <Divder />
      <TodoList />
    </main>
  );
}

export default App;
