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
