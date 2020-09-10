import styled from 'styled-components';

export const Sidebar = styled.aside`
    & {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 2vh 2vw;
        background: #111;
        position: relative;
        min-width: 250px; width: 20vw;
        height: 100vh;
    }
    
    & nav {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }

    & a {
        display: flex;
        align-items: center;
        padding: 10px;
        width: 100%;
        height: 30px;
        border-radius: 8px;
        color: #999;
    }

    & #doc-home-link {
        display: flex;
        width: fit-content;
        justify-self: flex-end;
    }

    .active-section {
        background: #333;
        cursor: default;
    }
`;

export const SidebarSection = styled.section`
    & {
        margin-top: 10px;
        color: white;
    }
    
    & ul {
        padding-left: 0;
    }
    
    & li {
        list-style-type: none;
    }
`;