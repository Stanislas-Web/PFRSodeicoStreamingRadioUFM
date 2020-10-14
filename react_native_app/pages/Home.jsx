import React from 'react';
import {Image, View, Text, SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import PlayerRadio from '../components/molecules/PlayerRadio';

import Scroll from '../components/atomes/ScrollView';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`
const BackgroundStyle = styled.Image`
    width: 100%;
    height: 40%;
`;

const ViewParent = styled.View`
    justify-content: center;
    align-items: center;
`;

export default () => (
    <Container>
        <BackgroundStyle source={require("../assets/affiche1.jpg")}/>
        <ViewParent>
            <PlayerRadio/>
        </ViewParent>

        {/* <Podcast/>
        <Emission/>
        <Video/> */}
        <Scroll/>

    </Container>
)

