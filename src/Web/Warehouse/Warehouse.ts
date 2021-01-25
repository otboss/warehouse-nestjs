import { WarehouseLot } from "../WarehouseLot/WarehouseLot";

export class Warehouse {
  public id: string;
  constructor(
    public address: string,
    public lots: WarehouseLot[],
  ) { }
}