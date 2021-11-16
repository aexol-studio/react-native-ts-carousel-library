import Pagination from './components/Pagination';
import React, { useEffect, useRef, useState } from 'react';
import { View, Dimensions, Animated, ImageRequireSource, StyleSheet } from 'react-native';


const { width } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

interface props {
    data: string[] | ImageRequireSource[];
    // data: MutableRefObject<FlatList<any> | undefined>;
    height: number;
    uriPath: boolean;
}


const FlatListContainer: React.FC<props> = ({ data, uriPath }) => {
    const scrollRef = useRef(new Animated.Value(0)).current;
    const [snapped, setSnapped] = useState(0);

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 10,
    });

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            console.log('a', viewableItems);
            setSnapped(viewableItems[0].index);
        }
    });

    const myRef = useRef(null);
    const currentIndex = useRef(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('current.index', currentIndex.current);
            console.log('snapped', snapped);
            console.log(currentIndex.current === data.length);
            currentIndex.current = currentIndex.current === data.length - 1 ? 0 : currentIndex.current + 1;
            myRef.current.scrollToIndex({
                animated: currentIndex.current === 0 ? false : true,
                index: currentIndex.current,
            });

        }, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <View style={styles.wrapper}>
            <Animated.FlatList
                data={data}
                ref={myRef}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                onViewableItemsChanged={onViewableItemsChanged.current}
                viewabilityConfig={viewabilityConfig.current}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                decelerationRate="fast"
                initialNumToRender={3}
                snapToInterval={width}
                // onViewableItemsChanged={() = { onViewChanged() }}
                onScroll={
                    Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollRef } } }],
                        { useNativeDriver: true }
                    )
                }
                on
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * width,
                        index * width,
                        (index + 1) * width,
                    ];
                    const translateX = scrollRef.interpolate({
                        inputRange,
                        outputRange: [-width * 0.7, 0, width * 0.7],
                    });
                    const imageSource = uriPath ? { uri: item } : item;
                    return (
                        <View style={styles.singleItem}>
                            <View
                                style={styles.itemBorder}
                            >
                                <View style={styles.imageContainer}>
                                    {uriPath ? (
                                        <Animated.Image
                                            source={imageSource}
                                            style={[styles.image, { transform: [{ translateX }] }]}
                                        />

                                    ) : (
                                        <Animated.Image
                                            source={item}
                                            style={[styles.image, { transform: [{ translateX }] }]}
                                        />
                                    )}
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
            <Pagination scrollRef={scrollRef} data={data} />
        </View>
    );
};

export default FlatListContainer;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    singleItem: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemBorder: {
        borderRadius: 18,
        shadowColor: 'gray',
        shadowOpacity: 0.5,
        shadowRadius: 30,
        shadowOffset: {
            width: 0, height: 0,
        },
        // padding: 9,
        backgroundColor: '#F8F7F0',
    },
    imageContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        overflow: 'hidden',
        alignItems: 'center',
        borderRadius: 14,
    },
    image: {
        width: ITEM_WIDTH * 1.2,
        height: ITEM_HEIGHT,
        resizeMode: 'cover',
    },
});
