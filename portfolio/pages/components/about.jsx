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
                        I am a graduate of Michigan Technological University with a <Link href={"https://www.mtu.edu/cs/undergraduate/"} style={{'textDecoration': 'underline'}} target="_blank">BS in Computer Science</Link> and a <Link href={"https://www.mtu.edu/computing/undergraduate/minors/cybersecurity/"} style={{'textDecoration': 'underline'}} target="_blank">minor in cybersecurity</Link>. I previously worked an internship at Fidelity Investments. My other work experience includes a research position developing an educational cybersecurity platform and working at my university's IT department.
                        <br/><br/>
                        During my time at Michigan Tech, I was active member of both the Networking and Computing Student Association (NCSA) and IT Oxygen Enterprise. My involvement in these organizations has contributed to the development of my skillset with projects spanning full-stack development, machine learning, and cloud technologies. Outside of work and academic clubs, I enjoy swimming, reading, and collecting mechanical keyboards.
                        <br/><br/>                                        
                    </p>
                </div>                
            </div>
        </div>
        </>
    );
}