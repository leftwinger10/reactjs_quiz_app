import React from 'react'
import Welcome from './Welcome'
import Qbox from './Qbox'
import RuleBox from './RuleBox'
import { useState } from 'react';
import Result from './Result';


export default function Home() {
  const [wel,setWel]=useState(true)
  const [rule,setRule]=useState(false)
  const [question,setQuestion]=useState(false)
  const [result,setResult]=useState(false)
  const [score,setScore]=useState(0)
  const nextPage=()=>{
    if(wel===true){
      setWel(false)
      setRule(true)
    }else if(rule===true){
      setRule(false)
      setQuestion(true)
    }else if(question===true){
      setQuestion(false)
      setResult(true)
    }

  }
  const prevPage=()=>{
    if(rule===true){
      setRule(false)
      setWel(true)
    }
  }
  const quit=()=>{
    setResult(false)
    setWel(true)
  }
  const replay=()=>{
    setResult(false)
    setQuestion(true)
  }
  return (
    <>
    {wel?<Welcome next={nextPage} />:''}
    {rule?<RuleBox next={nextPage} prev={prevPage} />:''}
    {question?<Qbox score={score} setScore={setScore} next={nextPage} />:''}
    {result?<Result quit={quit} replay={replay}  score={score} />:''} 
    </>
  )
}
