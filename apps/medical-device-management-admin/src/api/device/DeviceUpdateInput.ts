import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type DeviceUpdateInput = {
  expiryDate?: Date | null;
  manufactureDate?: Date | null;
  model?: string | null;
  name?: string | null;
  serialNumber?: string | null;
  status?: "Option1" | null;
  supplier?: SupplierWhereUniqueInput | null;
};
