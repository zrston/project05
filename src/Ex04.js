import React, {useState} from 'react'
import Ex04List from './components/Ex04List'
import Ex04AddTodo from './components/Ex04AddTodo'
import { TodoContext } from './context/Ex04TodoContext'

/*
    useState is not defined
    useContext is not defined
    => import 안해줘서 나는 오류
    
    ck is no defined
    => ck라는 함수, 혹은 변수를 설정하지 X
    
    React Hook "useState" cannot be calle at the top level.
    => use ~ 리액트 훅은 반드시 컴포넌트 내에 작성
*/


const Ex04 = () => {

    const [todos, setTodos] = useState (
    [{text : 'React 복습하기', completed : false},
    {text : 'Spring 복습하기', completed : false}
    
    ])

    const [newTodo, setNewTodo] = useState("")

    /* newTodo에 값을 추가하는 함수 */
    const handleNewTodo = (e)=>{
        console.log('handleNewTodo Function', e.target.value)
        setNewTodo(e.target.value)
    }

    /* 기존 todos 배열에 새로운 할일을 추가하는 함수 */
    const handleTodoAddition = ()=>{
        console.log('handleTodoAddtion Function')
        console.log('newTodo: ', newTodo)
        setTodos([...todos,{text: newTodo, completed : false}])
        setNewTodo("")
    }
    /* 마친 일을 체크해주는 함수*/
    const handleTodoToggle = (index) =>{
        console.log('handleTodoToggle', index)
        const newTodos = [...todos]
        newTodos[index].completed = !todos[index].completed
        setTodos(newTodos)
    }

    /* 일을 삭제하는 함수*/
    const handleTodoDelete = (index)=>{
        console.log('handleTodoDelete Function')
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }

  return (
    <TodoContext.Provider value={{
        todos, setTodos, newTodo, setNewTodo,
        handleNewTodo, handleTodoAddition, handleTodoToggle,
        handleTodoDelete
    }}>
    <div>
        <h1>Todo List</h1>
        <Ex04List/>
        <Ex04AddTodo/>
    </div>
    </TodoContext.Provider>
  )
}

export default Ex04