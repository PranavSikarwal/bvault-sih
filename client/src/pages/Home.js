import React from "react";
import styles from "../styles/Home.module.css";
import ScanComponent from "../components/UIcomponents/ScanComponent";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.video}>
        video here...
      </div>
      <div className={styles.scanContainer}>
        <ScanComponent classname={styles.scanComponent} />
      </div>
    </div>
  );
};

export default Home;
