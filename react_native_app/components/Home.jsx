import React from 'react';
import {Image, View} from 'react-native';
import styled from 'styled-components/native';
// import MyCarousel from './Carousel';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`
const BackgroundStyle = styled.Image`
    width: 100%;
    height: 50%;

`;

const ViewParent = styled.View`
    justify-content: center;
    align-items: center;
`;

const ViewStyle = styled.View`
    width: 95%;
    height: 133px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
    border: 0.5px solid #C4C4C4;
    border-radius: 30px;
    margin-top: -10%;
    background-color: #fff;

`;
export default () => (
    <Container>
        <BackgroundStyle source={require("../assets/banniere.png")}/>
        <ViewParent>
        <ViewStyle>

        </ViewStyle>
        
        {/* <MyCarousel/> */}
        </ViewParent>
    </Container>
)

