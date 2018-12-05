import React, {Component} from 'react';
import {
    Text,
    View,
    Content,
    Container,
    Header,
    Left,
    Body,
    Right,
    Icon,
    Input,
    List,
    ListItem,
    Thumbnail,
    Item,
    Button} from 'native-base';

export default class Notifikasi extends Component {
    render() {
        return(
            <Container>
                <Header searchBar noShadow androidStatusBarColor='#016098'>
                    <Left>
                        <Thumbnail small source={require('../../images/splash1.jpg')} />
                    </Left>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Right>
                        <Icon name='grid'/>
                    </Right>
                </Header>
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                            <Thumbnail source={require('../../images/profpic.jpg')}/>

                            </Left>
                            <Body>

                            <Text>Kamin menemukan pekerjaan yang mungkin anda minati</Text>
                            <Button bordered>
                                <Text>LIHAT PERKERJAAN</Text>
                            </Button>
                            </Body>
                            <Right />
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}