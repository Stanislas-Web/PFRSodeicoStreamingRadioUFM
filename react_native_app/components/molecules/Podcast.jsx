import React from 'react';
import {Image, View, Text} from 'react-native';
import styled from 'styled-components/native';
import Title from '../atomes/TitleSection';

const ViewPodcast = styled.View`
    padding: 5% 5% 1% 5%;
`;
const ImagePodcast = styled.Image`
    width: 100px;
    height: 80px;
    border-radius: 10px;

`;
const ViewImagePodcastAndText = styled.View`
    flex-direction: row;
    padding:2% 0%;
`;
const ViewTextImagePodcast = styled.View`
    padding: 5%;
`;

const TextPodcastTitle = styled.Text`
    font-weight: 700;
`;
 
export default () => (
    <ViewPodcast>
        <Title title="Plus récents"/>
        {/* <br/> */}
        <ViewImagePodcastAndText>
            <ImagePodcast
                    source={require('../../assets/affiche17.jpg')}
                    
            />
            <ViewTextImagePodcast>
                <TextPodcastTitle>UMatinal</TextPodcastTitle>
                <Text>Carina MUTAHALI</Text>
            </ViewTextImagePodcast>
            
        </ViewImagePodcastAndText>
        <ViewImagePodcastAndText>
            <ImagePodcast
                    source={require('../../assets/affiche18.jpg')}
                    
            />
            <ViewTextImagePodcast>
                <TextPodcastTitle>Mboté</TextPodcastTitle>
                <Text>Carina MUTAHALI</Text>
            </ViewTextImagePodcast>
            
        </ViewImagePodcastAndText>
    </ViewPodcast>
)