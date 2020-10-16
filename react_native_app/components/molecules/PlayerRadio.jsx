import React from 'react';
import {Image, View, Text} from 'react-native';
import styled from 'styled-components/native';
import PlayerSvg from '../atomes/SvgPlayer';
import Player from '../molecules/Player';




const ViewStyle = styled.View`
    width: 65%;
    height: 60px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
    border-radius: 30px;
    margin-top: -8%;
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
        <ViewStyle>
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
        </ViewStyle>
)