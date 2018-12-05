import React, {Component} from 'react';
import {
    Card,
    CardItem,
    Thumbnail,
    Text,
    Icon,
    Body
} from 'native-base';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-native-easy-grid';

class StatusCard extends Component {

    render() {
        
        const {ProfPic, Name, Follower, DatePosted, StatusContent, Likes, Comments} = this.props;

        return(
            <Card>
                <CardItem>
                    <Grid>
                        <Col size={1}>
                            <Thumbnail square source={ProfPic} />
                        </Col>
                        <Col size={4}>
                            <Row>
                                <Text style={{fontWeight: 'bold'}}>{Name}</Text>
                            </Row>
                            <Row>
                                <Text note>{Follower} Pengikut</Text>
                            </Row>
                            <Row>
                                <Text note>{DatePosted}</Text>
                            </Row>
                        </Col>
                    </Grid>
                </CardItem>
                
                <CardItem>
                    <Body>
                        <Text>{StatusContent}</Text>
                            {/*images here*/}
                    </Body>
                </CardItem>
                            
                <CardItem>                   
                    <Grid>
                        <Row>
                            <Text note style={{paddingBottom: 5}}>{Likes} likes • {Comments} Comments</Text>
                        </Row>
                        <Row style={{borderTopWidth: 1, borderTopColor: '#EEE', justifyContent: 'center'}}>
                            <Col style={{paddingTop: 5, alignItems: 'center'}}>
                                <Text style={{color: '#737373'}}><Icon name='grid' style={{fontSize: 20, color: '#737373'}}/> Like</Text>
                            </Col>
                            <Col style={{paddingTop: 5, alignItems: 'center'}}>
                                <Text style={{color: '#737373'}}><Icon name='grid' style={{fontSize: 20, color: '#737373'}}/> Comment</Text>
                            </Col>
                            <Col style={{paddingTop: 5, alignItems: 'center'}}>
                                <Text style={{color: '#737373'}}><Icon name='grid' style={{fontSize: 20, color: '#737373'}}/> Share</Text>
                            </Col>
                        </Row>
                    </Grid>
                </CardItem>
            </Card>
        )
    }
}

StatusCard.PropTypes = {
    ProfPic: PropTypes.object.isRequired,
    Name: PropTypes.string.isRequired,
    Follower: PropTypes.string.isRequired,
    DatePosted: PropTypes.string.isRequired,
    StatusContent: PropTypes.string.isRequired,
    Likes: PropTypes.string,
    Comments: PropTypes.string
}

export default StatusCard;