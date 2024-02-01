import React from "react";
import {getImageUrl} from "../../utils";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = ()=>{
    return <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill,id)=>{
                    return <div className={styles.skill} key={id}>
                        <div className={styles.skillImgContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                })
                }
            </div>
            <ul className={styles.history}>
                {
                    history.map((history,id)=>{
                        return <li className={styles.historyItem} key={id}>
                            <img src={getImageUrl(history.imageSrc)} alt={history.organisation} />
                            <div className={styles.historyitemDetails}>
                                <h3>{`${history.role}, ${history.organisation}`}</h3>
                                <p>{`${history.startDate} - ${history.endDate}`}</p>
                                <ul>
                                    {history.experiences.map((ex, id)=>{
                                        return <li key={id}>{ex}
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </section>
}