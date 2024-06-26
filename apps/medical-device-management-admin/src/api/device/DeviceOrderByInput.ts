import { SortOrder } from "../../util/SortOrder";

export type DeviceOrderByInput = {
  createdAt?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  manufactureDate?: SortOrder;
  model?: SortOrder;
  name?: SortOrder;
  serialNumber?: SortOrder;
  status?: SortOrder;
  supplierId?: SortOrder;
  updatedAt?: SortOrder;
};
