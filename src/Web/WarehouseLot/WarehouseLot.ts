export class WarehouseLot {
  public id: string;
  constructor(
    public warehouseId: string,
    /** Size in square feet */
    public size: number,
  ) { }
}