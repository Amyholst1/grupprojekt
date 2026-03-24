export async function addTaskAPI(newTask) {
  const response = await fetch("http://localhost:3002/addTodo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });

  if (!response.ok) {
    throw new Error("Failed to add task");
  }

  return response.json();
}

export async function updateTaskTitleAPI(id, title) {
  const response = await fetch(`http://localhost:3002/updateTodo/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  if (!response.ok) {
    throw new Error("Failed to update task");
  }

  return response.json();
}
