import { useState, useEffect } from "react";
import ContentList from './contentList';

export default function Content() {
    const [contentList, setContentList] = useState([
        {title: "Education", id:"education"},
        {title: "Work", id:"work"},
        {title: "Portfolio", id:"portfolio"},
        {title: "Skills", id:"skill"},
        {title: "Resume", id:"resume"}]
    );

    return (
        <div className="content">
            <ul className="content-ul">
                {contentList.map((element, index) => {
                    return (
                        <ContentList element={element} key={index}/>
                    )
                })}
            </ul>
        </div>
    )
}