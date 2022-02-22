import React from 'react'

export const CalcButton = ({text,name}) => {
  return (
    <button className={`btn ${name}`}>{text}</button>
  )
}
