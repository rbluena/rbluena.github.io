import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${props => console.log(props)}

    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-family: ${props => props.theme.fonts.primary};
        background-color: ${props => props.theme.bgColor.primary};
        color: ${props => props.theme.color.primary};
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
