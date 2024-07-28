import styles from "@/styles/Home.module.scss";
import estyles from "@/styles/Experience.module.scss"

export default function Experience() {
    return(
        <>
            <div
                className={estyles.experience}
                id="experience"
            >
                <h2>
                Work Experience
                </h2>
                <div className={estyles.position}>
                    <h3>Undergraduate Research Assistant</h3>
                    <div className={estyles.details}>
                        <h4>Michigan Technological University | Dr. Yu Cai</h4>
                        <h4>Oct. 2023 - June 2024</h4>
                    </div>
                    <ul>
                        <li>Led a group of six students in the development of an educational cybersecurity platform</li>
                        <li>Created a web component that embedded an emulated terminal into the web browser using Xterm.js.</li>
                        <li>Integrated OAuth Google authentication.</li>
                        <li>Designed and implemented RESTful API using NodeJS and Express.</li>
                        <li>Dockerized application for minimized overhead and platform agnostic development.</li>
                        <li>Automated continuous production deployments using cron jobs on cPanel.</li>
                    </ul>
                    <h4><b>Skills:</b> Express, Node, xterm, MySQL, Docker, Google OAuth, cPanel, crontab, RESTful API</h4>
                </div>
                <div className={estyles.position}>
                    <h3>Full Stack Intern</h3>
                    <div className={estyles.details}>
                        <h4>Fidelity Investments | Fidelity Brokerage Techology (FBT)</h4>
                        <h4>June 2023 - August 2023</h4>
                    </div>
                    <ul>
                        <li>Tested a SpringBoot API which monitored activity between a mainframe and cloud environment.</li>
                        <li>Performed Datadog analysis that reduced costs by over $1,000 per month.</li>
                        <li>Renewed and retired container certificates using Jenkins and Kubernetes.</li>
                        <li>Consulted with subject matter experts to design a procedure for streamlining cloud application development.</li>
                    </ul>
                    <h4><b>Skills:</b> Java SpringBoot, Datadog, Jenkins, Kubernetes, Agile (Kanban)</h4>
                </div>
                <div className={estyles.position}>
                    <h3>IT Technician</h3>
                    <div className={estyles.details}>
                        <h4>Michigan Technological University</h4>
                        <h4>Nov. 2020 - April 2022</h4>
                    </div>
                    <ul>
                        <li>Replaced hardware on Dell, Lenovo, Mac, etc.</li>
                        <li>Performed troubleshooting for software issues on Windows, Mac, and RHEL operating systems.</li>
                        <li>Tracked client tickets using ServiceDesk and Confluence</li>
                    </ul>
                    <h4><b>Skills:</b> Customer service, ServiceDesk, Confluence, Windows, MacOS, RedHat Enterprise Linux</h4>
                </div>
            </div>
        </>
        
    );
}