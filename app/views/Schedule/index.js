/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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

class Schedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            data: [],
            avail: false
        };
    }

    getMoviesFromApiAsync = () => {
        fetch('http://9ec29001.ngrok.io/api/track')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                data: responseJson,
                avail: true
            })
        })
        .catch((error) => {
            console.error(error);
        });
    }

    getDuration = (lat,long) => {
        fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${this.state.latitude},${this.state.longitude}&destinations=${lat},${long}&key=AIzaSyAoWZ8oJA3UMwB8yhWlv4zNMBZbU9pGD9A`)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.rows.elements.duration.text
        })
        .catch((error) => {
            console.error(error);
        });
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
        this.getMoviesFromApiAsync();
    }
    
  render() {
    return (
      <Container>
                <Content>
                    { this.state.avail ?
                    (this.state.data && this.state.data.map ((row,index) => (
                        <TouchableNativeFeedback>
                            <ListItem>
                                <Text>{row.name}</Text>
                                <Text>2 minutes</Text>
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

export default Schedule;