/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import {
  AppRegistry,
  View,
  Image,
  TextInput
} from 'react-native';
import { 
  Container, 
  Content,
  Footer,
  FooterTab,
  Button, 
  Text,
  Picker,
  Form,
  Input,
  Item as FormItem,
} from 'native-base';
const Item = Picker.Item;
class Driver extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected1: "1",
            selected2: "1",
            busId: undefined,
            latitude: null,
            longitude: null,
            error: null
        };
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
    }

    onSubjectChange(value) {
        console.log("value1", value)
        this.setState({
            selected1: value
        });
    }

    onTrackChange(value) {
        console.log("value2", value)
        this.setState({
            selected2: value
        });
    }

    handleInput() {
        fetch('http://9ec29001.ngrok.io/api/bus', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
            body: JSON.stringify({
                "type_id": this.state.selected1,
                "track_id": this.state.selected2,
                "lat": this.state.latitude,
                "long": this.state.longitude,
            }),
        }).then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                busId: responseJson.id,
            })
        }).then(
            Actions.Home()
        )
        .catch((error) => { console.error(error); });
    }

    render() {
        return (
        <Container style={ styles.container }>
            <Content style={ styles.content }>
                <Text>Pilih Subject</Text>
                <Picker
                    block
                    mode="dropdown"
                    selectedValue={this.state.selected1}
                    onValueChange={this.onSubjectChange.bind(this)}
                >
                    <Item label="Transjakarta" value="1" />
                    <Item label="Jakarta Tour Bus" value="2" />
                    <Item label="Angkutan Umum" value="3" />
                </Picker>
                <Text>Pilih Track</Text>
                <Picker
                    block
                    mode="dropdown"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onTrackChange.bind(this)}
                >
                    <Item label="Grogol - PGC" value="1" />
                    <Item label="Grogol - Sdipi" value="2" />
                    <Item label="Grogol - JCC" value="3" />
                </Picker>
                <Button
                    block
                    style={styles.btn}
                    onPress={() => this.handleInput()}
                >
                    <Text>Input</Text>
                </Button>
                <Text>Latitude: {this.state.latitude}</Text>
                <Text>Longitude: {this.state.longitude}</Text>
            </Content>
        </Container>
        );
    }
  }

export default Driver;