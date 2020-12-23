import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { FlatGrid } from 'react-native-super-grid';
import { StoreState } from '@reducers';
import { ROUTES } from '@constants/routes';

export const ImageSelectScreen = () => {
  const imagesState = useSelector((state: StoreState) => state.images);
  const navigation = useNavigation();

  const handleImageItemPress = (imageUrl: string) => {
    navigation.navigate(ROUTES.imageItem, { imageUrl });
  };

  const renderImageItem = ({ item }: { item: string }) => (
    <TouchableOpacity onPress={() => handleImageItemPress(item)}>
      <Image source={{ uri: item }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {!imagesState.error ? <Text>{imagesState.error}</Text> : null}
      <FlatGrid
        itemDimension={150}
        spacing={10}
        data={imagesState.images}
        renderItem={renderImageItem}
        style={styles.imageGrid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageGrid: {
    flex: 1,
  },
  image: {
    height: 150,
    resizeMode: 'contain',
  },
});
