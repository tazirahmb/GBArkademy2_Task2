import React, {Component} from 'react';
import {
    Text,
    List,
    ListItem,
    Thumbnail,
    View
} from 'native-base';
import propTypes from 'prop-types';

class CardListTwoLines extends Component {
    
    render() {

        const { variabelData } = this.props;

        return(
            <List style={{backgroundColor: 'white'}}>
                {variabelData.map((data) =>
                    <ListItem key={data.toString()} Thumbnail>
                        <Thumbnail square source={data.Thumbnail} />
                        <View  style={{flexDirection: 'column', marginHorizontal: 8}}>
                            <Text>{data.Title}</Text>
                            <Text note>{data.Content}</Text>
                        </View>
                    </ListItem>
                )}
            </List>
        )
    }
}

CardListTwoLines.propTypes = {
    variabelData: propTypes.array.isRequired
}

export default CardListTwoLines;