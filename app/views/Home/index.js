/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  AppRegistry,
  View,
  Image
} from 'react-native';
import { 
  Container, 
  Content,
  Footer,
  FooterTab,
  Button, 
  Text,
} from 'native-base';
import styles from './styles';
import img from './../../images/bus.png'

const Home = () => {
    return (
        <Container style={ styles.container }>
            <Content>
                <Image style={ styles.img } source={ img } />
                <Button 
                    block
                    style={styles.btn}
                    onPress={() => Actions.Driver()}
                >
                    <Text>Driver</Text>
                </Button>
                <Button 
                    block style={styles.btn}
                    style={styles.btn}
                    onPress={() => Actions.User()}
                >
                    <Text>User</Text>
                </Button>
            </Content>
        </Container>
    );
  }

export default Home;