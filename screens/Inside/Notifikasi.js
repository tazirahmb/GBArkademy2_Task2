import React, {Component} from 'react';
import {
    Content,
    Container,
    Header,
    Left,
    Right,
    Icon,
    Input,
    List,
    Thumbnail,
    Item,
    } from 'native-base';
import { notification } from '../../Components/ArrayData';
import NotificationList from '../../Components/NotificationList';
import {Styles, ColorStyles} from '../../styles/Styles';

export default class Notifikasi extends Component {
    render() {
        return(
            <Container style={Styles.container}>
                <Header
                    searchBar
                    noShadow
                    style={Styles.Header}
                    androidStatusBarColor={ColorStyles.statusBarColor}
                >
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