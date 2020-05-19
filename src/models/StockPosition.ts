import { v4 as uuidv4 } from 'uuid';

export class StockPosition {
  id: number = 0;
  stockFolderId: number = 0;
  stockName: string = '';
  stockAmount: number = 0;
  unit: string = '';
  unitId: number | null = null;

  _id: string = uuidv4();

  constructor(params?: any) {
    if (params) {
      Object.assign(this, params);
    }
  }
}
