import React from 'react'

export const CalcButton = ({text,name}) => {
  return (
    <button className={`${name}`}>{text}</button>
  )
}
