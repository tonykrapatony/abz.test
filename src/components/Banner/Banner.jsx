import React from "react";
import styles from "./Banner.module.scss";
import Button from "../Button/Button";
import banner360 from '../../assets/img/banner360.png';
import banner768 from '../../assets/img/banner768.png';
import banner1024 from '../../assets/img/banner1024.png';
import banner1170 from '../../assets/img/banner1170.png';


export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.img_wrapper}>
        <picture>
            <source srcSet={banner360} media="(max-width: 360px)" />
            <source srcSet={banner768} media="(max-width: 768px)" />
            <source srcSet={banner1024} media="(max-width: 1024px)" />
            <source srcSet={banner1170} media="(max-width: 1170px)" />
            <img src={banner1170} alt="Banner" />
        </picture>
      </div>
      <div className={styles.banner_content}>
        <div className={styles.text_content}>
            <h1 className={styles.title}>Test assignment for front-end developer</h1>
            <p className={styles.description}>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
        </div>
        <Button>Sign up</Button>
      </div>
    </div>
  );
}
