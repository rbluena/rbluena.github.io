import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize};

    body {
        font-family: ${props => props.theme.typography.font.primary};
        background-color: ${props => props.theme.color.monochrome[900]};
        color: ${props => props.theme.color.monochrome[100]};
        margin: 0;
        padding: 0 !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
