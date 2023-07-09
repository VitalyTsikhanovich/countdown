import {useCallback, useEffect, useState} from "react";


export const useTimerLogic = () => {
    const [start, setStart] = useState<boolean>(false);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [millisecond, setMillisecond] = useState<number>(0);
    useEffect(() => {
        let intervalId: string | number | NodeJS.Timer | undefined;
        if (start) {
            intervalId = setInterval(() => {
                if (millisecond < 99) {
                    setMillisecond(ml => ml + 1);
                } else if (seconds < 59) {
                    setSeconds(s => s + 1);
                    setMillisecond(0);
                } else {
                    setMinutes(m => m + 1);
                    setSeconds(0);
                }
            }, 10);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [start, seconds, millisecond]);

    const handleStart = useCallback(() => {
        setStart(e => !e);
    }, []);

    const handleStop = useCallback(() => {
        setStart(false);
        setMinutes(0);
        setSeconds(0);
        setMillisecond(0);
    }, []);

    return {
        start,
        minutes,
        seconds,
        millisecond,
        handleStart,
        handleStop
    }

}
