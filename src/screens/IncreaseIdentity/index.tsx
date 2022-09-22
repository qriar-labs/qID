import React from "react";
import { RouterProps } from "../../../App";
import { IdentityCard } from "../../components/IdentityCard";
import { ProfileButton } from "../../components/ProfileButton";


import {
     Container,
     Header,
     Title,
     IdentitiesList,
     ProfileList
    } from "./styles";


export interface IdentitiesProps {
    name: string;
}
    

export function IncreaseIdentity({navigation}: RouterProps) {

    const identities = [
        { name: 'Google', path: 'Home'},
        { name: 'GOV.BR', path: 'Home'},
        { name: 'Biometria Facial', path: 'Home'},
        { name: 'Impressões digitais', path: 'Home'},
        { name: 'Documento de Identidade', path: 'Home'},
        { name: 'E-mails', path: 'Home'},
        { name: 'Celular', path: 'Home'},
        { name: 'Passaporte', path: 'Home'},    
    ]

    return (
        <Container>
            <Header>
                <Title>Escolha a fonte que deseja adicionar:</Title>
            </Header>
        
            <IdentitiesList>
                <IdentityCard name='Google' onPress={async () => navigation.navigate('Home')} />    
                <IdentityCard name='GOV.BR'  onPress={async () => navigation.navigate('Home')}/>    
                <IdentityCard name='Biometria Facial' onPress={async () => navigation.navigate('Home')} />    
                <IdentityCard name='Impressões digitais' onPress={async () => navigation.navigate('Home')}/>    
                <IdentityCard name='Documento de Identidade'  onPress={async () => navigation.navigate('Home')}/>    
                <IdentityCard name='E-mails'  onPress={async () => navigation.navigate('Home')}/>    
                <IdentityCard name='Celular'  onPress={async () => navigation.navigate('Home')}/>    
                <IdentityCard name='Passaporte' onPress={async () => navigation.navigate('Home')}/>    
            </IdentitiesList>

            <ProfileList>
                <ProfileButton
                    title="Finalizar"
                    onPress={async () => navigation.navigate('Home')}
                    
                />
            </ProfileList>
        </Container>
    );
}