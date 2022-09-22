import React, {useEffect, useState} from "react";
import { RouterProps } from "../../../App";
import { ProfileButton } from "../../components/ProfileButton";
import { VerifiedCard, VerifiedCardProps } from "../../components/VerifiedCard";
import { 
    Container,
    Header,
    Title,
    SearchBar,
    Wrapper,
    IdentityList
 } from "./style";

 import { api } from '../../services/api';


// export const fakeIdentities: VerifiedCardProps[] = [
//      { 'name': 'Atestado de saúde', 'origin': 'Clinica credenciada', 'limitDate': '01/01/2023'},
//      { 'name': 'Credencial de participação', 'origin': 'Qriar', 'limitDate': '01/01/2023'},
// ]

export interface DataListProps extends VerifiedCardProps {
    //id: string;
}

export function VerifyIdentity({navigation}: RouterProps) {
    const [ credentials, setCredentials ] = useState('');

    useEffect( () => {
        // async function listCredentials() {
        //     try {
        //         const response = await api.get('/credentials/list')
        //         console.log(response)
        //     } catch (error) {
        //         console.log(JSON.stringify(error))
        //     }
                   
        // }

        // listCredentials() 


        const endpoint = "http://10.0.2.2:3333/credentials/list";
        fetch(endpoint)
            .then(resposta => resposta.json())
            .then(json => setCredentials(json))
            .catch((error) => {console.log(error)})
    }, []);

    //console.log(credentials)

    return (
        <Container>
            <Header>
                <Title>Gerenciar credenciais</Title>
            </Header>

            <Wrapper>
                <SearchBar placeholder="Pesquisar..." />
                <IdentityList 
                    data={credentials}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => 
                    <VerifiedCard data={item} />}
                />



                <ProfileButton title="Adicionar credencial" onPress={() => navigation.navigate('CredentialForm')}></ProfileButton>
            </Wrapper>

        </Container>

    );
}