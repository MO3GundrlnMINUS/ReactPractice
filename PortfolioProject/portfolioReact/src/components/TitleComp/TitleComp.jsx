import React from 'react'
import styles from "./TitleComp.module.scss"

export function TitleComp({title}) {
  return (
    <div className={styles.topWrap}>
      <h1>{title}</h1>
      <div className={styles.bar}></div>
      </div>
  )
}