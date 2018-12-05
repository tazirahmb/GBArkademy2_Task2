import React, {Component} from 'react';
import {
    Text,
    List,
    ListItem,
    Thumbnail,
    View
} from 'native-base';
import PropTypes from 'prop-types';

class CardListTwoLines extends Component {
    
    render() {

        const { variabelData } = this.props;

        return(
                    <List>
                        {variabelData.map((data, key) =>
                        <ListItem Thumbnail>
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

CardListTwoLines.PropTypes = {
    variabelData: PropTypes.array.isRequired
}

export default CardListTwoLines;