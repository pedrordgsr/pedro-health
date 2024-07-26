import React, {useState} from "react";
import { View,Text,TextInput, Button } from "react-native";

export default function ResultImc(props){
    return (
        <View>
            <Text>{props.ResultImc}</Text>
            <Text>{props.messageResultImc}</Text>
        </View>
    )
}