import styled from 'styled-components';

export const Header = styled.header`
    & {
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: black;
        color: white;
        height: 70vh;
    }

    & main {
        width: 100%;
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    & main h1 {
        margin-bottom: 50px;
        font-size: 2rem;
        text-align: center;
        animation: blink 2.2s infinite;
    }

    & main a {
        color: #995DCC;
        text-align: center;
        display: flex;
        position: absolute;
        bottom: 3vh;
    }

    @keyframes blink {
        0% {
            opacity: 0;
        }

        10% {
            opacity: 1;
        }

        90% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
`;

export const Topbar = styled.header`
    & {
        width: 100%;
        height: 7vh;
        background: #111;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    & a {
        padding: 0 30px;
        background: none;
        border: none;
        color: white;
        height: 100%;
        text-decoration: none;
        display: flex;
        align-items: center;
    }
`;