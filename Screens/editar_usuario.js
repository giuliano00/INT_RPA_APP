import React from "react";
import { View, Text, StyleSheet, TouchableOpacity , ImageBackground, Button, ScrollView  ,SafeAreaView,TextInput} from "react-native";


const Editar_usuario = () => {
    return (
<View style={styles.container}>
          
                    <ImageBackground source={require('../app/img/wal.png')} style={styles.img}>
                   
                    <View style={styles.container}>
                         <Text style={styles.txt2}> Usuario ID : </Text>
                         <Text style={styles.input}  />
                        <Text style={styles.txt}>Nombre de usuario :</Text>
                            <TextInput placeholder='EJ: Jhon'  style={styles.input}  />
                        <Text style={styles.txt}>E mail :</Text>
                            <TextInput placeholder='EJ: Jhon@gmail.com' style={styles.input}/>
                            <Text style={styles.txt2}> Perfil : </Text>
                            <Text style={styles.input} />
                    </View>

                    <View style={styles.container}>
                        <TouchableOpacity style={{backgroundColor: "purple", padding: 10, marginTop: "-50%", width:"50%", alignSelf:"center",borderRadius: 20,}}>
                     <Text style={{ fontSize:15, textAlign: "center", color:"white", }} >Aceptar Cambios</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("cambio_password") } style={{backgroundColor: "purple", padding: 10, marginTop: "-25%", width:"50%", alignSelf:"center",borderRadius: 20,}}>
                     <Text style={{ fontSize:15, textAlign: "center", color:"white", }} >Cambiar Contraseña</Text>
                        </TouchableOpacity>
                    </View>
                        </ImageBackground>
                    </View >
        
    );
    }

    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#6192C0',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "40%",
        
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
    input: {
        borderWidth: 2,
        borderColor: 'purple',
        padding: 8,
        margin: 10,
        width: 250,
        borderRadius: 20,
        backgroundColor: "white",
      },
      txt: {
        fontSize: 15,
        color: 'white',
        width: 230,
        
      },
      txt2: {
        fontSize: 16,
        color: 'white',
        width: 240,
      },
});


export default Editar_usuario;