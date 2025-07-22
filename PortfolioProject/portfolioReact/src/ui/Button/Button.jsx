import React from 'react';
import styles from "./Button.module.scss";

const combineClasses = (...classes) => {
  return classes.join(' ');
};

export const Button = ({ onClick, children, disabled = false, className, variant }) => {
  const buttonClasses = combineClasses(
    styles.button, // базовый класс, если нужно
    styles[`btn${variant}`], // динамический класс на основе пропса variant
    className // дополнительный класс, переданный через пропс
  );

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};