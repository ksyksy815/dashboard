import React from 'react'
import styled from 'styled-components'

const StyledTodoItem = styled.li`
  background: #fff;
`

export default function TodoItem({content, completed}) {
  return (
    <StyledTodoItem>
      <div>{content}</div>
    </StyledTodoItem>
  )
}
