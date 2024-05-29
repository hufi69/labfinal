import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { data } from '../data/Data';
import { NavigationProp, ParamListBase, withNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { RootState } from '../app/store';

interface BlogBottomListProps {
    navigation: NavigationProp<ParamListBase>;
    isDarkMode: boolean;
}

class BlogBottomList extends Component<BlogBottomListProps> {
    handlePress = (item: any) => {
        this.props.navigation.navigate('Detail', { item });
    };

    render() {
        const { isDarkMode } = this.props;
        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ backgroundColor: isDarkMode ? '#000' : '#fff' }}>
                {data.map((item) => (
                    <TouchableOpacity key={item.id.toString()} onPress={() => this.handlePress(item)} style={styles.container}>
                        <View style={[styles.content, { backgroundColor: isDarkMode ? '#17202A' : '#F4F6F7' }]}>
                            <Image style={styles.img} source={item.img} />
                            <View>
                                <View style={styles.txtContainer}>
                                    <Text style={[styles.txt, { color: isDarkMode ? '#fff' : '#000' }]}>{item.txt}</Text>
                                </View>
                                <View style={styles.imgContent}>
                                    <Image style={styles.author} source={item.user} />
                                    <Text style={[styles.name, { color: isDarkMode ? '#566573' : '#000' }]}>{item.author}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 16,
        marginRight: 10,
    },
    content: {
        flexDirection: "row",
        paddingVertical: 12,
        alignItems: "center",
        width: 250,
        borderRadius: 8,
    },
    imgContent: {
        flexDirection: 'row',
        alignItems: "center"
    },
    txt: {
        width: "90%",
        fontSize: 14,
        marginBottom: 5,
        fontWeight: "500"
    },
    name: {
        fontSize: 15,
    },
    author: {
        marginRight: 7,
        marginTop: 2,
        width: 25,
        height: 25,
        borderRadius: 50,
        resizeMode: "cover",
    },
    img: {
        marginHorizontal: 10,
        width: 70,
        height: 70,
        borderRadius: 8,
        resizeMode: "cover",
    },
});

const mapStateToProps = (state: RootState) => ({
    isDarkMode: state.theme.isDarkMode,
});

export default connect(mapStateToProps)(withNavigation(BlogBottomList));
