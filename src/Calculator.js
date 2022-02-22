import React from 'react'
import { DisplayBox } from './DisplayBox';
import { CalcButton } from './CalcButton';

export const Calculator = () => {
  return (
    <div className="mainParent">
      <DisplayBox/>
      <div className="items">
        {
        <CalcButton></CalcButton>
       
       }

      </div>
    </div>
  )
}
