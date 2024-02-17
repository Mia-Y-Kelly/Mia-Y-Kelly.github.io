import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";
import nav from "@/styles/Nav.module.scss"

export default function NavBar() {
    return(
        <>
            <div className={nav.nav}>
                <h1 className={nav.navTitle}>Mia Kelly</h1>
                <ul className={nav.navLinks}>
                    <li>
                        <Link href="#about">
                            <p>About Me</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#experience">
                            <p>Work Experience</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#projects">
                            <p>Projects</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact">
                            <p>Contact</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}