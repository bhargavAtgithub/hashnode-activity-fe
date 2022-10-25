import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html,
    body {
        height: 100%;
        min-height: 100vh;
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        font-size: 50%;
    }

    p, span, h1, h2, h3, h4, h5, h6 {
        margin: 0;
        all: inherit;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }


`;

export default GlobalStyles;
