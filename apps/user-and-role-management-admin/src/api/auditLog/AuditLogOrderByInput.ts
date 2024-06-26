import { SortOrder } from "../../util/SortOrder";

export type AuditLogOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
