import {React,useState} from 'react';

let addNumbers = "";
const calcSymbols = ["/", "*", "-", "+"];

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

export const CalcButton = ({displayFunc}) => {

  const handleOnClick = (val) => {
    



    if (calcSymbols.includes(val) && addNumbers.includes(val) && !addNumbers[0] === calcSymbols.includes(val)) {
      return;
    } else { //trying to bypass the octal literals error by checking if there is already a zero
      if (addNumbers === "0" && val === "0" && addNumbers.length === 1) {
        return;
      } else {
        if (val === "." && (!addNumbers.length === undefined) && (addNumbers.length - 1).includes(".")) return;
        if(val==="=" && addNumbers.length===0){
          return;
        }else{
          addNumbers = addNumbers + val;
          displayFunc(addNumbers);
        }
      }
    }
    if (val === "=") {
      let total=""; //initialising total
      total = addNumbers.slice(0, -1);
      total=eval(total);
      addNumbers=total.toString();
      displayFunc(total);
      return;
     
     
    }
    if (val === "C"){
      addNumbers=addNumbers.slice(0,-2);
      displayFunc(0)
      return addNumbers;
    } ;
    if (val === "AC"){
      addNumbers="";
      displayFunc(0);
    } 
  

  };
  
  return (
    btns.map(btnList => <button key={btnList.key} className={btnList.key} onClick={() => handleOnClick(btnList.value)}>{btnList.value}</button>)
    // <button className={`btn ${myClass}`}>{text}</button>
  );

};
