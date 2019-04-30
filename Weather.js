import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { LinearGradient} from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';


const weatherCases = {
    Rain: {
        colors:["#00c6fb","#005bea"],
        title: "Raining",
        subtitle: "For more, ask to your knee or look outside",
        icon: "weather-rainy"
    },
    Clear: {
        colors:["#fef253","#ff7300"],
        title: "Sunny",
        subtitle: "Take a walk and get some air",
        icon: "weather-sunny"
    },
    Thunderstorm:{
        colors:["#00ecbc","#007adf"],
        title: "Thunderstorm",
        subtitle: "Listen the song 'thunder' of Imagin dragons",
        icon: "weather-lightning"
    },
    Clouds:{
        colors:["#d7d2cc","#304352"],
        title: "Clouds",
        subtitle: "F**king micro dust",
        icon: "weather-cloudy"
    },
    Snow:{
        colors:["#7de2fc","#b9b6e5"],
        title: "Snow",
        subtitle: "Do you wanna build a snowman?",
        icon: "weather-snowy"
    },
    Drizzel:{
        colors:["#89f7fe","#66a6ff"],
        title: "Drizzle",
        subtitle: "may see 🌈",
        icon: "weather-hail"
    },
    Haze:{
        colors:["#89f7fe","#66a6ff"],
        title: "Haze",
        subtitle: "Careful when you drive",
        icon: "weather-fog"
    },
    Mist:{
        colors:["#d7d2cc","#304352"],
        title: "Clouds",
        subtitle: "when you have no glasses on",
        icon: "weather-fog"

    }

};

// export default class Weather extends Component {
//     render () {
//         return (
//             <LinearGradient
//                 colors={["#00c6fb","#005bea"]}
//                 style={styles.container}
//             >
//             <View style={styles.upper}>
//                 <Ionicons color="white" size={144} name="ios-rainy"></Ionicons>
//                 <Text style={styles.temp}>35˚</Text>
//             </View>
//             <View style={styles.lower}>
//                 <Text style={styles.title}>Raining</Text>
//                 <Text style={styles.subtitle}>For more info ask your grand parents or look outside</Text>
//             </View>
//             </LinearGradient>
//         );
//     }
// }

function Weather({ temp, weatherName }){


    return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>

            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon}></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    upper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'transparent'
    },
    temp:{
        fontSize:48,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop:10       
    },
    lower:{
        flex:1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft:25

    },
    title:{
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 10,
        fontWeight: '300'

    },
    subtitle:{
        fontSize:24,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom:24

    }
});