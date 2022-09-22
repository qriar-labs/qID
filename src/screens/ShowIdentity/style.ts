import { FlatList, FlatListProps, TextInput } from "react-native";
import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons  } from '@expo/vector-icons';

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

export const Icon = styled(MaterialIcons )`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(80)}px;
`;

export const ShowIdentityWrapper = styled.View`
    flex: 1;
    align-items: center;
    padding: 24px;
    justify-content: space-between;
    //width: 100%;
`;

