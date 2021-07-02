import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --purple: #354FA6;
    --purple-light: #5274D9;
    --blue-light: #08B9D5;
    --red: #E52E4D;
    --green: #33CC95;
    
    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #FFFFFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// font-size: 16px (Desktop)
html {
    @media (max-width: 1080px) {
        font-size: 93.64%; // 15px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }
}

// REM = 1rem = font-size

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}
`;
