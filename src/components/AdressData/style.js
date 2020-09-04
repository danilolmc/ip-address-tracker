import styled from 'styled-components';

export const Adress = styled.div`

    width: 87%;
    max-width:650px;
    background: #fff;
    border-radius:12px;
    margin-top: 2rem;
    display:flex;
    flex-direction:column;
    min-height:15.5rem;
    padding:25px 0;
    border:1px solid;

    span{
        width:100%;
        height:25%;
        margin:0 auto 10px auto;

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

`;