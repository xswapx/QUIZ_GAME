import { useEffect, useState } from "react";

const Timer = ({timeOut,onTimeOut}) => {

    const [remainingTime, setRemainingTime] = useState(timeOut);

    console.log(remainingTime);
    useEffect(() => {
        console.log('TIMER')
        const time = setTimeout(onTimeOut,timeOut);

        return () => {clearTimeout(time)};
    },[timeOut,onTimeOut]);

    useEffect(() =>{
        console.log('INTERVAL')
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime-100);
        },100);

        return () => {clearInterval(interval)};
    },[]);

    return <progress id="question-time" value = {remainingTime} max={timeOut}></progress>
}

export default Timer;