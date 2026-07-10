import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "@/constants/design";
import { Question } from "@/types/Questions";

type QuestionCardProps = {
  question: Question;
  selectedAnswer: string;
  onSelectAnswer: (answer: string) => void;
  disabled?: boolean;
  showCorrectAnswer?: boolean;
};

export default function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
  disabled = false,
  showCorrectAnswer = false,
}: QuestionCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question.question}</Text>

      {question.answers.map((answer) => (
        <Pressable
          key={answer}
          style={({ pressed }) => [
            styles.answerButton,
            selectedAnswer === answer && styles.selectedAnswer,
            showCorrectAnswer && answer === question.correctAnswer && styles.correctAnswer,
            disabled && styles.disabledAnswer,
            pressed && !disabled && styles.pressedAnswer,
          ]}
          onPress={() => onSelectAnswer(answer)}
          disabled={disabled}
        >
          <Text style={styles.answerText}>{answer}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
  },
  question: {
    color: colors.text,
    ...typography.question,
    marginBottom: spacing.xxl,
    textAlign: "center",
  },
  answerButton: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: radius.md,
    marginBottom: spacing.md,
    padding: spacing.lg,
    width: "100%",
  },
  selectedAnswer: {
    backgroundColor: colors.selected,
  },
  correctAnswer: {
    backgroundColor: colors.primary,
  },
  disabledAnswer: {
    opacity: 0.65,
  },
  pressedAnswer: {
    backgroundColor: colors.surfacePressed,
  },
  answerText: {
    color: colors.text,
    ...typography.body,
    textAlign: "center",
  },
});
