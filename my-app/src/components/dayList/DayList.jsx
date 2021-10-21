import React from 'react'
import styled from 'styled-components'

const StyledDayList = styled.ul`
  flex: 1 1 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .hour-box {
    flex: 1 1 auto;
    width: 100%;
    padding: 5px;
    &:nth-child(even) {
      background: rgba(255, 255, 255, 0.5);
    }
  }
`
const hours = new Array(20).fill(' ')

export default function DayList( {day} ) {
  return (
    <StyledDayList>
      <div>
        <span>{day}</span>
      </div>
      {
        hours.map((hour, index) => {
          if (day === 'Time') {
            let time = `${index+5}:00`
            return <li key={index} className="hour-box">{time}</li>
          }
          return <li key={index} className="hour-box">{hour}</li>
        })
      }
    </StyledDayList>
  )
}
