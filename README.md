# react-native-ts-carousel-library

A simple and fully customizable carousel library for React Native with Type Script. 
You can turn on the automatic image change, add a pagination or a title to the image.




## Installation

```bash
  npm i react-native-ts-carousel-library
  cd ios
  pod install
```
    
## Overview

https://user-images.githubusercontent.com/93936978/142192166-d07aebd4-7086-4804-aac9-36517202f5a1.mp4


https://user-images.githubusercontent.com/93936978/142192203-62728966-be56-49ef-b066-df4edca436e0.mp4


## Usage

```javascript
import Carousel from 'react-native-ts-carousel-library';
import { Dimensions } from 'react-native';
import {images} from './src/data';

const { height } = Dimensions.get('screen');

function App() {
  return (
      <Carousel
        data={images}
        autoScroll={true}
        pagination={true}
        carouselHeight={height}
      />
  )
}
```
If you use the local images, pass the path using the require() method like below:

```javascript
const imagesFromPath = [
  {url: require('./src/images/image1.jpg')},
  {url: require('./src/images/image2.jpg')},
  {url: require('./src/images/image3.jpg')},
];
```
If you would like to use the url path, set the uriPath props to true: 

```javascript
const images = [
  {url: 'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80'},
  {url: 'https://images.unsplash.com/photo-1562569633-622303bafef5?w=800&q=80'},
  {url: 'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=800&q=80'},
];

      <Carousel
        data={images}
        autoScroll={true}
        pagination={true}
        uriPath={true} // add this prop
      />
```
Please make sure all your images have the similar size and orientation.
You can decide, if you want to display landscape or portrait images.
For landsape images, please set the landscapeImage props to true:

```javascript
const landscapeImages = [
  {url: require('./src/images/horizontal1.jpg'), title: 'little church'},
  {url: require('./src/images/horizontal2.jpg'), title: 'river'},
  {url: require('./src/images/horizontal3.jpg'), title: 'tenements'},
];

      <Carousel
        data={landscapeImages}
        autoScroll={true}
        pagination={true}
        landscapeImage={true} // add this prop
      />
```

## Other props

#### required:

- data - an array of objects with url and title property, where only url is required
- autoScroll - determines if the scroll animation should be turned on,
- pagination - determines if the pagination should be displayed,

#### optional:

- title - set to true if you want to display the title,
- carouselHeight - number,
- backgroundStyles - styles for the carousel background,
- imageWrapperStyles - styles for the image wrapper,
- titleWrapperStyles - styles for the title wrapper,
- titleStyles - title styles,
- paginationStyles - styles available: dotSize, dotColor, indicatorColor, top, bottom, right, left.
