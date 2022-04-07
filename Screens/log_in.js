import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, ImageBackground, Button, ScrollView ,TouchableOpacity ,SafeAreaView,TextInput } from 'react-native';

export default class Log_in extends Component {

    render() {

        
        return (
            <View style={styles.container}>
               
                    <ImageBackground source={require('../app/img/log.png')} style={styles.img}>

                        <Text style={styles.title}> Sing In </Text>

                        <View style={styles.container}>
                        <Text>Nombre de usuario :</Text>
                             <TextInput placeholder='EJ: Jhon'  style={styles.input} onChangeText={(value) => setName(value)} />
                        <Text>Contraseña :</Text>
                             <TextInput placeholder='EJ: 123' style={styles.input} onChangeText={(value) => setAge(value)} />
                        </View>

                        <View style={styles.container}>
                        <TouchableOpacity style={{backgroundColor: "purple", padding: 10, marginTop: "-40%", width:"50%", alignSelf:"center",borderRadius: 20,}}>
                         <Text style={{ fontSize:15, textAlign: "center", color:"white", }} >Iniciar Secion</Text>
                        </TouchableOpacity>
                        </View>
                    </ImageBackground>
             
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
        flexDirection: 'column',
        
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
    title: {
        color: 'black',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 200,
        opacity: 1,
       
    },
    input: {
        borderWidth: 2,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 250,
        borderRadius: 20,
      },
});

