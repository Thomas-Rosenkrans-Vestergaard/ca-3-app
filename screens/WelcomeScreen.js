import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styles from '../styles.js';

export default class WelcomeScreen extends React.Component {

    render() {
        return (
            <ScrollView style={styles.screen}>
                <Text style={styles.screenHeader}>Welcome</Text>
                <Text style={styles.breadText}>
                    Welcome to our amazing <Text style={styles.bold}>React Native™</Text> application. 
                    You can't do much on this page, but if you use our amazing <Text style={styles.bold}>React Navigation™</Text> navigation system, 
                    you can visit the Fetch page. On the fetch page, data is retrieved from our amazing <Text style={styles.bold}>Tomcat™</Text>, <Text style={styles.bold}>Jersey™</Text> REST API.</Text>
            </ScrollView>
        );
    }
}