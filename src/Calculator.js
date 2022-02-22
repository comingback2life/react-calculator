import React,{useState} from 'react'
import { DisplayBox } from './DisplayBox';
import { CalcButton } from './CalcButton';

export const Calculator = () => {
  return (
    <div className="mainParent">
      <div className="title">React Calculator</div>
      <DisplayBox/>
      <div className="items">
        {
        <CalcButton></CalcButton>
       
       }

      </div>
    </div>
  )
}
