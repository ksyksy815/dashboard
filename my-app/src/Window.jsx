import React from 'react'
import styled from 'styled-components'

const WindowStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--background-color);
`

export default function Window() {
  return (
    <WindowStyle>
      window
    </WindowStyle>
  )
}
