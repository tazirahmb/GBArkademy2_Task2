import React, {Component} from 'react';
import {
    Card,
    CardItem,
    Left,
    Right,
    Text,
    Icon,
    List,
    ListItem,
    Thumbnail,
    View
} from 'native-base';
import propTypes from 'prop-types';

class CardListThreeLines extends Component {
    
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
                    <List>
                        {variabelData.map((data) =>
                        <ListItem key={data.toString()} Thumbnail>
                            <Thumbnail square source={data.Thumbnail} />
                            <View  style={{flexDirection: 'column', marginHorizontal: 8}}>
                                <Text>{data.Name}</Text>
                                <Text note>{data.Title}</Text>
                                <Text note>{data.YearStart} - {data.YearEnd} • {data.Time}</Text>
                            </View>
                        </ListItem>
                        )}
                    </List>
                </CardItem>
            </Card>
        )
    }
}

CardListThreeLines.propTypes = {
    CategoryName: propTypes.string.isRequired,
    variabelData: propTypes.array.isRequired
}

export default CardListThreeLines;