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
                    <Link href="mailto:mykelly@mtu.edu">
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
                <p>
                    <br/>
                    I am a senior studying Computer Science and Cybersecurity at Michigan Technological University. I currently work as a research assistant building an educational cybersecurity platform. My professional experience includes an internship at Fidelity Investments, where I worked on a SpringBoot API and system's administration tasks. I also worked my university's IT department performing hardware and software troubleshooting. 
                    <br/><br/>
                    I have been an active member of the Networking and Computing Student Association (NCSA) and IT Oxygen Enterprise. This has contributed to the development of my skills across projects spanning full-stack development, machine learning, and cloud technologies. I currently serve as the Development Team Lead for NCSA and hold the position of Outreach Chair for IT Oxygen Enterprise.
                    {/* <br/><br/>
                    Outside of work and academic clubs and work, I was very active the women's ultimate frisbee club at my university until I tore my ACL skiing. 4 knee surgeries later, I enjoy less strenous activities such as swimming, reading, and collecting mechanical keyboards. */}
                    <br/><br/>
                    I am actively seeking employment opportunities, and I am open to relocation.                  
                </p>
            </div>
        </div>
        </>
    );
}