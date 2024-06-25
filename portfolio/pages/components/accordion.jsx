import { useEffect, useState } from "react";
import styles from "@/styles/Courses.module.scss";

export default function Accordian(props) {
    const [courses, setCourses] = useState([]);
    
    function extractProps(p) {
        let myProps = {};
        console.log(p.children);

        (p.children).forEach((category) => {
            console.log('Category: ', category.props);
        });

    }
    function updateCourses(p) {
        // (p.children).forEach((category) => {
        //     console.log('Category: ', category);
        // });
    }

    function renderProps(p) {
        return(
            <h1>Testing</h1>
        );
    }
    useEffect(() => {
        extractProps(props);
        renderProps(props);
    }, [props]);

    return(
        <>
        </>
    );
}