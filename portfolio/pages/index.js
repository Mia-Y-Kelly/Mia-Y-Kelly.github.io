import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import pstyles from "@/styles/Projects.module.scss"

import NavBar from "./components/navbar";
import Projects from './components/projects';
import Experience from "./components/experience";
import About from "./components/about";
import Courses from "./components/courses";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mia Kelly</title>
        <meta name="description" content="Mia Kelly Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/terminal-flash.ico" />
      </Head>
      <NavBar/>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.grid}>
          <About />
          <Experience />
          <Projects />
          <Courses /> 
        </div>
        {/* <footer>  
          Built by Mia Kelly using Next.js
        </footer> */}
      </main>
      
    </>
  );
}
