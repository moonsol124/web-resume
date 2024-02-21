import { useState, useEffect } from "react"
export default function Timeline(props) {
    return (
        <div className="timeline-container">
            <div className="timeline-arrow"></div>
            <ul className="timeline-outer-container">
                {props.list.map((e, index) => {
                    return (
                        ((index % 2 === 0))
                        ?
                        <li key={index} className="timeline-left timeline-li">
                            <div className="timeline-img-container">
                                <img src={e.img} alt={e.name} className="timeline-img"></img>
                            </div>
                            <div className="timeline-title">
                                {e.title}
                            </div>
                            <div className="timeline-content">
                                <p>{e.description}</p>
                            </div>
                            <div className="timeline-date timeline-date-left">{e.date}</div>
                        </li>
                        :
                        <li key={index} className="timeline-right timeline-li">
                            <div className="timeline-date timeline-date-right">{e.date}</div>
                            <div className="timeline-img-container">
                                <img src={e.img} alt={e.name} className="timeline-img"></img>
                            </div>
                            <div className="timeline-title">
                                {e.title}
                            </div>
                            <div className="timeline-content">
                                <p>{e.description}</p>
                            </div>
                        </li>
        
                    )
                })}
{/* 
                <li className="timeline-left timeline-li">
                    <p className="timeline-content">Fontyes hogeschool</p>
                    <div className="timeline-date">September 28, 2022</div>
                </li>
                <li className="timeline-right timeline-li">
                <p className="timeline-content">Fontyes hogeschool</p>
                </li>
                <li className="timeline-left timeline-li">
                <p className="timeline-content">Fontyes hogeschool</p>
                </li> */}

            </ul>
        </div>
    )
}