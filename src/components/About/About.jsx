import React from "react";
import styles from "./About.module.css"
import { getImageUrl } from "../../utils"

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <ul className={styles.elements}>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutText}>
                        <h3>Frontend</h3>
                        <p>I´ve experience in developing web sites by my own using React-Redux, HTML5,CSS and SASS.</p>
                        <img src={
                            getImageUrl("intro/cursor.png")
                        } alt="front" />
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutText}>
                        <h3>Backend</h3>
                        <p>I´ve worked on various projects among other students where I worked on managing data bases in PostgreSQL, created routes and controllers for the website and implemented paymentent methods. I work with Express and Node.js. Currently learning PHP and Laravel. </p>
                        <img src={
                            getImageUrl("intro/server.png")
                        } alt="back" />
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutText}>
                        <h3>Design</h3>
                        <p>I´ve worked on Figma designing my own pages and creating the design of others. I´ve a good knowledge on user experience and looking to train myself more on user interface</p>
                        <img src={
                            getImageUrl("intro/Ui.png")
                        } alt="design" />
                    </div>
                </li>
            </ul>
            <img className={styles.heroImg} src={getImageUrl("intro/heroSentado.png")} alt="hero sentado" />
        </div>
    </section>;

}