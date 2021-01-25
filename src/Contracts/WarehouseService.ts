import { Warehouse } from "src/Web/Warehouse/Warehouse";
import { WarehouseItem } from "src/Web/WarehouseItem/WarehouseItem";


export abstract class WarehouseService {
  abstract saveItem(item: WarehouseItem): Promise<WarehouseItem>;
  abstract getItem(itemId: string): Promise<WarehouseItem>;
  abstract getItems(filter: string, offet: number, limit: number): Promise<WarehouseItem[]>;
  abstract getWarehouses(filter: string, offet: number, limit: number): Promise<Warehouse[]>
}