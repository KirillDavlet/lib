import { v4 as uuidv4 } from 'uuid';

export class IngredientModel {
  _id: string = uuidv4();

  stockId: number = 0;
  amount: number | null = null;
  name: string = '';
  unit: string = '';

  constructor(params?: any) {
    if (params) {
      Object.assign(this, params);
    }
  }

  get _isValid() {
    return this.amount ? true : false;
  }
}
