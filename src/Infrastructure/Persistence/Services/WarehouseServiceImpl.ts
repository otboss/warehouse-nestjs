import { Injectable } from "@nestjs/common";
import { Args, Mutation, Query } from "@nestjs/graphql/dist";
import { WarehouseService } from "src/Contracts/WarehouseService";
import { Warehouse } from "src/Web/Warehouse/Warehouse";
import { WarehouseModel } from "src/Web/Warehouse/WarehouseModel";
import { WarehouseItem } from "src/Web/WarehouseItem/WarehouseItem";
import { WarehouseItemInput } from "src/Web/WarehouseItem/WarehouseItemInput";
import { WarehouseItemModel } from "src/Web/WarehouseItem/WarehouseItemModel";

@Injectable()
export class WarehouseServiceImpl implements WarehouseService {
  @Mutation(() => WarehouseItemModel)
  async saveItem(
    @Args("warehouseItem") warehouseItem: WarehouseItemInput,
  ): Promise<WarehouseItem> {
    throw new Error("Method not implemented.");
  }

  @Query(() => WarehouseItemModel)
  async getItem(
    @Args("itemId") itemId: string,
  ): Promise<WarehouseItem> {
    throw new Error("Method not implemented.");
  }

  @Query(() => [WarehouseItemModel])
  async getItems(
    @Args("filter", { defaultValue: "" }) filter: string,
    @Args("offset", { defaultValue: 0 }) offset: number,
    @Args("limit", { defaultValue: 50 }) limit: number,
  ): Promise<WarehouseItem[]> {
    throw new Error("Method not implemented.");
  }

  @Query(() => [WarehouseModel])
  async getWarehouses(
    @Args("filter", { defaultValue: "" }) filter: string,
    @Args("offset", { defaultValue: 0 }) offset: number,
    @Args("limit", { defaultValue: 50 }) limit: number,
  ): Promise<Warehouse[]> {
    throw new Error("Method not implemented.");
  }

}