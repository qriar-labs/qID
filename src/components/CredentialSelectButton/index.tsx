import React from "react";
import { RouterProps } from "../../../App";

import { 
    Container,
    Credential,
    Icon
 } from "./style";

interface Props {
    title: string
    onPress: () => void;
}

export function CredentialSelectButton( {title, onPress}: Props, {navigation}: RouterProps) {
    return (
        <Container onPress={onPress}>
            <Credential>{title}</Credential>
            <Icon name="chevron-down" />

        </Container>

    );
}