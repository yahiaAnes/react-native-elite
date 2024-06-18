import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View , Image } from 'react-native';
import {Redirect , router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants'
import CustomButton from './components/CustomButton';





export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle= {{ height:'100%'}}>
        <View className="w-full min-h-[90vh] justify-items-center items-center px-4">
          <Image 
            source={images.logo}
            className='w-[200px] h-[120px] mt-5'
            resizeMode='contain'
          />
          <Image 
            source={images.main}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode='contain'
          />

          <View className='relative mt-5'>
            <Text className='text-4xl text-white text-center font-pextrabold'>
              Take your studies to another <Text className='text-[#3884ff] opacity-100'>Level</Text> 
            </Text>
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with neXmed
          </Text>

          <CustomButton 
            title='sign in now'
            containerStyles=' mt-7'
            handlePress={()=>router.push('/sign-in')}
          />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}


