import { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { add, selectNewTodo } from './todoSlice'

const StyledTodoForm = styled.form`
  width: 100%;
  background: var(--darker);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  row-gap: 1rem;

  input {
    width: 100%;
    border-bottom: 1px solid #fff;
    padding: 0.5rem;
    color: #fff;
    &::placeholder {
      color: #fff;
    }
  }

  button {
    background: var(--background-color);
    padding: 0.5rem;
    width: 100px;
    color: #fff;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`

export default function TodoForm() {
  const todos = useSelector(selectNewTodo)
  const dispatch = useDispatch()
  
  const [content, setContent] = useState('')

  const handleChange = (e) => {
    setContent(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(content)
    dispatch(add(content))
  }

  return (
    <StyledTodoForm onSubmit={handleSubmit}>
      <input type="text" placeholder="Write a to-do!" onChange={handleChange}/>
      <button type="submit">Add</button>
    </StyledTodoForm>
  )
}
