import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
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
