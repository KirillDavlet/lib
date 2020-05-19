import { UserModel } from '../UserModel';
import { JobModel } from './Jobs/JobModel';
import CafeModel from '../CafeModel';

export default class WorkerModel implements UserModel {
  id: number;
  userId: number;
  firstName: string;
  lastName: string;
  middleName: string;
  groupName: string;
  initials: string;
  birthDate: string;
  email: string;
  phone: string;
  phoneSmsConfirm!: boolean;
  timezone!: string;
  avatar: string;
  jobs: JobModel[];
  appointment: any[];
  cafes: CafeModel[];
  salaryBalance: number | null;
  canCreateNewCafe: boolean;

  constructor(params: any = {}) {
    this.id = params.id || 0;
    this.userId = params.userId || 0;
    this.firstName = params.firstName || '';
    this.lastName = params.lastName || '';
    this.middleName = params.middleName || '';
    this.initials = params.initials || '';
    this.groupName = params.groupName || '';
    this.birthDate = params.birthDate || '';
    this.email = params.email || '';
    this.phone = params.phone || '';
    this.avatar = params.avatar || '/icons/profile-image.png';
    this.jobs = params.jobs ? params.jobs.map((i: any) => new JobModel(i)) : [];
    this.appointment = params.appointment || [];
    this.cafes = params.cafes
      ? params.cafes.map((i: any) => new CafeModel(i))
      : [];
    this.salaryBalance = params.salaryBalance || null;
    this.canCreateNewCafe = params.canCreateNewCafe || false;
  }

  public get fullName() {
    return this.lastName + ' ' + this.firstName + ' ' + this.middleName;
  }
  public get fullNameShort() {
    return this.initials;
  }
  public get jobList() {
    return this.jobs
      .map((i: JobModel) => {
        const cafeName = i.cafe !== null ? i.cafe.name : '';
        return i.name + ' ' + cafeName;
      })
      .join(', ');
  }
}
