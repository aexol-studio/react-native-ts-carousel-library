import React from 'react';
import { Animated, Dimensions, ImageRequireSource, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');
const DOT_SIZE = 15;

interface props {
    scrollRef: Animated.Value,
    data: string[] | ImageRequireSource[];
}

const Pagination: React.FC<props> = ({ scrollRef, data }) => {
    const translateX = scrollRef.interpolate({
        inputRange: [-width, 0, width],
        outputRange: [-DOT_SIZE, 0, DOT_SIZE],
    });

    return (
        <View style={styles.absoluteWrapper}>
            <View style={styles.paginationContainer}>
                <Animated.View style={[styles.paginationIndicator, { transform: [{ translateX }] }]} />
                {data.map((image, i) => (
                    <View style={styles.biggerCircle} key={i}>
                        <View key={i} style={styles.whiteCircle} />
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Pagination;

const styles = StyleSheet.create({
    absoluteWrapper: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 50,
    },
    paginationContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'relative',
        flex: 1,
    },
    paginationIndicator: {
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: DOT_SIZE / 2,
        borderWidth: 1,
        borderColor: '#ddd',
        position: 'absolute',
        left: 0,
    },
    biggerCircle: {
        width: DOT_SIZE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteCircle: {
        width: DOT_SIZE * 0.4,
        height: DOT_SIZE * 0.4,
        borderRadius: DOT_SIZE * 0.2,
        backgroundColor: '#62a189',
    },
});
