export type Brand<TValue, TBrand extends string> = TValue & {
  readonly __brand: TBrand;
};

export type UserId = Brand<string, "UserId">;
export type ProfileId = Brand<string, "ProfileId">;
export type InstitutionId = Brand<string, "InstitutionId">;
export type LeagueMembershipId = Brand<string, "LeagueMembershipId">;
export type LeagueId = Brand<string, "LeagueId">;
export type LeagueRulesId = Brand<string, "LeagueRulesId">;
export type LeagueRoundId = Brand<string, "LeagueRoundId">;
export type QuizId = Brand<string, "QuizId">;
export type QuestionId = Brand<string, "QuestionId">;
export type QuizRulesId = Brand<string, "QuizRulesId">;
export type QuizResultId = Brand<string, "QuizResultId">;
export type LeagueResultId = Brand<string, "LeagueResultId">;
export type PlayerStatisticsId = Brand<string, "PlayerStatisticsId">;
