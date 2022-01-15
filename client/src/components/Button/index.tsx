import React, { ReactNode } from 'react';
import styles from './button.module.css';

type ButtonProps = {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  color: 'primary';
};

const buttonColor = (color: string) => {
  switch (color) {
    case 'primary':
      return styles.primary;
  }
};

function Button({ children, onClick, color }: ButtonProps) {
  return (
    <button className={buttonColor(color)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
