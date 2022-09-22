import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { RouterProps } from "../../../App";
import { ProfileButton } from "../../components/ProfileButton";
import { issuers } from "../../utils/issuers";
import { 
    Container,
    Header,
    Title,
    Issuer,
    Name,
    Separator,
    Footer
 } from "./style";


 interface Issuer {
    id: string;
    name: string;
 }

 interface Props {
    issuer: Issuer; 
    setIssuer: (issuer: Issuer) => void;
    closeSelectIssuer: () => void;
 }

export function IssuerModal({ issuer, setIssuer, closeSelectIssuer} : Props, {navigation}: RouterProps) {
    const [ issuers, setIssuers ] = useState('');

    function handleIssuerSelect(issuer: Issuer) {
        setIssuer(issuer);
    }


    useEffect( () => {
        const endpoint = "http://10.0.2.2:3333/issuers/list";
        fetch(endpoint)
            .then(resposta => resposta.json())
            .then(json => setIssuers(json))
            .catch((error) => {console.log(error)})

    }, []);


    return (
        <Container>
            <Header>
                <Title>Emissor</Title>
            </Header>

            <FlatList
                data={issuers}
                style={{ flex: 1, width: '100%'}}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Issuer
                        onPress={ () => handleIssuerSelect(item)}
                        isActive={issuer.id === item.id}
                    >
                        <Name>{item.id}</Name>
                    </Issuer>
                )}
                ItemSeparatorComponent={() => <Separator/>}
            />

            <Footer>
                <ProfileButton title="Selecionar" onPress={closeSelectIssuer} />

            </Footer>

        </Container>

    );
}