import { round } from '@/utils/numbers';

import { v4 as uuidv4 } from 'uuid';
export class SellingPositionModel {
  sellingId: number;
  guestSellingId: number | null;
  menuId: number | null;
  positionName: string | null;
  amount: any;
  priceMenu: number | null;
  sum: number;
  firstCheck: string | null;
  inFiscal: boolean;
  canChangeAmount: boolean;
  amountInPercent: number;
  _id: string;

  constructor(params: any = {}) {
    this.sellingId = params.sellingId || 0;
    this.guestSellingId = params.guestSellingId || 0;
    this.menuId = params.menuId || null;
    this.positionName = params.positionName || '';
    this.amount = round(params.amount) || null;
    this.priceMenu = params.priceMenu || null;
    this.sum = round(params.sum) || 0;
    this.firstCheck = params.firstCheck || null;
    this.inFiscal = params.inFiscal || false;
    this.canChangeAmount = params.canChangeAmount || false;
    this.amountInPercent = params.amountInPercent || 100;
    this._id = uuidv4();
  }

  public update(values: any) {
    const self: any = this;
    Object.keys(values).forEach((key: string) => {
      if (this.hasOwnProperty(key)) {
        self[key] = values[key];
      }
    });
  }
}
