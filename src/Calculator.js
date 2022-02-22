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
},{
  key :'four',
  value:'4'
},{
  key :'five',
  value:'5'
},{
  key :'six',
  value:'6'
},{
  key :'plus',
  value:'+'
},{
  key :'three',
  value:'3'
},{
  key :'two',
  value:'2'
},{
  key :'one',
  value:'1'
},{
  key :'dot',
  value:'.'
},{
  key :'zero',
  value:'0'
},{
  key :'equalsSign',
  value:'='
}]
export const Calculator = () => {
const handleOnClick =(key,value)=>{
console.log(key,value);
}

  return (
    <div className="mainParent">
      <div className="title">React Calculator</div>
      <DisplayBox/>
      <div className="items">
      {
         
         btns.map((todo)=> <CalcButton key={todo.key} text={todo.value} name={todo.key} onClick={()=>handleOnClick(todo.key,todo,todo.value)}/>)
       }
      </div>
    </div>
  )
}
