import React, {useState, useEffect, FC, memo, useCallback} from 'react';
import {Box, Card} from '@mui/material';
import {Container} from '../styles/stylesTimer/Timer.style';
import {ButtonGroup} from '../ButtonGroup';
import {Titles} from '../Title';
import {Result} from "../Result";

export const Timer: FC = memo(() => {
    const [start, setStart] = useState<boolean>(false);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [millisecond, setMillisecond] = useState<number>(0);
    useEffect(() => {
        let intervalId: string | number | NodeJS.Timer | undefined;
        if (start) {
            intervalId = setInterval(() => {
                if (millisecond < 999) {
                    setMillisecond(ml => ml + 1);
                } else if (seconds < 59) {
                    setSeconds(s => s + 1);
                    setMillisecond(0);
                } else {
                    setMinutes(m => m + 1);
                    setSeconds(0);
                }
            }, 1);
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

    return (
        <Container>
            <Card
                variant='outlined'
                style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}
            >
                <Titles title='Timer'/>
                <Box style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Result minutes={minutes} second={seconds} millisecond={millisecond}/>
                </Box>
                <ButtonGroup onStart={handleStart} onStop={handleStop} start={start}/>
            </Card>
        </Container>
    );
});



