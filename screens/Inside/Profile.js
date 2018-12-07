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
    H1,
    H2
} from 'native-base';
import {Grid, Row, Col} from 'react-native-easy-grid';
import {Image} from 'react-native';
import {Education, Experience, Contact} from '../../Components/ArrayData';
import CardListThreeLines from '../../Components/CardListThreeLines';
import CardListTwoLines from '../../Components/CardListTwoLines';
import {Styles, ColorStyles} from '../../styles/Styles';

export default class Profile extends Component {
    render() {
        return(
            <Container style={Styles.container}>
                <Header noShadow>
                    <Left>
                        <Icon name='ios-person' style={{color: 'white'}}/>
                    </Left>
                    <Body>
                        <Title>Ta'zirah Marwan</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Image style={{position: "absolute"}} source={require('../../images/profile_bg.jpg')} />
                    <View>
                        <Card style={Styles.profileDescCard}>
                            <CardItem>
                                <Body  style={{alignItems: 'center'}}>
                                    <H1 style={{paddingTop: 40}}>Ta'zirah Marwan</H1>
                                    <Text>Learner at Grand Bootcamp</Text>
                                    <Text note>Arkademy</Text>
                                    <Text note>South Tangerang, Indonesia • 0 <Icon name='people' style={Styles.icon} /></Text>
                                </Body>
                            </CardItem>
                            </Card>
                        <Thumbnail
                            large
                            style={Styles.profilePicture}
                            source={require('../../images/ProfPic/profpic.png')} 
                        />
                    </View>
                    <View style={Styles.dashboardContainer}>
                        <Text style={{color: 'white'}}>Your Dashboard</Text>
                        <Text style={{color: 'white', fontSize: 12}}>Private to you</Text>
                        <Card style={{padding: 10}}>
                            <Grid>
                                <Col style={{alignItems: 'flex-start', justifyContent:'flex-start'}}>
                                    
                                        <H2 style={Styles.LinkText}>12</H2>
                                        <Text note style={{color: 'black'}}>viewed your profile</Text>
                                    
                                </Col>
                                <Col style={{alignItems: 'flex-start', justifyContent:'flex-start'}}>
                                        
                                        <H2 style={Styles.LinkText}>53</H2>
                                        <Text note style={{color: 'black'}}>Post views</Text>
                                    
                                </Col>
                                <Col style={{alignItems: 'flex-start', justifyContent:'flex-start'}}>
                                        <H2 style={Styles.LinkText}>196</H2>
                                        <Text note style={{color: 'black'}}>Search Appearance</Text>
                                    
                                </Col>
                            </Grid>
                        </Card>
                    </View>
                    
                    {/** work */}
                    <CardListThreeLines
                        CategoryName='Experience'
                        variabelData={Experience}
                    />
                    
                    {/** work */}
                    <CardListThreeLines
                        CategoryName='Education'
                        variabelData={Education}
                    />
                    
                    <CardListTwoLines 
                        CategoryName='Contact'
                        variabelData={Contact}
                    />
                </Content>
            </Container>
        )
    }
}