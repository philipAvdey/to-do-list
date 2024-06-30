import { useState } from "react";
import "./App.scss";
import Task from "./Task";

function App() {
  const [todoList, setTodoList] = useState<TaskObj[]>([]);
  const [newTask, setNewTask] = useState("");

  interface TaskObj {
    id: number;
    name: string;
  }

  const deleteTask = (id: number) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  const addTask = () => {
    if (newTask === "") {
      alert("Please enter some text!");
    } else {
      const task = {
        name: newTask,
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      };
      setTodoList([...todoList, task]);
      setNewTask("");
    }
  };

  return (
    <>
      <div className="app">
        <div className="app__title">
          <h1>Construct your to-do list below. </h1>
        </div>
        <div className="app__add-task">
          <input
            value={newTask}
            onChange={(event) => {
              setNewTask(event.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />
          <button className="add-task-button" onClick={addTask}>
            Add Task
          </button>
          <button
            className="clear-all-button"
            onClick={() => {
              setTodoList([]);
            }}
          >
            Clear All
          </button>
        </div>

        <div className="app__task-list">
          {todoList.map((todo) => (
            <Task deleteTask={deleteTask} taskName={todo.name} id={todo.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
