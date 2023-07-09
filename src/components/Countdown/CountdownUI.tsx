import React, {FC, memo} from 'react';
import {Card} from '@mui/material';
import {Container} from '../styles/stylesCountdown/Countdown.style';
import {Progress} from './components/Progress';
import {SliderCountdown} from './components/Slider';
import {Titles} from '../common/Title';
import {ButtonGroup} from '../common/ButtonGroup';
import {useCountdownLogic} from './UseCountdownLogic';
import {Result} from "../common/Result";
import {InitialTime} from "./components/InitialTime";

export const CountdownUI: FC = memo(() => {
    const {
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
    } = useCountdownLogic();
    return (
        <Container>
            <Card
                variant="elevation"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                }}
            >
                <Titles title="Countdown"/>
                <Result minutes={minutes} second={second}/>

                <InitialTime value={inputValueMinutes} handleChange={handleInputMinutesChange}
                             disabled={start || initialTime > 0} label='Minutes'/>
                <InitialTime value={inputValueSecond} handleChange={handleInputSecondChange}
                             disabled={start || initialTime > 0} label='Seconds'/>
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
})
