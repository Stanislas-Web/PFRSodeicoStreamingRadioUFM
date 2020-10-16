// import React from 'react';
// import Carousel from 'react-native-banner-carousel';
// import { StyleSheet, Image, View, Dimensions } from 'react-native';
 
// const BannerWidth = Dimensions.get('window').width;
// const BannerHeight = 40;
 
// const images = [
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW8l8zkGBxTUCTJsTvU5jNzVnT-qjy5JQN1Q&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVjuSmuIpaOmQv0ZLdXSSThpnF48ix9M498w&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW8l8zkGBxTUCTJsTvU5jNzVnT-qjy5JQN1Q&usqp=CAU"
// ];
 
// export default class App extends React.Component {
//     renderPage(image, index) {
//         return (
//             <View key={index}>
//                 <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
//             </View>
//         );
//     }
 
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Carousel
//                     autoplay
//                     autoplayTimeout={5000}
//                     loop
//                     index={0}
//                     pageSize={BannerWidth}
//                 >
//                     {images.map((image, index) => this.renderPage(image, index))}
//                 </Carousel>
//             </View>
//         );
//     }
// }
 
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         justifyContent: 'center'
//     },
// });