import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import{ useNavigation} from "@react-navigation/native";

function Chat_bot() {

    const navigation = useNavigation();

    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >chat_bot</Text>

            <TouchableOpacity
            onPress={() => navigation.navigate("Log_in") }
            style={{
                backgroundColor: "red",
                padding: 10,
                marginTop: "20%",
                width:"50%",
                alignSelf:"center",
                borderRadius: 10,
            }}
            >
            <Text
            style={{
                fontSize:15,
                textAlign: "center",
                color:"white",

            }}
            >loginsss</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Chat_bot;