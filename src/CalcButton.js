import React from 'react'
const btns = [{
  key: 'clear',
  value: 'AC'
}, {
  key: 'clean',
  value: 'C'
}, {
  key: 'divide',
  value: '/'
}, {
  key: 'multi',
  value: '*'
}, {
  key: 'seven',
  value: '7'
}, {
  key: 'eight',
  value: '8'
}, {
  key: 'nine',
  value: '9'
}, {
  key: 'minus',
  value: '-'
}, {
  key: 'four',
  value: '4'
}, {
  key: 'five',
  value: '5'
}, {
  key: 'six',
  value: '6'
}, {
  key: 'plus',
  value: '+'
}, {
  key: 'three',
  value: '3'
}, {
  key: 'two',
  value: '2'
}, {
  key: 'one',
  value: '1'
}, {
  key: 'dot',
  value: '.'
}, {
  key: 'zero',
  value: '0'
}, {
  key: 'equalsSign',
  value: '='
}];
const calcSymbols = ['+','-','*','/'];
let total ="";
export const CalcButton = ({displayFunc}) => {
  const handleOnClick=(btnValue)=>{
    if(btnValue=== "." && total.includes('.')){
      return;
    }
  
    if(total.length<1 && calcSymbols.includes(btnValue)) return;
    total=total.concat(btnValue);  
     displayFunc(total);
    if(btnValue==="="){    
      if(!total.length || (total.length===1 && total.includes('='))) {
        total=""
        return displayFunc(0)
      }
      console.log(calcSymbols.includes(total[total.length-1]))
      if(calcSymbols.includes(total[total.length-1]) && total.includes(calcSymbols)){
        total=total.slice(0,-1);
      }
      total=total.slice(0,-1);
      calculateTotal(total);
      return;
    }
    if(btnValue==="C"){
      
      // if(calcSymbols.includes(total[total.length-1])){
      //   total=total.slice(0,-1);
      // }
      total=total.slice(0,-2);
      return displayFunc(total);
   
    }
    if (btnValue==="AC"){
      displayFunc(0);
    }
   
  }
  const calculateTotal=()=>{
    try{
     total=eval(total);
      displayFunc(total);
      total=""; // wiping out total so that it matches above conditions
    }catch(e){
      console.log(total,e)
    }
 
    
  }
  return (
   btns.map(btnList => <button key={btnList.key} className={btnList.key} onClick={()=>handleOnClick(btnList.value)}>{btnList.value}</button>) 
  )
}
