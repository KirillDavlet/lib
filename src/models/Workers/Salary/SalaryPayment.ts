export default class SalaryPayment {
  id!: number;
  type!: Type;
  amount: number;
  withdrawFrom: string;
  comment: string;
  salaryUserBalanceAfterTransaction: number;
  createdUserId: number;
  createdUserFio: number;
  createdAt: string;

  constructor(params: any = {}) {
    this.id = params.id || null;
    this.type = params.type || null;
    this.amount = params.amount || null;
    this.withdrawFrom = params.withdrawFrom || null;
    this.comment = params.comment || null;
    this.salaryUserBalanceAfterTransaction =
      params.salaryUserBalanceAfterTransaction || null;
    this.createdUserId = params.createdUserId || null;
    this.createdUserFio = params.createdUserFio || null;
    this.createdAt = params.createdAt || null;
  }

  get typeName() {
    switch (this.type) {
      case 'income': {
        return 'Начисление ЗП';
      }
      case 'payment': {
        return 'Выплата ЗП';
      }
      case 'reward': {
        return 'Премия';
      }
      case 'penalty': {
        return 'Штраф';
      }
    }
  }
}

enum Type {
  income = 'income',
  payment = 'payment',
  reward = 'reward',
  penalty = 'penalty'
}
