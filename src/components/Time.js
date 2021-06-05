import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'native-base'
import moment from 'moment'


export default function Time(props) {

    const [date, setDate] = useState(props.time)

    const time = moment( date || moment.now() ).fromNow();
    return (
        <Text note style={styles.articleSource}>{time}</Text>
    )
}

const styles = StyleSheet.create({
    articleSource : {
        fontSize: 12,
        fontWeight: '400',
        color: '#1d3557'
    }
})