import React, {Component} from 'react';
import {
    Text,
    Button,
    Thumbnail
} from 'native-base';
import {Col} from 'react-native-easy-grid';
import propTypes from 'prop-types';
import {Styles} from '../styles/Styles';

class FriendCardList extends Component {
    
    render() {

        const { thumbnail, Name, Title } = this.props;

        return(
            <Col style={Styles.friendCard}>
                <Thumbnail source={thumbnail} />
                <Text style={{textAlign: "center", fontWeight: 'bold'}}>{Name}</Text>
                <Text note numberOfLines={2} style={{textAlign: "center"}}>{Title}</Text>
                <Button small bordered style={{alignSelf: 'center', marginTop: 40}}>
                    <Text>CONNECT</Text>
                </Button>
            </Col>
        )
    }
}

FriendCardList.propTypes = {
    Thumbnail: propTypes.number,
    Name: propTypes.string.isRequired,
    Title: propTypes.string.isRequired
}

export default FriendCardList;