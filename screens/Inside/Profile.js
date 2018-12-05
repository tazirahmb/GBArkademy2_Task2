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
    H1,
    H2
} from 'native-base';
import {Grid, Row, Col} from 'react-native-easy-grid';
import {Image} from 'react-native';
import {ColorStyles} from '../../styles/Styles';

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
                                    <Text note>South Tangerang, Indonesia • 0 <Icon name='people' style={{fontSize: 18, color: '#737373'}} /></Text>
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
                    <View style={{backgroundColor: '#344A57', padding: 10, marginVertical: 10}}>
                        <Text style={{color: 'white'}}>Your Dashboard</Text>
                        <Text note style={{color: 'white', fontSize: 12}}>Private to you</Text>
                        <Card style={{padding: 10}}>
                            <Grid>
                                <Col>
                                    <Left>
                                    <Row>
                                        <H2 style={{color: ColorStyles.lightBlue, fontWeight: 'bold'}}>0</H2>
                                    </Row>
                                    <Row>
                                        <Text note style={{color: '#000'}}>Who viewed your profile</Text>
                                    </Row>
                                    </Left>
                                </Col>
                                <Col>
                                    <Left>
                                        
                                    <Row>
                                        <H2 style={{color: ColorStyles.lightBlue, fontWeight: 'bold'}}>0</H2>
                                    </Row>
                                    <Row style={{alignItems: "flex-start"}}>
                                        <Text note style={{color: '#000'}}>Post views</Text>
                                    </Row>
                                    </Left>
                                </Col>
                                <Col>
                                    <Left>

                                    <Row>
                                        <H2 style={{color: ColorStyles.lightBlue, fontWeight: 'bold'}}>0</H2>
                                    </Row>
                                    <Row>
                                        <Text note style={{color: '#000'}}>Search Appearance</Text>
                                    </Row>
                                    </Left>
                                </Col>
                            </Grid>
                        </Card>
                    </View>
                    
                    {/** work */}
                    <Card style={{marginLeft: 16, marginTop: 8, marginRight: 16}}>
                        <CardItem Header style={{borderBottomColor: '#EEE', borderBottomWidth: 1}}>
                            <Left>
                                <Text>Experience</Text>
                            </Left>
                            <Right>
                                <Icon name='create' />
                            </Right>
                        </CardItem>
                        <CardItem cardBody>
                            <List>
                                <ListItem Thumbnail>
                                    <Thumbnail square source={require('../../images/profile_bg.jpg')} />
                                    <View  style={{flexDirection: 'column', marginHorizontal: 8}}>
                                        <Text>PT. Reston Bisnis Solusi</Text>
                                        <Text note>Freelance UI/UX Designer</Text>
                                        <Text note>Oct 2017 - Oct 2018 • 1 yr</Text>
                                    </View>
                                </ListItem>
                            </List>
                        </CardItem>
                    </Card>
                    
                    {/** edu */}
                    <Card style={{marginLeft: 16, marginTop: 8, marginRight: 16}}>
                        <CardItem Header style={{borderBottomColor: '#EEE', borderBottomWidth: 1}}>
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
                                    <View style={{flexDirection: 'column', marginHorizontal: 8}}>
                                        <Text>Politeknik Negeri Jakarta</Text>
                                        <Text note>D4 Teknik Multimedia dan Jaringan</Text>
                                        <Text note>2014 - 2018</Text>
                                    </View>
                                </ListItem>
                            </List>
                        </CardItem>
                    </Card>
                    <Card style={{marginLeft: 16, marginTop: 8, marginRight: 16}}>
                        <CardItem Header style={{borderBottomColor: '#EEE', borderBottomWidth: 1}}>
                            <Left>
                                <Text>Contact</Text>
                            </Left>
                            <Right>
                                <Icon name='create' />
                            </Right>
                        </CardItem>
                        <CardItem cardBody>
                            <List>
                                <ListItem thumbnail style={{padding: 8}}>
                                    <Thumbnail small square source={require('../../images/profpic.jpg')} />
                                    <View  style={{flexDirection: 'column', marginHorizontal: 8}}>
                                        <Text>Your Profile</Text>
                                        <Text note>https://www.linkedin.com/in/tazirahmb</Text>
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