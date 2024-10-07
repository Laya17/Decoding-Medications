import { Children } from "react";
import style from "./Button.module.css";

export default function Button({ children, className, onClick }) {
  return (
    <button className={`${style.defaultbutton} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
