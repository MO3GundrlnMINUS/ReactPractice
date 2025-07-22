import React from 'react'
import styles from './ListOfEdu.module.scss'

export function ListOfEdu({yearText, nameTitle, cityName, surNameTitle}) {
  return (
    <div className={styles.listOutline}>
    <div className={styles.yearText}>{yearText}</div>
    <div className={styles.titleColomn}>
        <div className={styles.nameTitle}>{nameTitle}</div>
        <div className={styles.surNameTitle}>{surNameTitle}</div>
    </div>
    <p className={styles.cityName}>{cityName}</p>
    </div>
  )
}