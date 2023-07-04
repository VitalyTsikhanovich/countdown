import {Paper} from '@mui/material';
import {ResultContainer} from './styles/stylesCountdown/Result.style';
import {FC, memo} from "react";

type ResultType = {

    minutes: number | string;
    second: number | string;
    millisecond?: number | string
};

export const Result: FC<ResultType> = memo(({minutes, second, millisecond}) => {
    return (

        <ResultContainer>
            <Paper elevation={8} style={{display: 'flex', justifyContent: 'center', width: '190px'}}>
                {minutes?  minutes: 0}:{second? second: 0}{millisecond !== undefined && ':'}{millisecond}
            </Paper>
        </ResultContainer>

    );
})




