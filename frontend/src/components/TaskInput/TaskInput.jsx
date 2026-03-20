import "./TaskInput.css";
import AddTask from "./AddTask";
import DateInput from "./DateInput";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

function TaskInput({ showToast, showNotification }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const queryClient = useQueryClient();

  async function handleAddTask() {
    if (!task.trim()) {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      title: task,
      completed: false,
      date: date || new Date().toISOString().split("T")[0],
    };

    try {
      console.log("Sending task:", newTask);

      const response = await fetch("http://localhost:3002/addTodo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Failed to add task");
      }

      const data = await response.json();
      console.log("Server response:", data);

      queryClient.invalidateQueries({ queryKey: ["Todos"] });

      setTask("");
      setDate("");

      showToast("Task added successfully!", "success");
      showNotification(`${task} added to list`);
    } catch (error) {
      console.error("Error adding task:", error);
      showToast("Failed to add task. Please try again.", "error");
    }
  }

  return (
    <div className="task-input-container">
      <div className="task-field">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-text-input"
        />

        <DateInput date={date} setDate={setDate} />
      </div>

      <AddTask onClick={handleAddTask} />
    </div>
  );
}

export default TaskInput;
