import React from "react";
import styled from "styled-components";
import clockBg from "../../img/clock.png";
export const ClockWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #091921;
`;
export const StyledClock = styled.div`
    & {
        width: 350px;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url(${clockBg});
        background-size: cover;
        border: 4px solid #091921;
        border-radius: 50%;
        box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
            inset 0 -15px 15px rgba(255, 255, 255, 0.05),
            0 15px 15px rgba(0, 0, 0, 0.3), inset 0 15px 15px rgba(0, 0, 0, 0.3);
    }
    &:before {
        content: "";
        position: absolute;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background: #fff;
        z-index: 20;
    }
`;
const wrapperStyle = `
    position:absolute;
`;
const timeStyle = `
    display: flex;
    justify-content: center;
    position: absolute;
    border-radius: 50%;
`;
const hourStyle = `
    width: 160px;
    height: 160px;
`;
const minStyle = `
    width: 190px;
    height: 190px;
`;
const secStyle = `
    width: 230px;
    height: 230px;
`;
const beforeStyle = `
    content: "";
    position: absolute;
    border-radius: 6px 6px 0 0;
`;
export const HourWrapper = styled.div`
    ${wrapperStyle}
    ${hourStyle}
`;

export const MinWrapper = styled.div`
    ${wrapperStyle}
    ${minStyle}
`;
export const SecWrapper = styled.div`
    ${wrapperStyle}
    ${secStyle}
`;

export const Hour = styled.div<{ hDeg: number }>`
    & {
        ${timeStyle}
        ${hourStyle}
        transform: rotateZ(${(props) => props.hDeg}deg);
    }
    &:before {
        ${beforeStyle}
        width: 8px;
        height: 80px;
        background: #ff105e;
        z-index: 10;
    }
`;

export const Min = styled.div<{ mDeg: number }>`
    & {
        ${timeStyle}
        ${minStyle}
        transform: rotateZ(${(props) => props.mDeg}deg);
    }
    &:before {
        ${beforeStyle}
        width: 4px;
        height: 90px;
        background: #fff;
        z-index: 11;
    }
`;

export const Sec = styled.div<{ sDeg: number }>`
    & {
        ${timeStyle}
        ${secStyle}
        transform: rotateZ(${(props) => props.sDeg}deg);
    }
    &:before {
        ${beforeStyle}
        width: 2px;
        height: 150px;
        background: #fff;
        z-index: 12;
    }
`;
