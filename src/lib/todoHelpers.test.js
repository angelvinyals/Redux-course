import {addTodo} from './todoHelpers'

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