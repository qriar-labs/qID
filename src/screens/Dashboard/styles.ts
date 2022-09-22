import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Platform } from "react-native";
import { BorderlessButton, RectButton} from 'react-native-gesture-handler'


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(20)}px;

    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items: flex-start;
`;

export const UserWrapper = styled.View`
    width: 100%;
    
    padding: 0 24px;
    margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + RFValue(28) : RFValue(28)}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;

`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;

    border-radius: 10px;
`;


export const User = styled.View`
    margin-left: 17px;
    margin-top: 10px;
`;

export const UserData = styled.Text`
    color: ${({ theme }) => theme.colors.shape};

    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.regular}; 
`;

export const SettingsButton = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(24)}px;
`;

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

export const IncrementButton = styled.Text`
    padding: 10px 2px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 8px;
    border-radius: 100px;


    background-color: ${({ theme }) => theme.colors.button}; 
    
    font-family: ${({ theme }) => theme.fonts.bold}; 
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;
    text-transform: uppercase;

`;

export const HighlightCards = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false, 
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    width: 100%;
    margin-top: ${RFPercentage(4)}px;
`;