import styled from 'styled-components';

export const InputBox = styled.div`

    width: 87%;
    max-width:350px;
    height:45px;

    input{
        height:100%;
        width:82%;
        border-top-left-radius:12px;
        border-bottom-left-radius:12px;
        padding: 0 18px;
        color: var(--very-dark-gray);
    }

    button{
        background: #000;
        height:100%;
        width:18%;
        border-top-right-radius:12px;
        border-bottom-right-radius:12px;
        color: #fff;

        font-weight:700;
    }
`;
