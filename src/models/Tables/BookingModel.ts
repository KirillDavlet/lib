import { v4 as uuidv4 } from 'uuid';
import moment from 'moment-timezone';

export class BookingModel {
  id: number = 0;
  addDate: Date | string = new Date();
  comment: string = '';
  commentClient: string = '';
  howManyPeople: number | null = null;
  name: string = '';
  phone: string = '';
  reservationDate: Date | string = new Date();
  status: number = 0;
  tableId: number = 0;

  _id: string = uuidv4();
  _isEditing: boolean = false;
  _isInfoOpen: boolean = false;

  constructor(params?: any) {
    if (params) {
      Object.assign(this, params);
    }
  }

  get isNew() {
    return this.id ? false : true;
  }
  get _reservationDateLocal() {
    return moment
      .utc(this.reservationDate)
      .tz(moment().tz())
      .format('YYYY-MM-DD HH:mm:ss');
  }
}
