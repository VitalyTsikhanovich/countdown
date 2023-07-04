import React, {useState, useEffect, ChangeEvent, FC, memo, useCallback} from 'react';


import {InitialTime} from './components/InitialTime';
import {Result} from '../Result';
import {Card} from '@mui/material';
import {Container, Initial} from '../styles/stylesCountdown/Countdown.style';
import {Progress} from './components/Progress';
import {SliderCountdown} from './components/Slider';
import {Titles} from "../Title";
import {ButtonGroup} from "../ButtonGroup";

export const Countdown: FC = memo(() => {
    const [second, setSecond] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [start, setStart] = useState<boolean>(false);
    const [inputValueSecond, setInputValueSecond] = useState<number>(0);
    const [inputValueMinutes, setInputValueMinutes] = useState<number>(0);
    const [initialTime, setInitialTime] = useState<number>(0);

    //   const audio = new Audio('../finish_hi.mp3');  // ???

    //   const playFinishSound = () => {
    //  	audio.play();
    //   };

    useEffect(() => {
        let intervalId: NodeJS.Timeout | undefined;

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
            // playFinishSound()
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
        let value = event.currentTarget.valueAsNumber
        if (value > 750) {
            value = 750;
        }
        if (value < 0) {
            value = 0;
        }
        setInputValueMinutes(value);
        setMinutes(value);
    }, []);

    const handleInputSecondChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(event.currentTarget.value,10);

        if (value > 59) {
            value = 59;
        }
        if (value < 0) {
            value = 0;
        }
        setInputValueSecond(value);
        setSecond(value);
    }, [])

    const clears = useCallback(() => {
        setMinutes(0);
        setSecond(0);
        setStart(false);
        setInputValueMinutes(0);
        setInputValueSecond(0);
        setInitialTime(0);
    }, [])


    let handleStart = useCallback(() => {
        setStart(start => !start);
        setMinutes(inputValueMinutes)
        setSecond(inputValueSecond)
        setInitialTime(inputValueMinutes * 60 + inputValueSecond);
    }, [inputValueSecond, inputValueMinutes]);

    const handleStop = useCallback(() => {
        clears();
    }, [])
    const progressPercentage = initialTime > 0 ? ((initialTime - (minutes * 60 + second)) / initialTime) * 100 : 0;
    return (
        <Container>
            <Card
                variant='elevation'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                }}
            >
                <Titles title='Countdown'/>
                <Result
                    minutes={minutes}
                    second={second}
                />

                <Initial>
                    <InitialTime
                        label='Minutes'
                        value={inputValueMinutes}
                        handleChange={handleInputMinutesChange}
                        disabled={start || initialTime > 0}

                    />
                    <InitialTime
                        label='Seconds'
                        value={inputValueSecond}
                        handleChange={handleInputSecondChange}
                        disabled={start || initialTime > 0}
                    />
                </Initial>
                <ButtonGroup start={start} onStart={handleStart} onStop={handleStop}/>
                <SliderCountdown
                    value={inputValueMinutes * 60 + inputValueSecond}
                    onChange={handleSliderChange}
                    max={750 * 60 + 59}
                    min={0}
                    disabled={start || initialTime > 0}
                    step={15}
                />
                <Progress value={progressPercentage}/>
            </Card>
        </Container>
    );
});
