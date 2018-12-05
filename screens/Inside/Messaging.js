import React, {Component} from 'react';
import {
    Text,
    View,
    ListItem,
    Header,
    Title,
    Left,
    Item,
    Input,
    Icon,
    Right,
    Body,
    Content,
    Container,
    List,
    Thumbnail} from 'native-base';
import { Messages } from '../../Components/ArrayData';
import ListTwoLines from '../../Components/ListTwoLines';

export default class Messaging extends Component {
    render() {
        return(
            <Container>
                <Header>
                    <Left>
                        <Title>Messaging</Title>
                    </Left>
                    <Right/>
                </Header>
                <Content>
                    <Header searchBar noShadow>
                        <Item>
                            <Icon name='search'/>
                            <Input placeholder='Search message' />
                            <Icon name='setting'/>
                        </Item>
                    </Header>
                    <ListTwoLines
                        variabelData={Messages}
                    />
                </Content>
            </Container>
        )
    }
}