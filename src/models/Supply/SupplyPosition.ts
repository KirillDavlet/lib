import { v4 as uuidv4 } from 'uuid';

export class SupplyPosition {
  id: number = 0;
  amount: number | null = null;
  packaging: number | null = null;
  price!: number;
  stock_name: string = '';
  stock_supply_id: number = 0;
  sum: number = 0;
  unit_name: string = 'шт.';

  _isValid: boolean = false;
  _id: string = uuidv4();

  constructor(params?: any) {
    if (params) {
      Object.assign(this, params);
    }
  }

  get _isValidPackaging() {
    if (this.unit_name == 'шт.') {
      return true;
    } else {
      return this.packaging && this.packaging >= 1 ? true : false;
    }
  }
  get _amount() {
    return this.amount;
  }
  set _amount(value: any) {
    if (new RegExp(/^\d+$/).test(value.toString())) {
      this.amount = value;
    } else {
      this.amount = null;
    }
  }
  get _packaging() {
    return this.packaging;
  }
  set _packaging(value: any) {
    if (new RegExp(/^\d+$/).test(value.toString())) {
      this.packaging = value;
    } else {
      this.packaging = null;
    }
  }
}
