import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomButtonMenu } from '../components/CustonButtonMenu';
import { Carousel } from 'react-responsive-carousel';
import * as Animatable from 'react-native-animatable';
import { theme } from '../components/styles/DefaultTheme';
import { Header } from '../components/Header';
import { Avatar } from '../components/Avatar';
import { Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export const ViewMenu = (props) => {

    const images = [
        {
            source: {
                uri: 'https://img.wallpapic-br.com/i5020-741-725/medium/espaco-sideral-lua-universo-imagem-de-fundo.jpg'
            }
        },
        {
            source: {
                uri: 'https://img.wallpapic-br.com/i5020-741-725/medium/espaco-sideral-lua-universo-imagem-de-fundo.jpg'
            }
        },
        {
            source: {
                uri: 'https://img.wallpapic-br.com/i5020-741-725/medium/espaco-sideral-lua-universo-imagem-de-fundo.jpg'
            }
        }
    ]


    return (
        <SafeAreaView
            style={styles.container}>
            {/* <View>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={true}
                >

                </ScrollView>

            </View> */}


            {/* <Header nav={props.navigation}
            label='Texto' 
            headerLeft={<>  </>}
            headerRight={<> </>}
            /> */}

            {/* <Header nav={props.navigation}
                label="Menu"
                avatar={<Avatar />}
                logout={false} /> */}

            <ScrollView
                showsVerticalScrollIndicator={false}>
                <Animatable.View
                    animation="pulse">
                    <View style={{ marginTop: 50 }}>

                        <TouchableOpacity
                            style={[styles.card]}
                            onPress={() => props.navigation.navigate("ViewUsers",

                            )}>
                            <View style={styles.cardItem}>
                                <MaterialIcons name="supervised-user-circle"
                                    style={{ marginRight: 20 }}
                                    size={60} color="#444" />
                                <Text style={theme.label}>Lista de Usuários</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.card]}
                            onPress={() => props.navigation.navigate("ViewInformation")}>
                            <View style={styles.cardItem}>
                                <Ionicons name="ios-book-outline"
                                    style={{ marginRight: 25, marginLeft: 5 }}
                                    size={50} color="#444" />
                                <Text style={theme.label}>Materiais de Leitura</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.card]}
                            onPress={() => props.navigation.navigate("ViewChecklist")}>
                            <View style={styles.cardItem}>
                                <Octicons name="checklist"
                                style={{ marginRight: 25, marginLeft: 5 }}
                                size={50} color="#444" />
                                <Text style={theme.label}>Checklist Diário</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.card]}
                            onPress={() => props.navigation.navigate("ViewExpertises")}>
                            <View style={styles.cardItem}>
                                <Octicons name="checklist"
                                style={{ marginRight: 25, marginLeft: 5 }}
                                size={50} color="#444" />
                                <Text style={theme.label}>Lista de Especializações</Text>
                            </View>
                        </TouchableOpacity>

                        {/* <TouchableOpacity
                            style={[styles.card]}
                            onPress={() => props.navigation.navigate("ViewProfessional")}>
                            <View style={styles.cardItem}>
                                <Octicons name="checklist"
                                style={{ marginRight: 25, marginLeft: 5 }}
                                size={50} color="#444" />
                                <Text style={theme.label}>Lista Profissionais</Text>
                            </View>
                        </TouchableOpacity> */}

                        <TouchableOpacity
                            style={[styles.card]}
                            onPress={() => props.navigation.navigate("ViewMeditation")}>
                            <View style={styles.cardItem}>
                                <Octicons name="checklist"
                                style={{ marginRight: 25, marginLeft: 5 }}
                                size={50} color="#444" />
                                <Text style={theme.label}>ViewMeditation </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </Animatable.View>

            </ScrollView>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#68baab',
        // marginTop: 200
    },
    card: {
        width: width * 0.9,
        height: 100,
        justifyContent: 'center',
        borderRadius: 12,
        padding: 8,
        marginTop: 16,
        backgroundColor: '#f6f8ee'
    },
    cardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})