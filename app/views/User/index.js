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
  Image,
  TouchableNativeFeedback
} from 'react-native';
import { 
  Container, 
  Content,
  Footer,
  FooterTab,
  Button, 
  Text,
  List,
  ListItem
} from 'native-base';
import styles from './styles';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busData : [],
            avail : false
        };
    }

    getMoviesFromApiAsync = () => {
        fetch('http://9ec29001.ngrok.io/api/subject')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                busData: responseJson,
                avail: true
            })
        })
        .catch((error) => {
            console.error(error);
        });
    }

    componentWillMount() {
        this.getMoviesFromApiAsync();
    }

    render() {
        return (
            <Container>
                <Content>
                    { this.state.avail ?
                    (this.state.busData && this.state.busData.map ((row,index) => (
                        <TouchableNativeFeedback
                            onPress={() => Actions.Schedule()}
                        >
                            <ListItem>
                                <Text>{row.name}</Text>
                            </ListItem>
                        </TouchableNativeFeedback>
                    )))
                    : 
                    (<ListItem>
                        <Text></Text>
                    </ListItem>)}
                </Content>
            </Container>
        );
    }
}

export default User;