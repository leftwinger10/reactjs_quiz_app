import React from 'react'
import styles from './rulebox.module.css'

export default function RuleBox(props) {
  return (
    <>
    <div className={styles.rule_box}>
      <div className={styles.rule_header}>
        <h2>Some Rule of this Quiz</h2>
      </div>
      <div className={styles.rule_list}>
        <ol>
        <li>You will have only <span style={{color: "red",fontWeight:"bold"}}>15 seconds</span> per each question.</li>
            <li>Once you select your answer, it can't be undone.</li>
            <li>You can't select any option once time goes off.</li>
            <li> You can't exit from the Quiz while you're playing.</li>
            <li>You'll get points on the basis of your correct answers.</li>
        </ol>
      </div>
      <div className={styles.rule_footer}>
        <div className={styles.exit}><button onClick={props.prev} type='button'>Exit Quiz</button></div>
        <div className={styles.continue}><button onClick={props.next} type='button'>Continue</button></div>
      </div>
    </div>
    </>
  )
}
