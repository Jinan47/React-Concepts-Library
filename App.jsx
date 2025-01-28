import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [controller, setController] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  function addTask() {
    const newTask = {
      id: tasks.length + 1,
      title: controller,
    };
    const updatedTasks = [...tasks, newTask];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
    setController("");
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  }

  return (
    <>
      <h1>To Do List</h1>
      <input
        type="text"
        value={controller}
        onChange={(e) => setController(e.target.value)}
      />
      <button onClick={addTask} className="add-button">
        add task
      </button>
      {tasks.length !== 0 && <h3>Tasks</h3>}
      <ul>
        {tasks.map((task) => (
          <>
            <li key={task.id}>
              {task.title}{" "}
              <button
                onClick={() => deleteTask(task.id)}
                className="delete-button"
              >
                delete
              </button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
