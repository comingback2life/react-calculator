import React,{useState} from 'react'
import { DisplayBox } from './DisplayBox';
import {CalcButton} from './CalcButton'


const btns =[ "AC", "C", 1,2,3,4,5,6,7,8,9 ]
export const Calculator = () => {



const handleOnClick =(text)=>{
 const calcSymbols = ['+','-','*','/'];
 console.log(text);
}
  return (
    <div className="mainParent">
      <div className="title">React Calculator</div>
      <DisplayBox/>

      <div>
        {
          btns.map((text, i)=> <CalcButton key={i} text={text} name={text} onClick={()=>handleOnClick(text)}/>)
        }
      </div>
      <div className="items">
        <CalcButton text="AC" name="clear" onClick={()=>handleOnClick('AC')}/>
        <CalcButton text="C" name="clean" onClick={handleOnClick('clean')}/>
        <CalcButton text="/" name="divide"onClick={handleOnClick('/')}/>
        <CalcButton text="*" name="multi"onClick={handleOnClick('*')}/>
        <CalcButton text="7" name="seven"onClick={handleOnClick('7')}/>
        <CalcButton text="8" name="eight"onClick={handleOnClick('8')}/>
        <CalcButton text="9"name="nine"onClick={handleOnClick('9')}/>
        <CalcButton text="-"name="minus"onClick={handleOnClick('-')}/>
        <CalcButton text="4"name="four"onClick={handleOnClick('4')}/>
        <CalcButton text="5"name="five"onClick={handleOnClick('5')}/>
        <CalcButton text="6" name="six"onClick={handleOnClick('6')}/>
        <CalcButton text="+" name="plus"onClick={handleOnClick('+')}/>
        <CalcButton text="3" name="three"onClick={handleOnClick('3')}/>
        <CalcButton text="2" name="two"onClick={handleOnClick('2')}/>
        <CalcButton text="1" name="one"onClick={handleOnClick('1')}/>
        <CalcButton text="." name="dot"onClick={handleOnClick('.')}/>
        <CalcButton text="0" name="zero"onClick={handleOnClick('0')}/>
        <CalcButton text="=" name="equalsSign"/>
      </div>
    </div>
  )
}
