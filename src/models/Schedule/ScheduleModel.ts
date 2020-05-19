import { WorkerScheduleModel } from './WorkerScheduleModel';

import { v4 as uuidv4 } from 'uuid';

export class ScheduleModel {
  _id: string = uuidv4();
  _isEdit: boolean = false;

  date: string = '';
  timeCafe: TimeCafe = {
    open: '',
    close: ''
  };
  workersSchedule: WorkerScheduleModel[] = [];

  constructor(params?: any) {
    if (params) {
      Object.assign(this, params);
    }
  }
}

interface TimeCafe {
  open: string;
  close: string;
}
