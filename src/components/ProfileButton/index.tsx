import React from "react";
import { Container, Title } from "./style";

interface Props {
    title: string;
    onPress: () => void;
}

export function ProfileButton({ title, onPress, ...rest} : Props) {
    return (
        <Container 
            onPress={onPress}
            {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}