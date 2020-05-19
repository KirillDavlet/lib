export default class CafeModel {
  id: number;
  name: string;

  constructor(params: any = {}) {
    this.id = params.id || 0;
    this.name = params.name || '';
  }
}
