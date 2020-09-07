import styled from 'styled-components';

export const Adress = styled.div`

    width: 86%;
    max-width:1100px;
    background: #fff;
    border-radius:12px;
    margin-top: 2rem;
    display:flex;
    flex-direction:column;
    box-shadow: 10px 70px 40px -20px #000;
    z-index:500;
    padding:25px 0;
    /* border:1px solid; */

    span{
     
        margin:0 auto 10px auto;
        position:relative;

        text-align:center;

        > p:first-child{
            color:var(--dark-gray);
            text-transform:uppercase;
            font-size:.5rem;
            font-weight:700;
            letter-spacing:1px;
        }
    
        > p:last-child{
            font-size:1.3em;
            font-weight:500;
            margin:5px 0;
            color:var(--very-dark-gray);

        }

    }

    @media(min-width: 700px)
    {
        flex-direction:row;
        margin-top: 3.2rem;
        padding:35px 15px 15px 15px;
        box-shadow: 0px 40px 40px -15px #aaa;

        span{
            text-align:left;
            height:auto;
            width:auto;

            > p:first-of-type{
                font-size:.6rem;
            }
            
            > p:last-of-type{
                font-size:1.7rem;
                margin-top:10px;
                word-wrap:break-word;
                max-width:150px;
            }

            :nth-child(n+2)::before{
                content:"";
                background: #ddd;
                position:absolute;
                transform:translate(-30px,0);
                height:85px;
                width:1px;
            }
        }
        
    }

`;