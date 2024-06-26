import { DeviceUpdateManyWithoutSuppliersInput } from "./DeviceUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  contactNumber?: string | null;
  devices?: DeviceUpdateManyWithoutSuppliersInput;
  name?: string | null;
};
