import { StyleSheet, Text } from 'react-native';

import AppScreen from '@/components/ui/AppScreen';
import { colors, typography } from '@/constants/design';

export default function HomeScreen() {
  return (
    <AppScreen centered>
      <Text style={styles.title}>Welcome to Pub Quiz League</Text>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    ...typography.hero,
    textAlign: 'center',
  },
});
