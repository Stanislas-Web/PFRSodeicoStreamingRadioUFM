import React from 'react';
import {Image, View, Text, SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import PlayerRadio from '../molecules/PlayerRadio';
import Podcast from '../molecules/Podcast';
import Emission from '../molecules/Emission';
import Video from '../molecules/Video';

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

    //     <SafeAreaView >
    //         <ScrollView >
    //             <Podcast/>
    //             <Emission/>
    //             <Video/>
    //             <Video/>
    //         </ScrollView>
    //   </SafeAreaView>
    <View style={{flex: 1}}>
    <ScrollView>
                 <Podcast/>
                 <Emission/>
                 <Video/>
                 <Video/>
 
    </ScrollView>
  </View>
)

