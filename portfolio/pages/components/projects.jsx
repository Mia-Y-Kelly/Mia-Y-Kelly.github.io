import pstyles from '@/styles/Projects.module.scss';
import styles from "@/styles/Home.module.scss";

export default function Projects() {
    return(
        <>
        <div
            className={styles.card}
            id="projects"
          >
            <h2>
              Projects
            </h2>
            
            <div className={pstyles.projectsContainer}>
              <div className={pstyles.project}>
                <h3>StudyUp</h3>
                <h4>Aug. 2022 - Dec. 2022</h4>
                <p>Tool intended to emulate many of the paywalled functions of the popular study tool Quizlet</p>
                <h4>Skills</h4>
                <ul>
                  <li>ReactJS</li>
                  <li>SpringBoot</li>
                  <li>PostgreSQL</li>
                  <li>AWS EC2</li>
                  <li>Apache Tomcat</li>
                  <li>Agile</li>
                </ul>
              </div>
              <div className={pstyles.project}>
                <h3>Green Campus Enterprise Food Calculator</h3>
                <h4>Jan. 2022 - March 2022</h4>
                <p>Application to calculate food waste when given a raw data sheet.</p>
                <h4>Skills</h4>
                <ul>
                  <li>MatLab</li>
                  <li>MatLab App Designer</li>
                </ul>
              </div>
              <div className={pstyles.project}>
                <h3>AI BME</h3>
                <h4>Aug. 2021 - Dec. 2022</h4>
                <p>Data science project intended to predict the movement of cells.</p>
                <h4>Skills</h4>
                <ul>
                  <li>Keras</li>
                  <li>MatPlotLib</li>
                  <li>Pandas</li>
                  <li>NumPy</li>
                  <li>Bash</li>
                  <li>Anaconda</li>
                  <li>Agile</li>
                </ul>
              </div>
              <div className={pstyles.project}>
                <h3>NCSA Lab Hours Tracker</h3>
                <h4>Aug. 2021 - Present</h4>
                <p>Lab hours tracker for the Networking and Computing Student Association (NCSA). Originally built using the MERN stack. Migrating project to NextJS and PostgreSQL.</p>
                <h4>Skills</h4>
                <ul>
                  <li>MongoDB</li>
                  <li>ExpressJS</li>
                  <li>ReactJS</li>
                  <li>Nextjs</li>
                  <li>Node</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
          </div>  
            </div>
        </>
        
    );
}