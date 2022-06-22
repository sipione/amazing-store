import styled from 'styled-components'
import { ParagraphGeneral } from '../../common/foundation/typography';
import { mainColor, outOfStockColor, primaryColor, secondaryColor } from '../../common/foundation/variables';

//typography starts
export const ShopPagePriceParagraph = styled(ParagraphGeneral)`
  font-weight: 700;
`
//typography ends

export const ShopPageContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2.5vw;
`;

export const ContainerProductsBox = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const ProductCard = styled.div`
    width: 26%;
    display: ${props=>props.category ? "flex" : "none"};
    flex-direction: column;
    padding: 2.5%;
    transition: 0.5s;
    margin-bottom: 3vh;
    position: relative;
    
    .cartwhite{
        opacity:0;
        width: 50px;
        height: 50px;
        background: ${props=>props.inStock ? secondaryColor : outOfStockColor};
        display: flex;
        justify-content: center; 
        align-items: center;
        transition: 0.5s;
        border-radius: 50%;

        position: absolute;
        right: 10%;
        bottom: 15%;
    }

    

    :hover{
        box-shadow: 0 5px 10px ${primaryColor};

        .cartwhite{
            opacity: 1;
        }
    }

    .stock{
        content:"";
        background: ${mainColor};
        display: ${props => props.inStock ? "none" : "flex"};
        justify-content: center;
        align-items: center;
        color:${outOfStockColor};
        opacity: 0.6;

        position:absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }
`;

export const CardImage = styled.div`
    width: 100%;
    height: 40vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3vh;

    img{
        max-height:100%;
        max-width:100%;
    }
`

export const CardDescription = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    h3{
        transition: 0.5s;
    }


    :hover{ 
        h3{
            color: ${secondaryColor};
        }
    }
`;