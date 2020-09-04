import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`



    :root{
        /* colors */
        --very-dark-gray:  hsl(0, 0%, 17%);
        --dark-gray: hsl(0, 0%, 59%); 

    }

    *{
        margin: 0;
        padding:0;
        box-sizing:border-box;
        outline:0;
        border:0;
        font-family: 'Rubik',sans-serif;


    }

    button{
        cursor:pointer;
    }

    body{
        height:100vh;
        width:100%;
    }

`;


export default GlobalStyle;