import { StyleSheet, Text } from 'react-native';

import AppCard from '@/components/ui/AppCard';
import AppScreen from '@/components/ui/AppScreen';
import { colors, typography } from '@/constants/design';

type ComingSoonScreenProps = {
  message: string;
};

export default function ComingSoonScreen({ message }: ComingSoonScreenProps) {
  return (
    <AppScreen centered>
      <AppCard centered style={styles.panel}>
        <Text style={styles.message}>{message}</Text>
      </AppCard>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  panel: {
    maxWidth: 420,
  },

  message: {
    color: colors.text,
    ...typography.question,
    textAlign: 'center',
  },
});
