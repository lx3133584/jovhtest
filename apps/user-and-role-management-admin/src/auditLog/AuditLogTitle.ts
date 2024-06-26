import { AuditLog as TAuditLog } from "../api/auditLog/AuditLog";

export const AUDITLOG_TITLE_FIELD = "id";

export const AuditLogTitle = (record: TAuditLog): string => {
  return record.id?.toString() || String(record.id);
};
