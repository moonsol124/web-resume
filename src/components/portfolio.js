import {useState, useEffect} from 'react';

export default function Portfolio(props) {
    const [indicator, setIndicator] = useState(1);

    const onClick = (i) => {
        setIndicator(i);
    }

    return (
        <div className="portfolio-container">
            <div className="scene">
                <div className="cube">
                    {props.portfolio.map((element, index) => {
                        return (
                            <div key={index} className={`side ${element.css}`}>
                                <img className="side-img" src={element.img} alt={element.name}/>
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
                                    <div className='button-text'>
                                        {(indicator === element.id)?
                                        <div className='indicator'></div>
                                        :null}
                                        <div>
                                        </div>
                                    </div>
                                    <div className='button-container'>
                                        <button className='button' onClick={()=>{onClick(element.id)}}>{element.name}</button>
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