import React, {FC, memo} from 'react';
import {Box, Card} from '@mui/material';
import {Container} from '../styles/stylesTimer/Timer.style';
import {ButtonGroup} from '../common/ButtonGroup';
import {Titles} from '../common/Title';
import {Result} from "../common/Result";
import {useTimerLogic} from "./TimerLogic";

export const TimerUI: FC = memo(() => {
    const {
        start,
        minutes,
        seconds,
        millisecond,
        handleStart,
        handleStop
    } = useTimerLogic()

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



