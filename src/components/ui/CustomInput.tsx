import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { TextInput } from 'react-native-gesture-handler';

interface InputProps {
    left:React.ReactNode;
    onClear?:() => void;
    right?: boolean
}

const CustomInput:FC<InputProps> = ({left , onClear,right , ...props}) => {
  return (
    <View style={styles.flexRow}>
        {left}
        <TextInput {...props} style={styles.inputContainer} placeholderTextColor="#ccc"/>
        <View style={styles.icon}>
            {props?.value?.length != 0 && right}
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({

})

export default CustomInput