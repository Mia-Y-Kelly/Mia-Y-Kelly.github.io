import pstyles from '@/styles/Projects.module.scss';
import styles from "@/styles/Home.module.scss";
import { PT_Sans } from 'next/font/google';

export default function Projects() {
    return(
        <>
        <div
            className={pstyles.projects}
            id="projects"
          >
            <h2>
              Projects
            </h2>
              <div className={pstyles.projectsContainer}>
              <div className={pstyles.project}>
                <h3>HuskyTerm</h3>
                <h4>Nov. 2023 - Present</h4>
                <p>Developing a JavaScript-based terminal that allows ssh connections that can be embedded in applications</p>
                <p><b>Skills: </b> Xterm.js, Docker</p>
              </div>
              <div className={pstyles.project}>
                <h3>Malicious Packet Checker</h3>
                <h4>Oct. 2023</h4>
                <p>Created a malicious IP checker using a random bloom filter.</p>
                <p><b>Skills: </b>C++, Random Bloom Filter(RBF), Hashing</p>
              </div>
              <div className={pstyles.project}>
                <h3>StudyUp</h3>
                <h4>Aug. 2022 - Dec. 2022</h4>
                <p>Tool intended to emulate many of the paywalled functions of the popular study tool Quizlet</p>
                <p><b>Skills: </b> ReactJS, SpringBoot, PostgreSQL, AWS EC2, Apache Tomcat, Agile (Scrum)</p>
              </div>
              <div className={pstyles.project}>
                <h3>Green Campus Enterprise Food Calculator</h3>
                <h4>Jan. 2022 - March 2022</h4>
                <p>Application to calculate food waste when given a raw data sheet. Used this project to learn MatLab.</p>
                <p><b>Skills: </b> MatLab, MatLab App Design</p>
              </div>
              <div className={pstyles.project}>
                <h3>NCSA Lab Hours Tracker</h3>
                <h4>Aug. 2021 - Present</h4>
                <p>Lab hours tracker for the Networking and Computing Student Association (NCSA). Originally built using the MERN stack. Migrating project to NextJS and PostgreSQL.</p>
                <p><b>Skills: </b> MongoDB, Expressjs, React, Node, PostgreSQL</p>
              </div>
              <div className={pstyles.project}>
                <h3>AI Cell Membrane Detection</h3>
                <h4>Aug. 2021 - Dec. 2022</h4>
                <p>Data science project intended to predict the movement of cells.</p>
                <p><b>Skills: </b> Keras, MatPlotLib, Pandas, NumPy, Bash, Anaconda, Agile (Scrum)</p>
              </div>
          </div>  
            </div>
        </>
        
    );
}