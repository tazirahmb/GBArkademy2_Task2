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
                    <List>
                        <ListItem Thumbnail>
                            <Thumbnail source={require('../../images/profile_bg.jpg')} />
                                <View  style={{flexDirection: 'column'}}>
                                    <Text>Politeknik Negeri Jakarta</Text>
                                    <Text note>D4 Teknik Multimedia dan Jaringan</Text>
                                </View>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}