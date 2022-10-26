import React from 'react'
import styles from './result.module.css'
import question from './question.json'

export default function Result(props) {
  return (
    <>
      <div className={styles.result_box}>
        <div className={styles.result_header}>
          <h2>Quiz Completed</h2>
        </div>
        <div className={styles.result_body}>
          <h4>You Score <span>{props.score} </span>out of <span>{question.length}</span> </h4>
        </div>
        <div className={styles.result_footer}>
          <button type="button" onClick={props.replay} >Replay</button>
          <button type='button' onClick={props.quit}>Quit Quiz</button>
        </div>
      </div>
    </>
  )
}
