import React from 'react';
import {View,Text,Modal,
FlatList} from 'react-native';

const DATA = [
    {id:'1',name:'atiq',user_id:'2'},
    {id:'2',name:'shafin',user_id:'2'},
    {id:'3',name:'edon',user_id:'2'},
];

const Test = () => {

    const returnModal = () => {

        const renderItemCat = ({item}) =>{
            return(
                <View>
                    <Text>{item.name}</Text>
                </View>
            )
        }

        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={true}
                onRequestClose={()=>{}}
            >
                <FlatList
                    data={DATA}
                    renderItem={renderItemCat}
                    keyExtractor={item=>item.id}
                />
            </Modal>
        )
    }

    return (
        <View>
            {returnModal()}
        </View>
    )
}

export default Test;