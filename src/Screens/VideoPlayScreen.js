import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Touchable,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const VideoPlayScreen = ({route}) => {
  console.log('Video Play Screen Source', route.params.source);
  const [clicked, setClicked] = useState(false);
  const [progress, setProgress] = useState(null);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);

  const ref = useRef();
  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  useEffect(() => {
    let timeout;
    if (clicked) {
      timeout = setTimeout(() => {
        setClicked(false);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [clicked]);

  return (
    <SafeAreaView>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{width: '100%', height: 200}}
          onPress={() => {
            if (!clicked) {
              setClicked(true);
            } else {
              setClicked(false);
            }
          }}>
          <Video
            paused={paused}
            source={{
              uri: route.params.source.sources,
            }}
            ref={ref}
            onProgress={x => {
              setProgress(x);
            }}
            muted={muted}
            style={{width: '100%', height: 200}}
            resizeMode="cover"
          />
          {clicked && (
            <TouchableOpacity
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,.5)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => {
                    ref.current.seek(parseInt(progress.currentTime) - 10);
                  }}>
                  {/* <Ionicons
                    name="play-back-sharp"
                    size={25}
                    color={'white'}
                    style={{
                      marginRight: 50,
                    }}
                  /> */}
                  <Image
                    source={require('../Assets/Images/backward.png')}
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: 'white',
                      marginRight: 50,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setPaused(!paused);
                  }}>
                  {/* <Ionicons
                    name={paused ? 'play-sharp' : 'pause'}
                    size={35}
                    color={'white'}
                  /> */}

                  <Image
                    source={
                      paused
                        ? require('../Assets/Images/play.png')
                        : require('../Assets/Images/pause-button.png')
                    }
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: 'white',
                      // marginLeft: 50,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    ref.current.seek(parseInt(progress.currentTime) + 10);
                  }}>
                  {/* <Icon
                    name="fast-forward-10"
                    size={25}
                    color={'white'}
                    style={{
                      marginLeft: 50,
                    }}
                  /> */}
                  <Image
                    source={require('../Assets/Images/forward.png')}
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: 'white',
                      marginLeft: 50,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  position: 'absolute',
                  bottom: 0,
                }}>
                <Text style={{color: 'white', paddingLeft: 15}}>
                  {format(progress.currentTime)}/{' '}
                  {format(progress.seekableDuration)}
                </Text>

                <Slider
                  style={{width: '100%'}}
                  minimumValue={0}
                  maximumValue={progress.seekableDuration}
                  value={progress.currentTime}
                  onValueChange={value => ref.current.seek(value)}
                  minimumTrackTintColor="red"
                  maximumTrackTintColor="#FFFFFF"
                  thumbTintColor="red"
                />
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    gap: 10,
                    marginLeft: 15,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setPaused(!paused);
                    }}>
                    {/* <Ionicons
                      name={paused ? 'play-sharp' : 'pause'}
                      size={20}
                      color={'white'}
                    /> */}

                    <Image
                      source={
                        paused
                          ? require('../Assets/Images/play.png')
                          : require('../Assets/Images/pause-button.png')
                      }
                      style={{
                        width: 15,
                        height: 15,
                        tintColor: 'white',
                        // marginLeft: 50,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setMuted(!muted);
                    }}>
                    {/* <Ionicons
                      name={paused ? 'play-sharp' : 'pause'}
                      size={20}
                      color={'white'}
                    /> */}
                    <Image
                      source={
                        muted
                          ? require('../Assets/Images/volume-off-indicator.png')
                          : require('../Assets/Images/volume.png')
                      }
                      style={{
                        width: 15,
                        height: 15,
                        tintColor: 'white',
                        marginBottom: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}

          <View>
            <Text
              style={{
                color: 'black',
                marginTop: 5,
                marginLeft: 10,
                fontWeight: '700',
              }}>
              {route.params.source.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {clicked ? (
        <View>
          <Text
            style={{
              color: 'white',
              marginTop: 5,
              marginLeft: 10,
              fontWeight: '700',
            }}>
            {route.params.source.title}
          </Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
};
export default VideoPlayScreen;
