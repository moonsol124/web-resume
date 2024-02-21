import Timeline from './timeline';
import Portfolio from './portfolio';
import { useState, useEffect } from "react";
import highschool from '../images/highschool.png';
import unam from '../images/unam.png';
import fontys from '../images/fontys.png';
import baby from '../images/baby.png';
import mid from '../images/mid.png';
import mil from '../images/mil.png';
import me from '../images/1.png';
import kid from '../images/kid.png';
import job from '../images/job.png';
import pizza from "../images/pizza_app.png";
import ecommerce from "../images/e_commerce_app.png";
import blog from "../images/blog_app.png";

export default function ContentList(props) {
    const [educations, setEducations] = useState([
        {name: "", date: "Feb, 2012", title: "High School", description: "I completed my high school education in South Korea back in 2012.", img: highschool},
        {name: "", date: "Feb, 2018", title: "Autonomous National University of Mexico", description: "I studied International Relations at UNAM for about one and half years. Unfortunately, I left it unfinished.", img: unam},
        {name: "", date: "Sept, 2021 - ongoing", title: "Fontys Hogeschool", description: "I'm studying ICT, more specifically, Software Engineering at Fontys.", img: fontys},
        ]);

    const [works, setWorks] = useState([
        {name: "", date: "1994 - 2000", title: 'Rice Tasting Specialist', description: 'My role during this period was eating all rice cakes in family gatherings. I led a team of 10 professionals skilled in preparing gourmet rice.', img: kid},
        {name: "", date: "2000 - 2012", title: 'Nap Specialist', description: 'I tested all different kinds of sleeping methods at "My mom yelling at me cause I got bad scores in exams and in the meantime her best friend\'s son got into the top uni". My role was doing a research of those strategies and delivering an effective marketing strategy to the company.', img: mid},
        {name: "", date: "2012 - 2016", title: 'Analog Nomad', description: 'Professional analog Nomad who\'s role is conquering hostels as cheap as possible.', img: me},
        {name: "", date: "2016 - 2018", title: 'Can\'t believe that I\'ve actually done this', description: 'A professional tax-waster but whatever. They forced me anyway!', img: mil},
        {name: "", date: "2018 - ongoing", title: 'Jobless', description: '"..."', img: job},    
    ]);
    
    const  [portfolio, setPortfolio] = useState([
        {id: 1, name: "Mario & Luigis", url: "https://moonsol124.github.io/School-restaurant-page/", css: "front", img: pizza},
        {id: 2, name: "E-Commerce App", url: "https://moonsol124.github.io/e-commerce-website/", css: "back", img: blog},
        {id: 3, name: "Blog", url: "https://moonsol124.github.io/blog-app/", css: "right", img: ecommerce},
        {id: 4, name: "", url: null, css: "left", img: null},
        {id: 5, name: "", url: null, css: "top", img: null},
        {id: 6, name: "", url: null, css: "bottom", img: null},
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
            <div className="li-inner-content">
                {(id === "education"?<Timeline list={educations}/>:null)}
                {(id === "work"?<Timeline list={works}/>:null)}
                {(id === "portfolio"?<Portfolio portfolio={portfolio} />:null)}
            </div>
            }
        </li>
    )
}