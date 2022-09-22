import { RectButton } from 'react-native-gesture-handler';
import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
    width: 100%;
    background-color: ${({ theme}) => theme.colors.button};
    
    padding: 18px;
    border-radius: 5px;
    align-items: center;
    margin-bottom: 4px;
    
`;
export const Title = styled.Text`
    font-family: ${({ theme}) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;

    color: ${({ theme}) => theme.colors.shape};
`;