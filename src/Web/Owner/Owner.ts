export class Owner {
  public timestamp: string = Date.now().toString();
  constructor(
    public id: string,
    public passportNumber: string,
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public address: string,
    public isMale: boolean,
  ) { }
}