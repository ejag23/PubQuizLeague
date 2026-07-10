import { useRouter } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import AppButton from '@/components/ui/AppButton';
import AppCard from '@/components/ui/AppCard';
import AppScreen from '@/components/ui/AppScreen';
import { colors, typography } from '@/constants/design';

export default function SinglePlayerScreen() {
  const router = useRouter();

  return (
    <AppScreen centered>
      <AppCard centered style={styles.panel}>
        <Text style={styles.title}>Categories coming soon</Text>

        <AppButton title="Play test quiz" fullWidth onPress={() => router.push('/quiz/test')} />
      </AppCard>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  panel: {
    maxWidth: 420,
  },

  title: {
    color: colors.text,
    ...typography.title,
    textAlign: 'center',
  },
});
