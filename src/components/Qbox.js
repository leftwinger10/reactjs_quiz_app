import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './qbox.module.css'
import question from './question.json'
export default function Qbox(props) {
  const [que,setQue]=useState(0)
  const [time,setTime]=useState(15)
  const [width,setWidth]=useState(0.00)
  const [move,setMove]=useState(false)
  const [counter,setCounter]=useState(true)
  const loader={
    width:parseInt(Math.ceil(width))+"%",
    backgroundColor:"red",
    height:"1px",
    transition:"3s"
  }

  const check_answer=(e)=>{
    setCounter(false)
    const options=document.getElementById("options").childNodes
    options.forEach((item)=>{
      if(item.textContent===question[que].answer){
        item.style.backgroundColor='green';
      }
    })
    if(time>0){
      if(e.target.textContent===question[que].answer){
        props.setScore(props.score+1)
      }else{
        e.target.style.backgroundColor="red";
      }
      setMove(true)
    }else{
      setMove(true)
      nextQuestion();
    }
  }
  const nextQuestion=()=>{
    if(que===question.length-1){
      setMove(false)
    }else if(move){
      setTime(15)
      setWidth(0.0)
      setQue(que+1);
      setCounter(true)
      setMove(false);
      const options=document.getElementById("options").childNodes;
      options.forEach((item)=>{
        item.style.backgroundColor=""
      })
    }
  }


useEffect(()=>{
  setTimeout(()=>{
    if(time>0 && counter){
      setTime(time-1)
      setWidth(width+(100/15))
    }else{
      setMove(true)
    }
  },1000)
},[time,width,counter,move])


  return (
    <div className={styles.q_box}>
      <div className={styles.q_header}>
        <div className={styles.q_time}>Time Left : <span>{time}s</span></div>
      </div>
      <div style={loader} ></div>
      <div  className={styles.q_question}>
        <h2><span>{question[que].numb}</span>. {question[que].question}</h2>
      </div>
      <div id="options" className={styles.q_options}>
        <div onClick={(e)=>{check_answer(e)}} className={styles.q_question}>{question[que].options[0]}</div>
        <div onClick={(e)=>{check_answer(e)}} className={styles.q_question}>{question[que].options[1]}</div>
        <div onClick={(e)=>{check_answer(e)}} className={styles.q_question}>{question[que].options[2]}</div>
        <div onClick={(e)=>{check_answer(e)}} className={styles.q_question}>{question[que].options[3]}</div>
      </div>
      <div className={styles.q_footer}>
        <div className={styles.footer_content}>
          <div className={styles.q_page}>{question[que].numb} of {question.length}</div>
          <button className={styles.q_next} onClick={(que===question.length-1)?props.next:()=>{setTimeout(nextQuestion,1000)}} type='button'>Next</button>
        </div>
      </div>
    </div>
  )
}





