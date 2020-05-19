export class OddsSaleModel {
  averageCheck: number;
  cash: number;
  clientAmount: number;
  date: string;
  newClient: number;
  nonCash: number;
  sum: number;
  transactionAmount: number;

  constructor(params: any = {}) {
    this.averageCheck = params.averageCheck ? Number(params.averageCheck) : 0;
    this.clientAmount = params.clientAmount ? Number(params.clientAmount) : 0;
    this.cash = params.cash ? Number(params.cash) : 0;
    this.date = params.date ? params.date : '';
    this.newClient = params.newClient ? Number(params.newClient) : 0;
    this.nonCash = params.nonCash ? Number(params.nonCash) : 0;
    this.sum = params.sum ? Number(params.sum) : 0;
    this.transactionAmount = params.transactionAmount
      ? Number(params.transactionAmount)
      : 0;
  }
}
