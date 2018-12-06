import React, {Component} from 'react';
import {
    Text,
    Button,
    Thumbnail
} from 'native-base';
import {Col} from 'react-native-easy-grid';
import propTypes from 'prop-types';
import {Styles, ColorStyles} from '../styles/Styles';

class FriendCardList extends Component {
    
    render() {

        const { thumbnail, Name, Title } = this.props;

        return(
            <Col style={Styles.friendCard}>
                <Thumbnail source={thumbnail} />
                <Text style={{fontWeight: 'bold'}}>{Name}</Text>
                <Text note numberOfLines={2} style={{textAlign: "center"}}>{Title}</Text>
                <Button small bordered style={{alignSelf: 'center', marginTop: 40}}>
                    <Text>CONNECT</Text>
                </Button>
            </Col>
        )
    }
}

//cek error di file ini

FriendCardList.propTypes = {
    Thumbnail: propTypes.number,
    Name: propTypes.string.isRequired,
    Title: propTypes.string.isRequired
}

export default FriendCardList;