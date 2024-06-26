import { Device } from "../device/Device";

export type Supplier = {
  contactNumber: string | null;
  createdAt: Date;
  devices?: Array<Device>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
