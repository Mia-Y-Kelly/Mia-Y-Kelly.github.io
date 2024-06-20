import pstyles from '@/styles/Projects.module.scss';
import styles from "@/styles/Home.module.scss";
import { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';

export default function Projects() {
  const [flipped, setFlipped] = useState([
                                  false,
                                  false,
                                  false,
                                  false,
                                  false,
                                  false
                                ]);                                
           
  function handleClick(arr1, target) {
    let tmp = [
      false,
      false,
      false,
      false,
      false,
      false
    ];

    for(let idx=0; idx < 6; idx++) {
      if(idx == target) {
        tmp[idx] = !(arr1[idx]);
      } else {
        tmp[idx] = arr1[idx];
      }
    }

    setFlipped(tmp);
  }

  // Run on initial render
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
              <ReactCardFlip
                isFlipped={flipped[0]}
                flipDirection='horizontal'
                index={1}
              >
                <div 
                  className={pstyles.project}
                  onClick={()=>{
                    handleClick(flipped, 0);
                  }}
                >
                    <h3>HuskyTerm</h3>
                    <h4>Nov. 2023 - Present</h4>
                  </div>
                <div 
                  className={pstyles.project}
                  onClick={()=>{
                    handleClick(flipped, 0);
                  }}
                >
                  <p>Developing a JavaScript-based terminal that allows ssh connections that can be embedded in applications</p>
                  <p><b>Skills: </b> Xterm.js, Docker</p>
                </div>
              </ReactCardFlip>
              <ReactCardFlip
                isFlipped={flipped[1]}
                flipDirection='horizontal'
              >
                  <div
                    className={pstyles.project} 
                    onClick={()=>{
                      handleClick(flipped, 1);
                    }}
                  >
                    <h3>Malicious Packet Checker</h3>
                    <h4>Oct. 2023</h4>
                  </div>
                  <div
                    className={pstyles.project} 
                    onClick={()=>{
                      handleClick(flipped, 1);
                    }}
                  >
                    <p>Created a malicious IP checker using a random bloom filter.</p>
                    <p><b>Skills: </b>C++, Random Bloom Filter(RBF), Hashing</p>
                  </div>
              </ReactCardFlip>
              <ReactCardFlip
                isFlipped={flipped[2]}
                flipDirection='horizontal'
              >
                <div 
                  className={pstyles.project}
                  onClick={()=>{
                    handleClick(flipped, 2);
                  }}
                >
                  <h3>StudyUp</h3>
                  <h4>Aug. 2022 - Dec. 2022</h4>
                </div>
                <div 
                  className={pstyles.project}
                  onClick={()=>{
                    handleClick(flipped, 2);
                  }}
                >
                  <p>Tool intended to emulate the paywalled functions of the popular study tool Quizlet</p>
                  <p><b>Skills: </b> ReactJS, SpringBoot, PostgreSQL, AWS EC2, Apache Tomcat, Agile (Scrum)</p>
                </div>
              </ReactCardFlip>
              <ReactCardFlip
                isFlipped={flipped[3]}
                flipDirection='horizontal'
              >
                <div 
                  className={pstyles.project}
                  onClick={()=>{
                    handleClick(flipped, 3);
                  }}
                >
                  <h3>Green Campus Enterprise Food Calculator</h3>
                  <h4>Jan. 2022 - March 2022</h4>
                </div>
                <div 
                  className={pstyles.project}
                  onClick={()=>{
                    handleClick(flipped, 3);
                  }}
                >
                  <p>Application to calculate food waste when given a raw data sheet. Used this project to learn MatLab.</p>
                  <p><b>Skills: </b> MatLab, MatLab App Design</p>
                </div>
              </ReactCardFlip>
              <ReactCardFlip
                isFlipped={flipped[4]}
                flipDirection='horizontal'
              >
                <div 
                  className={pstyles.project}
                  onClick={()=>{
                    handleClick(flipped, 4);
                  }}
                >
                  <h3>NCSA Lab Hours Tracker</h3>
                  <h4>Aug. 2021 - Present</h4>
                </div>
                <div 
                  className={pstyles.project}
                  onClick={()=>{
                    handleClick(flipped, 4);
                  }}
                >
                  <p>Full stack application originally built using the MERN stack. Migrating project to NextJS and PostgreSQL.</p>
                  <p><b>Skills: </b> MongoDB, Expressjs, React, Node, PostgreSQL</p>
                </div>
              </ReactCardFlip>
              <ReactCardFlip
                isFlipped={flipped[5]}
                flipDirection='horizontal'
              >
              <div 
                className={pstyles.project}
                onClick={()=>{
                  handleClick(flipped, 5);
                }}
              >
                <h3>AI Cell Membrane Detection</h3>
                <h4>Aug. 2021 - Dec. 2022</h4>
                </div>
              <div 
                className={pstyles.project}
                onClick={()=>{
                  handleClick(flipped, 5);
                }}
              >
                <p>Data science project intended to predict the movement of cells.</p>
                <p><b>Skills: </b> Keras, MatPlotLib, Pandas, NumPy, Bash, Anaconda, Agile (Scrum)</p>
              </div>
              </ReactCardFlip>
        </div>  
          </div>
      </>
      
  );
}