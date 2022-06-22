import styled from "styled-components";
import { mainColor, primaryColor, secondaryColor } from "../../common/foundation/variables";


export const ProductPageContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding:  3vh 2.5vw;
`;

export const ContainerMiniaturesBox = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    gap: 3vh;
    max-height: 78vh;

    img{
        width: 90%;
        transition: 0.5s;
        cursor: pointer;

        :hover{
            transform: scale(1.1);
        }
    }
`;

export const ContainerMainImg = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;

    img{
        max-width: 100%;
        max-height: 78vh;
    }
`;

export const ContainerProductDetail = styled.div`
    width: 30%;
    max-height: 78vh;
    display: flex;
    flex-direction: column;
`
export const DetailsTitles = styled.div`
    margin-bottom: 6vh;

    h2{
        font-weight: 600;
    }
`;

export const DetailsAttributes = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3vh;
    margin-bottom: 3vh;
`

export const AttributesItemsBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

export const ItemBoxValues = styled.div`
    background: ${props=>props.bg};
    width: ${props=>props.text ? "auto" : "25px"};
    height: ${props=>props.text ? "auto" : "25px"};
    border: 1px solid ${primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin:3vh 0;

    input{
        display: none;
    }

    label{
        cursor: pointer;
        padding: ${props=>props.text ? "5px 15px" : "13px 13px"};
        width:100%;
        transition: 0.5s;

        p{
            display: ${props=>props.text ? "block" : "none"};
        }
    }

    input:checked + label{
        background: ${props=>props.text ? primaryColor : ""};
        color: ${mainColor};

        :before{
            display: ${props=>props.text ? "none": ""};
            content: "";
            border: 2px solid ${secondaryColor};
            position: absolute;
            top: -5px;
            bottom: -5px;
            left: -5px;
            right: -5px;
        }
    }
`;

export const DetailPrice = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    gap:3vh;
    margin-bottom: 3vh;
`;

export const DetailButtonBox = styled.div`
    width: 100%;
`;

export const DetailsDescription = styled.div`
    margin-top: 3vh;
`;