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

export default () => (
    <Container>
        <Text>Mon compte...</Text>
    </Container>
)

