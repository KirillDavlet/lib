import { v4 as uuidv4 } from 'uuid';

export class CheckStringModel {
  _id: string = uuidv4();
  name: string = '';

  constructor(params?: any) {
    if (params) {
      Object.assign(this, params);
    }
  }
}
