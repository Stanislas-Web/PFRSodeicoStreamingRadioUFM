import React from 'react';
import {Image, View, Text} from 'react-native';
import styled from 'styled-components/native';
import PlayerSvg from '../atomes/SvgPlayer';




const ViewStyle = styled.View`
    width: 65%;
    height: 60px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
    border-radius: 30px;
    margin-top: -8%;
    background-color: yellow;
    flex-direction: row;
    align-items: center;

`;
const ImageLogo = styled.Image`
    width: 70px;
    height: 50px;

`;
const ImagePlayer = styled.Image`
    width: 60px;
    height: 60px;

`;
 
export default () => (
        <ViewStyle>
        <ImageLogo
        // style={styles.tinyLogo}
        source={require('../../assets/logo1.png')}
      />
      <Text>Radio Urbain FM</Text>
      {/* <ImagePlayer
            source={require('../assets/icons/play.svg')}
            /> */}
            <PlayerSvg/>
        </ViewStyle>
)