import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback} from 'react-native';
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

const colorData = {
  white: '#FFFFFF',
  splashHeader: '#283E4B',
  splashBackground: '#344A57',
  statusBarColor: '#016098',
  lightBlue: '#1A8FC5'
}

export default class App extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <Header noShadow style={styles.Header} androidStatusBarColor={colorData.statusBarColor}>
          <Image
            style={styles.logo}
            source={require('./images/logo.png')}
          />
        </Header>
        <Content contentContainerStyle={styles.content}>
            <View styles={styles.splashImage}>
              <Text style={{color: colorData.white}}>test</Text>
            </View>
            <View styles={styles.tombolTombol}>
              <Button large iconLeft block light>
                <Icon name='logo-google' />
                <Text style={{color: colorData.lightBlue}}>JOIN WITH GOOGLE</Text>
              </Button>
              <Button large block bordered light>
                <Text>JOIN NOW</Text>
              </Button>
              <TouchableWithoutFeedback>
                <Text style={{color: colorData.white}}>Already have an account? 
                  <Text style={{color: colorData.lightBlue}}> Sign In</Text>
                </Text>
              </TouchableWithoutFeedback>
            </View>
        </Content>
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
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})