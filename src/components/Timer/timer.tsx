import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Card, Paper } from '@mui/material';
import { ButtonContainer, Container, Timers, Title } from '../styles/stylesTimer/Timer.style';
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
                <Title>Timer</Title>
                <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Timers>
                        <Paper elevation={8} style={{ display: 'flex', justifyContent: 'center', width: '190px' }}>
                            {minutes}:{seconds}:{!millisecond ? '000' : millisecond}
                        </Paper>
                    </Timers>
                </Box>
                <ButtonContainer>
                    <Paper elevation={8} style={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
                        <Button variant='text' onClick={handleStart}>
                            {start ? 'Пауза' : 'Старт'}
                        </Button>
                        <Button variant='text' onClick={handleStop}>
                            Стоп
                        </Button>
                    </Paper>
                </ButtonContainer>
                {/* <Button onClick={handleStart}>{start ? 'Пауза' : 'Старт'}</Button> */}
                {/* <Button onClick={handleStop}>Стоп</Button> */}
            </Card>
        </Container>
    );
});

/// propTypes
Timer.propTypes = {
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    millisecond: PropTypes.number,
    start: PropTypes.bool,
    handleStart: PropTypes.func,
    handleStop: PropTypes.func,
};
