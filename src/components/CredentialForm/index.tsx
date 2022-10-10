import React, { useState } from "react";
import { Modal } from "react-native";
import { RouterProps } from "../../../App";
import { ProfileButton } from "../../components/ProfileButton";
import { CredentialModal } from "../../screens/CredentialModal";
import { IssuerModal } from "../../screens/IssuerModal";
import { CredentialSelectButton } from "../CredentialSelectButton";
import { IssuerSelectButton } from "../IssuerSelectButton";
import { 
    Container,
    Header,
    Title,
    Wrapper,
    SelectWrapper,
    Text
 } from "./style";



export function CredentialForm({navigation}: RouterProps) {
    const [issuerModalOpen, setIssuerModalOpen] = useState(false);
    const [issuer, setIssuer] = useState(
        { id: 'Emissor...', name: 'Issuer...'}
    );
    
    const [credentialModalOpen, setCredentialModalOpen] = useState(false);
    const [credential, setCredential] = useState(
        { id: 'issuer', name: 'Credencial...', schema: ''}
    );

    function handleCloseSelectIssuer() {
        setIssuerModalOpen(false);
    }

    function handleOpenSelectIssuer() {
        setIssuerModalOpen(true);
    }

    function handleCloseSelectCredential() {
        setCredentialModalOpen(false);
    }

    function handleOpenSelectCredential() {
        setCredentialModalOpen(true);
    }

    function initIssuance() {
        const endpoint = "http://10.0.2.2:3333/initIssuance";

        const _data = {
            did: "",
            issuerID: issuer.id,
            schemaIds: [ credential.schema ]
        }

        fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(_data),
            
        })
            .then(resposta => resposta.json())
            .then(json => console.log(json))
            .catch((error) => {console.log(error)})

        navigation.navigate('VerifyIdentity'); 
    }

    return (
        <Container>
            <Header>
                <Title>Adicionar credencial</Title>
            </Header>


            <Wrapper>
                
                <SelectWrapper>

                    <Text>Selecione um emissor</Text>
                    <IssuerSelectButton 
                        title={issuer.id}
                        onPress={handleOpenSelectIssuer}
                    />

                    <Text>Selecione um tipo de credencial</Text>
                    <CredentialSelectButton 
                        title={credential.name}
                        onPress={handleOpenSelectCredential}
                    />
                </SelectWrapper>


                

                <ProfileButton 
                    title="Solicitar"
                    onPress={initIssuance}    
                />
            </Wrapper>

            <Modal visible={issuerModalOpen}>
                <IssuerModal 
                    issuer={issuer}
                    setIssuer={setIssuer}
                    closeSelectIssuer={handleCloseSelectIssuer}
                />
            </Modal>

            <Modal visible={credentialModalOpen}>
                <CredentialModal 
                    credential={credential}
                    setCredential={setCredential}
                    closeSelectCredential={handleCloseSelectCredential}
                />
            </Modal>

        </Container>

    );
}