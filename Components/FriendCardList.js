import React, {Component} from 'react';
import {
    Text,
    Button,
    Thumbnail
} from 'native-base';
import {Col} from 'react-native-easy-grid';
import PropTypes from 'prop-types';

class FriendCardList extends Component {
    
    render() {

        const { thumbnail, Name, Title } = this.props;

        return(
            <Col style={{width: 177.5, borderWidth: 0.5, borderColor: '#AAA', alignItems: 'center', justifyContent:'center', paddingVertical: 16}}>
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

FriendCardList.PropTypes = {
    Thumbnail: PropTypes.object.isRequired,
    Name: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired
}

export default FriendCardList;