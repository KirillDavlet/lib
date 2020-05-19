import { Component, Prop } from 'vue-property-decorator';
import AbstractInput from '../AbstractInput';

@Component({
  name: 'Textarea'
})
export default class Textarea extends AbstractInput {
  @Prop() length!: number;
  get symbolLength() {
    return this.value.length;
  }

  get differenceSymbol() {
    if (this.length) {
      return this.symbolLength < this.length;
    }
  }
}
