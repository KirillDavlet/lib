export class FilterModel {
  public sex: any = '';
  public recency: any = '';
  public recencyCondition: any = '';
  public recencyValue: any = '';
  public frequency: any = '';
  public frequencyCondition: any = '';
  public frequencyValue: any = '';
  public monetary: any = '';
  public monetaryCondition: any = '';
  public monetaryValue: any = '';
  public cohorts: any[] = [];

  constructor(params?: any) {
    if (params) {
      //const paramsWithDefaults: any = {};
      // Object.keys(defaults).forEach((key: string) => {
      //   if (params.hasOwnProperty(key)) {
      //     paramsWithDefaults[key] = params[key];
      //   } else {
      //     paramsWithDefaults[key] = defaults[key];
      //   }
      // });
      Object.assign(this, params);
    } else {
      this.setDefaults();
    }
  }

  public setDefaults() {
    Object.assign(this, defaults());
  }
  public isParameterDefault(key: string) {
    // const self: any = this;
    // return (self[key] == defaults[key]);
    return false;
  }

  get isDefault() {
    return JSON.stringify(this) === JSON.stringify(defaults());
  }
  get cohortsLenght() {
    return this.cohorts.length;
  }
}

const defaults = function() {
  return {
    sex: '',
    recency: '',
    recencyCondition: '',
    recencyValue: '',
    frequency: '',
    frequencyCondition: '',
    frequencyValue: '',
    monetary: '',
    monetaryCondition: '',
    monetaryValue: '',
    cohorts: []
  };
};
