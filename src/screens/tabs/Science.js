import React, { Component, useEffect, useState } from 'react';
import { Container, Content, List } from 'native-base';
import { StyleSheet, Linking } from 'react-native'
import { getArticles } from '../../service/news'
import ArticleCard from '../../components/ArticleCard';


export default function Science() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getArticles('science').then(data => {
            setData(data);
        })
    }, [])

    const handleDetailsButton = (articleData) => {
        Linking.openURL(articleData.url);
    }

    return (
        <Container>
            <Content>
                <List>
                    {
                        data?.map(article => <ArticleCard key={article.id} data={article} handleDetailsButton={handleDetailsButton} />)
                    }
                </List>
            </Content>
        </Container>
    )
}