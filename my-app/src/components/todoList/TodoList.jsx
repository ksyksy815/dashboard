import { useEffect } from 'react'
import styled from 'styled-components'
import { fetchTodo } from './todoAPI'

const StyledTodoList = styled.ul`
  min-width: 250px;
  min-height: 300px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.1);
`

export default function TodoList() {
  useEffect(()=> {
    console.log(fetchTodo())
  }, [])

  return (
    <StyledTodoList>
      <li>todo</li>
    </StyledTodoList>
  )
}
