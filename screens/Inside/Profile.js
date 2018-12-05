import React, {Component} from 'react';
import {
    Text,
    View,
    Container,
    Header,
    Left,
    Icon,
    Body,
    Right,
    Title,
    Content,
    Thumbnail,
    Card,
    CardItem,
    ListItem,
    List,
    H1
} from 'native-base';
import {Image} from 'react-native';

export default class Profile extends Component {
    render() {
        return(
            <Container>
                <Header>
                    <Left>
                        <Icon name='person' style={{color: 'white'}}/>
                    </Left>
                    <Body>
                        <Title>Ta'zirah Marwan</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Image style={{position: "absolute"}} source={require('../../images/profile_bg.jpg')} />
                    <View>
                        <Card style={{marginTop: 100, marginLeft: 10, marginRight: 10}}>
                            <CardItem>
                                <Body  style={{alignItems: 'center'}}>
                                    <H1 style={{paddingTop: 40}}>Ta'zirah Marwan</H1>
                                    <Text>Learner at Grand Bootcamp</Text>
                                    <Text note>Arkademy</Text>
                                    <Text note>South Tangerang, Indonesia • 0 <Icon note name='people' /></Text>
                                </Body>
                            </CardItem>
                            </Card>
                        <Thumbnail style={{
                            alignSelf: 'center',
                            elevation: 5,
                            scaleX: 1.5,
                            scaleY: 1.5,
                            top: 48,
                            position: 'absolute',
                            borderWidth: 3,
                            borderColor: 'white',
                        }} large source={require('../../images/profpic.jpg')} />
                    </View>
                    <View style={{backgroundColor: '#344A57', padding: 10, marginTop: 10}}>
                        <Text style={{color: 'white'}}>Your Dashboard</Text>
                        <Text note style={{color: 'white'}}>Private to you</Text>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Text>0</Text>
                                    <Text>Who viewed your profile</Text>
                                </Left>
                                <Body>
                                    <Text>0</Text>
                                    <Text>Post views</Text>
                                </Body>
                                <Right>
                                    <Text>0</Text>
                                    <Text>Search Appearance</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>
                    <Card style={{marginLeft: 16, marginTop: 8, marginRight: 8}}>
                        <CardItem Header>
                            <Left>
                                <Text>Education</Text>
                            </Left>
                            <Right>
                                <Icon name='create' />
                            </Right>
                        </CardItem>
                        <CardItem cardBody>
                            <List>
                                <ListItem Thumbnail>
                                    <Thumbnail square source={require('../../images/profile_bg.jpg')} />
                                    <View  style={{flexDirection: 'column'}}>
                                        <Text>Politeknik Negeri Jakarta</Text>
                                        <Text note>D4 Teknik Multimedia dan Jaringan</Text>
                                        <Text note>2014 - 2018</Text>
                                    </View>
                                </ListItem>
                            </List>
                        </CardItem>
                        <CardItem Footer>
                            {/** tombol */}
                        </CardItem>
                    </Card>
                    <Card style={{marginLeft: 16, marginTop: 8, marginRight: 8}}>
                        <CardItem Header>
                            <Left>
                                <Text>Contact</Text>
                            </Left>
                            <Right>
                                <Icon name='create' />
                            </Right>
                        </CardItem>
                        <CardItem cardBody>
                            <List>
                                <ListItem thumbnail>
                                    <Thumbnail small square source={require('../../images/profpic.jpg')} />
                                    <View  style={{flexDirection: 'column'}}>
                                        <Text>Your Profile</Text>
                                        <Text style={{borderBottomColor: '#AAA', borderBottomWidth: 1}}>https://www.linkedin.com/in/tazirahmb</Text>
                                    </View>
                                </ListItem>
                            </List>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}