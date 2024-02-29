import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    View,
    Image,
    Text,
    StyleSheet,
    TextInput,
    Alert,
    TouchableOpacity
} from "react-native";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const handleCheckEmail = (text) => {
        setEmail(text);
    }

    const handleCheckPassword = (text) => {
        setPassword(text);
    }

    const validation = () => {
        if (email == '' || password == '') {
            Alert.alert("The fields cannot be empty");
        }
        else {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!(re.test(email))) {
                Alert.alert("Please enter valid email format");
            }
            else {
                if (!(password.length >= 8) || !(password.length <= 16)) {
                    Alert.alert("Password must be at least of length 8");
                }
                else {
                    if ((email === 'susmitajanawade6@gmail.com' && password === 'susmita@123')) {
                        let user = "Susmita";
                        navigation.navigate('Home', { data: user });
                        setEmail('');
                        setPassword('');
                    }
                    else if ((email === 'prachivarude25@gmail.com' && password === 'Prachi@123')) {
                        let user = "Prachi";
                        navigation.navigate('Home', { data: user });
                        setEmail('');
                        setPassword('');
                    }
                    else {
                        Alert.alert("User doesn't exist");
                    }
                }
            }
        }
    }
   

    return (
        <View style={styles.back}>
            <Image
                style={styles.container}
                source={require("./assets/image1.jpg")}
            />
            <View>
                <TextInput
                    style={styles.textstyle}
                    placeholder="Enter email"
                    textAlign="center"
                    placeholderTextColor="gray"
                    value={email}
                    onChangeText={handleCheckEmail}
                />
            </View>

            <View>
                <TextInput
                    style={styles.textstyle}
                    placeholder="Enter password"
                    textAlign="center"
                    placeholderTextColor="gray"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={handleCheckPassword}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={validation}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 180,
        borderRadius: 90,
        overflow: 'hidden',
        margin: 170,
        marginBottom: 15,
        marginLeft: 125,
        alignItems: 'center',
        justifyContent: 'center'
    },
    back: {
        flex: 1,
        backgroundColor: '#660033'
    },
    textstyle: {
        width: "80%",
        height: 50,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        paddingLeft: 10,
        backgroundColor: "white",
        marginLeft: 40,
        marginRight: 30,
        marginBottom: 20,
        color: 'black',
    },
    button: {
        width: 120,
        height: 45,
        marginBottom: 0,
        marginTop: 0,
        margin: 150,
        backgroundColor: "pink",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default LoginPage;
