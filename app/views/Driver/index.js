/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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

const Home = () => {
    return (
        <Container style={ styles.container }>
            <Content>
                <Text>Driver</Text>
            </Content>
        </Container>
    );
  }

export default Home;