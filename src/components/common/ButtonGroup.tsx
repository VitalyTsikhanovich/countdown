import React, {FC, memo} from 'react';
import {Button, Paper} from '@mui/material';
import {ButtonContainer} from '../styles/stylesTimer/Timer.style';

interface ButtonGroupProps {
    start: boolean;
    onStart: () => void;
    onStop: () => void;
}

export const ButtonGroup: FC<ButtonGroupProps> = memo(({start, onStart, onStop}) => (
    <ButtonContainer>
        <Paper elevation={8} style={{display: 'flex', justifyContent: 'space-around', width: '80%'}}>
            <Button variant='text' onClick={onStart} >
                {start ? 'Пауза' : 'Старт'}
            </Button>
            <Button variant='text' onClick={onStop} >
                Стоп
            </Button>
        </Paper>
    </ButtonContainer>
));
