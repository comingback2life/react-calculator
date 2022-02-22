import React,{useState} from 'react'
import { DisplayBox } from './DisplayBox';
import {CalcButton} from './CalcButton'

const btns =[ {
  key:'clear',
  value:'AC'
},{
  key :'clean',
  value:'C'
},{
  key :'divide',
  value:'/'
},{
  key :'multi',
  value:'*'
},{
  key :'seven',
  value:'7'
} ,{
  key :'eight',
  value:'8'
},{
  key :'nine',
  value:'9'
},{
  key :'minus',
  value:'-'
},,{
  key :'four',
  value:'4'
}]

export const Calculator = () => {
const handleOnClick =(text)=>{
 const calcSymbols = ['+','-','*','/'];
}

  return (
    <div className="mainParent">
      <div className="title">React Calculator</div>
      <DisplayBox/>
      <div className="items">
      {
         
         btns.map((todo)=> <CalcButton key={todo.key} text={todo.value} name={todo.key} onClick={()=>handleOnClick(todo.key,todo.value)}/>)
       }
      </div>
    </div>
  )
}
