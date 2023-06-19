import React, { useState, useEffect } from 'react';
import { Slider } from './slider';
import { Progress } from './progress';
import { InitialTime } from './initialTime';
import { Result } from './result';
import { Button, Paper } from '@mui/material';
export const Countdown: React.FC = React.memo(() => {
    const [second, setSecond] = useState(parseInt(''));
    const [minutes, setMinutes] = useState(parseInt(''));
    const [start, setStart] = useState(false);
    const [inputValueSecond, setInputValueSecond] = useState(parseInt(''));
    const [inputValueMinutes, setInputValueMinutes] = useState(parseInt(''));
    //  const audio = new Audio('./finish_hi.mp3')

  

    useEffect(() => {
        let intervalId: string | number | NodeJS.Timer | undefined;

        if (start) {
            intervalId = setInterval(() => {
                if (second > 0) {
                    setSecond(s => s - 1);
                } else if (minutes > 0) {
                    setMinutes(m => m - 1);
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
    }, [start, second, minutes]);

    const clears = React.useCallback(() => {
        setMinutes(parseInt(''));
        setSecond(parseInt(''));
        setStart(false);
        setInputValueMinutes(parseInt(''));
        setInputValueSecond(parseInt(''));
    }, []);

    const handleInputMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = +event.currentTarget.value;
        setInputValueMinutes(value);
        setMinutes(value);
    };

    const handleInputSecondChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = +event.currentTarget.value;
        setInputValueSecond(value);
        setSecond(value);
    };

    const handleStart = React.useCallback(() => {
        setStart(function (start) {
            return !start;
        });

        setInputValueMinutes(parseInt(''));
        setInputValueSecond(parseInt(''));
    }, []);

    const handleStop = React.useCallback(() => {
        clears();
    }, []);
    return (
        <div >
			<Result title='Countdown' minutes={!minutes ? '0' : minutes} second={!second ? '0' : second}/>
			
            
            <div>
                <InitialTime
					 label='minutes'
                    value={inputValueMinutes}
                    start={false}
                    max={750}
                    handleChange={handleInputMinutesChange}
                    min={0}
                    disabled={start ? true : false}
                />
                <InitialTime
					 label='seconds'
                    max={59}
                    min={0}
                    value={inputValueSecond}
                    start={false}
                    handleChange={handleInputSecondChange}
                    disabled={start ? true : false}
                />
               
            </div>
            <button onClick={handleStart}>{start ? 'Пауза' : 'Старт'}</button>

            <Progress value={!inputValueMinutes ? 0 : inputValueMinutes} max={750} />

            {start && <button onClick={handleStop}>Стоп</button>}
        </div>
    );
});
