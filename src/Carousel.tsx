import Pagination from './components/Pagination';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  Dimensions,
  Animated,
  ImageRequireSource,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  FlatList,
} from 'react-native';
import isURL from 'validator/lib/isURL';

const { width } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;
interface props {
  data: { url: string | ImageRequireSource; title?: string }[];
  autoScroll: boolean;
  autoScrollInterval?: number;
  title?: boolean;
  carouselHeight?: number;
  landscapeImage?: boolean;
  backgroundStyles?: ViewStyle;
  imageWrapperStyles?: ViewStyle;
  pagination?: boolean;
  titleWrapperStyles?: ViewStyle;
  titleStyles?: TextStyle;
  paginationStyles?: {
    dotSize?: number;
    indicatorColor?: string;
    dotColor?: string;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}

const Carousel: React.FC<props> = ({
  data,
  landscapeImage,
  pagination = true,
  carouselHeight,
  autoScroll,
  backgroundStyles,
  title,
  imageWrapperStyles,
  titleWrapperStyles,
  titleStyles,
  paginationStyles,
  autoScrollInterval = 5000,
}) => {
  const scrollRef = useRef(new Animated.Value(0)).current;
  const [active, setActive] = useState<number>();
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };
  const myRef = useRef<FlatList>(null);
  const currentIndex = useRef(0);


  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const { index } = viewableItems[0];
      setActive(index);
    }
  }, []);

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  useEffect(() => {
    if (autoScroll) {
      if (active === currentIndex.current) {
        const timer = setInterval(() => {
          currentIndex.current =
            currentIndex.current === data.length - 1
              ? 0
              : currentIndex.current + 1;
          myRef.current?.scrollToIndex({
            animated: currentIndex.current === 0 ? false : true,
            index: currentIndex.current,
          });
        }, autoScrollInterval);
        return () => clearInterval(timer);
      } else if (active || active === 0) {
        const timer = setInterval(() => {
          currentIndex.current = active === data.length - 1 ? 0 : active + 1;
          myRef.current?.scrollToIndex({
            animated: currentIndex.current === 0 ? false : true,
            index: currentIndex.current,
          });
        }, autoScrollInterval);
        return () => clearInterval(timer);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <View
      // style={[
      //   styles.wrapper,
      //   { !landscapeImage ? () : (height: carouselHeight ? carouselHeight : '100%') },
      //   backgroundStyles,
      // ]}
      style={[
        landscapeImage
          ? (styles.wrapper, backgroundStyles, { height: carouselHeight ? carouselHeight : ITEM_WIDTH, width: carouselHeight ? carouselHeight * 0.76 : width })
          : styles.wrapper, backgroundStyles, { height: carouselHeight ? carouselHeight : '100%', width: '100%' },
      ]}
    >
      <Animated.FlatList
        data={data}
        ref={myRef}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        decelerationRate="normal"
        initialNumToRender={2}
        snapToInterval={width}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollRef } } }],
          { useNativeDriver: true },
        )}
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
          const isUrl = isURL(item.url + '');
          const imageSource = isUrl ? { uri: item.url } : item.url;
          return (
            <View style={[styles.singleItem, imageWrapperStyles]}>
              {title && (
                <View style={[styles.titleContainer, titleWrapperStyles]}>
                  <Text key={index} style={[styles.title, titleStyles]}>
                    {item.title}
                  </Text>
                </View>
              )}
              <View
                style={[
                  landscapeImage
                    ? (styles.horizontalImageContainer, { height: carouselHeight ? carouselHeight : ITEM_WIDTH, width: carouselHeight ? width * 0.95 : ITEM_HEIGHT - 50 })
                    : styles.imageContainer, { height: carouselHeight ? carouselHeight : ITEM_HEIGHT, width: carouselHeight ? carouselHeight * 0.76 : ITEM_WIDTH },
                ]}>
                <Animated.Image
                  source={imageSource}
                  style={[
                    landscapeImage ? (styles.horizontalImage, { height: carouselHeight ? carouselHeight : ITEM_WIDTH, width: carouselHeight ? width * 1.15 : ITEM_HEIGHT - 50 * 1.15 }) : (styles.image, { height: carouselHeight ? carouselHeight : ITEM_HEIGHT, width: carouselHeight ? carouselHeight * 0.76 : ITEM_WIDTH }),
                    { transform: [{ translateX }] },
                  ]}
                />
              </View>
            </View>
          );
        }}
      />
      {pagination && (
        <Pagination
          scrollRef={scrollRef}
          data={data}
          paginationStyles={paginationStyles}
        />
      )}
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    position: 'relative',
  },
  singleItem: {
    width: width,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageContainer: {
    width: ITEM_WIDTH,
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 14,
  },
  horizontalImageContainer: {
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 14,
  },
  image: {
    // width: ITEM_WIDTH * 1.2,
    // height: ITEM_HEIGHT,
    resizeMode: 'cover',
  },
  horizontalImage: {
    // width: ITEM_HEIGHT * 1.2,
    // height: ITEM_WIDTH,
    resizeMode: 'cover',
  },
  titleContainer: {
    zIndex: 3,
    position: 'absolute',
    right: 15,
    bottom: -7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 21,
    fontFamily: 'Estonia-Regular',
    paddingBottom: 10,
    letterSpacing: 2,
  },
});
