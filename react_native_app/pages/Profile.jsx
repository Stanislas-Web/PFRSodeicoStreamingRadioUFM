// import React from 'react';
// import { StyleSheet,Text, View, SafeAreaView } from 'react-native';
// import styled from 'styled-components/native';

// export default function App() {
//   return (
//     <Container>
//         <BackgroundStyle source={require("../assets/banniere.png")}/>
//         <Text>Papa</Text>
//         <SafeAreaView></SafeAreaView>
//     </Container>
//   );
// }

// const Container = styled.View`
//     flex: 1;
//     height: "300px";
//     background-color: "blue";

// `;

// const BackgroundStyle = styled.ImageBackground`
//     width: 100%;
// `;

import React from 'react';
import {Image, View, Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;

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
    width: 356px;
    height: 133px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
    border: 0.5px solid #C4C4C4;
    border-radius: 30px;
    margin-top: -10%;
    background-color: #fff;
`;
 
export default () => (
    <Container>
        <Text>Mon compte...</Text>
    </Container>
)

