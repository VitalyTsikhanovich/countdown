import { Box, Paper } from '@mui/material';
import styled from 'styled-components';
type ResultType = {
    title: string;
    minutes: number | string;
    second: number | string;
};

export const Result = ({ title, minutes, second }: ResultType) => {
    return (
        <>
		  <h1>{title}</h1>
            {/* <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}> */}
            <Red>
                <Paper elevation={8} style={{ display: 'flex', justifyContent: 'center', width: '190px' }}>
                    {minutes}:{second}
                </Paper>
            </Red>

            {/* </Box> */}
        </>
    );
};

const Red = styled.div`
    font-size: 300%;
`;
