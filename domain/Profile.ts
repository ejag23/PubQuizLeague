import type { ProfileId, UserId } from "./ids";

export type Profile = {
  id: ProfileId;
  userId: UserId;
  displayName: string;
};
