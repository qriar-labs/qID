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



export function Login({navigation}: RouterProps) {
    
    // useEffect(() => {
    //     navigation.getParent()?.setOptions({
    //       tabBarStyle: {
    //         display: "none"
    //       }
    //     });
    //     return () => navigation.getParent()?.setOptions({
    //       tabBarStyle: undefined
    //     });
    //   }, [navigation]);
      
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

            </FormWrapper>

            <NewAccountWrapper>
                <Subtitle>Não tem uma conta?</Subtitle>
                <Link
                    onPress={async () => navigation.navigate('AccountForm')}  
                >Cadastre-se</Link>
            </NewAccountWrapper>


        </Container>

    );
}