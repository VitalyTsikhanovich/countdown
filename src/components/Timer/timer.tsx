import React, { useState, useEffect } from 'react';
import { Box, Card, Paper } from '@mui/material';
import {  Container, Timers } from '../styles/stylesTimer/Timer.style';
import {ButtonGroup} from './ButtonGroup';
import { Titles } from './Title';
export const Timer: React.FC = React.memo(() => {
    const [start, setStart] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [millisecond, setMillisecond] = useState(0);
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

    const handleStart = React.useCallback(() => {
        setStart(e => !e);
    }, []);

    const handleStop = React.useCallback(() => {
        setStart(false);
        setMinutes(0);
        setSeconds(0);
        setMillisecond(0);
    }, []);

    return (
        <Container>
            <Card
                variant='outlined'
                style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}
            >
					<Titles title='Timer'/>
                <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Timers>
                        <Paper elevation={8} style={{ display: 'flex', justifyContent: 'center', minWidth: '190px' }}>
                            {minutes}:{seconds}:{ millisecond}
                        </Paper>
                    </Timers>
                </Box>
					 <ButtonGroup onStart={handleStart} onStop={handleStop} start={start}/>
            </Card>
        </Container>
    );
});



