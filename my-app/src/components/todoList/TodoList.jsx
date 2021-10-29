import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import { useSelector, useDispatch } from 'react-redux'
import { load, selectTodos } from './todoSlice'

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
  const todo = useSelector(selectTodos)
  const dispatch = useDispatch()
  const [todos, setTodos] = useState([])
  const [formOpen, setFormOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleClick = () => {
    setFormOpen(true)
  }

  useEffect(() => {
    if (todos.length === 0) {
      dispatch(load())
      // setTodos(todo)
      // setIsLoading(false)
    }
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
