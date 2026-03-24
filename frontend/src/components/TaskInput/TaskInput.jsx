import "./TaskInput.css";
import AddTask from "./AddTask";
import DateInput from "./DateInput";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { addTaskAPI } from "../../api/tasks";

function TaskInput({ showToast, showNotification }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const queryClient = useQueryClient();

  async function handleAddTask(event) {
    event?.preventDefault();

    if (!task.trim()) {
      showToast("Please enter a task", "error");
      return;
    }

    const newTask = {
      title: task,
      completed: false,
      date: date || new Date().toISOString().split("T")[0],
    };

    try {
      console.log("Sending task:", newTask);

      await addTaskAPI(newTask);

      queryClient.invalidateQueries({ queryKey: ["Todos"] });

      showToast("Task added successfully!", "success");
      showNotification(`${task} added to list ✔`);

      setTask("");
      setDate("");
    } catch (error) {
      console.error("Error adding task:", error);
      showToast("Failed to add task. Please try again.", "error");
    }
  }

  return (
    <form className="task-input-container" onSubmit={handleAddTask}>
      <div className="task-field">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-text-input"
          aria-label="Task name"
        />

        <DateInput date={date} setDate={setDate} />
      </div>

      <AddTask />
    </form>
  );
}

export default TaskInput;
