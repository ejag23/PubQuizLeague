import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';

import { colors, radius, spacing, typography } from '@/constants/design';

type AppButtonVariant = 'primary' | 'secondary' | 'danger';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  accessibilityLabel?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
  variant?: AppButtonVariant;
};

export default function AppButton({
  title,
  onPress,
  accessibilityLabel,
  disabled = false,
  fullWidth = false,
  style,
  variant = 'primary',
}: AppButtonProps) {
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        styles[variant],
        fullWidth && styles.fullWidth,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}>
      <Text style={[styles.text, variant === 'secondary' && styles.secondaryText]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: radius.md,
    paddingHorizontal: spacing.xxl,
    paddingVertical: 14,
  },

  primary: {
    backgroundColor: colors.primary,
  },

  secondary: {
    backgroundColor: colors.actionSecondary,
  },

  danger: {
    backgroundColor: colors.danger,
  },

  fullWidth: {
    width: '100%',
  },

  pressed: {
    opacity: 0.78,
  },

  disabled: {
    opacity: 0.5,
  },

  text: {
    color: colors.text,
    fontSize: typography.button.fontSize,
    fontWeight: typography.button.fontWeight,
  },

  secondaryText: {
    color: colors.textSecondary,
  },
});
