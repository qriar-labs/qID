import React from "react";
import { RouterProps } from "../../../App";
import { ProfileButton } from "../../components/ProfileButton";
import { 
    Container,
    Header,
    Title,
    ShareLinkWrapper,
    LinkInput
 } from "./style";



export function ShareLink({navigation}: RouterProps) {
    return (
        <Container>
            <Header>
                <Title>Insira o link compartilhado no campo abaixo</Title>
            </Header>


            <ShareLinkWrapper>
                <LinkInput 
                    placeholder="URL"
                />
                <ProfileButton 
                    title="Finalizar"
                    onPress={async () => navigation.navigate('Home')}    
                />
            </ShareLinkWrapper>

        </Container>

    );
}