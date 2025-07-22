import React from 'react'
import styles from './PageSpace.module.scss'

export function PageSpace({children}) {
  return (
    <div className={styles.pageSpace}>{children}</div>
  )
}