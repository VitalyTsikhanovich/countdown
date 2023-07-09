import {FC, memo} from 'react';
import { Title } from '../styles/stylesTimer/Timer.style';

type TitlePropsType = {
    title: string;
};

export const Titles: FC<TitlePropsType> = memo(({ title }) => {
    return <Title>{title}</Title>;
});
