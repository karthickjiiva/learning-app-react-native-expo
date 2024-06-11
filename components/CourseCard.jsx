// import React from 'react'
// import { StyleSheet, Text, View, TouchableOpacity ,Image } from 'react-native' 

// const CourseCard = ({ duration, title, subTitle,image ,slug, onClick }) => {
//     // console.log(image )
//     // console.log(slug)
//     return (
//     <TouchableOpacity style={styles.coursesCardsItem} onPress={onClick}> 
//         <Image source={{ uri: image }} style={styles.courseImage} /> 
//         <View>
//             <Text style={styles.courseDuration}>{ duration }</Text>
//             <Text style={styles.courseTitle}>{ title }</Text>
//             <Text style={styles.courseSubTitle}>{ subTitle }</Text>
//         </View>
//      </TouchableOpacity>
//     )
// }

// export default CourseCard

// const styles = StyleSheet.create({

//     courseTextWrapper:{
//         margin:16
//     },

//     coursesCardsItem: {
//         marginBottom:16,
//         width:343,
//         height:297,
//         borderRadius:8,
//         borderWidth:1,
//         borderColor:'#BEBAB3',
//         flexDirection: "column",
//         alignItems: "center",

//     },

//     courseDuration: {
//         width:311,
//         height:18,
//         fontFamily: "Rubik_500Medium",
//         fontSize:12,
//         lineHeight:18,
//         color:"#5BA092",
//     },

//     courseTitle: {
//         width:311,
//         height:32,
//         fontFamily: "Rubik_500Medium",
//         fontSize:24,
//         lineHeight:32,
//         color:"#3C3A36",
//     },

//     courseSubTitle: {
//         width:311,
//         height:21,
//         fontFamily: "Rubik_400Regular",
//         fontSize:14,
//         lineHeight:21,
//         color:"#3C3A36",
//     },

//     coursePriceWrapper: {
//         marginLeft:16,
//         backgroundColor:'#65AAEA',
//         // width:54,
//         height:24,
//         borderRadius:12,
//         paddingHorizontal:7,
//         paddingVertical:11,
//         justifyContent:'center',
//         alignItems:'center',
//     },
//     courseImage: {
//         width: '100%', 
//         height: 200, 
//         resizeMode: 'cover',
//     },
//     coursePrice: {
//         fontFamily: 'Rubik_500Medium',
//         fontSize:12,
//         lineHeight:18,
//         color:'#F2F2F2'
//     }
// })
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CourseCard = ({ title, subTitle, duration, image, onClick }) => {
    return (
        <TouchableOpacity onPress={onClick} style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
                <Text style={styles.duration}>{duration}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CourseCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 4,
        marginBottom: 15,
        width: '40%',
        alignSelf: 'center',
         justifyContent: 'space-around'
    },
    image: {
        width: '100%',
        height: 75,
    },
    infoContainer: {
        // padding: 15,
        // margin:15

    },
    title: {
        marginTop:10,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
        textAlign:'center',
        
        
    },
    subTitle: {
        fontSize: 12,
        color: '#666',
        // marginVertical: 4,
    },
    duration: {
        fontSize: 12,
        color: '#999',
    },
});

