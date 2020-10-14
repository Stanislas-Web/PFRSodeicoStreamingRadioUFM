import React from 'react';
import {Image, View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import Title from '../atomes/TitleSection';


const TextPodcast = styled.Text`
    text-align:left;
    font-size: 17px;
    font-weight: bold;
`;
const ViewEmission = styled.View`
    padding: 5% 5% 1% 5%;
`;
const ImageEmission = styled.Image`
    width: 100px;
    height: 80px;
    border-radius: 10px;

`;
const ViewEmissionScroll = styled.View`
    padding:2% 5% 2% 0%;
`;
const ViewImageEmissionAndText = styled.View`
    flex-direction: row;
`;
 
export default () => (
    <ViewEmission>
        <Title title="Emissions"/>
        {/* <br/> */}
        {/* <ViewImageEmissionAndText> */}
 
    <ScrollView horizontal={true}>
        {/* <FlatList
            contentContainerStyle={{alignSelf: 'flex-start'}}
            numColumns={listData.length / 2}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={listData}
            renderItem={({ item, index }) => {
                //push your code
            }}
        /> */}
                   <ViewEmissionScroll>
            <ImageEmission
                    source={require('../../assets/affiche13.jpg')}  
            />
                <Text>Musique</Text>
            </ViewEmissionScroll>
            <ViewEmissionScroll>
            <ImageEmission
                    source={require('../../assets/affiche18.jpg')}  
            />
                <Text>Société</Text>
            </ViewEmissionScroll>
            <ViewEmissionScroll>
            <ImageEmission
                    source={require('../../assets/affiche16.jpg')}  
            />
                <Text>Sport</Text>
            </ViewEmissionScroll>
            <ViewEmissionScroll>
            <ImageEmission
                    source={require('../../assets/affiche16.jpg')}  
            />
                <Text>Sport</Text>
            </ViewEmissionScroll>
            <ViewEmissionScroll>
            <ImageEmission
                    source={require('../../assets/affiche16.jpg')}  
            />
                <Text>Sport</Text>
            </ViewEmissionScroll>
            <ViewEmissionScroll>
            <ImageEmission
                    source={require('../../assets/affiche16.jpg')}  
            />
                <Text>Sport</Text>
            </ViewEmissionScroll>
    </ScrollView>
          
            
        {/* </ViewImageEmissionAndText> */}

    </ViewEmission>
)