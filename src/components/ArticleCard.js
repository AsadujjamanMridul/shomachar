import React from 'react';
import { Text, ListItem, Body, Button, Icon } from 'native-base';
import { StyleSheet, View, Image, Share } from 'react-native'
import TimeAgo from '../components/Time'


export default function ArticleCard({ data, handleDetailsButton }) {

    const handleShareButton = () => {
        const {url, title} = data;
        message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
        return Share.share(
            {title, message, url: message},
            {dialogTitle:`Share ${title}`}
        );
    }

    return (
        <ListItem >
            <Body style={{ backgroundColor: '#f1faee', margin: 0, borderRadius: 5 }}>
                <Image source={{ uri: data.urlToImage ? data.urlToImage : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=' }}
                    style={styles.image} />
                <Text style={styles.articleTitle} note numberOfLines={2}>{data.title}</Text>
                <Text style={styles.articleDesc} note numberOfLines={3}>{data.description}</Text>

                <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note style={styles.articleSource}>{data.source.name}</Text>
                    <TimeAgo time={data.publishedAt} />
                </View>

                <View style={styles.container}>
                    <Button style={{
                        backgroundColor: '#f1faee',
                        fontWeight: '500',
                        height: 35,
                        color: '#1d3557'
                    }} onPress={() => handleShareButton(data)}>
                        <Text style={{
                            padding: 0,
                            fontSize: 12,
                            fontWeight: '500',
                            color: '#1d3557',
                            borderRadius: 3
                        }}> Share </Text>
                    </Button>
                    <Button style={styles.detailsButton} onPress={() => handleDetailsButton(data)}>
                        <Text style={styles.detailsButtonText}> Details </Text>
                    </Button>
                </View>
            </Body>
        </ListItem>
    )
}

const styles = StyleSheet.create({
    articleTitle: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 10,
        color: '#1d3557'
    },

    articleDesc: {
        fontSize: 12,
        fontWeight: '400',
        marginBottom: 8
    },

    image: {
        width: '100%',
        height: 150,
        marginBottom: 15,
        borderRadius: 5
    },

    detailsButtonText: {
        padding: 0,
        fontSize: 12,
        fontWeight: '500',
        color: '#f1faee',
        borderRadius: 3
    },

    detailsButton: {
        backgroundColor: '#1d3557',
        marginStart: 'auto',
        fontWeight: '500',
        height: 35
    },

    articleSource: {
        fontSize: 12,
        fontWeight: '400',
        color: '#1d3557'
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        margin: 15
    }

})
