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
                        <h4>Nov. 2022 - Present</h4>
                    </div>
                    <ul>
                        <li>Developing full-stack web application with interactive Linux terminal.</li>
                        <li>Integrating OAuth Google authentication.</li>
                        <li>Dockerizing application for minimal overhead.</li>
                    </ul>
                    <h4><b>Skills:</b> JavaScript, MySQL, Docker, Cpanel</h4>
                </div>
                <div className={estyles.position}>
                    <h3>Full Stack Intern</h3>
                    <div className={estyles.details}>
                        <h4>Fidelity Investments | Fidelity Brokerage Techology (FBT)</h4>
                        <h4>June 2023 - August 2023</h4>
                    </div>
                    <ul>
                        <li>Tested a SpringBoot API which monitored activity between a mainframe and cloud environment.</li>
                        <li>Performed Datadog analysis that reduced costs for log storage.</li>
                        <li>Renewed and retired container certificates using Jenkins and Kubernetes.</li>
                        <li>Consulted with subject matter experts to design a procedure for streamlining cloud application development.</li>
                    </ul>
                    <h4><b>Skills:</b> SpringBoot, Datadog, Jenkins, Kubernetes, Agile (Kanban)</h4>
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
                        <li>Provided on-site support for faculty with network, software, and hardware issues.</li>
                    </ul>
                    <h4><b>Skills:</b> Customer service, Windows, MacOS, RHEL</h4>
                </div>
            </div>
        </>
        
    );
}