import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, ImageBackground, Button, ScrollView ,TouchableOpacity ,SafeAreaView,TextInput } from 'react-native';

export default class Log_in extends Component {

    render() {

        
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ImageBackground source={require('../app/img/wl1.png')} style={styles.img}>

                    <SafeAreaView>

     
    </SafeAreaView>

                        <View style={styles.container}>
                        <TouchableOpacity style={{backgroundColor: "red", padding: 10, marginTop: "20%", width:"50%", alignSelf:"center",borderRadius: 10,}}>
                         <Text style={{ fontSize:15, textAlign: "center", color:"white", }} >Iniciar Secion</Text>
                        </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </ScrollView >
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#6192C0',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    box: {
        flex: 1,
        textAlign: 'center',
        padding: '5px',
        
    },
    img: {
        width: 360,
        height: 660,
    },
    inner: {
        width: '85%',
        height: '65%',
        backgroundColor: 'rgba(255,255,255,.6)',
        marginTop: "-40%",
        alignItems: 'center',
        justifyContent: 'center',

    },
});

