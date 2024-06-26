import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type DeviceWhereInput = {
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  manufactureDate?: DateTimeNullableFilter;
  model?: StringNullableFilter;
  name?: StringNullableFilter;
  serialNumber?: StringNullableFilter;
  status?: "Option1";
  supplier?: SupplierWhereUniqueInput;
};
