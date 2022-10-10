import React, { useEffect } from "react";
import { RouterProps } from "../../../App";
import { ProfileButton } from "../../components/ProfileButton";
import { 
    Container,
    Header,
    Title,
    FormWrapper,
    LoginInput,
    PwdInput,
    NewAccountWrapper,
    Subtitle,
    Link
 } from "./style";



export function RecoveryWallet({navigation}: RouterProps) {
      
    return (
        <Container>
            <Header>
                <Title> Insira abaixo para validação</Title>
            </Header>


            <FormWrapper>

                
            <LoginInput 
                    placeholder="Nome completo"

                />

                <LoginInput 
                    placeholder="Telefone"

                />
                <PwdInput 
                    placeholder="Email"
                />
                <ProfileButton 
                    title="Validar"
                    onPress={async () => navigation.navigate('Increment')}    
                />

            </FormWrapper>



        </Container>

    );
}