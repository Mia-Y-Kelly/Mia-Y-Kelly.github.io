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
                    I am a senior pursuing computer science and cybersecurity at Michigan Technological University. I current work as an undergraduate research assistant developing an educational cybersecurity platform. Prior to this, I interned at Fidelity Investments, and worked at my universities IT department. Getting involved in student organizations such as the Networking and Computing Student Association (NCSA) and IT Oxygen Enterprise, I've cultivated a wide variety of skills spanning full-stack development, machine learning, and cloud technologies. Beyond honing my technical expertise, this has given me the opportunity to mentor younger students towards their own success.
                </p>
            </div>
        </div>
        </>
    );
}