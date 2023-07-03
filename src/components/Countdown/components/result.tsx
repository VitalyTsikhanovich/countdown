import { Paper } from '@mui/material';
import { ResultContainer } from '../../styles/stylesCountdown/Result.style';
import {memo} from "react";

type ResultType = {

    minutes: number | string;
    second: number | string;
};

export const Result = memo( ({  minutes, second }: ResultType) => {
    return (

            <ResultContainer>
                <Paper elevation={8} style={{ display: 'flex', justifyContent: 'center', width: '190px' }}>
                    {minutes}:{second}
                </Paper>
            </ResultContainer>

    );
})
