import React from "react";
import styles from "./Footer.module.css";
import {getImageUrl} from "../../utils";

export const Footer = ()=>{
    return <footer id="contact" className={styles.container}>
        <div className={styles.titles}>
            <h2>Contact</h2>
            <p>Feel free to contact me!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("footer/gmail.png")} alt="Gmail" />
                <a href="mailto:lucas.mariano.g@gmail.com">lucas.mariano.g@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("footer/linked.png")} alt="Linked" />
                <a href="https://www.linkedin.com/in/lucasgon1410/">https://www.linkedin.com/in/lucasgon1410/</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("footer/git.png")} alt="Git" />
                <a href="https://github.com/lucasG505/MuscleLab">https://github.com/lucasG505/MuscleLab</a>
            </li>
        </ul>
    </footer>
}