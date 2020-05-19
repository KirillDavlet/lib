import { Component, Emit } from 'vue-property-decorator';
import AbstractInput from '../AbstractInput';

@Component({
  name: 'Select'
})
export default class Select extends AbstractInput {
  @Emit('change')
  change(e: any) {
    return e.target.value;
  }
}
