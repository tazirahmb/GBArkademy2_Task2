import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Image,} from 'react-native';
import {
  Container,
  Header,
  Text,
  Button,
  Icon
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Carousel from 'react-native-carousel';
import {splashComponent} from '../Components/ArrayData';
import {Styles, ColorStyles} from '../styles/Styles';

export default class SplashScreen extends Component {

  render() {
    return (
      <Container style={Styles.container}>
        <Header noShadow style={Styles.Header} androidStatusBarColor={ColorStyles.statusBarColor}>
          <Image
            style={Styles.logo}
            source={require('../images/logo.png')}
          />
        </Header>
        <Grid style={{margin: 10}}>
          <Row size={3} style={{paddingTop: 10}}>
            <Carousel

              indicatorAtBottom={true}
              delay={3000}
              indicatorOffset={0}
              indicatorColor='#FFFFFF'
              indicatorSize={30}
              inactiveIndicatorColor='#AAA'
              indicatorSpace={15}
              animate={false}
            >
            {splashComponent.map((data, key) => 
              <Col style={Styles.carouselChild}>
                <Text style={{color: ColorStyles.white, textAlign:'center'}}>{data.text}</Text>
                <Image source={data.Image}/>
              </Col>
            )}
            </Carousel>
              
          </Row>
          <Row size={1}>
            <Col style={Styles.tombolTombol}>
              <Button iconLeft block light onPress={() => this.props.navigation.navigate('TabScreen')}>
                <Icon style={{color: ColorStyles.lightBlue}} name='logo-google' />
                <Text style={[Styles.buttonText, {color: ColorStyles.lightBlue}]}>JOIN WITH GOOGLE</Text>
              </Button>
              <Button block bordered light onPress={() => this.props.navigation.navigate('TabScreen')}>
                <Text style={Styles.buttonText}>JOIN NOW</Text>
              </Button>
            <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate('Sign_In')}
            >
                <Text style={{color: '#AAAAAA', fontSize: 11}}>Already have an account? 
                  <Text style={{color: ColorStyles.lightBlue, fontSize: 11}}> Sign In</Text>
                </Text>
            </TouchableWithoutFeedback>
            </Col>            
          </Row>
        </Grid>
        {/* <Footer /> */}
      </Container>
    )
  }
}