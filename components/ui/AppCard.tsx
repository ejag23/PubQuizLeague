import { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { colors, radius, spacing } from '@/constants/design';

type AppCardProps = {
  children: ReactNode;
  centered?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default function AppCard({ children, centered = false, style }: AppCardProps) {
  return <View style={[styles.card, centered && styles.centered, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.sm,
    borderWidth: 1,
    gap: spacing.xl,
    padding: spacing.xxl,
    width: '100%',
  },

  centered: {
    alignItems: 'center',
  },
});
