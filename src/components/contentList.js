import Timeline from './timeline';
import Portfolio from './portfolio';
import Skill from './skill';
import { useState, useEffect } from "react";
import highschool from '../images/highschool.png';
import unam from '../images/unam.png';
import fontys from '../images/fontys.png';
import mid from '../images/mid.png';
import mil from '../images/mil.png';
import me from '../images/1.png';
import kid from '../images/kid.png';
import job from '../images/job.png';
import pizza from "../images/pizza_app.png";
import ecommerce from "../images/e_commerce_app.png";
import blog from "../images/blog_app.png";
import js from "../images/js.png";
import py from "../images/py.png";
import test from '../images/c#.png';
import css from '../images/css.png';
import devop from '../images/dev.png';
import elm from '../images/elm.png';
import node from '../images/node.png';
import docker from '../images/docker.png';
import react from '../images/react.png';
import asp from '../images/asp.png';
import myCShop from '../images/myCShop.png';
import waffel from '../images/waffel.png'
    // js, python, c#, react, css, devop, asp.net, elm, node, docker

export default function ContentList(props) {
    const generatedList = (int) => {
        let tmp = [];
        for (let i = 0; i < int; i++) {
            tmp.push(" ");
        }
        return tmp;
    }
    
    const [educations, setEducations] = useState([
        {name: "", date: "Feb, 2012", title: "High School", description: "I completed my high school education in South Korea back in 2012.", img: highschool},
        {name: "", date: "Feb, 2018", title: "Autonomous National University of Mexico", description: "I studied International Relations at UNAM for about one and half years. Unfortunately, I left it unfinished.", img: unam},
        {name: "", date: "Sept, 2021 - ongoing", title: "Fontys Hogeschool", description: "I'm studying ICT, more specifically, Software Engineering at Fontys.", img: fontys},
        ]);

    const [works, setWorks] = useState([
        {name: "", date: "1994 - 2000", title: 'Rice Tasting Specialist', description: 'My role during this period was eating all rice cakes in family gatherings. I led a team of 10 professionals skilled in preparing rice specialities.', img: kid},
        {name: "", date: "2000 - 2012", title: 'Nap Specialist', description: 'I tested all different kinds of sleeping methods at "My mom yelling at me cause I got bad scores in exams and in the meantime her best friend\'s son got into the top uni". My role was doing a research of those strategies and delivering an effective marketing strategy to the company.', img: mid},
        {name: "", date: "2012 - 2016", title: 'Analog Nomad', description: 'Professional analog Nomad who\'s role is conquering hostels as cheap as possible.', img: me},
        {name: "", date: "2016 - 2018", title: 'Can\'t believe that I\'ve actually done this', description: 'A professional tax-waster but whatever. They forced me anyway!', img: mil},
        {name: "", date: "2020 - 2023", title: 'Champion Stroopwafel Gourmet', description: 'I was a champion stroopwafel gourmet who has won multiple competitions, But all I know is that AH Stroopwafels are the best. (disclaimer: Not sponsored!)', img: waffel},
        {name: "", date: "2023 - ongoing", title: 'Jobless', description: 'My linkedin feels sooo empty.....', img: job},    
    ]);
    
    const  [portfolio, setPortfolio] = useState([
        {id: 1, name: "Mario & Luigis", url: "https://moonsol124.github.io/School-restaurant-page/", css: "front", img: pizza},
        {id: 2, name: "E-Commerce App", url: "https://moonsol124.github.io/blog-app/", css: "back", img: blog},
        {id: 3, name: "Blog", url: "https://moonsol124.github.io/e-commerce-website/", css: "right", img: ecommerce},
        {id: 4, name: "", url: null, css: "left", img: null},
        {id: 5, name: "", url: null, css: "top", img: null},
        {id: 6, name: "", url: null, css: "bottom", img: null},
    ])

    const [skills, setSkills] = useState([
        {id: 1, name: "js", img: js, point: generatedList(7)},
        {id: 2, name: "py", img: py, point: generatedList(4)},
        {id: 5, name: "elm", img: elm, point: generatedList(2)},
        {id: 5, name: "c#", img: myCShop, point: generatedList(4)},
        {id: 6, name: "docker", img: docker, point: generatedList(5)},
        {id: 8, name: "react", img: react, point: generatedList(7)},
        {id: 7, name: "devop", img: devop, point: generatedList(5)},
        {id: 9, name: "node", img: node, point: generatedList(4)},
        {id: 4, name: "css", img: css, point: generatedList(6)},
        {id: 10, name: "asp", img: asp, point: generatedList(3)},
    ])

    const [id, setId] = useState("");
    const [isToggled, setIsToggled] = useState(true);
    const toggle = () => {
        (isToggled)?setIsToggled(false):setIsToggled(true);
    }

    useEffect(() => {
        setId(props.element.id);
    }, [])

    return (
        <li className="content-li" key={props.index}>
            <p className="title" onClick={toggle}><span className="title-underline">{props.element.title}</span></p>
            {(isToggled)?null:
            <div className="il-inner-content">
                {(id === "education"?<Timeline list={educations}/>:null)}
                {(id === "work"?<Timeline list={works}/>:null)}
                {(id === "portfolio"?<Portfolio portfolio={portfolio} />:null)}
                {(id === "skill"?<Skill skills={skills}/>:null)}
            </div>
            }
        </li>
    )
}