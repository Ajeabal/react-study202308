import React from "react";
import styles from "./Button.module.css";
// 스타일 컴포넌츠 사용
// import styled from "styled-components";

const Button = ({ type, onClick, children }) => {
  return (
    <button type={type || 'button'} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

// const Button = styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//   &:focus {
//     outline: none;
//   }
//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

export default Button;
