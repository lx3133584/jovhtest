import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SUPPLIER_TITLE_FIELD } from "./SupplierTitle";

export const SupplierShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="contactNumber" source="contactNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Device"
          target="supplierId"
          label="Devices"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="expiryDate" source="expiryDate" />
            <TextField label="ID" source="id" />
            <TextField label="manufactureDate" source="manufactureDate" />
            <TextField label="model" source="model" />
            <TextField label="name" source="name" />
            <TextField label="serialNumber" source="serialNumber" />
            <TextField label="status" source="status" />
            <ReferenceField
              label="Supplier"
              source="supplier.id"
              reference="Supplier"
            >
              <TextField source={SUPPLIER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
