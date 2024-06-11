// import React, { useEffect, useState, useContext } from 'react';
// import { ScrollView, StyleSheet, Text, View } from 'react-native'
// import CourseCard from '../components/CourseCard'
// import Header1 from '../components/Header1'
// import { fetchLearnings } from '../services/service.api';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AuthContext } from '../contexts/AuthContext';

// const Courselist = ({navigation}) => {
//     const { logout } = useContext(AuthContext);
//     const [courses, setCourses] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadCourses = async () => {
//             try {
//                 const data = await fetchLearnings();
//                 // console.log('Fetched data:', data); // Log the fetched data
//                 setCourses(data.enrolments.map(enrolment => enrolment.course)); // Extracting courses from enrolments
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
    
//         loadCourses();
//     }, []);
//     const handleCoursePress = (slug, id) => {
//         navigation.navigate('Coursevideo', { slug, id });
//     };


//     if (loading) { 
//     }

//     if (error) {
//         return (
//             <View style={styles.errorContainer}>
//                 <Text style={styles.errorText}>Error: {error}</Text>
//             </View>
//         );
//     }
//     return (
//         <>
//             {/* <Header title={'My Courses'} pageHeaderStyle={{marginBottom:16}} goBack={navigation.goBack} />  */}
//             <Header1 /> 
//             <ScrollView contentContainerStyle={styles.coursesCardsWrapper} showsVerticalScrollIndicator={false}>
//                 {courses.map((course, index) => (
//                     <CourseCard
//                         key={index}
//                         title={course.title}
//                         subTitle={course.subTitle}
//                         duration={course.duration}
//                         image={course.image} 
//                         slug={course.slug}
//                         id={course.id}
//                         onClick={() => handleCoursePress(course.slug, course.id)}
//                     />
//                 ))}
//             </ScrollView>
//         </>
//     );
// };

// export default Courselist;

// const styles = StyleSheet.create({
//     coursesCardsWrapper: {
//         alignItems: 'center',
//     },
//     errorContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     errorText: {
//         color: 'red',
//     },
// });



// import React, { useEffect, useState, useContext } from 'react';
// import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// import CourseCard from '../components/CourseCard';
// import Header1 from '../components/Header1';
// import { fetchLearnings } from '../services/service.api';
// import { AuthContext } from '../contexts/AuthContext';

// const Courselist = ({ navigation }) => {
//     const { logout } = useContext(AuthContext);
//     const [courses, setCourses] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadCourses = async () => {
//             try {
//                 const data = await fetchLearnings();
//                 setCourses(data.enrolments.map(enrolment => enrolment.course));
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadCourses();
//     }, []);

//     const handleCoursePress = (slug, id) => {
//         navigation.navigate('Coursevideo', { slug, id });
//     };

//     if (loading) {
//         return (
//             <View style={styles.loadingContainer}>
//                 <ActivityIndicator size="large" color="#0000ff" />
//             </View>
//         );
//     }

//     if (error) {
//         return (
//             <View style={styles.errorContainer}>
//                 <Text style={styles.errorText}>Error: {error}</Text>
//             </View>
//         );
//     }

//     return (
//         <>
//             <Header1 />
//             <ScrollView contentContainerStyle={styles.coursesCardsWrapper} showsVerticalScrollIndicator={false}>
//                 {courses.map((course, index) => (
//                     <CourseCard
//                         key={index}
//                         title={course.title}
//                         subTitle={course.subTitle}
//                         duration={course.duration}
//                         image={course.image}
//                         onClick={() => handleCoursePress(course.slug, course.id)}
//                     />
//                 ))}
//             </ScrollView>
//         </>
//     );
// };

// export default Courselist;

// const styles = StyleSheet.create({
//     coursesCardsWrapper: {
//         // paddingTop: 20,
//         // paddingBottom: 40,
//         backgroundColor:'#fff'
//     },
//     errorContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     },
//     errorText: {
//         color: 'red',
//         fontSize: 16,
//         textAlign: 'center',
//     },
//     loadingContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });



// import React, { useEffect, useState, useContext } from 'react';
// import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// import CourseCard from '../components/CourseCard';
// import Header1 from '../components/Header1';
// import { fetchLearnings } from '../services/service.api';
// import { AuthContext } from '../contexts/AuthContext';

// const Courselist = ({ navigation }) => {
//     const { logout } = useContext(AuthContext);
//     const [courses, setCourses] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadCourses = async () => {
//             try {
//                 const data = await fetchLearnings();
//                 setCourses(data.enrolments.map(enrolment => enrolment.course));
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadCourses();
//     }, []);

//     const handleCoursePress = (slug, id) => {
//         navigation.navigate('Coursevideo', { slug, id });
//     };

//     const renderItem = ({ item }) => (
//         <CourseCard
//             title={item.title}
//             subTitle={item.subTitle}
//             duration={item.duration}
//             image={item.image}
//             onClick={() => handleCoursePress(item.slug, item.id)}
//         />
//     );

//     if (loading) {
//         return (
//             <View style={styles.loadingContainer}>
//                 <ActivityIndicator size="large" color="#0000ff" />
//             </View>
//         );
//     }

//     if (error) {
//         return (
//             <View style={styles.errorContainer}>
//                 <Text style={styles.errorText}>Error: {error}</Text>
//             </View>
//         );
//     }

