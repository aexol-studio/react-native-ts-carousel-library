# react-native-carousel-library

[![npm](https://img.shields.io/npm/v/react-native-data-storage-hooks.svg?style=flat-square)](https://www.npmjs.com/package/react-native-carousel-library)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple and fully customizable carousel library for React Native with Type Script. 
You can turn on the automatic image change, add a pagination or a title to the image.




## Installation

```bash
  npm i react-native-carousel-library
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

function App() {
  return (
      <Carousel
        data={images}
        autoScroll={true}
        pagination={true}
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
For the images with url path the data array should look like below: 

```javascript
const images = [
  {url: 'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80'},
  {url: 'https://images.unsplash.com/photo-1562569633-622303bafef5?w=800&q=80'},
  {url: 'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=800&q=80'},
];

      <Carousel
        data={images}
        autoScroll={true}
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
        landscapeImage={true} // add this prop
      />
```

## Available props

| Name                             | Type                 | Default                        | Description                                                                                                                                |
| -------------------------------- | -------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`                           | `object[]`           | **REQUIRED** , `[]`,                      | An array of objects with url and title property, where only url is required                                                                                                                      |
| `autoScroll`                     | `boolean`               | **REQUIRED** ,`true`                           | Determines if the scroll animation should be turned on                                                                                                |
| `autoScrollInterval`                   | `number` | `5000`                 | Modal hide animation (in ms)                                                                                                                     |
| `backgroundStyles`             | `ViewStyle`               |                             | Carousel's background styles                                                                                               |
| `imageWrapperStyles`                  | `ViewStyle`               |                         | Image wrapper styles                                                                                                |
| `landscapeImage`                    | `boolean`               | `false`                           | Display the horizontal images                          |
| `pagination`                    | `boolean`               | `true`                           | Display the pagination                                                                                                                       |
| `paginationStyles`                  | `ViewStyle`             |                      | Styles available: dotSize, dotColor, indicatorColor, top, bottom, right, left,                                                                                                              |
| `title`                | `boolean`             | `false`                           | Render the image title                                                                                             |
| `titleStyles`     | `ViewStyle`             |                             | Title text styles                                                                                                           |
| `titleWrapperStyles`    | `ViewStyle`             |                             | Title wrapper styles                                                                                                           |

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)