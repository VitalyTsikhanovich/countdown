import {CircularProgress} from '@mui/material';
import {FC, memo} from 'react';

type ProgressPropsType = {
    value: number;
};

export const Progress: FC<ProgressPropsType> = memo(({value}) => {
    return (
        <>
            <CircularProgress variant='determinate' value={value}/>
            {/*{Math.floor(value)}%*/}
        </>
    );
});
