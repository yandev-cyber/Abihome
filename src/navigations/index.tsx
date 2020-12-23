import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { AppLoading } from '@screens/AppLoading';
import { ImageSelectScreen } from '@screens/ImageSelectScreen';
import { ImageItemScreen } from '@screens/ImageItemScreen';
import { ROUTES } from '@constants/routes';
import { StoreState } from '@reducers';
import { getImages } from '@actions/imagesActions';

const ImageStack = createStackNavigator();
const ImageRouter = () => (
  <ImageStack.Navigator initialRouteName={ROUTES.imageSelect}>
    <ImageStack.Screen
      name={ROUTES.imageSelect}
      component={ImageSelectScreen}
    />
    <ImageStack.Screen
      name={ROUTES.imageItem}
      component={ImageItemScreen}
      options={{ headerBackTitleVisible: false }}
    />
  </ImageStack.Navigator>
);

const MainTab = createBottomTabNavigator();
export const MainRouter = () => {
  const dispatch = useDispatch();
  const imageState = useSelector((state: StoreState) => state.images);

  useEffect(() => {
    dispatch(getImages());
  }, []);

  return imageState.loading ? (
    <AppLoading />
  ) : (
    <MainTab.Navigator tabBarOptions={{ labelStyle: { fontSize: 15 } }}>
      <MainTab.Screen name={ROUTES.firstTab} component={ImageRouter} />
      <MainTab.Screen
        name={ROUTES.secondTab}
        component={ImageItemScreen}
        initialParams={{ imageUrl: imageState.images[1] }}
      />
      <MainTab.Screen
        name={ROUTES.thirdTab}
        component={ImageItemScreen}
        initialParams={{
          imageUrl: imageState.images[imageState.images.length - 1],
        }}
      />
    </MainTab.Navigator>
  );
};
