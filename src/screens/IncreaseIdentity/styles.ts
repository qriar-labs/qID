import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { FlatList, FlatListProps, Platform } from "react-native";
import { BorderlessButton, RectButton} from 'react-native-gesture-handler'

import { IdentitiesProps } from ".";

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

export const IdentitiesList = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false, 
    contentContainerStyle: { paddingHorizontal: 24 }
})`

`;


export const ProfileList = styled.View`
    padding: 24px;
`;
