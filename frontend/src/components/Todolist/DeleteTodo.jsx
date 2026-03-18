import {FiTrash} from "react-icons/fi"
import { useQueryClient } from "@tanstack/react-query"

function DeleteTodo({id}) {
    const queryClient = useQueryClient();

    async function deleteTodo() {

        await fetch(`http://localhost:3002/deleteTodo/${id}`,{
            method: "DELETE"
        }) 

        queryClient.invalidateQueries({queryKey:["Todos"]})
    }

    return (
        <button onClick={deleteTodo}>
            <FiTrash></FiTrash>
        </button>
    )
}

export default DeleteTodo