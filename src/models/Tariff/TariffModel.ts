import moment from 'moment-timezone';
export class TariffModel {
  public rateName: string = '';
  public hour: string = '';
  public minute: string = '';
  public stopCheck: string = '';
  public timeStart: string = '';
  public timeEnd: string = '';
  public timeZoneHour: string = '';
  public timeZoneMinute: string = '';

  constructor(params?: any) {
    if (params) {
      Object.assign(this, params);
    }
  }

  get _localTimeStart() {
    return this.timeStart
      ? moment
          .utc(this.timeStart, 'HH:mm')
          .tz(moment().tz())
          .format('HH:mm')
      : '';
  }
  set _localTimeStart(value) {
    this.timeStart = moment(value, 'HH:mm')
      .utc()
      .format('HH:mm');
  }
  get _localTimeEnd() {
    return this.timeEnd
      ? moment
          .utc(this.timeEnd, 'HH:mm')
          .tz(moment().tz())
          .format('HH:mm')
      : '';
  }
  set _localTimeEnd(value) {
    this.timeEnd = moment(value, 'HH:mm')
      .utc()
      .format('HH:mm');
  }
  get isDirtyTimeZone() {
    return this.timeStart != '' ||
      this.timeEnd != '' ||
      this.timeZoneHour != '' ||
      this.timeZoneMinute != ''
      ? true
      : false;
  }
}
