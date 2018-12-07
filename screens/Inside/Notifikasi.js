import React, {Component} from 'react';
import {
    Content,
    Container,
    Header,
    Left,
    Right,
    Icon,
    Input,
    Button,
    List,
    Thumbnail,
    Item,
    } from 'native-base';
import { notification } from '../../Components/ArrayData';
import NotificationList from '../../Components/NotificationList';
import {Styles} from '../../styles/Styles';

export default class Notifikasi extends Component {
    render() {
        return(
            <Container style={Styles.container}>
                <Header noShadow>
                    <Left>
                        <Thumbnail small source={require('../../images/ProfPic/profpic.png')} />
                    </Left>

                    <Item style={Styles.Searchbar}>
                        <Icon style={{marginLeft: 4}} name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                        
                    <Right>
                        <Button transparent>
                            <Icon name='ios-grid' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List style={{backgroundColor: 'white'}}>
                        {notification.map((data) =>
                            <NotificationList 
                                key={data.toString()}
                                thumbnail={data.Thumbnail}
                                Content={data.Text}
                                ButtonText={data.Button}
                            />    
                        )}
                    </List>
                </Content>
            </Container>
        )
    }
}