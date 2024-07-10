import react from 'react';
import {useState, useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import nav from "@/styles/Nav.module.scss";



export default function NavBar() {
    const [mode, setMode] = useState(nav.light);
    const [path, setPath] = useState("/light.svg");

    function setLight() {
        document.documentElement.setAttribute('data-theme', 'light');
        setPath("/light.svg");
        setMode(nav.light);
        // console.log(`Mode: ${mode}`);
    }

    function setDark() {
        document.documentElement.setAttribute('data-theme', 'dark');
        setPath("/dark.svg");
        setMode(nav.dark);
        // console.log(`Mode: ${mode}`);
    }

    function toggle() {
        if(mode === nav.light) {
            setDark();
        } else {
            setLight();
        }
    }

    // Use this to ensure it matches the default system setting
    useEffect(() => {
        const query = window.matchMedia("(prefers-color-scheme: dark)");
        console.log(query.matches);
        if(query.matches) {
            setDark();
        } else {
            setLight();
        }
    }, []);

    return(
        <>
            <div className={nav.nav}>
                <ul className={nav.navLinks}>
                    <li>
                        <Link href="#about" className="link">
                            <p>About</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#experience" className="link">
                            <p>Work Experience</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#projects"
                        className="link">
                            <p>Projects</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#courses" className="link">
                            <p>Courses</p>
                        </Link>
                    </li>
                    <li onClick={toggle}>
                            <Image
                                id = "nav-img"
                                className={mode}
                                priority={true}
                                src={path}
                                alt="light/dark Mode icon"
                                width={20}
                                height={20}
                            />
                    </li>
                </ul>
            </div>
        </>
    );
}