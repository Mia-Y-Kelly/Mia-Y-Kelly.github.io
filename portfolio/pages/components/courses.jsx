import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/styles/Courses.module.scss";

export default function Courses() {
    const paths = ["/expand.svg", "/chevron.svg"];

    function toggle(img) {
        const category = img.currentTarget;
        const icons = category.getElementsByTagName("img");
        const div = category.getElementsByClassName(styles.courses);
        const header = category.getElementsByClassName(styles.categoryHeader);
        icons[0].classList.toggle(styles.hideMe);
        icons[1].classList.toggle(styles.hideMe);
        div[0].classList.toggle(styles.hideMe);
        header[0].classList.toggle(styles.preClick);

        console.log(header[0]);
    }

    return(
        <>
            <div
                style={{'minHeight': '85vh'}}
            >
                <h2 id="courses">Courses</h2>
                <div className={styles.coursesContainer} >
                    <div className={styles.category} onClick={toggle}>
                        <div className={`${styles.categoryHeader} ${styles.preClick}`} >
                            <h3>Computer Science Courses</h3>
                            <Image
                                priority={true}
                                src={paths[0]}
                                width={20}
                                height={20}
                                
                                alt="Expand me"
                            />
                            <Image
                                priority={true}
                                src={paths[1]}
                                width={20}
                                height={20}
                                className={styles.hideMe}
                                alt="Expand me"
                            />
                        </div>
                        
                        <div className={`${styles.courses} ${styles.hideMe}`}>
                            <ul>
                                <li>Data Structures</li>
                                <li>Algorithms</li>
                                <li>Concurrent Computing</li>
                                <li>Systems Programming</li>
                                <li>Artificial Intelligence</li>
                                <li>Formal Models of Computation</li>
                                <li>Programming Languages</li>
                                <li>Programming at a Hardware/Software Interface</li>
                                <li>Database Systems</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.category} onClick={toggle}>
                        <div className={`${styles.categoryHeader} ${styles.preClick}`}>
                            <h3>Cybersecurity Courses</h3>
                            <Image
                                priority={true}
                                src={paths[0]}
                                width={20}
                                height={20}
                                
                                alt="Expand me"
                            />
                            <Image
                                priority={true}
                                src={paths[1]}
                                width={20}
                                height={20}
                                className={styles.hideMe}
                                alt="Expand me"
                            />
                        </div>
                        
                        <div className={`${styles.courses} ${styles.hideMe}`}>
                            <ul>
                                <li>Security Penetration Testing and Audit</li>
                                <li>Computer Security</li>
                                <li>Network Administration I, Network Administration II</li>
                                <li>Scripting Administration and Automation</li>
                                <li>Cybersecurity I, Cybersecurity II</li>
                                <li>Linus Fundementals</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.category} onClick={toggle}>
                        <div className={`${styles.categoryHeader} ${styles.preClick}`}>
                            <h3>Math and Science Courses</h3>
                            <Image
                                priority={true}
                                src={paths[0]}
                                width={20}
                                height={20}
                                
                                alt="Expand me"
                            />
                            <Image
                                priority={true}
                                src={paths[1]}
                                width={20}
                                height={20}
                                className={styles.hideMe}
                                alt="Expand me"
                            />
                        </div>
                        
                        <div className={`${styles.courses} ${styles.hideMe}`}>
                            <ul>
                                <li>Calculus I, Calculus II</li>
                                <li>Linear Algebra</li>
                                <li>Statistics</li>
                                <li>College Geometry</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.category} onClick={toggle}>
                        <div className={`${styles.categoryHeader} ${styles.preClick}`}>
                            <h3>Humanities Courses</h3>
                            <Image
                                priority={true}
                                src={paths[0]}
                                width={20}
                                height={20}
                                
                                alt="Expand me"
                            />
                            <Image
                                priority={true}
                                src={paths[1]}
                                width={20}
                                height={20}
                                className={styles.hideMe}
                                alt="Expand me"
                            />
                        </div>
                        
                        <div className={`${styles.courses} ${styles.hideMe}`}>
                            <ul>
                                <li>Ethical and Social Aspects of Computing</li>
                                <li>Science, Technology, and Society</li>
                                <li>Composition</li>
                                <li>Technical and Professional Communication</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}