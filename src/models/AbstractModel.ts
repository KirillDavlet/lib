import { ObjectSchema } from 'yup';
import { jsonIgnore, jsonIgnoreReplacer } from '@/utils/jsonIgnore';

export default class AbstractModel {
  @jsonIgnore() protected validationSchema: ObjectSchema | null = null;

  public json(): Object {
    return JSON.parse(JSON.stringify(this, jsonIgnoreReplacer));
  }

  get _isValid() {
    return this.validationSchema
      ? this.validationSchema.isValidSync(this)
      : true;
  }
}
