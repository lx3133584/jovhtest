/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SupplierService } from "../supplier.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SupplierCreateInput } from "./SupplierCreateInput";
import { Supplier } from "./Supplier";
import { SupplierFindManyArgs } from "./SupplierFindManyArgs";
import { SupplierWhereUniqueInput } from "./SupplierWhereUniqueInput";
import { SupplierUpdateInput } from "./SupplierUpdateInput";
import { DeviceFindManyArgs } from "../../device/base/DeviceFindManyArgs";
import { Device } from "../../device/base/Device";
import { DeviceWhereUniqueInput } from "../../device/base/DeviceWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SupplierControllerBase {
  constructor(
    protected readonly service: SupplierService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Supplier })
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSupplier(
    @common.Body() data: SupplierCreateInput
  ): Promise<Supplier> {
    return await this.service.createSupplier({
      data: data,
      select: {
        contactNumber: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Supplier] })
  @ApiNestedQuery(SupplierFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async suppliers(@common.Req() request: Request): Promise<Supplier[]> {
    const args = plainToClass(SupplierFindManyArgs, request.query);
    return this.service.suppliers({
      ...args,
      select: {
        contactNumber: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Supplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async supplier(
    @common.Param() params: SupplierWhereUniqueInput
  ): Promise<Supplier | null> {
    const result = await this.service.supplier({
      where: params,
      select: {
        contactNumber: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Supplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSupplier(
    @common.Param() params: SupplierWhereUniqueInput,
    @common.Body() data: SupplierUpdateInput
  ): Promise<Supplier | null> {
    try {
      return await this.service.updateSupplier({
        where: params,
        data: data,
        select: {
          contactNumber: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Supplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSupplier(
    @common.Param() params: SupplierWhereUniqueInput
  ): Promise<Supplier | null> {
    try {
      return await this.service.deleteSupplier({
        where: params,
        select: {
          contactNumber: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/devices")
  @ApiNestedQuery(DeviceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Device",
    action: "read",
    possession: "any",
  })
  async findDevices(
    @common.Req() request: Request,
    @common.Param() params: SupplierWhereUniqueInput
  ): Promise<Device[]> {
    const query = plainToClass(DeviceFindManyArgs, request.query);
    const results = await this.service.findDevices(params.id, {
      ...query,
      select: {
        createdAt: true,
        expiryDate: true,
        id: true,
        manufactureDate: true,
        model: true,
        name: true,
        serialNumber: true,
        status: true,

        supplier: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/devices")
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "update",
    possession: "any",
  })
  async connectDevices(
    @common.Param() params: SupplierWhereUniqueInput,
    @common.Body() body: DeviceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      devices: {
        connect: body,
      },
    };
    await this.service.updateSupplier({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/devices")
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "update",
    possession: "any",
  })
  async updateDevices(
    @common.Param() params: SupplierWhereUniqueInput,
    @common.Body() body: DeviceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      devices: {
        set: body,
      },
    };
    await this.service.updateSupplier({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/devices")
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "update",
    possession: "any",
  })
  async disconnectDevices(
    @common.Param() params: SupplierWhereUniqueInput,
    @common.Body() body: DeviceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      devices: {
        disconnect: body,
      },
    };
    await this.service.updateSupplier({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Post("/suppliers/create")
  @swagger.ApiOkResponse({
    type: Supplier,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CreateSupplierRecord(
    @common.Body()
    body: SupplierUpdateInput
  ): Promise<Supplier> {
    return this.service.CreateSupplierRecord(body);
  }

  @common.Delete("/suppliers/delete/:id")
  @swagger.ApiOkResponse({
    type: Supplier,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async DeleteSupplierRecord(
    @common.Body()
    body: SupplierUpdateInput
  ): Promise<Supplier> {
    return this.service.DeleteSupplierRecord(body);
  }

  @common.Get("/suppliers")
  @swagger.ApiOkResponse({
    type: Supplier,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetSuppliers(
    @common.Body()
    body: SupplierUpdateInput
  ): Promise<Supplier[]> {
    return this.service.GetSuppliers(body);
  }

  @common.Put("/suppliers/update/:id")
  @swagger.ApiOkResponse({
    type: Supplier,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async UpdateSupplierInfo(
    @common.Body()
    body: SupplierUpdateInput
  ): Promise<Supplier> {
    return this.service.UpdateSupplierInfo(body);
  }
}
