import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
             WE RESPECT OUR CUSTOMERS AND WE LOVE TO SERVE THEM THE BEST PIZZA OF THIS TOWN 
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
              MP NAGAR, ZONE-2
            <br /> BHOPAL, 462003
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
             LAKE VIEW, BOARD CLUB
            <br /> BHOPAL, 462001
            <br /> (602) 867-1011
          </p>
          
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY TO FRIDAY
            <br /> 9:00 AM – 10:00 PM
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 11:00 AM – 7:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;