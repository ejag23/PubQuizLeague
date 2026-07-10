import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import AppButton from "@/components/ui/AppButton";
import AppScreen from "@/components/ui/AppScreen";
import { colors, spacing, typography } from "@/constants/design";

type ResultsScreenProps = {
  onRestart: () => void;
  score: number;
  totalQuestions: number;
};

export default function ResultsScreen({ onRestart, score, totalQuestions }: ResultsScreenProps) {
  const router = useRouter();

  return (
    <AppScreen centered>
      <Text style={styles.title}>Quiz Complete</Text>

      <Text style={styles.subtitle}>Final Score</Text>

      <Text style={styles.scoreText}>
        {score} / {totalQuestions}
      </Text>

      <View style={styles.actions}>
        <AppButton title="Return to Categories" onPress={() => router.replace("/single-player")} />

        <AppButton title="Play Again" variant="secondary" onPress={onRestart} />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    ...typography.hero,
    marginBottom: spacing.md,
    textAlign: "center",
  },

  subtitle: {
    color: colors.textSecondary,
    ...typography.body,
    marginBottom: spacing.lg,
    textAlign: "center",
  },

  scoreText: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "bold",
  },

  actions: {
    gap: spacing.md,
    marginTop: spacing.xl,
    width: "100%",
  },
});
