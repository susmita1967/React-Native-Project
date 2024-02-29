import React, { useState, useEffect } from "react";
import moment from 'moment';
import { useRoute, useNavigation } from "@react-navigation/native";
import {
    View,
    Text,Modal,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image
} from "react-native";

const HomePage = () => {
    const route = useRoute();
    const user = route.params?.data;
    const currentDateAndTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const [newColor, setNewColor] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [name,setName]=useState(null);
    const [releasedate,setRelesedate]=useState(null);
    const navigation = useNavigation();
    useEffect(() => {
        const addRandomColor = () => {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            const color = `rgb(${red},${green},${blue})`;
            setNewColor([color]);
        };
        addRandomColor();
    }, []);

    const fetchMovieData=async(id)=>{
        try{
            setModalVisible(true);
            const response=await fetch('https://reactnative.dev/movies.json');
            const fetcheddata=await response.json();
            const md=fetcheddata.movies[id];
            setName(md.title);
            setRelesedate(md.releaseYear);   
         }
        catch(error)
        {
            console.error('Error while fetching data',error);
        }
    }

    return (
        <View style={styles.back}>
            <FlatList
                keyExtractor={(key) => key}
                data={newColor}
                renderItem={({ item }) => (

                    <View>
                        <View>
                            <Text style={styles.textDate}>{currentDateAndTime}</Text>
                        </View>
                        <View>
                            <Text style={styles.textWelcome}>Welcome {user}</Text>
                        </View>
                        <TouchableOpacity justifyContent='center'
                            style={
                                {
                                    backgroundColor: item,
                                    width: 350,
                                    height: 100,
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    marginLeft: 40,
                                    marginTop: 40,
                                    marginRight: 40
                                }
                            }
                            onPress={() => fetchMovieData(0)}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('./assets/m.jpg')}
                                    style={{ width: 60, height: 60, marginRight: 40, marginLeft: 25 }}
                                />
                                <Text style={styles.tochtext}>Star Wars{'\n'}Realese Year : 1977</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={
                                {
                                    backgroundColor: item,
                                    width: 350,
                                    height: 100,
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    paddingLeft: 20,
                                    marginLeft: 40,
                                    marginTop: 40,
                                    marginRight: 40
                                }
                            }
                            onPress={() => fetchMovieData(1)}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('./assets/m.jpg')}
                                    style={{ width: 60, height: 60, marginRight: 40, marginLeft: 5 }}
                                />
                                <Text style={styles.tochtext}>Back to the Future{'\n'}Realese Year : 1985</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={
                                {
                                    backgroundColor: item,
                                    width: 350,
                                    height: 100,
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    marginLeft: 40,
                                    marginTop: 40,
                                    marginRight: 40
                                }
                            }
                            onPress={() => fetchMovieData(2)}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('./assets/m.jpg')}
                                    style={{ width: 60, height: 60, marginRight: 40, marginLeft: 25 }}
                                />
                                <Text style={styles.tochtext}>The Matrix{'\n'}Realese Year : 1999</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity justifyContent='center'
                            style={
                                {
                                    backgroundColor: item,
                                    width: 350,
                                    height: 100,
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    marginLeft: 40,
                                    marginTop: 40,
                                    marginRight: 40
                                }
                            }
                            onPress={() => fetchMovieData(3)}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('./assets/m.jpg')}
                                    style={{ width: 60, height: 60, marginRight: 40, marginLeft: 25 }}
                                />
                                <Text style={styles.tochtext}>Inception{'\n'}Realese Year : 2010</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity justifyContent='center'
                            style={
                                {
                                    backgroundColor: item,
                                    width: 350,
                                    height: 100,
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    marginLeft: 40,
                                    marginTop: 40,
                                    marginRight: 40

                                }
                            }
                            onPress={() => fetchMovieData(4)}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('./assets/m.jpg')}
                                    style={{ width: 60, height: 60, marginRight: 40, marginLeft: 25 }}
                                />
                                <Text style={styles.tochtext}>Interstellar{'\n'}Realese Year : 2014</Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity style={styles.backbtn}
                                onPress={() => navigation.navigate('Login')}
                            >
                                <Text style={styles.btntxt}>Back</Text>

                            </TouchableOpacity>
                            <Modal
                                animationType="slide"
                                visible={modalVisible}
                                transparent={true}
                                onRequestClose={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={styles.container}>
                                        <Text style={{ fontSize: 24, marginTop: 40, textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Movie Details</Text>
                                        <View>
                                            <Text style={{
                                                color: 'black',
                                                fontSize: 23,
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                marginTop: 60,
                                            }}>Movie Name : <Text style={{color:'#DCDCDC'}}>{name}</Text></Text>
                                            <Text style={{
                                                color: 'black',
                                                fontSize: 23,
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                marginTop: 20,
                                            }}>Release Year : <Text style={{color:'#DCDCDC'}}>{releasedate}</Text></Text>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <TouchableOpacity style={styles.buttonContainer} onPress={() => setModalVisible(false)}  >
                                                <Text style={{ fontSize: 20, color: 'white' }}>Close</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>

                        </View>
                    </View>
                )}
            >
            </FlatList>

        </View>
    )
}


const styles = StyleSheet.create({
    back: {
        flex: 1,
        backgroundColor: '#660033',

    },

    textDate: {
        color: "white",
        fontSize: 25,
        textAlign: "center",
        marginBottom: 10,
        marginTop: 50
    },
    textWelcome: {
        color: "white",
        fontSize: 27,
        textAlign: "center",
        fontWeight: 'bold'
    },
    backbtn: {

        width: 130,
        height: 55,
        marginTop: 50,
        backgroundColor: "pink",
        borderRadius: 25,
        marginLeft: 150,
        marginBottom: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    btntxt: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    tochtext:
    {
        fontSize: 25,
        color: 'white',
        marginRight: 60
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        width: 150,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'black'
    },
    container: {
        backgroundColor: '#478C9F',
        padding: 20,
        borderRadius: 30,
        width: 330,
        height: 450,
        marginLeft: 5,
        alignItems:'center',
    }

})

export default HomePage;
