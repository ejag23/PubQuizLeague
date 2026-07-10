import { Stack } from 'expo-router';

import { colors } from '@/constants/design';

export default function QuizLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: colors.background,
        },
        headerShown: false,
      }}
    />
  );
}
