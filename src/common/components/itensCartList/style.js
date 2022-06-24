import { printIntrospectionSchema } from "graphql";
import styled from "styled-components";
import { TitleRalewayH2, TitleRalewayH3 } from "../../foundation/typography";
import { backgroundSelectedItemColor, h2FontSize, h3FontSize, mainColor, paragraphFontSize, primaryColor } from "../../foundation/variables";

//typography starts
export const ItemBrandText = styled(TitleRalewayH2)`
    font-size: ${props=>props.minicart ? h3FontSize : h2FontSize};
    font-weight: 700;
`;

export const ItemNameText = styled(ItemBrandText)`
    font-weight: 400;
`;

export const ItemPriceText = styled(TitleRalewayH3)`
    font-size: ${props=>props.minicart ? paragraphFontSize : h3FontSize};
    font-weight: 700;
`
//typography ends


export const ItemsCartListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid ${backgroundSelectedItemColor};
    margin-bottom: 3vh;
    a{
        width: 40%;
    }
`;


export const ItemDetailsLeft = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${props=>props.minicart ? "1vh" : "2vh"};
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
    align-items: center;
    position: relative;

    img{
        width: ${props=>props.minicart ? "150px" : "200px"};
        height: auto;
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