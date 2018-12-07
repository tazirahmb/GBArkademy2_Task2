import React, {Component} from 'react';
import {
    Header,
    Title,
    Left,
    Item,
    Input,
    Icon,
    Right,
    Content,
    Container
} from 'native-base';
import { Messages } from '../../Components/ArrayData';
import ListTwoLines from '../../Components/ListTwoLines';
import {Styles, ColorStyles} from '../../styles/Styles';

export default class Messaging extends Component {
    render() {
        return(
            <Container style={Styles.container}>
                <Header noShadow>
                    <Left>
                        <Title>Messaging</Title>
                    </Left>
                    <Right/>
                </Header>
                <Content>
                    <Header
                        searchBar
                        noShadow
                        style={Styles.messagingSearchBar} androidStatusBarColor={ColorStyles.statusBarColor}>
                        <Item>
                            <Icon name='search'/>
                            <Input placeholder='Search message' />
                            <Icon name='more'/>
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