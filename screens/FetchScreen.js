import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { Table, TableWrapper, Rows, Row, Cell, } from 'react-native-table-component';

import styles from '../styles.js';
import urls from '../urls.js';

export default class FetchScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = { result: null };
    }

    componentDidMount() {
        this.page(1);
    }

    page = (pageNumber) => {
        if (pageNumber < 1)
            return;


        fetch(urls.hearthstone + "paginated/20/" + pageNumber)
            .then(response => response.json())
            .then(result => {
                this.setState({ result });
            })
    }

    render() {

        const { result } = this.state;

        return (
            <ScrollView style={styles.screen}>
                <Text style={styles.screenHeader}>Fetch</Text>
                <Text style={styles.breadText}>Here you can fetch data about Hearthstone cards.</Text>
                {this.renderTable()}
                {result == null ? null :
                    <View style={styles.padBottom}>
                        <View style={styles.padBottom}>
                            <Button
                                onPress={() => this.page(result.pageNumber - 1)}
                                disabled={result.pageNumber == 1}
                                title="Previous page" />
                        </View>
                        <View style={styles.padBottom}>
                            <Button
                                onPress={() => this.page(result.pageNumber + 1)}
                                disabled={this.isLastPage()}
                                title="Next page" />
                        </View>
                    </View>
                }
            </ScrollView>
        );
    }

    isLastPage = () => {

        const {result} = this.state;
        if(result == null)
            return false;


        return result.pageNumber == Math.ceil(result.total / 20);
    }

    renderTable = () => {

        if (this.state.result === null)
            return null;

        const columns = ["Name", "Text"];
        const data = this.state.result.results.map(result => {
            return [result.name, result.text];
        })

        return (
            <Table style={styles.padBottom} borderStyle={{ borderWidth: 2 }}>
                <Row data={columns} />
                <Rows data={data} />
            </Table>
        );
    }
}