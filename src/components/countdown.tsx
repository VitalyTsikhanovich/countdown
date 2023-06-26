import React, { useState, useEffect, ChangeEventHandler } from 'react';
import { SliderCountdown } from './slider';
import { Progress } from './progress';
import { InitialTime } from './initialTime';
import { Result } from './result';
import { Button, Paper, Slider } from '@mui/material';

export const Countdown: React.FC = React.memo(() => {
    const [second, setSecond] = useState(parseInt(''));
    const [minutes, setMinutes] = useState(parseInt(''));
    const [start, setStart] = useState(false);
    const [inputValueSecond, setInputValueSecond] = useState(parseInt(''));
    const [inputValueMinutes, setInputValueMinutes] = useState(parseInt(''));
    const [sliderValue, setSliderValue] = useState(0);
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

	 const handleSliderChange = (value: number) => {
		const minutes = Math.floor(value / 60);
		const second = value % 60;
		setInputValueMinutes(minutes);
		setInputValueSecond(second);
		setMinutes(minutes);
		setSecond(second);
	 };
 

    const handleInputMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = +event.currentTarget.value;
        if (value > 750) {
            value = 750;
        }
        if (value < 0) {
            value = 0;
        }
        setInputValueMinutes(value);
        setMinutes(value);
      //   setSliderValue(value);
    };

    const handleInputSecondChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = +event.currentTarget.value;
        if (value > 59) {
            value = 59;
        }
        if (value < 0) {
            value = 0;
        }
        setInputValueSecond(value);
        setSecond(value);
      //   setSliderValue(value);
    };
	 const clears = React.useCallback(() => {
		setMinutes(parseInt(''));
		setSecond(parseInt(''));
		setStart(false);
		setInputValueMinutes(parseInt(''));
		setInputValueSecond(parseInt(''));
		setSliderValue(0 )
		
  }, []);

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
        <div>
            <Result title='Countdown' minutes={!minutes ? '0' : minutes} second={!second ? '0' : second} />

            <div>
                <InitialTime
                    label='Minutes'
                    value={inputValueMinutes}
                    start={false}
                    max={750}
                    handleChange={handleInputMinutesChange}
                    min={0}
                    disabled={start ? true : false}
                />
                <InitialTime
                    label='Seconds'
                    max={59}
                    min={0}
                    value={inputValueSecond}
                    start={false}
                    handleChange={handleInputSecondChange}
                    disabled={start ? true : false}
                />
            </div>
            <Button variant='outlined' onClick={handleStart}>
                {start ? 'Пауза' : 'Старт'}
            </Button>

            <SliderCountdown
                value={inputValueMinutes * 60 + inputValueSecond}
                onChange={handleSliderChange}
                max={750 * 60 + 59}
                min={0}
                disabled={start}
                step={15}
            />

            {/* <Progress value={!inputValueMinutes ? 0 : inputValueMinutes} max={750} /> */}
            {start && (
                <Button variant='outlined' onClick={handleStop}>
                    Стоп
                </Button>
            )}
        </div>
    );
});
