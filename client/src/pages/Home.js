import React from "react";
import styles from '../styles/Home.module.css'
import ScanComponent  from "../components/UIcomponents/ScanComponent"; 

const Home = () => {
  return <>
    <div classname={styles.animationContainer}>
      Animation here...
    </div>
    <div>
      <ScanComponent />
    </div>
  </>;
};

export default Home;
