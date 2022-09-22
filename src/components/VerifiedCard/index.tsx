import React from "react";
import { RouterProps } from "../../../App";

import { 
    Container,
    Header,
    Title,
    Data
} from "./styles";


export interface VerifiedCardProps {
    id: string,
    issuer: string,
    issued: string,
    type: string  
}

interface Props {
    data: VerifiedCardProps;
}

export function VerifiedCard( {data} : Props, {navigation}: RouterProps) {
    return (
        <Container>
            <Header>
                <Title>Issuer:</Title>
                <Data>{data.issuer}</Data>
                <Title>Tipo:</Title>
                <Data>{data.type}</Data>
                <Title>Data de emissão: </Title>
                <Data>{data.issued}</Data>
            </Header>
        </Container>
    );
}