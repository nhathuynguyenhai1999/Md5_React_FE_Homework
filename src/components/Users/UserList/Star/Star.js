/*
import {useEffect, useState} from "react";
function Star(props) {
    const [startColor, setStartColor] = useState("gold");
    const [arrStar, setArrStar] = useState([])
    //fix them
    const [totalStar, setTotalStar] = useState(props.totalStar);
    useEffect(() => {
        // const totalStar = props.totalStar;
        const data = [];
        for (let i = 0; i < 10; i++) {
            let star = <i
                        key={i}
                        onMouseOver={() => handleHoverStar(i)}
                        style={{color: totalStar >= i ? startColor : ''}} 
                        className="bi bi-star-fill">
                    </i>
            data.push(star);
        }
        setArrStar([...data]);
    }, [totalStar,startColor]);
    const handleHoverStar = (i) => {
        setTotalStar(i + 1);
    }
    return (
        <>
            {arrStar}
        </>
    )
}
*/
import { useEffect, useState } from "react";
function Star(props) {
    const [totalStar, setTotalStar] = useState(props.totalStar);
    const [startColor, setStartColor] = useState("gold");
    const [arrStar, setArrStar] = useState([]);
    useEffect(() => {
        const data = [];
        for (let i = 0; i < 10; i++) {
            if (i < Math.floor(totalStar)) {
                data.push(
                    <i 
                        key={i} 
                        onClick={() => handleHoverStar(i)} 
                        style={{ color: startColor }} 
                        className="bi bi-star-fill">
                    </i>
                );
            } else if (i === Math.floor(totalStar) && totalStar % 1 !== 0) {
                data.push(
                    <i 
                        key={i} 
                        onClick={() => handleHoverStar(i)} 
                        style={{ color: startColor }} 
                        className="bi bi-star-half">
                    </i>
                );
            } else {
                data.push(
                    <i 
                        key={i} 
                        onClick={() => handleHoverStar(i)} 
                        style={{ color: '' }} 
                        className="bi bi-star">
                    </i>
                );
            }
        }
        setArrStar([...data]);
    }, [totalStar, startColor]);
    const handleHoverStar = (i) => {
        setTotalStar(i + 1);
    };
    return (
        <>
            {arrStar}
        </>
    );
}

export default Star;