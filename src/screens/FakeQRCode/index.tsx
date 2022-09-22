import React from "react";
import { RouterProps } from "../../../App";
import qrcode from '../../global/assets/images/qriar.png';

import { 
    Container,
    Header,
    Title,
    Wrapper,
    Image
 } from "./style";



export function FakeQRCode({navigation}: RouterProps) {
    return (
        <Container>
            <Header>
                <Title>Gerar identidade</Title>
            </Header>

            <Wrapper>

                <Image
                    source={qrcode}
                    resizeMode="center"
                />

            </Wrapper>
            

        </Container>

    );
}