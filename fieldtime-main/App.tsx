import {Col1, Row, Col} from "./src/RNCore/components/markup/markup";
import React from "react";
import {Text, } from "react-native";
import Timer from "./src/RNCore/components/timer/Timer";
import tw from "./src/RNCore/libs/tailwind";


const App = () => {

    return (
        <Col1 class={'m-5'}>
            <Text>Привет! Ниже должно быть по больше примеров использования готового компонента. </Text>
            <Text>Разной ширины, с разным фоном и цветом шрифта</Text>
            <Timer/>
        </Col1>

    );
}
export default App
