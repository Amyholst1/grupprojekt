import {useQuery} from "@tanstack/react-query"
import DeleteTodo from "./DeleteTodo"
import Checkbox from "./Checkbox"
import "./Todolist.css"

function Todolist() {

    const {data: todos = [], isLoading, refetch} = useQuery({
        queryKey: ["Todos"],
        queryFn: async () => {
            const res = await fetch ("http://localhost:3002/getTodos")
            return res.json()
        }
    })

    if (isLoading) return <p>Loading...</p>

    return (
        <>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <div className="listleft">
                        <Checkbox todo={todo} refetch={refetch}/>
                        <span>{todo.title}</span> 
                    </div>
                
                    <DeleteTodo id={todo.id} refetch={refetch}/>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Todolist