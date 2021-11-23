import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Carousel from './src/Carousel';

const data = [
  {
    url: 'https://media.istockphoto.com/photos/mount-hood-oregon-picture-id1268487061?b=1&k=20&m=1268487061&s=170667a&w=0&h=3fHYwaImlqUETcjCnSV7YO2-PzCFvaX6VSQaiGfWqpc=',
  },
  {
    url: 'https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
  },
  {
    url: 'https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg',
  },
  {url: 'https://wallpaperaccess.com/full/321138.jpg'},
  {url: 'https://miro.medium.com/max/3200/1*N3u1tt7fE8nFNWh6RtiRsQ.jpeg'},
  {
    url: 'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    url: 'https://images.photowall.com/products/60869/azores-mountain-landscape-1.jpg?h=699&q=85',
  },
];

const App = () => {
  return (
    <SafeAreaView>
      <Carousel
        data={data}
        // landscapeImage={true}
        autoScroll={true}
        pagination={true}
        backgroundStyles={{marginTop: 30, height: 420}}
      />
      <View style={{padding: 7}}>
        <Text style={{alignSelf: 'center', paddingBottom: 20}}>
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
