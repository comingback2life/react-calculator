import React,{useState} from 'react'
import { DisplayBox } from './DisplayBox';
import {CalcButton} from './CalcButton'

export const Calculator = () => {

  return (
    <div className="mainParent">
      <div className="title">React Calculator</div>
      <DisplayBox/>
      <div className="items">
        <CalcButton text="AC" name="clear"/>
        <CalcButton text="C" name="clean"/>
        <CalcButton text="/" name="divide"/>
        <CalcButton text="*" name="multi"/>
        <CalcButton text="7" name="seven"/>
        <CalcButton text="8" name="eight"/>
        <CalcButton text="9"name="nine"/>
        <CalcButton text="-"name="minus"/>
        <CalcButton text="4"name="four"/>
        <CalcButton text="5"name="five"/>
        <CalcButton text="6" name="six"/>
        <CalcButton text="+" name="plus"/>
        <CalcButton text="3" name="three"/>
        <CalcButton text="2" name="two"/>
        <CalcButton text="1" name="one"/>
        <CalcButton text="." name="dot"/>
        <CalcButton text="0" name="zero"/>
        <CalcButton text="=" name="equalsSign"/>
      </div>
    </div>
  )
}
