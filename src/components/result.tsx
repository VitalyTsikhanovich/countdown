type ResultType = {
    title: string;
    minutes: number | string;
    second: number | string;
};

export const Result = ({ title, minutes, second }: ResultType) => {
    return (
        <>
            <h1> {title}</h1>
            <p>{minutes}</p>
            <p>{second}</p>
        </>
    );
};
