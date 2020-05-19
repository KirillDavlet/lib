import SupplierContactModel from './SupplierContactModel';

export default class SupplierModel implements SuppliersInterface {
  id: number;
  nameAlias: string;
  addressFact: string;
  phone1: string;
  phone2: string;
  inn: number;
  ogrn: number;
  kpp: number;
  name: string;
  nameFull: string;
  dateFounding: string;
  addressLegal: string;
  status: string;
  contacts: SupplierContactModel[];

  public constructor(params: any = {}) {
    this.id = params.id || 0;
    this.nameAlias = params.nameAlias || '';
    this.addressFact = params.addressFact || '';
    this.phone1 = params.phone1 || '';
    this.phone2 = params.phone2 || '';
    this.inn = params.inn || 0;
    this.ogrn = params.ogrn || 0;
    this.kpp = params.kpp || 0;
    this.name = params.name || '';
    this.nameFull = params.nameFull || '';
    this.dateFounding = params.dateFounding || '';
    this.addressLegal = params.addressLegal || '';
    this.status = params.status || '';
    this.contacts = params.contacts
      ? params.contacts.map((i: any) => new SupplierContactModel(i))
      : [];
  }

  get _isNew() {
    return this.id ? false : true;
  }
}

interface SuppliersInterface {
  id: number;
  nameAlias: string;
  addressFact: string;
  phone1: string;
  phone2: string;
  inn: number;
  ogrn: number;
  kpp: number;
  name: string;
  nameFull: string;
  dateFounding: string;
  addressLegal: string;
  status: string;
  contacts: SupplierContactModel[];
}
