import React, { useState, useEffect } from 'react';
import { SliderCountdown } from './components/slider';
import { Progress } from './components/progress';
import { InitialTime } from './components/initialTime';
import { Result } from './components/result';
import { Button, Card } from '@mui/material';
import { ButtonContainer, Container, Initial } from '../styles/stylesCoundown/Countdown.style';

export const Countdown: React.FC = React.memo(() => {
    const [second, setSecond] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [start, setStart] = useState(false);
    const [inputValueSecond, setInputValueSecond] = useState(0);
    const [inputValueMinutes, setInputValueMinutes] = useState(0);
    const [initialTime, setInitialTime] = useState(0);

    //  const audio = new Audio('./finish_hi.mp3');  // ???

    //  const playFinishSound = () => {
    // 	audio.play();
    //  };

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
    }, [start, second, minutes]);

    const handleSliderChange = (value: number) => {
        const minutes = Math.floor(value / 60);
        const seconds = value % 60;
        setInputValueMinutes(minutes);
        setInputValueSecond(seconds);
        setMinutes(minutes);
        setSecond(seconds);
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
    };

    const clears = () => {
        setMinutes(0);
        setSecond(0);
        setStart(false);
        setInputValueMinutes(0);
        setInputValueSecond(0);
        setInitialTime(0);
    };

    const handleStart = () => {
        setStart(start => !start);
        setInputValueMinutes(0);
        setInputValueSecond(0);
        setInitialTime(inputValueMinutes * 60 + inputValueSecond);
    };

    const handleStop = () => {
        clears();
    };
    const progressPercentage = initialTime > 0 ? ((initialTime - (minutes * 60 + second)) / initialTime) * 100 : 0;
    return (
        <Container>
			  <Card
                variant='outlined'
                style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}
            >
					
            <Result
                title='Countdown'
                minutes={!minutes ? '0' : minutes.toString()}
                second={!second ? '0' : second.toString()}
            />

            <Initial>
                <InitialTime
                    label='Minutes'
                    value={inputValueMinutes}
                    start={false}
                    max={750}
                    handleChange={handleInputMinutesChange}
                    min={0}
                    disabled={start}
                />
                <InitialTime
                    label='Seconds'
                    max={59}
                    min={0}
                    value={inputValueSecond}
                    start={false}
                    handleChange={handleInputSecondChange}
                    disabled={start}
                />
            </Initial>

				<ButtonContainer>
				<Button variant='outlined' onClick={handleStart}>
                {start ? 'Пауза' : 'Старт'}
            </Button>

            {start && (
                <Button variant='outlined' onClick={handleStop}>
                    Стоп
                </Button>
            )}
				</ButtonContainer>
           
            <SliderCountdown
                value={inputValueMinutes * 60 + inputValueSecond}
                onChange={handleSliderChange}
                max={750 * 60 + 59}
                min={0}
                disabled={start}
                step={15}
            />
            <Progress value={progressPercentage} />
				</Card>
        </Container>
    );
});
