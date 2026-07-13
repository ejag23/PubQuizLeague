import type { InstitutionId, UserId } from "./ids";

export type Institution = {
  id: InstitutionId;
  managerUserId: UserId;
  name: string;
};
