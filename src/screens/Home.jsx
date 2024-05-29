import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const [showAuth, setShowAuth] = useState(false);

    const handlePress = () => {
        if (showAuth) {
            navigation.navigate('Blog');
        } else {
            setShowAuth(true);
        }
    };

    return (
        <View style={styles.banner}>
            <Image source={require('../../assets/images/banner.png')} resizeMode="cover" style={styles.image} />
            {showAuth ? (
                <View style={styles.authContainer}>
                    <TextInput style={styles.input} placeholder="Email" />
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry />
                    <TouchableOpacity style={styles.authButton}>
                        <Text style={styles.authButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.text}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.button}
                        onPress={handlePress}
                    >
                        <Text style={styles.textContent}>Get started</Text>
                    </TouchableOpacity>
                </View>
            )}
            <View style={styles.blog}>
                <Text style={styles.blogText}>Everyday new</Text>
                <Text style={styles.blogTextSmall}>Travel blog</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    banner: {
        flex: 1,
        position: "relative",
    },
    text: {
        position: 'absolute',
        bottom: 70,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingVertical: 13,
        alignItems: 'center',
        width: '90%',
    },
    textContent: {
        color: '#000',
        fontSize: 26,
    },
    blog: {
        position: 'absolute',
        top: 65,
        left: 20,
    },
    blogText: {
        fontSize: 40,
        color: "#D0D3D4",
        fontWeight: '300',
        fontStyle: "italic"
    },
    blogTextSmall: {
        fontWeight: 'bold',
        fontSize: 55,
        color: "#fff",
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    authContainer: {
        position: 'absolute',
        bottom: 70,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    authButton: {
        backgroundColor: '#007bff',
        borderRadius: 10,
        paddingVertical: 13,
        paddingHorizontal: 30,
    },
    authButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Home;
