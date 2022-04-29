import React, {useEffect, useState} from "react";
import './LastMeasure.css'

function LastMeasure() {

    const date = new Date();
    const [time, setTime] = useState(Date.now());
    useEffect( () => {
        const interval = setInterval ( () => setTime((Date.now)), 1000);
        return () => { clearInterval(interval)}
    })

    const [year, month, day, hour, minute, millis] = [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getMilliseconds()]

    return(
       <div className="lastMeasure">
            <p>{`${year} - ${(month+1) >9? month + 1: `0${month + 1}` } - ${(day > 9)? day: `0${day}`}`}</p>
           <p>{`${(hour > 9)? hour: `0${hour}`}:${(minute > 9)? minute: `0${minute}`}`}</p>
       </div>
    );
}

export default LastMeasure;