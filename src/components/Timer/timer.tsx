// import * as React from 'react';
// import { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button'
// import Paper from '@mui/material/Paper'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box, Button, Card, Grid, Paper } from '@mui/material';

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
        <Card variant='outlined' style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
            <Box  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              
				<Title>Timer</Title>
                <Timers>
                    <Paper elevation={8}  style={{display: 'flex',  justifyContent: 'center'}} >
						 <Dir>
						 {minutes}:{seconds}:{millisecond}

						 </Dir>
						 
                    </Paper>
					
                       
                </Timers>
					 </Box>
					 <div>
					 <Button variant='text' onClick={handleStart}>
                    {start ? 'Пауза' : 'Старт'}
                </Button>
                <Button variant='text' onClick={handleStop}>
                    Стоп
                </Button>
					 </div>
               
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

///styled

const Wrapper = styled.div`
    // border: 1px solid red
`;
const Container = styled.div`
    max-width: 200px;
	 margin: 0 auto;
    // border: 2px solid blue
`;
const Timers = styled.p`
   //  font-size: 15px;
   //  width: auto;
    // padding-left: 50%;
`;
const Title = styled.h1`
    // padding-left: 50%;

    // color : red
`;
// const ButtonContainer = styled.div`
// display: flex
// justify-content: center
// `

const Dir = styled.div`
width: 100%
height: 100px
color: red
`