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
import {ColorStyles} from '../../styles/Styles';
import FriendCardList from '../../Components/FriendCardList';
import {friendRecommendation} from '../../Components/ArrayData';

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
                                <Grid>
                                    <Col style={{alignItems: 'center', justifyContent:'center'}}>
                                        <Text>103</Text>
                                        <Text note style={{fontSize: 12}}>View Connection</Text>
                                    </Col>
                                    <Col style={{alignItems: 'center', justifyContent:'center'}}>
                                        <Icon name='search'/>
                                        <Text note style={{fontSize: 12}}>Find nearby (OFF)</Text>
                                    </Col>
                                    <Col style={{alignItems: 'center', justifyContent:'center'}}>
                                        <Icon name='contact'/>
                                        <Text note style={{fontSize: 12}}>Add contacts</Text>
                                    </Col>
                                </Grid>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>No pending invitation</Text>
                                </Body>
                                <Right>
                                    <Text style={{color: ColorStyles.lightBlue}}>MANAGE ALL</Text>
                                </Right>
                            </CardItem>
                        </Card>

                        <Card>

                        <Grid style={{backgroundColor: 'white'}}>
                            <Row>
                                <Text style={{margin: 8}}>People you may know</Text>
                            </Row>
                            <Row style={{flexWrap: 'wrap'}}>
                                {friendRecommendation.map((data) =>
                                    <FriendCardList
                                        key={data.toString()}
                                        thumbnail={data.Thumbnail}
                                        Name={data.Name}
                                        Title={data.Title}
                                    />    
                                )}
                            </Row>
                        </Grid>
                        </Card>
                    </Content>
                    </Container>
        )
    }
}