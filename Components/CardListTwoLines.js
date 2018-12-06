import React, {Component} from 'react';
import {
    Card,
    CardItem,
    Left,
    Right,
    Text,
    Icon
} from 'native-base';
import propTypes from 'prop-types';
import ListTwoLines from './ListTwoLines';

class CardListTwoLines extends Component {
    
    render() {

        const { CategoryName, variabelData } = this.props;

        return(
            <Card style={{marginLeft: 16, marginTop: 8, marginRight: 16}}>
                <CardItem Header style={{borderBottomColor: '#EEE', borderBottomWidth: 1}}>
                    <Left>
                        <Text>{CategoryName}</Text>
                    </Left>
                    <Right>
                        <Icon name='create' />
                    </Right>
                </CardItem>
                <CardItem cardBody>
                    <ListTwoLines 
                        variabelData={variabelData}
                    />
                </CardItem>
            </Card>
        )
    }
}

CardListTwoLines.propTypes = {
    CategoryName: propTypes.string.isRequired,
    variabelData: propTypes.array.isRequired
}

export default CardListTwoLines;