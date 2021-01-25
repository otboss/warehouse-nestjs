import { Owner } from "../Owner/Owner";

export class WarehouseItem {
  public id: string;
  constructor(
    public itemName: string,
    public owner: Owner,
    public price?: number,
    public forSale?: boolean,
    public forAuction?: boolean,
  ) { }
}

