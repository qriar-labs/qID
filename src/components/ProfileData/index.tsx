import React, { useState } from "react";
import { Switch } from "react-native";
import { RouterProps } from "../../../App";
import { ProfileButton } from "../ProfileButton";
import { 
    Container,
    Header,
    Title,
    Form,
    Options,
    Datalist,
    Item
} from "./style";

export function ProfileData({navigation}: RouterProps) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <Container>
            <Header>
                <Title>
                    Selecione os dados que deseja compartilhar
                </Title>
            </Header>


            <Form>
                <Options>
                    <Datalist>
                        <Item> Biometria facial</Item>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            
                        />
                    </Datalist>
                    <Datalist>
                        <Item> Impressões digitais</Item>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            
                        />
                    </Datalist>
                </Options>

                <ProfileButton 
                    title="Salvar"
                    onPress={async () => navigation.navigate('FakeQRCode')}
                    />


            </Form>
        </Container>
    )
}