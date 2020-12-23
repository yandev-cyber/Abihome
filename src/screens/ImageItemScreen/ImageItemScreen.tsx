import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { StoreState } from '@reducers';

type ParamList = {
  ImageView: {
    imageUrl: string;
  };
};

export const ImageItemScreen = () => {
  const imagesState = useSelector((state: StoreState) => state.images);
  const route = useRoute<RouteProp<ParamList, 'ImageView'>>();
  const { imageUrl } = route.params;

  return (
    <View style={styles.container}>
      {!imagesState.error ? <Text>{imagesState.error}</Text> : null}
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
});
