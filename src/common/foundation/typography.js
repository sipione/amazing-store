import styled from "styled-components";
import { h1FontSize, h2FontSize, h3FontSize, paragraphFontSize, paragraphRobotoFontFamily, titleFontFamily } from "./variables";

export const TitleRalewayH1 = styled.h1`
    font-family: ${titleFontFamily};
    font-size: ${h1FontSize};
    font-weight: 400;
    margin: 0;
`;

export const TitleRalewayH2 = styled.h2`
    font-family: ${titleFontFamily};
    font-size: ${h2FontSize};
    font-weight: 400;
`;

export const TitleRalewayH3 = styled.h3`
    font-family: ${titleFontFamily};
    font-size: ${h3FontSize};
    font-weight: 400;
`;

export const ParagraphGeneral = styled.p`
    font-size: ${paragraphFontSize};
    font-weight: 400;
`;

export const ParagraphRoboto = styled.p`
    font-family: ${paragraphRobotoFontFamily};
    font-size: 1.25vw;
    font-weight: 700;
`;