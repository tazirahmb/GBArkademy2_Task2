import React, {Component} from 'react';
import {
    Text,
    Button,
    Thumbnail,
    ListItem,
    Left,
    Body,
    Right,
    Icon
} from 'native-base';
import propTypes from 'prop-types';
import {ColorStyles} from '../styles/Styles';

class NotificationList extends Component {
    
    render() {

        const { thumbnail, Content, ButtonText } = this.props;

        return(
            <ListItem thumbnail>
                <Left style={{alignSelf: 'flex-start', marginTop: 16}}>
                    <Thumbnail square source={thumbnail}/>
                </Left>
                <Body style={{marginHorizontal: 8}}>
                    <Text>{Content}</Text>
                    <Button bordered style={{marginVertical: 16, borderColor: ColorStyles.lightBlue}}>
                        <Text style={{color: ColorStyles.lightBlue}}>{ButtonText}</Text>
                    </Button>
                </Body>
                <Right style={{justifyContent: 'flex-start'}}>
                    <Icon name='more' />
                </Right>
            </ListItem>
        )
    }
}

//cek error di file ini

NotificationList.propTypes = {
    Thumbnail: propTypes.number,
    Content: propTypes.string.isRequired,
    ButtonText: propTypes.string.isRequired,
}

export default NotificationList;