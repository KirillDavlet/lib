import moment from 'moment-timezone';
import { StockPosition } from '../StockPosition';
import { MenuPositionModel } from '../Menu/MenuPositionModel';
import { MenuFolderModel } from '../Menu/MenuFolderModel';
import { v4 as uuidv4 } from 'uuid';

export default class LoyaltyProgram {
  public id: number = 0;
  public title: string = '';
  public unlimited: boolean = true;
  public periodStart: string = '';
  public periodEnd: string = '';
  public loyaltyType: string = '';
  public loyaltyTypeName: string = '';
  public discount: number | null = null;
  public discountType: string = '';
  public discountTypeName: string = '';
  public discountConditions: DiscountCondition[] = [];
  public excludeStock: StockPosition[] = [];
  public excludeMenuFolders: MenuFolderModel[] = [];
  public excludeMenuPositions: MenuPositionModel[] = [];
  public bonusPercent: number | null = null;
  public bonusRegister: number | null = null;
  public bonusMaxPayPercent: number | null = null;
  public default: number | null = null;

  constructor(params?: any) {
    if (params) {
      Object.assign(this, params);
    }
    this.discountConditions = this.discountConditions.map(
      (i: any) => new DiscountCondition(i)
    );
  }

  get _localPeriodStart() {
    return this.periodStart
      ? moment
          .utc(this.periodStart)
          .tz(moment().tz())
          .format('YYYY-MM-DD')
      : '';
  }
  set _localPeriodStart(value) {
    this.periodStart = moment(value)
      .hours(moment().hours())
      .minutes(moment().minutes())
      .utc()
      .format('YYYY-MM-DD');
  }
  get _localPeriodEnd() {
    return this.periodEnd
      ? moment
          .utc(this.periodEnd)
          .tz(moment().tz())
          .format('YYYY-MM-DD')
      : '';
  }
  set _localPeriodEnd(value) {
    this.periodEnd = moment(value)
      .hours(moment().hours())
      .minutes(moment().minutes())
      .utc()
      .format('YYYY-MM-DD');
  }
  get _isNew() {
    return this.id ? false : true;
  }
}

export class DiscountCondition {
  public purschaseAt: number | null = null;
  public percent: number | null = null;
  public bonusMaxPayPercent: number | null = null;

  _id: string = uuidv4();
  _undeletable: boolean = false;

  constructor(params?: any) {
    if (params) {
      Object.assign(this, params);
    }
  }
}
