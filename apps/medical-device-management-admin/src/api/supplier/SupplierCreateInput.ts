import { DeviceCreateNestedManyWithoutSuppliersInput } from "./DeviceCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  contactNumber?: string | null;
  devices?: DeviceCreateNestedManyWithoutSuppliersInput;
  name?: string | null;
};
