import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";



export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(20)}px;

    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};

    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.regular}; 
`;

export const Datalist = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    
`;


export const Item = styled.Text``;

export const Options = styled.View`
    //justify-content: space-between;
`;


export const Form = styled.View`
    flex: 1;
    width: 100%;

    padding: 24px;
    justify-content: space-between;
`;
