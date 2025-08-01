import { Alert, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { ButtonStyles } from "./style.js";
import { COLORS } from "../../context/constants.js";

function Button(props) {
    return (
        <LinearGradient
            colors={[COLORS.green1, COLORS.green3, COLORS.green2]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}           
            style={[ButtonStyles.btn]}
        >
            <TouchableOpacity             
            onPress={props.onPress}>
                <Text style={ButtonStyles.text}>{props.text}</Text>
            </TouchableOpacity>
        </LinearGradient>

    )
}

export default Button;
// <TouchableOpacity
//     style={[ButtonStyles.btn,
//     props.theme == "danger" ?
//         ButtonStyles.danger : ButtonStyles.primary]}
//     onPress={props.onPress} >
//     <Text style={ButtonStyles.text}>
//         {props.text}
//     </Text>
// </TouchableOpacity>