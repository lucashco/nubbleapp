import React from 'react';
import {View, ScrollView} from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({
  backgroundColor,
  children,
}: ContainerProps) {
  return <ScrollView style={{backgroundColor}}>{children}</ScrollView>;
}
export function ViewContainer({backgroundColor, children}: ContainerProps) {
  return <View style={{backgroundColor}}>{children}</View>;
}
