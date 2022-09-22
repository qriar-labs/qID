import { NavigationContainerProps } from "@react-navigation/native";
import React from "react";

import { 
    Container,
    Header,
    Title,
    Icon,
} from "./styles";

interface IProps {
    title: string;
    type: 'showIdentity' | 'addProfile' | 'shareLink' | 'verify';
    onPress: () => {};
}

const icon = {
    showIdentity: 'qrcode',
    addProfile: 'user-plus',
    shareLink: 'share-square-o',
    verify: 'check-square-o',
}

export function HighlightCard( { title, type, onPress, ...rest} : IProps) {
    return (
        <Container 
            onPress={onPress}
            {...rest}   
        >
            <Header>
                <Icon 
                    name={icon[type]} 
                    type={type}
                />
                <Title>{title}</Title>
            </Header>
        </Container>
    );
}