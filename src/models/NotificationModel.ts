import { v4 as uuidv4 } from 'uuid';

export class NotificationModel {
  status: string = 'info';
  text: string = '';
  timeout: number = 6000;

  _id: string = uuidv4();

  constructor(params?: any) {
    if (params) {
      Object.assign(this, params);
    }
  }
}
