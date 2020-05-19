import { IngredientModel } from './IngredientModel';
import AbstractModel from '../AbstractModel';
import { jsonIgnore } from '@/utils/jsonIgnore';

import { v4 as uuidv4 } from 'uuid';

export class MenuPositionModel extends AbstractModel {
  id: number;
  parentFolderId: number;
  positionName: string;
  amount: number;
  price: number | undefined;
  priceType: string;
  stockWriteOff: IngredientModel[];
  canChangeAmount: boolean;
  amountInPercent: number;
  description: string;
  visibleInClientApp: boolean;
  durationDefault: boolean;
  durationUnit: string | null;
  durationAmount: number | null;
  photo: string | null;

  _id: string = uuidv4();

  constructor(params: any = {}) {
    super();
    this.id = params.id || 0;
    this.parentFolderId = params.parentFolderId || 1;
    this.positionName = params.positionName || '';
    this.amount = params.amount;
    this.price = params.price;
    this.priceType = params.priceType || 'fixed';
    this.stockWriteOff = params.stockWriteOff
      ? params.stockWriteOff.map((i: any) => new IngredientModel(i))
      : [];
    this.canChangeAmount = params.canChangeAmount || false;
    this.amountInPercent = params.amountInPercent || 100;
    this.description = params.description || '';
    this.visibleInClientApp = params.visibleInClientApp || true;
    this.durationDefault = params.durationDefault || false;
    this.durationUnit = params.durationUnit || '';
    this.durationAmount = params.durationAmount || null;
    this.photo = params.photo || null;
  }

  @jsonIgnore()
  get isNew() {
    return this.id ? false : true;
  }
}