//     return (
//         <>
//             <Header1 />
//             <FlatList
//                 data={courses}
//                 renderItem={renderItem}
//                 keyExtractor={(item, index) => index.toString()}
//                 numColumns={2} // Display two columns
//                 contentContainerStyle={styles.coursesCardsWrapper}
//             />
//         </>
//     );
// };

// export default Courselist;

// const styles = StyleSheet.create({
//     coursesCardsWrapper: {
//         paddingHorizontal: 0, // Add horizontal padding to center the items
//         // paddingTop: 20,
//         // paddingBottom: 40,
//         backgroundColor:'#fff',
//         width:'100%',
//     },
//     errorContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     },
//     errorText: {
//         color: 'red',
//         fontSize: 16,
//         textAlign: 'center',
//     },
//     loadingContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });


// import React, { useEffect, useState, useContext } from 'react';
// import { FlatList, StyleSheet, Text, View, ActivityIndicator,Button, Linking  } from 'react-native';
// import CourseCard from '../components/CourseCard';
// import Header1 from '../components/Header1';
// import { fetchLearnings } from '../services/service.api';
// import { AuthContext } from '../contexts/AuthContext';


// const Courselist = ({ navigation }) => {
//     const { logout } = useContext(AuthContext);
//     const [courses, setCourses] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadCourses = async () => {
//             try {
//                 const data = await fetchLearnings();
//                 setCourses(data.enrolments.map(enrolment => enrolment.course));
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadCourses();
//     }, []);

//     const handleCoursePress = (slug, id) => {
//         navigation.navigate('Coursevideo', { slug, id });
//     };
//     const truncateTitle = (title, maxLength) => {
//         return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
//     };
//     const renderItem = ({ item }) => (
//         <CourseCard
//         title={truncateTitle(item.title, 18)}
//             subTitle={item.subTitle}
//             duration={item.duration}
//             image={item.image}
//             onClick={() => handleCoursePress(item.slug, item.id)}
//         />
//     );

//     if (loading) {
//         return (
//             <View style={styles.loadingContainer}>
//                 <ActivityIndicator size="large" color="#0000ff" />
//             </View>
//         );
//     }

//     if (error) {
//         return (
//             <View style={styles.errorContainer}>
//                 <Text style={styles.errorText}>Error: {error}</Text>
//             </View>
//         );
//     }

//     const ItemSeparator = () => <View style={styles.separator} />;

//     return (
//         <>
//             <Header1 />
//             <FlatList
//                 data={courses}
//                 renderItem={renderItem}
//                 keyExtractor={(item, index) => index.toString()}
//                 numColumns={2}
//                 columnWrapperStyle={styles.columnWrapper}
//                 ItemSeparatorComponent={ItemSeparator}
//                 contentContainerStyle={styles.coursesCardsWrapper}
//             />
//         </>
//     );
// };

// export default Courselist;

// const styles = StyleSheet.create({
//     coursesCardsWrapper: {
//         paddingHorizontal: 0,
//         backgroundColor: '#fff',
//         width: '100%',
//         padding:10,
//         height:'100%'

//     },
//     errorContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     },
//     errorText: {
//         color: 'red',
//         fontSize: 16,
//         textAlign: 'center',
//     },
//     loadingContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     columnWrapper: {
//         justifyContent: 'space-around',
//         padding:5,
        
//     },
// });


import React, { useEffect, useState, useContext } from 'react';
import { FlatList, StyleSheet, Text, View, ActivityIndicator, Button, Linking } from 'react-native';
import CourseCard from '../components/CourseCard';
import Header1 from '../components/Header1';
import { fetchLearnings } from '../services/service.api';
import { AuthContext } from '../contexts/AuthContext';

const Courselist = ({ navigation }) => {
    const { logout } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCourses = async () => {
            try {
                const data = await fetchLearnings();
                setCourses(data.enrolments.map(enrolment => enrolment.course));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadCourses();
    }, []);

    const handleCoursePress = (slug, id) => {
        navigation.navigate('Coursevideo', { slug, id });
    };

    const handleExplorePress = () => {
        Linking.openURL('https://codebinx.com/courses/');
    };

    const truncateTitle = (title, maxLength) => {
        return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
    };

    const renderItem = ({ item }) => (
        <CourseCard
            title={truncateTitle(item.title, 18)}
            subTitle={item.subTitle}
            duration={item.duration}
            image={item.image}
            onClick={() => handleCoursePress(item.slug, item.id)}
        />
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Error: {error}</Text>
            </View>
        );
    }

    const ItemSeparator = () => <View style={styles.separator} />;

    return (
        <>
            <Header1 />
            {courses.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No courses available</Text>
                    <Button title="Explore" onPress={handleExplorePress} />
                </View>
            ) : (
                <FlatList
                    data={courses}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                    ItemSeparatorComponent={ItemSeparator}
                    contentContainerStyle={styles.coursesCardsWrapper}
                />
            )}
        </>
    );
};

export default Courselist;

const styles = StyleSheet.create({
    coursesCardsWrapper: {
        paddingHorizontal: 0,
        // backgroundColor: '#fff',
        width: '100%',
        padding: 10,

    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    columnWrapper: {
        justifyContent: 'space-around',
        padding: 5,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 18,
        marginBottom: 20,
    },
    separator: {
        height: 10,
    },
});
