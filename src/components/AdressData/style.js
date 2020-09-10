import styled from 'styled-components';

export const Loading = styled.aside`

    color:#CCC;
    border:3px solid ;
    border-color: #eee #eee #eee transparent;
    width:20px;
    height:20px;
    border-radius:50%;

`;

export const Adress = styled.div`

    width: 86%;
    max-width:1100px;
    background: #fff;
    border-radius:12px;
    margin-top: 2rem;
    display:flex;
    flex-direction:column;
    box-shadow: 10px 70px 40px -20px rgba(0,0,0,.2);
    z-index:1001;
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
    
        > div{
            font-size:1.3em;
            font-weight:500;
            margin:5px 0;
            color:var(--very-dark-gray);

        }

        #loading{
            margin:10px auto 5px auto ;
            animation: load 1s linear infinite;
        }

        @keyframes load{
            to{transform:rotate(360deg)}
        }

    }

    @media(min-width: 700px)
    {
        flex-direction:row;
        margin-top: 3.2rem;
        min-height:152px;
        padding:35px 15px 15px 15px;
        box-shadow: 0px 20px 40px -15px rgba(0,0,0,.2);

        > span{
            text-align:left;
            height:auto;
            width:auto;

            > p:first-of-type{
                font-size:.6rem;
            }
            
            > div{
                font-size:1.7rem;
                margin-top:10px;
                word-wrap:break-word;
                max-width:160px;
                width:auto;
                max-height:70%;
                overflow:hidden;
                text-overflow:ellipsis;
            }

            #loading{
            margin:30px auto 5px auto ;
            animation: load 1s linear infinite;
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