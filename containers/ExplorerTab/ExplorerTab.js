import React, { Component } from 'react';
import {Image, StyleSheet} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Item, Input, Text, StyleProvider} from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { ScaledSheet } from 'react-native-size-matters';
import { Col, Row, Grid } from "react-native-easy-grid";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import getTheme from '../../native-base-theme/components'
import material from '../../native-base-theme/variables/material'

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
      <StyleProvider style = {getTheme(material)}>
      <Container style = {styles.container}>
        <Header searchBar rounded style = {styles.header}>
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
          <Container style={styles.content}>
            <Image source={bucks} style={styles2.img}/>
            <Image source={lebron} style={styles2.img}/>
            <Image source={harden} style={styles2.img}/>
            <Image source={bucks} style={styles2.img}/>
            <Image source={lebron} style={styles2.img}/>
            <Image source={harden} style={styles2.img}/>
            <Image source={bucks} style={styles2.img}/>
            <Image source={lebron} style={styles2.img}/>
            <Image source={harden} style={styles2.img}/>
          </Container>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="home" />
            </Button>
            <Button active>
              <Icon name="search" />
            </Button>
            <Button>
              <Icon name="add"/>
            </Button>
            <Button>
              <Icon name="heart"/>
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      </StyleProvider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight(),
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const styles2 = ScaledSheet.create({
  img: {
    height: '180@s', 
    width: '110@vs', 
    margin: '3@ms', 
    borderRadius: 5,
  }
});