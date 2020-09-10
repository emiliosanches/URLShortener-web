import styled from 'styled-components';

export const AppContainer = styled.main`
    & {
        min-height: 30vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #050505;
        padding: 100px 0;
    }
`;

export const InputSection = styled.section`
    & {
        width: 70%;
        padding: 40px;
        border: 2px solid black;
        background: #111;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & h2 {
        color: white;
        margin-top: 0;
    }

    & input {
        height: 40px;
        width: 100%;
        border-radius: 8px;
        border: 1px solid black;
        padding: 0 10px;
        margin-bottom: 10px;
    }

    & button {
        height: 35px;
        width: 200px;
        background: green;
        border-radius: 16px;
        border: none;
        color: white;
        font-weight: 900;
        cursor: pointer;
    }
`;

export const OutputSection = styled.section`
    & {
        position: relative;
        width: 70%;
        padding: 40px;
        border: 2px solid black;
        background: #111;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: load 0.8s;
    }

    & h2 {
        color: white;
        margin-top: 0;
    }

    & div {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    & div input {
        height: 40px;
        width: 100%;
        border-radius: 8px 0 0 8px;
        border: none;
        padding: 0 10px;
        margin-bottom: 10px;
    }

    & div button {
        height: 40px;
        width: 40px;
        background: #AAA;
        border-radius: 0 8px 8px 0;
        border: none;
        color: white;
        font-weight: 900;
        padding: 0;
        cursor: pointer;
    }

    @keyframes load {
        0% {
            top: 20px;
            opacity: 0;
        }

        100% {
            top: 0px;
            opacity: 1;
        }
    }
`;