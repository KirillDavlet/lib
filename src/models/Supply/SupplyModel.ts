import { SupplyPosition } from './SupplyPosition';
import moment from 'moment-timezone';
import { v4 as uuidv4 } from 'uuid';

export class SupplyModel {
  id: number = 0;
  amount: number = 0;
  comment: string = '';
  fio: string = '';
  sum: number = 0;
  suppliersName: string = '';
  suppliersId: number = 0;
  depositName: string = '';
  depositId: number = 0;
  supplyDate: string = '';
  positions: SupplyPosition[] = [];

  _id: string = uuidv4();

  constructor(params?: any) {
    if (params) {
      Object.assign(this, params);
    }
  }

  get _localSupplyDate() {
    return this.supplyDate
      ? moment
          .utc(this.supplyDate, 'HH:mm')
          .tz(moment().tz())
          .format('HH:mm')
      : '';
  }
  set _localSupplyDate(value) {
    this.supplyDate = moment(value, 'HH:mm')
      .utc()
      .format('HH:mm');
  }
}
