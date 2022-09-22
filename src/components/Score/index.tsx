import React from "react";
import { RouterProps } from "../../../App";
import { ProfileButton } from "../../components/ProfileButton";
import { 
    ScoreWrapper,
    ScoreText,
    ScoreBox,
    ScoreNumber,
 } from "./style";



export function ShareLink() {
    return (
        <ScoreWrapper>
            <ScoreText>Seu score atual:</ScoreText>
            <ScoreBox>
                <ScoreNumber>100</ScoreNumber>
            </ScoreBox>
        </ScoreWrapper>
    );
}