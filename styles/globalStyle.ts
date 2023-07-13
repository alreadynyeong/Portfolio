import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px;
        background-color: #fff;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
`;
