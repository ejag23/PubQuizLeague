import { StyleSheet, View } from "react-native";

import { colors, radius, spacing } from "@/constants/design";

type ProgressBarProps = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = total > 0 ? Math.min(Math.max(current / total, 0), 1) : 0;

  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width: `${progress * 100}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 10,
    backgroundColor: colors.surfaceMuted,
    borderRadius: radius.pill,
    marginBottom: spacing.lg,
    overflow: "hidden",
    width: "100%",
  },

  fill: {
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    height: "100%",
  },
});
