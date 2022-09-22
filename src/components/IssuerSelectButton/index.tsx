import React from "react";
import { RouterProps } from "../../../App";

import { 
    Container,
    Issuer,
    Icon
 } from "./style";

interface Props {
    title: string
    onPress: () => void;
}

export function IssuerSelectButton( {title, onPress}: Props, {navigation}: RouterProps) {
    return (
        <Container onPress={onPress}>
            <Issuer>{title}</Issuer>
            <Icon name="chevron-down" />

        </Container>

    );
}