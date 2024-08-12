import React, {useState, useEffect} from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function addZeros(number){
        return (number < 10 ? "0" : "") + number;
    }

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const amorpm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${addZeros(hours)}:${addZeros(minutes)}:${addZeros(seconds)} ${amorpm}`;
        }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
    }

export default DigitalClock;