import moment from 'moment';
import LoyaltyProgram from './Loyalty/LoyaltyProgramModel';

export class ClientModel {
  id: any = null;
  firstName: string = '';
  lastName: string = '';
  middleName: string = '';
  phone: number | null = null;
  email: string = '';
  dob: string = '';
  loyaltyId: number | null = null;
  loyaltyProgram: LoyaltyProgram | null = null;
  bonus: number = 0;
  conversion_id: any = null;
  bonusBalance: number = 0;
  cardNumber: number | null = null;
  loyaltyBillSum: number = 0;
  averageBillSum: number | string = 0;
  numberOfVisits: number = 0;
  lastVisitAt: string = '';
  comment: string = '';
  sex: any = null;
  sms_allow: number = 1;
  qr_code: number = 0;

  constructor(params?: any) {
    if (params) {
      Object.assign(this, params);
    }
  }

  public update(values: any) {
    const self: any = this;
    Object.keys(this).forEach((key: string) => {
      if (values.hasOwnProperty(key)) {
        self[key] = values[key];
      }
    });
  }

  get fullName() {
    return (
      (this.lastName || '') +
      ' ' +
      (this.firstName || '') +
      ' ' +
      (this.middleName || '')
    );
  }
  get fullNameShort() {
    return (
      this.lastName +
      ' ' +
      this.firstName.substr(0, 1) +
      '. ' +
      this.middleName.substr(0, 1) +
      '.'
    );
  }
  get dynamicName() {
    if (this.lastName && this.firstName) {
      return this.lastName + ' ' + this.firstName;
    } else if (this.lastName || this.firstName) {
      return this.lastName ? this.lastName : this.firstName;
    }
    return '';
  }
  get averageCheck() {
    const sum: number =
      typeof this.averageBillSum === 'string'
        ? Number(this.averageBillSum)
        : this.averageBillSum;
    return sum / this.numberOfVisits;
  }
}
