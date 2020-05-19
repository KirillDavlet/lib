import { JobSalary } from './JobSalary';
import { JobPermission } from './JobPermission';
import { v4 as uuidv4 } from 'uuid';

export class JobModel {
  id: number;
  name: string;
  cafe: Cafe;
  type: JobType;
  permissions: JobPermission[] = [];
  salary: JobSalary;
  cafeId: number;

  _id: string = uuidv4();

  constructor(params: any = {}) {
    const defaults = defaultParams();
    this.id = params.id || params.roleId || defaults.id;
    this.name = params.name || params.roleName || defaults.name;
    this.cafe = new Cafe(params.cafe || defaults.cafe);
    this.type = params.type || defaults.type;
    this.permissions = params.permissions || defaults.permissions;
    this.salary = params.salary
      ? new JobSalary(params.salary)
      : defaults.salary;
    this.cafeId = params.cafeId || defaults.cafeId;
  }

  setDefaults() {
    Object.assign(this, defaultParams());
  }

  get typeName() {
    return this.type ? this.type.name : '';
  }
  get _isNew() {
    return this.id ? false : true;
  }
}

const defaultParams = () => {
  return {
    id: 0,
    name: '',
    cafe: {
      id: 0,
      name: ''
    },
    type: null,
    permissions: [],
    salary: new JobSalary(),
    cafeId: 0
  };
};
interface JobType {
  id: number;
  name: string;
}
class Cafe {
  id: number = 0;
  name: string = '';

  constructor(params: any = {}) {
    Object.assign(this, params);
  }
}
