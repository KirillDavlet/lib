import moment from 'moment';

export default class SalarySummary {
  cafeId: number;
  cafeName: string;
  roleId: number;
  roleName: string;
  userId: number;
  lastName: string;
  firstName: string;
  middleName: string;
  sumWorkedMinutes: number;
  workedShifts: number;
  sumSalaryAmount: number;
  sumSalaryAmountReward: number;
  sumSalaryHistoryAmount: number;

  constructor(params: any = {}) {
    this.cafeId = params.cafeId || 0;
    this.cafeName = params.cafeName || '';
    this.roleId = params.roleId || 0;
    this.roleName = params.roleName || '';
    this.userId = params.userId || 0;
    this.lastName = params.lastName || '';
    this.firstName = params.firstName || '';
    this.middleName = params.middleName || '';
    this.sumWorkedMinutes = params.sumWorkedMinutes || 0;
    this.workedShifts = params.workedShifts || 0;
    this.sumSalaryAmount = params.sumSalaryAmount || 0;
    this.sumSalaryAmountReward = params.sumSalaryAmountReward || 0;
    this.sumSalaryHistoryAmount = params.sumSalaryHistoryAmount || 0;
  }

  public get fullName() {
    return this.lastName + ' ' + this.firstName + ' ' + this.middleName;
  }
  public get jobName() {
    return this.roleName + ' ' + this.cafeName;
  }
  public get timeSummary() {
    const durationHours = Math.floor(
      Math.abs(
        moment.duration(Number(this.sumWorkedMinutes), 'minutes').asHours()
      )
    );
    const durationMinutes = moment
      .duration(Number(this.sumWorkedMinutes), 'minutes')
      .subtract(moment.duration(durationHours, 'hours'))
      .asMinutes();
    return durationHours + 'ч. ' + durationMinutes + 'м. ';
  }
}
