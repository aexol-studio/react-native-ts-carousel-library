import React from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';
import Carousel from './src/Carousel';

export const imagesFromPath = [
  require('./src/images/image1.jpg'),
  require('./src/images/image2.jpg'),
  require('./src/images/image3.jpg'),
  require('./src/images/image4.jpg'),
  require('./src/images/image5.jpg'),
  require('./src/images/image6.jpg'),
  require('./src/images/image7.jpg'),
  require('./src/images/image8.jpg'),
  require('./src/images/image9.jpg'),
  require('./src/images/image10.jpg'),
];

export const imagesHorizontal = [
  {url: require('./src/images/horizontal1.jpg'), title: 'little church'},
  {url: require('./src/images/horizontal2.jpg'), title: 'river'},
  {url: require('./src/images/horizontal3.jpg'), title: 'tenements'},
  {url: require('./src/images/horizontal4.jpg'), title: 'see'},
  {url: require('./src/images/horizontal5.jpg'), title: 'mountains'},
  {url: require('./src/images/horizontal6.jpg'), title: 'squirrel'},
  {url: require('./src/images/horizontal7.jpg'), title: 'tiger'},
];

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <Carousel
        data={imagesHorizontal}
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
