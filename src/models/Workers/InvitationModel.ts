import { JobModel } from './Jobs/JobModel';
import WorkerModel from './WorkerModel';

export default class InvitationModel {
  id: number;
  email: string;
  cafe: Cafe;
  job: JobModel;
  createdUser: WorkerModel;
  createdAt: string;

  constructor(params: any = {}) {
    this.id = params.id || 0;
    this.email = params.email || '';
    this.cafe = new Cafe(params.cafe || {});
    this.job = new JobModel(params.job || {});
    this.createdUser = new WorkerModel(params.createdUser || {});
    this.createdAt = params.createdAt || '';
  }

  get jobName() {
    const cafeName = this.cafe !== null ? this.cafe.name : '';
    return this.job.name + ' ' + cafeName;
  }
}

class Cafe {
  id: number = 0;
  name: string = '';

  constructor(params: any = {}) {
    Object.assign(this, params);
  }
}
