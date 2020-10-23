import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
 
const BannerWidth = Dimensions.get('window').width;
// const BannerWidth = 98;
const BannerHeight = 300;
 
const images = [
    "https://scontent.ffih1-2.fna.fbcdn.net/v/t1.0-9/119954691_1486468378227430_8127883008356305907_o.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_eui2=AeGokZN6GU7GpUI5DCwxuj_XIke_4IEnzD0iR7_ggSfMPSjvBBEluayiIGskU8-yiSHxVDNVodKnqct5C3YpA4gJ&_nc_ohc=-R21ktVPdJsAX9whSqz&_nc_ht=scontent.ffih1-2.fna&oh=60de7180dce8ed6d4c5f96ddb582c9bc&oe=5FB6FC06",
    "https://scontent.ffih1-2.fna.fbcdn.net/v/t1.0-0/p180x540/117870034_1450935845114017_5203919052922162562_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_eui2=AeGdSX1eQakYshBNa43l1XeblUpqxN7xLRiVSmrE3vEtGOtnEWL1Us0oQ8jj3-olKG03RAVNTViSrz5M7BW6WKiW&_nc_ohc=DmZzLUxGhpAAX_nxzB_&_nc_ht=scontent.ffih1-2.fna&tp=6&oh=88cf61ce642d26fc0b19e6d868125841&oe=5FB61F6B",
    "https://scontent.ffih1-2.fna.fbcdn.net/v/t1.0-9/86183459_1300974236776846_5911906377093087232_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_eui2=AeE40DuyIgLP0XfKW7g_GenqlYqtJKvAzEOViq0kq8DMQ2n0E1iotRb3b3Btm1-l4C_Psvig7c9E-cXndbcJLekk&_nc_ohc=Vu5x_muktzkAX-Cb3_G&_nc_ht=scontent.ffih1-2.fna&oh=f1aa4f99f394995aa2961704a79a84fe&oe=5FB388FA",
    "https://scontent.ffih1-2.fna.fbcdn.net/v/t1.0-9/87547971_1313196502221286_5064159538865766400_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeFFxKZJ0cOPg-ekTzfuoV1MNoaFG7lzaeo2hoUbuXNp6jkyGbEuSO3TkwR9bpiktbWoc7WeWo8KD-wel6L6oeMM&_nc_ohc=vhKFfwWofosAX9ng_KJ&_nc_ht=scontent.ffih1-2.fna&oh=326e8ba01a7914ab54efdf6dd7318043&oe=5FB56AFE",
    "https://scontent.ffih1-2.fna.fbcdn.net/v/t1.0-9/106160378_1414408128766789_8077871898352463891_o.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_eui2=AeFCZ2behbgHr4-GrlPhGNEgmiA5_xNUNXyaIDn_E1Q1fONbhLw0ya9Z8Wx7DZor3JWlaJFAtGkCamVg1XoPQATA&_nc_ohc=T2ky8iCo5vYAX_xckx7&_nc_ht=scontent.ffih1-2.fna&oh=b7c24e569db5531da863fc606327b4cc&oe=5FB707DE"

];
const BackgroundStyle = styled.Image`

    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
`;
 
export default class App extends React.Component {
    renderPage(image, index) {
        return (
            <View key={index}>
                <BackgroundStyle style={{ width: "100%", height: BannerHeight, resizeMode: "stretch" }} source={{ uri: image }} />
            </View>
        );
    }
 
    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',

    },
});