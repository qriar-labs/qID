import styled, { css } from "styled-components/native";
import { Feather, FontAwesome } from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";


export const Container = styled(TouchableOpacity)`
    background-color: ${({ theme }) =>  theme.colors.shape};

    width: ${RFValue(300)}px;
    border-radius: 10px;

    padding: 19px 23px;
    padding-bottom: ${RFValue(20)}px;
    margin-top: 5px;
    
`;

export const Header = styled.View`

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;

    color: ${({ theme }) => theme.colors.text_dark};
    padding: 5px;
`;

export const Icon = styled(FontAwesome)`
    font-size: ${RFValue(35)}px;
    color: ${({theme}) => theme.colors.text_dark};
    margin: 10px;
 
`;

export const Footer = styled.View``;
