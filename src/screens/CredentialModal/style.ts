import { FlatList, FlatListProps, TextInput } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



interface CredentialProps {
    isActive: boolean
 }

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

export const Credential = styled.TouchableOpacity<CredentialProps>`
    width: 100%;
    padding: ${RFValue(15)}px;

    flex-direction: row;
    align-items: center;

    background-color: ${({ isActive, theme }) =>
        isActive ? theme.colors.button : theme.colors.background
    }

`;

export const Name = styled.Text`
    
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular}; 
`;

export const Separator = styled.View`
    height: 1px;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
    width: 100%;
    padding: 24px
`;

