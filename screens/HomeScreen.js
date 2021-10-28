import React,{useState} from 'react';
import { View,Text,StyleSheet,TouchableOpacity, Button } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeScreen = ({navigation,route}) => {

    const handleIncome = () => {

        navigation.navigate('Income',{
            color:route.params.color,
            textColor:route.params.textColor,
            mood:route.params.mood,
            email:route.params.email,
            username:route.params.username,
            user_id:route.params.user_id,
            password:route.params.password,
        });
    
    }

    const handleExpense = () => {
        navigation.navigate('Expense',{
            color:route.params.color,
            textColor:route.params.textColor,
            mood:route.params.mood,
            email:route.params.email,
            username:route.params.username,
            user_id:route.params.user_id,
            password:route.params.password,
        });
    }

    const handleReport = () => {
        navigation.navigate('Report',{
            color:route.params.color,
            textColor:route.params.textColor,
            mood:route.params.mood,
            email:route.params.email,
            username:route.params.username,
            user_id:route.params.user_id,
            password:route.params.password,
        });
    }

    const handleCharts = () => {
        navigation.navigate('Charts',{
            color:route.params.color,
            textColor:route.params.textColor,
            mood:route.params.mood,
            email:route.params.email,
            username:route.params.username,
            user_id:route.params.user_id,
            password:route.params.password,
            bar:route.params.bar,
            pie:route.params.pie,
            line:route.params.line,
        });
    }

    const handleTest = () => {

        console.log(route.params);
    }

    const handleSettings = () => {

        navigation.navigate('Settings',{
            color:route.params.color,
            textColor:route.params.textColor,
            mood:route.params.mood,
            email:route.params.email,
            username:route.params.username,
            user_id:route.params.user_id,
            password:route.params.password,
        });

    }

    const handleBudget = () => {
        navigation.navigate('Budget',{
            color:route.params.color,
            textColor:route.params.textColor,
            mood:route.params.mood,
            email:route.params.email,
            username:route.params.username,
            user_id:route.params.user_id,
            password:route.params.password,
        });
    }

    return (

        <View style={styles.container}>
            <View
                style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                }}
            >
                <View
                    style={{
                        backgroundColor:'black',
                        alignItems:'center',
                        justifyContent:'center',
                        width:'20%',
                        borderColor:'#563df5',
                        borderWidth:4,
                        borderRadius:10,
                    }}
                >
                    <TouchableOpacity
                        onPress={()=>handleBudget()}
                    >
                        <Material
                            name='calendar-range-outline'
                            size={50}
                            color='#563df5'
                            style={{
                                margin:5,
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        backgroundColor:'black',
                        alignItems:'center',
                        justifyContent:'center',
                        width:'20%',
                        borderColor:'#563df5',
                        borderWidth:4,
                        borderRadius:10,
                    }}
                >
                    <TouchableOpacity
                        onPress={()=>handleSettings()}
                    >
                        <Entypo
                            name='add-to-list'
                            size={50}
                            color={route.params.color}
                            style={{
                                margin:5,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    backgroundColor:'#7ae7eb',
                    marginTop:20,
                    marginLeft:40,
                    marginRight:40,
                    paddingTop:120,
                    paddingBottom:120,
                    borderRadius:50,
                    alignItems:'center',
                }}
            >
                <Text>graph</Text>
            </View>
            <View
                style={{
                    flexGrow:1,
                    flexDirection:'row',

                }}
            >
                <TouchableOpacity
                    style={{flexGrow:1}}
                    onPress={()=>handleIncome()}
                >
                    <View
                        style={{
                            flexGrow:1,
                            backgroundColor:'#7aeb7a',
                            margin:10,
                            borderRadius:10,
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        <Text
                            style={{
                                color:'white',
                                fontWeight:'bold',
                            }}
                        >Add Income</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{flexGrow:1}}
                    onPress={()=>handleExpense()}
                >
                    <View
                        style={{
                            flexGrow:1,
                            backgroundColor:'#7775f0',
                            margin:10,
                            borderRadius:10,
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        <Text
                                style={{
                                    color:'white',
                                    fontWeight:'bold',
                                }}
                        >Add Expense</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flexGrow:1,
                    flexDirection:'row',
                }}
            >
                <TouchableOpacity
                    style={{flexGrow:1}}
                    onPress={()=>handleReport()}
                >
                    <View
                        style={{
                            flexGrow:1,
                            backgroundColor:'#f075b7',
                            margin:10,
                            borderRadius:10,
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        <Text
                                style={{
                                    color:'white',
                                    fontWeight:'bold',
                                }}
                        >All Report</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{flexGrow:1}}
                    onPress={()=>handleCharts()}
                >
                <View
                    style={{
                        flexGrow:1,
                        backgroundColor:'#f0c175',
                        margin:10,
                        borderRadius:10,
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                >
                    <Text
                            style={{
                                color:'white',
                                fontWeight:'bold',
                            }}
                        >All Charts</Text>
                </View>
                </TouchableOpacity>
            </View>
            <Button
                title="test"
                onPress={()=>handleTest()}
            />
        </View>

    )

}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
    }
})