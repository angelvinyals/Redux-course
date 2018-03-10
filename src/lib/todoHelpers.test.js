import {addTodo, findById, toggleTodo, updateTodo} from './todoHelpers'

it('addTodo should add the passed todo to the list', () =>{

	const startTodos =[
		{id:1, name:'elque sigui', isComplete:false},
		{id:2, name:'Again!', isComplete:true},
		{id:3, name:'another name', isComplete:true},
		{id:4, name:'uuuuuuherwer1232', isComplete:false},
	]

	const newTodo ={id:5, name:'new todo', isComplete:false}

	const expected =[
		{id:1, name:'elque sigui', isComplete:false},
		{id:2, name:'Again!', isComplete:true},
		{id:3, name:'another name', isComplete:true},
		{id:4, name:'uuuuuuherwer1232', isComplete:false},
		{id:5, name:'new todo', isComplete:false}
	]

	const result = addTodo(startTodos, newTodo)


	expect(result).toEqual(expected)
})


it('addTodo should not mutate the existing todo array', () =>{

	const startTodos =[
		{id:1, name:'elque sigui', isComplete:false},
		{id:2, name:'Again!', isComplete:true},
		{id:3, name:'another name', isComplete:true},
		{id:4, name:'uuuuuuherwer1232', isComplete:false},
	]

	const newTodo ={id:5, name:'new todo', isComplete:false}

	const expected =[
		{id:1, name:'elque sigui', isComplete:false},
		{id:2, name:'Again!', isComplete:true},
		{id:3, name:'another name', isComplete:true},
		{id:4, name:'uuuuuuherwer1232', isComplete:false},
		{id:5, name:'new todo', isComplete:false}
	]

	const result = addTodo(startTodos, newTodo)


	expect(result).not.toBe(startTodos)
})

it('findById should return the expected item from an array', () =>{

	const startTodos =[
		{id:1, name:'elque sigui', isComplete:false},
		{id:2, name:'Again!', isComplete:true},
		{id:3, name:'another name', isComplete:true},
		{id:4, name:'uuuuuuherwer1232', isComplete:false},
	]

	const idFinded = 3

	const expected = {id:3, name:'another name', isComplete:true}

	const result = findById(idFinded, startTodos)

	expect(result).toEqual(expected)
})

it('toggleTodo should toggle the isComplete prop of a todo', () =>{

	const startTodo = {id:3, name:'another name', isComplete:true}	
	
	const expected = {id:3, name:'another name', isComplete:false}
	

	const result = toggleTodo(startTodo)

	expect(result).toEqual(expected)
})

it('toggleTodo should not mutate the original todo', () =>{

	const startTodo = {id:3, name:'another name', isComplete:true}	
	
	const expected = {id:3, name:'another name', isComplete:false}
	
	const result = toggleTodo(startTodo)

	expect(result).not.toBe(startTodo)
})

it('updateTodo should update an item by id', () =>{

	const startTodos =[
		{id:1, name:'elque sigui', isComplete:false},
		{id:2, name:'Again!', isComplete:true},
		{id:3, name:'another name', isComplete:true},
		{id:4, name:'uuuuuuherwer1232', isComplete:false},
	]

	const updateItem ={id:2, name:'changed name', isComplete: false}

	const expected =[
		{id:1, name:'elque sigui', isComplete:false},
		{id:2, name:'changed name', isComplete: false},
		{id:3, name:'another name', isComplete:true},
		{id:4, name:'uuuuuuherwer1232', isComplete:false},
	]

	const result = updateTodo(startTodos, updateItem)

	expect(result).toEqual(expected)
})

it('updateTodo should not mutate the original array', () =>{

	const startTodos =[
		{id:1, name:'elque sigui', isComplete:false},
		{id:2, name:'Again!', isComplete:true},
		{id:3, name:'another name', isComplete:true},
		{id:4, name:'uuuuuuherwer1232', isComplete:false},
	]	

	const updateItem ={id:2, name:'changed name', isComplete: false}

	const expected =[
		{id:1, name:'elque sigui', isComplete:false},
		{id:2, name:'changed name', isComplete: false},
		{id:3, name:'another name', isComplete:true},
		{id:4, name:'uuuuuuherwer1232', isComplete:false},
	]	
	
	const result = updateTodo(startTodos, updateItem)

	expect(result).not.toBe(startTodos)
})