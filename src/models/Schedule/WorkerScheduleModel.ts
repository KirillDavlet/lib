import { UserModel } from '../UserModel';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment-timezone';

export class WorkerScheduleModel {
  _id: string = uuidv4();

  userId: number = 0;
  scheduleId: number = 0;
  startShift: string = '';
  endShift: string = '';
  user: UserModel | null = null;
  date: string = '';

  constructor(params?: any) {
    if (params) {
      Object.assign(this, params);
    }
  }

  get _localStartShift() {
    return this.startShift
      ? moment
          .utc(this.startShift, 'HH:mm')
          .tz(moment().tz())
          .format('HH:mm')
      : '';
  }
  set _localStartShift(value) {
    this.startShift = value
      ? moment(value, 'HH:mm')
          .utc()
          .format('HH:mm')
      : '';
  }
  get _localEndShift() {
    return this.endShift
      ? moment
          .utc(this.endShift, 'HH:mm')
          .tz(moment().tz())
          .format('HH:mm')
      : '';
  }
  set _localEndShift(value) {
    this.endShift = value
      ? moment(value, 'HH:mm')
          .utc()
          .format('HH:mm')
      : '';
  }
  get isDirtyTimeShift() {
    return this.startShift != '' || this.endShift != '' ? true : false;
  }
}
