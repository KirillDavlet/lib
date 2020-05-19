import { MenuPositionModel } from '@/models/Menu/MenuPositionModel';
import { Subject } from 'rxjs';

export class JobMenuPositionModel extends MenuPositionModel {
  checked: boolean = true;
  emmiter: Subject<JobMenuPositionModel>;

  constructor(params?: any) {
    super(params);
    this.emmiter = new Subject();
  }

  get _checked() {
    return this.checked;
  }
  set _checked(value: boolean) {
    this.checked = value;
    this.emmiter.next(this);
  }
}
