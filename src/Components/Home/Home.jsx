import React from "react";
import styles from "./Home.module.scss";
import pinkdimond from '../../images/pink-home-dimond.png';
import orangedimond from '../../images/Orangedimond.png';
import Laptop from '../../images/Laptop.jpg';
import useDencrypt  from "use-dencrypt-effect";

const value = ["Software /", "Developer"];

const Home = () => {
  const { result, dencrypt } = useDencrypt();

  // software
  React.useEffect(() => {
    let i = 0;
    const action = setInterval(() => {
      dencrypt(value[i]);
      i = i === value.length - 1 ? 0 : i + 1;
      
    }, 2000);
 
    return () => clearInterval(action);
  }, []);
   
  return (
    <>
      <div className={styles.heading}>
        <img className={styles.orangedimond} src={orangedimond} alt='orange'></img>
        <img className={styles.pink} src={pinkdimond} alt='pink'></img>
        
        <img className={styles.laptop} src={Laptop} alt='laptop'></img>

        <div className={styles.title}>
          {result}
        </div>
      </div>
    </>
  );
};

export default Home;
