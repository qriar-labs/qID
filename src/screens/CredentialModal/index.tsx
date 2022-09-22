import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { RouterProps } from "../../../App";
import { ProfileButton } from "../../components/ProfileButton";
import { 
    Container,
    Header,
    Title,
    Credential,
    Name,
    Separator,
    Footer
 } from "./style";


 interface Credential {
    id: string;
    name: string;
    schema: string;
 }

 interface Props {
    credential: Credential; 
    setCredential: (credential: Credential) => void;
    closeSelectCredential: () => void;
 }


export function CredentialModal({ credential, setCredential, closeSelectCredential} : Props,{navigation}: RouterProps) {
    const [ credentialTypes, setCredentialTypes ] = useState('');

    function handleCredentialSelect(credential: Credential) {
        setCredential(credential)
    }


    useEffect( () => {
        const endpoint = "http://10.0.2.2:3333/issuer/id";
        fetch(endpoint)
            .then(resposta => resposta.json())
            .then(json => setCredentialTypes(json))
            .catch((error) => {console.log(error)})

    }, []);


    return (
        <Container>
            <Header>
                <Title>Credencial</Title>
            </Header>

            <FlatList
                data={credentialTypes}
                style={{ flex: 1, width: '100%'}}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Credential
                        onPress={() => handleCredentialSelect(item)}
                        isActive={credential.name === item.id}
                    >
                        <Name>{item.name}</Name>
                    </Credential>
                )}
                ItemSeparatorComponent={() => <Separator/>}
            />

            <Footer>
                <ProfileButton title="Selecionar" onPress={closeSelectCredential} />

            </Footer>

        </Container>

    );
}