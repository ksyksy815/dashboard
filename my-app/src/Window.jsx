import React from 'react'
import styled from 'styled-components'
import TodoList from './components/todoList/TodoList'

const WindowStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;

  #container {
    width: 80%;
    min-height: 80%;
    display: flex;
    justify-content: space-between;
  }
`

export default function Window() {

  return (
    <WindowStyle>
      <div id="container">
        <TodoList />
      </div>
    </WindowStyle>
  )
}
