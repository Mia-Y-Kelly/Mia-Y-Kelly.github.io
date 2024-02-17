import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import cstyles from "@/styles/Contact.module.scss"

export default function Contact() {
    return(
        <>
           <div 
            className={`${styles.card} ${cstyles.cardH}`}
            id="contact"
            >
                <h2>Contact</h2>
                <div className={cstyles.contactContainer}>
                <div className={cstyles.contactInfo}>
                    <Image 
                    src="/envelope.svg"
                    width={30}
                    height={30}
                    />
                    <p><Link href="mailto:mykelly@mtu.edu">mykelly@mtu.edu</Link></p>
                </div>
                <div className={cstyles.contactInfo}>
                    <Image 
                    src="/linkedin.svg"
                    width={30}
                    height={30}
                    />
                    <p><Link href="https://www.linkedin.com/in/mia-kelly-mtu/">LinkedIn</Link></p>
                </div>
                </div>            
          </div>
        </>
    );
}