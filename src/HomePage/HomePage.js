import style from "./HomePage.module.css";
import noticon from "../Notification.svg";
import medicine from "./Assets/Pharmacy.svg";
import ingredients from "./Assets/Hospital.svg";
import sideEffects from "./Assets/Ambulance.svg";
import Updates from "./Assets/Doctor.svg";
import { useNavigate } from "react-router-dom";
import Button from "../Assets/Button/Button";
import Doctor from "../DoctorImage.svg";

export default function HomePage() {
  const navigateTo = useNavigate();

  const handleNavigate = (navigate) => {
    navigateTo(navigate);
  };
  const navigationArray = [
    { name: "Medicine", logo: medicine, navigate: "/medicine" },
    { name: "Ingredients", logo: ingredients, navigate: "/ingredients" },
    { name: "Side Effects", logo: sideEffects, navigate: "/sideeffects" },
    { name: "Updates", logo: Updates, navigate: "/updates" },
  ];

  

  return (
    <div className={style.HomePageContainer}>
      <div className={style.TitleCard}>
        <h1 className={style.heading}>Decode your medications now!</h1>
        <div className={style.Icon}>
          <img src={noticon} alt="notification icon"></img>
        </div>
      </div>
      <input
        type="textbox"
        className={style.inputbox}
        placeholder="Search Medications"
      ></input>
      <div className={style.NavigationsContainer}>
        {navigationArray.map((element) => {
          return (
            <div
              className={style.NavElements}
              onClick={() => handleNavigate(element.navigate)}
            >
              <img src={element.logo} alt="logo"></img>
              <p className={style.navigateName}>{element.name}</p>
            </div>
          );
        })}
      </div>
      <div className={style.AdCard}>
        <div className={style.Text}>
          <p className={style.Adheading}>Know your ingredients</p>
          <Button className={style.ScanButton}>Scan Now</Button>
        </div>
        <img className={style.DoctorImage} src={Doctor} alt="Doctor"></img>
      </div>
    </div>
  );
}
