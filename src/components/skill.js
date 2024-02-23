export default function Skill(props) {
    return (
        <div className="skill-container">
             <ul className="skill-ul">
                    {props.skills.map((element, index) => {
                        return (
                            <>
                                <li className="skill-li">
                                    <div className="skill-img-container">
                                        <img className="skill-img" src={element.img} alt={element.name}/>
                                    </div>
                                    <div className="bar">
                                        <div className="bar-inner">
                                            {element.point.map((block, blockIndex) => {
                                                return (
                                                    <>
                                                        {(blockIndex === element.point.length-1)
                                                        ?
                                                        <div className='bar-element-color bar-right'></div>
                                                        :
                                                        <div className='bar-element-color'></div>}
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </li>
                            </>
                        )
                    })}
             </ul>
        </div>
    )
}