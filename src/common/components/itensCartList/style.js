import { printIntrospectionSchema } from "graphql";
import styled from "styled-components";
import { backgroundSelectedItemColor, mainColor, primaryColor } from "../../foundation/variables";

export const ItemsCartListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid ${backgroundSelectedItemColor};
    margin-bottom: 3vh;
`;


export const ItemDetailsLeft = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1vh;
`;

export const ItemDetailsRight = styled.div`
    width: auto;
    display: flex;
`;

export const DetailsRightQuantity = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    svg{
        cursor: pointer;
        width: 60%;
    }
`
export const ItemDetailsRightGallery = styled.div`
    width: auto;
    display: flex;
    justify-content: center;
    align-itens: center;
    position: relative;

    img{
        width: 150px;
    }

    button{
        color: ${mainColor};
        background: ${primaryColor};
        padding: 2.5px 5px;
        border: none;
        cursor: pointer;
    }

    .back{
        position: absolute;
        bottom: 5%;
        right: 20%;
    }

    .next{
        position: absolute;
        bottom: 5%;
        right: 5%;
    }

    .hide{
        display: none;
    }
`;

export const AreYouSureContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: red;
`;