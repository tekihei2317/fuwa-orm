import { useEffect, useRef, useState } from "react";
import DatabaseWorker from "./database-worker?worker";

type Task = {
  id: number;
  name: string;
  done: number;
};

type UseTaskReturn = {
  tasks: Task[];
  addTask: ({ name }: { name: string }) => void;
  toggleTaskStatus: (targetIndex: number) => void;
  deleteTask: (targetIndex: number) => void;
};

function useTask(): UseTaskReturn {
  const dbWorker = useRef<Worker>();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    dbWorker.current = new DatabaseWorker();
    dbWorker.current.onmessage = (e) => {
      setTasks(e.data);
    };
  }, []);

  const addTask = ({ name }: { name: string }) => {
    if (!dbWorker.current) return;
    dbWorker.current.postMessage({ action: "create", name });
  };

  const toggleTaskStatus = (id: number) => {
    if (!dbWorker.current) return;
    const task = tasks.find((task) => task.id === id);
    if (task === undefined) return;

    const newStatus = task.done === 1 ? 0 : 1;
    setTasks(tasks.map((task) => (task.id === id ? { ...task, done: newStatus } : task)));
    dbWorker.current.postMessage({ action: "toggle", id, status: newStatus });
  };

  const deleteTask = (id: number) => {
    if (!dbWorker.current) return;
    setTasks(tasks.filter((task) => task.id !== id));
    dbWorker.current.postMessage({ action: "delete", id });
  };

  return { tasks, addTask, toggleTaskStatus, deleteTask };
}

function App() {
  const [taskForm, setTaskForm] = useState("");
  const { tasks, addTask, toggleTaskStatus, deleteTask } = useTask();
  const handleSubmit = ({ name }: { name: string }) => {
    addTask({ name });
    setTaskForm("");
  };

  return (
    <>
      <div>
        <h1>Todo App</h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (taskForm === "") return;
          handleSubmit({ name: taskForm });
        }}
      >
        <input type="text" value={taskForm} onChange={(e) => setTaskForm(e.currentTarget.value)} />
        <button type="submit" style={{ marginLeft: "8px" }}>
          追加する
        </button>
      </form>
      <div style={{ maxWidth: "480px", marginTop: "16px" }}>
        {tasks.map((task) => (
          <div key={task.id} style={{ display: "flex", justifyContent: "space-between" }}>
            <label>
              <input type="checkbox" checked={Boolean(task.done)} onChange={() => toggleTaskStatus(task.id)} />
              <span>{task.name}</span>
            </label>
            <button onClick={() => deleteTask(task.id)}>削除する</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
