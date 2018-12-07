import React, {Component} from 'react';
import {
    Container,
    Item,
    Input,
    Text,
    Button,
    Label
} from 'native-base';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class SignIn extends Component{
    render() {
        return(
            <Container style={{alignContent:'center'}}>
                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#0084BF', '#0B8997']}
                    style={{flex:1}}
                >
                    <View style={{margin: 10}}>
                        <Item floatingLabel>
                            <Label style={{color: 'white'}}>Email or Phone</Label>
                            <Input style={{color: 'white'}}/>
                        </Item>
                        <Item floatingLabel>
                            <Label style={{color: 'white'}}>Password</Label>
                            <Input style={{color: 'white'}} />
                        </Item>
                        <Button light bordered block last style={{marginTop: 24, marginBottom: 16}} onPress={() => this.props.navigation.navigate('TabScreen')}>
                            <Text>SIGN IN</Text>
                        </Button>
                        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>FORGOT PASSWORD?</Text>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>JOIN NOW</Text>
                        </View>
                    </View>
                </LinearGradient>
            </Container>
        )
    }
}