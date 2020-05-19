export class ClientModel {
  id: number = 0;
  uud: number = 55454545;
  selected: boolean = false;

  constructor(params: any = {}) {
    Object.assign(this, params);
  }
}
