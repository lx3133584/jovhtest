import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeviceListRelationFilter } from "../device/DeviceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type SupplierWhereInput = {
  contactNumber?: StringNullableFilter;
  devices?: DeviceListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
