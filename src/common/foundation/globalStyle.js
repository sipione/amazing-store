import { createGlobalStyle } from "styled-components"
import { generalFontFamily, primaryColor } from "./variables";


const GlobalStyle = createGlobalStyle`
    html{
        font-family: ${generalFontFamily};
    }
    a{
        text-decoration: none;
        color: ${primaryColor};
    }
    *{
        box-sizing: border-box;margin: 0;
        margin: 0;
    }
`

export default GlobalStyle;