import moment from 'moment';

export default class SalaryShift {
  id!: number;
  cafeId: number;
  cafeName: string;
  roleId: number | null;
  roleName: string;
  start: string;
  end: string;
  changeId: number | null;
  open: string | null;
  close: string | null;
  workedMinutes: number;
  salaryAmount: number;
  salaryAmountReward: number;

  constructor(params: any = {}) {
    this.id = params.id || null;
    this.cafeId = params.cafeId || 0;
    this.cafeName = params.cafeName || '';
    this.roleId = params.roleId || 0;
    this.roleName = params.roleName || '';
    this.start = params.start || null;
    this.end = params.end || null;
    this.changeId = params.changeId || null;
    this.open = params.open || null;
    this.close = params.close || null;
    this.workedMinutes = params.workedMinutes || 0;
    this.salaryAmount = params.salaryAmount || 0;
    this.salaryAmountReward = params.salaryAmountReward || 0;
  }

  public get timeSummary() {
    const durationHours = Math.floor(
      Math.abs(moment.duration(Number(this.workedMinutes), 'minutes').asHours())
    );
    const durationMinutes = moment
      .duration(Number(this.workedMinutes), 'minutes')
      .subtract(moment.duration(durationHours, 'hours'))
      .asMinutes();
    return durationHours + 'ч. ' + durationMinutes + 'м. ';
  }
}
