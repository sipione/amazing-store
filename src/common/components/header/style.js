import { selectHttpOptionsAndBodyInternal } from "@apollo/client";
import styled from "styled-components";
import { backgroundSelectedItemColor, mainColor, primaryColor, secondaryColor } from "../../foundation/variables";

//define spaces left and right to centralize the logo
const WidthLeftAndRight = "25%";

//start css style for the header component
export const HeaderContainer = styled.header`
    width: 100%;
    padding: 2.5vh 2.5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    :before{
        width: ${props=>props.open ? "100%": props.bag ? "100%" : "0%"};
        height: ${props=>props.open ? "100vh": props.bag ? "100vh" : "0vh"};
        transition: 0.5s;
        content: "";
        position: absolute;
        top:100%;
        right:0;
        background: ${primaryColor};
        opacity: 0.6;
        z-index:2;
    }


    .logo{
        width: 3vw;
        height: auto;
    }
`;

//navigation style starts
export const HeaderNavigation = styled.nav`
    width: ${WidthLeftAndRight};
    display: flex;
    gap: 3vw;
`

export const NavigationLinkBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    transition: 0.5s;
    color: ${props=>props.selected ? secondaryColor : primaryColor};
    cursor: pointer;
    margin-bottom: 2.5vh;

    span{
        position: absolute;
        bottom:-100%;
        width:${props=>props.selected ? "100%" : "0%"};
        border-top: 2px solid ${secondaryColor};
        transition: 0.5s;
    }

    :hover{
        color: ${secondaryColor};
        span{
            width: 125%;
        }
    }

`
//navigation style ends


export const HeaderBoxRight = styled.div`
    width: ${WidthLeftAndRight};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5vw;
`

//currency div style starts
export const BoxRightCurrencyDiv = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    cursor: pointer;
    
    .arrow{
        position: absolute;
        right: 10%;
        top: 50%;
        transition: 0.5s;
        transform: ${props=>props.open ? "translateY(-52%) rotateZ(-180deg)": "translateY(-52%)"};
    }
`;

export const CurrencyOptions = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    top: 100%;
    right: 0;
    transition: 0.5s;
    height: ${props=>props.open ? `${props.height}vh`: "0%"};
    overflow: hidden;
    background: ${mainColor};
    z-index:3;
`;

export const OptionsValuesBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    background: ${props=>props.bg ? backgroundSelectedItemColor: ""};
    transition: 0.5s;
    cursor: pointer;
    padding: 1.5vh 0;

    :hover{
        background: ${backgroundSelectedItemColor};
        transform: scale(1.15);
    }
`;
//currency div style ends

//cart div style starts
export const BoxRightCart = styled.div`
    min-width: 30%;
    width: auto;
    display: flex;
    align-items: start;
    flex-direction: column;
    position: relative;
    
    svg{
        width: 2vw;
        height: auto;
        cursor: pointer;
    }

    .number{
        opacity: ${props=>props.empty ? 0 : 1};
        transition: 0.5s;
        position: absolute;
        top: -50%;
        left: 20%;
        background: ${primaryColor};
        color: ${mainColor};
        border-radius: 50%;
        width: 1.5vw;
        height: 1.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
//cart div style ends

//bag div style starts
export const CartBagPreview = styled.div`
    width: 40vw;
    height: ${props=> props.bag ? "60vh" : "0vh"};
    overflow:${props=>props.bag ? "auto": "hidden"};
    max-height: 60vh;
    display: flex;
    flex-direction: column;
    gap: 3vh;
    
    position: absolute;
    top: 7vh;
    right: -2.5vw;
    padding: ${props=> props.bag ? "2.5vh" : "0vh"};
    background: ${mainColor};
    transition: 0.5s;
    z-index: 2;
`;

export const BagButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        width: 48%;
    }
`;
//bag div style ends