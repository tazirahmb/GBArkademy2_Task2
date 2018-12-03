import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  ScrollView} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  Text,
  Button,
  Left,
  Body,
  Right,
  Icon
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Carousel from 'react-native-carousel';

const colorData = {
  white: '#FFFFFF',
  splashHeader: '#283E4B',
  splashBackground: '#344A57',
  statusBarColor: '#016098',
  lightBlue: '#1A8FC5'
}

export default class App extends Component {

  // splashComponent = {
  //   splashText = [
  //     'Share your professional profile',
  //     'Build relationships to unlock opportunity',
  //     'Stay informed on topics, industries and people you care about',
  //     'A more personal way to find jobs'
  //   ],
  //   spashImage = [
  //     './images/splash1.jpg',
  //     './images/splash2.jpg',
  //     './images/splash3.jpg',
  //     './images/splash4.jpg'
  //   ]
  // }

  render() {
    return (
      <Container style={styles.container}>
        <Header noShadow style={styles.Header} androidStatusBarColor={colorData.statusBarColor}>
          <Image
            style={styles.logo}
            source={require('./images/logo.png')}
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
                <Col style={styles.carouselChild}>
                  <Text style={{color: colorData.white, textAlign:'center'}}>Share your professional profile</Text>
                  <Image source={require('./images/splash1.jpg')}/>
                </Col>
                <Col style={styles.carouselChild}>
                  <Text style={{color: colorData.white, textAlign:'center'}}>Build relationships to unlock opportunity</Text>
                  <Image source={require('./images/splash2.jpg')}/>
                </Col>
                <Col style={styles.carouselChild}>
                  <Text style={{color: colorData.white, textAlign:'center'}}>Stay informed on topics, industries and people you care about</Text>
                  <Image source={require('./images/splash3.jpg')}/>
                </Col>
                <Col style={styles.carouselChild}>
                  <Text style={{color: colorData.white, textAlign:'center'}}>A more personal way to find jobs</Text>
                  <Image source={require('./images/splash4.jpg')}/>
                </Col>
            </Carousel>
              
          </Row>
          <Row size={1}>
            <Col style={styles.tombolTombol}>
              <Button iconLeft block light>
                <Icon style={{color: colorData.lightBlue}} name='logo-google' />
                <Text style={[styles.buttonText, {color: colorData.lightBlue}]}>JOIN WITH GOOGLE</Text>
              </Button>
              <Button block bordered light>
                <Text style={styles.buttonText}>JOIN NOW</Text>
              </Button>
            <TouchableWithoutFeedback>
                <Text style={{color: '#AAAAAA', fontSize: 11}}>Already have an account? 
                  <Text style={{color: colorData.lightBlue, fontSize: 11}}> Sign In</Text>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorData.splashBackground
  },
  Header: {
    backgroundColor: colorData.splashHeader,
    height: 45
  },
  carouselChild: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  splashImage: {
    scaleX: 1.5,
    scaleY: 1.5
  },
  logo: {
      alignSelf: 'center',
      scaleX: 0.75,
      scaleY: 0.75
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  splashImage: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  tombolTombol: {
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  buttonText: {
    fontSize: 20
  }
})