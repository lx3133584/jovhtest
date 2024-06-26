import { Supplier } from "../supplier/Supplier";

export type Device = {
  createdAt: Date;
  expiryDate: Date | null;
  id: string;
  manufactureDate: Date | null;
  model: string | null;
  name: string | null;
  serialNumber: string | null;
  status?: "Option1" | null;
  supplier?: Supplier | null;
  updatedAt: Date;
};
