import React, {Component} from 'react';
import {
    Text,
    View,
    Icon,
    Header,
    Container,
    Left,
    Body,
    Right,
    Button,
    Input,
    Item,
    Thumbnail,
    Content,
    CardItem,
    Card} from 'native-base';
import {Grid, Row, Col} from 'react-native-easy-grid';

export default class Friends extends Component {
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
                        <Card>
                            <CardItem>
                                <Left>
                                    <Text>103</Text>
                                    <Text>View Connection</Text>
                                </Left>
                                <Body>
                                    <Icon name='search'/>
                                    <Text>Find nearby (OFF)</Text>
                                </Body>
                                <Right>
                                    <Icon name='contact'/>
                                    <Text>Add contacts</Text>
                                </Right>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Left>
                                    <Text>No pending invitation</Text>
                                </Left>
                                <Right>
                                    <Text>MANAGE ALL</Text>
                                </Right>
                            </CardItem>
                        </Card>

                        <Grid style={{backgroundColor: 'white'}}>
                            <Row>
                                <Text>People yo may know</Text>
                            </Row>
                            <Row>
                                <Col style={{borderWidth: 0.5, borderColor: '#AAA', justifyContent:'center', alignContent: 'center'}}>
                                    <View style={{marginBottom: 20}}>  
                                        <Thumbnail source={require('../../images//profpic.jpg')} />
                                        <Text style={{fontWeight: 'bold'}}>Astrarry Nugroho</Text>
                                        <Text note numberOfLines={2}>Customer Service Agents, Export at Maersk Line</Text>
                                    </View>
                                    <Button bordered>
                                        <Text>CONNECT</Text>
                                    </Button>
                                </Col>
                                <Col style={{borderWidth: 0.5, borderColor: '#AAA'}}>
                                      
                                        <Thumbnail source={require('../../images//profpic.jpg')} />
                                        <Text style={{fontWeight: 'bold'}}>Astrarry Nugroho</Text>
                                        <Text note numberOfLines={2}>Customer Service Agents, Export at Maersk Line</Text>
                                    
                                    <Button bordered style={{margin: 10}}>
                                        <Text>CONNECT</Text>
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{borderWidth: 0.5, borderColor: '#AAA', justifyContent:'center', alignContent: 'center'}}>
                                    <View style={{marginBottom: 20}}>  
                                        <Thumbnail source={require('../../images//profpic.jpg')} />
                                        <Text style={{fontWeight: 'bold'}}>Astrarry Nugroho</Text>
                                        <Text note numberOfLines={2}>Customer Service Agents, Export at Maersk Line</Text>
                                    </View>
                                    <Button bordered>
                                        <Text>CONNECT</Text>
                                    </Button>
                                </Col>
                                <Col style={{borderWidth: 0.5, borderColor: '#AAA'}}>
                                      
                                        <Thumbnail source={require('../../images//profpic.jpg')} />
                                        <Text style={{fontWeight: 'bold'}}>Astrarry Nugroho</Text>
                                        <Text note numberOfLines={2}>Customer Service Agents, Export at Maersk Line</Text>
                                    
                                    <Button bordered style={{margin: 10}}>
                                        <Text>CONNECT</Text>
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{borderWidth: 0.5, borderColor: '#AAA', justifyContent:'center', alignContent: 'center'}}>
                                    <View style={{marginBottom: 20}}>  
                                        <Thumbnail source={require('../../images//profpic.jpg')} />
                                        <Text style={{fontWeight: 'bold'}}>Astrarry Nugroho</Text>
                                        <Text note numberOfLines={2}>Customer Service Agents, Export at Maersk Line</Text>
                                    </View>
                                    <Button bordered>
                                        <Text>CONNECT</Text>
                                    </Button>
                                </Col>
                                <Col style={{borderWidth: 0.5, borderColor: '#AAA'}}>
                                      
                                        <Thumbnail source={require('../../images//profpic.jpg')} />
                                        <Text style={{fontWeight: 'bold'}}>Astrarry Nugroho</Text>
                                        <Text note numberOfLines={2}>Customer Service Agents, Export at Maersk Line</Text>
                                    
                                    <Button bordered style={{margin: 10}}>
                                        <Text>CONNECT</Text>
                                    </Button>
                                </Col>
                            </Row>
                        </Grid>
                    </Content>
                    </Container>
        )
    }
}