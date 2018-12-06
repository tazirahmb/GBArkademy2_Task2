import React, {Component} from 'react';
import {
    Card,
    CardItem,
    Thumbnail,
    Text,
    Icon,
    Body
} from 'native-base';
import propTypes from 'prop-types';
import {Grid, Row, Col} from 'react-native-easy-grid';
import {Styles, ColorStyles} from '../styles/Styles';

class StatusCard extends Component {

    render() {
        
        const {
            ProfPic,
            Name,
            Follower,
            DatePosted,
            StatusContent,
            Likes,
            Comments
        } = this.props;

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
                        <Row style={Styles.statusAction}>
                            <Col style={{paddingTop: 5, alignItems: 'center'}}>
                                <Text style={Styles.statusActionText}><Icon name='grid' style={Styles.icon}/> Like</Text>
                            </Col>
                            <Col style={{paddingTop: 5, alignItems: 'center'}}>
                                <Text style={Styles.statusActionText}><Icon name='grid' style={Styles.icon}/> Comment</Text>
                            </Col>
                            <Col style={{paddingTop: 5, alignItems: 'center'}}>
                                <Text style={Styles.statusActionText}><Icon name='grid' style={Styles.icon}/> Share</Text>
                            </Col>
                        </Row>
                    </Grid>
                </CardItem>
            </Card>
        )
    }
}

StatusCard.propTypes = {
    ProfPic: propTypes.number.isRequired,
    Name: propTypes.string.isRequired,
    Follower: propTypes.number.isRequired,
    DatePosted: propTypes.string.isRequired,
    StatusContent: propTypes.string.isRequired,
    Likes: propTypes.number,
    Comments: propTypes.number
}

export default StatusCard;