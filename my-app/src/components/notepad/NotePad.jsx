import { useRef, useState } from 'react'
import styled from 'styled-components'

const StyledNotePad = styled.div`
  flex: 1 1 auto;
  height: 100%;
  padding: 2rem;
`

export default function NotePad() {
  const pad = useRef()
  const handleClick = () => {
    const span = document.createElement('span')
    pad.current.appendChild(span)
  }

  return (
    <StyledNotePad onClick={handleClick} ref={pad}>
      
    </StyledNotePad>
  )
}
