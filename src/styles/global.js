import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};

        font-family: 'Open Sans', sans-serif;
        text-align: center;
        /*alinha todos os elementos ao centro*/
        margin: 0;
        /*padrão navegador põe 8px de margin*/

    }

    a {
        text-decoration: none;
    }
`