import { v4 as uuidv4 } from 'uuid';

export class JobSalary {
  public fixedRateType: RateType | null;
  public fixedRateAmount: number | null;
  public reward: RewardCondition[];
  public excludesMenu: number[];
  public excludesMenuFolder: number[];

  constructor(params: any = {}) {
    this.fixedRateType = params.fixedRateType || null;
    this.fixedRateAmount = params.fixedRateAmount || null;
    this.reward = params.reward
      ? params.reward.map((i: any) => new RewardCondition(i))
      : [];
    this.excludesMenu = params.excludesMenu || [];
    this.excludesMenuFolder = params.excludesMenuFolder || [];
  }

  get _isValid() {
    let valid: boolean = true;
    if (this.reward.length > 0) {
      if (this.reward.find((i: RewardCondition) => !i._isValid)) {
        valid = false;
      }
    }
    return valid;
  }
}

interface RateType {
  id: string;
  name: string;
}

export class RewardCondition {
  public type: string = 'shift';
  public fromSum: number | null = null;
  public amount: number | null = null;
  public amountType: string = 'percent';

  _id: string = uuidv4();
  _undeletable: boolean = false;
  _isValid: boolean = true;

  constructor(params: any = {}) {
    Object.assign(this, params);
  }
}
