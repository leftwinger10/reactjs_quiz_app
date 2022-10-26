import React from 'react'
import styles from  './welcome.module.css'

export default function Welcome(props) {
  return (
    <>
    <div className={styles.w_box}>
      <div className={styles.w_header}>
        <h2>Quiz App</h2>
        <small>Check Your Knowlege with quick test</small>
      </div>
      <div className={styles.w_body}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perferendis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perferendis.</p>
      </div>
      <div className={styles.w_start}>
        <button onClick={props.next} type='button'>Start Quiz</button>
      </div>
    </div>
    </>
  )
}
