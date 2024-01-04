import React from "react";
import styles from "./Banner.module.scss";
import Button from "../Button/Button";
import banner360 from '../../assets/img/banner360.webp';
import banner768 from '../../assets/img/banner768.webp';
import banner1024 from '../../assets/img/banner1024.webp';
import banner1170 from '../../assets/img/banner1170.webp';


export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.img_wrapper}>
        <picture>
            <source srcSet={banner360} media="(max-width: 360px)" width='360' height='500'/>
            <source srcSet={banner768} media="(max-width: 768px)" width='768' height='500'/>
            <source srcSet={banner1024} media="(max-width: 1024px)" width='1024' height='650'/>
            <source srcSet={banner1170} media="(max-width: 1170px)" width='1170' height='650'/>
            <img src={banner1170} alt="Banner" width='1170' height='650'/>
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
