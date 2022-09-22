import { FlatList, FlatListProps, TextInput } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const ScoreWrapper = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
`;
export const ScoreText = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.bold}; 
    color: ${({ theme }) => theme.colors.text_dark};
`;
export const ScoreBox = styled.View`
    background-color: ${({ theme }) => theme.colors.success_light};
    padding: 5px;
    margin-left: 4px;
    margin-top: 2px;
`;
export const ScoreNumber = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.bold}; 
    color: ${({ theme }) => theme.colors.text_dark};
`;

