import { useQueryClient } from "@tanstack/react-query"

function Checkbox ({todo}) {
    const queryClient = useQueryClient();

    async function toggleTodo() {

        try {
        await fetch(`http://localhost:3002/updateTodo/${todo.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                completed: !todo.completed
            })
        }) 

        queryClient.invalidateQueries({queryKey: ["Todos"]})

    } catch (error){
        console.error("Error updating Todo", error)
    }
    }

    return (
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={toggleTodo}
        />
    )
}

export default Checkbox