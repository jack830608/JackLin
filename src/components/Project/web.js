import React, { useState, useEffect } from 'react';

export default (props) => {
    const getRandom = (min, max) => {
        return Math.floor(Math.random() * max) + min;
    };
    const [random, setRandom] = useState('')
    useEffect(() => {
        setRandom(getRandom(0, 3))
    }, [])
    return (
        <div>
            <div className="webBox">
                <div className="WebBrowser" onClick={() => window.open(props.url, '_blank')}>
                    <div className="UrlSection">
                        <div className="DotHolder">
                            <div className="Dot" style={{ background: random === 0 ? '#EF7A97' : '' }} />
                            <div className="Dot" style={{ background: random === 1 ? '#878787' : '' }} />
                            <div className="Dot" style={{ background: random === 2 ? '#2047CC' : '' }} />
                        </div>
                        <div className="Url">
                            {props.url}
                        </div>
                    </div>
                    <div className="Web">
                        <img src={`/images/project/${props.image}`} width="100%" />
                    </div>
                </div>
                <div className="webData">
                    {props.data}
                </div>
            </div>
        </div>
    )
}