import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

const StyledTodoList = styled.div`
  border: 1px solid #fff;
  width: 30%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  row-gap: 1rem;

  #todo-ul {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;

    li {
      padding: 0.5rem;
      border-radius: 10px;
    }
  }

#add-todo-button {
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 10px;
    font-size: 1.3rem;
  }
`

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [formOpen, setFormOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const URL = 'http://jsonplaceholder.typicode.com/todos'

  const handleClick = () => {
    setFormOpen(true)
  }

  useEffect(() => {
    axios(`${URL}?_start=0&_limit=5`)
    .then(res => {
      setTodos(res.data)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  })

  return (
    <StyledTodoList>
      <h2>Todo List</h2>
      {isLoading ? 
        <span>Loading...</span>
        :
        <>
          <ul id="todo-ul">
            {
              todos.map(todo => <TodoItem key={todo.id} content={todo.title} completed={todo.completed} />)
            }
          </ul>
          {
            formOpen ? <TodoForm />
            : <button id="add-todo-button" onClick={handleClick}>+</button>
          }
          
        </>
      }
    </StyledTodoList>
  )
}
