import styled from "styled-components";

export const CartPageContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3vh;
    padding: 0 2.5vw;
    margin-bottom: 6vh;
`;

export const CartProductsList = styled.div`
    width: 100%;
`

export const CartFinelly =  styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
    margin-bottom: 3vh;
`;

export const FinellyValues = styled.div`
    display: flex;
    gap: 1vw;

    h2{
        font-weight: 600;
    }

    h3{
        font-size: 1.67vw;
    }
`;

export const CartButtonBox = styled.div`
    width: 25%;
`;