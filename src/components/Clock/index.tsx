import React, { useEffect, useState } from "react";
import {
    ClockWrapper,
    StyledClock,
    Hour,
    Min,
    Sec,
    HourWrapper,
    MinWrapper,
    SecWrapper,
} from "./style";

const getHour = () => new Date().getHours() * 30;
const getMinutes = () => new Date().getMinutes() * 6;
const getSeconds = () => new Date().getSeconds() * 6;

const Clock = () => {
    const [hour, setHour] = useState<number>(getHour());
    const [minute, setMinute] = useState<number>(getMinutes());
    const [second, setSecond] = useState<number>(getSeconds());

    useEffect(() => {
        const clockInterval = setInterval(() => {
            setHour(getHour());
            setMinute(getMinutes());
            setSecond(getSeconds());
        });
        return () => {
            clearInterval(clockInterval);
        };
    });

    return (
        <ClockWrapper>
            <StyledClock>
                <HourWrapper>
                    <Hour hDeg={hour + minute / 12} />
                </HourWrapper>
                <MinWrapper>
                    <Min mDeg={minute} />
                </MinWrapper>
                <SecWrapper>
                    <Sec sDeg={second} />
                </SecWrapper>
            </StyledClock>
        </ClockWrapper>
    );
};

export default Clock;
