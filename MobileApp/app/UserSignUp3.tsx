import React from 'react';
import { View, Text, TextInput, Pressable, Image, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles, COLORS } from '@/app/UserSignUpStyles';

const UserSignUp3 = ({ navigation }: any) => {
    return (
        <View style={globalStyles.mainContainer}>
            <LinearGradient colors={COLORS.userGradient} style={StyleSheet.absoluteFill} />
            <SafeAreaView style={globalStyles.safeArea}>
                <View style={globalStyles.stepContainer}>
                    <View style={globalStyles.stepWrapper}><Text style={globalStyles.inactiveStepText}>Step 1</Text><View style={globalStyles.activeLine}/></View>
                    <View style={globalStyles.stepWrapper}><Text style={globalStyles.inactiveStepText}>Step 2</Text><View style={globalStyles.activeLine}/></View>
                    <View style={globalStyles.stepWrapper}><Text style={globalStyles.stepText}>Step 3</Text><View style={globalStyles.activeLine}/></View>
                </View>

                <Text style={globalStyles.title}>Create Password</Text>

                <BlurView intensity={20} style={globalStyles.inputWrapper}>
                    <TextInput placeholder="Password" secureTextEntry placeholderTextColor="rgba(255,255,255,0.6)" style={globalStyles.textInput} />
                </BlurView>
                <BlurView intensity={20} style={globalStyles.inputWrapper}>
                    <TextInput placeholder="Re-Enter Password" secureTextEntry placeholderTextColor="rgba(255,255,255,0.6)" style={globalStyles.textInput} />
                </BlurView>

                <Pressable style={globalStyles.nextButton} onPress={() => navigation.navigate('UserLogin')}>
                    <Text style={{color: '#FFF', fontSize: 24}}>→</Text>
                </Pressable>
            </SafeAreaView>
        </View>
    );
};
export default UserSignUp3;