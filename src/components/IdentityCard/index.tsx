import { NavigationContainerProps } from "@react-navigation/native";
import React from "react";
import { RouterProps } from "../../../App";
import { IdentitiesProps } from "../../screens/IncreaseIdentity";

import { 
    Container,
    Header,
    Title
} from "./styles";


interface Props extends IdentitiesProps {
    onPress: () => {};
}

export function IdentityCard( { name, onPress} : Props, {navigation}: RouterProps) {
    return (
        <Container 
            onPress={onPress} 
        >
            <Header>
                <Title>{name}</Title>
            </Header>
        </Container>
    );
}