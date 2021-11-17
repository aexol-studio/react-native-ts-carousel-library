import React from 'react';
import {SafeAreaView, StatusBar, Dimensions} from 'react-native';
import FlatListContainer from './src/FlatListContainer';
// import image1 from './src/images/image1.jpg';
// import image2 from './src/images/image2.jpg';
// import image3 from './src/images/image3.jpg';
// import image4 from './src/images/image4.jpg';
// import image5 from './src/images/image5.jpg';
// import image6 from './src/images/image6.jpg';
// import image7 from './src/images/image7.jpg';
// import image8 from './src/images/image8.jpg';
// import image9 from './src/images/image9.jpg';
// import image10 from './src/images/image10.jpg';
import {images} from './src/data';

const {height} = Dimensions.get('screen');

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

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <FlatListContainer data={imagesFromPath} height={height} />
    </SafeAreaView>
  );
};

export default App;
