import React, {useState} from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { globalStyles, navStyles } from '../styles/global';

export default function Home({ navigation }){

    return(
        <View style={globalStyles.container}>
            <TouchableOpacity title="Forum" onPress={() => navigation.navigate('Forum')}>
                <Text style={globalStyles.titleText}>Forum</Text>
            </TouchableOpacity>
            <TouchableOpacity title="About" onPress={() => navigation.navigate('About')}>
                <Text style={globalStyles.titleText}>About</Text>
            </TouchableOpacity>
        </View>
    );
}

