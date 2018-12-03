import React, {Component} from 'react';
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    text
} from 'native-base';

export default class SignIn extends Component{
    render() {
        return(
            <Container style={{justifyContent:'center',alignContent:'center'}}>
                <Form>
                    <Item>
                        <Input placeholder="Email or Phone" />
                    </Item>
                    <Item last>
                        <Input placeholder="Password" />
                    </Item>
                </Form>
            </Container>
        )
    }
}