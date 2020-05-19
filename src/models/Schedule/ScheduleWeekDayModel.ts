import moment from 'moment-timezone';

export default class ScheduleWeekDay {
  public dayWeek: string = '';
  public open: string = '';
  public close: string = '';

  constructor(params?: any) {
    if (params) {
      Object.assign(this, params);
    }
  }

  get _localOpen() {
    return moment
      .utc(this.open, 'HH:mm')
      .tz(moment().tz())
      .format('HH:mm');
  }
  set _localOpen(value) {
    this.open = moment(value, 'HH:mm')
      .utc()
      .format('HH:mm');
  }
  get _localClose() {
    return moment
      .utc(this.close, 'HH:mm')
      .tz(moment().tz())
      .format('HH:mm');
  }
  set _localClose(value) {
    this.close = moment(value, 'HH:mm')
      .utc()
      .format('HH:mm');
  }
}
