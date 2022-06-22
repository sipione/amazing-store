import styled from "styled-components";
import { mainColor, primaryColor, secondaryColor } from "../../foundation/variables";


export const AttributesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
    margin-top: 1vh;
`

export const AttributesItemBox = styled.div`
    width: 100%;
    display: flex;
    gap: 1vw;
    transform: scale(${props=>props.minicart ? 0.8 : 1});
    transform-origin: 0% 0%;

    .selected{
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

export const ItemBoxValues = styled.div`
    background: ${props=>props.bg};
    width: ${props=>props.text ? "auto" : "15px"};
    height: ${props=>props.text ? "auto" : "15px"};
    padding: ${props=>props.text ? "2.5px 7.5px" : "0"};
    border: 1px solid ${primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    p{
        display: ${props=>props.text ? "block" : "none"};
    }
`;