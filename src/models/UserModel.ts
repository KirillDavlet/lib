import { JobModel } from './Workers/Jobs/JobModel';

export class UserModel {
  id: number = 0;
  userId: number = 0;
  firstName: string;
  lastName: string;
  middleName: string;
  groupName: string;
  initials: string;
  email: string;
  phone: string;
  phoneSmsConfirm: boolean;
  avatar: string;
  timezone: string;
  appointment: JobModel[];
  canCreateNewCafe: boolean;

  constructor(params: any = {}) {
    this.id = params.id || 0;
    this.userId = params.userId || 0;
    this.firstName = params.firstName || '';
    this.lastName = params.lastName || '';
    this.middleName = params.middleName || '';
    this.initials = params.initials || '';
    this.groupName = params.groupName || '';
    this.email = params.email || '';
    this.phone = params.phone || '';
    this.phoneSmsConfirm = params.phoneSmsConfirm || false;
    this.avatar = params.avatar || '/icons/profile-image.png';
    this.timezone = params.timezone || 'Europe/Moscow';
    this.appointment = params.appointment
      ? params.appointment.map((i: any) => new JobModel(i))
      : [];
    this.canCreateNewCafe = params.canCreateNewCafe || false;
  }

  public get fullName() {
    return this.lastName + ' ' + this.firstName + ' ' + this.middleName;
  }
  public get fullNameShort() {
    return this.initials;
  }
}
