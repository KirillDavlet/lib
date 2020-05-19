import { ClientModel } from '../ClientModel';
import { v4 as uuidv4 } from 'uuid';

export class SellingGuestModel {
  sellingId: number = 0;
  menuTimeRateId: number | null = null;
  dateOpenSelling: string | null = null;
  amount: string | null = null;
  priceMenu: string | null = null;
  sum: number = 0;
  firstCheck: string | null = null;
  client: ClientModel | null = null;
  clientId: number = 0;
  inFiscal: boolean = false;

  _id: string = uuidv4();

  constructor(params: any = {}) {
    if (params) {
      Object.assign(this, params);
    }
    this.client = params.client ? new ClientModel(params.client) : null;
  }
}
