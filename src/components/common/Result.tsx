import React, {FC, memo} from 'react';
import {Paper} from '@mui/material';
import {ResultContainer} from '../styles/stylesCountdown/Result.style';

type ResultProps = {
    minutes: number | string;
    second: number | string;
    millisecond?: number | string
};

export const Result: FC<ResultProps> = memo(({minutes, second, millisecond}) => {
    const formatNumber = (value: number | string) => String(value).padStart(2, '0');

    return (
        <ResultContainer>
            <Paper elevation={8} style={{display: 'flex', justifyContent: 'center', width: '190px'}}>
                {formatNumber(minutes)}:{formatNumber(second)}{(millisecond) !== undefined ? `:${formatNumber(millisecond)}` : ''}
            </Paper>
        </ResultContainer>
    );
});




