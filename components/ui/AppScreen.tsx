import { ReactNode } from 'react';
import { ScrollView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { colors, spacing } from '@/constants/design';

type AppScreenProps = {
  children: ReactNode;
  centered?: boolean;
  scroll?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
};

export default function AppScreen({
  children,
  centered = false,
  scroll = false,
  contentStyle,
}: AppScreenProps) {
  const resolvedContentStyle = [
    styles.content,
    centered && styles.centered,
    contentStyle,
  ];

  if (scroll) {
    return (
      <ScrollView
        style={styles.screen}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={resolvedContentStyle}>
        {children}
      </ScrollView>
    );
  }

  return <View style={[styles.screen, resolvedContentStyle]}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flexGrow: 1,
    padding: spacing.xl,
  },

  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
