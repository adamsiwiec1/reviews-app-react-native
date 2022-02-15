import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from '../styles/global'

export default function Home({ navigation }){


    // const pressHandler = (x) => {
    //     if(x.toLowercase() == 'forum') {
    //         navigation.navigate('Forum');
    //     }
    //     if(x.toLowercase() == 'about') {
    //         navigation.navigate('About');
    //     }

    // }

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen </Text>
            <Button title="Forum" onPress={pressHandler('forum')}></Button>
            <Button title="About" onPress={pressHandler('about')}></Button>
        </View>
    )
}

