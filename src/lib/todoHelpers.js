export const addTodo = (list, item) => [...list,item]

export const findById = (id, list) => {
	return list.find((item) => id===item.id)
}

export const toggleTodo = (item) => ({...item, isComplete: !item.isComplete})


export const updateTodo = (list, item) => {
	return list.map( (todo, index) => {
        if(todo.id !== item.id) {
            // This isn't the item we care about - keep it as-is
            return todo;
        } 
        // Otherwise, this is the one we want - return an updated value
        return {
            ...todo,
            ...item
        };    
    });
}

export const removeTodo = (array, id) =>{
    return array.filter((item, index) => item.id !== id);

}

export const filterTodos = (array, route) =>{
    switch(route){
        case '/active':
            return array.filter(todo => todo.isComplete === false)
        case '/completed':
            return array.filter(todo => todo.isComplete === true)
        case '/':
            return array
        default:
            return array    
    }
}