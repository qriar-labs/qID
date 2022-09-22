import React from "react";
import { RouterProps } from "../../../App";
import { HighlightCard } from "../../components/HighlightCard";

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserData,
    Icon,
    ScoreWrapper,
    ScoreText,
    ScoreBox,
    ScoreNumber,
    IncrementButton,
    HighlightCards,
    SettingsButton

} from './styles'


export function Dashboard({navigation}: RouterProps) {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{uri: 'https://avatars.githubusercontent.com/u/40345582?v=4' }} />
                        <User>
                            <UserData>H2 User</UserData>
                            <UserData>(61) 99999-9999</UserData>
                            <UserData>h2@qriar.com</UserData>
                        </User>
                    </UserInfo>

                    <SettingsButton onPress={async () => navigation.navigate('Home')}>
                        <Icon name="settings" />
                    </SettingsButton>
                </UserWrapper>
                
            </Header>
            
            <ScoreWrapper>
                <ScoreText>Seu score atual:</ScoreText>
                <ScoreBox>
                    <ScoreNumber>100</ScoreNumber>
                </ScoreBox>
            </ScoreWrapper>

            <IncrementButton
                onPress={async () => navigation.navigate('Increment')}
            > Incrementar identidade </IncrementButton>

            <HighlightCards>
                <HighlightCard 
                    title="Minhas credenciais" 
                    type="verify"
                    onPress={async () => navigation.navigate('VerifyIdentity')}
                    
                />

                <HighlightCard 
                    title="Apresentar identidade" 
                    type="showIdentity"
                    onPress={async () => navigation.navigate('ShowIdentity')}
                    
                />
                <HighlightCard 
                    title="Cadastrar perfil de uso" 
                    type="addProfile"
                    onPress={async () => navigation.navigate('ManageProfile')}
                />
                <HighlightCard 
                    title="Compartilhar via link" 
                    type="shareLink"
                    onPress={async () => navigation.navigate('ShareLink')}
                    
                />

            </HighlightCards>
        </Container>
    ); 
}
