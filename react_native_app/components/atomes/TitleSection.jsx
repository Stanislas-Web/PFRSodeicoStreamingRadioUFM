import React from 'react';
import {Image, View, Text} from 'react-native';
import styled from 'styled-components/native';





const TextPodcast = styled.Text`
    text-align:left;
    font-size: 17px;
    font-weight: bold;
`;
 
export default ({title}) => (
        <TextPodcast>
            {title}
        </TextPodcast>      
)