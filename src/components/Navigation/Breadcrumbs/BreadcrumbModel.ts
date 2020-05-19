export class BreadcrumbModel {
  id?: any = null;
  name?: string = '';
  isDotted?: boolean = false;
  isDivider?: boolean = false;

  constructor(params: BreadcrumbModel) {
    Object.assign(this, params);
  }
}
