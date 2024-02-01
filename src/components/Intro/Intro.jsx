import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Intro.module.css";

export const Intro=()=>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I´m Lucas
            </h1>
            <p className={styles.descrip}>I´m a fullStack developer starting his career using React, Express and Node.js. I´m in constant capacitation and looking to improve my skills, if you´re interested in working together reach out to me!</p>
            <a className={styles.contactBtn} href="mailto:lucas.mariano.g@gmail.com">Contact me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("intro/me.png")} alt="hero" />
        <div className={styles.topBlur}/>
        <div className={styles.botBlur}/>
    </section>;
}