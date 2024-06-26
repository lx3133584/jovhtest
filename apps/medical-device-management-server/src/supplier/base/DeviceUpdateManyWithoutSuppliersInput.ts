/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DeviceWhereUniqueInput } from "../../device/base/DeviceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DeviceUpdateManyWithoutSuppliersInput {
  @Field(() => [DeviceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DeviceWhereUniqueInput],
  })
  connect?: Array<DeviceWhereUniqueInput>;

  @Field(() => [DeviceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DeviceWhereUniqueInput],
  })
  disconnect?: Array<DeviceWhereUniqueInput>;

  @Field(() => [DeviceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DeviceWhereUniqueInput],
  })
  set?: Array<DeviceWhereUniqueInput>;
}

export { DeviceUpdateManyWithoutSuppliersInput as DeviceUpdateManyWithoutSuppliersInput };
