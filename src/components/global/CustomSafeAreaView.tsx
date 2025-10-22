import {ReactNode , FC} from 'react';
import {  StyleSheet, View , ViewStyle } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context'


interface CustomerSafeAreaViewProps {
    children:ReactNode,
    style?: ViewStyle
}

const CustomerSafeAreaView:FC<CustomerSafeAreaViewProps> = ({children , style}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView/>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffff"
    }
})

export default CustomerSafeAreaView;