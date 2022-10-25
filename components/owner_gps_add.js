import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native"
import { useFonts } from 'expo-font';


function Header() {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.title}> হিস্টরি </Text>
        </View>
    )
}

function DashboardNavigator() {
    return (
        <View style={dashboardNavigatorStyles.container}>
            <Text style={dashboardNavigatorStyles.text}>প্লেব্যাক</Text>
            <Text style={dashboardNavigatorStyles.text}>রিপোর্ট</Text>
        </View>
    )
}

const StopPoint = (props) => {
    return (
        <View style={dashboardStyles.stopPoint}>
            {/* { console.log( point ) } */}
            <Text> {props.point.id} </Text>
            <Text> {props.point.area} </Text>
            <Text> {props.point.timeInterval} </Text>
            <Text style={{position: 'absolute', right: 10, top: 16}}> {props.point.duration} </Text>
        </View>
    )
}

function Dashboard() {
    const stopPoints = [
        {id: 'স্টপ 4', area: 'আজমপুর, উত্তরা', timeInterval: '৬ঃ২০ PM - ৬ঃ৫০ PM, ০৬ জুলাই', duration: '১০ মিনিট'}, 
        {id: 'স্টপ 3', area: 'আজমপুর, উত্তরা', timeInterval: '৬ঃ২০ PM - ৬ঃ৫০ PM, ০৬ জুলাই', duration: '১০ মিনিট'}, 
        {id: 'স্টপ 2', area: 'আজমপুর, উত্তরা', timeInterval: '৬ঃ২০ PM - ৬ঃ৫০ PM, ০৬ জুলাই', duration: '১০ মিনিট'}, 
        {id: 'স্টপ 1', area: 'আজমপুর, উত্তরা', timeInterval: '৬ঃ২০ PM - ৬ঃ৫০ PM, ০৬ জুলাই', duration: '১০ মিনিট'}
    ]
    return (
        <View style={dashboardStyles.container}>
            <View style={dashboardStyles.header}>
                <Text> back </Text>
                <Text style={{marginLeft: '30%', color: '#4285F4'}}> আজকে </Text>
            </View>
            <View style={dashboardStyles.analytics}>

            </View>
            {/* <FlatList data={stopPoints} renderItem={StopPoint} keyExtractor={(item) => item.id}> */}
                {
                    stopPoints.map(point => {
                        return <StopPoint point={point}></StopPoint>
                    })
                }
            {/* </FlatList> */}
        </View>
    )
}

export default function AddGPS() {
    const [fontsLoaded] = useFonts({
        'KohinoorBangla-Regular': require('../assets/fonts/KohinoorBangla-Regular.otf'),
        'KohinoorBangla-Medium': require('../assets/fonts/KohinoorBangla-Medium.otf'),
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Header></Header>
            <DashboardNavigator></DashboardNavigator>
            <Dashboard></Dashboard>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        fontFamily: 'KohinoorBangla-Medium',
    }
})

const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#292929',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '8%'
    },
    title: {
        color: '#fff',
        fontSize: 16
    }
})

const dashboardNavigatorStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '8%',
        alignItems: 'center',
        boxShadow: '0px 2px 52px rgba(0, 0, 0, 0.08)',
        paddingLeft: 30,
        paddingRight: 30
    },
    text: {
        fontSize: 16,
        lineHeight: 20,
    }
})

const dashboardStyles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        backgroundColor: '#EEE',
        height: '82%',
        paddingTop: 10,
        // flexDirection: 'row'
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20
    },
    analytics: {
        minHeight: 120
    },
    stopPoint: {
        boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.08)',
        height: 80,
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        borderRadius: 2,
        marginLeft: 6,
        marginRight: 6,
        position: 'relative'
    }
})