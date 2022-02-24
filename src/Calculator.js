import {useState} from 'react'
import { DisplayBox } from './DisplayBox';
import { CalcButton } from './CalcButton';

export const Calculator = () => {
  const [value,setValue]=useState(0);


   const test=(val)=>{
     setValue(val);
   }
  return (
    <div className="mainParent">
      <DisplayBox value={value}/>
      <div className="items">
        <CalcButton testFunc={test} />
      </div>
    </div>
  )
}
