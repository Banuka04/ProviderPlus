import React, { useRef } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles, COLORS } from '@/app/UserSignUpStyles';

const UserSignUp2 = ({ navigation }: any) => {
    const pin1 = useRef<TextInput>(null);
    const pin2 = useRef<TextInput>(null);
    const pin3 = useRef<TextInput>(null);
    const pin4 = useRef<TextInput>(null);
    return (
        <View style={globalStyles.mainContainer}>
            <LinearGradient colors={COLORS.userGradient} style={StyleSheet.absoluteFill} />
            <SafeAreaView style={globalStyles.safeArea}>
                <View style={globalStyles.stepContainer}>
                    <View style={globalStyles.stepWrapper}><Text style={globalStyles.inactiveStepText}>Step 1</Text><View style={globalStyles.activeLine}/></View>
                    <View style={globalStyles.stepWrapper}><Text style={globalStyles.stepText}>Step 2</Text><View style={globalStyles.activeLine}/></View>
                    <View style={globalStyles.stepWrapper}><Text style={globalStyles.inactiveStepText}>Step 3</Text><View style={globalStyles.inactiveLine}/></View>
                </View>

                <Text style={globalStyles.title}>Enter Your OTP For Verification</Text>

                <BlurView intensity={20} style={globalStyles.inputWrapper}>
                    <TextInput placeholder="Contact No." placeholderTextColor="rgba(255,255,255,0.6)" style={globalStyles.textInput} />
                </BlurView>

                <View style={styles.otpRow}>
                    <TextInput
                        ref={pin1}
                        style={styles.otpCircle}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => text && pin2.current?.focus()}
                    />
                    <TextInput
                        ref={pin2}
                        style={styles.otpCircle}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => text && pin3.current?.focus()}
                    />
                    <TextInput
                        ref={pin3}
                        style={styles.otpCircle}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => text && pin4.current?.focus()}
                    />
                    <TextInput
                        ref={pin4}
                        style={styles.otpCircle}
                        keyboardType="numeric"
                        maxLength={1}
                    />
                </View>

                <Pressable style={globalStyles.nextButton} onPress={() => navigation.navigate('UserSignUp3')}>
                    <Text style={{color: '#FFF', fontSize: 24}}>→</Text>
                </Pressable>
            </SafeAreaView>
        </View>


    );
};

const styles = StyleSheet.create({
    otpRow: { flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20 },
    otpCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderWidth: 1,
        borderColor: '#FFF',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
});
export default UserSignUp2;