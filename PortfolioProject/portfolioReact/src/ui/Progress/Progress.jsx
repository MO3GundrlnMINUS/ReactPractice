import React from 'react'
import styles from './Progress.module.scss'

export function Progress({progressTitle, progressPers, valueBox}) {
  return (
    <>
    <div className={styles.progFlex}>
    <p className={styles.progressTitle}>{progressTitle}</p>
    <p className={styles.progressPers}>{progressPers}</p>
    </div>
    <div className={styles.value}>
        <div className={styles[valueBox]}></div>
    </div>
    </>
  )
}