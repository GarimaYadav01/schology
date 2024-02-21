import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Dimensions, ScrollView, BackHandler, Alert, ImageBackground, Image } from 'react-native';
import TextinputComponent from '../../compontent/TextinputComponent';
import CustomButton from '../../compontent/Custombutton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { showMessage } from 'react-native-flash-message';

const { width, height } = Dimensions.get("screen");

const LoginScreen = (props) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required')
      .matches(
        // Regex pattern for email validation
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        'Invalid email address'
      ),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      // Add regex pattern for password validation
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one number'
      ),
  });

  useEffect(() => {
    const backAction = () => {
      if (props.navigation.isFocused()) {
        Alert.alert("Exit App", "Are you sure you want to exit?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();
  }, [props.navigation]);


  return (
    <SafeAreaView style={styles.container}>
    
        <View style={{ backgroundColor: "#FFF", flex: 1 }}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <ScrollView>
            <View style={styles.container1}>
             
              <Image source={require("../../assets/logo/logo.png")} style={styles.logo} resizeMode='contain' />
            
              <Text style={styles.header}>
                Login Your Account
              </Text>
          
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  // Handle form submission
                  console.log(values);
                  showMessage({
                    message: "Login successfully",
                    type: "success",
                    icon: "success"
                  })
                  props.navigation.navigate("Bottomnavigation")
                }}
              >
                {({ handleChange, handleBlur, handleSubmit, touched, values, errors }) => (
                  <View style={styles.contain}>
                    <TextinputComponent
                      inputType="email"
                      placeholder={"Enter your Email"}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                    {errors.email && touched.email && <Text style={[styles.error]}>{errors.email}</Text>}

                    <TextinputComponent
                      inputType="password"
                      placeholder={"Enter your password"}
                      secureTextEntry={true}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />

                    {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

                    <Text style={[styles.subheading, { color: "#0088CC", fontSize: 17, marginTop: 10, marginRight: width * 0.44 }]} onPress={() => props.navigation.navigate("ForgetPassword")}>
                      Forget Password ?
                    </Text>
                    <View style={{ marginTop: height * 0.03 }}>
                      <CustomButton label={"Login"} size={"large"} onPress={handleSubmit} />
                      <CustomButton label={"Register"} size={"large"} onPress={() => props.navigation.navigate("SignupScreen")} />
                    </View>
                  </View>
                )}
              </Formik>
            </View>
          </ScrollView>
        </View>
  

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  header: {
    fontSize: 30,
    fontWeight: "500",
    color: "#000",
    fontFamily: "Rubik-Bold",
    textAlign:"center"

  },
  container1: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: height * 0.07,
    alignItems: "center"
  },
  subheading: {
    color: "#000",
    fontSize: 17,
    fontWeight: "400",
    marginTop: 5,
    fontFamily: "Rubik-Regular"
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
    // justifyContent: "flex-start",
    fontFamily: "Rubik-Regular",
    width:width*0.8,
    marginHorizontal:16
  },
  contain: {
    // backgroundColor: "red",
    borderRadius: 10,
    width: width * 0.9,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.05
  },
  img: {
    width: width,
    height: height
  },
});

export default LoginScreen;
