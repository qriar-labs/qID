import { FlatList, FlatListProps } from "react-native";
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
    font-family: ${({ theme }) => theme.fonts.regular}; 
`;

export const ProfileList = styled.View`
    flex: 1;
    align-items: center;
    padding: 24px;
    //width: 100%;
`;
