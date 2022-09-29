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
    Subtitle,
    Link
 } from "./style";



export function Login({navigation}: RouterProps) {
    
    useEffect(() => {
        navigation.getParent()?.setOptions({
          tabBarStyle: {
            display: "none"
          }
        });
        return () => navigation.getParent()?.setOptions({
          tabBarStyle: undefined
        });
      }, [navigation]);
      
    return (
        <Container>
            <Header>
                <Title> LOGO Verify ID</Title>
                <Title> Your ID in your hands</Title>
                <Title> Anywhere. Everywhere</Title>
            </Header>


            <FormWrapper>

                <LoginInput 
                    placeholder="Username"

                />
                <PwdInput 
                    placeholder="Password"
                />
                <ProfileButton 
                    title="Login"
                    onPress={async () => navigation.navigate('Home')}    
                />

                <Subtitle>Não tem uma conta?</Subtitle>
                <Link>Cadastre-se</Link>
            </FormWrapper>


        </Container>

    );
}