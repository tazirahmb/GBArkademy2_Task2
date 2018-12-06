import React, {Component} from 'react';
import {
    Container,
    Header,
    Content,
    Left,
    Right,
    Button,
    Icon,
    Thumbnail,
    Input,
    Item
} from 'native-base';
import StatusCard from '../../Components/StatusCard';
import {statusFeed} from '../../Components/ArrayData';
import {Styles, ColorStyles} from '../../styles/Styles';

export default class Feed extends Component {

    render() {
        return(
                <Container style={Styles.container}>
                    <Header
                        searchBar
                        noShadow
                        style={Styles.Header}
                        androidStatusBarColor={ColorStyles.statusBarColor}
                    >
                        <Left>
                            <Thumbnail small source={require('../../images/splash1.jpg')} />
                        </Left>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Search" />
                            <Icon name="ios-people" />
                        </Item>
                        <Right>
                            <Button transparent>
                                <Icon name='list'/>
                            </Button>
                            <Button transparent>
                                <Icon name='grid'/>
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        {statusFeed.map((data) =>
                            <StatusCard
                                key={data.toString()}
                                ProfPic={data.ProfPic}
                                Name={data.Name}
                                Follower={data.Follower}
                                DatePosted={data.DatePosted}
                                StatusContent={data.StatusContent}
                                Likes={data.Likes}
                                Comments={data.Comments}
                            />
                        )}
                    </Content>
                </Container>
        )
    }
}