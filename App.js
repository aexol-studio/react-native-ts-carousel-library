import React from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';
import Carousel from './src/Carousel';

const data = [
  {url: 'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80'},
  {url: 'https://images.unsplash.com/photo-1562569633-622303bafef5?w=800&q=80'},
  {
    url: 'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=800&q=80',
  },
  {url: 'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80'},
  {
    url: 'https://images.unsplash.com/photo-1517957754642-2870518e16f8?w=800&q=80',
  },
  {url: 'https://images.unsplash.com/photo-1546484959-f9a381d1330d?w=800&q=80'},
  {url: 'https://images.unsplash.com/photo-1548761208-b7896a6ff225?w=800&q=80'},
  {
    url: 'https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?w=800&q=80',
  },
  {url: 'https://images.unsplash.com/photo-1548614606-52b4451f994b?w=800&q=80'},
  {url: 'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80'},
];

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <Carousel
        data={data}
        carouselHeight={300}
        landscapeImage={true}
        autoScroll={true}
        title={true}
        pagination={true}
        // imageStyles={{imageWidth: '100%'}}
      />
      <View style={{paddingTop: 20, paddingHorizontal: 10}}>
        <Text style={{textAlign: 'center', marginBottom: 10}}>
          The rest of your app
        </Text>
        <Text style={{textAlign: 'justify', fontSize: 12, lineHeight: 18}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vehicula auctor sem eget molestie. Ut ac leo molestie, ullamcorper
          magna nec, ultrices tellus. Fusce ex tortor, bibendum nec scelerisque
          et, sodales quis lorem. Vestibulum faucibus elementum nisl at dapibus.
          Phasellus eget felis fermentum, eleifend quam non, ultricies nisl.
          Aenean varius sagittis risus, nec consectetur purus hendrerit ut. Duis
          mi erat, ultricies dignissim neque quis, aliquam imperdiet ipsum.
          Aliquam tellus mi, pellentesque quis pellentesque eu, varius sed
          metus. Fusce faucibus lorem ante, et vehicula leo placerat vel. Nulla
          vulputate, eros vel aliquet aliquet, massa nibh euismod ipsum, sed
          blandit leo augue euismod nunc. Nullam at vestibulum dolor. Nulla
          vitae maximus quam. Maecenas feugiat nisi at nisl varius facilisis.
          Integer pharetra scelerisque arcu eu blandit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec vehicula auctor sem eget
          molestie. Ut ac leo molestie, ullamcorper magna nec, ultrices tellus.
          Fusce ex tortor, bibendum nec scelerisque et, sodales quis lorem.
          Vestibulum faucibus elementum nisl at dapibus. Phasellus eget felis
          fermentum, eleifend quam non, ultricies nisl. Aenean varius sagittis
          risus, nec consectetur purus hendrerit ut. Duis mi erat, ultricies
          dignissim neque quis, aliquam imperdiet ipsum. Aliquam tellus mi,
          pellentesque quis pellentesque eu, varius sed metus. Fusce faucibus
          lorem ante, et vehicula leo placerat vel. Nulla vulputate, eros vel
          aliquet aliquet, massa nibh euismod ipsum, sed blandit leo augue
          euismod nunc. Nullam at vestibulum dolor. Nulla vitae maximus quam.
          Maecenas feugiat nisi at nisl varius facilisis. Integer pharetra
          scelerisque arcu eu blandit.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
