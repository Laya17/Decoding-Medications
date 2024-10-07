import style from "./GetStarted.module.css";
import logo from "../logo.svg";
import Button from "../Assets/Button/Button";
import { useNavigate } from "react-router-dom";

export default function GetStarted() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home");
  };

  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <img className={style.logoimage} src={logo} alt="Logo"></img>
        <h1 className={style.logotitle}>Decoding Medications</h1>
      </div>
      <Button className={style.button} onClick={handleNavigate}>
        Get Started
      </Button>
    </div>
  );
}
