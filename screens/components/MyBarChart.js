import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const screenWidth = Dimensions.get("window").width;

const MyBarChart = (props) => {

    const title = [
        'Income Weekly',
        'Income Yearly',
        'Expense Weekly',
        'Expense Yearly',
        'Profit Weekly',
        'Profit Yearly',
    ];

    const [DATA, SETDATA] = useState();
    const [visible, SetVisible] = useState(false);
    const [type, SetType] = useState(0);

    useEffect(() => {

        switch (type) {
            case 0:
                SetVisible(false);
                handleIncomeWeekly();
                break;
            case 1:
                SetVisible(false);
                handleIncomeYearly();
                break;
            case 2:
                SetVisible(false);
                handleExpenseWeekly();
                break;
            case 3:
                SetVisible(false);
                handleExpenseYearly();
                break;
            case 4:
                SetVisible(false);
                handleProfitWeekly();
                break;
            case 5:
                SetVisible(false);
                handleProfitYearly();
                break;
            default:
                alert('Huge Error in login of nav of Charts!!!!');
        }

    }, [type]);

    /*const data = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
            {
                data: [props.data.get('Sun'), props.data.get('Mon'), props.data.get('Tue'), props.data.get('Wed'), props.data.get('Thu'), props.data.get('Fri'), props.data.get('Sat')]
            }
        ]
    };*/

    const handleIncomeWeekly = () => {
        let vlabels = new Array();
        let vdata = new Array();

        props.incomeWeekly.forEach(item => {
            vlabels.push(item.day_col);
            vdata.push(parseFloat(item.wamount));
        });

        const obj = {
            labels: vlabels,
            datasets: [
                {
                    data: vdata,
                }
            ]
        }

        SETDATA(obj);
        SetVisible(true);
    }

    const handleIncomeYearly = () => {
        let vlabels = new Array();
        let vdata = new Array();

        props.incomeYearly.forEach(item => {
            vlabels.push(item.month_col);
            vdata.push(parseFloat(item.yamount));
        });

        const obj = {
            labels: vlabels,
            datasets: [
                {
                    data: vdata,
                }
            ]
        }

        SETDATA(obj);
        SetVisible(true);
    }

    const handleExpenseWeekly = () => {
        let vlabels = new Array();
        let vdata = new Array();

        props.expenseWeekly.forEach(item => {
            vlabels.push(item.day_col);
            vdata.push(parseFloat(item.wamount));
        });

        const obj = {
            labels: vlabels,
            datasets: [
                {
                    data: vdata,
                }
            ]
        }

        SETDATA(obj);
        SetVisible(true);
    }

    const handleExpenseYearly = () => {
        let vlabels = new Array();
        let vdata = new Array();

        props.expenseYearly.forEach(item => {
            vlabels.push(item.month_col);
            vdata.push(parseFloat(item.yamount));
        });

        const obj = {
            labels: vlabels,
            datasets: [
                {
                    data: vdata,
                }
            ]
        }

        SETDATA(obj);
        SetVisible(true);
    }

    const handleProfitWeekly = () => {
        let vlabels = new Array();
        let vdata = new Array();

        props.profitWeekly.forEach(item => {
            vlabels.push(item.day_col);
            vdata.push(parseFloat(item.wprofit));
        });

        const obj = {
            labels: vlabels,
            datasets: [
                {
                    data: vdata,
                }
            ]
        }

        SETDATA(obj);
        SetVisible(true);
    }

    const handleProfitYearly = () => {
        let vlabels = new Array();
        let vdata = new Array();

        props.profitYearly.forEach(item => {
            vlabels.push(item.month_col);
            vdata.push(parseFloat(item.yprofit));
        });

        const obj = {
            labels: vlabels,
            datasets: [
                {
                    data: vdata,
                }
            ]
        }

        SETDATA(obj);
        SetVisible(true);
    }

    const goLeft = () => {

        let vv = type;

        vv--;

        if (vv < 0) {
            vv = 5;
        }

        SetType(vv);
    }

    const goRight = () => {
        let vv = type;

        vv++;

        if (vv > 5) {
            vv = 0;
        }

        SetType(vv);
    }

    const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "black",
        backgroundGradientToOpacity: 0.5,
        color: () => 'white',
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const handleTest = () => {

    }

    return (
        <View>
            <View
                style={{
                    backgroundColor: props.mood,
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        color: 'grey',
                        fontWeight: 'bold',
                    }}
                >{title[type]}</Text>
            </View>
            {visible ? <BarChart
                style={{
                    flex: 1,
                    marginTop: 20,
                }}
                data={DATA}
                width={screenWidth}
                height={350}
                yAxisLabel="tk"
                chartConfig={chartConfig}
                verticalLabelRotation={0}
            /> : null}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 25,
                }}
            >
                <View
                    style={{
                        borderRadius: 5,
                        borderWidth: 3,
                        borderColor: props.color,
                        paddingLeft: 30,
                        paddingRight: 30,
                        paddingTop: 2,
                        paddingBottom: 2,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => goLeft()}
                    >
                        <AntDesign
                            name='left'
                            size={50}
                            color={props.color}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        borderRadius: 5,
                        borderWidth: 3,
                        borderColor: props.color,
                        paddingLeft: 30,
                        paddingRight: 30,
                        paddingTop: 2,
                        paddingBottom: 2,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => goRight()}
                    >
                        <AntDesign
                            name='right'
                            size={50}
                            color={props.color}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

};

export default MyBarChart;