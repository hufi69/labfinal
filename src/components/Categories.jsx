import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { category } from '../data/Data';
import { useSelector } from 'react-redux';

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(category[0].id);
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    const renderCategory = () => {
        return category.map((item) => (
            <TouchableOpacity
                key={item.id.toString()}
                style={[
                    styles.categoryContent,
                    item.id === activeCategory && styles.activeCategoryContent
                ]}
                onPress={() => setActiveCategory(item.id)}
            >
                <Text style={[
                    styles.category,
                    item.id === activeCategory && styles.activeCategory
                ]}>
                    {item.text}
                </Text>
            </TouchableOpacity>
        ));
    };

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}
            contentContainerStyle={styles.scrollContent}
        >
            {renderCategory()}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    scrollContent: {
        paddingLeft: 20,
        paddingRight: 10,
    },
    categoryContent: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        marginRight: 10,
    },
    activeCategoryContent: {
        backgroundColor: "#2E4053"
    },
    category: {
        fontSize: 17,
        color: "#839192",
        fontWeight: '500'
    },
    activeCategory: {
        color: "#fff"
    },
});

export default Categories;
