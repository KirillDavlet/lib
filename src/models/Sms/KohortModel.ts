export class KohortModel {
  id: number = 0;
  name: string = '';
  selected: boolean = false;

  constructor(params: any = {}) {
    Object.assign(this, params);
  }
}
