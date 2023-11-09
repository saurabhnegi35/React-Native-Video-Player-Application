// import {View, Text, TouchableOpacity, Touchable, Image} from 'react-native';
// import React, {useEffect, useRef, useState} from 'react';
// import Video from 'react-native-video';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import VideoPlayScreen from './src/Screens/VideoPlayScreen';
// import VideoPlaylistScreen from './src/Screens/VideoPlaylistScreen';
// // import Slider from '@react-native-community/slider';
// // import Orientation from 'react-native-orientation-locker';

// const Stack = createNativeStackNavigator();

// const App = () => {

//   return (
//     // <View style={{flex: 1}}>
//     //   <TouchableOpacity
//     //     style={{width: '100%', height: fullScreen ? '100%' : 200}}
//     //     onPress={() => {
//     //       setClicked(true);
//     //     }}>
//     //     <Video
//     //       paused={puased}
//     //       source={{
//     //         uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//     //       }}
//     //       ref={ref}
//     //       onProgress={x => {
//     //         console.log(x);
//     //         setProgress(x);
//     //       }}
//     //       // Can be a URL or a local file.
//     //       //  ref={(ref) => {
//     //       //    this.player = ref
//     //       //  }}                                      // Store reference
//     //       //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
//     //       //  onError={this.videoError}

//     //       // Callback when video cannot be loaded
//     //       muted
//     //       style={{width: '100%', height: fullScreen ? '100%' : 200}}
//     //       resizeMode="contain"
//     //     />
//     //     {clicked && (
//     //       <TouchableOpacity
//     //         style={{
//     //           width: '100%',
//     //           height: '100%',
//     //           position: 'absolute',
//     //           backgroundColor: 'rgba(0,0,0,.5)',
//     //           justifyContent: 'center',
//     //           alignItems: 'center',
//     //         }}>
//     //         <View style={{flexDirection: 'row'}}>
//     //           <TouchableOpacity
//     //             onPress={() => {
//     //               ref.current.seek(parseInt(progress.currentTime) - 10);
//     //             }}>
//     //             {/* <Image
//     //               source={require('./src/backward.png')}
//     //               style={{width: 30, height: 30, tintColor: 'white'}}
//     //             /> */}
//     //           </TouchableOpacity>
//     //           <TouchableOpacity
//     //             onPress={() => {
//     //               setPaused(!puased);
//     //             }}>
//     //             {/* <Image
//     //               source={
//     //                 puased
//     //                   ? require('./src/play-button.png')
//     //                   : require('./src/pause.png')
//     //               }
//     //               style={{
//     //                 width: 30,
//     //                 height: 30,
//     //                 tintColor: 'white',
//     //                 marginLeft: 50,
//     //               }}
//     //             /> */}
//     //           </TouchableOpacity>
//     //           <TouchableOpacity
//     //             onPress={() => {
//     //               ref.current.seek(parseInt(progress.currentTime) + 10);
//     //             }}>
//     //             {/* <Image
//     //               source={require('./src/forward.png')}
//     //               style={{
//     //                 width: 30,
//     //                 height: 30,
//     //                 tintColor: 'white',
//     //                 marginLeft: 50,
//     //               }}
//     //             /> */}
//     //           </TouchableOpacity>
//     //         </View>
//     //         <View
//     //           style={{
//     //             width: '100%',
//     //             flexDirection: 'row',
//     //             justifyContent: 'space-between',
//     //             position: 'absolute',
//     //             bottom: 0,
//     //             paddingLeft: 20,
//     //             paddingRight: 20,
//     //             alignItems: 'center',
//     //           }}>
//     //           <Text style={{color: 'white'}}>
//     //             {format(progress.currentTime)}
//     //           </Text>
//     //           {/* <Slider
//     //             style={{width: '80%', height: 40}}
//     //             minimumValue={0}
//     //             maximumValue={progress.seekableDuration}
//     //             minimumTrackTintColor="#FFFFFF"
//     //             maximumTrackTintColor="#fff"
//     //             onValueChange={(x)=>{
//     //               ref.current.seek(x);
//     //             }}
//     //           /> */}
//     //           <Text style={{color: 'white'}}>
//     //             {format(progress.seekableDuration)}
//     //           </Text>
//     //         </View>
//     //         <View
//     //           style={{
//     //             width: '100%',
//     //             flexDirection: 'row',
//     //             justifyContent: 'space-between',
//     //             position: 'absolute',
//     //             top: 10,
//     //             paddingLeft: 20,
//     //             paddingRight: 20,
//     //             alignItems: 'center',
//     //           }}>
//     //           {/* <TouchableOpacity onPress={()=>{
//     //           if(fullScreen){
//     //             Orientation.lockToPortrait();
//     //         } else{
//     //             Orientation.lockToLandscape();
//     //         }
//     //         setFullScreen(!fullScreen)
//     //         }}>
//     //           <Image source={fullScreen?require('./src/minimize.png'):require('./src/full-size.png')}
//     //            style={{width:24,height: 24,tintColor:'white'}}/>
//     //         </TouchableOpacity> */}
//     //         </View>
//     //       </TouchableOpacity>
//     //     )}
//     //   </TouchableOpacity>
//     // </View>
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="VideoPlaylist">
//         <Stack.Screen
//           name="VideoPlaylist"
//           component={VideoPlaylistScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="VideoPlayer"
//           component={VideoPlayScreen}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VideoPlaylistScreen from './src/Screens/VideoPlaylistScreen';
import VideoPlayScreen from './src/Screens/VideoPlayScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VideoPlaylist">
        <Stack.Screen
          name="VideoPlaylist"
          component={VideoPlaylistScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <>
    //   <VideoPlaylistScreen />
    //   {/* <VideoPlayScreen /> */}
    // </>
  );
};

export default App;
