function DeleteTodo({id, refetch}) {

    async function deleteTodo() {

        await fetch(`http://localhost:3002/deleteTodo/${id}`,{
            method: "DELETE"
        }) 
        
        refetch()

    }

    return (
        <button onClick={deleteTodo}>🗑️</button>
    )
}

export default DeleteTodo