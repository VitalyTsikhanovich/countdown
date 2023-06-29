import { Paper } from '@mui/material';
import { ResultContainer } from '../../styles/stylesCountdown/Result.style';

type ResultType = {
    title: string;
    minutes: number | string;
    second: number | string;
};

export const Result = ({ title, minutes, second }: ResultType) => {
    return (
        <>
            <h1>{title}</h1>
            <ResultContainer>
                <Paper elevation={8} style={{ display: 'flex', justifyContent: 'center', width: '190px' }}>
                    {minutes}:{second}
                </Paper>
            </ResultContainer>
        </>
    );
};
