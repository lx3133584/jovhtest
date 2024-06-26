/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Supplier } from "./Supplier";
import { SupplierCountArgs } from "./SupplierCountArgs";
import { SupplierFindManyArgs } from "./SupplierFindManyArgs";
import { SupplierFindUniqueArgs } from "./SupplierFindUniqueArgs";
import { CreateSupplierArgs } from "./CreateSupplierArgs";
import { UpdateSupplierArgs } from "./UpdateSupplierArgs";
import { DeleteSupplierArgs } from "./DeleteSupplierArgs";
import { DeviceFindManyArgs } from "../../device/base/DeviceFindManyArgs";
import { Device } from "../../device/base/Device";
import { SupplierCreateInput } from "./SupplierCreateInput";
import { SupplierUpdateInput } from "./SupplierUpdateInput";
import { SupplierService } from "../supplier.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Supplier)
export class SupplierResolverBase {
  constructor(
    protected readonly service: SupplierService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "read",
    possession: "any",
  })
  async _suppliersMeta(
    @graphql.Args() args: SupplierCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Supplier])
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "read",
    possession: "any",
  })
  async suppliers(
    @graphql.Args() args: SupplierFindManyArgs
  ): Promise<Supplier[]> {
    return this.service.suppliers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Supplier, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "read",
    possession: "own",
  })
  async supplier(
    @graphql.Args() args: SupplierFindUniqueArgs
  ): Promise<Supplier | null> {
    const result = await this.service.supplier(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Supplier)
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "create",
    possession: "any",
  })
  async createSupplier(
    @graphql.Args() args: CreateSupplierArgs
  ): Promise<Supplier> {
    return await this.service.createSupplier({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Supplier)
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "update",
    possession: "any",
  })
  async updateSupplier(
    @graphql.Args() args: UpdateSupplierArgs
  ): Promise<Supplier | null> {
    try {
      return await this.service.updateSupplier({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Supplier)
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "delete",
    possession: "any",
  })
  async deleteSupplier(
    @graphql.Args() args: DeleteSupplierArgs
  ): Promise<Supplier | null> {
    try {
      return await this.service.deleteSupplier(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Device], { name: "devices" })
  @nestAccessControl.UseRoles({
    resource: "Device",
    action: "read",
    possession: "any",
  })
  async findDevices(
    @graphql.Parent() parent: Supplier,
    @graphql.Args() args: DeviceFindManyArgs
  ): Promise<Device[]> {
    const results = await this.service.findDevices(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.Mutation(() => Supplier)
  async CreateSupplierRecord(
    @graphql.Args()
    args: SupplierCreateInput
  ): Promise<Supplier> {
    return this.service.CreateSupplierRecord(args);
  }

  @graphql.Mutation(() => Supplier)
  async DeleteSupplierRecord(
    @graphql.Args()
    args: DeleteSupplierArgs
  ): Promise<Supplier> {
    return this.service.DeleteSupplierRecord(args);
  }

  @graphql.Query(() => [Supplier])
  async GetSuppliers(
    @graphql.Args()
    args: SupplierFindManyArgs
  ): Promise<Supplier[]> {
    return this.service.GetSuppliers(args);
  }

  @graphql.Mutation(() => Supplier)
  async UpdateSupplierInfo(
    @graphql.Args()
    args: SupplierUpdateInput
  ): Promise<Supplier> {
    return this.service.UpdateSupplierInfo(args);
  }
}