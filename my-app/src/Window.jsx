import React from 'react'
import styled from 'styled-components'
import DayList from './components/dayList/DayList'

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
    border: 1px solid #fff;
    display: flex;
    justify-content: space-between;
  }
`
const daysInWeek = ['Time', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function Window() {

  return (
    <WindowStyle>
      <div id="container">

        {
          daysInWeek.map(day => <DayList key={day} day={day} />)
        }
      </div>
    </WindowStyle>
  )
}
