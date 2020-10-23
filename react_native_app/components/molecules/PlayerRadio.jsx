import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import PlayerSvg from '../atomes/SvgPlayer';
import Player from '../molecules/Player';
import BtnPlayer from '../atomes/BtnPlayer';




const ViewStyle = styled.View`
    width: 70%;
    height: 60px;
    border-radius: 30px;
    margin-top: -12%;
    background-color: #f2e307;
    flex-direction: row;
    align-items: center;
    justify-content: center; 

`;
const ImageLogo = styled.Image`
    width: 80px;
    height: 80px;

`;
const ImagePlayer = styled.Image`
    width: 400px;
    height: 400px;

`;
const TextPlayer = styled.Text`
    margin: 3%;
`;
 
export default () => (
        <ViewStyle style={styles.container}>
        <ImageLogo
        // style={styles.tinyLogo}
        source={require('../../assets/logo1.png')}
      />
      <TextPlayer>Radio Urbain FM</TextPlayer>
      {/* <ImagePlayer
            source={require('../../assets/button-play.png')}
            /> */}
            {/* <PlayerSvg/> */}
            <Player/>
            {/* <BtnPlayer/> */}
        </ViewStyle>
)

const styles = StyleSheet.create({

    container:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 34
      },
  })