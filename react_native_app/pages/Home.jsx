import React from 'react';
import {Image, View, Text, SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import PlayerRadio from '../components/molecules/PlayerRadio';
import Scroll from '../components/atomes/ScrollView';
import Caroussel from '../components/atomes/Carousel';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`
const BackgroundStyle = styled.Image`
    width: 100%;
    height: 40%;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
`;

const ViewParent = styled.View`
    justify-content: center;
    align-items: center;
    padding-bottom: 3%;
`;

export default () => (
    <Container>
        
        {/* <BackgroundStyle source={require("../assets/affiche1.jpg")}/> */}
        <Caroussel/>
        <ViewParent>
            <PlayerRadio/> 
        </ViewParent>

        {/* <Podcast/>
        <Emission/>
        <Video/> */}
        <Scroll/>

    </Container>
)

