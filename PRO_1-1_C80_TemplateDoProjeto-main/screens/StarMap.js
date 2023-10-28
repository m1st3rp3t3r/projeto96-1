import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Platform, StatusBar, SafeAreaView, ImageBackgrounda, ImageBackground } from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {
    constructor() {
        super()
        this.state = {
            longitude: '',
            latitude: ''
        }
    }
    render() {
        const { longitude, latitude } = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
        return (
            <View style={{ flex: 1, backgroundColor: "#1a0023" }}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={{ flex: 0.3, marginTop: 20, alignItems: 'center' }}>
                    <Text style={styles.titleText}>Mapa Estelar</Text>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Digite sua longitude"
                        placeholderTextColor="white"
                        onChangeText={(text) => {
                            this.setState({
                                longitude: text
                            })
                        }}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Digite sua latitude"
                        placeholderTextColor="white"
                        onChangeText={(text) => {
                            this.setState({
                                latitude: text
                            })
                        }}

                        
                    />

                        if(latitude===90, longitude===0) 
                       style={styles.inputStyle}
                       placeholder="voce está sobre o polo norte terrestre, se olhar para o céu será possível ver a estrela Polar na ponta da constelação ursa maior"
                       placeholderTextColor="white" 
                       onChangeText={(text) => {
                        this.setState({
                            latitude: text            
                        })
                    }}
                    
                    if(longitude===-90, latitude===90) 
                    style={styles.inputStyle}
                       placeholder="voce está sobre o polo sul terrestre, nesse lugar é possivel escolher o horário do dia, pois todos os fusos se originam dai"
                       placeholderTextColor="black"
                       onChangeText={(text) => {
                        this.setState({
                            latitude: text            
                        })
                    }}             
                       

                    if(latitude===0, longitude===-90) 
                       style={styles.inputStyle}
                       placeholder="você está no hemisfério sul do planeta. Caso esteja ou verão, ou primavera, será possivel ver a constelação de escorpião no céu noturno, sendo um dos signos do zodíaco, caso seja as outras estações, será possivel ver a constelação de Orion"
                       placeholderTextColor="black"               
                       onChangeText={(text) => {
                        this.setState({
                            latitude: text            
                        })
                    }}
                     

                   if(latitude===0, longitude===90) 
                       style={styles.inputStyle}
                    placeholder="você está no hemisfério norte do planeta. Caso esteja ou inverno, ou outono, será possivel ver a constelação de Orion no céu noturno, tendo as famosas três marias, caso seja as outras estações, será possivel ver a constelação de Escorpião"
                       placeholderTextColor="white"               
                       onChangeText={(text) => {
                        this.setState({
                            latitude: text            
                        })
                    }}     

                      if(latitude===-85, longitude===6) 
                       style={styles.inputStyle}
                    placeholder="você está na cúpua argus, o melhor lugar na terra para se observar as estrelas, aproveite essa chance única"
                       placeholderTextColor="blue"               
                       onChangeText={(text) => {
                        this.setState({
                            latitude: text            
                        })
                    }}         

                      if(latitude===-20, longitude===68) 
                       style={styles.inputStyle}
                    placeholder="você está no salar de Uyuni, o espelho do universo, a noite é possivel ver o seu reflexo perfeito sobre o chão"
                       placeholderTextColor="red"               
                       onChangeText={(text) => {
                        this.setState({
                            latitude: text            
                        })
                    }} 

                     if(latitude===-27, longitude===85) 
                       style={styles.inputStyle}
                    placeholder="você está sobre o sagarmatha, onde o céu e a terra se encontram, sendo um dos melhores lugares para se ver o céu noturno com suas lindas estrelas"
                       placeholderTextColor="green"               
                       onChangeText={(text) => {
                        this.setState({
                            latitude: text            
                        })
                    }} 
                                                                                     

                </View>
                <WebView
                    scalesPageToFit={true}
                    source={{ uri: path }}
                    style={{ marginTop: 20, marginBottom: 20, }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        textAlign: 'center',
        color: 'white',
        width: 200
    }
})

//Vai por mim, todo mundo já quis fazer um castelo de papelão, sem exeção

