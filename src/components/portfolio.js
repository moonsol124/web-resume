import {useState, useEffect} from 'react';

export default function Portfolio(props) {
    const [indicator, setIndicator] = useState(1);
    const [stopCube, setStopCube] = useState(false);
    const [curRotationClass, setCurRotationClass] = useState("");

    const onClick = (i) => {
        setIndicator(i.id);
        setStopCube(true);
        console.log(i.css);
        setCurRotationClass(`to${i.css}`);
    }

    return (
        <div className="portfolio-container">
            <div className="scene">
            <div className={`${stopCube?`cube-stop ${curRotationClass}` : 'cube'}`}>                    
                {props.portfolio.map((element, index) => {
                        return (
                            <div key={index} className={`side ${element.css}`}>
                                <a href={element.url} target="_blank" rel="noopener noreferrer">
                                    <img className="side-img" src={element.img} alt={element.name} />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="portfolio-indicators">
                {props.portfolio.map((element, index) => {
                        return (
                            <>
                                {(element.url !== null)
                                ?
                                <div className="indicator-container">
                                    <div className='test'>
                                        <div className='button-text'>
                                            {(indicator === element.id)?
                                            <div className='indicator'></div>
                                            :null}
                                            <div>
                                            </div>
                                        </div>
                                        <div className='button-container'>
                                            <button className='button' onClick={()=>{onClick(element)}}>{element.name}</button>
                                        </div>
                                    </div>
                                </div>
                                :null}
                            </>
                        )
                    })}
            </div>
        </div>
    )
}