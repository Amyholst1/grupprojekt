import {useQuery} from "@tanstack/react-query"
import DeleteTodo from "./DeleteTodo"
import Checkbox from "./Checkbox"
import "./Todolist.css"

function Todolist({ selectedFilter, sortBy }) {

    const {data: todos = [], isLoading, refetch} = useQuery({
        queryKey: ["Todos"],
        queryFn: async () => {
            const res = await fetch ("http://localhost:3002/getTodos")
            return res.json()
        }
    })


    let filteredTodos = [...todos]

    // filter
    if (selectedFilter === "Active") {
     filteredTodos = filteredTodos.filter((todo) => !todo.completed);
    } else if (selectedFilter === "Completed") {
    filteredTodos = filteredTodos.filter((todo) => todo.completed);
   }

   // SortBy
   if (sortBy === "Newest") {
   filteredTodos.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
   }  else if (sortBy === "Oldest") {
   filteredTodos.sort((a, b) => new Date(a.date || 0) - new Date(b.date || 0));
   }  else if (sortBy === "A-Z") {
   filteredTodos.sort((a, b) => a.title.localeCompare(b.title));
  }

    if (isLoading) return <p>Loading...</p>

    return (
        <>
        <ul>
            {filteredTodos.map((todo) => (
                <li key={todo.id}>
                    <div className="listleft">
                        <Checkbox todo={todo} refetch={refetch}/>
                        <span>{todo.title}</span> 
                    </div>

                    <div className="listright">
                        <small>{todo.date}</small>
                        <DeleteTodo id={todo.id} refetch={refetch}/>
                    </div>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Todolist