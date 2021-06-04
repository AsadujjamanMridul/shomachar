import React from 'react';
import { StyleSheet } from 'react-native'
import { Container, Header, Tab, Tabs, Left, Body, Right, Title, ScrollableTab } from 'native-base';
import General from './tabs/General';
import Business from './tabs/Business'
import Entertainment from './tabs/Entertainment'
import Sports from './tabs/Sports'
import Technology from './tabs/Technology'
import Health from './tabs/Health'
import Science from './tabs/Science'

const tabs = [
    {
        heading: 'General',
        component: <General />
    },
    {
        heading: 'Business',
        component: <Business />
    },
    {
        heading: 'Health',
        component: <Health />
    },
    {
        heading: 'Technology',
        component: <Technology />
    },
    {
        heading: 'Entertainment',
        component: <Entertainment />
    },
    {
        heading: 'Science',
        component: <Science />
    },
    {
        heading: 'Sports',
        component: <Sports />
    }
];

export default function TabScreen() {
    return (
        <Container style={{ justifyContent: 'center' }}>
            <Header hasTabs style={styles.header}>
                <Left />
                <Body>
                    <Title style={styles.headerTitle}>Shomachar News</Title>
                </Body>
                <Right />
            </Header>
            <Tabs tabBarBackgroundColor={'#1d3557'} tabBarUnderlineStyle={{ color: '#f1faee' }} renderTabBar={() => <ScrollableTab />}>
                {
                    tabs.map(tab => <Tab
                        tabStyle={{ backgroundColor: '#1d3557' }}
                        textStyle={{
                            color: '#f1faee',
                        }}
                        activeTabStyle={{ backgroundColor: '#1d3557' }}
                        activeTextStyle={{ color: '#a8dadc' }}
                        heading={tab.heading}>
                        {tab.component}</Tab>)
                }
            </Tabs>
        </Container>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#1d3557',
        display: 'flex',
        justifyContent: 'center'
    },

    headerTitle: {
        fontSize: 16,
        color: '#f1faee'
    },

    tabHeader: {
        fontSize: .8,
        color: '#f1faee'
    }
})
