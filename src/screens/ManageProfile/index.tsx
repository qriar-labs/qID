import React from "react";
import { RouterProps } from "../../../App";
import { ProfileButton } from "../../components/ProfileButton";
import { 
    Container,
    Header,
    Title,
    ProfileList
 } from "./style";


export interface ProfileProps {
    name: string;
}

export function ManageProfile({navigation}: RouterProps) {
    const data: ProfileProps[] = [
        {
            name: 'Basico'
        },
        {
            name: 'Completo'
        },
        {
            name: 'Personalizado'
        },
    
    ]

    return (
        <Container>
            <Header>
                <Title>Gerenciar perfis de uso</Title>
            </Header>

            <ProfileList>
                <ProfileButton 
                    title="Básico"
                    onPress={async () => navigation.navigate('FakeQRCode')} 
                />
                <ProfileButton 
                    title="Completo"
                    onPress={async () => navigation.navigate('FakeQRCode')}    
                />
                <ProfileButton 
                    title="Personalizado"
                    onPress={async () => navigation.navigate('Profile')}
                 />      
            </ProfileList>

        </Container>

    );
}