import store from '@/store';
import { SellingGuestModel } from '../Tables/SellingGuestModel';
import { SellingPositionModel } from '../Tables/SellingPositionModel';

import { v4 as uuidv4 } from 'uuid';

export class FiscalItemModel {
  _id: string = uuidv4();
  name: string = '';
  amount: number = 0;
  priceWithoutDiscount: number = 0;
  sum: number = 0;
  sumWithoutDiscount: number = 0;
  ndsType: number = -1;
  dep: number = 0;
  ean13: number | null = null;
  payMethod: number = 4;
  type: number = 1;
  sellingItem!: SellingGuestModel | SellingPositionModel;
  sellingType: string = '';

  constructor(params?: any) {
    if (params) {
      Object.assign(this, params);
    }
  }
}
