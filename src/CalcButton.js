import React from 'react';
import { DisplayBox } from './DisplayBox';
let addNumbers = "";
let flag = false;
export const CalcButton = () => {
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
  const handleOnClick = (val) => {
    const calcSymbols = ["/", "*", "-", "+"];
    if (calcSymbols.includes(val) && addNumbers.includes(val) && !addNumbers[0] === calcSymbols.includes(val)) {
      return;
    } else { //trying to bypass the octal literals error by checking if there is already a zero
      if (addNumbers === "0" && val === "0" && addNumbers.length === 1) {
        return;
      } else {

        if (val === "." && (!addNumbers.length - 1 === undefined) && (addNumbers[addNumbers.length - 1]).includes(".")) console.log("first");
        addNumbers = addNumbers + val;
      }
    }

    if (val === "C") console.log("Clear");
    if (val === "AC") console.log("AC");

    if (val === "=") {
      let total="0"; //initialising total
      total = addNumbers.slice(0, -1);
      console.log(eval(total))
      
    }
  };
  return (

    // <button className={`btn ${myClass}`}>{text}</button>
    btns.map(btnList => <button key={btnList.key} className={btnList.key} onClick={() => handleOnClick(btnList.value)}>{btnList.value}</button>)
  );

};
