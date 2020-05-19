import { v4 as uuidv4 } from 'uuid';

export default class SupplierContactModel {
  id: number = 0;
  lastName: string = '';
  firstName: string = '';
  middleName: string = '';
  phone: string = '';
  email: string = '';
  position: string = '';

  _isEdit: boolean = false;
  _id: string = uuidv4();

  constructor(params: any = {}) {
    Object.assign(this, params);
  }

  get _isNew() {
    return this.id ? false : true;
  }
}
