export class PaymentModel {
  public category: string = '';
  public type: string = '';
  public budgetNameId: any = 0;
  public worker: number = 0;
  public balanceId: number = 0;
  public amount: number | null = null;
  public comment: string = '';

  constructor(params?: any) {
    if (params) {
      const paramsWithDefaults: any = {};
      Object.keys(this.defaults).forEach((key: string) => {
        if (params.hasOwnProperty(key)) {
          paramsWithDefaults[key] = params[key];
        } else {
          paramsWithDefaults[key] = this.defaults[key];
        }
      });
      Object.assign(this, paramsWithDefaults);
    } else {
      this.setDefaults();
    }
  }

  public setDefaults() {
    Object.assign(this, this.defaults);
  }

  private defaults: any = {
    category: '',
    type: '',
    budgetNameId: 0,
    worker: 0,
    balanceId: 0,
    amount: null,
    comment: ''
  };
}
