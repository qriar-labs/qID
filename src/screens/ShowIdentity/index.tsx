import React from "react";
import { RouterProps } from "../../../App";
import { ProfileButton } from "../../components/ProfileButton";
import { 
    Container,
    Header,
    Title,
    ShowIdentityWrapper,
    Icon
 } from "./style";



export function ShowIdentity({navigation}: RouterProps) {
    return (
        <Container>
            <Header>
                <Title>Ler QRCode</Title>
            </Header>

            <ShowIdentityWrapper>
                <Icon name="qr-code-scanner" />
                <ProfileButton 
                    title="Iniciar"
                    onPress={async () => navigation.navigate('ManageProfile')}    
                />

            </ShowIdentityWrapper>

        </Container>

    );
}