import React from "react";
import { View,Text } from "react-native";
import { globalStyles } from '../styles/global'

export default function Post({ navigation }){
    return(
        <View style={globalStyles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('description')}</Text>
            <Text>{navigation.getParam('author')}</Text>
            <Text>{navigation.getParam('time_posted')}</Text>
        </View>
    )
}
