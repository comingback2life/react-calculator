import React from 'react'
let addNumbers="";
export const CalcButton = () => {
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
  const handleOnClick=(val)=>{
    const calcSymbols = ["/", "*", "-", "+"];
    if(calcSymbols.includes(val) && addNumbers.includes(val)){
      return;
    }else{
      addNumbers+=val
      console.log(eval(addNumbers));
    }
    if(val==="C") console.log("Clear")
    if (val==="AC")  console.log("AC");
    if (val === "." && val.includes(".")) return;
  }
  return (
    
    // <button className={`btn ${myClass}`}>{text}</button>
    btns.map(btnList=><button key={btnList.key}className={btnList.key} onClick={()=>handleOnClick(btnList.value)}>{btnList.value}</button>)
  )
}
