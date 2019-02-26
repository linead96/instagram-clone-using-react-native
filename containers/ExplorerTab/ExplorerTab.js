import React, { Component } from 'react';
import {Image} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Left, Body, Right, Title, Item, Input, Text, Card, CardItem, Thumbnail} from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Col, Row, Grid } from "react-native-easy-grid";

const bucks = require('../../assets/images/bucks.jpg');
const lebron = require('../../assets/images/lebron.jpg');
const harden = require('../../assets/images/harden.jpg');


export default class ExplorerTab extends Component {

    constructor() {
        super();
        this.state = {
          isReady: false
        };
      }
    

    async componentWillMount() {
        await Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }  

  render() {
    if (!this.state.isReady) {
        return <Expo.AppLoading />;
    }

    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="search" />
            <Input placeholder="Search" />
            <Icon name="qr-scanner" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
            <Grid>
                <Row>
                    <Col>
                        <Image source={bucks} style={{height: scale(180), width: verticalScale(110), margin: moderateScale(5), borderRadius: 5}}/>
                    </Col>
                    <Col>
                        <Image source={lebron} style={{height: scale(180), width: verticalScale(110), margin: moderateScale(5), borderRadius: 5}}/>
                    </Col>
                    <Col>
                        <Image source={harden} style={{height: scale(180), width: verticalScale(110), margin: moderateScale(5), borderRadius: 5}}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image source={bucks} style={{height: scale(180), width: verticalScale(110), margin: moderateScale(5), borderRadius: 5}}/>
                    </Col>
                    <Col>
                        <Image source={lebron} style={{height: scale(180), width: verticalScale(110), margin: moderateScale(5), borderRadius: 5}}/>
                    </Col>
                    <Col>
                        <Image source={harden} style={{height: scale(180), width: verticalScale(110), margin: moderateScale(5), borderRadius: 5}}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image source={bucks} style={{height: scale(180), width: verticalScale(110), margin: moderateScale(5), borderRadius: 5}}/>
                    </Col>
                    <Col>
                        <Image source={lebron} style={{height: scale(180), width: verticalScale(110), margin: moderateScale(5), borderRadius: 5}}/>
                    </Col>
                    <Col>
                        <Image source={harden} style={{height: scale(180), width: verticalScale(110), margin: moderateScale(5), borderRadius: 5}}/>
                    </Col>
                </Row>
            </Grid>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="home" />
            </Button>
            <Button active>
              <Icon name="search" />
            </Button>
            <Button active>
              <Icon name="add"/>
            </Button>
            <Button active>
              <Icon name="heart"/>
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}