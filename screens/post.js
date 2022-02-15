import React from "react";
import { View,Text } from "react-native";
import { globalStyles } from '../styles/global'

export default function Post(){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.thinText}>Post Screen </Text>
        </View>
    )
}
