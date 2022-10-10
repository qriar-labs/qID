import { FlatList, FlatListProps, TextInput } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

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
    font-family: ${({ theme }) => theme.fonts.medium}; 
`;

export const FormWrapper = styled.View`
    padding: 24px;
`

export const LoginInput = styled(TextInput)`
    width: 100%;
    padding: 16px 18px;

    font-family: ${({ theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color: ${({ theme}) => theme.colors.text_dark};
    background-color: ${({ theme}) => theme.colors.shape};
    border-radius: 5px;

    margin-bottom: 8px;
`;
export const PwdInput = styled(TextInput).attrs({ type: 'password'} )`
    width: 100%;
    padding: 16px 18px;

    font-family: ${({ theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color: ${({ theme}) => theme.colors.text_dark};
    background-color: ${({ theme}) => theme.colors.shape};
    border-radius: 5px;

    margin-bottom: 8px;
`;

export const NewAccountWrapper = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Subtitle = styled.Text`
    color: ${({ theme}) => theme.colors.text_dark};
    font-family: ${({ theme}) => theme.fonts.regular};
    margin-bottom: 3px;
`;

export const Link = styled.Text`
    color: ${({ theme}) => theme.colors.text_dark};
    font-family: ${({ theme}) => theme.fonts.bold};
    text-decoration: underline;
`;

