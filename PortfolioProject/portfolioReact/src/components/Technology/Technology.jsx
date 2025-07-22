import React from 'react'
import styles from "./Technology.module.scss"

export function Technology({subTitle, text, icon}) {
  return (
    <div className={styles.cBlock}>
      <div className={styles.iconDiv}>{icon}</div>
      <div className={styles.insideTech}>
      <h3>{subTitle}</h3>
      <p>{text}</p>
      </div>
    </div>
  )
}
