import {useState} from 'react'
import { DisplayBox } from './DisplayBox';
import { CalcButton } from './CalcButton';

export const Calculator = () => {
  const [value,setValue]=useState(0);


   const displayText=(val)=>{
     setValue(val);
   }
  return (
    <div className="mainParent">
      <DisplayBox value={value}/>
      <div className="items">
        <CalcButton displayFunc={displayText} />
      </div>
    </div>
  )
}
