import React from 'react';
import { CircularProgress } from '@mui/material';

type ProgressPropsType = {
    value: number;
};

export const Progress = ({ value }: ProgressPropsType) => {
    return (
        <>
		  
            <CircularProgress variant='determinate' value={value} />
            {/* {Math.floor(value)}% */}
        </>
    );
};
