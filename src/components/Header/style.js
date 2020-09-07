import styled from 'styled-components';

import Headerbg from "../../assets/images/pattern-bg.png";

export const ContainerHeader = styled.header`

    width: 100%;
    height: 300px;
    /* border:1px solid red; */
    background: url(${Headerbg}) no-repeat;
    background-size:cover;
    display:flex;
    flex-direction:column;
    align-items:center;

    > h2{
        text-align:center;
        color: #fff;
        margin: 40px 30px;
        font-weight:500;

    }

    @media(min-width:700px){
     
        height:280px;
    }
`;
