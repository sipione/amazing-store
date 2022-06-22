import styled from "styled-components";
import { mainColor, primaryColor, secondaryColor } from "../../foundation/variables";

export const ButtonComponent = styled.button`
    width: 100%;
    border: ${props=>props.variant ? `1px solid ${primaryColor}` : "none"};
    background: ${props=>props.variant ? mainColor : secondaryColor};
    padding: 5% 0;
    cursor: pointer;
    color: ${props=> props.variant ? primaryColor : mainColor};
    transition: 0.5s;

    :hover{
        box-shadow: 0px 5px 10px ${primaryColor};
    }

    :checked{
        transform: scale(0.81);
    }
`