import {useState, useEffect, ChangeEvent, useCallback, useRef} from 'react';

export const useCountdownLogic = () => {
    const [second, setSecond] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [start, setStart] = useState<boolean>(false);

    const [inputValueSecond, setInputValueSecond] = useState<number>(0);
    const [inputValueMinutes, setInputValueMinutes] = useState<number>(0);
    const [initialTime, setInitialTime] = useState<number>(0);

    const inputValueSecondRef = useRef<number>(0);
    const inputValueMinutesRef = useRef<number>(0);

    useEffect(() => {
        let intervalId: NodeJS.Timeout | undefined;

        if (start) {
            intervalId = setInterval(() => {
                if (second > 0) {
                    setSecond((s) => s - 1);
                } else if (minutes > 0) {
                    setMinutes((m) => m - 1);
                    setSecond(59);
                }
            }, 1000);
        }

        if (minutes === 0 && second === 0) {
            clearInterval(intervalId);
            clears();
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [start, second, minutes, initialTime]);

    const handleSliderChange = useCallback((value: number) => {
        const minutes = Math.floor(value / 60);
        const seconds = value % 60;

        setInputValueMinutes(minutes);
        setInputValueSecond(seconds);
        setMinutes(minutes);
        setSecond(seconds);
    }, []);

    const handleInputMinutesChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        let value = event.currentTarget.valueAsNumber;
        if (value > 750) {
            value = 750;
        }
        if (value < 0) {
            value = 0;
        }
        inputValueMinutesRef.current = value;
        setInputValueMinutes(value);
    }, []);

    const handleInputSecondChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(event.currentTarget.value, 10);

        if (value > 59) {
            value = 59;
        }
        if (value < 0) {
            value = 0;
        }
        inputValueSecondRef.current = value;
        setInputValueSecond(value);
    }, []);

    const clears = useCallback(() => {
        setMinutes(0);
        setSecond(0);
        setStart(false);
        inputValueMinutesRef.current = 0;
        inputValueSecondRef.current = 0;
        setInputValueMinutes(0);
        setInputValueSecond(0);
        setInitialTime(0);
    }, []);

    const handleStart = useCallback(() => {
        setStart((start) => !start);

        setMinutes(inputValueMinutesRef.current);
        setSecond(inputValueSecondRef.current);
        setInitialTime(inputValueMinutesRef.current * 60 + inputValueSecondRef.current);
    }, []);

    const handleStop = useCallback(() => {
        clears();
    }, []);

    const progressPercentage = initialTime > 0 ? ((initialTime - (minutes * 60 + second)) / initialTime) * 100 : 0;
    return {
        start,
        minutes,
        second,
        inputValueMinutes,
        inputValueSecond,
        handleSliderChange,
        handleInputMinutesChange,
        handleInputSecondChange,
        handleStart,
        handleStop,
        progressPercentage,
        initialTime
    };
};

