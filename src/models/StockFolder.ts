import { v4 as uuidv4 } from 'uuid';

export class StockFolder {
  id: number = 0;
  budgetId: number = 0;
  budgetName: string = '';
  stockFolderId: number = 0;
  folderName: string = '';

  _id: string = uuidv4();

  constructor(params: any = {}) {
    this.id = params.id || 0;
    this.budgetId = params.budgetId || null;
    this.budgetName = params.budgetName || '';
    this.stockFolderId = params.stockFolderId || 1;
    this.folderName = params.folderName || '';
  }
}
