export default class AccessPermission {
  access: boolean = false;
  children: any;
  name: string = '';

  constructor(params?: any) {
    if (params) {
      Object.assign(this, params);
    }
  }
}
