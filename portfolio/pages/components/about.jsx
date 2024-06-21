import Link from "next/link";
import Image from "next/image";

import astyles from "@/styles/About.module.scss";
import styles from "@/styles/Home.module.scss";

export default function About(){
    return(
        <>
            <div
            className={astyles.about} 
            id="about"
            >

            <h2>Hi! I'm <b>Mia Kelly</b></h2>
            <div className={astyles.acontainer}>
                <div className={astyles.contactContainer}>
                    <Link href="mailto:miayn24@gmail.com">
                        <Image 
                            src="/envelope.svg"
                            alt="mail icon"
                            width={30}
                            height={30}
                        /> 
                    </Link>
                    <Link href="https://www.linkedin.com/in/mia-kelly-mtu/">
                        <Image 
                            src="/linkedin.svg"
                            alt="LinkedIn logo"
                            width={30}
                            height={30}
                        />
                    </Link>
                    <Link href="https://github.com/Mia-Y-Kelly">
                        <Image 
                            src="/github.svg"
                            alt="Github logo"
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>
                <div className={astyles.photoContainer}>
                    <Image
                        src="/Mia Kelly.jpg"
                        alt="Mia Kelly Photo"
                        className={astyles.photo}
                        width={200}
                        height={70}
                    />
                    <p>
                        <br/>
                        I am a graduate of Michigan Technological University with a <Link href={"https://www.mtu.edu/cs/undergraduate/"} style={{'text-decoration': 'underline'}} target="_blank">BS in Computer Science</Link> and a <Link href={"https://www.mtu.edu/computing/undergraduate/minors/cybersecurity/"} style={{'text-decoration': 'underline'}} target="_blank">minor in cybersecurity</Link>. I am actively seeking employment opportunities, and I am open to relocation.
                        <br/><br/>
                        I previously worked as a research assistant for Dr. Yu Cai building an educational cybersecurity platform. I developed an integrated bash terminal, API, and continuous deployment for the application. My other work experience includes an internship at Fidelity Investments where I worked on SpringBoot API and system administrative tasks, and working at my university's IT department.
                        <br/><br/>
                        During my time at Michigan Tech, I was active member of both the Networking and Computing Student Association (NCSA) and IT Oxygen Enterprise. My involvement in these organizations has contributed to the development of my skills across projects spanning full-stack development, machine learning, and cloud technologies. Outside of work and academic clubs, I enjoy swimming, reading, and collecting mechanical keyboards.
                        <br/><br/>                                        
                    </p>
                </div>                
            </div>
        </div>
        </>
    );
}